// Answer the questions here:

// - What do you think is going to happen?
//I think it's gonna add a new button in the list

// - What happened?
//It worked!

// - Why?
//The jQuery object used in append was created, then added to the DOM, in the #list parent.

//========== Write your code below ===========//

(function(localjQuery) {
    localjQuery($, window, document);
}(function($, window, document) {
    $(function() {

        //Feature Set 1
        $("#list button").on("click", function() {
            console.log("Feature Set 1:", $(this).text());
        });

        //Feature Set 2
        $("#list").append($("<li><button style='margin: 10px'>Delegated Button #5</button></li>"));

        // //Feature Set 3
        $("#list").on("click", "button", function() {
            console.log("Feature Set 3:", $(this).text());
        });

        //Additional Challenge
        $("#list").on("click", "button", function() {
            $("#list").append($("<li><button style='margin: 10px' checked>Checked Button</button></li>"));
        });

        $("#list").on("click", "button", function() {
            if ($(event.target).attr("checked")) {
                window.open("http://www.google.com");
            }
        });
    });
}))