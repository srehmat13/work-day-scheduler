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


//HOUR TIME BLOCKS 
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

$('.saveBtn').on('click', function() {
    var input =  $(this).siblings('div.col-10').children('textarea').val();
    var hour =  $(this).parent().attr('id');

    localStorage.setItem(hour, input);
    console.log(hour, input);

});

// DISPLAY PAST PRESENT AND FUTURE IN TIME BLOCK 
var timeDisplay = function () {
    currentTime = moment().format('hh:mm:ss');

    // HOUR 9
    if (moment().isBetween(hour9, hour10)) {
        $('.timeblock9').addClass('present');
    }
    else if (moment().isAfter(hour10)) {
        $('.timeblock9').addClass('past');
    }
    else {
        $('.timeblock9').addClass('future');
    }

    // HOUR 10
    if (moment().isBetween(hour10, hour11)) {
        $('.timeblock10').addClass('present');
    }
    else if (moment().isAfter(hour11)) {
        $('.timeblock10').addClass('past');
    }
    else {
        $('.timeblock10').addClass('future');
    }

    // HOUR 11
    if (moment().isBetween(hour11, hour12)) {
        $('.timeblock11').addClass('present');
    }
    else if (moment().isAfter(hour12)) {
        $('.timeblock11').addClass('past');
    }
    else {
        $('.timeblock11').addClass('future');
    }

    // HOUR 12
    if (moment().isBetween(hour12, hour13)) {
        $('.timeblock12').addClass('present');
    }
    else if (moment().isAfter(hour13)) {
        $('.timeblock12').addClass('past');
    }
    else {
        $('.timeblock12').addClass('future');
    }

    // HOUR 13
    if (moment().isBetween(hour13, hour14)) {
        $('.timeblock13').addClass('present');
    }
    else if (moment().isAfter(hour14)) {
        $('.timeblock13').addClass('past');
    }
    else {
        $('.timeblock13').addClass('future');
    }

    // HOUR 14
    if (moment().isBetween(hour14, hour15)) {
        $('.timeblock14').addClass('present');
    }
    else if (moment().isAfter(hour15)) {
        $('.timeblock14').addClass('past');
    }
    else {
        $('.timeblock14').addClass('future');
    }

    // HOUR 15
    if (moment().isBetween(hour15, hour16)) {
        $('.timeblock15').addClass('present');
    }
    else if (moment().isAfter(hour16)) {
        $('.timeblock15').addClass('past');
    }
    else {
        $('.timeblock15').addClass('future');
    }

    // HOUR 16
    if (moment().isBetween(hour16, hour17)) {
        $('.timeblock16').addClass('present');
    }
    else if (moment().isAfter(hour17)) {
        $('.timeblock16').addClass('past');
    }
    else {
        $('.timeblock16').addClass('future');
    }

    // HOUR 17
    if (moment().isBetween(hour17, hour18)) {
        $('.timeblock17').addClass('present');
    }
    else if (moment().isAfter(hour18)) {
        $('.timeblock17').addClass('past');
    }
    else {
        $('.timeblock17').addClass('future');
    };
}

$('#hour-9 .events').val(localStorage.getItem('hour-9'));
$('#hour-10 .events').val(localStorage.getItem('hour-10'));
$('#hour-11 .events').val(localStorage.getItem('hour-11')); 
$('#hour-12 .events').val(localStorage.getItem('hour-12'));
$('#hour-13 .events').val(localStorage.getItem('hour-13'));
$('#hour-14 .events').val(localStorage.getItem('hour-14'));
$('#hour-15 .events').val(localStorage.getItem('hour-15'));
$('#hour-16 .events').val(localStorage.getItem('hour-16'));
$('#hour-17 .events').val(localStorage.getItem('hour-17'));


timeDisplay();