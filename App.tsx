import React from 'react'
import { StatusBar as ExpoStatusBas } from 'expo-status-bar'
import { StyleSheet, SafeAreaView, StatusBar, Platform } from 'react-native'
import Search from './src/components/Search'
import List from './src/components/List'

const App: React.FC<any> = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Search />
      <List />
      <ExpoStatusBas style="auto" />
      {/** this one is for selecting the color of status bar text content  */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})
export default App
