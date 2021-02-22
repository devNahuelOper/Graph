function maxValue(node, visited=new Set()) {
  if (visited.has(node)) return -Infinity;
  visited.add(node);
  let neighborMaxes = node.neighbors.map(neighbor => maxValue(neighbor, visited));
  // console.log('neighborMaxes: ', neighborMaxes);
  return Math.max(node.val, ...neighborMaxes);
}

module.exports = {
    maxValue
};