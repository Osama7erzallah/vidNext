let value_dispaly = document.querySelectorAll('.num');
let interval =5000;

value_dispaly.forEach(
(value_dispaly)=>{
let start_value =0;
let end_value= parseInt(value_dispaly.getAttribute('data_val'));

let duration=Math.floor(interval/end_value);
let counter = setInterval(()=>{
    start_value+=1
value_dispaly.textContent=start_value;
if(start_value==end_value)clearInterval(counter);

},duration);

});