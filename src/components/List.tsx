import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { spacing } from '../utils/spacing'
import { colors } from '../utils/colors'
// utils

const List: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    backgroundColor: colors.blue
  },
  text: {
    color: colors.white,
    fontSize: spacing.lg
  }
})

export default List
