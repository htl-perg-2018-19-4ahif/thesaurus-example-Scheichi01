import fs = require('fs');
import rd = require('readline');

process.argv.splice(0, 2);
let foundWord: boolean = false;
let fileContent: String = fs.readFileSync('openthesaurus.txt', 'utf8').toString();
let lines: String[] = fileContent.split('\n');

if(!(process.argv.length === 0)){
for (let k = 0; k < process.argv.length; k++) {
    console.log('Results for argument ' + (k+1) + ' (\"' + process.argv[k] + '\"):');
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].indexOf(process.argv[k]) >= 0) {
            foundWord = true;
            let synonyms: String[] = lines[i].split(';');
            for (let j = 0; j < synonyms.length; j++) {
                if (!(synonyms[j].indexOf(process.argv[k]) >= 0)) {
                    console.log(synonyms[j] + ' ');
                }
            }
        }
    }
    if (!foundWord) {
        console.error('No matches for \"' + process.argv[k] + '\"');
    }
    foundWord = false;
}
}else console.error('Please specify words');
