import type { FeedbackType } from "../Widget";

import { Text, View } from "react-native";
import React from "react";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Copyright } from "../Copyright";
import { Option } from "../Option";

import { styles } from "./styles";

type Props = {
	onFeedbackTypeChange(feedbackType: FeedbackType): void;
};

export function Options({ onFeedbackTypeChange }: Props) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Deixe seu feedback</Text>

			<View style={styles.options}>
				{Object.entries(feedbackTypes).map(([key, value]) => (
					<Option
						onPress={() => onFeedbackTypeChange(key as FeedbackType)}
						title={value.title}
						image={value.image}
						key={key}
					/>
				))}
			</View>

			<Copyright />
		</View>
	);
}
