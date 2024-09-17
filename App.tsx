/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
//TaksItem imports
import TaskListItem from './src/components/TaskListItem/TaskListItem';
import TaskList from './src/components/TaskList/TaskList';
import AppStyles from './AppStyles';

function App(): React.JSX.Element {
  return (
    <SafeAreaView >
      <View style={AppStyles.container}>
        <TaskList />
      </View>
    </SafeAreaView>
  );
}

 

export default App;
