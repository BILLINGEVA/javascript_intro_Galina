//A1

// Erstellen einer Schleife mit let
for (let i = 0; i < 3; i++) {
    console.log(i); // Ausgabe: 0, 1, 2
}

// Versuch, auf die Schleifenvariable außerhalb der Schleife zuzugreifen
console.log(i); // Fehler: Uncaught ReferenceError: i is not defined

//A2

// Definieren einer Funktion mit einer mit `var` deklarierten Variablen
function exampleFunction() {
    var x = 10;
    console.log("Innerhalb der Funktion:", x); // Ausgabe: Innerhalb der Funktion: 10
}

// Zugriff auf die Variable außerhalb der Funktion vor dem Funktionsaufruf
console.log("Vor dem Funktionsaufruf:", x); // Ausgabe: Vor dem Funktionsaufruf: undefined

// Aufruf der Funktion
exampleFunction();

// Zugriff auf die Variable außerhalb der Funktion nach dem Funktionsaufruf
console.log("Nach dem Funktionsaufruf:", x); // Ausgabe: Nach dem Funktionsaufruf: undefined


//A3 

// Deklarieren einer Konstanten mit `const` und Zuweisen eines Werts
const myConst = 10;

// Versuch, den Wert der Konstanten zu ändern
myConst = 20; // TypeError: Assignment to constant variable.

console.log(myConst); // Wird nie erreicht aufgrund des Fehlers oben

//A4

// Versuch, auf eine Variable zuzugreifen, bevor sie deklariert wird
console.log(myVar); // ReferenceError: Cannot access 'myVar' before initialization
let myVar = 10;

//A5

// Erstellen einer for-Schleife mit `var`
for (var i = 0; i < 3; i++) {
    // Definition einer Funktion innerhalb der Schleife, die auf die Schleifenvariable zugreift
    function printValue() {
        console.log("Innerhalb der Funktion:", i);
    }

    // Aufruf der Funktion innerhalb der Schleife
    printValue();
}

// Zugriff auf die Schleifenvariable außerhalb der Schleife
console.log("Außerhalb der Schleife:", i);

//A6

// Erstellen eines Codeblocks (z. B. eine if-Anweisung)
if (true) {
    // Definition einer Funktion innerhalb des Blocks mit `let`
    let myFunc = function() {
        console.log("Diese Funktion wurde innerhalb des Blocks definiert.");
    };
}

// Versuch, außerhalb des Blocks auf die Funktion zuzugreifen
myFunc(); // ReferenceError: myFunc is not defined


//A7

// Deklarieren einer globalen Variable mit `var`
var globalVar = "Diese Variable wurde mit var deklariert";

// Deklarieren einer globalen Variable mit `let`
let globalLet = "Diese Variable wurde mit let deklariert";

// Zugriff auf beide Variablen über das `window`-Objekt
console.log(window.globalVar); // Ausgabe: Diese Variable wurde mit var deklariert
console.log(window.globalLet); // Ausgabe: undefined (nur wenn im globalen Scope)

//A8

function filterShoppingList(prices) {
    return prices.filter(price => price < 10 && price % 2 === 0);
}

// Beispiel:
const prices = [5, 12, 7, 9, 20, 25];
console.log(filterShoppingList(prices)); // Ausgabe: [20]


//A9

function filterAdultUsers(users) {
    return users.filter(user => user.alter >= 18);
}

// Beispiel:
const users = [{name: "Max", alter: 22}, {name: "Anna", alter: 16}];
console.log(filterAdultUsers(users)); // Ausgabe: [{name: "Max", alter: 22}]


//A10

function isPalindrome(username) {
    // Umwandlung des Benutzernamens in Kleinbuchstaben und Entfernung von Leerzeichen
    const formattedUsername = username.toLowerCase().replace(/\s/g, '');
    
    // Umkehrung des formatierten Benutzernamens
    const reversedUsername = formattedUsername.split('').reverse().join('');
    
    // Überprüfung, ob der formatierte Benutzername gleich seiner Umkehrung ist
    return formattedUsername === reversedUsername;
}

// Beispiel:
const username = "Anna";
console.log(isPalindrome(username)); // Ausgabe: true


//a14

function countVisitorsInRange(ages, min, max) {
    return ages.filter(age => age >= min && age <= max).length;
}

// Beispiel:
const ages = [22, 34, 15, 17, 18, 45];
const minAge = 18;
const maxAge = 35;
console.log(countVisitorsInRange(ages, minAge, maxAge)); // Ausgabe: 3
