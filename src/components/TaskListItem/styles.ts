import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import SPACING from "../../constants/spacing";
import BORDER_RADIUS from "../../constants/borderRadius";
import FONT_SIZES from "../../constants/fontSizes";
 

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.primary,
        padding: SPACING.small,
        borderRadius: BORDER_RADIUS.small,
    },
    text: { 
        color: colors.textPrimary,
        fontSize: FONT_SIZES.medium
    }
});