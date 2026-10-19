
document.getElementById("izracunaj").addEventListener("click", function () {
    const prihodkiVnos = document.getElementById("prihodki").value;
    const stroskiVnos = document.getElementById("stroski").value;

    const rezultat = document.getElementById("rezultat");
    const sporocilo = document.getElementById("sporocilo");

    if (prihodkiVnos === "" || stroskiVnos === "") {
        sporocilo.textContent = "Prosim, izpolni obe polji.";
        return;
    }

    const prihodki = Number(prihodkiVnos);
    const stroski = Number(stroskiVnos);

    if (!Number.isFinite(prihodki) || !Number.isFinite(stroski)
        || prihodki < 0 || stroski < 0) {
        sporocilo.textContent = "Vnesi veljavna pozitivna števila ali nič.";
        return;
    }

    const razlika = prihodki - stroski;

    rezultat.textContent = razlika.toLocaleString("sl-SI", {
        style: "currency",
        currency: "EUR"
    });

    if (razlika > 0) {
        sporocilo.textContent = "Studio posluje s presežkom prihodkov.";
    } else if (razlika < 0) {
        sporocilo.textContent = "Stroški presegajo prihodke.";
    } else {
        sporocilo.textContent = "Prihodki in stroški so izenačeni.";
    }
});
