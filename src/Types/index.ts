// types.ts placeholder

type TPlayerNames = {
  [key: string]: string
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

export {
  TPlayerNames,
  TPlayerCardType,
  TPropsTheme,
  IPerson,
  IStarships,
  TThemeConf
}
