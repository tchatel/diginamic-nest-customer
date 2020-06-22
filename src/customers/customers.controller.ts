import { Controller, Get, Param, Delete, Post, Put, Body, ParseIntPipe, HttpCode, HttpStatus, ValidationPipe, UsePipes } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';
import { CustomerDto } from './customer.dto';

@Controller('customers')
@UsePipes(new ValidationPipe({whitelist: true, forbidNonWhitelisted: true}))
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
    @HttpCode(HttpStatus.NO_CONTENT)
    update(@Param('id', ParseIntPipe) id: number,
           @Body() customerDto: CustomerDto): Promise<void> {
        return this.customersDb.update(id, customerDto);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.customersDb.delete(id);
    }

}
