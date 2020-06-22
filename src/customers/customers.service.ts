import { Injectable } from '@nestjs/common';
import { Customer } from './customer.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerDto } from './customer.dto';

@Injectable()
export class CustomersService {

    constructor(@InjectRepository(Customer) 
                private customerRepository: Repository<Customer>) {
    }

    getList(): Promise<Customer[]> {   // ou Promise<Array<Customer>>
        return this.customerRepository.find();
    }

    create(customerDto: CustomerDto): Promise<Customer> {
        return this.customerRepository.save(customerDto);
    }

}
