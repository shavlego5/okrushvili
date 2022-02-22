let scrollCount = 0;

window.addEventListener("scroll", () => {
    const top = document.getElementById("top");
    const about = document.getElementById("about");
    const work = document.getElementById("work");
    const service = document.getElementById("service");
    const shop = document.getElementById("shop");
    const contact = document.getElementById("contact");
    const menu = document.getElementById("menu");
    const footer = document.getElementById("footer");
    const scissor = document.getElementById("scissor");
    const explore = document.getElementsByClassName("explore")[0];
    top.classList.toggle("top", window.scrollY > 0);
    setTimeout(() => {
        about.classList.toggle("margin-top", window.scrollY > 0);
        work.classList.toggle("margin-top", window.scrollY > 0);
        service.classList.toggle("margin-top", window.scrollY > 0);
        shop.classList.toggle("margin-top", window.scrollY > 0);
        contact.classList.toggle("margin-top", window.scrollY > 0);
        footer.classList.toggle("margin-top", window.scrollY > 0);
    }, 1000)
    if(window.innerWidth > 424) {
        menu.classList.toggle("menu", window.scrollY > 0);
    }
    scissor.classList.toggle("scissor", window.scrollY > 0);
    explore.classList.toggle("explore-top", window.scrollY < 1);
    explore.classList.toggle("explore-top", window.scrollY > 0);
    let scrollPoint = window.innerHeight;
    work.classList.toggle("giraffe", window.scrollY >= scrollPoint * .8 && window.scrollY <= scrollPoint * 1.1);
})

let flipContainer = document.getElementsByClassName("flip-container");

function rotate(event) {
    let x = event.currentTarget.dataset.rotate;
    let y = event.currentTarget.dataset.direction;

    if (y === "back") {
        flipContainer[x].style.transform = "rotateY(-180deg)";
        event.currentTarget.dataset.direction = "front";
    } else {
        flipContainer[x].style.transform = "rotateY(0deg)";
        event.currentTarget.dataset.direction = "back";
    }
}

let modal = document.getElementById("modal");
let close = document.getElementById("close");
let modalContainer = document.createElement("div");
let workContainer = document.getElementsByClassName("work-container");
modalContainer.setAttribute("id", "modal-container");
let flip = document.getElementsByClassName("flip");
for (let i = 0; i < flip.length; i++) {
    modalContainer.appendChild(flip[i].cloneNode(true))
}
modal.appendChild(modalContainer);

let modalIthem = document.querySelectorAll("#modal-container .flip")

let modalFlipCount = 0;

function openModal(event) {
    modal.style.transform = "scale(1)";
    modalFlipCount = Number(event.currentTarget.dataset.modal);
    modalIthem[modalFlipCount].style.opacity = "1";
    setTimeout(() => {
        modalIthem[modalFlipCount].style.zIndex = "1";
    }, 1000)
}

function next() {
    for (let i = 0; i < modalIthem.length; i++) {
        modalIthem[i].style.opacity = "0";
        setTimeout(() => {
            modalIthem[i].style.zIndex = "0";
        }, 1000)
    }
    if (modalFlipCount === modalIthem.length - 1) modalFlipCount = -1;
    modalFlipCount++;
    modalIthem[modalFlipCount].style.opacity = "1";
    setTimeout(() => {
        modalIthem[modalFlipCount].style.zIndex = "1";
    }, 1000)
}

function prev() {
    for (let i = 0; i < modalIthem.length; i++) {
        modalIthem[i].style.opacity = "0";
        setTimeout(() => {
            modalIthem[i].style.zIndex = "0";
        }, 1000)
    }
    if (modalFlipCount === 0) modalFlipCount = modalIthem.length;
    modalFlipCount--;
    modalIthem[modalFlipCount].style.opacity = "1";
    setTimeout(() => {
        modalIthem[modalFlipCount].style.zIndex = "1";
    }, 1000)
}

function closeModal() {
    modal.style.transform = "scale(0)";
    for (let i = 0; i < modalIthem.length; i++) {
        modalIthem[i].style.opacity = "0";
        setTimeout(() => {
            modalIthem[i].style.zIndex = "0";
        }, 1000)
    }
}

