import React from "react";
import {
	TouchableOpacityProps,
	ActivityIndicator,
	TouchableOpacity,
	Text,
} from "react-native";

import { theme } from "../../theme";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
	isLoading: boolean;
};

export function Button({ isLoading, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			{isLoading ? (
				<ActivityIndicator color={theme.colors.text_on_brand_color} />
			) : (
				<Text style={styles.title}>Enviar feedback</Text>
			)}
		</TouchableOpacity>
	);
}
