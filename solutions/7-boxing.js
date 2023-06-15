const magic = (...args) => {
  let sum = args.reduce((prev, el) => prev + el, 0);
  const newMagic = (...newArgs) => {
      return magic(sum, ...newArgs);
  };
  newMagic.valueOf = () => {
      return sum;
  };
  return newMagic;
};

export default magic;
 