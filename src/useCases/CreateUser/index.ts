import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostGressUsersRepository } from "../../repositories/implementations/PostgressUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailtrapMailProvider = new MailtrapMailProvider()
const postgressUserRepository = new PostGressUsersRepository()


const createUserUseCase = new CreateUserUseCase(
  postgressUserRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(createUserUseCase)

export {createUserController}