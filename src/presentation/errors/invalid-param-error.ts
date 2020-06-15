export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super(`INvalid param: ${paramName}`)
    this.name = 'InvalidParamError'
  }
}
