import { EmailValidatorAdapter } from './email-validator'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  test('Should return false if validator return false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)

    const isValid = sut.isValid('invalid_email@email.com ')
    expect(isValid).toBe(false)
  })

  test('Should return true if validator return true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com')
    expect(isValid).toBe(true)
  })

  test('Should call validator with corret email', () => {
    const sut = new EmailValidatorAdapter()
    const isEmailSpy = jest.spyOn(validator, 'isEmail')
    const anyEmail = 'any_email@mail.com'
    sut.isValid(anyEmail)
    expect(isEmailSpy).toHaveBeenCalledWith(anyEmail)
  })
})
