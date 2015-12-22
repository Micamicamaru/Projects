// function changeImage(j)
// {
//
//   var j;
//
// // Use == instead of =. Using '=' will change the varaible while '==' will compate
//
//  if (j == "Fall") {
//
//   var image = document.getElementById('Image1');
//
//         image.src = "pacman.png";
//
// } else if (j == "Summer") {
//
//   var image = document.getElementById('Image1');
//
//         image.src = "sky2.png";
//
//
// }};
//
//
// Switch will have less logic and might be faster. Clearner looking.


// When using jquery you need function below


$( document ).ready(function() {



  $(".ui.sidebar").sidebar()
                  .sidebar('attach events','.ui.launch.button')

                  $('.ui.sidebar').sidebar('setting', { dimPage: false });
           

});


function changeImage(j) {
    var j;
    var image = document.getElementById('Image1');
    // Switch is taking the varaible j and using it to change statments
    switch (j) {
        // Case is what the variable is in HTML, so this would be changeImage(Fall)
        case "Fall": // Getting the element or image to commit it to the varialbe. so image is the picture element.
        // image variable source is changing to the other pictures
        image.src = "pacman.png";
        break;
        case "Summer": image.src = "sky2.png";
        break;
        case "Winter": image.src = "Snow.png";
        break;
        case "Spring": image.src = "Shira.png";
        break;
        default:
    }
};
