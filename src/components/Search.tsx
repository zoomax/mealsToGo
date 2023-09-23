import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { spacing } from '../utils/spacing'
import { colors } from '../utils/colors'
// utils

const Search: React.FC<any> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.green
  },
  text: {
    color: colors.white,
    fontSize: spacing.lg
  }
})

export default Search
