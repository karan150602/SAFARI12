$(document).ready(function () {
    //Places to explore hover
    $('.article-figure-1')
        .hover(() => {
            $('.article-image-hover-1').css('display', 'block');
        })
        .mouseleave(event => {
            $('.article-image-hover-1').css('display', 'none');
        });

    $('.article-figure-2')
        .hover(() => {
            $('.article-image-hover-2').css('display', 'block');
        })
        .mouseleave(_event => {
            $('.article-image-hover-2').css('display', 'none');
        });

    //Wild life hover functionality
    $('.wildlife img')
        .mouseenter(event => {
            let imageName = event.target.getAttribute('data-image');
            if (imageName) {
                const imageUrl = 'assets/images/animals/hover/' + imageName;
                $('.animal-tooltip img').attr('src', imageUrl);
                $('.animal-tooltip img').attr('width', '150px');
                $('.animal-tooltip').css('display', 'block');
                $('.animal-tooltip').css('top', event.pageY);
                $('.animal-tooltip').css('left', event.pageX);
            }
        })
        .mouseleave(() => {
            $('.animal-tooltip').css('display', 'none');
        });
});
