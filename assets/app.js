
 $(document).ready(function() {
    var myCars = ["Audi", "Lamborgini", "BMW", "MiniCooper"];

    // Add buttons for original movies array
    function renderButtons() {
        $("#cars-buttons").empty();
        for (i = 0; i < myCars.length; i++) {
            $("#cars-buttons").append("<button class='btn btn-success' data-cars='" + cars[i] + "'>" + cars[i] + "</button>");
        }

        // Getting gifs from api... onto html
        $("button").on("click", function() {
            // console.log('hit')
            var myCar = $(this).attr("data-myCar");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
                car + "414VkDgoZW0Q9ClOjd9frIJsN18n7Cx4&limit=9"

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                var results = response.data;
                $("#cars").empty();
                for (var i = 0; i < results.length; i++) {
                    var myCarDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var carImg = $("<img>");

        


    
    
});
