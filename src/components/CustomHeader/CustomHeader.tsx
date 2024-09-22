import React from 'react'
import { View ,Text} from 'react-native';
import IconButton from '../IconButton/IconButton'
import styles from './styles'


export default function CustomHeader() {
  return (
   <View style={styles.container}>
     <Text style={styles.title}>Task Management </Text>
     <Text style={styles.subTitle}>Organize and manage your tasks </Text>
     <IconButton />
   </View>
  )
}