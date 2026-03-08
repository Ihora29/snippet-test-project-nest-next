import { IsString, IsNotEmpty, IsArray, IsOptional, IsEnum } from 'class-validator';

export class CreateSnippetDto {

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    content: string;

    @IsOptional()
    @IsArray()
    tags?: string[];

    @IsEnum(['link', 'note', 'command'])
    type: string;
}