import express from "express";

import { statusCode } from "./statusCode";
import { submitFeedback } from "./use-cases/submit-feedback";
import { prismaFeedbacksRepositories } from "./repositories/prisma/prisma-feedbacks-repositories";
import { nodemailerMailAdapter } from "./services/nodemailer/nodemailer-mail-adapter";

export const routes = express.Router();

routes.post("/feedbacks", async (req, res) => {
	try {
		const { type, comment, screenshot } = req.body;

		const feedbacksRepository = prismaFeedbacksRepositories;
		const mailAdapter = nodemailerMailAdapter;

		await submitFeedback.run(feedbacksRepository, mailAdapter, {
			screenshot,
			comment,
			type,
		});

		return res.status(statusCode.CREATED).send();
	} catch (error) {
		console.error(error);

		return res.status(statusCode.INTERNAL_SERVER_ERROR).send();
	}
});
