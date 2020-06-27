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

    $('.service a').on('click', function () {
        $('.service a').removeClass('border-service-active');
        $('.service a').removeClass('shadow-lg');
        $(this).addClass('border-service-active');
        $(this).addClass('shadow-lg');
    });

    $('.service-chart').each((index, chart) => {
        var myChart = new Chart(chart, {
            type: 'line',
            data: {
                labels: [1,2,3,4,5,6,7,8,9,10],
                datasets: [{
                    data: [86,100,106,106,107,111,120,125,120,125],
                    backgroundColor: "#1D71B8",
                    clip: {left: 5, top: false, right: -2, bottom: 50},
                  },
                ]
              },
            options: {
                responsive: true,
                legend: {
                    display: false
                },
                elements: {
                    point:{
                        radius: 0
                    }
                },
                layout: {
                    padding: {
                        left: -10,
                        bottom: -10
                    }
                },
                scales: {
                    yAxes: [{
                        gridLines: {
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    }],
                    xAxes: [{
                        gridLines: {
                            display: false,
                        },
                        ticks: {
                            display: false,
                        },
                    }]
                }
            }
        });
    })

});