import React from 'react'
import style from './FormControl.module.css'
import { Field } from 'redux-form'

const FormControl = ({ input, meta: {touched, error}, children }) => {
  let hasError = touched && error
  return (
    <div className={style.formControl + " " + (hasError ? style.error : '')}>
      <div>
        {children}
      </div>
      {hasError && <span>{error}</span>}
    </div>
  )
}
export const Textarea = (props) => {
  const { input, meta, ...restProps } = props;
  return <FormControl {...props}>
    <textarea {...input} {...restProps} />
  </FormControl>
}
export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return <FormControl {...props}>
    <input {...input} {...restProps} />
  </FormControl>
}
export const createField = (component, name, validators, type, placeholder, aboutText) => {
  return <div>
    <Field component={component} name={name} validate={validators} type={type} placeholder={placeholder} />{aboutText}
  </div>
}