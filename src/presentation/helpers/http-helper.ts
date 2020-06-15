import { HttpResponse } from '../protocols/http'

export const baseRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error
})
