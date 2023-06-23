import React from 'react'
import { StyleSheet, ScrollView, View,  } from 'react-native'
import { StyleText } from './StyleText'
import Constants from 'expo-constants'
import theme from '../theme.js' 
import { Link , useLocation} from 'react-router-native'
import { TouchableWithoutFeedback } from 'react-native'


function AppBarTap({ active, children, to }) {
  const {pathname} = useLocation()
  active = pathname === to
  const textStyles = [
    styles.text,
    active && styles.active

  ]
  return (
    <Link to={to} component={TouchableWithoutFeedback} >
      <StyleText fontWeight='bold' style={textStyles}>
        {children}
      </StyleText>
    </Link>

  )

}

export function AppBar() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scroll}>
        <AppBarTap  to='/' >
          Repositories
        </AppBarTap>
        <AppBarTap to='/signin'>
          Sig in
        </AppBarTap>
      </ScrollView>
      </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight + 10,
    gap: 5,
    
  },
  scroll: {
     paddingVertical:15,
  },
  text: {
    color: theme.appBar.textSecondary,
    textAlign: 'left',
    paddingHorizontal: 10,
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

