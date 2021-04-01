import fetch from 'node-fetch';

let myData = {}

fetch("https://reqres.in/api/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(myData)
})
    .then(res => res.json())
    .then((data) => {
        console.log(data)
    })