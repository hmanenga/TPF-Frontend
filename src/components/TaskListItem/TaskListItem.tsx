import { View, Text } from "react-native";
import styles from "./styles";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import colors from "../../constants/colors";
import ICON_SIZES from "../../constants/iconSizes";
import Task from "../../types/types"



export default function TaskListItem ({task}:Task):JSX.Element{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{task.description}</Text>
            <AntDesignIcon name="close" size={ICON_SIZES.small} color={colors.iconColor} />
        </View>
    )
}