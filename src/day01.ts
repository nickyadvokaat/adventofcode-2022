import { readFile } from './util/fileUtil'

export default function day01() {
    const calories = readFile('01')
        .map(x => Number(x))

    console.log(totalTopCalories(calories))
    console.log(totalTopCalories(calories, 3))
}

export function totalTopCalories(calories: number[], top: number = 1): number {
    return calories.reduce((b, curr) => {
        if (curr === 0) {
            b.push([])
        } else {
            b[b.length - 1].push(curr)
        }
        return b
    }, [[]] as number[][])
        .map(x => x.reduce((sum, current) => sum + current, 0))
        .sort((n1, n2) => n2 - n1)
        .slice(0, top)
        .reduce((sum, current) => sum + current, 0)
}
