// unos podataka
let imePrompt = prompt("Unesite svoje ime");
let cijenaJedneUlaznicePrompt = prompt("Unesite cijenu jedne ulaznice");
let brojUlaznicaPrompt = prompt("Unesite koliko ulaznica želite kupiti");
let budgetPrompt = prompt("Unesite svoje budžet");

//izračun
let ukupanTrosak = cijenaJedneUlaznicePrompt * brojUlaznicaPrompt;
let preostaoIznos = ukupanTrosak - budgetPrompt;
let dovoljnoNovca;
let tocanIznos;

if (ukupanTrosak < budgetPrompt) dovoljnoNovca = true;
else if (ukupanTrosak > budgetPrompt) dovoljnoNovca = false;
if (budgetPrompt == ukupanTrosak) tocanIznos = true;
else if (budgetPrompt != ukupanTrosak) tocanIznos = false;
