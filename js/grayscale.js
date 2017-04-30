/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(".navbar-collapse").collapse('hide');
});

var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Earth',
            data: [{x:0,y:1417},{x:10,y:1416},{x:20,y:1414},{x:30,y:1411},{x:40,y:1406},{x:50,y:1400},{x:60,y:1394},{x:70,y:1386},{x:80,y:1379},{x:90,y:1371},{x:100,y:1363},{x:110,y:1355},{x:120,y:1348},{x:130,y:1341},{x:140,y:1336},{x:150,y:1331},{x:160,y:1328},{x:170,y:1326},{x:180,y:1325},{x:190,y:1326},{x:200,y:1328},{x:210,y:1331},{x:220,y:1336},{x:230,y:1341},{x:240,y:1348},{x:250,y:1355},{x:260,y:1363},{x:270,y:1371},{x:280,y:1379},{x:290,y:1386},{x:300,y:1394},{x:310,y:1400},{x:320,y:1406},{x:330,y:1411},{x:340,y:1414},{x:350,y:1416},{x:360,y:1417}],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            xAxisID: 'xf',
            yAxisID: 'yf'
        },
        {
            label: 'Mars',
            data: [{x:0,y:718},{x:10,y:716},{x:20,y:711},{x:30,y:702},{x:40,y:690},{x:50,y:675},{x:60,y:658},{x:70,y:640},{x:80,y:620},{x:90,y:601},{x:100,y:581},{x:110,y:563},{x:120,y:546},{x:130,y:531},{x:140,y:518},{x:150,y:507},{x:160,y:500},{x:170,y:495},{x:180,y:494},{x:190,y:495},{x:200,y:500},{x:210,y:507},{x:220,y:518},{x:230,y:531},{x:240,y:546},{x:250,y:563},{x:260,y:581},{x:270,y:601},{x:280,y:620},{x:290,y:640},{x:300,y:658},{x:310,y:675},{x:320,y:690},{x:330,y:702},{x:340,y:711},{x:350,y:716},{x:360,y:718}],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            xAxisID: 'xf',
            yAxisID: 'yf'
        },
        {
            label: 'Ceres',
            data: [{x:0,y:209},{x:10,y:209},{x:20,y:208},{x:30,y:205},{x:40,y:203},{x:50,y:199},{x:60,y:195},{x:70,y:190},{x:80,y:186},{x:90,y:181},{x:100,y:176},{x:110,y:172},{x:120,y:167},{x:130,y:164},{x:140,y:161},{x:150,y:158},{x:160,y:156},{x:170,y:155},{x:180,y:155},{x:190,y:155},{x:200,y:156},{x:210,y:158},{x:220,y:161},{x:230,y:164},{x:240,y:167},{x:250,y:172},{x:260,y:176},{x:270,y:181},{x:280,y:186},{x:290,y:190},{x:300,y:195},{x:310,y:199},{x:320,y:203},{x:330,y:205},{x:340,y:208},{x:350,y:209},{x:360,y:209}],
            backgroundColor: 'rgba(200, 200, 200, 0.2)',
            borderColor: 'rgba(200, 200, 200, 1)',
            borderWidth: 1,
            xAxisID: 'xf',
            yAxisID: 'yf'
        }
        ]
    },
    options: {
        tooltips: {
            mode: 'label',
            callbacks: {
                label: function(tooltipItems, data) { 
                    return tooltipItems.yLabel + 'W/m2';
                },
                title: function(tooltipItem, data) {
                   return tooltipItem[0].xLabel + "º Ls";
                }
            }
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'TRUE ANOMALY (ºθ)'
                },
                id: 'xf',
                type: 'linear',
                ticks: {
                    min: 0,
                    stepSize: 30,
                    max: 360,
                    callback: function(value, index, values) {
                        return value + "º";
                    }
                },
                unit: 'º',
                step: 30,
                position: 'bottom'
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'SOLAR FLUX (W/m2)'
                },
                id: 'yf'
            }]
        },
        // xAxisID: 'Solar Longitude (º)',
        // yAxisID: 'W/m² (º)',
        hover: {
            // Overrides the global setting
            intersect: true,
            mode: 'index'//,
            // yLabel: 'W/m²',
            // xLabel: 'º'
        }
    }
});

