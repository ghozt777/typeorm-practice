import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as dotenv from "dotenv"
dotenv.config();

// (() => {
//     console.log("CREDENTIALS FROM DATABASE: ", process.env.DB_PASSWORD, process.env.DB_USERNAME, process.env.DB_HOST, process.env.DB_DATABASE);
// })()

@Global()
@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'mysql',
        host: `${process.env.DB_HOST}`,
        port: parseInt(process.env.DB_PORT) as number,
        username: `${process.env.DB_USERNAME}`,
        password: `${process.env.DB_PASSWORD}`,
        database: `${process.env.DB_DATABASE}`,
        entities: [],
        autoLoadEntities: true,
        synchronize: true,
        logging: true
    })]
})
export class DatabaseModule { }
