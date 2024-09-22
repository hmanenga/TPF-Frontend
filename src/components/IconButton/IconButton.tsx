import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Camera} from 'lucide-react-native';
import styles from './styles';

export default  function IconButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Camera size={18} color="white" />
      </TouchableOpacity>
    </View>
  );
}
