const arr = [1, 2, 3, [4, 5, [6, [3, 4]]]];

function flat(data) {
  const ar = [];
  if (Array.isArray(data)) {
    data.forEach(function (e) {
      ar.push(...flat(e));
    });
  } else ar.push(data);
  return ar;
}
console.log(flat(arr));

//One Liner code...
console.log(arr.flat(Infinity));
