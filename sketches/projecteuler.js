var backgroundColor = 'rgb(255, 153, 51)';
var borderColor = backgroundColor;
var opts = {
    scales: {
        xAxes: [{
            gridLines: {
                display: false
            }
        }],
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
};

var chart1 = new Chart("solvedOverTime", {
    type: 'bar',
    data: {
        labels: ["6\/13", "7\/13", "8\/13", "9\/13", "10\/13", "11\/13", "12\/13", "1\/14", "2\/14", "3\/14", "4\/14", "5\/14", "6\/14", "7\/14", "8\/14", "9\/14", "10\/14", "11\/14", "12\/14", "1\/15", "2\/15", "3\/15", "4\/15", "5\/15", "6\/15", "7\/15", "8\/15", "9\/15", "10\/15", "11\/15", "12\/15", "1\/16", "2\/16", "3\/16", "4\/16", "5\/16", "6\/16", "7\/16", "8\/16", "9\/16", "10\/16", "11\/16", "12\/16", "1\/17", "2\/17", "3\/17", "4\/17", "5\/17", "6\/17", "7\/17", "8\/17", "9\/17", "10\/17", "11\/17", "12\/17", "1\/18", "2\/18", "3\/18", "4\/18", "5\/18", "6\/18", "7\/18", "8\/18", "9\/18", "10\/18", "11\/18", "12\/18", "1\/19", "2\/19", "3\/19", "4\/19", "5\/19", "6\/19", "7\/19", "8\/19", "9\/19", "10\/19", "11\/19", "12\/19", "1\/20", "2\/20", "3\/20", "4\/20", "5\/20", "6\/20", "7\/20", "8\/20", "9\/20", "10\/20"],
        datasets: [{
            label: 'Problems Solved Over Time',
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: [87, 3, 0, 18, 0, 0, 12, 7, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 2, 4, 23, 0, 4, 10, 20, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 9, 5, 2, 3, 4, 2, 0, 0, 15, 3, 9, 4, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1]
        }]
    },
    options: opts
});


var chart2 = new Chart("solvedPerYear", {
    type: 'bar',
    data: {
        labels: ["2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
        datasets: [{
            label: 'Problems Solved Per Year',
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: [120, 17, 66, 5, 0, 58, 6, 3]
        }]
    },
    options: opts
});



var chart3 = new Chart("solvedPerMonth", {
    type: 'bar',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: 'Problems Solved Per Month Name',
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: [20, 15, 29, 2, 7, 101, 25, 6, 18, 27, 4, 21]
        }]
    },
    options: opts
});


var chart4 = new Chart("solvedPerDay", {
    type: 'bar',
    data: {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'Problems Solved Per Day',
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            data: [38, 52, 43, 47, 32, 26, 37]
        }]
    },
    options: opts
});