const hamburger = document.querySelector(".hamburger");
const sideBar = document.querySelector(".sideBar");

const handleClick = () => {
    hamburger.classList.toggle("hamburger-active");
    sideBar.classList.toggle("sideBar-active");
}

hamburger.addEventListener("click", handleClick);


console.log("cześć")