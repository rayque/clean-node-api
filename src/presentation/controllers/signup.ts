export class SignUpController {
  handle (htttpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error('Missing param: name')
    }
  }
}
