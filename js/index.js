let meal=document.getElementById("s")
let submitBtn;
let searchContainer=document.getElementById("seaarch")


$(document).ready(function(){

})
jQuery(function(){
    $(".loading").fadeOut(1000)
})


async function food(){
    $(".loading").fadeIn(1000)
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let data =await response.json()
    console.log(data);
    displayFood(data.meals)
    $(".loading").fadeOut(1000)
}
food()
async function categories(){
    $(".loading").fadeIn(1000)
    meal.innerHTML=''
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let data =await response.json()
    console.log(data);
    displayCate(data.categories)
    $(".loading").fadeOut(1000)
}
async function ingre(){
    
    meal.innerHTML=''
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let data =await response.json()
    console.log(data);
    displayIngre(data.meals)
    
}

async function area(){
    $(".loading").fadeIn(1000)
    meal.innerHTML=''
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let data =await response.json()
    console.log(data);
    displayArea(data.meals)
    $(".loading").fadeOut(1000)
}


$("#search").on("input" ,function(){

})
$("#Categories").on("click" ,function(){

    categories()
    
})
$("#Area").on("click" ,function(){
  
    area()
    
})
$("#contact").on("click" ,function(){
  
    displayContact()
    
})
$("#search").on("click" ,function(){
   
    displaySearch()
    
})
$("#ingre").on("click" ,function(){
;
    ingre()
    
})

    function displayFood(arr){
        for(let i=0 ;i<arr.length;i++){
        meal.innerHTML+=`<div class="col-md-4 col-lg-3 g-4">
                <div onclick="getMealDetails('${arr[i].idMeal}')" class="img position-relative">

                    <img src="${arr[i].strMealThumb}" class="w-100 " alt="">
                    <div class="layer position-absolute">
                        <h5 class="position-absolute">${arr[i].strMeal}</h5>
                    </div>
                </div>
            </div>`
        
        }
    }
function displayCate(arr){
    $(".loading").fadeIn(100)
    for(let i=0 ;i<arr.length;i++){
     meal.innerHTML+=`<div class="col-md-4 col-lg-3 g-4">
            <div onclick="cateDetails('${arr[i].strCategory}')"  class="img position-relative">
                <img src="${arr[i].strCategoryThumb}" class="w-100 " alt="">
                <div class="layerCate position-absolute">
                    <h5 class="text-center">${arr[i].strCategory}</h5>
                    <p class="text-black fonty px-3"> ${arr[i].strCategoryDescription.split(" ").slice(0,20).join(" ")}
                    </p>
                </div>
            </div>
        </div>`
    
    }
    $(".loading").fadeOut(1000)
}
$(".col-md-4").on("click",function(){
    displayDetails()

})
async function getMealDetails(m){
   
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${m}`);
    let data =await response.json()
    console.log(data);
    displayDetails(data.meals[0])
}
function displayDetails(q){
    meal.innerHTML=''
    meal.innerHTML+=`<div class="col-md-4">
                            <img class="w-100 rounded-3 " src="${q.strMealThumb}" alt="">
                                <h2>${q.strMeal}</h2>
                        </div>
                        <div class="col-md-8">
                            <h2>Instructions</h2>
                            <p>${q.strInstructions}</p>
                            <h3><span class="fw-bolder">Area : </span>${q.strArea}</h3>
                            <h3><span class="fw-bolder">Category : </span>${q.strCategory}</h3>
                            <h3>Recipes :</h3>
                            <ul class="list-unstyled d-flex g-3 flex-wrap">
                                <li class="alert alert-info m-2 p-1">${q.strMeasure1} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure2} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure3} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure4} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure5} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure6} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure7} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure8} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure9} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure10} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure11} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure12} </li>
                                <li class="alert alert-info m-2 p-1">${q.strMeasure13} </li>
                            </ul>
            
                            <h3>Tags :</h3>
                            <ul class="list-unstyled d-flex g-3 flex-wrap">
                                
                    <li class="alert alert-danger m-2 p-1">Stew</li>
                            </ul>
            
                            <a target="_blank" href="http://www.geniuskitchen.com/recipe/authentic-jamaican-brown-stew-chicken-347996" class="btn btn-success">Source</a>
                            <a target="_blank" href="https://www.youtube.com/watch?v=_gFB1fkNhXs" class="btn btn-danger">Youtube</a>
                        </div>`
}

async function areaDetails(area) {
    meal.innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    response = await response.json()
    displayFood(response.meals.slice(0, 20))
}
async function cateDetails(cate) {
    meal.innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cate}`)
    response = await response.json()
    displayFood(response.meals)
}

