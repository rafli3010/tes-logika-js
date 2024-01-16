function hitungKaosKaki(arr) {
  let frekuensi = {};
  let kaosKaki = 0;

  for (i = 0; i < arr.length; i++) {
    let element = arr[i];
    frekuensi[element] = (frekuensi[element] || 0) + 1;
  }

  for (let x in frekuensi) {
    kaosKaki = kaosKaki + Math.floor(frekuensi[x] / 2);
  }

  return kaosKaki;
}

console.log("Output : " + hitungKaosKaki([10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output: 3
console.log(
  "Output : " + hitungKaosKaki([6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5])
); // Output: 6
console.log("Output : " + hitungKaosKaki([1, 1, 3, 1, 2, 1, 3, 3, 3, 3])); // Output: 4
