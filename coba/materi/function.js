function hitung(p1,p2) {
    return p1*p2;
}

console.log(hitung(2,4)); // 8

let hitung2 = function(p1,p2) {
    return p1/p2;
}

console.log(hitung2(10,5)); // 2

let hitung3 = (p1,p2)=>{
    return p1+p2;
}

console.log(hitung3(2,2)); //4

function manusia(nama, umur) {
    this.nama = nama;
    this.usia = umur;
    this.profil = ()=>{
        return this.nama+' '+this.usia;
    }
}

let satrio = new manusia('satrio', 39);

console.log(satrio.profil());

function hitung4(p1,p2) {
    let hasil = p1+p2;
    if(hasil < 50){
        console.log(hasil);
      hasil = hitung4(hasil,1);
    }
}
hitung4(2,3);
// console.log(hitung4(2,3));
