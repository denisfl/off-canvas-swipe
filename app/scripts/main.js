(function($){
    $('#main').swipeRight(function(){
        $('#wrap').addClass('active-nav')
        $('#wrap').removeClass('active-sidebar')
    })
    $('#complementary').swipeRight(function(){
        $('#wrap').removeClass('active-nav')
        $('#wrap').removeClass('active-sidebar')
    })
    $('#main').swipeLeft(function(){
        $('#wrap').addClass('active-sidebar')
        $('#wrap').removeClass('active-nav')
    })
    $('#nav').swipeLeft(function(){
        $('#wrap').removeClass('active-nav')
        $('#wrap').removeClass('active-sidebar')
    })
})(Zepto)
