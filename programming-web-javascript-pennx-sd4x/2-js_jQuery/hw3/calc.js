/*
 * Implement all your JavaScript in this file!
 */

var lhs = '';
var opr = '';
var rhs = '';
var tmp = '';
var eqPressed = false;
// TODO : on successive operant clicks, 
// disregard all previous & apply the last operand.
var oprJustClicked = false;

//$('#display').val('');

// clearButton fucntionality
$('#clearButton').click(function(){
  lhs = '';
  opr = '';
  rhs = '';
  tmp = '';
  eqPressed = false;
  $('#display').val('');
})

// numeral Input
$('.numeral').click(function(){
  // cancel operant streak
  oprJustClicked = false;  
  if (!opr) {
    lhs += $(this).val();
    $('#display').val(lhs);
  } else {
  rhs += $(this).val();
  $('#display').val(rhs);
  }
});

// operant Input
$('.operand').click(function(){

  // assign symbol to variable to reduce lookups
  var operand = $(this).html();
  // if its division, swap with /
  if (operand.charCodeAt() == 247) {
    operand = '/';
  }
  // if middle operator (opr) is empty
  if (!opr) {
    // if its equals, do nothing
    if (operand == '=') {

      // unless previous opr also = ,
      // so add previous calculation to lhs
      if (eqPressed) {
        lhs = eval(lhs + tmp).toString();
        $('#display').val(lhs);
      }
    // otherwise assign to opr  
    } else {
      opr = operand;
      eqPressed = false;
      tmp = '';  
    }
    
  } else {
  // if there is a middle operator
    lhs = eval(lhs + opr + rhs).toString();
    $('#display').val(lhs);
    // all except =
    if (operand != '=') { 
      rhs = '';
      opr = operand;
      tmp = '';
      eqPressed = false; 
    } else {
        // equals for 1st time
        tmp = opr + rhs;
        rhs = '';
        opr = '';
        eqPressed = true;
    } 
  }  

});
