import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme.js'

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  bold: {
    fontWeight:theme.fontWeights.bold
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  subHeading: {
    fontSize:theme.fontSizes.subHeading
  },
  textAlignCenter: {
    textAlign:'center'
  }
})

export function StyleText({children, align, color, fontSize, fontWeight, style, ...restOfProps}) {
  
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subHeading' && styles.subHeading,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.textAlignCenter,
    style,
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}