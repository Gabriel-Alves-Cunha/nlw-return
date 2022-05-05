import type { FeedbacksRepository } from "../repositories/feedbacks-repository";
import type { MailAdapter } from "../services/mail-adapter";

type Request = Readonly<{
	screenshot?: string;
	comment: string;
	type: string;
}>;

export const submitFeedback = {
	async run(
		feedbacksRepository: FeedbacksRepository,
		mailAdapter: MailAdapter,
		req: Request
	): Promise<void> {
		const { type, comment, screenshot } = req;

		if (!type) throw new Error(`'type' is required. Received: '${type}'`);
		if (!comment)
			throw new Error(`'comment' is required. Received: '${comment}'`);
		if (screenshot && !screenshot.startsWith("data:image/png;base64,"))
			throw new Error(
				`Invalid screenshot format.
				It should be: 'data:image/png;base64,'
				Received: '${screenshot.slice(0, 22)}'
				`
			);

		await feedbacksRepository.create({
			screenshot,
			comment,
			type,
		});

		await mailAdapter.sendMail({
			subject: "Novo feedback",
			body: [
				"<div style='font-family: sans-serif; font-size: 1rem; color: #111'>",
				`<p>Tipo do feedback: ${type}</p>`,
				`<p>Comentário: ${comment}</p>`,
				`<p>Screenshot: ${screenshot}</p>`,
				"</div>",
			].join("\n"),
		});
	},
};
