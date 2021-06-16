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
exports.GroupAndSortWordsDto = void 0;
const anagram_algorithm_enum_1 = require("./../enum/anagram-algorithm.enum");
const class_validator_1 = require("class-validator");
class GroupAndSortWordsDto {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsEnum(anagram_algorithm_enum_1.AnagramAlgorithm),
    __metadata("design:type", String)
], GroupAndSortWordsDto.prototype, "algorithm", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsArray(),
    class_validator_1.ArrayMinSize(1, { message: 'you need to pass at least one list of words to see the magic!' }),
    __metadata("design:type", Array)
], GroupAndSortWordsDto.prototype, "input_words_lists", void 0);
exports.GroupAndSortWordsDto = GroupAndSortWordsDto;
//# sourceMappingURL=group-and-sort-words.dto.js.map