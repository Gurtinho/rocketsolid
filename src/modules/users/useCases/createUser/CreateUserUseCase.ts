import { IUsersRepository } from "../../repositories/IUsersRepository"

interface IRequest {
  name: string
  email: string
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): void {
    const usersAlreadyExists = this.usersRepository.findByEmail(name);
      if (usersAlreadyExists) {
        throw new Error('Users already exists')
      }
      this.usersRepository.create({ name, email })
  }
}

export { CreateUserUseCase }
