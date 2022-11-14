# EQ4 framework-based diploma translation

> For TL;DR bulky translation please refer at ./translations/OCR_translation_output.md

### INTRODUCTION

- [source: bit_diploma](https://drive.google.com/file/d/17r5iUf0sG8XogBn5Z8RmwEsniRIWZ5QO/view?usp=sharing) <br>
- credits to [pdftopng](https://pdf2png.com/)

<u>Every file contains `prefix === bit_diploma__pageX`, whereas `X` corresponds to currentPage variable per index.mjs operation . I totally accept the following</u> :

- codebase is bare minimum, it could encompass multiple (bulky) tesseract / translator operations to OCR and translate at once ; <br>
- the OCR output itself largly depends on input (e.g. image) file quality I've personally scanned on the daylight with with application called [camscanner](https://www.camscanner.com/) ; <br>
- the translation output is named as `prefix--translation.txt` with regards to currentPage defined within index.mjs source, the translation itself each time is saved at ./translations with regards to root, whereas index.mjs is located ;
- finally, each translation file quality itself is far from perfect, but lets look at each translation keypoints the human eye could read out:..

### TRANSLATIONS

> ./translations/bit_diploma__page1--translation.png

<pre>
UAB Baltic Technology
vocational training diploma
acquired junior programmer
javascript ... modular vocational training
This level of Lithuanian qualifications IV
European Lifelong Learning Qualifications - Level 4
Director Algirdas Sabaliauskas
</pre>


[Baltic institute of Technology (BIT)](https://bit.lt/)

[European Qualification framework](https://europa.eu/europass/en/european-qualifications-framework-eqf)

> ./translations/bit_diploma__page2--translation.png

<pre>
Vocational Training Diploma
The first half of the sheet in the
List of a person's competencies acquired in order to qualify:
Mandatory competencies:
1. to develop working skills in a real workplace;
2. Design and program web pages user interfaces. Apply software to develop
to the principles and methods of informatics. Create typical software. To analyze different types of requirements that describe
software;
3. To design (NOSQL) databases. Programming and administering data
bases;
4. Use operating systems for official stations. Apply current software development methodologies. To control your own
and the team's own software code creation.
Examination of Excellence:
Theory 10
Practical work 9
</pre>

### INSTALLATION

> 1.1) `npm i` (package.json) or `npm ci` to reproduce identical deps graph (package-lock.json) <br>
1.2) `node index.mjs` (ES6)

### ADDENDUM

- the codebase itself contains [locale].traineddata, whereas [locale] is downloaded (_lately cached?_) based on language used in e.g. `Tesseract.recognize(INPUT_PATH, [locale], ...)`