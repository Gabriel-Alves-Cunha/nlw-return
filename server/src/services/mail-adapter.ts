export type SendMailData = Readonly<{
	subject: string;
	body: string;
}>;

export type MailAdapter = Readonly<{
	sendMail(data: SendMailData): Promise<void>;
}>;
