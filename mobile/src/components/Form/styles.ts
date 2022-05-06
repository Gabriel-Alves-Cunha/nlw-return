import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		paddingHorizontal: 24,
	},
	header: {
		flexDirection: "row",
		marginVertical: 16,
	},
	titleContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		paddingRight: 24,
	},
	titleText: {
		color: theme.colors.text_primary,
		fontFamily: theme.fonts.medium,
		fontSize: 20,
	},
	image: {
		height: 24,
		width: 24,

		marginRight: 8,
	},
	input: {
		height: 112,

		marginBottom: 8,
		padding: 12,

		borderColor: theme.colors.stroke,
		borderRadius: 4,
		borderWidth: 1,

		color: theme.colors.text_primary,
		fontFamily: theme.fonts.regular,
	},
	footer: {
		flexDirection: "row",
		marginBottom: 16,
	},
});
