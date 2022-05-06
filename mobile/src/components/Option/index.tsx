import React from "react";
import {
	TouchableOpacityProps,
	TouchableOpacity,
	ImageProps,
	Image,
	Text,
} from "react-native";

import { styles } from "./styles";

interface Props extends TouchableOpacityProps {
	image: ImageProps;
	title: string;
}

export function Option({ image, title, ...rest }: Props) {
	return (
		<TouchableOpacity style={styles.container} {...rest}>
			<Image source={image} style={styles.image} />

			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}
