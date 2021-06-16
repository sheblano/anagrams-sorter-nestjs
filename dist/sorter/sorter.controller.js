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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SorterController = void 0;
const common_1 = require("@nestjs/common");
const group_and_sort_words_dto_1 = require("./dto/group-and-sort-words.dto");
const sorter_service_1 = require("./service/sorter.service");
let SorterController = class SorterController {
    constructor(sorterService) {
        this.sorterService = sorterService;
    }
    groupAndSortWords(groupAndSortWordsDto) {
        const groupedData = this.sorterService.groupWords(groupAndSortWordsDto.input_words_lists, groupAndSortWordsDto.algorithm);
        return this.sorterService.formatAndSortGroupedData(groupedData);
    }
};
__decorate([
    common_1.Post('/group-and-sort-words'),
    __param(0, common_1.Body(common_1.ValidationPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [group_and_sort_words_dto_1.GroupAndSortWordsDto]),
    __metadata("design:returntype", Object)
], SorterController.prototype, "groupAndSortWords", null);
SorterController = __decorate([
    common_1.Controller('sorter'),
    __metadata("design:paramtypes", [sorter_service_1.SorterService])
], SorterController);
exports.SorterController = SorterController;
//# sourceMappingURL=sorter.controller.js.map