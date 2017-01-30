//Create GLOBAL variable below here on line 2
//Feature Set 1
var global_result,
//Feature Set 2
    first_movie_image = '',
    first_movie_info = '',
    //Feature Set 3
    movie_images = [],
    //Feature Set 4
    movie_directors = [],
    movie_titles = [];

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);
                //Feature Set 1
                global_result = result;


                //Feature Set 2
                first_movie_image = global_result.feed.entry[0]["im:image"][2].label;

                first_movie_info = global_result.feed.entry[0];

                //Feature Set 3
                for (var i = 0; i < global_result.feed.entry.length; i++) {
                    movie_images.push(global_result.feed.entry[i]["im:image"][2].label);
                    //Feature Set 4
                    movie_directors.push(global_result.feed.entry[i]["im:artist"].label)
                    movie_titles.push(result.feed.entry[i]["im:name"].label);
                }
                itemAppending(movie_images, movie_directors, movie_titles);
            }
        });
        console.log('End of click function');
    });

    function itemAppending(img_link_array, director_array, movie_array) {
        var arr = [];
        for (var i = 0; i < img_link_array.length; i++) {
            //Feature Set 4
            arr.push($("<div />").css({
                "display": "inline-block",
                "margin": "20px",
            }));

            arr[i].append($("<img />").attr("src", img_link_array[i]).css({
                "display": "block",
                "margin": "auto",
            }));
            arr[i].append($("<p />").text(movie_array[i]).css("text-align", "center"));
            arr[i].append($("<p />").text(director_array[i]).css("text-align", "center"));

        }
        $("#main").append(arr);
    }
});