var ctx2 = document.getElementById("myChart2");
var myChart2 = new Chart(ctx2, {
    type: 'radar',
    data: {
        labels: ['0º','10º','20º','30º','40º','50º','60º','70º','80º','90º','100º','110º','120º','130º','140º','150º','160º','170º','180º','190º','200º','210º','220º','230º','240º','250º','260º','270º','280º','290º','300º','310º','320º','330º','340º','350º'],
        datasets: [{
            label: 'Earth',
            data: [0.983,0.984,0.984,0.985,0.987,0.989,0.991,0.994,0.997,1,1.003,1.005,1.008,1.011,1.013,1.014,1.016,1.016,1.017,1.016,1.016,1.014,1.013,1.011,1.008,1.005,1.003,1,0.997,0.994,0.991,0.989,0.987,0.985,0.984,0.984],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            pointColor: 'rgba(54, 162, 235, 1)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            xAxisID: 'xf1',
            yAxisID: 'yf1'
        },
        {
            label: 'Mars',
            data: [1.381,1.383,1.389,1.397,1.41,1.425,1.443,1.464,1.486,1.51,1.535,1.56,1.584,1.607,1.627,1.643,1.656,1.663,1.666,1.663,1.656,1.643,1.627,1.607,1.584,1.56,1.535,1.51,1.486,1.464,1.443,1.425,1.41,1.397,1.389,1.383],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            pointColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            xAxisID: 'xf1',
            yAxisID: 'yf1'
        },
        {
            label: 'Ceres',
            data: [2.558,2.56,2.569,2.582,2.601,2.624,2.651,2.682,2.716,2.752,2.788,2.825,2.86,2.893,2.921,2.945,2.963,2.974,2.977,2.974,2.963,2.945,2.921,2.893,2.86,2.825,2.788,2.752,2.716,2.682,2.651,2.624,2.601,2.582,2.569,2.56],
            backgroundColor: 'rgba(200, 200, 200, 0.2)',
            pointColor: "rgba(200, 200, 200, 1)",
            borderColor: 'rgba(200, 200, 200, 1)',
            borderWidth: 1,
            xAxisID: 'xf1',
            yAxisID: 'yf1'
        }]
    },
    options: {
        tooltips: {
            mode: 'label',
            callbacks: {
                label: function(tooltipItems, data) { 
                    console.log(data);
                    return tooltipItems.yLabel + ' AU';
                }
            },
            toolTipContent: "y: <span style='\"'color: red;'\"'>{y}</span>"
        },
        scale: {
            id: 'xf1',
            ticks: {
               beginAtZero: true,
               max:3,
               showLabelBackdrop: false
            }
        },
        hover: {
            mode: 'index'
        }
    }
});

