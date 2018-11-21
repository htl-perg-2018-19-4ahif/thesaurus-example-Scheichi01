"use strict";
exports.__esModule = true;
var fs = require("fs");
process.argv.splice(0, 2);
var foundWord = false;
var fileContent = fs.readFileSync('openthesaurus.txt', 'utf8').toString();
var lines = fileContent.split('\n');
if (!(process.argv.length === 0)) {
    for (var k = 0; k < process.argv.length; k++) {
        console.log('Results for argument ' + (k + 1) + ' (\"' + process.argv[k] + '\"):');
        for (var i = 0; i < lines.length; i++) {
            if (lines[i].indexOf(process.argv[k]) >= 0) {
                foundWord = true;
                var synonyms = lines[i].split(';');
                for (var j = 0; j < synonyms.length; j++) {
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
}
else
    console.error('Please specify words');
