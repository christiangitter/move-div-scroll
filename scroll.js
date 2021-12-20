window.onscroll = function (e) {
    var vertical_position = 0;
    if (window.pageYOffset){
      vertical_position = window.pageYOffset;
    }
    else if (document.documentElement.clientHeight)//ie
      vertical_position = document.documentElement.scrollTop;
    else if (document.body)//ie quirks
      vertical_position = document.body.scrollTop;
  
    var your_div = document.getElementById('left');
    your_div.style.top= (vertical_position + 1 ) + 'px';//200 is arbitrary.. just to show you could now position it how you want
  }