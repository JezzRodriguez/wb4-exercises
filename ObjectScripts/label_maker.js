"use strict"
let myInfo = {
    name: "Jezz Rodriguez",
    address : "2537 Saint Paul Drive",
    city : "Atlanta",
    state: "Georgia",
    zip: "30331"
}

function printContact(info) {
    console.log(info.name);
    console.log(info.address);
    console.log(info.city + ", " + info.state +" " + info.zip);
    
}
printContact(myInfo)