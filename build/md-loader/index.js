const md = require('./config')

module.exports = function(source){
    const content = md.render(source);
    console.log(content);
}