import type {
	FeedbacksRepository,
	FeedbackCreateData,
} from "../feedbacks-repository";

import { prisma } from "../../prisma";

export const prismaFeedbacksRepositories: FeedbacksRepository = {
	async create(data: FeedbackCreateData): Promise<void> {
		await prisma.feedback.create({ data });
	},
};
