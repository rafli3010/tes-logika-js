function jumlahKata(kalimat) {
  var kataKalimat = kalimat.split(/\s+/);
  var kataSpecial = 0;
  for (var i = 0; i < kataKalimat.length; i++) {
    if (!/[^a-zA-Z0-9-.,?]/.test(kataKalimat[i])) {
      kataSpecial++;
    }
  }
  return kataSpecial;
}

console.log("Output: " + jumlahKata("Saat meng*ecat tembok, Agung dib_antu oleh Raihan.")); // Output: 5
console.log("Output: " + jumlahKata("Berapa u(mur minimal[ untuk !mengurus ktp?")); // Output: 3
console.log("Output: " + jumlahKata("Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.")); // Output: 4
