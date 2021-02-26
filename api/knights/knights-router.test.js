
const request = require("supertest");
const db = require('../../data/dbConfig');
const server = require('./knights-router');

const brienne = {name: "brienne"}
const jaime = {name:"jaime"}

beforeAll(async ()=>{
    await db.migrate.rollback()
    await db.migrate.latest()
})

beforeEach(async ()=>{
    await db("knights").truncate()
})

afterAll(async ()=>{
    await db.destroy()
})

describe("knights-router", ()=>{
    describe("[POST] /", ()=>{
        it("responds with created knight", async ()=>{
            let res
            res = await request(server).post("/api/knights").send(brienne)
            expect(res.body).toMatchObject({id:1,...brienne})
        })
    })
})