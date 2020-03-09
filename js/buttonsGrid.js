  var btn5=document.getElementById('btn5');
var arr=[1,2,3,4,5,6,7,8,9];
btn5.onclick=function(){
    let temp=arr[3];
    arr[3]=arr[2];
    arr[2]=arr[1];
    arr[1]=arr[0];
    arr[0]=temp;
    
    temp=arr[5];
    arr[5]=arr[3];
    arr[3]=arr[6];
    arr[6]=arr[7];
    arr[7]=arr[8];
    arr[8]=temp;
    console.log(arr);
    let buttons =document.querySelectorAll('button');
    for(i=0;i<buttons.length;i++){
        buttons[i].innerHTML=arr[i];
    }
}