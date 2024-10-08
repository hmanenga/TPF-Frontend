/**
 * This is the main screen component for the application.
 * It displays a list of tasks and provides a container for other components.
 *
 * @returns {JSX.Element} - A React Native view containing the task list component.
 */
import {View} from 'react-native';
import TaskList from '../../components/TaskList/TaskList';
import DateTime from '../../components/weatherComponents/DateTime/DateTime';
import WeatherScroll from '../../components/weatherComponents/WeatherScroll/WeatherScroll';

export default function HomeScreen() {
  return (
    <View>
      <DateTime />
      <WeatherScroll />
      <TaskList />
    </View>
  );
}
