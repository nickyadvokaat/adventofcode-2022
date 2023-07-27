import { totalTopCalories } from './day01'

describe('Testing calorie counts', () => {
    const testData = [1000, 2000, 3000, 0, 4000, 0, 5000, 6000, 0, 7000, 8000, 9000, 0, 10000]
    test('Find the Elf carrying the most Calories.', () => {
        expect(totalTopCalories(testData)).toBe(24000)
    })
    test('Find the top three Elves carrying the most Calories.', () => {
        expect(totalTopCalories(testData, 3)).toBe(45000)
    })
})
