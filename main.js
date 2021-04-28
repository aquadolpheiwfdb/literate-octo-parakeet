function getParagraphOne(){
var inputs=[];

for(var i=1; i<=6; i++){
    inputs.push(document.getElementById("input"+i).value);
  
}
document.getElementById("showParagraphOne").innerHTML=inputs.join(". ");

}


function getParagraphOned(){
    var inputs=[];
    
    for(var i=1; i<=6; i++){
        inputs.push(document.getElementById("input"+i+"d").value);
      
    }
    document.getElementById("showParagraphOned").innerHTML=inputs.join(". ");
    
    }
    
    