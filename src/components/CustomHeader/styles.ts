import { StyleSheet } from "react-native";
import { STANDARD_FLEX } from "../../config/constants";

export default StyleSheet.create({
    container: {
        flex: STANDARD_FLEX,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    subTitle: {
        fontSize: 13,
        color: 'white'
    }
});