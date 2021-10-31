const md = require('./config')

module.exports = function (source) {
  const content = md.render(source)
  console.log(content)
  return `
    <template>
      <section>
        <h1>md文件</h1>
      </section>
    </template>
  `
}
