//Aufgabe 1

var myarray =[1, 2, 3, 4, 5];

function entferneElement(arr, wert) {
let position = arr.indexOf(wert);
 arr.splice(position, 1); // Entferne das Element an der gefundenen Position
 return arr; // Gib das modifizierte Array zurück
}

// Test
var myarray = [1, 2, 3, 4, 5];
console.log(entferneElement(myarray, 5)); // Sollte [1, 2, 4, 5] ausgeben

// Beispielcode Aufgabe 2
function summeZahlen(arr) {
 const summe = arr.reduce((akkumulator, aktuelleZahl) => akkumulator + aktuelleZahl, 0);
 return summe 
}

// Test
console.log(summeZahlen([1, 2, 3, 4, 5])); // Sollte 15 ausgeben

// Aufgabe 3

// Beispielcode
function entferneDuplikate(arr) {
// Verwenden Sie hier geeignete Array-Methoden
}

// Test
console.log(entferneDuplikate([1, 2, 2, 3, 4, 4, 5])); // Sollte [1, 2, 3, 4, 5] ausgeben

// Beispielcode
function bestimmeJahreszeit(monat) {

 if (monat >=12 && monat <3) {
return "Winter";
 } else if (monat >=3 && monat <6 ) {
 return "Frühling";
 } else if (monat >=6 && monat <9)  {
return "Sommer"; 
    } else  {
     return "Herbst";
 }
}
// Test
console.log(bestimmeJahreszeit(4)); // Sollte "Frühling" ausgeben
    

// Beispielcode
function istPasswortGueltig(passwort) {
     // Reguläre Ausdrücke zur Überprüfung des Passworts
    const mindestLaenge = /.{8,}/; // mindestens 8 Zeichen lang
     const mindestensEineZahl = /\d/; // mindestens eine Zahl
     const mindestensEinGrossbuchstabe = /[A-Z]/; // mindestens ein Großbuchstabe

    // Überprüfen, ob das Passwort den Sicherheitsanforderungen entspricht
    return mindestLaenge.test(passwort) && 
        mindestensEineZahl.test(passwort) && 
    mindestensEinGrossbuchstabe.test(passwort);
}

// Test
console.log(istPasswortGueltig("Test1234")); // Sollte true ausgeben


// Beispielcode
function taschenrechner(a, b, operation) {
    // Verwenden Sie Bedingungen, um die entsprechende Operation auszuführen
     
     if (operation=="+") {
    sum = a + b;
    console.log("The sum of a and b is: " + sum); 
     return sum
    } else if (operation=="/") {
    sum = a / b;
     console.log("The division of a and b is: " / sum); 
    return sum
     }  else {
     return "ungültige Operation"
    }
    }
     // Test
    console.log(taschenrechner(10, 5, "+")); // Sollte 15 ausgeben
    console.log(taschenrechner(10, 5, "/")); // Sollte 2 ausgeben
     console.log(taschenrechner(10, 5, "x")); // Sollte "Ungültige Operation" ausgeben


    // Beispielcode Aufgabe 11 
function findeMinMax(arr) {
     // Initialisieren Sie min und max entsprechend
     // Durchlaufen Sie das Array, um min und max zu aktualisieren
    
    let min= Math.min(...arr)
     let max= Math.max(...arr)

    return { min: min, max: max };
     }

     // Test
     console.log(findeMinMax([10, 2, 5, 1, 9])); // Sollte { min: 1, max: 10 } ausgeben
      
