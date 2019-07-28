
$(document).ready(function() {
    var myCars = ["Audi", "Lamborgini", "BMW", "MiniCooper"];
    //Running the array (rendering the buttons from that array)
    renderButtons(myCars);
    
    // Getting gifs from api... onto html
    //when a my car button with a class is clicked you code it
    $(".myCarsButton").on("click", function(event) {
        // console.log('hit')
// prevents from refreshing your page over and over again
        event.preventDefault();
        
        var myCars = $(this).attr("data-button");
       
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        myCars + "&api_key=414VkDgoZW0Q9ClOjd9frIJsN18n7Cx4"

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            var results = response.data;
            $("#cars").empty();
            for (var i = 0; i < results.length; i++) {
            console.log(results[i]);  
           //appending html  in the image tag
            $("#cars").append('<img src="'+results[i].images.original.url+'">')
            }
        });
    });
    $("#add-car").on("click", function(event) {
        //when the button works wanted to show the results work.
         // when the user clicks a new  button appears.
        // using push method to add an item to the array(array.push)
        event.preventDefault();
        myCars.push($('#car-input').val());
    
        //ERRASE THE BUTTONS
        $("#car-buttons").empty();
        //IT's returning the value
        renderButtons(myCars);
        
        
        console.log(myCars)
    });


});

//creating a function for render buttons
function renderButtons(myCars){
    for (i = 0; i < myCars.length; i++) {

        // creating a new button  
        var button =  $("<button>");
        button.attr("data-button", myCars[i]);
        button.attr("class", "btn btn-primary myCarsButton");
        button.text(myCars[i])
        //add a button 
        $("#car-buttons").append(button);
    }
    }

    
   



// myCars 
//$("#car-buttons").append("<button class='btn btn-success' data-cars='" + myCars + ">" + myCars + "</button>");
