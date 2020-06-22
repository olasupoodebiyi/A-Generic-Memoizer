const genericMemoizer = (callback) => {
  const cache = {}
  return function(...args) {
    if (cache[args]) return cache[args];
    const result = callback.apply(this, args);
    cache[args] = result; 
    return result;
    }
}
