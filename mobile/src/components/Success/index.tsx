import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";

import successImg from "../../assets/success.png";

import { Copyright } from "../Copyright";

import { styles } from "./styles";

export function Success({ onSendAnotherFeedbackPress }: Props) {
	return (
		<View style={styles.container}>
			<Image source={successImg} style={styles.image} />

			<Text style={styles.title}>Agradecemos o feedback!</Text>

			<TouchableOpacity
				onPress={onSendAnotherFeedbackPress}
				style={styles.button}
			>
				<Text style={styles.buttonTitle}>Quero enviar outro</Text>
			</TouchableOpacity>

			<Copyright />
		</View>
	);
}

type Props = {
	onSendAnotherFeedbackPress(): void;
};
