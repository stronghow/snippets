window.addEventListener('hashchange', function(){
            var id = window.location.hash
            if($(id)) {
                var h = 2 * $(id).offset().top + $(id).height() - $(window).height();
                $(window).scrollTop(h / 2)
            }
        })