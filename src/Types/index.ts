// types.ts placeholder

type TPLayerMode = string
type TNumberOfPlayers = number
interface IPlayerNames {
  [key: string]: string
}

interface IStateUserOptions {
  readonly playerMode: TPLayerMode
  readonly playerNames: IPlayerNames
  readonly numberOfPlayers: TNumberOfPlayers
}

interface IReducerUserOptions {
  (state: IStateUserOptions, action: any): IStateUserOptions;
}

interface IAction {
  type: string
}

interface ISetNumberOfPlayers extends IAction {
  numberOfPlayers: TNumberOfPlayers
}

interface ISetPlayerMode extends IAction {
  playerMode: TPLayerMode
}

type TPlayerCardType = string


interface IPlayerModeSelectProps {
  onChangeHandler: TSelectOnChangeCallback,
  playerMode: TPLayerMode
}

interface INumberOfPlayerSelectProps {
  onChangeHandler: TSelectOnChangeCallback
  numberOfPlayers: TNumberOfPlayers
}

interface IPerson {
  id: string
  name: string
  birthYear: string
  gender: string
  height: number
  __typename?: string
}

interface IStarships {
  id: string
  name: string
  model: string
  length: number
  __typename?: string
}

type TThemeConf = {
  [name: string]: string
}

type TPropsTheme = {
  theme: TThemeConf
};

type TSelectOnChangeCallback = (e: React.ChangeEvent<HTMLSelectElement>) => void

export {
  IPlayerNames,
  IStateUserOptions,
  IAction,
  ISetNumberOfPlayers,
  ISetPlayerMode,
  IPlayerModeSelectProps,
  INumberOfPlayerSelectProps,
  IReducerUserOptions,
  TPlayerCardType,
  TPropsTheme,
  IPerson,
  IStarships,
  TThemeConf,
  TSelectOnChangeCallback
}
