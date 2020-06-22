import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  test('Should enable e CORS', async () => {
    app.post('/test_cors', (req, res) => {
      res.send(req.body)
    })
    await request(app)
      .post('/test_cors')
      .expect('acess-control-allow-origin', '*')
      .expect('acess-control-allow-methods', '*')
      .expect('acess-control-allow-headers', '*')
  })
})
