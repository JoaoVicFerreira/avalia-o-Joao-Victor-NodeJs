import 'reflect-metadata'
import { DataSource } from 'typeorm'
//import {User} from './entities/User'

export const AppDataSource = new DataSource({
type: 'sqlite',
database:'./src/db/social.db',
synchronize: false,
logging: false,
entities: [],
migrations: ['.src/typeorm/migrations/*.ts']
})