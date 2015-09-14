jQuery(document).ready(function(){

var totalPoints = 0;
$('#next').hasClass('disabled');

$('#photoOne').click(function(e) {
  e.preventDefault();
  totalPoints += 1;
  console.log(totalPoints);
  $('next').prop('disabled', false);
});

$('#photoTwo').click(function(e) {
  e.preventDefault();
  totalPoints += 2;
  console.log(totalPoints);
  $('next').prop('disabled', false);
});

$('#photoThree').click(function(e) {
  e.preventDefault();
  totalPoints += 3;
  console.log(totalPoints);
  $('next').prop('disabled', false);
});

if(totalPoints < 3) {

}

});
