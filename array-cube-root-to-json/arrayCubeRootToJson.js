const arrayCubeRootToJson = (arr) => {
    if(arr.length==0){
        throw '';
    }
    if(arr.includes(true) || arr.includes(false) || arr.includes(null)||arr.includes(undefined)){
        throw ''; 
    }
    let cubeRootData = new Map();
    arr.forEach(num => {
        const key=""+num;
        if(isNaN(num)){
            throw ''; 
        }
        else {
                cubeRootData.set(key,Math.cbrt(num));
        }
    });
let obj = Object.create(null);
  for (let [k,v] of cubeRootData) {
    obj[k] = v;
  }
    return obj;
};
export { arrayCubeRootToJson };
