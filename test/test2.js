// terdapat 2 parameter, a adalah kunci jawaban, dan b adalah jawaban dari siswa,
// berikanlah nilai 4 untuk jawaban yang benar, dan -1 untuk jawaban yang salah, serta 0 untuk tidak menjawab
// jika nilai akhir nya kurang dari 0, maka beri nilai 0

function cekUjian(a,b){
    var nilai = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === b[i]) {
            nilai += 4;
        } else if (b[i] === '') {
            nilai += 0;
        } else {
            nilai -= 1;
        }
    }
    if (nilai < 0) {
        nilai = 0;
    }
    return nilai;
}

console.log(cekUjian(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6);
console.log(cekUjian(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7);
console.log(cekUjian(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16);
console.log(cekUjian(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0);