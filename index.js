function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i);
      }
    } else {
      for (let key in collection) {
        callback(collection[key], key);
      }
    }
    return collection;
  }
  function myMap(collection, callback) {
    if (Array.isArray(collection)) {
      const result = [];
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i], i));
      }
      return result;
    } else if (typeof collection === 'object' && collection !== null) {
      const result = {};
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          result[key] = callback(collection[key], key);
        }
      }
      return result;
    }
  }
  

  function myReduce(collection, callback, acc) {
    myEach(collection, (value, key) => {
      if (acc === undefined) {
        acc = value;
      } else {
        acc = callback(acc, value, key);
      }
    });
    return acc;
  }

  function myFind(collection, predicate) {
    let found;
    myEach(collection, (value, key) => {
      if (predicate(value, key) && !found) {
        found = value;
        return false; // Return false to stop the iteration
      }
    });
    return found;
  }

  function myFilter(collection, predicate) {
    const result = Array.isArray(collection) ? [] : {};
    myEach(collection, (value, key) => {
      if (predicate(value, key)) {
        if (Array.isArray(result)) {
          result.push(value);
        } else {
          result[key] = value;
        }
      }
    });
  
    return result;
  }
  
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    }
    return array.slice(0, n);
  }
  
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    }
    return array.slice(-n);
  }
  
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    const values = [];
  
    myEach(object, (value) => {
      values.push(value);
    });
  
    return values;
  }
  
  