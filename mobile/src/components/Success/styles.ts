import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	image: {
		height: 46,
		width: 46,

		marginBottom: 10,
		marginTop: 42,
	},
	title: {
		marginBottom: 24,

		color: theme.colors.text_primary,
		fontFamily: theme.fonts.medium,
		fontSize: 20,
	},
	button: {
		justifyContent: "center",
		alignItems: "center",
		height: 40,

		backgroundColor: theme.colors.surface_secondary,
		paddingHorizontal: 24,
		marginBottom: 56,
		borderRadius: 4,
	},
	buttonTitle: {
		color: theme.colors.text_primary,
		fontFamily: theme.fonts.medium,
		fontSize: 14,
	},
});
