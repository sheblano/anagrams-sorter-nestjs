"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SorterService = void 0;
const common_1 = require("@nestjs/common");
const anagram_algorithm_enum_1 = require("../enum/anagram-algorithm.enum");
let SorterService = class SorterService {
    constructor() {
    }
    groupWords(datasets, algorithm = anagram_algorithm_enum_1.AnagramAlgorithm.SORT_AND_COMPARE) {
        let result = [];
        datasets.forEach(listWords => {
            console.log('list: ', listWords);
            const groupedWords = algorithm === anagram_algorithm_enum_1.AnagramAlgorithm.SORT_AND_COMPARE ? this.groupListWordsAnagramsBySortAndCompare(listWords) : this.otherAlgorithm(listWords);
            console.log('grouped: ', groupedWords);
            result.push(groupedWords);
        });
        return result;
    }
    groupListWordsAnagramsBySortAndCompare(listWords) {
        let groupedWords = {};
        listWords.forEach(currentWord => {
            const sortedWord = this.sortWord(currentWord);
            if (groupedWords[sortedWord]) {
                if (groupedWords[sortedWord].indexOf(currentWord) === -1) {
                    groupedWords[sortedWord].push(currentWord);
                }
            }
            else {
                groupedWords[sortedWord] = [currentWord];
            }
        });
        return groupedWords;
    }
    otherAlgorithm(listWords) {
        throw new Error('Method not implemented.');
    }
    sortWord(word) {
        return word.toLowerCase().split("").sort().join("");
    }
    formatAndSortGroupedData(groupedData) {
        let formatedResult = {};
        for (let index in groupedData) {
            const inputGroup = groupedData[index];
            let inputGroupArray = [];
            for (let key of Object.keys(inputGroup)) {
                let singleWordGroup = [];
                let wordOtherValues = inputGroup[key];
                singleWordGroup.push(...wordOtherValues);
                inputGroupArray.push(singleWordGroup.sort());
            }
            inputGroupArray.sort((item1, item2) => (item1[0] > item2[0] ? 1 : -1));
            formatedResult[index] = inputGroupArray;
        }
        return formatedResult;
    }
};
SorterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], SorterService);
exports.SorterService = SorterService;
//# sourceMappingURL=sorter.service.js.map