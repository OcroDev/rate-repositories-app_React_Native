import React from 'react'
import { Button, StyleSheet, Text, TextInput, View} from 'react-native'
import {Formik, useField} from 'formik'
import StyleTextInput from '../components/StyleTextInput'
import { StyleText } from '../components/StyleText'

const initialValues = {
  email: '',
  password:'',
}

const styles = StyleSheet.create({
  form: {
    marginTop:12,
  },
  button: {
    marginHorizontal: 50, 
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginTop: -5,
    marginLeft: 15,
    textDecorationLine: 'underline'
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
  <>
    <StyleTextInput
        value={field.value}
        error={meta.error}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
      />
      {meta.error && <StyleText style={styles.error}>{ meta.error}</StyleText>}
  </>
  )
}

const validate = (values) => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email is required *'
  } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email'    
  }
  console.log(errors)
  return errors
}

export function LogInPage() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validate={validate}
    >{({handleChange, handleSubmit, values}) => {
        return (
          <View style={styles.form}>
            
            <FormikInputValue
              name='email'
              placeholder='Email' />
            <FormikInputValue
              name='password'
              placeholder='Password'
              secureTextEntry />
            <View style={styles.button}>
              <Button style={styles.button} title='LogIn' onPress={handleSubmit} color={"#999"}/>
            </View>
            
          </View>
        )
    }}
    </Formik>
  )
}
