import { Controller, Get, Param, Delete, Post, Put, Body } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { CustomerDto } from './customer.dto';

@Controller('customers')
export class CustomersController {

    constructor(private customersDb: CustomersService) {
    }

    @Get()
    getList(): Promise<Customer[]> {
        return this.customersDb.getList();
    }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return 'TODO: renvoyer un client (par id)';
    }

    @Post()
    add(@Body() customerDto: CustomerDto): Promise<Customer> {
        return this.customersDb.create(customerDto);
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
