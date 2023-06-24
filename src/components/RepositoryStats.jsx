import React from 'react'
import { View } from 'react-native'
import { StyleText } from './StyleText'


const parseThousand = (value) => {
  return value >= 1000 ? `${Math.round(value/1000)/10}k`: String(value)
}

export function RepositoryStats({repository}) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
      <View>
        <StyleText align='center' fontWeight={'bold'}> {parseThousand(repository.stargazersCount)}</StyleText>
        <StyleText align='center'>Stars</StyleText>
      </View>
      <View>
        <StyleText align='center' fontWeight={'bold'}>{parseThousand(repository.forksCount)}</StyleText>
        <StyleText align='center'>Forks</StyleText>
      </View>
      <View>
        <StyleText align='center' fontWeight={'bold'}>{repository.reviewCount}</StyleText>
        <StyleText align='center'>Reviews</StyleText>
      </View>
      <View>
        <StyleText align='center' fontWeight={'bold'}>{repository.ratingAverage}</StyleText>
        <StyleText align='center'>Rating</StyleText>
      </View>
    </View>
  )
}