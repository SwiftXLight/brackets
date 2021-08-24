module.exports = (str, bracketsConfig) => {
  for (let i = 0; i < 30; i++)
    bracketsConfig.map(bracketsConfig => bracketsConfig[0] + bracketsConfig[1]).forEach(
      pair => (str = str.includes(pair) ? str.split(pair).join('') : str)
    );
  return str ? false : true;
};
