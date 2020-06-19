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
    return await this.addAccountRepository.add({
      ...accountData,
      password: hashedPassword
    })
  }
}
