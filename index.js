// Code your solutions in this file
function writeCards(arrayOfNames, eventName) {
    arrayOfMessages = [];
    for (let i = 0; i < arrayOfNames.length; i++) {
        debugger;
        arrayOfMessages.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`);
    }
    return arrayOfMessages;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


function countDown(number) {
    let i = number;
    while (i >= 0) {
        console.log(i--);
    }

}

countDown(10);