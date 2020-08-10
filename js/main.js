$(document).ready(function(){
    (function(){
        var count = 0;
        $('#toggle').on('click',function(){
        if(count == 0){
            $('#contToggle').css({
                background: '#222831e1'
            });
            $('#menu').css({
                width: '300px'
            });
            count = 1;
        }else{
            $('#contToggle').css({
                background: 'transparent'
            });
            $('#menu').css({
                width: '0'
            });
            count = 0;
        }
    });
    }());
});