let body = document.body
let links = document.querySelector(".links2").getElementsByTagName("a")

let links1 = document.querySelector("#links").querySelectorAll("a")
let minlinks = document.querySelector("#myDIV").querySelectorAll("a")
let buttons = document.querySelector(".but").querySelectorAll("button")

links1.forEach(element => {
    element.addEventListener("click", function() {
        links1.forEach(n => n.classList.remove("acitvelinks"))
        this.classList.add("acitvelinks")
    })
})
minlinks.forEach(element => {
    element.addEventListener("click", function() {
        minlinks.forEach(n => n.classList.remove("acitvelinks"))
        this.classList.add("acitvelinks")
    })
})
buttons.forEach(element => {
    element.addEventListener("click", function() {
        buttons.forEach(n => n.classList.remove("acitvebut"))
        this.classList.add("acitvebut")
    })
})
let home = {
    link: document.querySelector(".home"),
    sec: document.querySelector(".section1")
}
let dest = {
    sec: document.querySelector(".destination"),
    link: document.querySelector(".dest"),
    start: document.querySelector(".start"),
    end: document.querySelector(".pick"),
    img: document.querySelector(".img"),
    end: document.querySelector(".end"),
    minlinks: {
        moon: document.querySelector(".moon"),
        mars: document.querySelector(".mars"),
        europa: document.querySelector(".europa"),
        titan: document.querySelector(".titan"),
    },
    minLinskW: document.querySelector(".minlinkw"),
    lorem: document.querySelector(".lorem"),
    padding: document.querySelector(".padding"),
    info: document.querySelector(".info"),
    buttomInfoStart: document.querySelector(".buttomInfo-start"),
    buttomInfoEnd: document.querySelector(".buttomInfo-end"),


    moon: {
        img: "assets/destination/image-moon.png",
        word: "MOON",
        lorem: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites. ",
        buttomInfoStart: "384,400 km",
        buttomInfoEnd: "3 days",
    },
    mars: {
        img: "assets/destination/image-mars.png",
        word: "MARS",
        lorem: " Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest! ",
        buttomInfoStart: "225 mil. km",
        buttomInfoEnd: "9 months",

    },
    europa: {
        img: "assets/destination/image-europa.png",
        word: "EUROPA",
        lorem: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        buttomInfoStart: "628 mil. km",
        buttomInfoEnd: "3 years",

    },
    titan: {
        img: "assets/destination/image-titan.png",
        word: "TITAN",
        lorem: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        buttomInfoStart: "1.6 bil. km",
        buttomInfoEnd: "7 years",

    },

}

let crew = {
    parent: document.querySelector(".crews"),
    background: "url('assets/crew/background-crew-desktop.jpg')",
    link: document.querySelector(".crew"),
    img: document.querySelector("#img"),
    imgsrc: {
        anousheh: "assets/crew/image-anusheh-ansari.png",
        douglas: "assets/crew/image-douglas-hurley.png",
        mark: "assets/crew/image-mark-suttleworth.png",
        victor: "assets/crew/image-victor-glover.png",

    },
    nameIn: document.querySelector("#crew-h1"),
    names: {
        anousheh: "anusheh ansari",
        douglas: "douglas hurley",
        mark: "mark suttleworth",
        victor: "victor glover",
    }

}
let tech = {
    parent: document.querySelector(".techs"),
    background: "url('assets/technology/background-technology-desktop.jpg')",
    link: document.querySelector(".tech"),
    img: document.querySelector("#techImg"),
    imgsrc: {
        img1: "assets/technology/image-launch-vehicle-portrait.jpg",
        img2: "assets/technology/image-space-capsule-portrait.jpg",
        img3: "assets/technology/image-spaceport-portrait.jpg",

    },
    buttons: {
        but1: document.querySelector("#techB1"),
        but2: document.querySelector("#techB2"),
        but3: document.querySelector("#techB3"),
    },
    nameIn: document.querySelector("#techH1"),
    nameOut: {
        n1: "launch vehicle",
        n2: "space capsule",
        n3: "spaceport",
    }
}

dest.sec.style.display = "none"
crew.parent.style.display = "none"
tech.parent.style.display = "none"

home.link.onclick = function() {
    body.style.backgroundImage = "url('background-home-desktop.jpg')"

    home.sec.style.display = "block"
    dest.sec.style.display = "none"
    crew.parent.style.display = "none"
    tech.parent.style.display = "none"
}
dest.link.onclick = function() {
        body.style.backgroundImage = "url('assets/destination/background-destination-desktop.jpg')"
        home.sec.style.display = "none"
        dest.sec.style.display = "block"
        crew.parent.style.display = "none"
        tech.parent.style.display = "none"

        dest.minLinskW.textContent = dest.moon.word
        dest.img.src = dest.moon.img
        dest.lorem.textContent = dest.moon.lorem
        dest.buttomInfoEnd.textContent = dest.moon.buttomInfoEnd
        dest.buttomInfoStart.textContent = dest.moon.buttomInfoStart
        dest.minlinks.moon.onclick = function() {
            dest.minLinskW.textContent = dest.moon.word
            dest.img.src = dest.moon.img
            dest.lorem.textContent = dest.moon.lorem
            dest.buttomInfoEnd.textContent = dest.moon.buttomInfoEnd
            dest.buttomInfoStart.textContent = dest.moon.buttomInfoStart

        }
        dest.minlinks.mars.onclick = function() {
            dest.minLinskW.textContent = dest.mars.word
            dest.img.src = dest.mars.img
            dest.lorem.textContent = dest.mars.lorem
            dest.buttomInfoEnd.textContent = dest.mars.buttomInfoEnd
            dest.buttomInfoStart.textContent = dest.mars.buttomInfoStart
        }
        dest.minlinks.europa.onclick = function() {
            dest.minLinskW.textContent = dest.europa.word
            dest.img.src = dest.europa.img
            dest.lorem.textContent = dest.europa.lorem
            dest.buttomInfoEnd.textContent = dest.europa.buttomInfoEnd
            dest.buttomInfoStart.textContent = dest.europa.buttomInfoStart
        }
        dest.minlinks.titan.onclick = function() {
            dest.minLinskW.textContent = dest.titan.word
            dest.img.src = dest.titan.img
            dest.lorem.textContent = dest.titan.lorem
            dest.buttomInfoEnd.textContent = dest.titan.buttomInfoEnd
            dest.buttomInfoStart.textContent = dest.titan.buttomInfoStart

        }
    }
    // that is the crew page

crew.link.onclick = function() {
    body.style.backgroundImage = crew.background
    home.sec.style.display = "none"
    dest.sec.style.display = "none"
    crew.parent.style.display = "block"
    tech.parent.style.display = "none"

}
tech.link.onclick = function() {
    body.style.backgroundImage = tech.background
    home.sec.style.display = "none"
    dest.sec.style.display = "none"
    crew.parent.style.display = "none"
    tech.parent.style.display = "block"
    tech.buttons.but1.onclick = function() {
        tech.img.src = tech.imgsrc.img1
    }
    tech.buttons.but2.onclick = function() {
        tech.img.src = tech.imgsrc.img2
    }
    tech.buttons.but3.onclick = function() {
        tech.img.src = tech.imgsrc.img3
    }
}