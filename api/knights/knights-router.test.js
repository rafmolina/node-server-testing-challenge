const request = require('supertest');
const db = require('../../data/dbConfig');
const server = require('../server');

const brienne = {name: "brienne"}
const jaime = {name:"jaime"}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async ()=>{
    await db("hobbits").truncate()
})

afterAll(async ()=>{
    await db.destroy()
})