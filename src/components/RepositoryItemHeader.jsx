import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { StyleText } from './StyleText'
import theme from '../theme'

export default function RepositoryItemHeader({repository}) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{ uri: repository.ownerAvatarUrl }} />
      </View>
      <View style={{flex:1, paddingLeft: 10 }}>
        <StyleText>{repository.id} </StyleText>
        <StyleText fontSize={'subHeading'} fontWeight={'bold'}>
          {repository.fullName}
        </StyleText>
        <StyleText color={'secondary'} >
          {repository.description}
        </StyleText>
        <StyleText style={styles.language}>
          {repository.language}
        </StyleText>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 2, 
  },
  language: {
    padding: 4, 
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical:4
  },
  image: {
    width: 48,
    height: 48,
    margin: 'auto',
    borderRadius: 5,
  }
})