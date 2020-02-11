// types.ts placeholder

interface IPlayerNames {
  [key: string]: string
}

interface IStateUserOptions {
  readonly playerType: string
  readonly playerNames: IPlayerNames
  readonly numberOfPlayers: number
}

interface IReducerUserOptions {
  (state: IStateUserOptions, action: any): IStateUserOptions;
}

interface IAction {
  type: string
}

interface ISetNumberOfPlayers extends IAction {
  numberOfPlayers: number
}

type TPlayerCardType = string

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
  IReducerUserOptions,
  TPlayerCardType,
  TPropsTheme,
  IPerson,
  IStarships,
  TThemeConf,
  TSelectOnChangeCallback
}
