export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missimg param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
