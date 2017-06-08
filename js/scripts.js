function cryptosquare(str){

  str = str.replace(/\s+/g, '');
  //variables to be used
  var strArray = str.split("");
  var charTotal = strArray.length;
  var columns = Math.floor(Math.sqrt(charTotal));
  var rows = Math.ceil(Math.sqrt(charTotal));

  // if (charTotal % columns === 0){
  //   rows = columns;
  // }

  $("body").append("<H5>Character Count: "+charTotal+"</H5>");
  $("body").append("<H5>Columns: "+columns+"</H5>");
  $("body").append("<H5>Rows: "+rows+"</H5>");
}

$(document).ready(function() {
  cryptosquare("bearsaa");
});
