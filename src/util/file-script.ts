import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

function syncWriteFile(filename: string, data: any) {
    /**
     * flags:
     *  - w = Open file for reading and writing. File is created if not exists
     *  - a+ = Open file for reading and appending. The file is created if not exists
     */
    writeFileSync(join(__dirname, filename), data, {
        flag: 'w',
    })

    const contents = readFileSync(join(__dirname, filename), 'utf-8')
    console.log(contents) // 👉️ "One Two Three Four"

    return contents
}

const nr = '02'
syncWriteFile(`src/day${nr}.ts`, '')
syncWriteFile(`src/day${nr}.spec.ts`, '')
syncWriteFile(`data/day${nr}.txt`, '')
syncWriteFile(`data/day${nr}-t.txt`, '')
