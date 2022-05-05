import type { MailAdapter, SendMailData } from "../mail-adapter";

import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "a856faf0f2c73a",
		pass: "4195aa6c562dea",
	},
});

export const nodemailerMailAdapter: MailAdapter = {
	async sendMail(data: SendMailData): Promise<void> {
		const { body, subject } = data;

		await transport.sendMail({
			from: "Equipe feedget <oi@feedget.com>",
			to: "Gabriel <gabriel925486@gmail.com>",
			html: body,
			subject,
		});
	},
};
