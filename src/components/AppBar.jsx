import React from 'react'
import { ViewPropsTypes, StyleSheet, View } from 'react-native'
import { StyleText } from './StyleText'
import Constants from 'expo-constants'
import theme from '../theme.js' 
import { Link } from 'react-router-native'

function AppBarTap({ active, children, to }) {
  return (
    <Link to={to} >
      <StyleText fontWeight='bold' style={styles.text}>
        {children}
      </StyleText>
    </Link>

  )

}

export function AppBar() {
  return (
    <View style={styles.container}>
      <AppBarTap active to='/' >
        Repositories
      </AppBarTap>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    paddingBottom: 10,
    paddingLeft:10,
    
  },
  text: {
    color: theme.appBar.textPrimary,
    textAlign:'center'
  }
})