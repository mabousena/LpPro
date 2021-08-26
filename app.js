//Based on file provided by Udicity


/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const sections = document.querySelectorAll("section") // to select all sections
//alert(sections.length); // to test number of sections found should be 4

for(let i = 0; i < sections.length; i++)
  {
    let list = document.createElement('li');  
    let ul = navbar__list;
    let a = document.createElement("a");
    
    list.innerHTML = sections[i].getAttribute("data-nav");
    //section[i].navbar__list;

    a.setAttribute('href',"id");
    list.appendChild(a);
    list.setAttribute('style', 'display: inline;');
   
    ul.appendChild(list);
   // sName = section.getAttribute("data-nav");
   // sLink = section.getAttribute("id");
    //alert(sections[i].getAttribute("data-nav"));
  }


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
