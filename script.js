function main(){
    var a=document.getElementById('amount').value;
    var s=document.getElementById('service').value;
    var p=document.getElementById('people').value;
    if(a==0 || s==0 || p==0){
      alert("Fill all the information");
    }
    else{
      var c=Math.floor((a*s)/p);
      document.getElementById('calculation').innerHTML="Tip Amount <br> Rs ="+c+" each";
    }
  }
