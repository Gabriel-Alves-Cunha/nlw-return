import { useState } from "react";

import thoughtImgUrl from "../../assets/thought.svg";
import ideaImgUrl from "../../assets/idea.svg";
import bugImgUrl from "../../assets/bug.svg";

import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbackTypes = Object.freeze({
	BUG: {
		title: "Problema",
		image: {
			source: bugImgUrl,
			alt: "Imagem de um inseto",
		},
	},
	IDEA: {
		title: "Ideia",
		image: {
			source: ideaImgUrl,
			alt: "Imagem de uma lâmpada",
		},
	},
	OTHER: {
		title: "Outro",
		image: {
			source: thoughtImgUrl,
			alt: "Imagem de um balão de pensamento",
		},
	},
});

export function WidgetForm() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [isFeedbackSent, setIsFeedbackSent] = useState(false);

	const restartFeedback = () => {
		setIsFeedbackSent(false);
		setFeedbackType(null);
	};

	return (
		<div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{isFeedbackSent ? (
				<FeedbackSuccessStep onFeedbackRestartRequested={restartFeedback} />
			) : (
				<>
					{!feedbackType ? (
						<FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
					) : (
						<FeedbackContentStep
							onFeedbackSent={() => setIsFeedbackSent(true)}
							onBackButton={restartFeedback}
							feedbackType={feedbackType}
						/>
					)}
				</>
			)}

			<footer className="text-xs text-neutral-400">
				Feito com ♥ pela{" "}
				<a
					className="underline underline-offset-2"
					href="https://rocketseat.com.br"
				>
					Rocketseat
				</a>
			</footer>
		</div>
	);
}

export type FeedbackType = keyof typeof feedbackTypes;
