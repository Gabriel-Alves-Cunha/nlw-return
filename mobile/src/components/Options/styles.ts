import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
	},
	options: {
		flexDirection: "row",
		justifyContent: "center",
		width: "100%",

		marginBottom: 48,
	},
	title: {
		color: theme.colors.text_primary,
		fontFamily: theme.fonts.medium,
		fontSize: 20,

		marginBottom: 32,
	},
});
