import { Injectable } from '@nestjs/common';
import { AnagramAlgorithm } from '../enum/anagram-algorithm.enum';
import { formattedSortedGroupsModel } from '../model/formatted-sorted-groups.model';
import { GroupedWordsModel } from '../model/grouped-words.model';

@Injectable()
export class SorterService {

    constructor() {
    }


    /**
     * this method contains the logic for grouping and sorting words
     * @param data 
     * @param algorithm has a default value for the implemented algorithm otherwise can be passed from controller
     * @returns array of objects each object refers to input list and inside the object 
     * there is a key which is the sorted word value and 
     * the value is array with the similar word group 
     * ex: [ { "aehmnr": [ "Hemarn", "Arnhem" ], ... ]
     */
    groupWords(datasets: string[][], algorithm: AnagramAlgorithm = AnagramAlgorithm.SORT_AND_COMPARE): GroupedWordsModel[] {
        let result = [];
        // loop over datasets inputs 
        datasets.forEach(listWords => {
            console.log('list: ', listWords);
            const groupedWords = algorithm === AnagramAlgorithm.SORT_AND_COMPARE ? this.groupListWordsAnagramsBySortAndCompare(listWords) : this.otherAlgorithm(listWords);
            console.log('grouped: ', groupedWords);
            result.push(groupedWords);
        });
        return result;
    }


    /**
     * @param listWords which is your dataset (array of strings)
     * @returns object of type GroupedWordsModel
     * ex: {"aehmnr": ["Hemarn", "Arnhem" ], "aiprs": [ "Rispa", "Spari", "Paris" ],}
     */
    groupListWordsAnagramsBySortAndCompare(listWords: string[]): GroupedWordsModel {
        let groupedWords = {};
        listWords.forEach(currentWord => {
            const sortedWord = this.sortWord(currentWord);

            // If the key already added before,
            // push the word to the array of this word group
            if (groupedWords[sortedWord]) {
                // this to avoid push duplicate entires
                if (groupedWords[sortedWord].indexOf(currentWord) === -1) {
                    groupedWords[sortedWord].push(currentWord);
                }
            } else {
                // else create an array with the unique word 
                // this will always happen in first key in word group
                groupedWords[sortedWord] = [currentWord];
            }
        });
        return groupedWords;
    }

    /**
     * This is just to show how if other algorithm is used to determine alagrams
     * @param listWords 
     * @return should keep the same return object structue
     *  as groupListWordsAnagramsBySortAndCompare function
     * to keep using one method for formatting the result
     */
    otherAlgorithm(listWords: string[]): GroupedWordsModel {
        throw new Error('Method not implemented.');
    }

    /**
     * sort word alphabetically
     * @param word 
     * @returns sorted value of letters joined as one string 
     */
    sortWord(word: string): string {
        return word.toLowerCase().split("").sort().join("");
    }

    /**
     * 
     * @param groupedData ex: { "aehmnr": ["Hemarn", "Arnhem"], "aiprs": [], "aademmrst": [] }
     * @returns formatted data from object structrue to array of arrays structrue with input group key
     * ex: {"0": [["Hemarn", "Arnhem"], ["Rispa", "Spari", "Paris"]]}
     */
    formatAndSortGroupedData(groupedData: GroupedWordsModel[]): formattedSortedGroupsModel {
        let formatedResult = {};
        // first restructue data to desired look (array of arrays)
        for (let index in groupedData) {
            const inputGroup = groupedData[index];

            let inputGroupArray = [];
            // loop over input Group object properties
            // ex: { "aehmnr": [], "aiprs": [], "aademmrst": [] }
            for (let key of Object.keys(inputGroup)) {
                let singleWordGroup = [];
                let wordOtherValues = inputGroup[key];
                singleWordGroup.push(...wordOtherValues);
                // sort the word group alphabetically before pushing them
                inputGroupArray.push(singleWordGroup.sort());
            }

            // use the first word of each group while sorting
            inputGroupArray.sort((item1, item2) => (item1[0] > item2[0] ? 1 : -1));
            formatedResult[index] = inputGroupArray;
        }
        return formatedResult;
    }
}
