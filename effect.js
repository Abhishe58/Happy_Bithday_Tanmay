$(window).on('load', function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$(document).ready(function () {
    var vw;

    function setBalloonPositions() {
        vw = $(window).width() / 2;

        if (vw > 400) {
            // Desktop or large tablet
            $('#b11').animate({ top: 240, left: vw - 350 }, 500);
            $('#b22').animate({ top: 240, left: vw - 250 }, 500);
            $('#b33').animate({ top: 240, left: vw - 150 }, 500);
            $('#b44').animate({ top: 240, left: vw - 50 }, 500);
            $('#b55').animate({ top: 240, left: vw + 50 }, 500);
            $('#b66').animate({ top: 240, left: vw + 150 }, 500);
            $('#b77').animate({ top: 240, left: vw + 250 }, 500);
        } else {
            // Mobile: remove absolute positioning
            $('#b11, #b22, #b33, #b44, #b55, #b66, #b77').css({
                position: 'relative',
                top: '0',
                left: '0'
            });
        }
    }

    $(window).resize(function () {
        setBalloonPositions();
    });

    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');

        $(this).fadeOut('slow').delay(500).promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });

    $('#play').click(function () {
        var audio = $('.song')[0];
        audio.play();

        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');

        $('body').addClass('peach-after');

        $(this).fadeOut('slow').delay(1000).promise().done(function () {
            $('#bannar_coming').fadeIn('slow');
        });
    });

    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this).fadeOut('slow').delay(1000).promise().done(function () {
            $('#balloons_flying').fadeIn('slow');
        });
    });

    function loopBalloon(id, loopFunc) {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#' + id).animate({ left: randleft, bottom: randtop }, 10000, loopFunc);
    }

    function loopOne() { loopBalloon('b1', loopOne); }
    function loopTwo() { loopBalloon('b2', loopTwo); }
    function loopThree() { loopBalloon('b3', loopThree); }
    function loopFour() { loopBalloon('b4', loopFour); }
    function loopFive() { loopBalloon('b5', loopFive); }
    function loopSix() { loopBalloon('b6', loopSix); }
    function loopSeven() { loopBalloon('b7', loopSeven); }

    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({ top: -500 }, 8000);

        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');

        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();

        $(this).fadeOut('slow').delay(2000).promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });

    $('#wish_message').click(function () {
        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();

        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33');
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');
        $('#b7').attr('id', 'b77');

        setBalloonPositions();

        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(3000);

        $(this).fadeOut('slow').delay(1000).promise().done(function () {
            $('#story').fadeIn('slow');
        });
    });

    $('#story').click(function () {
        $(this).fadeOut('slow');
        $('.cake').fadeOut('fast').promise().done(function () {
            $('.message').fadeIn('slow');
        });

        function msgLoop(i) {
            $("p:nth-child(" + i + ")").fadeOut('slow').delay(800).promise().done(function () {
                i = i + 1;
                $("p:nth-child(" + i + ")").fadeIn('slow').delay(1000);
                if (i === 50) {
                    $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
                        $('.cake').fadeIn('fast');
                    });
                } else {
                    msgLoop(i);
                }
            });
        }

        msgLoop(0);
    });
});
