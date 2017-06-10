function cryptosquare(str){

  str = str.replace(/\s+/g, '');
  //variables to be used
  var strArray = str.split("");
  var charTotal = strArray.length;
  var columns = Math.floor(Math.sqrt(charTotal));
  var rows = Math.floor(Math.sqrt(charTotal));

  //assigns rows value based on length of inputted string
  if (charTotal - (columns*columns) > columns){
    rows += 2;
  } else if (charTotal - (columns*columns) > 0) {
    rows += 1;
  } else {
    rows = rows;
  }






  $("body").append("<H5>Character Count: "+charTotal+"</H5>");
  $("body").append("<H5>Columns: "+columns+"</H5>");
  $("body").append("<H5>Rows: "+rows+"</H5>");
}

$(document).ready(function() {
  cryptosquare("11");
});
