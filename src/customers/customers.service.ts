import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {


    getList() {
        return "dans le service";
    }

}
