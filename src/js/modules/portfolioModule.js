// =========================================================================
//  PORTFOLIO MODULE
// =========================================================================
LEON.portfolio = (function ($, w, undefined) {
    'use strict';
    
    function init() {
        initialize();
    };
    
    var initialize = function (thing) {

        // initialize the modals:
        LEON.modals.wireModals($());
    };

    return {
        initialize: initialize,
        init : init
    };

}(jQuery, window));

$(document).ready(function () {
    LEON.portfolio.init();
});