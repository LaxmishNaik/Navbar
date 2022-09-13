// classList - shows/gets all classes 
// contains - checks classList for specific class 
// add - add class
// remove - remove class 
// toggle - toggle class


const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // console.log(links.classList);
    // console.log(links.classList.contains('links'));



    // if(links.classList.contains('show-links')){
    // links.classList.remove('show-links');
    // }
    // else{
    //     links.classList.add('show-links');
    // }

    // another way to set toggle 

    links.classList.toggle('show-links');
});




// ANOTHER WAY TO ADD TOGGLE 


// const getElement = (selector) => {
//     const el = document.querySelector(selector)
//     if (el) return el
//     throw new Error ('Please check your classes : $ {selector} does not exist')
// }

// const navToggle = getElement('.nav-toggle')
// const links = getElement('.links')

// navToggle.addEventListener('click', function () {
//     links.classList.toggle('show-links')
// })