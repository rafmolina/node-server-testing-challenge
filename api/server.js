const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const KnightsRouter = require('./knights/knights-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/knights', KnightsRouter)


server.get('/', (req,res)=>{
    res.status(200).json({api:"draw your sword, the API calls!!"})
});