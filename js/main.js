let lis = document.querySelectorAll(".our-work ul li");
let imags = document.querySelectorAll(".our-work .work");
let services = document.querySelector(".services");
let servicesDiv = document.querySelectorAll(".services .row div");
let ourWork = document.querySelector(".our-work");
let ourWorkDiv = document.querySelectorAll(".our-work .row div");
let stuff = document.querySelector(".stuff");
let laptop = document.querySelector(".stuff .row img");
let stuffP = document.querySelector(".stuff .row .stuff-p");
let team = document.querySelector(".team");
let teamDiv = document.querySelectorAll(".team .row div");
let techs = document.querySelector(".techs");
let techsDiv = document.querySelectorAll(".techs .row div");
let blog = document.querySelector(".blog");
let blogDiv = document.querySelectorAll(".blog .row div");
let navbar = document.querySelector(".navbar");
let search = document.querySelector(".search");
let searchContainer = document.querySelector(".search-container");
let searhExit = document.querySelector(".search-container .svg");
let btnMain = document.querySelector(".btn-main");
let btnMainContainer = document.querySelector(".login-container");
let btnMainExit = document.querySelector(".login-container .svg");


lis.forEach((el) => {
    el.addEventListener("click",classSwicher);
    el.addEventListener("click",imagsManage);
});

function classSwicher() {
    lis.forEach((e) => {
        e.classList.remove("active");
        this.classList.add("active");
    });
};

function imagsManage() {
    imags.forEach((e) => {
        e.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((e) => {
        e.style.display = "block";
    });
};

window.onscroll = function() {
    if (window.scrollY >= services.offsetTop - 300) {
        servicesDiv.forEach((e) => {
            e.style.transform = "translateY(0)";
        })
    };
    if (window.scrollY >= ourWork.offsetTop - 300) {
        ourWorkDiv.forEach((e) => {
            e.style.transform = "translateX(0)";
        })
    };
    if (window.scrollY >= stuff.offsetTop - 400) {
            laptop.style.transform = "translateX(0)";
            stuffP.style.transform = "translateX(0)"
    };
    if (window.scrollY >= team.offsetTop - 300) {
        teamDiv.forEach((e) => {
            e.style.transform = "translateY(0)";
        })
    };
    if (window.scrollY >= techs.offsetTop - 700) {
        techsDiv.forEach((e) => {
            e.style.transform = "translateY(0)";
        })
    };
    if (window.scrollY >= blog.offsetTop - 700) {
        blogDiv.forEach((e) => {
            e.style.transform = "translateY(0)";
        })
    };
    if (window.scrollY >= services.offsetTop) {
        navbar.style.cssText = "background-color: rgb(0 46 48 / 74%); backdrop-filter: blur(4px);";
    }else {
        navbar.style.cssText = "background-color: var(--dark-color);";
    };
}

search.addEventListener("click", openSearch);
searhExit.addEventListener("click", exitSearch);
btnMain.addEventListener("click", openLogin);
btnMainExit.addEventListener("click", exitLogin);

function openSearch() {
    searchContainer.style.cssText = "display: block; transform: translateY(0);";
}

function exitSearch() {
    searchContainer.style.cssText = "transform: translateY(-100%);";
}

function openLogin() {
    btnMainContainer.style.cssText = "display: block; transform: translateY(0);";
}

function exitLogin() {
    btnMainContainer.style.cssText = "transform: translateY(-100%);";
}