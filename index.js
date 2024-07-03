let menu = document.querySelector(".menu-bar");
let closeBar = document.querySelector(".close-menu");
let respNav = document.querySelector(".resp-navbar");

let overlay = document.querySelector("#overlay");

let feature = document.querySelector('#feature')
let featureDropdown = document.querySelector(".respo-feature-dropdown")
let company = document.querySelector('#company')
let companyDropdown = document.querySelector(".respo-company-dropdown")

let featureArrowDown = document.querySelector(".respo-f-arrow-down");
let featureArrowUp = document.querySelector(".respo-f-arrow-up")

let companyArrowDown = document.querySelector(".respo-c-arrow-down");
let companyArrowUp = document.querySelector(".respo-c-arrow-up")

console.log(feature)


menu.addEventListener('click' , ()=> {
   console.log("menu mei hu")

   respNav.classList.remove("animation-reverse");
    respNav.classList.add("animation-right");
    overlay.style.display = "block";
})

closeBar.addEventListener('click' , ()=> {
   console.log("close mei hu")

   respNav.classList.remove("animation-right");
   respNav.classList.add("animation-reverse");
 
    overlay.style.display = "none";
})

feature.addEventListener('click' , ()=> {
   

 if(featureDropdown.classList.contains("active-dropdown")) {
    featureDropdown.classList.remove("active-dropdown");
    featureDropdown.classList.add("respo-feature-dropdown")
    featureArrowDown.style.display = "inline";
    featureArrowUp.style.display = "none";
    
  

 }else{
    featureDropdown.classList.remove("respo-feature-dropdown")
    featureDropdown.classList.add("active-dropdown");
    featureArrowDown.style.display = "none";
    featureArrowUp.style.display = "inline"
   
    
 }
})

company.addEventListener('click' , ()=> {
    

 if(companyDropdown.classList.contains("active-dropdown")) {
    console.log("if me hai")

    companyDropdown.classList.remove("active-dropdown");
    companyDropdown.classList.add("respo-company-dropdown")
    companyArrowDown.style.display = "inline";
    companyArrowUp.style.display = "none";
    
    
  

 }else{
    console.log("else me hai")
    companyDropdown.classList.remove("respo-company-dropdown")
    companyDropdown.classList.add("active-dropdown");
    companyArrowDown.style.display = "none";
    companyArrowUp.style.display = "inline";
   
    
 }
})
