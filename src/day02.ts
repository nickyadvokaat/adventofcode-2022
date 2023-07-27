import { readFile } from './util/fileUtil'

const scoreMatrix = [
    [3, 0, 6],
    [6, 3, 0],
    [0, 6, 3]
]
const rspMap: { [name: string]: number } = {
    'A': 0,
    'B': 1,
    'C': 2,
    'X': 0,
    'Y': 1,
    'Z': 2
}

const loseDrawWin = [
    [2, 0, 1],
    [0, 1, 2],
    [1, 2, 0]
]

export default function day02() {
    const data = readFile('02')
    console.log(totalScore(data))
    console.log(totalScore(data, true))
}

export function totalScore(data: string[], encryptedStrategy: boolean = false): number {
    return data
        .map(line => line.split(' '))
        .map(arr => {
            return [rspMap[arr[0]], rspMap[arr[1]]]
        })
        .map(arr => {
            return encryptedStrategy ? [arr[0], loseDrawWin[arr[1]][arr[0]]] : arr
        })
        .map(arr => scoreMatrix[arr[1]][arr[0]] + arr[1] + 1)
        .reduce((sum, total) => sum + total, 0)
}