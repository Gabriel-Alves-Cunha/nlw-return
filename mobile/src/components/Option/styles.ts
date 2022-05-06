import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		height: 112,
		width: 104,

		backgroundColor: theme.colors.surface_secondary,
		marginHorizontal: 8,
		borderRadius: 8,
		padding: 8,
	},
	image: {
		height: 40,
		width: 40,
	},
	title: {
		color: theme.colors.text_primary,
		fontFamily: theme.fonts.medium,
		fontSize: 14,

		marginTop: 8,
	},
});
