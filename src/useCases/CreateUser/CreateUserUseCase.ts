import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{

  constructor(

    private usersRepository: IUserRepository,
    private mailProvider: IMailProvider,

    

  ){}
  async execute(data: ICreateUserRequestDTO){

    const userAlreadyExists = await this.usersRepository.findbyEmail(data.email)

    if(userAlreadyExists){
      throw new  Error('User already exist.')
    }
    const user = new User(data)

    await this.usersRepository.save(user)


    await this.mailProvider.sendMail({
      to:{
        name: data.name,
        email: data.email,
      },
      from:{
        name: "sytem",
        email:"sytem@rock.com"
      },
      subject: "Seja bem-vindo ao o system",
      body:"<p>System welcome</p>",
    })  
  }
}