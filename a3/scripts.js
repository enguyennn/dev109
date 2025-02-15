function createRhombus(pHeight, pColorEven, pColorOdd, pSymbol) {
  upper(pHeight, pColorEven, pColorOdd, pSymbol);
  lower(pHeight, pColorEven, pColorOdd, pSymbol);
}

function upper(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=0;i<pHeight;i++){
    rLine +="<p>";
    
    //Create white spaces
    for (k=0; k <=(pHeight-i-2);k++){
      rLine +="<span style='color: White;'>" + pSymbol +"</span>";
    }
    
    //Create each line on the Rhombus
    for(j=0;j<=i;j++){
      //Is the position even or odd so we change the color
      if (j%2){
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      } else {
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
    
    for(j=0;j<=i;j++){
      //Is the position even or odd so we change the color
      if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
    }
    rLine +="</p>";
  }

  document.getElementById("upper").innerHTML = rLine;
}

function lower(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight;i > 0;i--){
    rLine +="<p>";
    //Create each line on the Rhombus
    for(j=0;j<i;j++){

      //Is the position even or odd so we change the color
      if (j%2)
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

    }
   rLine +="</p>";
   // console.log(rLine);

  }
  document.getElementById("lower").innerHTML = rLine;
}


function lower(pHeight, pColorEven, pColorOdd, pSymbol){
  var rLine ="";
  for (i=pHeight;i > 0;i--){
    rLine +="<p>";
    
    //Create white space
    for (k=0; k<(pHeight-i);k++){
      rLine +="<span style='color: White;'>" + pSymbol +"</span>";
    }
    
    //Create each line on the Rhombus
    for(j=0;j<i;j++){
      //Is the position even or odd so we change the color
      if (j%2){
        //even
        rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
      } else {
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";
      }
    }
   for(j=0;j<i;j++){
      //Is the position even or odd so we change the color
     if (j%2)
        //even
       rLine +="<span style='color:" + pColorEven + ";'>" + pSymbol +"</span>";
     else
        //odd
        rLine +="<span style='color:" + pColorOdd + ";'>" + pSymbol +"</span>";

   }
   rLine +="</p>";
  }
  document.getElementById("lower").innerHTML = rLine;
}
