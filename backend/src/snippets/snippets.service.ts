import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Snippet, SnippetDocument } from './schemas/snippet.schema';
import { CreateSnippetDto } from './dto/create-snippet.dto';
import { UpdateSnippetDto } from './dto/update-snippet.dto';

@Injectable()
export class SnippetsService {

    constructor(
        @InjectModel(Snippet.name)
        private snippetModel: Model<SnippetDocument>,
    ) { }

    async create(dto: CreateSnippetDto) {
        return this.snippetModel.create(dto);
    }

    async findAll(query: any) {

        const { page = 1, limit = 10, q, tag } = query;

        const filter: any = {};

        if (q) {
            filter.$text = { $search: q };
        }

        if (tag) {
            filter.tags = tag;
        }

        return this.snippetModel
            .find(filter)
            .skip((page - 1) * limit)
            .limit(Number(limit))
            .sort({ createdAt: -1 });
    }

    async findOne(id: string) {
        const snippet = await this.snippetModel.findById(id);

        if (!snippet) {
            throw new NotFoundException('Snippet not found');
        }

        return snippet;
    }

    async update(id: string, dto: UpdateSnippetDto) {
        const snippet = await this.snippetModel.findByIdAndUpdate(id, dto, { new: true });

        if (!snippet) {
            throw new NotFoundException('Snippet not found');
        }

        return snippet;
    }

    async remove(id: string) {
        const snippet = await this.snippetModel.findByIdAndDelete(id);

        if (!snippet) {
            throw new NotFoundException('Snippet not found');
        }

        return { message: 'Deleted' };
    }
}