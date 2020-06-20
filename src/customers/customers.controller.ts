import { Controller, Get, Param, Delete, Post, Put } from '@nestjs/common';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {

    constructor(private customersDb: CustomersService) {
    }

    @Get()
    getList() {
        return this.customersDb.getList();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return 'TODO: renvoyer un client (par id)';
    }

    @Post()
    add() {
        return 'TODO: ajouter un client';
    }

    @Put(':id')
    update(@Param('id') id: string) {
        return 'TODO: modifier un client (par id)';
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return 'TODO: supprimer un client (par id)';
    }

}
