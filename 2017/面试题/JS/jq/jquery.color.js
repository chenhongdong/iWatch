/**
 * Created by you-mac on 2017/4/11.
 */
;(function($) {
    $.fn.extend({
        'color': function (value) {
            if (value == undefined) {
                return this.css('color');
            } else {
                return this.css('color', value);
            }
        },
        'border': function (value) {
            
        },
        'background': function (value) {

        }
    });
})(jQuery);