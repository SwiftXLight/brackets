module.exports = (s, b) => {
    for (let i = 0; i < 30; i++)
      b.map(b => b[0] + b[1]).forEach(
        pair => (s = s.includes(pair) ? s.split(pair).join("") : s)
      );
    return s ? false : true;
};
