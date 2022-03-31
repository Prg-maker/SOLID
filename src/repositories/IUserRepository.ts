import { User } from "../entities/User";

export interface IUserRepository{

  

  findbyEmail(email:string): Promise<User >;
  save(user: User):Promise<void> 

}