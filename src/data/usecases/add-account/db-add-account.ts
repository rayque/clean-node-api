import { AddAccount, AddAccountModel } from '../../../domain/usecases/add-account'
import { AccountModel } from '../../../domain/models/account'
import { Encrypter } from '../../protocols/encrypter'

export class DbAddAccount implements AddAccount {
  private readonly encripter: Encrypter
  constructor (encripter: Encrypter) {
    this.encripter = encripter
  }

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encripter.encrypt(account.password)

    return new Promise(resolve => resolve(null))
  }
}
