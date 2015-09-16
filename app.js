jQuery(document).ready(function() {

var totalPoints = 0;
var pics = ["url('./pics/IMG_2528.jpg')", "url('./pics/IMG_2572.jpg')", "url('./pics/IMG_3226.jpg')", "url('./pics/IMG_3638.jpg')", "url('./pics/IMG_5771.jpg')", "url('./pics/IMG_3135.jpg')", "url('./pics/IMG_5929.jpg')", "url('./pics/IMG_5963.jpg')", "url('./pics/IMG_5925.jpg')"];
var picNumber = 0;

$('#photoOne').data('points', 1);
$('#photoTwo').data('points', 2);
$('#photoThree').data('points', 3);

$('#photoOne, #photoTwo, #photoThree').click(function(e) {
  e.preventDefault();
  totalPoints += $(e.target).data('points');
  changePic();
});

function changePic() {
  if(picNumber >= pics.length) {
    showResult();
    $('#photoOne').off().remove();
    $('#photoTwo').off().remove();
    $('#photoThree').off().remove();
  } else {
    $('#photoOne').css('content', pics[picNumber++]);
    $('#photoTwo').css('content', pics[picNumber++]);
    $('#photoThree').css('content', pics[picNumber++]);
  }
}

function showResult() {
  if(totalPoints <= 4) {
    $('#finalResult').text('You are a true Parisian!');
  }
  else if(totalPoints <= 7) {
    $('#finalResult').text('You are an American Beauty!');
  }
  else {
    $('#finalResult').text('I see some Italian in you!');
  }
}

changePic();

});
