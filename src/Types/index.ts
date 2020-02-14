import { DocumentNode } from 'apollo-boost'

type TPlayerMode = string

type TPlayerName = string

type TNumberOfPlayers = number

type TThemeConf = {
  [name: string]: string,
  textDark: string,
  textLight: string,
  foregroundColor: string,
  backgroundColor: string,
  skyColor: string
}

type TSelectOnChangeCallback = (e: React.ChangeEvent<HTMLSelectElement>) => void

type TInputOnChangeCallback = (event: React.ChangeEvent<HTMLInputElement>) => void

interface IPlayerNames {
  [key: string]: TPlayerName
}

interface IStateUserOptions {
  readonly playerMode: TPlayerMode
  readonly playerNames: IPlayerNames
  readonly numberOfPlayers: TNumberOfPlayers
  readonly play: boolean
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
  playerMode: TPlayerMode
}

interface ISetPlayerName extends IAction {
  playerSystemName: TPlayerName,
  playerName: TPlayerName
}

type TPlayerCardType = string


interface IPlayerModeSelectProps {
  onChangeHandler: TSelectOnChangeCallback,
  playerMode: TPlayerMode
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

type TDeckCard = IPerson | IStarships

interface IQueryResponseData {
  allPeople?: {
    people?: IPerson[]
  },
  allStarships?: {
    starships?: IStarships[]
  }
}

interface IPropsPlayerNameSetter {
  onChangeHandler: TInputOnChangeCallback
  numberOfPlayers: TNumberOfPlayers
}

interface IPropsTheme {
  theme: TThemeConf
}

type TPropFlag = {
  [name: string]: any
}

interface IDispatchUserOptions {
  (action: React.SetStateAction<IStateUserOptions | undefined>): void
}

type TJSXElement = JSX.Element

interface IPropsGameProvider {
  children: TJSXElement[] | TJSXElement
}

interface IQueries {
  [name: string]: DocumentNode
}

interface IPropsCard {
  zIndex: number,
  rotate: number,
  translateXY: string, // example csv: "80px, 30px"
  showFace: boolean,
  visibilityDelay: number,
  metadata: TDeckCard,
  playerName?: string
}

interface IPickCardIndexed {
  index: number,
  translateXY: string,
  rotate: number,
  showFace: boolean,
  playerName: string,
  card: TDeckCard
}

type TPropFindWinner = IPickCardIndexed | undefined

export {
  IPlayerNames,
  IStateUserOptions,
  IAction,
  IDispatchUserOptions,
  ISetNumberOfPlayers,
  ISetPlayerMode,
  ISetPlayerName,
  IPlayerModeSelectProps,
  INumberOfPlayerSelectProps,
  IPropsGameProvider,
  TJSXElement,
  IQueries,
  TInputOnChangeCallback,
  IPropsPlayerNameSetter,
  IReducerUserOptions,
  TPlayerCardType,
  IPropsTheme,
  TPropFlag,
  IPerson,
  IStarships,
  TDeckCard,
  TThemeConf,
  TSelectOnChangeCallback,
  IPropsCard,
  TPlayerMode,
  IQueryResponseData,
  IPickCardIndexed,
  TPropFindWinner
}
