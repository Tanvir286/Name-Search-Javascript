
let info = [
    {
        "name": "tanvir",
        "img": "tanvir.jpg",
        "age": 23,
        "designation": "MERN STACK Developer",
        "blood": "0+ Positive"
    },
    {
        "name": "soysov",
        "img": "soysov.jpg",
        "age": 24,
        "designation": "Full Stack Developer",
        "blood": "A+ Positive"
    },
    {
        "name": "ahamed",
        "img": "ahamed.jpg",
        "age": 25,
        "designation": "Cse Developer",
        "blood": "AB+ Positive"
    },
    {
        "name": "tohomina",
        "img": "tohomina.jpg",
        "age": 45,
        "designation": "Teacher",
        "blood": "A+ Positive"
    },
    {
        "name": "fahim",
        "img": "fahim.jpg",
        "age": 25,
        "designation": "Teacher",
        "blood": "B+ Positive"
    },
    {
        "name": "fozlul",
        "img": "fozlul.jpg",
        "age": 45,
        "designation": "Muhazim & Teacher",
        "blood": "O+ Positive"
    },
    {
        "name": "jakir",
        "img": "jakir.jpg",
        "age": 45,
        "designation": "Teacher",
        "blood": "A- Negative"
    },
    {
        "name": "karim",
        "img": "karim.jpg",
        "age": 26,
        "designation": "Student",
        "blood": "O+ Positive"
    },
    {
        "name": "lutfor",
        "img": "lutfor.jpg",
        "age": 45,
        "designation": "Main Teacher",
        "blood": "A- Negative"
    },
    {
        "name": "mehedi",
        "img": "mehedi.jpg",
        "age": 25,
        "designation": "UAP Student",
        "blood": "O+ Positive"
    },
    {
        "name": "miner",
        "img": "miner.jpg",
        "age": 25,
        "designation": "Lab Teacher",
        "blood": "A+ Positive"
    },
    {
        "name": "morsedul",
        "img": "morsedul.jpg",
        "age": 29,
        "designation": "Student",
        "blood": "A+ Positive"
    },
    {
        "name": "person",
        "img": "person.png",
        "age": 27,
        "designation": "Student",
        "blood": "A+ Positive"
    },
    {
        "name": "razzak",
        "img": "razzak.jpg",
        "age": 27,
        "designation": "Student",
        "blood": "A+ Positive"
    },
    {
        "name": "sajib",
        "img": "sajib.jpg",
        "age": 27,
        "designation": "Student",
        "blood": "A+ Positive"
    },
]


let inputBox= document.querySelector(".input");
let btn = document.querySelector(".btn");

let img = document.querySelector(".img");
let nam = document.querySelector("#name");
let age = document.querySelector("#age");
let designation = document.querySelector("#des");
let blood = document.querySelector("#blood");
let error = document.querySelector(".error")


btn.addEventListener("click",() =>{

  

    let input_check = inputBox.value.toLowerCase();

    let search =info.find(item=>{
        return item.name == input_check;
    })
    

    if(search){
        
      img.style.display="block";
      img.src = `./images/${search.img}`
      nam.innerHTML = `Name: ${search.name}`
      age.innerHTML = `Age: ${search.age}`
      designation.innerHTML = `Designation: ${search.designation}`
      blood.innerHTML = `Blood: ${search.blood}`

      inputBox.value = '';
      error.style.display="none"

    }else if(inputBox.value == ""){
        error.style.display = "block";
        clear();
    }else{
        error.style.display = "block";
        clear();
    }

    

});



let clear = () =>{
    img.style.display="none";
    nam.innerHTML = "";
    age.innerHTML = "";
    designation.innerHTML = "";
    blood.innerHTML = "";
    inputBox.value = '';
}
 