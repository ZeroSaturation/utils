export default function fileSize(size = 0){
  if(size.constructor !== Number){
    throw new Error("参数必须为数字");
  }
  let tmp = size;
  let ext = ['Byte','KB','MB','GB','TB','PB'];
  let i = 0;
  while(tmp>1024){
    i++;
    tmp = tmp / 1024;
  }
  return tmp.toFixed(2) + ext[i];
}
