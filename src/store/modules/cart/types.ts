/**
 * Action types
 */
export enum CartActionTypes {
  ADD_REQUEST = '@cart/ADD_REQUEST',
  ADD_SUCCESS = '@cart/ADD_SUCCESS',
  UPDATE_AMOUNT_REQUEST = '@cart/UPDATE_AMOUNT_REQUEST',
  UPDATE_AMOUNT_SUCCESS = '@cart/UPDATE_AMOUNT_SUCCESS',
  REMOVE = '@cart/REMOVE'
}

export interface Cart {
  id: number
  title: string
  price: number
  priceFormatted?: number
  image: string
  amount: number
  subtotal?: string
}

/**
 * State type
 */
export interface CartState {
  readonly data: Cart[]
  readonly loading: boolean
  readonly error: boolean
}
