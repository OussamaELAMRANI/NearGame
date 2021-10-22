#!/usr/bin/env node

const chalk = require('chalk')

const { capitalizeFirstChar, createFolder, resolve } = require('./utils')
const { generateIndexFile, generateReactComponent } = require('./react')
const { generateTestFile } = require('./test')

const maker = async ({ argv }, done) => {
  const name = argv[2]

  if (!name) {
    console.error(chalk.red('Error: You must provide a component name as a 1st arg !'))
    return
  }

  const folderPath = '../../../assets/app/component'
  const fileName = capitalizeFirstChar(name)
  const distFolder = resolve(__dirname, `${folderPath}/${fileName}`)
  const testFolder = resolve(__dirname, `${distFolder}/__tests__`)

  try {
    await createFolder(distFolder)
    await createFolder(testFolder)
    await generateIndexFile({ distFolder, fileName })
    await generateReactComponent({ distFolder, fileName })
    await generateTestFile({ distFolder, fileName })

    done(chalk.green('Component generated successfully \u2728'))
  } catch (err) {
    done(chalk.red(err))
  }
}

maker(process, (doneStatus) => console.log(doneStatus))
