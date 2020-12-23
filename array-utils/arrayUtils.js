const forEach = function(arr,callback){

    for(let i=0;i<arr.length;i++){
      callback(arr[i],i,arr);
    }
}

const map = function(callback) {
  let newArray = []
  for (let i = 0; i < this.length; i++) {
    let newMappedItem = callback(this[i], i, this)
    newArray.push(newMappedItem)
  }
  return newArray
}

const reduce =  function(callback, initialValue){
  for (let i = 0; i < this.length; i++) {
    initialValue = callback(initialValue, this[i], i, this)
  }
  return initialValue
}

const filter = function(callback){
  let filtered=[]
  for(let i=0;i< this.length;i++)
  {
     if(callback(this[i]))
       filtered.push(this[i]) 
  }

  return filtered
}

export {
  forEach,
  map,
  filter,
  reduce,
}