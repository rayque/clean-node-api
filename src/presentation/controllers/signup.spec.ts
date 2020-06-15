import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('Singup Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const sut = makeSut()
    const httpResquest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const htttpResponse = sut.handle(httpResquest)
    expect(htttpResponse.statusCode).toBe(400)
    expect(htttpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    const sut = makeSut()
    const httpResquest = {
      body: {
        name: 'any_name',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const htttpResponse = sut.handle(httpResquest)
    expect(htttpResponse.statusCode).toBe(400)
    expect(htttpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const sut = makeSut()
    const httpResquest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        passwordConfirmation: 'any_password'
      }
    }
    const htttpResponse = sut.handle(httpResquest)
    expect(htttpResponse.statusCode).toBe(400)
    expect(htttpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no password confirmation is provided', () => {
    const sut = makeSut()
    const httpResquest = {
      body: {
        name: 'any_name',
        email: 'any_email@email.com',
        password: 'any_password'
      }
    }
    const htttpResponse = sut.handle(httpResquest)
    expect(htttpResponse.statusCode).toBe(400)
    expect(htttpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
