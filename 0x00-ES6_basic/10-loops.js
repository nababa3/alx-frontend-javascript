export default function appendToEachArrayValue(array, appendString) {
    let ar = [];
    for (const idx of array) {
      ar.push(appendString + idx);
    }
  
    return ar;
  }

