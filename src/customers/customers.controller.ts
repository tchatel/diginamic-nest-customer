import { Controller, Get, Param, Delete, Post, Put, Body, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
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
    getOne(@Param('id', ParseIntPipe) id: number) {
        return this.customersDb.getOne(id);
    }

    @Post()
    add(@Body() customerDto: CustomerDto): Promise<Customer> {
        return this.customersDb.create(customerDto);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number) {
        return 'TODO: modifier un client (par id)';
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.customersDb.delete(id);
    }

}
