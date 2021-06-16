import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { GroupAndSortWordsDto } from './dto/group-and-sort-words.dto';
import { formattedSortedGroupsModel } from './model/formatted-sorted-groups.model';
import { GroupedWordsModel } from './model/grouped-words.model';
import { SorterService } from './service/sorter.service';

@Controller('sorter')
export class SorterController {
    constructor(private sorterService: SorterService) {
    }

    @Post('/group-and-sort-words')
    groupAndSortWords(@Body(ValidationPipe) groupAndSortWordsDto: GroupAndSortWordsDto): formattedSortedGroupsModel {
        const groupedData: GroupedWordsModel[] = this.sorterService.groupWords(groupAndSortWordsDto.input_words_lists, groupAndSortWordsDto.algorithm);
        return this.sorterService.formatAndSortGroupedData(groupedData);
    }
}
