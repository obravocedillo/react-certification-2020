function random(limit) {
  return Math.floor(Math.random() * limit);
}

function getNotRepeatedItems(array) {
  return [...new Set(array)];
}

export { random, getNotRepeatedItems };
