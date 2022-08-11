

var rightNow = moment().format
("dddd, MMMM Do YYYY, h:mm:ss a");
$("#time-display").text
(rightNow);



$(function () {
    $('#due-date-input').
    datepicker({
        changeMonth: true,
        changeVar: true,
    });
});