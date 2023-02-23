const studenti = [
    {ime: 'Bojan', prosek: 7.5},
    {ime: 'Pero', prosek: 8.3},
    {ime: 'Janko', prosek: 6.9},
    {ime: 'Vesna', prosek: 9.2},
    {ime: 'Elena', prosek: 9.9},

];

// studenti.sort((a, b) => {
//     if(a.prosek < b.prosek) return 1;
//     if(a.prosek > b.prosek) return -1;
//     return 0;
// });

// console.log(studenti);


studenti.sort((a, b) => {
const imeA = a.ime.toUpperCase();
const imeB = b.ime.toUpperCase();
if (imeA < imeB) {
    return -1;
}
if (imeA > imeB) {
    return 1;
}
return 0;
})

console.log(studenti);