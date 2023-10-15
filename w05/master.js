var Body = {
    setBackgroundColor : function(color){
        document.querySelector('body').style.backgroundColor= color ;
    },
    setColor : function(color) {
        document.querySelector('body').style.color= color ;
    }
}
var Links = {
    setColor : function(color) {
        var i = 0;
        var alist = document.querySelectorAll('a');
        while (i < alist.length){
          alist[i].style.color = color ;
          i = i + 1;
        }
    }
}

function nightDayHandler(self){
    let target = document.querySelector('body');
    if(self.value=='night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Links.setColor('powderblue');
      self.value='day'
    } else {
      Body.setBackgroundColor('white');
      Body.setColor('black');
      self.value='night'
      Links.setColor('blue'); 
    } 
  }