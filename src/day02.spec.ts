import { totalScore } from './day02'

describe('Testing calorie counts', () => {
    const testData = ['A Y', 'B X', 'C Z']
    test('Find the Elf carrying the most Calories.', () => {
        expect(totalScore(testData)).toBe(15)
    })
    test('Find the top three Elves carrying the most Calories.', () => {
        expect(totalScore(testData, true)).toBe(12)
    })
})
