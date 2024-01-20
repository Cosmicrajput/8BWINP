//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
  const header = document.querySelector("header");
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

const scrollTopbtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
  scrollTopbtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopbtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//website btn dark/light
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  themeBtn.classList.toggle("sun");

  localStorage.setItem("saved-theme", getCurrentTheme());
  localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
  document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
  themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}



//Navigation menu items active on page scroll
window.addEventListener("scroll", () =>{
  const sections = document.querySelectorAll("section");
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    let sectionHeight = current.offsetHeight;
    let section= current.offsetTop - 50;
    let id = current.getAttribute("id");

    if(scrollY > section && scrollY <= section + sectionHeight){
      document.querySelector(".nav.items a[href*=" + id +"]").classList.add("active");
    }
    else{
      document.querySelector(".nav-items a[href*=" + id +"]").classList.remove("active");
    }
  });
});


//Responsive navigation menu toggle
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn =  document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
  navigation.classList.remove("active");
});

navItems.forEach((navItems) => {
  navItems.addEventListener("click", ()=> {
    navigation.classList.remove("active");
  });
});