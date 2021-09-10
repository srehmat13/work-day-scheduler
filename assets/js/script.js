//CURRENT DAY DISPLAYED 
function updateTime () {
var currentDay = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').html(currentDay);
}; 
//TIME TO UPDATE EVERY SECOND
updateTime();
setInterval (function (){
updateTime();
}, 1000);


//TIME BLOCKS
var hour9 = moment().hour(9);
var hour10 = moment().hour(10);
var hour11 = moment().hour(11);
var hour12 = moment().hour(12);
var hour13 = moment().hour(13);
var hour14 = moment().hour(14);
var hour15 = moment().hour(15);
var hour16 = moment().hour(16);
var hour17 = moment().hour(17);
var hour18 = moment().hour(18);

var hours = [hour9, hour10, hour11, hour12, hour13, hour14, hour15, hour16, hour17];

//LOCAL STORAGE DATA 
var events9 = JSON.parse(localStorage.getItem('hour9')) || '';
var events10 = JSON.parse(localStorage.getItem('hour10')) || '';
var events11 = JSON.parse(localStorage.getItem('hour11')) || '';
var events12 = JSON.parse(localStorage.getItem('hour12')) || '';
var events13 = JSON.parse(localStorage.getItem('hour13')) || '';
var events14 = JSON.parse(localStorage.getItem('hour14')) || '';
var events15 = JSON.parse(localStorage.getItem('hour15')) || '';
var events16 = JSON.parse(localStorage.getItem('hour16')) || '';
var events17 = JSON.parse(localStorage.getItem('hour17')) || '';

