import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import { RepositoryList } from './RepositoryList'
import { AppBar } from './AppBar'
import { Routes, Route, Navigate } from 'react-router-native'

function Signin() {
  return (
    
      <Text>Working on it</Text>
    
  )
}

const Main = () => {
  return (
    <View style={{flex:1,  }} >
      <AppBar />
      <Routes>
        <Route path='/signin' element={<Signin />} />        
        <Route path='/' element={<RepositoryList />} />
      </Routes>
      

    </View>
  )
}

export default Main