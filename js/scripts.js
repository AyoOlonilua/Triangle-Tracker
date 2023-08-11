$(document).ready(function() {
    $("form#triangle").submit(function(e) {
    let side1 = parseInt($("input#first").val());
    let side2 = parseInt($("input#second").val());
    let side3 = parseInt($("input#third").val());

    
        if (side1 === side2 && side2 === side3) {
            $("#sides").text("This is an Equilateral triangle");
        } 
        else if (side1 === side2 || side1 === side3 || side2 === side3) {
            $("#sides").text("This is an Isosceles triangle");
       } 
        else if (side1 > side2 || side1 > side3 || side2 > side3)  {
            $("#sides").text("This is a Scalene triangle");
       } 
    })

});