async function ingreDetails(ingre) {
    meal.innerHTML = ""
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingre}`)
    response = await response.json()
    displayFood(response.meals)
}
function displayArea(arr) {
    for (let i = 0; i < arr.length; i++) {
        meal.innerHTML += `
        <div class="col-md-3">
                <div onclick="areaDetails('${arr[i].strArea}')" class="rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house fs-1 p-2 text-center"></i>
                        <h3>${arr[i].strArea}</h3>
                </div>
        </div>
        `
    }   

}

function displayIngre(arr){
    for(let i=0 ;i<arr.length;i++){
     meal.innerHTML+=`<div onclick="ingreDetails('${arr[i].strIngredient}')" class="col-md-4 col-lg-3 g-4 d-flex justify-content-center flex-column">
<i class="fa-solid fa-drumstick-bite fs-1 text-center"></i>
    <h3 class="text-center">${arr[i].strIngredient}</h3>
    <p>${arr[i].strDescription.split(" ").slice(0,15).join(" ")}</p>

        </div>`
    
    }
}

// function displaySearch(){
//        meal.innerHTML=''
//      meal.innerHTML+=`<div class="container">
//                 <div class="row">
//                     <div class="col-md-6">
//                         <input onkeyup="searchByName(this.value)" type="text" placeholder="search by Name" class="w-100 search">
//                     </div>
//                     <div class="col-md-6">
//                         <input onkeyup="searchByFLetter(this.value)" type="text" placeholder="search by First Letter" class="w-100 search">
//                     </div>
//                 </div>
//             </div>`
    
//     }

function displaySearch() {
    meal.innerHTML = ""
    meal.innerHTML += `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div> `

    
}
    
    async function searchByName(term) {
        
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        response = await response.json()
        response.meals ? displayFood(response.meals) : displayFood([])

    
    }
    
    async function searchByFLetter(term) {
        
        term == "" ? term = "a" : "";
        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${term}`)
        response = await response.json()
        response.meals ? displayFood(response.meals) : displayFood([])
    }


let x = $(".items-bar").outerWidth()
$(".items-bar").css({left: `-${x}px`})

let statess=false;


$("#i").on("click",function(){
    if(statess===true){

        $(".items-bar").animate({left:"0px"},1000)
        $(".left-bar").animate({left:`${x}px`},1000)
        $(".links li").animate({top:`0px`},1000)
        $(".open").removeClass("fa-align-justify");
        $(".open").addClass("fa-x ");
        statess=false;
    }
    else{
        $(".items-bar").animate({left:`-${x}px`},1000)
        $(".left-bar").animate({left:`0px`},1000)
        $(".links li").animate({top:`150px`},1000)
        $(".open").removeClass("fa-x");
        $(".open").addClass("fa-align-justify");
        statess=true;
    }
})


function displayContact() {
    meal.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `
    submitBtn = document.getElementById("submitBtn")


    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;




function inputsValidation() {
    if (nameInputTouched) {
        if (nameValidation()) {
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")

        } else {
            document.getElementById("nameAlert").classList.replace("d-none", "d-block")

        }
    }
    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if (passwordValidation()) {
            document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("passwordAlert").classList.replace("d-none", "d-block")

        }
    }
    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() &&
        emailValidation() &&
        phoneValidation() &&
        ageValidation() &&
        passwordValidation() &&
        repasswordValidation()) {
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value
}