let modalFlip = document.querySelectorAll("#modal-container .flip .rotate");

for (let i = 0; i < modalFlip.length; i++) {
    modalFlip[i].removeAttribute("onclick");
    modalFlip[i].setAttribute("onclick", "rotateModal(event)");
}


let modalFlipContainer = document.querySelectorAll("#modal-container .flip .flip-container");
for (let i = 0; i < modalFlipContainer.length; i++) {
    modalFlipContainer[i].removeAttribute("onclick");
}


function rotateModal(event) {
    let x = event.currentTarget.dataset.rotate;
    let y = event.currentTarget.dataset.direction;

    if (y === "back") {
        modalFlipContainer[x].style.transform = "rotateY(-180deg)";
        event.currentTarget.dataset.direction = "front";
    } else {
        modalFlipContainer[x].style.transform = "rotateY(0deg)";
        event.currentTarget.dataset.direction = "back";
    }
}

let flipShop = document.getElementsByClassName("flip-shop");
let shopFront = document.getElementsByClassName("shop-front");
let shopBack = document.getElementsByClassName("shop-back");

function front(event) {
    let x = event.currentTarget.dataset.shop;
    flipShop[x].style.transform = "rotateY(-180deg)";
    shopFront[x].style.zIndex = 0;
    shopBack[x].style.zIndex = 1;
}

function back(event) {
    let x = event.currentTarget.dataset.shop;
    flipShop[x].style.transform = "rotateY(0deg)";
}

let shopFlipContainer = document.getElementsByClassName("shop-flip-container");

function rotateShop(event) {
    let x = event.currentTarget.dataset.yyy;
    let y = event.currentTarget.dataset.shopDirection;

    if (y === "back") {
        shopFlipContainer[x].style.transform = "rotateY(0deg)";
        event.currentTarget.dataset.shopDirection = "front";
    } else {
        shopFlipContainer[x].style.transform = "rotateY(-180deg)";

        shopFlipContainer[x].style.zIndex = "0";
        event.currentTarget.dataset.shopDirection = "back";
    }
}

let rotate0 = document.querySelectorAll(".rotate");
let details = document.getElementsByClassName("details");

for(let i = 0; i < rotate0.length; i++) {
    rotate0[i].setAttribute("onmouseenter", "hover0()");
    rotate0[i].setAttribute("onmouseleave", "hover1()");
}

function hover0() {
    for(let i = 0; i < details.length; i++) {
        details[i].style.height = 0;
        console.log(details.length)
    }
}

function hover1() {
    for(let i = 0; i < details.length; i++) {
        details[i].removeAttribute("style");
    }
}

let modalShop = document.getElementById("modal-shop");
let closeShop = document.getElementById("closeShop");
let modalContainerShop = document.createElement("div");
let shopContainer = document.getElementsByClassName("shop-container");
modalContainerShop.setAttribute("id", "modal-container-shop");
for (let i = 0; i < flipShop.length; i++) {
    modalContainerShop.appendChild(shopContainer[0].cloneNode(true))
}
modalShop.appendChild(modalContainerShop);

let modalIthemShop = document.querySelectorAll("#modal-container-shop .shop-container .flip-shop")

let modalFlipCountShop = 0;

function openModalShop(event) {
    modalShop.style.transform = "scale(1)";
    modalFlipCountShop = Number(event.currentTarget.dataset.xxx);
    modalIthemShop[modalFlipCountShop].style.opacity = "1";
    setTimeout(() => {
        modalIthemShop[modalFlipCountShop].style.zIndex = "1";
    }, 1000)
}

function nextShop() {
    for (let i = 0; i < modalIthemShop.length; i++) {
        modalIthemShop[i].style.opacity = "0";
        setTimeout(() => {
            modalIthemShop[i].style.zIndex = "0";
        }, 1000)
    }
    if (modalFlipCountShop === modalIthemShop.length - 1) modalFlipCountShop = -1;
    modalFlipCountShop++;
    modalIthemShop[modalFlipCountShop].style.opacity = "1";
    setTimeout(() => {
        modalIthemShop[modalFlipCountShop].style.zIndex = "1";
    }, 1000)
}

