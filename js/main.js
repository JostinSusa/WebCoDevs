$(document).ready(function(){
    (function(){
        var count = 0;
        $('#toggle').on('click',function(){
        if(count == 0){
            $('#menu').css({
                width: '300px'
            });
            count = 1;
        }else{
            $('#menu').css({
                width: '0'
            });
            count = 0;
        }
    });
    }());
});