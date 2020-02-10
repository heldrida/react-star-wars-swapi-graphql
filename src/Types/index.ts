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

type TPropsTheme = {
  theme: {
    [name: string]: string;
  };
};

export {
  TPlayerNames,
  TPlayerCardType,
  TPropsTheme,
  IPerson,
  IStarships
}
