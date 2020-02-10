// helpers.js

const configurationCsvToArr = (csv: string): number[] => csv.split(',').map(v => +v)

export {
  configurationCsvToArr
}