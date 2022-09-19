/*
DNA adalah molekul penyimpan informasi utama dalam sistem biologis. Ini terdiri dari empat basa asam nukleat Guanin ('G'), Sitosin ('C'), Adenin ('A'), dan Timin ('T').

RNA, adalah molekul pembawa pesan utama dalam sel. RNA sedikit berbeda dari DNA struktur kimianya dan tidak mengandung Timin. Dalam RNA Timin digantikan oleh asam nukleat lain, Urasil ('U').
*/

let DNA1 = "TTTT"
let DNA2 = "GCAT"
let DNA3 = "GACCGCCGCC"

// replace T with U in DNA1
DNA1 = DNA1.replace(/T/g, 'U')

// replace T with U in DNA2
DNA2 = DNA2.replace(/T/g, 'U')

// replace T with U in DNA3
DNA3 = DNA3.replace(/T/g, 'U')



//output
console.log(DNA1) // "UUUU"
console.log(DNA2) // "GCAU"
console.log(DNA3) //  "GACCGCCGCC"