/*
Diketahui ada bilangan 1 sampai dengan 500. Tugas anda adalah mencari JUMLAH bilangan prima yang ada di antara bilangan itu
*/

function jumlahBilanganPrima(){
    var hasil = 0;
    for (var i = 1; i <= 500; i++) {
        var cek = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j === 0) {
                cek++;
            }
        }
        if (cek === 2) {
            hasil++;
        }
    }
    return hasil;
}

var jml = jumlahBilanganPrima();
console.log(jml);