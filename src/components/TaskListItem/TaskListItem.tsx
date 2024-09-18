import {View, Text, Pressable} from 'react-native';
import styles from './styles';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import colors from '../../constants/colors';
import ICON_SIZES from '../../constants/iconSizes';
import Task from '../../types/types';
import {useNavigation} from '@react-navigation/native';

export default function TaskListItem({task}): JSX.Element {
  const navigation = useNavigation(); // Get the navigation object

  const handleNavigateToDetails = () => {
    // Navigate to the TaskDetailScreen with the task object as a prop
    navigation.navigate('TaskDetailScreen', {task: task});
  };

  const handleRemoveTask =() =>{
    console.warn("Task removed from TaskListItem");
  }
  return (
    <View style={styles.container}>
      <Pressable onPress={handleNavigateToDetails}>
        <Text style={styles.text}>{task.description}</Text>
      </Pressable>
      <Pressable onPress={handleRemoveTask}>
      <FontAwesomeIcon name="remove" size={ICON_SIZES.medium} color={colors.iconColor} />
      </Pressable>
    </View>
  );
}
