import { LoginActions } from './index';

export const SetEmail = (value: string) => {
  return LoginActions.SET_EMAIL(value)
}
export const SetPassword = (value: string) => {
  return LoginActions.SET_PASSWORD(value)
}
export const SetIsLoading = (value: boolean) => {
  return LoginActions.SET_IS_LOADING(value)
}