import { ProductProps } from '../components/molecules/product';
import { productsUrl } from '../utils/api';
import { LoginActions } from './index';
import { RegisterActions } from './index';
import { ProductsActions } from './index';

export const SetEmail = (value: string) => {
  return LoginActions.SET_EMAIL(value)
}
export const SetPassword = (value: string) => {
  return LoginActions.SET_PASSWORD(value)
}
export const SetIsLoading = (value: boolean) => {
  return LoginActions.SET_IS_LOADING(value)
}
export const RegisterSetEmail = (value: string) => {
  return RegisterActions.REGISTER_EMAIL(value)
}
export const RegisterSetPassword = (value: string) => {
  return RegisterActions.REGISTER_PASSWORD(value)
}
export const RegisterSetConfirmPassword = (value: string) => {
  return RegisterActions.REGISTER_CONFIRM_PASSWORD(value)
}
export const RegisterSetUsername = (value: string) => {
  return RegisterActions.REGISTER_USERNAME(value)
}
export const RegisterSetIsLoading = (value: boolean) => {
  return RegisterActions.SET_IS_LOADING(value)
}
export const RegisterSetIsSuccess = (value: boolean) => {
  return RegisterActions.SET_IS_SUCCESS(value)
}

export const setProducts = (value:ProductProps[]) => {
  return ProductsActions.SET_PRODUCTS(value)
}

export const getAndSetProducts = () => {
  return async (dispatch:any) => {
    const request = await fetch(productsUrl)
    const response = await request.json()
    dispatch(setProducts(response))
  }
}