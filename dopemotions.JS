function sidebar() {
    const  sidebar = document.getElementById('sidebar');
    const blurallscreen = document.getElementById('blurallscreen')
    const closebuttonForSidebar = document.getElementById('closebuttonForSidebar');
    const sidebarcontainer = document.getElementById('sidebarcontainer');
    sidebar.addEventListener('click', () => {
        console.log("sidebar")
        sidebarcontainer.style.display = "block";
        blurallscreen.style.display = "block";

    })
    blurallscreen.addEventListener('click', () => {
        sidebarcontainer.style.display = "none";
        blurallscreen.style.display = "none";
    })
    closebuttonForSidebar.addEventListener('click', () => {
        sidebarcontainer.style.display = "none";
        blurallscreen.style.display = "none";
    })
}sidebar()


function cartbar() {
const cartbar = document.getElementById('cartbar');
const blurallscreen = document.getElementById('blurallscreen')
const cartOpenButton = document.getElementById('cartopen');
const cartCloseButton = document.getElementById('closeButton');
cartOpenButton.addEventListener('click', () => {
    cartbar.style.display = 'block'
    blurallscreen.style.display = "block";

})
cartCloseButton.addEventListener('click', () => {
    cartbar.style.display = 'none'
    blurallscreen.style.display = "none";

})
blurallscreen.addEventListener('click', () => {
    cartbar.style.display = 'none'
    blurallscreen.style.display = "none";
})
}cartbar()


// This is acheivements for to set from javascript
const projectsCompleted =  document.getElementById('projectsCompleted');
const digitalProducts =  document.getElementById('digitalProducts');
const CostomersGlobally =  document.getElementById('CostomersGlobally');
projectsCompleted.innerHTML = "3600+"
digitalProducts.innerHTML = "50+"
CostomersGlobally.innerHTML = "5000+"


// This is products of offer and cost changing and name changing
const HeadingNameForProduct = document.getElementById('HeadingNameForProduct'); //NAMING FOR PRODUCT
const OfferProduct = document.getElementById('OfferProduct'); //OFFER ON PRODUCT
const PriceForProduct = document.getElementById('PriceForProduct'); //COST OF PRODUCT
HeadingNameForProduct.innerHTML = "This is text added here for products"

