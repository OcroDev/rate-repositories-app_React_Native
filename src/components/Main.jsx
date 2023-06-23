import React from 'react'
import Constants from 'expo-constants'
import { Text, View } from 'react-native'
import { RepositoryList } from './RepositoryList'
import { AppBar } from './AppBar'
import { Routes, Route, Navigate } from 'react-router-native'

const Main = () => {
  return (
    <View style={{flex:1}} >
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} />
        <Route path='/signin' element={ ()=>{ <Text>Working on it</Text>}} />
        
      </Routes>
    </View>
  )
}


export default Main