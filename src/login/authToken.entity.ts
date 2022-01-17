import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('UserAuthTokens')
export class AuthTokenEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    token: string;

    @Column({ unique: true })
    password: string;

    @Column({ unique: true })
    empId: string;

    @Column()
    expiry: string;

    @Column()
    lastLogin: string;
}