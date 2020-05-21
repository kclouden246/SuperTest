const app = require('./index')
const request = require('supertest')

describe('Endpoint testing', function () {
    it('Should return a valid code with contents', async function(done) {
        request(app)
            .get('/comments')
            .expect(200, done)
    })
    it('Should return a valid code with photos', async function(done) {
        request(app)
            .get('/photos')
            .expect(200, done)
    })
    it('Should return a valid code with albums', async function(done) {
        request(app)
            .get('/albums')
            .expect(200, done)
    })
    it('Should return a valid code with todos', async function(done) {
        request(app)
            .get('/todos')
            .expect(200, done)
    })
    it('Should return a valid code with comments', async function(done) {
        request(app)
            .get('/comments')
            .expect(200, done)
    })
    it('Post and GET', async function(done) {
        let myComment = {
            method: 'POST',
            body: JSON.stringify({
                "UserId": 1,
                "Id": 1,
                "Title": "MY Comment",
                "Body": "MINE"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await request(app)
            .post('/comments')
            .send(myComment)
    })
})