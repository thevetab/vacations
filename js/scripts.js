$(document).ready(function() {
    $("form#choices").submit(function(event) {
    
    var days = $("select#days").val();
    var nights = $("select#nights").val();
    var drinks = $("select#drinks").val();
    var dinner = $("select#dinner").val();
    var view = $("select#view").val();

    if  (((days === "nyc") && (nights === "nyc") && (drinks === "nyc")) ||
        ((drinks === "nyc") && (dinner === "nyc") && (view === "nyc")) ||
        ((nights === "nyc") && (drinks === "nyc") && (dinner === "nyc")) ||
        ((days === "nyc") && (dinner === "nyc") && (view === "nyc")) ||
        ((nights === "nyc") && (dinner === "nyc") && (view === "nyc")) ||
        ((days === "nyc") && (nights === "nyc") && (view === "nyc")) ||
        ((days === "nyc") && (dinner === "nyc") && (view === "nyc")) ||
        ((days === "nyc") && (drinks === "nyc") && (dinner === "nyc")) ||
        ((days === "nyc") && (nights === "nyc") && (dinner === "nyc")) ||
        ((days === "nyc") && (drinks === "nyc") && (view === "nyc"))) {
            $("#new_york").show();
            $("#alaska").hide();
            $("#fiji").hide();
    } else if     
        (((days === "ak") && (nights === "ak") && (drinks === "ak")) ||
        ((nights === "ak") && (drinks === "ak") && (dinner === "ak")) ||
        ((drinks === "ak") && (dinner === "ak") && (view === "ak")) ||
        ((days === "ak") && (drinks === "ak") && (view === "ak")) ||
        ((nights === "ak") && (dinner === "ak") && (view === "ak")) ||
        ((days === "ak") && (dinner === "ak") && (view === "ak")) ||
        ((days === "ak") && (nights === "ak") && (view === "ak")) ||
        ((nights === "ak") && (drinks === "ak") && (view === "ak")) ||
        ((days === "ak") && (drinks === "ak") && (dinner === "ak")) ||
        ((days === "ak") && (nights === "ak") && (dinner === "ak"))) {
            $("#alaska").show();
            $("#fiji").hide();
            $("#new_york").hide();
    } else if 
        (((days === "fj") && (nights === "fj") && (drinks === "fj")) ||
        ((nights === "fj") && (drinks === "fj") && (dinner === "fj")) ||
        ((days === "fj") && (drinks === "fj") && (view === "fj")) ||
        ((drinks === "fj") && (dinner === "fj") && (view === "fj")) ||
        ((nights === "fj") && (dinner === "fj") && (view === "fj")) ||
        ((days === "fj") && (dinner === "fj") && (view === "fj")) ||
        ((days === "fj") && (nights === "fj") && (view === "fj")) ||
        ((nights === "fj") && (drinks === "fj") && (view === "fj")) ||
        ((days === "fj") && (drinks === "fj") && (dinner === "fj")) ||
        ((days === "fj") && (nights === "fj") && (dinner === "fj"))) {
            $("#fiji").show();
            $("#alaska").hide();
            $("#new_york").hide();

        } else {
            $("#alaska").show();
        }
    
    event.preventDefault();

      });      
    });
    
   

  
 