import Fastify from 'fastify'
import {AppDataSource} from './data-source'

export async function startApp(){
    const app = Fastify()
    await AppDataSource.initialize().then(
        ()=>{
            console.log('banco de dados inicializado')
        }
    ).catch((ex)=>{
        console.log('Erro de conexão do banco de dados', ex)
        process.exit(1)
    })

    return app
}