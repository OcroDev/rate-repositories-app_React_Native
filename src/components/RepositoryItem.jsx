import React from 'react'
import { View, StyleSheet,  } from 'react-native'
import { RepositoryStats } from './RepositoryStats'

import RepositoryItemHeader from './RepositoryItemHeader'
import theme from '../theme'

export const RepositoryItem = ({repository}) => {
  return (
    <View key={repository.id} style={styles.container}>
      <RepositoryItemHeader repository={repository} />
      <RepositoryStats repository={repository} />
    </View>
  )
}

// Styles
const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5,
    borderColor: theme.colors.textSecondary,
    borderWidth: 2,
    borderRadius: 10,
    margin: 10
  },
})