$(document).ready(function() {
  $("form#choices").submit(function(event) {
    
    var days = $("select#days").val();
    var nights = $("select#nights").val();
    var drinks = $("select#drinks").val();
    var dinner = $("select#dinner").val();
    var view = $("select#view").val();

    if { 
        ((days === "ak") && (nights === "ak" ) && (drinks === "ak")) ||
        ((drinks === "ak") && (dinner === "ak") && (view === "ak")) ||
        ((nights === "ak") && (drinks === "ak") && (dinner === "ak")) ||
        ((days === "ak") && (drinks === "ak") && (view === "ak")) || 
        ((views === "ak") && (days == "ak") && (nights === "ak")) 
                    (#Alaska).show();
                    (#New_York).hide();
                    (#Fiji).hide();

    } else if { 
        ((days === "ny") && (nights === "ny" ) && (drinks === "ny")) ||
        ((drinks === "ny") && (dinner === "ny") && (view === "ny")) ||
        ((nights === "ny") && (drinks === "ny") && (dinner === "ny")) ||
        ((days === "ny") && (drinks === "ny") && (view === "ny")) || 
        ((views === "ny") && (days == "ny") && (nights === "ny")) 
                    (#New_York).show();
                    (#Alaska).hide();
                    (#Fiji).hide();


   } else {
         ((days === "fj") && (nights === "fj" ) && (drinks === "fj")) ||
        ((drinks === "fj") && (dinner === "fj") && (view === "fj")) ||
        ((nights === "fj") && (drinks === "fj") && (dinner === "fj")) ||
        ((days === "fj") && (drinks === "fj") && (view === "fj")) || 
        ((views === "fj") && (days == "fj") && (nights === "fj")) 
                    (#Fiji).show();
                    (#Alaska).hide();
                    (#New_York).hide();
        }

    event.preventDefault();


    };












//     var responses = [days, nights, drinks, dinner, view];

//     var akTotal = 0;
//     var nyTotal = 0; 
//     var fjTotal = 0;

//     var calculateTotal = function() {
//     responses.forEach(function(response)) {
//         if (response === 'ak') {
//             akTotal += 1;
//         } else if ( response === 'fj');
//             fjTotal += 1;
//         } else {
//             nyTotal += 1;
//         }
//      })
//         determineResult();
//     };


//     var determineResult = function() {
//         if ((akTotal > fjTotal) && (akTotal > nyTotal)) {
//             return "Alaska";
//         } else if ((fjTotal > akTotal) && (fjTotal > nyTotal)) {
//             return "Fiji";
//         } else if ((nyTotal > akTotal) && (nyTotal > fjTotal)) {
//             return "NYC";
//         } else {
//             return "Alaska";
//         }
//     })
// };



    // var quote = function() {
    //     if ( akTotal > 3 ) {
    //             (#Alaska).show();
    //             (#New_York).hide();
    //             (#Fiji).hide();

    //     } else if ( fjTotal > 3 ) {
    //             (#Fiji).show();
    //             (#New_York).hide();
    //             (#Alaska).hide();        

    //     } else if ( nyTotal > 3 ) {
    //             (#New_York).show();
    //             (#Fiji).hide();
    //             (#Alaska).hide();
    //     } else {
    //         return "Fuck it, you're going to Alaska."
    //     })



// $(generate).ready(function() {
//   $("form#choices").submit(function(event) {
    
//     var days = $("select#days").val();
//     var nights = $("select#nights").val();
//     var drinks = $("select#drinks").val();
//     var dinner = $("select#dinner").val();
//     var view = $("select#view").val();

//     var responses = [days, nights, drinks, dinner, view];

//     var ak






    // var dinner = $("select#dinner").val();
    // var view = $("select#view").val();

    // var quote = (ak + nights + drinks + dinner + view);
    // if (days === "AK" && nights === "AK" && drinks === "AK" && drinks === "AK") {
    //   quote = Alaska;
    // }

    // $("#rate").text(quote);
    // $("#quote").show()

    // event.preventDefault();




