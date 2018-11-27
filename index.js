const $util = new Object();
function plugin(Vue){
  if (plugin.installed) {
    return $util;
  }
  let utils = require.context(".", false, /\.js$/)
  // let $util = new Object();
  utils.keys().forEach(key=>{
    if (key === './index.js') return;
    let utilName = key.replace(/^\.\//, "").replace(/\.js/, ""); //key = './abcd.js'   utilName = 'abcd'
    if(!$util[utilName]){
      $util[utilName] = utils(key).default;        //$util['abcd'] = utils('./abcd.js')
    }
  });
  if(Vue) {
    Vue.prototype.$utils = $util;
  }
  return $util;
}

export default plugin;
