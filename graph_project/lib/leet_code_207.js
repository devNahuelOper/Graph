// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
  let graph = buildGraph(prerequisites);
  let totalCourses = Object.keys(graph).length;

  let visited = new Set();

  let eligibleNodeExists = true;
  while (eligibleNodeExists) {
    eligibleNodeExists = false;

    for (let node in graph) {
      let allParentsVisited = graph[node].every(parent => visited.has(parent));
      if (!visited.has(node) && allParentsVisited) {
        eligibleNodeExists = true;
        visited.add(node);
      }
    }
  }

  return visited.size == totalCourses;
}

function buildGraph(edges) {
  let graph = {};

  edges.forEach(edge => {
    let [dest, src] = edge.map(String);
    if (dest in graph) {
      graph[dest].push(src);
    } else {
      graph[dest] = [src];
    }

    if (!(src in graph)) graph[src] = [];
  });

  return graph;
}

console.log(
  canFinish(5, [
    [1, 4],
    [2, 4],
    [3, 1],
    [3, 2],
  ])
);

// var canFinish = function (numCourses, prerequisites) {
//   let visited = new Set();
//   let map = new Map();

//   for (let prereq of prerequisites) {
//     let [dest, src] = prereq.map(String);

//     if (map.has(dest)) {
//       map.get(dest).push(src);
//     } else {
//       map.set(dest, [src]);
//     }

//     if (!map.has(src)) map.set(src, []);
//   }

//   let totalCourses = [...map.keys()].length;

//   let eligibleNodeExists = true;

//   while (eligibleNodeExists) {
//     eligibleNodeExists = false;

//     for (let node of [...map.keys()]) {
//       let allParentsVisited = map
//         .get(node)
//         .every((parent) => visited.has(parent));
//       if (!visited.has(node) && allParentsVisited) {
//         eligibleNodeExists = true;
//         visited.add(node);
//       }
//     }
//   }

//   return visited.size == totalCourses;
// };