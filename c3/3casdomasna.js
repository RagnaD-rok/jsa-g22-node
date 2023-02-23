const studenti = [
    {ime: 'Bojan', prosek: 7.5, grad: 'Skopje'},
    {ime: 'Pero', prosek: 8.3, grad: 'Bitola'},
    {ime: 'Janko', prosek: 6.9, grad: 'Bitola'},
    {ime: 'Vesna', prosek: 9.2, grad: 'Skopje'},
    {ime: 'Elena', prosek: 9.9, grad: 'Kumanovo'},
    {ime: 'Vancho', prosek: 10, grad: 'Tetovo'},
    {ime: 'Elena', prosek: 9.9, grad: 'Ohrid'},
    {ime: 'Ivana', prosek: 6.9, grad: 'Kumanovo'},
    {ime: 'Natasha', prosek: 8.1, grad: 'Skopje'},
    {ime: 'Stanko', prosek: 7.2, grad: 'Strumica'}
];

// Домашна
// 1. Сите студенти од Скопје чие име завршува на а и имаат просек над 7, подредени по име (растечки).
// 2. Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки.
// 3. Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек.
// 4. Градови подредени по групна висина на просек.
// 5. Вкупен просек на студенти чие име завршува на а наспроти сите останати.

// задача 1


// const rezultati = studenti.filter(element => {
//     return element.ime.endsWith('a') && element.prosek > 7;
// })

// rezultati.sort((a, b) => {
//     if(a.ime.toLowerCase() < b.ime.toLowerCase()) return -1;
//     if(a.ime.toLowerCase() > b.ime.toLowerCase()) return 1;
//     return 0;
// })

// console.log(rezultati);

//задача 2

// const rezultati = studenti.filter(element => {
//     return element.prosek > 9 && element.grad !== 'Skopje'
// })

// rezultati.sort((a, b) => {
//     if(a.prosek > b.prosek) return -1;
//     if(a.prosek < b.prosek) return 1;
//     return 0;
// })

// console.log(rezultati);

// задача 3

// const rezultati = studenti.filter(element => {
//     return element.ime.length === 5
// })

// rezultati.sort((a, b) => {
//     if(a.prosek > b.prosek) return -1;
//     if(a.prosek < b.prosek) return 1;
//     return 0;
// })

// console.log(rezultati);

//задача 4
