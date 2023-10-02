import http from 'node:http'

const server = http.createServer((req, res) => {
    const { method, url } = req
    
    if(method === 'GET'){
        console.log('buscando usuários')
    } else if(method === 'POST'){
        console.log('criando usuários')
    }
    res.end('Hello World')
})

server.listen(3333)