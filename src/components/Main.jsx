import React from 'react'
import { Platform, Text, View } from 'react-native'
import { RepositoryList } from './RepositoryList'
import  AppBar from './AppBar'
import { Routes, Route } from 'react-router-native'
import { LogInPage } from '../pages/LogIn'


/*importar distintos componentes dependiendo el sistema*/
// const AppBar = Platform.select({
//   ios: () => require('./IOSAppbar.jsx').default,
//   default: ()=> require('./AppBar.jsx').default,
// })()

//whatsapp '#008069'

const Main = () => {
  return (
    <View style={{flex:1,  }} >
      <AppBar />
      <Routes>
        <Route path='/signin' element={<LogInPage />} />
        <Route path='/' element={<RepositoryList />} />
      </Routes>
      

    </View>
  )
}

export default Main