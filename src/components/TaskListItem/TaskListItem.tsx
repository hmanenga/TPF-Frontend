import {
  View,
  Text,
  Pressable,
  PanResponder,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './styles';
import Task from '../../types/types';
import {useNavigation} from '@react-navigation/native';
import { useRef } from 'react';

export default function TaskListItem({task, onDelete}): JSX.Element {
  const translateX =useRef( new Animated.Value(0)).current;
  const navigation = useNavigation(); // Get the navigation object
  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
        if(gestureState.dx <0){
          translateX.setValue(gestureState.dx);
        }

    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -50) {
        Animated.spring(translateX,{
          toValue: -100,
          useNativeDriver: true
        }).start();
      }else{
        Animated.spring(translateX,{
          toValue: 0,
          useNativeDriver: true
        }).start();
      }
    },
  })).current;

  const handleNavigateToDetails = () => {
    // Navigate to the TaskDetailScreen with the task object as a prop
    navigation.navigate('TaskDetailScreen', {task: task});
  };

  const handleRemoveTask = () => {
    console.warn('Task removed from TaskListItem');
  };
  return (
    <View style={styles.itemContainer}>
      <Animated.View style={{
        flex:1,
        transform: [{translateX: translateX}]
      }}>
        <View style={styles.container} {...panResponder.panHandlers}>
          <Pressable onPress={handleNavigateToDetails}>
            <Text style={styles.text}>{task?.description}</Text>
          </Pressable>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(task._id)}>
          <Text style={styles.deleteButtonText}>delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}
