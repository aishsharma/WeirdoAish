var config = {
    VIEWS: "views/"
};

//Routes go here
var app = $.sammy("#content", function() {
    //Home Page
    this.get("#/", function(context) {
        aish.loadContent("about.html");
    });

    //Resume Page
    this.get("#/profile", function(context) {
        aish.loadContent("profile.html");
    });

    //Pet Projects page
    this.get("#/pets", function(context) {
        aish.loadContent("pets.html");
    });

    //Contact Page
    this.get("#/contact", function(context) {
        aish.loadContent("contact.html");
    });

});



//Starts the Sammy app on page load
$(function() {
	$.sammy.raise_errors = true;
    app.run("#/");
});


//Namespace
var aish = aish || {};

aish.showSpinner = function() {
    $("#content").html("<div id='spinner'><i class='fa fa-spinner fa-pulse fa-5x'></i></div>");
};


aish.loadContent = function(filename) {
    aish.showSpinner();

    var pathToView = config.VIEWS + filename;

    var viewData = null;

    $.get(pathToView, function(data) {
            viewData = data;
        }, "html")
        .done(function() {
            $("#content").html(viewData);
        })
        .fail(function() {
            $("#content").html("Could not load view data. Something went wrong with the AJAX request. Try again or contact me to report it.");
        });
};
