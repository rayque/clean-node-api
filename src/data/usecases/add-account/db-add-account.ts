import {
  AddAccount,
  AddAccountModel,
  AccountModel,
  Encrypter,
  AddAccountRepository
} from './db-add-account-protocols'

export class DbAddAccount implements AddAccount {
  private readonly encripter: Encrypter
  private readonly addAccountRepository: AddAccountRepository

  constructor (encripter: Encrypter, addAccountRepository: AddAccountRepository) {
    this.addAccountRepository = addAccountRepository
    this.encripter = encripter
  }

  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encripter.encrypt(accountData.password)
    await this.addAccountRepository.add(Object.assign(accountData, {
      password: hashedPassword
    }))

    return new Promise(resolve => resolve(null))
  }
}
