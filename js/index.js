const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


// First I want to create selectors to point the data above into elements that way I can update the HTML using JSON data for Task 2.
// I'll create these selectors by assigning a variable to either a collection of tag elements, or by just assigning the variable to a single element tag.
// To use more modern practices I will use .querySelector() and will be sure to use CSS selectors for proper syntax

//nav menu
const anchorTagsNav = document.querySelectorAll('nav a') 
const navContents = Object.values(siteContent.nav)

function navLoop(){
  for (let i = 0; i < anchorTagsNav.length; i++) {
    anchorTagsNav[i].textContent = navContents[i]
    anchorTagsNav[i].style.color = 'green'
    };
}

navLoop()

const nav = document.querySelector('nav')
const newLinkOne = document.createElement('a')
newLinkOne.href = '#'
newLinkOne.textContent = 'Last Item'
nav.appendChild(newLinkOne)

const newLinkTwo = document.createElement('a')
newLinkTwo.href = '#'
newLinkTwo.textContent = 'First Item'
nav.prepend(newLinkTwo)

//images
const ctaImg = document.querySelector('#cta-img') // using .querySelector(#class-selector) to identify correct image code. and assigning that selector to variable ctaImg
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]) // now I'm using .setAttribute() method to "insert" the image file into the src. I'm accessing the correct image file by using 2 arguments of ('src', siteContent["cta"]["img-src"])

const middleImg = document.querySelector('#middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])


//cta section
const ctaText = document.querySelector("h1")
ctaText.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector("button")
ctaButton.textContent = siteContent.cta.button;

// Main-Content Top-Content

const topContentHeaderOne = document.querySelector('text-content h4');
topContentHeaderOne.textContent = siteContent["main-content"]["features-h4"];

const topContentTextOne = document.querySelector('p');
topContentTextOne.textContent = siteContent["main-content"]["features-content"];

const mainContentHeaderTwo = document.querySelector('text-content h4:nth-child(2)');
mainContentHeaderTwo.textContent = siteContent["main-content"]["about-h4"];

const mainContentTextTwo = document.querySelector('p');
mainContentTextTwo.textContent = siteContent["main-content"]["about-content"];

// Main-Content Bottom-Content

// const mainContentHeaderThree = document.querySelector('h4')
// mainContentHeaderThree.textContent = siteContent["main-content"]["services-h4"]


// Contact Section

// const contactHeader = document.querySelector('.contact.h4')
// contactHeader.textContent = siteContent.contact['contact-h4']



// debugger