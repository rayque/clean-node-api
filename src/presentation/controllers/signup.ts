import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { baseRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return baseRequest(new MissingParamError('name'))
    }
    if (!httpRequest.body.email) {
      return baseRequest(new MissingParamError('email'))
    }
  }
}
