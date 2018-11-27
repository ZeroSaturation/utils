import getExplorer from './getExplorer'

var getExcel = (function () {
  var uri = 'data:application/vnd.ms-excel;base64,',
  template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
  base64 = function(s) {
    return window.btoa(unescape(encodeURIComponent(s)));
  },
  format = function(s, c) {
    return s.replace(/{(\w+)}/g, function(m, p) {
      return c[p];
    })
  };
  return function (table, fileName='excel',name) {
    if (!table.nodeType) table = document.getElementById(table)
    let ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
    // window.location.href = uri + base64(format(template, ctx));
    var objectUrl = uri + base64(format(template, ctx));
    // var a = document.createElement('a');
    var a = document.getElementById('download_a_blob') || document.createElement("a");
    // document.body.appendChild(a);
    // a.setAttribute('style', 'display:none');
    a.setAttribute('href', objectUrl);
    a.setAttribute('download', fileName + '.xls');
    a.click();
    URL.revokeObjectURL(objectUrl);
  }
})();


export default function tableToExcel(tableid,fileName) {
  if (getExplorer() == 'ie') {
    let curTbl = document.getElementById(tableid);
    let oXL = new ActiveXObject("Excel.Application");
    let oWB = oXL.Workbooks.Add();
    let xlsheet = oWB.Worksheets(1);
    let sel = document.body.createTextRange();
    sel.moveToElementText(curTbl);
    sel.select();
    sel.execCommand("Copy");
    xlsheet.Paste();
    oXL.Visible = true;

    try {
      let fname = oXL.Application.GetSaveAsFilename("Excel.xls", "Excel Spreadsheets (*.xls), *.xls");
    } catch (e) {
      console.log("Nested catch caught " + e);
    } finally {
      oWB.SaveAs(fname);
      oWB.Close(savechanges = false);
      oXL.Quit();
      oXL = null;
      let idTmr = window.setInterval(function (){
        window.clearInterval(idTmr);
        CollectGarbage();
      }, 1);
    }

  }
  else {
    getExcel(tableid,fileName)
  }
}
