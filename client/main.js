'use strict';

$(document).ready();

$('#answer').on('click', function() {

    var array1 = $('#input1').val().split(',');
    var array2 = $('#input2').val().split(',');
    var arraySum = [];
    var sum = addArray(array1, array2, arraySum);

    sum.forEach(function(e) {
      if(e % 2 === 0) {
        $('#even').append('<li>' + e + '</li>');
      } else {
        $('#odd').append('<li>' + e + '</li>');
      }
    })
    $('#total').val(sum);
})

function addArray(array1, array2, arraySum) {
  for (var i = 0; i < array1.length; i++) {
    arraySum.push(parseInt(array1[i]) + parseInt(array2[i]));
    // console.log(arraySum);
  }
  return arraySum;
}
