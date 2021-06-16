import { GroupAndSortWordsDto } from './dto/group-and-sort-words.dto';
import { formattedSortedGroupsModel } from './model/formatted-sorted-groups.model';
import { SorterService } from './service/sorter.service';
export declare class SorterController {
    private sorterService;
    constructor(sorterService: SorterService);
    groupAndSortWords(groupAndSortWordsDto: GroupAndSortWordsDto): formattedSortedGroupsModel;
}
