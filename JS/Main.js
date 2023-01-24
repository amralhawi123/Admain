let liClick = document.querySelectorAll(".sidebar li")
let customs = document.querySelectorAll("ul .CUSTOM")
let narrws = document.querySelectorAll("li .fa-caret-right")

liClick.forEach((e) => {
    e.onclick = function (el) { // click on Element

        for (let i = 0; i < customs.length; i++){
            
            if (this.dataset.top === customs[i].dataset.top) {
                customs[i].classList.toggle("open")
                narrws[i].classList.toggle("down")
            }
            else {
                customs[i].classList.remove("open")
                narrws[i].classList.remove("down")
            }
        }
    }
    
})


// At click on arrow
let mainSidebar = document.querySelector(".sidebar")
let arrowClick = document.querySelector(".arrow")

let clickArrow = document.querySelector(".arrow").onclick = function () {

    
    for (let n = 0; n < customs.length; n++) { 
        customs[n].classList.remove("open")
        narrws[n].classList.remove("down")
    }

    mainSidebar.classList.toggle("width") 
    arrowClick.classList.toggle("width")

    liClick.forEach((e) => {
        e.classList.toggle("width") 
    })

// To Add class Right to All Element
    liClick.forEach((e) => {
        e.onclick = function () {

            if (this.dataset.top === customs[0].dataset.top) {
                customs[0].classList.add("open")
                customs[0].classList.add("Right")
            } else {
                customs[0].classList.remove("open")
                customs[0].classList.remove("Right")
            }

            if (this.dataset.top === customs[1].dataset.top) {
                customs[1].classList.add("open")
                customs[1].classList.add("Right2")
            } else {
                customs[1].classList.remove("open")
                customs[1].classList.remove("Right2")
            }

            if (this.dataset.top === customs[2].dataset.top) {
                customs[2].classList.add("open")
                customs[2].classList.add("Right3")
            } else {
                customs[2].classList.remove("open")
                customs[2].classList.remove("Right3")
            }
        }
        
    }
    
    )
}


// remove class open from all custom when click at any point in page 
let content = document.querySelector(".content").onclick = function () {
    for (let j = 0; j < customs.length; j++) {
        customs[j].classList.remove("open")
        narrws[j].classList.remove("down")
    }
}


// click on button to open sideare
let ButtonToOpenSidbare = document.querySelector("button").onclick = function () {
    mainSidebar.classList.toggle("block")
    document.querySelector(".inPhone").style.flex = "0"
    document.querySelector(".inPhone").style.marginLeft = "30px"
    
}


// In Case Media Phone
if (mainSidebar.clientWidth == "0") {
    liClick.forEach((e) => {
        e.onclick = function () {

            if (this.dataset.top === customs[0].dataset.top) {
                customs[0].classList.add("open")
                customs[0].classList.add("Right")
            } else {
                customs[0].classList.remove("open")
                customs[0].classList.remove("Right")
            }

            if (this.dataset.top === customs[1].dataset.top) {
                customs[1].classList.add("open")
                customs[1].classList.add("Right2")
            } else {
                customs[1].classList.remove("open")
                customs[1].classList.remove("Right2")
            }

            if (this.dataset.top === customs[2].dataset.top) {
                customs[2].classList.add("open")
                customs[2].classList.add("Right3")
            } else {
                customs[2].classList.remove("open")
                customs[2].classList.remove("Right3")
            }
        } 
    }
    )
}

// To Add class Active
liClick.forEach(li => {
    
    li.addEventListener("click", (e) => {
        
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            // Remove class active from all li
            element.classList.remove("active")

            // Add class active to all li
            e.target.classList.add("active")

        })
    })
})


// Open notification
let notificate = document.querySelector(".notifecation").onclick = function () {

    document.querySelector(".head .box").classList.add("box-block")

    document.querySelector(".head .box2").classList.remove("box2-block")

    document.querySelector(".head .notifecation").classList.add("active")
    
    document.querySelector(".head .message").classList.remove("active")

}

// remove class box-block from notification when click at any point in page 
let content2 = document.querySelector("section").onclick = function () {

    document.querySelector(".head .box").classList.remove("box-block")
    document.querySelector(".head .box2").classList.remove("box2-block")
    document.querySelector(".head .message").classList.remove("active")
    document.querySelector(".head .notifecation").classList.remove("active")
}


// Open massege
let massege = document.querySelector(".message").onclick = function () {

    document.querySelector(".head .box2").classList.add("box2-block")

    document.querySelector(".head .box").classList.remove("box-block")

    document.querySelector(".head .message").classList.add("active")
    
    document.querySelector(".head .notifecation").classList.remove("active")
}



// On Refresh window progress
let progres = document.querySelectorAll(".progres span").forEach((e) => {
    e.style.width = e.dataset.precent
    
})


// click on botton narow
let link = document.querySelector(".page-boutton")
window.onscroll = function () {
    if (this.scrollY >= 100) {
        link.classList.add("up");
    } else {
        link.classList.remove("up");
    }

}
