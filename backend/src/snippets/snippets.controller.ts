import { Controller, Get, Post, Body, Param, Patch, Delete, Query } from '@nestjs/common';

import { SnippetsService } from './snippets.service';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';

@Controller('snippets')
export class SnippetsController {

    constructor(private readonly snippetsService: SnippetsService) { }

    @Post()
    create(@Body() dto: CreateSnippetDto) {
        return this.snippetsService.create(dto);
    }

    @Get()
    findAll(@Query() query) {
        return this.snippetsService.findAll(query);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.snippetsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateSnippetDto) {
        return this.snippetsService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.snippetsService.remove(id);
    }
}