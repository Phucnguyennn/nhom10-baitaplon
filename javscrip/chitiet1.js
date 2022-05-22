window.onload = function(){
    setTimeout("switchImage()", 2000);
  }
  var current = 1;
  var num_image = 4;
  function switchImage(){
    current++;
    document.images['logo'].src ='../hinh/ctiet' + current + '.jpg';
    if(current < num_image){
      setTimeout("switchImage()", 2000);
    }else if(current == num_image){
      current = 0;
      setTimeout("switchImage()", 2000);
    }
  }