import { Camera, Trash } from "phosphor-react";
import { useState } from "react";
import html2canvas from "html2canvas";

import { Loading } from "./Loading";

export function ScreenshotButton({ onScreenshotTaken, screenshot }: Props) {
	const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

	const takeScreenshot = async () => {
		setIsTakingScreenshot(true);

		const canvas = await html2canvas(document.querySelector("html")!);
		const base64img = canvas.toDataURL("image/png");

		onScreenshotTaken(base64img);

		setIsTakingScreenshot(false);
	};

	return screenshot ? (
		<button
			className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
			style={{
				backgroundImage: `url(${screenshot})`,
				backgroundPosition: "right-bottom",
				backgroundSize: 180,
			}}
			onClick={() => onScreenshotTaken("")}
			type="button"
		>
			<Trash weight="fill" />
		</button>
	) : (
		<button
			className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
			onClick={takeScreenshot}
			type="button"
		>
			{isTakingScreenshot ? (
				<Loading />
			) : (
				<Camera className="w-6 h-6 text-zinc-100" />
			)}
		</button>
	);
}

type Props = {
	onScreenshotTaken(screenshot: string): void;
	screenshot: string;
};
