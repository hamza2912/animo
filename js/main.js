$(document).ready(function () {
    $('.header-nav-toggle').on('click', function (e) {
        e.stopImmediatePropagation();
        const windowWidth = $(window).width();
        if (windowWidth < 768) {
            $('.header-nav').slideToggle();
        }
    });

    $('.header-nav a').on('click', function (e) {
        $('.header-nav a').removeClass('active');
        $(this).addClass('active');
    });

    $('body').on('click', function () {
        const windowWidth = $(window).width();
        if (windowWidth < 768) {
            $('.header-nav').slideUp();
        }
    });

    var phpChart = $('#phpChart');
    var myChart = new Chart(phpChart, {
        type: 'line',
        data: {
            datasets: [{
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#1D71B8'
                ] 
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false
                    },
                }]
            }
        }
    });

    var sqlChart = $('#sqlChart');
    var myChart = new Chart(sqlChart, {
        type: 'line',
        data: {
            datasets: [{
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#1D71B8'
                ] 
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false
                    },
                }]
            }
        }
    });

    var nginxChart = $('#nginxChart');
    var myChart = new Chart(nginxChart, {
        type: 'line',
        data: {
            datasets: [{
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#1D71B8'
                ] 
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false
                    },
                }]
            }
        }
    });

    var phpChart2 = $('#phpChart2');
    var myChart = new Chart(phpChart2, {
        type: 'line',
        data: {
            datasets: [{
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#1D71B8'
                ] 
            }]
        },
        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: {
                        display: false
                    },
                }]
            }
        }
    });

});