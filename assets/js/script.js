document.addEventListener('keydown', function (e) {
    console.log(e.keyCode);

    if (e.keyCode == 65) {
        document.getElementById('audio').play();
        
        $('#A65').removeClass('latter');
        $('#A65').addClass('letter2');
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 65) {
                $('#A65').removeClass('letter2');
                $('#A65').addClass('latter');
                document.getElementById('audio').pause();
            }
        })
     }
    else if (e.keyCode == 83) {
        $('#S83').removeClass('latter');
        $('#S83').addClass('letter2');
        document.getElementById('audio1').play();

        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 83) {
                $('#S83').removeClass('letter2');
                $('#S83').addClass('latter');
                document.getElementById('audio1').pause();
            }
        })
    } else if (e.keyCode == 68) {
        $('#D68').removeClass('latter');
        $('#D68').addClass('letter2');
        document.getElementById('audio2').play();
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 68) {
                $('#D68').removeClass('letter2');
                $('#D68').addClass('latter');
                document.getElementById('audio2').pause();
            }
        })
    } else if (e.keyCode == 70) {
        $('#F70').removeClass('latter');
        $('#F70').addClass('letter2');
        document.getElementById('audio3').play();
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 70) {
                $('#F70').removeClass('letter2');
                $('#F70').addClass('latter');
                document.getElementById('audio3').pause();
            }
        })
    } else if (e.keyCode == 71) {
        $('#G71').removeClass('latter');
        $('#G71').addClass('letter2');
        document.getElementById('audio4').play();
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 71) {
                $('#G71').removeClass('letter2');
                $('#G71').addClass('latter');
                document.getElementById('audio4').pause();
            }
        })
    } else if (e.keyCode == 72) {
        $('#H72').removeClass('latter');
        $('#H72').addClass('letter2');
        document.getElementById('audio5').play();
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 72) {
                $('#H72').removeClass('letter2');
                $('#H72').addClass('latter');
                document.getElementById('audio5').pause();
            }
        })
    } else if (e.keyCode == 74) {
        $('#J74').removeClass('latter');
        $('#J74').addClass('letter2');
        document.getElementById('audio6').play();
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 74) {
                $('#J74').removeClass('letter2');
                $('#J74').addClass('latter');
                document.getElementById('audio6').pause();
            }
        })
    } else if (e.keyCode == 75) {
        $('#K75').removeClass('latter');
        $('#K75').addClass('letter2');
        document.getElementById('audio7').play();
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 75) {
                $('#K75').removeClass('letter2');
                $('#K75').addClass('latter');
                document.getElementById('audio7').pause();
            }
        })
    } else if (e.keyCode == 76) {
        $('#L76').removeClass('latter');
        $('#L76').addClass('letter2');
        document.getElementById('audio8').play();
        document.addEventListener('keyup', function (e) {
            if (e.keyCode == 76) {
                $('#L76').removeClass('letter2');
                $('#L76').addClass('latter');
                document.getElementById('audio8').pause();
            }
        })
    }
});