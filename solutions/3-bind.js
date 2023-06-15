const bind = (obj, fn) => {
  return (...args) => fn.apply(obj, args);
}

export default bind;