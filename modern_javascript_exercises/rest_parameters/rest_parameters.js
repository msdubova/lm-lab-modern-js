// Instructions can be found in rest_parameters.md

export function add(a, b, ...rest) {
  return rest.reduce((count, i) => count + i, a + b);
}

add(1, 2);

// module.exports = add;
