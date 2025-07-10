import { startApp } from './app'
import { env } from './config/env'
async function startServer(){
    const app = await startApp()
    const port = Number(env?.PORT) || 3333

    app.listen({ port }, (err, address) => {
        if(err){
            console.error('Erro no servidor', err)
            process.exit(1)
        }
        console.log('Servidor executando no IP ${addres}')
    })
}
startServer()