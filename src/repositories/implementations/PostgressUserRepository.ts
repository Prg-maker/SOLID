import { User } from '../../entities/User'
import {IUserRepository} from '../IUserRepository'

export class PostGressUsersRepository implements IUserRepository{

  private users: User[] = []

  async findbyEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email)


    return user
  }

  async save(user: User): Promise<void> {
    this.users.push(user)
  }
}