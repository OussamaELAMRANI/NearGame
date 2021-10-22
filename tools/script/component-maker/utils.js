const { resolve } = require('path')
const { existsSync, mkdirSync, writeFile } = require('fs')
const { promisify } = require('util')

const getCurrentFolderName = (folderName) => {
  return folderName.replace(/\s/g, '')
}

const capitalizeFirstChar = (str) => {
  return str.charAt(0).toUpperCase() + str.substring(1)
}

const createFolder = (distFolder) => {
  if (!existsSync(distFolder)) {
    mkdirSync(distFolder, 0o744)
  }
}

const generateFile = async (filePath, template) => {
  await AsyncWriteFile(filePath, template)
}

const AsyncWriteFile = promisify(writeFile)

const templateCompiler = (template, data) => {
  return template
    .trim()
    .replace(/{{(.*?)}}/g, (match) => {
      return data[match.split(/{{\s*|\s*}}/).filter(Boolean)[0]]
    })
}

module.exports = {
  getCurrentFolderName,
  capitalizeFirstChar,
  resolve,
  createFolder,
  generateFile,
  templateCompiler
}
