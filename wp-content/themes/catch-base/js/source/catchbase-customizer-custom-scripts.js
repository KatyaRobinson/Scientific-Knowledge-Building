/**
 * Theme Customizer custom scripts
 * Control of show/hide events for Customizer
 */
(function($) {

    //Message if WordPress version is less tham 4.0
    if (parseInt(catchbase_misc_links.WP_version) < 4) {
        $('.preview-notice').prepend('<span style="font-weight:bold;">' + catchbase_misc_links.old_version_message + '</span>');
        jQuery('#customize-info .btn-upgrade, .misc_links').click(function(event) {
            event.stopPropagation();
        });
    }

    //Add Upgrade Button,Theme instruction, Support Forum, Changelog, Donate link, Review, Facebook, Twitter, Google+, Pinterest links 
    $('.preview-notice').prepend('<span id="catchbase_upgrade"><a target="_blank" class="button btn-upgrade" href="' + catchbase_misc_links.upgrade_link + '">' + catchbase_misc_links.upgrade_text + '</a></span>');
    jQuery('#customize-info .btn-upgrade, .misc_links').click(function(event) {
        event.stopPropagation();
    });
    /*
     * For Featured Content on featured_content_type change event
     */
    $("#customize-control-catchbase_theme_options-featured_content_type label select").live( "change", function() {
        var value = $(this).val();

        if (value == 'demo-featured-content') {
            $('#customize-control-catchbase_theme_options-featured_content_number').hide();
            $('#customize-control-catchbase_theme_options-featured_content_headline').hide();
            $('#customize-control-catchbase_theme_options-featured_content_subheadline').hide();
            $('#customize-control-catchbase_theme_options-featured_content_show').hide();
            $('[id*=customize-control-catchbase_featured_content_page]').hide();
        } else {
            $('#customize-control-catchbase_theme_options-featured_content_number').show();
            $('#customize-control-catchbase_theme_options-featured_content_headline').show();
            $('#customize-control-catchbase_theme_options-featured_content_subheadline').show();
            $('#customize-control-catchbase_theme_options-featured_content_show').show();
            $('[id*=customize-control-catchbase_featured_content_page]').show();
        }
    });

    /**
     * Control of show/hide events on feature content type selection on panel click if prevously value has been saved
     */
    $('#accordion-panel-catchbase_featured_content_options .accordion-section-title').live( "click", function() {
        var value = $("#customize-control-catchbase_theme_options-featured_content_type label select").val();
         if (value == 'demo-featured-content') {
            $('#customize-control-catchbase_theme_options-featured_content_number').hide();
            $('#customize-control-catchbase_theme_options-featured_content_headline').hide();
            $('#customize-control-catchbase_theme_options-featured_content_subheadline').hide();
            $('#customize-control-catchbase_theme_options-featured_content_show').hide();
            $('[id*=customize-control-catchbase_featured_content_page]').hide();
        } else {
            $('#customize-control-catchbase_theme_options-featured_content_number').show();
            $('#customize-control-catchbase_theme_options-featured_content_headline').show();
            $('#customize-control-catchbase_theme_options-featured_content_subheadline').show();
            $('#customize-control-catchbase_theme_options-featured_content_show').show();
            $('[id*=customize-control-catchbase_featured_content_page]').show();
        }
    });

    /*
     * For Feature Slider on featured_slider_type change event
     */

    $('#accordion-panel-catchbase_featured_slider .accordion-section-title').live( "click", function() {
        var value = $("#customize-control-catchbase_featured_slider_type label select").val();

        if (value == 'demo-featured-slider') {
            $('#customize-control-catchbase_featured_slide_number').hide();
            $('[id*=customize-control-catchbase_featured_slider_page]').hide();
        } else {
            $('#customize-control-catchbase_featured_slide_number').show();
            $('[id*=customize-control-catchbase_featured_slider_page]').show();
        }
    });

    $("#customize-control-catchbase_featured_slider_type label select").live( "change", function() {
        var value = $(this).val();

        if (value == 'demo-featured-slider') {
            $('#customize-control-catchbase_featured_slide_number').hide();
            $('[id*=customize-control-catchbase_featured_slider_page]').hide();
        } else {
            $('#customize-control-catchbase_featured_slide_number').show();
            $('[id*=customize-control-catchbase_featured_slider_page]').show();
        }
    });


    //For Color Scheme
    $("#customize-control-catchbase_theme_options-color_scheme").live( "change", function() {
        //var name = $('#customize-control-catchbase_theme_options-color_scheme input').attr('name');
        var value = $('#customize-control-catchbase_theme_options-color_scheme input:checked').val();
        if ( 'dark' == value ){
            $('#customize-control-header_textcolor .color-picker-hex').iris('color', '#ddd');

            $('#customize-control-background_color .color-picker-hex').iris('color', '#111');
        
        }
        else {
            $('#customize-control-header_textcolor .color-picker-hex').iris('color', '#404040');

            $('#customize-control-background_color .color-picker-hex').iris('color', '#f2f2f2');
        }
    });
     
})(jQuery);