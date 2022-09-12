# Portfolio of Evidence

This repository contains all the projects I have created and have been apart of.

## 1. First Website

This was the first website I was tasked to create. I was told to make a website about my favourite film or series at the time. 

There are a couple fonts you will need to install in the /css/Fonts directory

Click index.html to view the project!

## 2. Second Year Visual Design Website

In my second year of university, I was tasked with curating a website that best describes me with all the projects I managed to make in that year. I focused on putting my entire personality in these projects to best promote myself.

I created an interactive advertisement of a logo I was given, an interactive website of an infographic I was given and for the last project I was told to make a lyric video of a song. The lyric video ended up being the most challenge and my favourite project that year.

Click index.html to view the project!

## 3. Short Film

In third year, all our projects were group work. One of the projects was a short horror film. Given my love for film, I asked my group members if I could take on the challenge writing, directing and editing the film. By the end of the project, I wrote, directed and co-edited the film. I also decided to do some location scouting for the film. The planning documentation is in this corresponding folder. The file size of the film was too big for GitHub so [here](https://drive.google.com/file/d/1MBurvi5lTWvHKvxLrh2Ugtc4rBtpvCkw/view?usp=sharing) it is via Google Drive. [Here](https://drive.google.com/file/d/1SoDf7LpXRIdO9UJSJKe02va2LssMYfxC/view?usp=sharing) is the 30 second trailer.

## 4. Video Game Group Project
Our final year project was a video game made in any engine we wanted. We decided to make a 2D puzzle-platformer. I was tasked with the level design, level functionality and level style. The game logic was split amongst us and I was tasked with the movement controls of the character. The file size of the lets play video was too big for GitHub so [here](https://drive.google.com/file/d/1SoDf7LpXRIdO9UJSJKe02va2LssMYfxC/view?usp=sharing) is the file in Google Drive.

## 5. CV Parser
In my honours year, I was put in a group tasked with making a web application that allowed for HR employees to upload applicant CVs and get a comprehensive and summative look at the CVs. I challenged myself to make the python script that handled the parsing of the CVs. I used an NLP python library called spaCy and a pdf to text python library called pdfminder. With these libraries I was able to successfully tokenize and parse the uploaded CV. Due to time constraints, I could not model my own dataset of skills and used a open source skill dataset from jobzilla. 

you will need to install the libraries as such to run the python script:

install spaCy:
```powershell
pip install -U pip setuptools wheel
```
```powershell
pip install -U spacy
```
```powershell
python -m spacy download en_core_web_lg
```
install pdfminer:
```powershell
#installs pdfminer
pip install pdfminer
```

to run the project:

```python
python Final_Resume_Parser.py
```

If you would like to test it on other CVs. On line 25 of the python script is where to change the file:
```python
text = convertToText("Curriculum_Vitae_Final.pdf")
```
change the filename and remember to add it to the directory!
