import { StyleSheet } from "react-native";
import SPACING from "../../constants/spacing";
import colors from "../../constants/colors";
import FONT_SIZES from "../../constants/fontSizes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BORDER_RADIUS from "../../constants/borderRadius";


export default StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        padding: SPACING.small,
        borderRadius: BORDER_RADIUS.small
    },
    containerTitle: {
        fontSize: FONT_SIZES.large,
        color: Colors.white,
        padding: SPACING.small,
        marginVertical: SPACING.small
    },
    taskInput: {
        color: colors.gray,
        padding: SPACING.xsmall,
        backgroundColor: colors.white,
        borderRadius: BORDER_RADIUS.small,
        marginBottom: SPACING.small,
        marginTop: SPACING.medium
    }
});