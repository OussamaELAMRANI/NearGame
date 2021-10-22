const { generateFile, templateCompiler } = require('./utils')
const { testComponent } = require('./template')

const generateTestFile = async ({ distFolder, fileName }) => {
  const testTemplate = templateCompiler(testComponent, { component: fileName })
  const filePath = `${distFolder}/__tests__/${fileName}.spec.tsx`

  await generateFile(filePath, testTemplate)
}

module.exports = { generateTestFile }
