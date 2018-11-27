function objToFormData(obj) {
  let form = new FormData();
  Object.keys(obj).forEach(key=>{
    if(obj[key] !== undefined && obj[key] !== null){
      form.append(key,obj[key]);
    }
  })
  return form;
}

export default objToFormData;
