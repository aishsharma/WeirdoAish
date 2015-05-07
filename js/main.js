/* 
 Created on : Apr 28, 2015, 7:50:35 PM
 Author     : Aishwarya Sharma
 */

function loadTopbar() {
    $("#topbar").load("includes/topbar.html", topFunctions);
    makeTopbarSticky();
}

function loadTopbarInner() {
    $("#topbar").load("../includes/innerTopbar.html", topFunctions);
    makeTopbarSticky();
}

function topFunctions() {
    setActive();
    makeTopbarSticky();
}

function setActive() {
    var fileName = document.location.pathname.match(/[^\/]+$/)[0];

    if (fileName === "" || fileName.toLowerCase().indexOf("index") >= 0) {
        $("#home").addClass("active");
        return;
    } else if (fileName.toLowerCase().indexOf("profile") >= 0) {
        $("#profile").addClass("active");
        return;
    } else if (fileName.toLowerCase().indexOf("project") >= 0) {
        $("#projects").addClass("active");
        return;
    } else if (fileName.toLowerCase().indexOf("contact") >= 0) {
        $("#contact").addClass("active");
        return;
    }
}

function makeTopbarSticky() {
    var stickyNavTop = $('#topbar').offset().top;

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('#topbar').addClass('sticky');
        } else {
            $('#topbar').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
}
