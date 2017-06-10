function cryptosquare(str){

  str = str.replace(/\s+/g, '');
  //variables to be used in gathering column and row length
  var strArray = str.split("");
  var charTotal = strArray.length;
  var columns = Math.floor(Math.sqrt(charTotal));
  var rows = Math.floor(Math.sqrt(charTotal));
  //variables to be used when creating the output
  var outputArray;
  var outputStr;
  var chunk = columns;
  //assigns rows value based on length of inputted string
  if (charTotal - (columns*columns) > columns){
    rows += 2;
  } else if (charTotal - (columns*columns) > 0) {
    rows += 1;
  } else {
    rows = rows;
  }
  //creates new arrays based on column, row, and element length
  //outputs results to html
  for (i = 0; i < charTotal; i+=chunk) {
    outputArray = strArray.slice(i,i+chunk);
    outputStr = outputArray.join('|');
    $("body").append("<H5>|"+outputStr+"|</H5>");
  }



  $("body").append("<H5>Character Count: "+charTotal+"</H5>");
  $("body").append("<H5>Columns: "+columns+"</H5>");
  $("body").append("<H5>Rows: "+rows+"</H5>");
}

$(document).ready(function() {
  cryptosquare("hello there im saul");
});
