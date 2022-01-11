$(function(){

    // Remove svg.radial-progress .complete inline styling
    $('svg.radial-progress').each(function( index, value ) { 
        $(this).find($('circle.complete')).removeAttr( 'style' );
    });

    // Activate progress animation on scroll
    $(window).scroll(function(){
        $('svg.radial-progress').each(function( index, value ) { 
            // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
            if ( 
                $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
                $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
            ) {
                // Get percentage of progress
                percent = $(value).data('percentage');
                // Get radius of the svg's circle.complete
                radius = $(this).find($('circle.complete')).attr('r');
                // Get circumference (2πr)
                circumference = 2 * Math.PI * radius;
                // Get stroke-dashoffset value based on the percentage of the circumference
                strokeDashOffset = circumference - ((percent * circumference) / 100);
                // Transition progress for 1.25 seconds
                $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
            }
        });
    }).trigger('scroll');
    var mixer = mixitup(".mixitup");
    $(window).scroll(function(){
        var scrl = $(window).scrollTop();
        if(scrl>=388){
            $(".navbar").addClass("fixed-top bg-custom-purple-trans");
            $(".navbar").removeClass("bg-custom-purple");
            $(".navbar").removeClass("bg-custom-purple");

        }
        else{
            $(".navbar").removeClass("fixed-top");
            $(".navbar").removeClass("bg-custom-purple-trans");
            $(".navbar").addClass("bg-custom-purple");
        }
        console.log(scrl);
        
    })

});
