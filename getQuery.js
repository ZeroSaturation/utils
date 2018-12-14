/**
 * Created by hp on 2018/9/5.
 */
function getQuery(obj = null) {
  if(obj && obj.constructor === Object){
    let arr = [];
    Object.keys(obj).forEach(key => {
      arr.push(`${key}=${encodeURIComponent(obj[key])}`);
    })
    return '?' + arr.join('&');
  }else {
    return "";
  }
}
export default getQuery;
