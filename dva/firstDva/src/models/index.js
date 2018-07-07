const context = require.context('./', false, /\.js$/);
export default context
    .keys()
    .filter(item => item !== './index.js') //记得要过滤掉index
    .map(key => context(key));