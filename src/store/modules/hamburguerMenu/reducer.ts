interface InterfaceInicitialState {
  menu: string
}

const InitialState: InterfaceInicitialState = {
  menu: 'none'
}

interface IAction {
  type: string
  menu: string
}

export default function menu(
  state = InitialState,
  action: IAction
): InterfaceInicitialState {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { menu: action.menu }
    default:
      return state
  }
}
