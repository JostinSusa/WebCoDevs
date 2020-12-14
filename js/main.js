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
        $('#menu a').on('click', function(){
            $('#contToggle').css({
                background: 'transparent'
            });
            $('#menu').css({
                width: '0'
            });
            count = 0;
        });
    }());

    (function(){
        $('.clientInfo').slideUp();
        $('.clientToggle').on('click', function(){
            $(this).siblings('.clientInfo').slideToggle();
            
        });
    }());

    (function(){
        $('.buttonCli').on('click',function(e){
            e.preventDefault();
            var id = $(this).attr('id');
            $('#client_' + id).siblings().removeClass('clientActive');
            $('#client_' + id).addClass('clientActive');
        });
    }());
    (function(){
        var typed = new Typed('.typed', {
            strings: ["Desarrollo web a medida.", "Diseño UX &amp; UI.", "Desarrollo de e-commerce.", "Diseño Grafico.", "Marketing digital.", "Social Media."],
            typeSpeed: 30,
            backSpeed: 30,
            loop: true,
            loopCount: Infinity,
            backDelay: 1200,
        });
    }());
    (function(){
        var toggle = $('#toggle'),
        header = $('#inicio').offset().top,
        acercaDe = $('#acercade').offset().top,
        servicios = $('#servicios').offset().top,
        proyectos = $('#proyectos').offset().top,
        clientes = $('#clientes').offset().top,
        clientesResp = $('#clientsResp').offset().top,
        equipo = $('#equipo').offset().top,
        contacto = $('#contact').offset().top;
        $(window).on('scroll', function(){
            if ( $(window).scrollTop() > header ){
                toggle.css({
                    'color': '#fff'
                });
            }
            if($(window).scrollTop() > acercaDe ){
                toggle.css({
                    'color': '#fff'
                });
            }
            if($(window).scrollTop() > servicios ){
                toggle.css({
                    'color': '#222831'
                });
            }
            if($(window).scrollTop() > proyectos ){
                toggle.css({
                    'color': '#fff'
                });
            }
            if($(window).scrollTop() > clientes ){
                toggle.css({
                    'color': '#222831'
                });
            }
            if($(window).scrollTop() > equipo ){
                toggle.css({
                    'color': '#fff'
                });
            }
            if($(window).scrollTop() > contacto ){
                toggle.css({
                    'color': '#222831'
                });
            }
        });
    }());
}); 