import { View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { styles } from "./styles";
import { Camera, Trash } from "phosphor-react-native";
import { theme } from "../../theme";

type Props = {
	onRemoveScreenshotPress: () => void;
	onTakeScreenshotPress: () => void;
	screenshot: string;
};

export function ScreenshotButton({
	onRemoveScreenshotPress,
	onTakeScreenshotPress,
	screenshot,
}: Props) {
	return (
		<TouchableOpacity
			onPress={screenshot ? onRemoveScreenshotPress : onTakeScreenshotPress}
			style={styles.container}
		>
			{screenshot ? (
				<View>
					<Image source={{ uri: screenshot }} style={styles.image} />

					<Trash
						color={theme.colors.text_secondary}
						style={styles.removeIcon}
						weight="fill"
						size={22}
					/>
				</View>
			) : (
				<Camera
					color={theme.colors.text_primary}
					style={styles.removeIcon}
					weight="bold"
					size={22}
				/>
			)}
		</TouchableOpacity>
	);
}
