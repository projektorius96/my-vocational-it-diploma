import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
import { createWriteStream } from 'node:fs';
import Tesseract from 'tesseract.js';
import translate from 'google-translate-api-x';

// CONSTANTS
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const currentPage = ( 1 ); // DEV_NOTE: insert current page of choice to be OCR readed & translated (for initially translation you will need internet connection)
const SAVE_TO_FILE_PATHSPEC = `./translations/bit_diploma__page${ currentPage }--translation.txt`;
const machine = createWriteStream(SAVE_TO_FILE_PATHSPEC);

let progressDone = false;
Tesseract.recognize(
    fileURLToPath(`file://${__dirname}/translations/bit_diploma__page${ currentPage }.png`),
    'lit',
    { 
        logger: (txt) => {
            
            txt.progress == 1 ? progressDone = true : progressDone ;
            
        }
    }
).then(({ data: { text } }) => {
    if(progressDone) {
        translate(text, {from: 'lt', to: 'en'}).then(({text})=>{
            machine.write(text);
        })
    }
})