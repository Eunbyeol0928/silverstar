$(function () {
    //alert('이 사이트는 PC 버전, 모바일 버전')

    $('.question a').click(function (e) {
        e.preventDefault()
    })
    // 아코디언
    $('li.question').click(function () {
        $(this).next().slideToggle().siblings('li.A').slideUp()
    })
    //메뉴 색변화
    // let bg = ['#004fce','#1fafb8','#f2f2f2','#141f26']
    // let color = ['#f29f05','#e81f42','#030abc','#a63333']

    // let coloridx = 0

    // $('.main-li').click(function(){
    //     let bgcolor = bg[coloridx]
    //     let fontcolor = color[coloridx]

    //     $(this).css({
    //         'background-color': bgcolor,
    //         'color': fontcolor
    //     })

    //     $('.main-li').removeClass('selected')
    //     $(this).addClass('selected')

    //     coloridx = (coloridx + 1) % bg.length
    // })

    // $(this).find('a').css({

    // })
    $('.main-li .question').click(function (e) {
        e.preventDefault()
        let bgColor = $(this).data('bgcolor');
        let fontColor = $(this).data('font-color');
        $('.main-li').css({
            'background-color': bgColor,
            'color': fontColor
        });

        let borderColor = $(this).find('a').data('bordercolor');
        // $(this).find('a').css({
        //     'border-color' : borderColor,
        //     'color' : borderColor
        // });

        $('.main-li').find('a').css({
            'border-color': borderColor,
            'color': borderColor
        });

        $('.main-li').removeClass('selected');
        $(this).addClass('selected');

        // $(this).find('a').removeClass('selected');
        // $('.main-li .Q a').removeClass('selected');
        // $(this).find('a').addClass('selected');
    });

    $('.play-btn .play').on("click", function (e) {
        e.preventDefault();
        $("video").each(function () {
            this.play();
        });
    });

    $('.play-btn .pause').on("click", function (e) {
        e.preventDefault();
        $("video").each(function () {
            this.pause();
        });
    });

    $('.download h2').on("click", function () {
        var filePath = "../documents/1. HTML.pdf";
        var link = document.createElement('a');
        link.href = filePath;
        link.download = '최은별_이력서.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    $('.pro-icon').click(function () {
        $('.myicon .download').toggle();
    });

    $('.start_btn').click(function () {
        $('.startmain').hide()
        $('.main-item').show()
        $('.container .main-li').show()
    });

    $('.main-item-btn .profile_btn').click(function () {
        $('.container .profile').show()
        $('.container .contact').hide()
    });
    $('.main-item-btn .contact_btn').click(function () {
        $('.container .contact').show()
        $('.container .profile').hide()
    });
    $('.gotop').click(function () {
        $('.container .profile').hide()
        $('.container .contact').hide()
    });

    $('.contact .c-form').mouseenter(function () {
        $('.contact .c-form').stop().animate({
            'bottom': '0%'
        }, 700)
    });

    $('.contact .submit-btn').click(function(){
        $('.contact .c-form').stop().animate({
            'bottom' : '-50%'
        }, 700)
    });

    // const swiper = $('.question .swiper-slide')

    // swiper.click(function(){
    //     let idx = $('.question .swiper-slide').index()
    //     console.log(idx)
    //     $('.video-popup').eq(idx).show()
    // })

})