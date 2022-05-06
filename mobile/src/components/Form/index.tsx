import type { FeedbackType } from "../Widget";

import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { captureScreen } from "react-native-view-shot";
import { ArrowLeft } from "phosphor-react-native";
import * as FileSystem from "expo-file-system";

import { ScreenshotButton } from "../ScreenshotButton";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { Button } from "../Button";

import { styles } from "./styles";
import { theme } from "../../theme";
import { api } from "../../libs/api";

export function Form({
	onFeedbackCanceled,
	onFeedbackSent,
	feedbackType,
}: Props) {
	const [isSendingFeedback, setIsSendingFeedback] = useState(false);
	const [screenshot, setScreenshot] = useState("");
	const [comment, setComment] = useState("");

	const feedbackTypeInfo = feedbackTypes[feedbackType];

	const takeScreenshot = async () => {
		const uri = await captureScreen({
			format: "jpg",
			quality: 0.8,
		}).catch(console.error);

		setScreenshot(uri ?? "");
	};

	const removeScreenshot = () => setScreenshot("");

	const sendFeedback = async () => {
		if (isSendingFeedback) return;

		setIsSendingFeedback(true);

		const screenshotBase64 =
			screenshot &&
			(await FileSystem.readAsStringAsync(screenshot, { encoding: "base64" }));

		try {
			await api.post("/feedback", {
				type: feedbackType,
				screenshot: `data:image/png;base64,${screenshotBase64}`,
				comment,
			});

			onFeedbackSent();
		} catch (error) {
			console.error(error);
		}

		setIsSendingFeedback(false);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<TouchableOpacity onPress={onFeedbackCanceled}>
					<ArrowLeft
						color={theme.colors.text_secondary}
						weight="bold"
						size={24}
					/>
				</TouchableOpacity>

				<View style={styles.titleContainer}>
					<Image source={feedbackTypeInfo.image} style={styles.image} />

					<Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
				</View>
			</View>

			<TextInput
				placeholder="Algo não está funcionando bem? Queremos corrigir. Conte-nos, com detalhes, o que está acontecendo..."
				placeholderTextColor={theme.colors.text_secondary}
				onChangeText={setComment}
				style={styles.input}
				autoCorrect={false}
				multiline
			/>

			<View style={styles.footer}>
				<ScreenshotButton
					onRemoveScreenshotPress={removeScreenshot}
					onTakeScreenshotPress={takeScreenshot}
					screenshot={screenshot}
				/>

				<Button isLoading={isSendingFeedback} onPress={sendFeedback} />
			</View>
		</View>
	);
}

type Props = {
	feedbackType: FeedbackType;
	onFeedbackCanceled(): void;
	onFeedbackSent(): void;
};
