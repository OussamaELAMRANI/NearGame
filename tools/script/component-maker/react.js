const { resolve, generateFile, templateCompiler } = require('./utils')
const { functionalComponent } = require('./template')

const generateIndexFile = async ({ distFolder, fileName }) => {
  const template = `export { default } from './${fileName}'\n`
  const filePath = resolve(__dirname, `${distFolder}/index.ts`)

  await generateFile(filePath, template)
}

const generateReactComponent = async ({ distFolder, fileName }) => {
  const template = templateCompiler(functionalComponent, { component: fileName })
  const filePath = resolve(__dirname, `${distFolder}/${fileName}.tsx`)

  await generateFile(filePath, template)
}

module.exports = {
  generateIndexFile, generateReactComponent
}
