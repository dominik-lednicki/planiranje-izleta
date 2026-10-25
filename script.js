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

// usporedbe
if (ukupanTrosak < budgetPrompt) dovoljnoNovca = true;
else if (ukupanTrosak > budgetPrompt) dovoljnoNovca = false;
if (budgetPrompt == ukupanTrosak) tocanIznos = true;
else if (budgetPrompt != ukupanTrosak) tocanIznos = false;

let nastavakPlaniranja = confirm("Zelite l inastaviti plainrati?");

alert(
    "Ime: " +
        imePrompt +
        "\nUkupan trošak: " +
        ukupanTrosak +
        "\nPreostali iznos: " +
        preostaoIznos +
        "\nDovoljno novca: " +
        dovoljnoNovca +
        "\nTocan iznos: " +
        tocanIznos +
        "\nNastavak planiranja: " +
        nastavakPlaniranja,
);
