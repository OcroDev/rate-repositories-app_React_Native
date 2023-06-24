import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

export default function StyleTextInput({error, style={},children, ...props}) {
  const inputStyle = [
    styles.textInput,
    error && styles.textInputError,
    style
  ]
  
  return (
    <TextInput style={inputStyle} {...props} />
  )
}


const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    marginHorizontal: 10
  },
  textInputError: {
    borderColor:'red'
  }
})

