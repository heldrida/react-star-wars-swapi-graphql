import React, { useCallback, useContext } from 'react'
import { IStateUserOptions,
         IDispatchUserOptions,
         IPropsGameProvider,
         TJSXElement } from '../Types'

const GameStateContext = React.createContext<IStateUserOptions | undefined>(undefined)
const GameDispatchContext = React.createContext<IDispatchUserOptions | undefined>(undefined)

function GameProvider(props: IPropsGameProvider): TJSXElement {
  const [userOptions, setUserOptions] = React.useState<IStateUserOptions>()

  return (
    <GameStateContext.Provider value={userOptions}>
      <GameDispatchContext.Provider value={setUserOptions}>
        {props.children}
      </GameDispatchContext.Provider>
    </ GameStateContext.Provider>
  )
}

const useContextCreator = (name: string, context: React.Context<any>) => {
  const ctx = useContext(context)
  if (ctx === undefined) {
    new Error(`use${name}Context nested in ${name}ContextProvider`)
  }
  return ctx
}

function useUserOptionsState(): IStateUserOptions {
  const userOptionsState = useContextCreator('GameState', GameStateContext)
  return userOptionsState
}

function useUserOptionsSetter() {
  const setUserOptions: IDispatchUserOptions | undefined = useContextCreator('GameDispatch', GameDispatchContext)
  const cb = useCallback((userOptions) => {
    return setUserOptions && setUserOptions(userOptions)
  }, [setUserOptions])
  return cb
}

export {
  GameProvider,
  useUserOptionsState,
  useUserOptionsSetter
}