function prevShop() {
    for (let i = 0; i < modalIthemShop.length; i++) {
        modalIthemShop[i].style.opacity = "0";
        setTimeout(() => {
            modalIthemShop[i].style.zIndex = "0";
        }, 1000)
    }
    if (modalFlipCountShop === 0) modalFlipCountShop = modalIthemShop.length;
    modalFlipCountShop--;
    modalIthemShop[modalFlipCountShop].style.opacity = "1";
    setTimeout(() => {
        modalIthemShop[modalFlipCountShop].style.zIndex = "1";
    }, 1000)
}

function closeModalShop() {
    modalShop.style.transform = "scale(0)";
    for (let i = 0; i < modalIthemShop.length; i++) {
        modalIthemShop[i].style.opacity = "0";
        setTimeout(() => {
            modalIthemShop[i].style.zIndex = "0";
        }, 1000)
    }
}

let modalFlipShop = document.querySelectorAll("#modal-container-shop .shop-container .flip-shop .rotate");

for (let i = 0; i < modalFlipShop.length; i++) {
    modalFlipShop[i].removeAttribute("onclick");
    modalFlipShop[i].setAttribute("onclick", "rotateModalShop(event)");
}

let modalFlipContainerShop = document.querySelectorAll("#modal-container-shop .flip-shop .shop-flip-container");

for (let i = 0; i < modalFlipContainerShop.length; i++) {
    modalFlipContainerShop[i].removeAttribute("onclick");
}

function rotateModalShop(event) {
    let x = event.currentTarget.dataset.yyy;
    let y = event.currentTarget.dataset.shopDirection;

    if (y === "back") {
        modalFlipContainerShop[x].style.transform = "rotateY(0deg)";
        event.currentTarget.dataset.shopDirection = "front";
    } else {
        modalFlipContainerShop[x].style.transform = "rotateY(-180deg)";
        event.currentTarget.dataset.shopDirection = "back";
    }
}

let modalFrontButton = document.querySelectorAll("#modal-container-shop .shop-container .flip-shop .details .button");
let modalBackButton = document.querySelectorAll("#modal-container-shop .shop-container .flip-shop .shop-back .button");

for (let i = 0; i < modalFrontButton.length; i++) {
    modalFrontButton[i].removeAttribute("onclick");
    modalFrontButton[i].removeAttribute("data-shop");
    modalFrontButton[i].setAttribute("onclick", "modalFront(event)");
    modalFrontButton[i].setAttribute("data-aaa", i);
}

for (let i = 0; i < modalBackButton.length; i++) {
    modalBackButton[i].removeAttribute("onclick");
    modalBackButton[i].removeAttribute("data-shop");
    modalBackButton[i].setAttribute("onclick", "modalBack(event)");
    modalBackButton[i].setAttribute("data-aaa", i);
}

let flipShopModal = document.querySelectorAll("#modal-container-shop .shop-container .flip-shop");
let shopFrontModal = document.querySelectorAll("#modal-container-shop .shop-container .flip-shop .shop-front");
//let shopBack = document.getElementsByClassName("shop-back");

function modalFront(event) {
    let x = event.currentTarget.dataset.aaa;
    console.log(x)
    flipShopModal[x].style.transform = "rotateY(-180deg)";
    shopFront[x].style.zIndex = 0;
}

function modalBack(event) {
    let x = event.currentTarget.dataset.aaa;
    flipShopModal[x].style.transform = "rotateY(0deg)";
}

let menu = document.getElementById("menu");
let ttt = "closed";

function openMenu() {
  if(ttt === "closed") {
    menu.style.transform = "scale(1)";
    ttt = "opened";
  } else {
    if(ttt === "opened") menu.style.transform = "scale(0)";
    ttt = "closed";
  }
  
}

function closeMenu() {
    if(ttt === "opened") menu.style.transform = "scale(0)";
    ttt = "closed";
}