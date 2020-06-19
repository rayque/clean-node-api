import { AddAccount, AddAccountModel, AccountModel, Encrypter } from './db-add-account-protocols'

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
