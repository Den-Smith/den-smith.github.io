$(document).ready(function() {

    // Preloader
    $(".loader_inner").fadeOut();
    $(".loader").delay(400).fadeOut("slow");

    /* <![CDATA[ */
    function externalLinks() {
        links = document.getElementsByTagName("a");
        for (i = 0; i < links.length; i++) {
            link = links[i];
            if (link.getAttribute("href") && link.getAttribute("rel") == "external")
                link.target = "_blank";
        }
    }
    window.onload = externalLinks;
    /* ]]> */


    // tooltips
    

    // копировать номер телефона в буфер обмена
    var copyPhoneBtn = document.querySelector('.phone');
    copyPhoneBtn.addEventListener('click', function(event) {
        // Выборка ссылки с электронной почтой 
        var emailLink = document.querySelector('.phone');
        var range = document.createRange();
        range.selectNode(emailLink);
        window.getSelection().addRange(range);

        try {
            // Теперь, когда мы выбрали текст ссылки, выполним команду копирования
            var successful = document.execCommand('copy');
            $('.tooltip_li').popover('show');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy email command was ' + msg);
            setTimeout(function(){$('.tooltip_li').popover('destroy')},1600);
        } catch (err) {
            console.log('unable to copy');
        }
        window.getSelection().removeAllRanges();
    });
});
