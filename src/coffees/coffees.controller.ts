import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery;
        return `This action returns ${limit} coffees starting at ${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a ${id} coffee`;
    }

    @Post()
    create(@Body() body) {
        return body;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body) {
        return `This action updates a #${id} coffee`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} coffee`;
    }

}

