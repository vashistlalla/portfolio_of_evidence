from pdfminer.high_level import extract_text
import spacy
from spacy.lang.en.stop_words import STOP_WORDS
import re

def convertToText(fname):
    return extract_text(fname)

EDUCATION = [
    'B.Eng', 'BEng' ,'B.Eng Electrical', 'B.Eng Electronic', 'B.Eng Computer', 'BEng Electrical', 'BEng Electronic', 'BEng Computer',
    'BSc Computer Science', 'B.Sc Computer Science', 'BCom Informatics', 'B.Com Informatics', 'BIS',
    'B Information Systems', 'BIT', 'B Information Technology', 'Multimedia', 'BSc', 'B.Sc', 'BSc Information and Knowledge Systems', 'B.Sc Information and Knowledge Systems'
]

nlp = spacy.load("en_core_web_lg")
#add sentence pipeline
nlp.add_pipe('sentencizer')

skills = "jz_skill_patterns.jsonl"
#add NER pipeline
ruler = nlp.add_pipe("entity_ruler", before="ner")

ruler.from_disk(skills)

text = convertToText("Curriculum_Vitae_Final.pdf")
doc = nlp(text)

#text with no punctuation

#filters unnecessary stop words and remove special characters
filtered = [token.text for token in doc if token.is_stop == False]
text_no_punt = [re.sub('[^a-zA-Z0-9]+', '', _) for _ in filtered]
text_no_punt = [x.lower() for x in text_no_punt]

#extract skills from document
skillArrWithDups = [ent.text for ent in doc.ents if ent.label_ == 'SKILL']
#for i in range(len(skillArrWithDups)):
#    skillArrWithDups[i] = skillArrWithDups[i].upper()

[skill.upper() for skill in skillArrWithDups]

#remove skill duplicates
pureSkillArr = set(skillArrWithDups)


applicantEdu = [i for i in EDUCATION if i.lower() in text_no_punt]
applicantEdu = set(applicantEdu)

print(applicantEdu)
print(pureSkillArr)