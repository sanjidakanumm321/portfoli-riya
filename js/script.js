var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, element){
    // Remove active from all links
    for (let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    // Remove active from all contents
    for (let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    // Add active to clicked link and its content
    element.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// --- MOBILE MENU TOGGLE ---
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // Toggle the 'bx-x' class to change the icon (e.g., from burger to 'X')
    menuIcon.classList.toggle('bx-x');
    // Slide the menu in or out
    navbar.classList.toggle('active');
};

// --- CLOSE MENU ON SCROLL OR CLICK ---
window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// --- ABOUT SECTION TABS ---
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
    // Remove active state from all links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    // Hide all tab content
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add active state to clicked tab
    event.currentTarget.classList.add("active-link");
    // Show the specific content
    document.getElementById(tabname).classList.add("active-tab");
}