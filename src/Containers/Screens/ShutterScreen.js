import React, { useState, useEffect } from 'react'
import { ActivityIndicator, View, StyleSheet, Image } from 'react-native'

import AsyncStorage from '@react-native-community/async-storage'
import { useDispatch } from 'react-redux'
import InitStartup from '@/Store/Startup/Init'

const ShutterScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true)
  const dispatch = useDispatch()

  async function appStartup() {
    await dispatch(InitStartup.action())
   
  }


  useEffect(() => {
    console.log('Splash Screen')
    setTimeout(() => {
      appStartup()
      setAnimating(false)
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigatorRoutes'),
      )
    }, 5000)
  }, [])

  return (
    <View style={styles.container}>
        <ActivityIndicator
          animating={animating}
          color="#FFFFFF"
          size="large"
          style={styles.activityIndicator}
        />
    </View>
  )
}

export default ShutterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
})
