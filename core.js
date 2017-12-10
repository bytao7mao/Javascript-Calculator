var box = document.getElementById('display');
var pr = document.getElementById('prompt');
var p = prompt('Enter your name here please: ');
pr.value = p;


function addtoscreen(x){
  box.value += x;
  if(x === 'c'){
    box.value = '';
  };
};
function equal(){
  x = box.value;
  x = eval(x);
  box.value = x;
};
function power(){
  x = box.value;
  x = eval(x*x);
  box.value = x;
};
function backspace(){
  var num = box.value;
  var len = num.length-1;
  var newNum = num.substring(0, len);
  box.value = newNum;
};
