String.prototype.toCapitalize = function()
{
    return this.toLowerCase().replace(/^.|\s\S/g, function(a) { return a.toUpperCase(); });
}
/*************************************************************/

function setTitle(title){
    var top = $('#map').offset().top + $('#map-title').height() + 35;
    var left = $('#map').offset().left + $('#map-title').width() - 20;
    $('#map-title').css({top:top,left:left}).html(title).show();

}

function abbrLookup(abbr){
    var abbrLookup = {
        dr:'Developement Region',
        e:'Eastern',
        c:'Central',
        w:'Western',
        mw:'Mid-Western',
        fw:'Far-Western'
    };
    if (abbrLookup.hasOwnProperty(abbr))
        return abbrLookup[abbr];
    else
        return abbr;

}

function drawLayerSelector(){
    $("body").append('<select onclick="showHideLayers(this)" id="layerHTML" style="display: none;position: absolute"></select>');
    for (var i = layers.length - 1; i >= 0; i--) {
        if (layers[i])
            $('#layerHTML').append('<option value='+layers[i]+' name='+layers[i]+'>'+abbrLookup(layers[i]).toCapitalize()+'</option>');
    }
    var top = $('#map').offset().top + $('#layerHTML').height() + 13;
    var left = $('#map').offset().left + $('#map').width() - $('#layerHTML').width();
    $('#layerHTML').css({top:top,left:left}).show();

}

function showHideLayers(ele){
    for (var i = layersMaster.length - 1; i >= 0; i--) {
        if (layersMaster[i] == $(ele).val())
            $('.'+layersMaster[i]).show();
        else
            $('.'+layersMaster[i]).hide();
    }
}

function loadData(dataJSON){
    for (var i = layers.length - 1; i >= 0; i--) {
        if (!dataJSON.hasOwnProperty(layers[i])){
            delete layers[i];
        }
    }
    drawLayerSelector(); //draw the drop down selector

    if (dataJSON.hasOwnProperty('dr')) drawGroup(dataJSON,'dr'); else $('.dr').hide();
    if (dataJSON.hasOwnProperty('zone')) drawGroup(dataJSON,'zone'); else $('.zone').hide();
    if (dataJSON.hasOwnProperty('district')) drawGroup(dataJSON,'district');else $('.district').hide();
}


var value = [], text = [], compiledTemplate = [];
function drawGroup(dataJSON,type){
    var groupData = dataJSON[type]['data'];
    var groupTemplate = dataJSON[type]['template'];
    var keys = Object.keys(groupData);
    var sortArray = [];
    for (var i = keys.length -1 ; i >= 0; i--){
        sortArray.push(groupData[keys[i]]['metric']);
    }
    sortArray.sort(function(a,b){return b-a})
    var max = sortArray[0];
    var min = sortArray[sortArray.length - 1];

    var step, color;
    for (var i = keys.length -1 ; i >= 0; i--){
        var segment = 10;
        value[i] = groupData[keys[i]]['metric'];
        text[i] = groupData[keys[i]]['text'];
        if (value[i] > 0){
            step = parseInt((segment / max) * value[i]) - (segment / 2);
            color = $.xcolor.darken('#152D44', step).getHex(); //blue
        }else{
            step = parseInt((segment / min) * value[i]) - (segment / 2);
            color = $.xcolor.darken('red', step).getHex(); //blue
        }
        setStyle($('#' + keys[i]), 'fill', color);
    }

}


/*************************************************************/
//style related getter setters
/*************************************************************/
function styleJSON(style) {
    style = style.split(';');
    var json = {};
    for (var i = 0; i < style.length; i++) {
        var obj = style[i].split(':');
        json[obj[0]] = obj[1];
    }
    return json;
}

function styleText(styleJSON) {
    var style = '';
    var temp = '';
    for (var type in styleJSON) {
        temp = type + ':' + styleJSON[type] + ';';
        style += temp;
    }
    style = style.substring(0, style.length - 1);
    return style;
}

function setStyle(ele, type, value) {
    var style = ele.attr('style');
    if (!style) {
        ele.attr(type, value);
    } else {
        style = styleJSON(style);
        style[type] = value;
        style = styleText(style);
        ele.attr('style', style);
    }
}

function getStyle(ele, type) {
    var style = ele.attr('style');
    var value = "";
    if (!style) {
        value = ele.attr(type);
    } else {
        value = styleJSON(style)[type];
    }
    return value;
}
