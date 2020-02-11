// types.ts placeholder

type TPLayerMode = string
type TPlayerName = string
type TNumberOfPlayers = number
interface IPlayerNames {
  [key: string]: TPlayerName
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

interface ISetPlayerName extends IAction {
  playerSystemName: TPlayerName,
  playerName: TPlayerName
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

interface IPropsPlayerNameSetter {
  onChangeHandler: TInputOnChangeCallback
  numberOfPlayers: TNumberOfPlayers
}

type TThemeConf = {
  [name: string]: string
}

type TPropsTheme = {
  theme: TThemeConf
};

type TSelectOnChangeCallback = (e: React.ChangeEvent<HTMLSelectElement>) => void
type TInputOnChangeCallback = (event: React.ChangeEvent<HTMLInputElement>) => void

export {
  IPlayerNames,
  IStateUserOptions,
  IAction,
  ISetNumberOfPlayers,
  ISetPlayerMode,
  ISetPlayerName,
  IPlayerModeSelectProps,
  INumberOfPlayerSelectProps,
  TInputOnChangeCallback,
  IPropsPlayerNameSetter,
  IReducerUserOptions,
  TPlayerCardType,
  TPropsTheme,
  IPerson,
  IStarships,
  TThemeConf,
  TSelectOnChangeCallback
}
