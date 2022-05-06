import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { ChatTeardropDots } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import { Fragment, useRef } from "react";
import React, { useState } from "react";
import BottomSheet from "@gorhom/bottom-sheet";

import { feedbackTypes } from "../../utils/feedbackTypes";
import { Options } from "../Options";
import { Success } from "../Success";
import { Form } from "../Form";

import { styles } from "./styles";
import { theme } from "../../theme";

function Widget() {
	const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
	const [feedbackSent, setFeedbackSent] = useState(false);
	const bottomSheetRef = useRef<BottomSheet>(null);

	const handleOpen = () => bottomSheetRef.current?.expand();

	const restartFeedback = () => {
		setFeedbackSent(false);
		setFeedbackType(null);
	};

	const handleFeedbackSent = () => setFeedbackSent(true);

	return (
		<Fragment>
			<TouchableOpacity style={styles.button} onPress={handleOpen}>
				<ChatTeardropDots
					color={theme.colors.text_on_brand_color}
					weight="bold"
					size={24}
				/>
			</TouchableOpacity>

			<BottomSheet
				handleIndicatorStyle={styles.indicator}
				backgroundStyle={styles.modal}
				snapPoints={[1, 280]}
				ref={bottomSheetRef}
			>
				{feedbackSent ? (
					<Success onSendAnotherFeedbackPress={restartFeedback} />
				) : (
					<>
						{feedbackType ? (
							<Form
								onFeedbackCanceled={restartFeedback}
								onFeedbackSent={handleFeedbackSent}
								feedbackType={feedbackType}
							/>
						) : (
							<Options onFeedbackTypeChange={setFeedbackType} />
						)}
					</>
				)}
			</BottomSheet>
		</Fragment>
	);
}

export default gestureHandlerRootHOC(Widget);

export type FeedbackType = keyof typeof feedbackTypes;
