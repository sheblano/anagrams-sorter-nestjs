import { AnagramAlgorithm } from '../enum/anagram-algorithm.enum';
import { formattedSortedGroupsModel } from '../model/formatted-sorted-groups.model';
import { GroupedWordsModel } from '../model/grouped-words.model';
export declare class SorterService {
    constructor();
    groupWords(datasets: string[][], algorithm?: AnagramAlgorithm): GroupedWordsModel[];
    groupListWordsAnagramsBySortAndCompare(listWords: string[]): GroupedWordsModel;
    otherAlgorithm(listWords: string[]): GroupedWordsModel;
    sortWord(word: string): string;
    formatAndSortGroupedData(groupedData: GroupedWordsModel[]): formattedSortedGroupsModel;
}
