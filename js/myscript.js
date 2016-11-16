




$(document).ready(function () {


//    FADE IN LANDING PAGE SCHOOL UN
    
    
      var $all_msg = $('#un');
  //get a list of letters from the welcome text
  var $wordList = $('#un').html().split("");
  //clear the welcome text msg
  $('#un').html("");
  //loop through the letters in the $wordList array
  var tagGoing = "";
  $.each($wordList, function(idx, elem) {

    if (elem == "<") {
      //if we encountered this symbol it means a tag started
      tagGoing += elem;
    } else if (elem == ">") {
      //if we encountered this symbol it means a tag closed
      tagGoing += elem;
      //create the tag from the collected parts and append it
      //to the output html:
      var $foundTag = $(tagGoing).appendTo($all_msg);
      $foundTag.css({
        opacity: 0
      });
      $foundTag.delay(idx * 70);
      $foundTag.animate({
        opacity: 1
      }, 1100);

      //reset the tag collector:
      tagGoing = "";
    } else {
      //if we are inside a tag
      if (tagGoing != "") {
        //if we are inside a tag, then just append the
        //current character to the output html
        tagGoing += elem;
      } else {

        //create a span for the letter and set opacity to 0
        var newEL = $("<span/>").text(elem).css({
          opacity: 0
        });
        //append it to the welcome message
        newEL.appendTo($all_msg);
        //set the delay on the animation for this element
        newEL.delay(idx * 70);
        //animate the opacity back to full 1
        newEL.animate({
          opacity: 1
        }, 1100);
      }
    }
  });

//END LANDING PAGE FADEIN UN
    
    
    
    
//    FADE IN LANDING PAGE SCHOOL DEUX
    
    
      var $all_msg = $('#deux');
  //get a list of letters from the welcome text
  var $wordList = $('#deux').html().split("");
  //clear the welcome text msg
  $('#deux').html("");
  //loop through the letters in the $wordList array
  var tagGoing = "";
  $.each($wordList, function(idx, elem) {

    if (elem == "<") {
      //if we encountered this symbol it means a tag started
      tagGoing += elem;
    } else if (elem == ">") {
      //if we encountered this symbol it means a tag closed
      tagGoing += elem;
      //create the tag from the collected parts and append it
      //to the output html:
      var $foundTag = $(tagGoing).appendTo($all_msg);
      $foundTag.css({
        opacity: 0
      });
      $foundTag.delay(idx * 170);
      $foundTag.animate({
        opacity: 1
      }, 1100);

      //reset the tag collector:
      tagGoing = "";
    } else {
      //if we are inside a tag
      if (tagGoing != "") {
        //if we are inside a tag, then just append the
        //current character to the output html
        tagGoing += elem;
      } else {

        //create a span for the letter and set opacity to 0
        var newEL = $("<span/>").text(elem).css({
          opacity: 0
        });
        //append it to the welcome message
        newEL.appendTo($all_msg);
        //set the delay on the animation for this element
        newEL.delay(idx * 100);
        //animate the opacity back to full 1
        newEL.animate({
          opacity: 1
        }, 1100);
      }
    }
  });

//END LANDING PAGE FADEIN DEUX
    




            });
