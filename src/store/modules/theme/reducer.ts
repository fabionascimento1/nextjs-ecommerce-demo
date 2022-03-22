interface InterfaceInicitialState {
  theme: string
}

const InitialState: InterfaceInicitialState = {
  theme: 'light'
}

interface IAction {
  type: string
  theme: string
}

export default function theme(
  state = InitialState,
  action: IAction
): InterfaceInicitialState {
  switch (action.type) {
    case 'CHANGE_THEME':
      return { theme: action.theme }
    default:
      return state
  }
}
