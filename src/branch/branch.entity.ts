import { EmployeeEntity } from "src/employee/employee.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class BranchEntity {
    @PrimaryGeneratedColumn()
    branch_id: number;

    @Column()
    branch_name: string;

    // @OneToOne(() => EmployeeEntity , employee => employee.emp_id)
    @Column({ nullable: true })
    mgr_id: number;

    @Column({ nullable: true })
    mgr_start_date: string;


    // FOREIGN KEY(mgr_id) REFERENCES employee(emp_id) ON DELETE SET NULL
}