var r = document.querySelector(':root');
var portfolio;
var portfolioHeight;
var navOptions;

document.addEventListener("DOMContentLoaded", function () {
    portfolio = document.getElementById('navbar');
    portfolioHeight = portfolio.getBoundingClientRect().top + window.scrollY;

    // document.getElementById
    // navOptions = document.getElementById("nav_container");
    // navOptions = navOptions.getElementsByTagName("*");
    // navOptions.forEach(element =>{
    //     element.addEventListener("onClick", function())
    // })
    // for (let i = 0; i < navOptions.length; i++){
    //     navOptions[i].addEventListener("onClick", selectNavActive(navOptions[i], navOptions));
    // }
});


window.addEventListener("scroll", function (){
    var yOffset = this.window.scrollY;

    //r.style.setProperty('--navTop', (40 -yOffset.clamp(0,40)) + "px");

    // if (yOffset >= portfolioHeight){
    //     r.style.setProperty('--navTop', 0);
    //     r.style.setProperty('--col', '#FF0000');
    // }
    // else{
    //     r.style.setProperty('--navTop', '40px');
    //     r.style.setProperty('--col', '#0000FF');
    // }
})

$(document).ready(function(){
    $('.navOption').on("click", function(){
        $('.navOption').children('a').removeClass('active');
        $(this).children('a').addClass('active');
    });

  });

Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
};