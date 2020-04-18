export const required = (value) => {
  if (value) return undefined
  return 'Field is required'
}
export const maxLength = (maxLen) => (value) => {
  if (value && value.length > maxLen ) return `Max length is ${maxLen} symbols`
}