export type FeedbackCreateData = Readonly<{
	screenshot?: string;
	comment: string;
	type: string;
}>;

export type FeedbacksRepository = Readonly<{
	create(data: FeedbackCreateData): Promise<void>;
}>;
