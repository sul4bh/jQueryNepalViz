(function( $ ){
    $.fn.nepalSVG = function (options) {
        this.svg({
            loadURL:'nepal.svg',
            onLoad:function () {
                var mapData = options.data;
                loadData(mapData);
                var compiledTemplates = {};
                var templateCurrent;

                $('.dr, .district, .zone').hover(
                    function (e){
                        $(this).highlight();
                        var eleClass = $(this).attr('class');
                        var eleId = $(this).attr('id');
                        var value = mapData[eleClass]['data'][eleId];
                        var template = mapData[eleClass]['template'];
                        var context = mapData[eleClass]['data'][eleId];
                        context['name'] = abbrLookup(eleId);

                        //compile and cache template
                        if (compiledTemplate.hasOwnProperty(template)){
                            templateCurrent = compiledTemplate[template];
                        }else{
                            templateCurrent = compiledTemplate[template] = Mustache.compile($(template).html());
                        }

                        var html = templateCurrent(context);
                        $('#hover').html(html).stop().fadeIn();
                    },
                    function (e){
                        $(this).dim();
                        $('#hover').hide();
                    }
                )

                var mouseX, mouseY;
                $(document).mousemove(function (e) {
                    $('#hover').css({top:e.pageY + 15, left:e.pageX + 10});
                });

                setTitle(mapData.title);

                $('#layerHTML').val('district').trigger('click');
            }
        })





        /* extending functions --starts-- */
        $(function () {
            (function ($) {
                $.fn.extend({
                    fillColor:function (color) {
                        return this.each(function () {
                            var ele = $(this);
                            setStyle(ele, 'fill', color);
                        });
                    }
                });

                $.fn.extend({
                    strokeColor:function (color) {
                        return this.each(function () {
                            var ele = $(this);
                            setStyle(ele, 'stroke', color);
                        });
                    }
                })

                $.fn.extend({
                    strokeWidth:function (width) {
                        return this.each(function () {
                            var ele = $(this);
                            setStyle(ele, 'stroke-width', width);
                        });
                    }
                })

                var originalFill;
                $.fn.extend({
                    highlight:function () {
                        return this.each(function () {
                            var ele = $(this);
                            originalFill = getStyle(ele,'fill');
                            var strokeColor = '#E9662B';
                            setStyle(ele, 'fill', $.xcolor.lighten(getStyle($(this), 'fill')).getHex());
                            setStyle(ele, 'stroke', strokeColor);
                            setStyle(ele, 'stroke-width', 1);
                        });
                    }
                })

                $.fn.extend({
                    dim:function () {
                        return this.each(function () {
                            var ele = $(this);
                            setStyle(ele, 'stroke', 'none');
                            setStyle(ele, 'stroke-width', '0');
                            setStyle(ele, 'fill', originalFill);
                        });
                    }
                })
            })(jQuery);

        });
        /* extending functions --ends-- */
    }

    $.fn.nepalSVGReset = function (){
        this.svg('destroy');
        $('#layerHTML').remove();
        $('#map-title').html('').hide();
    }
})( jQuery );
