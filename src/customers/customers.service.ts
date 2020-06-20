import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {


    getList() {
        return "azertyuioon est dans le service";
    }

}
