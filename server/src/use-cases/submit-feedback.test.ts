import type { MailAdapter, SendMailData } from "../services/mail-adapter";
import type {
	FeedbacksRepository,
	FeedbackCreateData,
} from "../repositories/feedbacks-repository";

import { describe, expect, it, vi } from "vitest";

import { submitFeedback } from "./submit-feedback";

const createFeedbackSpy = vi.fn();
const sendMailSpy = vi.fn();

const feedbacksRepository: FeedbacksRepository = {
	create: createFeedbackSpy,
};
const mailAdapter: MailAdapter = {
	sendMail: sendMailSpy,
};

describe("Submit feedback", () => {
	it("should be able to submit a feedback", async () => {
		// expect.assertions(2);

		// const res = await submitFeedback.run(feedbacksRepository, mailAdapter, {
		// 	screenshot: "data:image/png;base64,",
		// 	comment: "Example of comment",
		// 	type: "BUG",
		// });
		// console.log({ res, submitFeedback: submitFeedback.run.toString() });

		await expect(
			submitFeedback
				.run(feedbacksRepository, mailAdapter, {
					screenshot: "data:image/png;base64,",
					comment: "Example of comment",
					type: "BUG",
				})
				// I'm needing this little hack to make it work with vitest:
				.then(() => () => {})
		).resolves.not.toThrow();

		expect(createFeedbackSpy).toHaveBeenCalled();
		expect(sendMailSpy).toHaveBeenCalled();
	});

	it("shouldn't be possible to send a feedback without a type", async () => {
		await expect(
			submitFeedback.run(feedbacksRepository, mailAdapter, {
				screenshot: "data:image/png;base64,",
				comment: "Example of comment",
				type: "",
			})
		).rejects.toThrow();
	});

	it("shouldn't be possible to send a feedback without a comment", async () => {
		await expect(
			submitFeedback.run(feedbacksRepository, mailAdapter, {
				screenshot: "data:image/png;base64,",
				comment: "",
				type: "BUG",
			})
		).rejects.toThrow();
	});

	it("shouldn't be possible to send a feedback with an invalid screenshot", async () => {
		await expect(
			submitFeedback.run(feedbacksRepository, mailAdapter, {
				comment: "Example of comment",
				screenshot: "data:image/jpg;base64,",
				type: "BUG",
			})
		).rejects.toThrow();
	});
});
