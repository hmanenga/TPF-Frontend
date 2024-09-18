import { View, Text,TouchableOpacity } from "react-native";
import styles from "./styles";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import colors from "../../constants/colors";
import ICON_SIZES from "../../constants/iconSizes";
import Task from "../../types/types";
import { useNavigation } from '@react-navigation/native';


export default function TaskListItem ({task}):JSX.Element{
    const navigation = useNavigation(); // Get the navigation object


    const handleNavigateToDetails = () => {
        // Navigate to the TaskDetailScreen with the task object as a prop
        navigation.navigate("TaskDetailScreen",{task: task});
           
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleNavigateToDetails}>
            <Text style={styles.text}>{task.description}</Text>
            </TouchableOpacity>
           {/*  <AntDesignIcon name="close" size={ICON_SIZES.small} color={colors.iconColor} />*/}
        </View>
    )
}