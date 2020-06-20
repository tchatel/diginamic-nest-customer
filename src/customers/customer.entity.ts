import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 50})
    firstname: string;

    @Column({length: 50})
    lastname: string;
    
    @Column({length: 0})
    email: string;
    
    toString(): string {
        return `[${this.id}] ${this.firstname} ${this.lastname} (${this.email})`;
    }
}
