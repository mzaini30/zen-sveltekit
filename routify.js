const {writeFileSync} = require('fs')
const {generateRoutes} = require('vue-route-generator-jsx')
const {watch} = require('chokidar')

function generate(){
  writeFileSync('./src/routes.js', generateRoutes({
    pages: './src/pages'
  }))
}

if (process.argv[2] == '-w') {
  const watcher = watch('./src/pages')
  watcher.on('add', () => generate())
  watcher.on('unlink', () => generate())  
} else {
  generate()
}