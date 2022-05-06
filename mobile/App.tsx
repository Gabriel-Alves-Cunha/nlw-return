import "react-native-gesture-handler";

import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
	Inter_400Regular,
	Inter_500Medium,
	useFonts,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import React from "react";

import Widget from "./src/components/Widget";

import { theme } from "./src/theme";

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
	});

	return fontsLoaded ? (
		<View style={styles.container}>
			<StatusBar style="light" backgroundColor="transparent" translucent />

			<Widget />
		</View>
	) : (
		<AppLoading />
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		backgroundColor: theme.colors.background,
	},
});
