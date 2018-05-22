/*
 * Implement all your JavaScript in this file!
 
 This is a homework for edX carriculum.
 https://courses.edx.org/courses/course-v1:PennX+SD4x+2T2017
 */
var totalNum = [];

 $(".button").click(function(){
      if (!$(this).hasClass("operator")){
      $("#display").val('');
      $("#display").val(($("#display").val()) + ($(this).val()));
    } 
  else { 
    if ($("#display").val() != '') {
      if ($(this).hasClass("operator")){
        totalNum.push((($("#display").val())))
       
        totalNum.push( ($(this).val()));
          $("#display").val('');
          console.log("one" + totalNum)
           if(totalNum.length > 2) {
           //var total = totalNum.splice(totalNum.length-1, 1).join(" ");
           var total = totalNum.slice(0, -1).join(" ");
               console.log("total" + total)
             $("#display").val(eval(total));
          }
          } else {
           $("#display").val(($("#display").val()) + ($(this).val()));
           totalNum.push( ($(this).val())); 
             console.log("three" + totalNum)
          }
  }
 }
 })

 $("#clearButton").click(function(){
  $("#display").val('');
  totalNum = [];
 })

 $("#equalsButton").click(function(){
  totalNum.push((($("#display").val())))
  var total = totalNum.join(" ");
  //console.log("total" + total)
  $("#display").val(eval(total));
  totalNum = [];
   // totalNum.push( $("#display").val());
    console.log("totalNum" + totalNum)
 })
