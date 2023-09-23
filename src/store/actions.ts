import { ProductProps } from '../components/molecules/product';
import { productsUrl } from '../utils/api';
import { LoginActions } from './index';
import { RegisterActions } from './index';
import { ProductsActions } from './index';
import { CheckoutActions } from './index';

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

export const setCardNumber = (value: string) => {
  return CheckoutActions.SET_CARD_NUMBER(value)
}
export const setCardName = (value: string) => {
  return CheckoutActions.SET_CARD_NAME(value)
}
export const setCardExpiration = (value: string) => {
  return CheckoutActions.SET_CARD_EXPIRATION(value)
}
export const setCardCvv = (value: string) => {
  return CheckoutActions.SET_CARD_CVV(value)
}
export const setFirstName = (value: string) => {
  return CheckoutActions.SET_FIRST_NAME(value)
}
export const setLastName = (value: string) => {
  return CheckoutActions.SET_LAST_NAME(value)
}
export const setAddress = (value: string) => {
  return CheckoutActions.SET_ADDRESS(value)
}
export const setCity = (value: string) => {
  return CheckoutActions.SET_CITY(value)
}
export const setState = (value: string) => {
  return CheckoutActions.SET_STATE(value)
}
export const setZip = (value: string) => {
  return CheckoutActions.SET_ZIP(value)
}
export const setCountry = (value: string) => {
  return CheckoutActions.SET_COUNTRY(value)
}
