var array = ["Mari","Data","Nika B.","Nika T.","Ninuca","Misho","Saba","Nini","Kote","Sofo"]
var shuffledarray = array.sort((a,b)=>0.5 - Math.random());
let width = screen.width;

as
document.getElementById("Mari").onclick=function(){
    if(shuffledarray[0]=="Mari"){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Mari").disabled = true;
}
document.getElementById("Data").onclick=function(){
    if(shuffledarray[0]=="Data"){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Data").disabled = true;
}
document.getElementById("Nika B.").onclick=function(){
    if(shuffledarray[0]=="Nika B."){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Nika B.").disabled = true;
}

document.getElementById("Nika T.").onclick=function(){
    if(shuffledarray[0]=="Nika T."){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Nika T.").disabled = true;
}
document.getElementById("Ninuca").onclick=function(){
    if(shuffledarray[0]=="Ninuca"){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Ninuca").disabled = true;
}
document.getElementById("Misho").onclick=function(){
    if(shuffledarray[0]=="Misho"){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Misho").disabled = true;
}
document.getElementById("Saba").onclick=function(){
    if(shuffledarray[0]=="Saba"){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Saba").disabled = true;
}
document.getElementById("Nini").onclick=function(){
    if(shuffledarray[0]=="Nini"){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Nini").disabled = true;
}
document.getElementById("Kote").onclick=function(){
    if(shuffledarray[0]=="Kote"){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Kote").disabled = true;
}
document.getElementById("Sofo").onclick=function(){
    if(shuffledarray[0]=="Sofo"){
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[1]
        delete shuffledarray[1];
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    else{
        document.getElementById("hiddenGuy").innerHTML = shuffledarray[0]
        delete shuffledarray[0]
        shuffledarray = shuffledarray.filter(element => {return element != undefined})
    }
    setTimeout(() => {
        document.getElementById("hiddenGuy").innerHTML = "";
    }, 3000);

    document.getElementById("Sofo").disabled = true;

}