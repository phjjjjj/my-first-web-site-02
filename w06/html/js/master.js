var Body = {
    setBackgroundColor : function(color){
      $('body').css('background-color', color)
    },
    setColor : function(color){
      $('body').css('color', color)
    }
  }
  var Links = {
    setColor : function(color){
      $('a').css("color", color)
    }
  }
  
  function nightDayHandler(self){
    var target = document.querySelector('body');
    if(self.value=='night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Links.setColor('powderblue'); 
      document.querySelector('#night_day_top').value='day';
      document.querySelector('#night_day_bottom').value='day';
    } else {
      Body.setBackgroundColor('beige');
      Body.setColor('black');        
      Links.setColor('darkolivegreen');
      document.querySelector('#night_day_top').value='night';
      document.querySelector('#night_day_bottom').value='night';
    }
  } 