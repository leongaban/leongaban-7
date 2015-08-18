// =========================================================================
//  MODAL MODULE
// =========================================================================
LEON.modals = (function ($, w, undefined) {
    'use strict';

    var wireModals = function () {

        // Project Thumbs Modals:
        $('.thumb_home').unbind('click').bind('click', function() {
            $('.modal_image').hide();
            $('.screenshot_home').show();
            $('.modal').fadeIn('fast');
            $('.overlay').fadeIn('fast');
        });

        $('.thumb_dash').unbind('click').bind('click', function() {
           $('.modal_image').hide();
            $('.screenshot_dash').show();
            $('.modal').fadeIn('fast');
            $('.overlay').fadeIn('fast');
        });

        $('.thumb_details').unbind('click').bind('click', function() {
            $('.modal_image').hide();
            $('.screenshot_details').show();
            $('.modal').fadeIn('fast');
            $('.overlay').fadeIn('fast');
        });

        $('.thumb_contacts').unbind('click').bind('click', function() {
            $('.modal_image').hide();
            $('.screenshot_contacts').show();
            $('.modal').fadeIn('fast');
            $('.overlay').fadeIn('fast');
        });

        // SVG thumb modal:
        $('.thumb_svg').unbind('click').bind('click', function() {
            $('.modal_image').hide();
            $('.screenshot_svg').show();
            $('.modal').fadeIn('fast');
            $('.overlay').fadeIn('fast');
        });

        // Close modals:
        $('.close_modal').unbind('click').bind('click', function() {
            $('.modal').hide();
            $('.overlay').hide();
        });
        
    };

    return {
        wireModals: wireModals,
    };

}(jQuery, window));