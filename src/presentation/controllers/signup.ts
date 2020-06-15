import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { baseRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controler'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requireFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requireFields) {
      if (!httpRequest.body[field]) {
        return baseRequest(new MissingParamError(field))
      }
    }
  }
}
