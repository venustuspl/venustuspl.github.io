$( document ).ready(function() {
    $("#my_custom_button").click(function() {
       $("#my_custom_div").toggle();
       alert("To są dwie linie \n pisane jedna pod drugą");
    });
});