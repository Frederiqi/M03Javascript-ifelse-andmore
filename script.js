const age = 20;
if (age >= 18) {
    console.log("Je mag naar binnen.")
} else {
    console.log("Je bent te jong en wordt vriendelijk verzocht buiten te blijven.")
}
const isFemale = true;
if (isFemale) {
    console.log("Yes, je hebt toegang tot de ladiesnight.")
} else {
    console.log("Je bent geen vrouw en kan daarom niet naar de ladiesnight.")
}
const driverStatus = "Geenbob";
if (driverStatus == "Bob") {
    console.log("Jij bent de Bob en mag rijden.")
} else {
    console.log("Je mag helaas niet rijden.")
}
if (age >= 18 && age <= 25) {
    console.log("Je krijgt 50% korting!")
} else {
    console.log("Helaas, je hebt niet de juiste leeftijd voor de kortingsactie.")
}
const name = "Sarah";
if (name == "Bram" || name == "Sarah") {
    console.log("Je krijgt een gratis biertje!")
} else {
    console.log("Helaas, je krijgt geen gratis biertje.")
}
const totalAmount = 10;
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("Je krijgt gratis (vega)bitterballen!")
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("Je krijgt een gratis portie nachos!")
} else if (totalAmount >= 100) {
    console.log("Je krijgt een gratis fles champagne!")
} else {
    console.log("Helaas, je krijgt geen jubileumkorting.")
}

