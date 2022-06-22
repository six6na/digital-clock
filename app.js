$(function(){

    // 시간재생 - 매 1초마다 재생
    setInterval(function(){

    // app.js
    let d = new Date();
    let h = d.getHours(); // 시간변수
    let m = d.getMinutes(); // 분
    let s = d.getSeconds(); //초

    // 0 ~ 9까지는 앞에 0을 표시
    if(s < 10) {
        s = '0' + s;
    }
    if(m < 10) {
        m = '0' + m;
    }

    // 오전/오후 표시, 알람기능
    if(m == 50) {
        if(s ==0){
            alert('휴식시간');
        };
    }
    
    if(h < 12) {
        $('.ampm').html('am');
    } else {
        $('.ampm').html('pm');
    }

    // 시간표시
    $('.hour').html(h);
    $('.min').html(m);
    $('.sec').html(s);
    });
    
});

