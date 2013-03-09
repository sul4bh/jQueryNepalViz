var layersMaster = ['dr','zone','district'];

var layers = ['dr','zone','district'];

var developmentRegion = {
    fwdr:['mahakali', 'seti'],
    mwdr:['karnali', 'bheri', 'rapti'],
    wdr:['dhawalagiri', 'gandaki', 'lumbini'],
    cdr:['bagmati', 'narayani', 'janakpur'],
    edr:['sagarmatha', 'koshi', 'mechi']
}

var zone = {
    mahakali:['darchula', 'baitadi', 'dadeldhura', 'kanchanpur'],
    seti:['bajhang', 'bajura', 'doti', 'achham', 'kailali'],
    karnali:['humla', 'mugu', 'dolpa', 'jumla', 'kalikot'],
    bheri:['dailekh', 'jajarkot', 'surkhet', 'bardiya', 'banke'],
    rapti:['rukum', 'salyan', 'rolpa', 'dang', 'pyuthyan'],
    dhawalagiri:['mustang', 'myagdi', 'baglung', 'parbat'],
    gandaki:['manang', 'kaski', 'lamjumg', 'gorkha', 'syanja', 'tanahu'],
    lumbini:['gulmi', 'palpa', 'nawalparasi', 'arghakhanchi', 'rupandehi', 'kapilbastu'],
    bagmati:['rasuwa', 'sindhupalchok', 'nuwakot', 'dhading', 'kavre', 'kathmandu', 'bhaktapur', 'lalitpur'],
    narayani:['chitwan', 'makwanpur', 'parsa', 'bara', 'rautahat'],
    janakpur:['dolakha', 'ramechhap', 'sindhuli', 'sarlahi', 'mahottari', 'dhanusha'],
    sagarmatha:['solukhumbu', 'okhaldhunga', 'kothang', 'udayapur', 'siraha', 'saptari'],
    koshi:['sankhuwasabha', 'bhojpur', 'therathum', 'dhankuta', 'sunsari', 'morang'],
    mechi:['taplejung', 'therathum', 'pachthar', 'illam', 'jhapa']
}

var zones = developmentRegion.fwdr.concat(developmentRegion.mwdr.concat(developmentRegion.wdr.concat(developmentRegion.cdr.concat(developmentRegion.edr))));
var districts = [];
for (var i = 0; i < zones.length; i++) {
    districts = districts.concat(zone[zones[i]]);
}
