//Todo
export const DarkColor = {
  white: '#FFFFFF',
  black: '#000000',
  bg: '#000000',
  color: '#ffffff',
  primary: '#3DEE9D',
  success: '#18E16A',
  warn: '#EBBC42',
  error: '#860E0E',
  primaryActive: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #3DEE9D',
}
export const LightColor = {
  white: '#FFFFFF',
  black: '#000000',
  bg: '#ffffff',
  color: '#000000',
  primary: '#3DEE9D',
  success: '#18E16A',
  warn: '#EBBC42',
  error: '#860E0E',
  primaryActive: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #3DEE9D',
}
// TODO

export type IThemeColor = typeof DarkColor & typeof LightColor

export default {
  light: LightColor,
  dark: DarkColor,
}
