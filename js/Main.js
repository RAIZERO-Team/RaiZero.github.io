/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);

/*=============== Team Members ===============*/
let imgBx = document.querySelectorAll(".imgBx");
let contentBx = document.querySelectorAll(".contentBx");

for (var i = 0; i < imgBx.length; i++) {
  imgBx[i].addEventListener("mouseover", function () {
    for (var i = 0; i < contentBx.length; i++) {
      contentBx[i].className = "contentBx";
    }

    document.getElementById(this.dataset.id).className = "contentBx active";

    for (var i = 0; i < imgBx.length; i++) {
      imgBx[i].className = "imgBx";
    }

    this.className = "imgBx active";
  });
}

/*=============== Timer Part ===============*/

let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

let dd = document.getElementById('dd');
let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let day_dot = document.querySelector('.day_dot');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');

let startDate = new Date('09/15/2023 00:00:00').getTime();

let x = setInterval(function () {
    let now = new Date().getTime();
    let distance = startDate + now;

    // Time calculation for days, hours, minutes, and seconds
    let d = Math.floor(distance / (1000 * 60 * 60 * 24)) % 366;
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) % 24;
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)) % 60;
    let s = Math.floor((distance % (1000 * 60)) / 1000) % 60;
    
    
    // Output the results in element with id
    days.innerHTML = d + "<br><span>Days</span>";
    hours.innerHTML = h + "<br><span>Hours</span>";
    minutes.innerHTML = m + "<br><span>Minutes</span>";
    seconds.innerHTML = s + "<br><span>Seconds</span>";

    // Animate stroke
    dd.style.strokeDashoffset = 440 - (440 * d) / 365;
    // 365 days in a year
    hh.style.strokeDashoffset = 440 - (440 * h) / 24;
    // 24 hours in a day
    mm.style.strokeDashoffset = 440 - (440 * m) / 60;
    // 60 minutes in an hour
    ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 seconds in a minute

    day_dot.style.transform = `rotateZ(${d * 0.986}deg)`;
    // 360 degrees / 365 days = 0.986
    hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
    // 360 degrees / 24 hours = 15
    min_dot.style.transform = `rotateZ(${m * 6}deg)`;
    // 360 degrees / 60 minutes = 6
    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    // 360 degrees / 60 seconds = 6

    // If the countdown is over, display some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").style.display = 'none';
        document.querySelector(".Start.RAIZERO").style.display = 'block';  
    }
}, 1000);


/*=============== Email JS ==>> Contact-File ===============*/

const contactForm = document.getElementById("contact-form"),
  contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID - templateID - #form - publicKey
  emailjs
    .sendForm(
      "service_xe46yzi",
      "template_twc29xu",
      "#contact-form",
      "XXowmVanpQZD5ft6J"
    )
    .then(
      () => {
        // Show sent message
        contactMessage.textContent = "Message sent successfully ✅";

        // Remove message after five seconds
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);

        // Clear input fields
        contactForm.reset();
      },
      () => {
        // Show error message
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/

//    top-scoller and up-scoller of the page    \\
//     top-scoller
let el = document.querySelector(".topscoller");
let height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});

// up
let span = document.querySelector(".up");

window.onscroll = function () {
  this.scrollY >= 500
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
