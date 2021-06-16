import { AnagramAlgorithm } from './../enum/anagram-algorithm.enum';
import { ArrayMinSize, IsArray, IsEnum, IsNotEmpty, IsOptional } from "class-validator";

export class GroupAndSortWordsDto {
    @IsOptional()
    @IsEnum(AnagramAlgorithm)
    algorithm: AnagramAlgorithm;
    
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(1, { message: 'you need to pass at least one list of words to see the magic!' })
    input_words_lists: string[][];
}