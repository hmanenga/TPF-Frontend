import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default  function IconButton(buttonName: string) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name={buttonName} size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}
