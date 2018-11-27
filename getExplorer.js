export default function  getExplorer() {
  var explorer = window.navigator.userAgent ;
  //ie
  if (explorer.indexOf("MSIE") >= 0) {
    return 'ie';
  }
  //firefox
  else if (explorer.indexOf("Firefox") >= 0) {
    return 'Firefox';
  }
  //Chrome
  else if(explorer.indexOf("Chrome") >= 0){
    return 'Chrome';
  }
  //Opera
  else if(explorer.indexOf("Opera") >= 0){
    return 'Opera';
  }
  //Safari
  else if(explorer.indexOf("Safari") >= 0){
    return 'Safari';
  }
} 
