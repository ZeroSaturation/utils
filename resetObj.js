function resetObj(obj, param = {}, deep) {
  if(obj.constructor === Object){
    Object.keys(obj).forEach(key => {
      let newData;
      if(!!newData) {
        newData = obj[key].constructor();
      }
      if(deep && obj[key].constructor === Object){
        resetObj(obj[key],param[key],deep);
      }else{
        if(param[key] !== null && param[key] !== undefined){
          obj[key] = param[key]
        }else{
          obj[key] = newData;
        }
      }
    })
    return obj;
  }else {
    return {};
  }
}

export default resetObj;
