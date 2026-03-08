import { IsOptional, IsString, IsArray } from 'class-validator';

export class UpdateSnippetDto {

    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    @IsArray()
    tags?: string[];

    @IsOptional()
    type?: string;
}