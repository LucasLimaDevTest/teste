const container = document.querySelector('#container');
let btn = document.querySelector('#btn');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", 
"Saturday"];

btn.addEventListener('click', () =>{
    let data = new Date('2023-07-19');
    container.innerHTML = data.setHours(10) + data.setMinutes(15) + data.setSeconds(70) + data;

    
})