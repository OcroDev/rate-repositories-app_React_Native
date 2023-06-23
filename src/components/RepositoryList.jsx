import React from 'react'
import { View, Text, FlatList } from 'react-native'
import repositories from '../data/repositories.js'
import { RepositoryItem } from './RepositoryItem.jsx'

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repository }) => (
        <RepositoryItem repository={repository} />
      )}
    >
    </FlatList>
  )
}