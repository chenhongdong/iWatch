/**
 * Created by you-mac on 2017/4/11.
 */
;(function ($) {
    $.fn.extend({
        'alertBgColor': function (opts) {
            //设置默认值
            opts = $.extend({
                odd: 'odd',
                even: 'even',
                selected: 'selected'
            }, opts);

            $('tbody>tr:odd', this).addClass(opts.odd);
            $('tbody>tr:even', this).addClass(opts.even);

            $('tbody>tr', this).click(function () {
                //判断当前是否选中
                var hasSelected = $(this).hasClass(opts.selected);
                //如果选中就移除select类,否则就加上select类
                $(this)[hasSelected?'removeClass':'addClass'](opts.selected)
                    .find(':checkbox').prop('checked', !hasSelected);
            });
            //如果单选框默认是选择的,则高亮
            $('tbody>tr:has(":checked")', this).addClass(opts.selected);
            return this;    //返回this,使方法可链
        }
    });
})(jQuery);