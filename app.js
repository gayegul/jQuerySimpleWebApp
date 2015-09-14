jQuery(document).ready(function(){

var totalPoints = 0;
var pics = ["url('./pics/IMG_2528.jpg')", "url('./pics/IMG_2572.jpg')", "url('./pics/IMG_3226.jpg')", "url('./pics/IMG_3638.jpg')", "url('./pics/IMG_5771.jpg')", "url('./pics/IMG_3135.jpg')", "url('./pics/IMG_5929.jpg')", "url('./pics/IMG_5963.jpg')", "url('./pics/IMG_5925.jpg')"];
var picNumber = 2;

$('#photoOne').click(function(e) {
  e.preventDefault();
  totalPoints += 1;
  console.log(totalPoints);
  changePic();
});

$('#photoTwo').click(function(e) {
  e.preventDefault();
  totalPoints += 2;
  console.log(totalPoints);
  changePic();
});

$('#photoThree').click(function(e) {
  e.preventDefault();
  totalPoints += 3;
  console.log(totalPoints);
  changePic();
});

function changePic() {
  $('#photoOne').css('content', pics[++picNumber]);
  $('#photoTwo').css('content', pics[++picNumber]);
  $('#photoThree').css('content', pics[++picNumber]);
  if(picNumber >= pics.length) {
    showResult();
    $('#photoOne').off();
    $('#photoTwo').off();
    $('#photoThree').off();
  }
  //$('#finalResult').empty();
}

function showResult() {
  if(totalPoints <= 4) {
    $('#finalResult').text('You are a true Parisian!');
  }
  else if(totalPoints <= 7) {
    $('#finalResult').text('You are a true American!');
  }
  else {
    $('#finalResult').text('I see some Italian in you!');
  }
}

});
