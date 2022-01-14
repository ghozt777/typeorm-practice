import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LoggerEntity {
    @PrimaryGeneratedColumn('uuid')
    log_id: string;

    @Column({ nullable: true })
    requestObject: string;

    @Column("longtext", { nullable: true })
    responseObject: string;

    @Column()
    timeStamp: string;
}