var ctx3 = document.getElementById("myChart3");
var myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        datasets: [{
            label: 'Earth',
            data: [{x:0,y:null},{x:0.5,y:null},{x:1,y:null},{x:1.5,y:null},{x:2,y:null},{x:2.5,y:null},{x:3,y:null},{x:3.5,y:null},{x:4,y:null},{x:4.5,y:null},{x:5,y:null},{x:5.5,y:null},{x:6,y:0},{x:6.5,y:13},{x:7,y:26},{x:7.5,y:38},{x:8,y:50},{x:8.5,y:61},{x:9,y:71},{x:9.5,y:79},{x:10,y:87},{x:10.5,y:92},{x:11,y:97},{x:11.5,y:99},{x:12,y:100},{x:12.5,y:99},{x:13,y:97},{x:13.5,y:92},{x:14,y:87},{x:14.5,y:79},{x:15,y:71},{x:15.5,y:61},{x:16,y:50},{x:16.5,y:38},{x:17,y:26},{x:17.5,y:13},{x:18,y:0},{x:18.5,y:null},{x:19,y:null},{x:19.5,y:null},{x:20,y:null},{x:20.5,y:null},{x:21,y:null},{x:21.5,y:null},{x:22,y:null},{x:22.5,y:null},{x:23,y:null},{x:23.5,y:null},{x:24,y:null}],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            xAxisID: 'xf',
            yAxisID: 'yf'
        },
        {
            label: 'Mars',
            data: [{x:0,y:null},{x:0.5,y:null},{x:1,y:null},{x:1.5,y:null},{x:2,y:null},{x:2.5,y:null},{x:3,y:null},{x:3.5,y:null},{x:4,y:null},{x:4.5,y:null},{x:5,y:null},{x:5.5,y:null},{x:6,y:0},{x:6.5,y:13},{x:7,y:25},{x:7.5,y:37},{x:8,y:49},{x:8.5,y:59},{x:9,y:69},{x:9.5,y:78},{x:10,y:85},{x:10.5,y:91},{x:11,y:96},{x:11.5,y:99},{x:12,y:100},{x:12.5,y:100},{x:13,y:98},{x:13.5,y:94},{x:14,y:89},{x:14.5,y:83},{x:15,y:75},{x:15.5,y:66},{x:16,y:56},{x:16.5,y:45},{x:17,y:33},{x:17.5,y:21},{x:18,y:8},{x:18.5,y:0},{x:19,y:null},{x:19.5,y:null},{x:20,y:null},{x:20.5,y:null},{x:21,y:null},{x:21.5,y:null},{x:22,y:null},{x:22.5,y:null},{x:23,y:null},{x:23.5,y:null},{x:24,y:null}],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            xAxisID: 'xf',
            yAxisID: 'yf'
        },
        {
            label: 'Ceres',
            data: [{x:0,y:85},{x:0.5,y:62},{x:1,y:32},{x:1.5,y:0},{x:2,y:null},{x:2.5,y:null},{x:3,y:null},{x:3.5,y:null},{x:4,y:null},{x:4.5,y:null},{x:5,y:null},{x:5.5,y:null},{x:6,y:0},{x:6.5,y:34},{x:7,y:64},{x:7.5,y:86},{x:8,y:98},{x:8.5,y:99},{x:9,y:87},{x:9.5,y:66},{x:10,y:36},{x:10.5,y:3},{x:11,y:0},{x:11.5,y:null},{x:12,y:null},{x:12.5,y:null},{x:13,y:null},{x:13.5,y:null},{x:14,y:null},{x:14.5,y:null},{x:15,y:0},{x:15.5,y:29},{x:16,y:60},{x:16.5,y:83},{x:17,y:97},{x:17.5,y:99},{x:18,y:90},{x:18.5,y:70},{x:19,y:41},{x:19.5,y:8},{x:20,y:0},{x:20.5,y:null},{x:21,y:null},{x:21.5,y:null},{x:22,y:null},{x:22.5,y:null},{x:23,y:null},{x:23.5,y:null},{x:24,y:null}],
            backgroundColor: 'rgba(200, 200, 200, 0.2)',
            borderColor: 'rgba(200, 200, 200, 1)',
            borderWidth: 1,
            xAxisID: 'xf',
            yAxisID: 'yf'
        }
        ]
    },
    options: {
        tooltips: {
            mode: 'label',
            callbacks: {
                label: function(tooltipItems, data) { 
                    return tooltipItems.yLabel + '%';
                },
                title: function(tooltipItem, data) {
                    var ts = tooltipItem[0].xLabel;
                    h = Math.floor(ts)%24;
                    s = ":00";
                    if(ts%1!=0){ s=":30" }
                    h = (h<10) ? '0' + h : h;
                    return h+s;
                }
            }
        },
        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: '24 HOUR CYCLE'
                },
                id: 'xf',
                type: 'linear',
                ticks: {
                    min: 0,
                    stepSize: 1,
                    max: 24
                },
                // unit: 'º',
                step: 1,
                position: 'bottom'
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: 'MAXIMUM SOLAR FLUX (%)'
                },
                id: 'yf'
            }]
        },
        // xAxisID: 'Solar Longitude (º)',
        // yAxisID: 'W/m² (º)',
        hover: {
            // Overrides the global setting
            intersect: true,
            mode: 'index'//,
            // yLabel: 'W/m²',
            // xLabel: 'º'
        }
    }
});

