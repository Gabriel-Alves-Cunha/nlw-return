import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		position: "relative",
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		width: 40,

		backgroundColor: theme.colors.surface_secondary,
		borderRadius: 4,
		marginRight: 8,
	},
	removeIcon: {
		position: "absolute",
		bottom: 0,
		right: 0,
	},
	image: {
		height: 40,
		width: 40,
	},
});
