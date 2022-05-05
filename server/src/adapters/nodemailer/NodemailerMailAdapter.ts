import nodemailer from 'nodemailer';
import { IMailAdapter, SendMailData } from '../IMailAdapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '55810fb62135f1',
    pass: 'cf94830292bfee',
  },
});

export class NodemailerMailAdapter implements IMailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Alemcar <muniz.caranha@gmail.com>',
      subject,
      html: body,
    });
  }
}
