import { SignUpController } from './signup'

describe('Singup Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = new SignUpController()
    const httpResquest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const htttpResponse = sut.handle(httpResquest)
    expect(htttpResponse.statusCode).toBe(400)
    expect(htttpResponse.body).toEqual(new Error('Missing param: name'));
  })
})
