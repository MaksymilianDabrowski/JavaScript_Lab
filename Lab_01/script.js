// const liczba1 = document.querySelector('#liczba1');
// const liczba2 = document.querySelector('#liczba2');
// const liczba3 = document.querySelector('#liczba3');
// const liczba4 = document.querySelector('#liczba4');

// var l1 = document.getElementById("liczba1").value;
// var l2 = document.getElementById("liczba2").value;
// var l3 = document.getElementById("liczba3").value;
// var l4 = document.getElementById("liczba4").value;

// var suma = l1 + l2 + l3 + l4;

// console.log(suma)
// const btnPrzelicz = document.querySelector('#przelicz');
// const wynikiPojemnik = document.querySelector('#wyniki');

// console.dir(liczba1)


// btnPrzelicz.addEventListener('click', () => {
//     const max100 = Math.min(liczba1.value, 100);
//     wynikiPojemnik.innerHTML = +liczba1.value
//     wynikiPojemnik.innerHTML = liczba1.value

//     console.log(suma.value)
// })


// WERSJA SHAME:
let l1;
let l2;
let l3;
let l4;
let suma;
let sr;
let min;
let max;

// struktura przycisku - przy funkcjach bazujemy na id
document.getElementById("myButton").onclick = function(){

    l1 = document.getElementById("myText1").value; // -> .value odda wartość liczbową
    l1 = Number(l1); // -> konwertujemy wartość stringa z HTML na liczbę
    l2 = document.getElementById("myText2").value;
    l2 = Number(l2);
    l3 = document.getElementById("myText3").value;
    l3 = Number(l3);
    l4 = document.getElementById("myText4").value;
    l4 = Number(l4);

    // prosta suma liczb
    suma = l1 + l2 + l3 + l4;

    sr = suma / 4;

    min = Math.min(l1,l2,l3,l4);

    max = Math.max(l1,l2,l3,l4);

    document.getElementById("wyniki-sumy").innerHTML = "Suma " + suma;
    document.getElementById("wyniki-średniej").innerHTML = "Średnia " + sr;
    document.getElementById("wyniki-min").innerHTML = "Min " + min;
    document.getElementById("wyniki-max").innerHTML = "Max " + max;
    // wyświetla w konsoli
    // console.log(l1); itp

    // pokazuje liczbę, usuwa pozostałe elementy strony
    // document.write(l1); itp

}



