import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class EmployeeEntity {
    @PrimaryGeneratedColumn()
    emp_id: number;

    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column("date")
    birth_day: Date;

    @Column("varchar", { length: 1 })
    sex: string;

    @Column()
    salary: number;

    @Column({ nullable: true })
    super_id: number;

    @Column()
    branch_id: number;
}