/**
 * Created by hp on 2018/9/5.
 */

function getCookie(key) {
  var str = document.cookie;
  var arr = str.split('; ');
  for (var i = 0; i < arr.length; i++) {
    var arr2 = arr[i].split('=');
    if (arr2[0] == key) {
      return unescape(arr2[1]);
    }
  }
  return false;
}

export default getCookie;
