import { getBottomSpace } from "react-native-iphone-x-helper";
import { StyleSheet } from "react-native";

import { theme } from "../../theme";

export const styles = StyleSheet.create({
	button: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",

		bottom: getBottomSpace() + 16,
		height: 48,
		right: 16,
		width: 48,

		backgroundColor: theme.colors.brand,
		borderRadius: 24,
	},
	modal: {
		backgroundColor: theme.colors.surface_primary,
		paddingBottom: getBottomSpace() + 16,
	},
	indicator: {
		backgroundColor: theme.colors.text_primary,
		width: 56,
	},
});
