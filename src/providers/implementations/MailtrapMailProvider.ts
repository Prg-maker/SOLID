import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer'
import Mail from 'nodemailer/lib/mailer'

const CONDIG_MAILER = ""


export class MailtrapMailProvider implements IMailProvider{
  private transporter: Mail;
  
  constructor(){
    this.transporter = nodemailer.createTransport({
      host: CONDIG_MAILER, // consfiguration the mailtrap
      port: CONDIG_MAILER,
      auth: {
        user:CONDIG_MAILER,
        pass: CONDIG_MAILER
      }
    })
  }

  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to:{
        name:message.to.name,
        address: message.to.email
      },
      from:{
        name:message.from.name,
        address: message.from.email
      },
      subject: message.subject,
      html: message.body
    })
  }
}