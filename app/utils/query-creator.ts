export function queryCreator(object) {
  console.log(object);
  const keys = Object.keys(object);
  let query = '';
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(key, object[key]);
    if (Object.prototype.toString.call(object[key]) === '[object Array]') {
      for (let j = 0; j < object[key].length; j++) {
        query += `&${key}=${encodeURIComponent(object[key][j])}`;
      }
    } else {
      if (object[key]) {
        query += `&${key}=${encodeURIComponent(object[key])}`;
      }
    }
  }
  if (query != '') {
    query = '?' + query.substring(1);
  }
  return query;
}
