/**
 * Created by hp on 2018/9/5.
 */
function setCookie(key, value, days) {
  var dates = new Date();
  dates.setDate(dates.getDate() + days);
  document.cookie = key + '=' + escape(value) + '; expires=' + dates;
}

export default setCookie;
