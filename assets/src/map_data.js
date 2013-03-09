var popnDensity = {
    title : 'Population Density 2011 Census',
    dr:{
        data:{
            e:{
                metric:205,
                text:'Headquarter: <b>Dhankuta</b>',
                img:'assets/img/dhankuta.jpg'
            },
            c:{
                metric:354,
                text:'Headquarter: <b>Kathmandu</b>',
                img:'assets/img/kathmandu.jpg'
            },
            w:{
                metric:168,
                text:'Headquarter: <b>Pokhara</b>',
                img:'assets/img/pokhara.jpg'

            },
            mw:{
                metric:85,
                text:'Headquarter: <b>Birendranagar</b>',
                img:'assets/img/birendranagar.jpg'

            },
            fw:{
                metric:130,
                text:'Headquarter: <b>Dipayal</b>',
                img:'assets/img/dipayal.jpg'

            }
        },
        template:'#drTemplate'
    },
    district:{
        data:{
            taplejung:{metric:35, text:''},
            panchthar:{metric:160, text:''},
            illam:{metric:174, text:''},
            jhapa:{metric:505, text:''},
            morang:{metric:520, text:''},
            sunsari:{metric:598, text:''},
            dhankuta:{metric:184, text:''},
            terathum:{metric:150, text:''},
            sankhuwasava:{metric:46, text:''},
            bhojpur:{metric:122, text:''},
            solukhumbu:{metric:32, text:''},
            okhaldhunga:{metric:138, text:''},
            khotang:{metric:131, text:''},
            udaypur:{metric:156, text:''},
            saptari:{metric:474, text:''},
            siraha:{metric:541, text:''},
            dhanusa:{metric:651, text:''},
            mahattori:{metric:645, text:''},
            sarlahi:{metric:611, text:''},
            sindhuli:{metric:118, text:''},
            ramechhap:{metric:133, text:''},
            dolakha:{metric:86, text:''},
            sindhupalchok:{metric:114, text:''},
            kavre:{metric:279, text:''},
            lalitpur:{metric:1212, text:''},
            bhaktapur:{metric:2546, text:''},
            kathmandu:{metric:4408, text:''},
            nuwakot:{metric:249, text:''},
            rasuwa:{metric:28, text:''},
            dhading:{metric:175, text:''},
            makwanpur:{metric:176, text:''},
            rautahat:{metric:618, text:''},
            bara:{metric:589, text:''},
            parsa:{metric:445, text:''},
            chitwan:{metric:255, text:''},
            gorkha:{metric:75, text:''},
            lamjung:{metric:100, text:''},
            tanahu:{metric:214, text:''},
            syanja:{metric:247, text:''},
            kaski:{metric:243, text:''},
            manang:{metric:3, text:''},
            mustang:{metric:4, text:''},
            myagdi:{metric:50, text:''},
            parbat:{metric:298, text:''},
            baglung:{metric:151, text:''},
            gulmi:{metric:247, text:''},
            palpa:{metric:196, text:''},
            nawalparasi:{metric:294, text:''},
            rupandehi:{metric:652, text:''},
            kapilvastu:{metric:328, text:''},
            arghakhanchi:{metric:168, text:''},
            puythan:{metric:180, text:''},
            rolpa:{metric:121, text:''},
            rukum:{metric:73, text:''},
            salyan:{metric:167, text:''},
            dang:{metric:189, text:''},
            banke:{metric:211, text:''},
            bardia:{metric:211, text:''},
            surkhet:{metric:147, text:''},
            dailekh:{metric:176, text:''},
            jajarkot:{metric:77, text:''},
            dolpa:{metric:5, text:''},
            jumla:{metric:43, text:''},
            kalikot:{metric:81, text:''},
            mugu:{metric:16, text:''},
            humla:{metric:9, text:''},
            bajura:{metric:62, text:''},
            bajhang:{metric:57, text:''},
            achham:{metric:154, text:''},
            doti:{metric:105, text:''},
            kailali:{metric:238, text:''},
            kanchanpur:{metric:276, text:''},
            dadeldhura:{metric:92, text:''},
            baitadi:{metric:166, text:''},
            darchula:{metric:57, text:''}
        },
        template:'#districtTemplate'
    }

}


var annualGrowthRate = {
    title : 'Annual Growth Rate 2011 Census',
    dr:{
        data:{
            e:{
                metric:0.88,
                text:'Headquarter: <b>Dhankuta</b>',
            },
            c:{
                metric:1.90,
                text:'Headquarter: <b>Kathmandu</b>'
            },
            w:{
                metric:0.79,
                text:'Headquarter: <b>Pokhara</b>'
            },
            mw:{
                metric:1.74,
                text:'Headquarter: <b>Birendranagar</b>'
            },
            fw:{
                metric:1.49,
                text:'Headquarter: <b>Dipayal</b>'
            }
        },
        template:'#drTemplateGR'
    },
    district:{
        data:{
            taplejung:{metric:-0.47, text:''},
            panchthar:{metric:-0.18, text:''},
            illam:{metric:0.45, text:''},
            jhapa:{metric:1.64, text:''},
            morang:{metric:1.35, text:''},
            sunsari:{metric:1.83, text:''},
            dhankuta:{metric:-0.14, text:''},
            terathum:{metric:-1.06, text:''},
            sankhuwasava:{metric:0.03, text:''},
            bhojpur:{metric:-0.99, text:''},
            solukhumbu:{metric:-0.09, text:''},
            okhaldhunga:{metric:-0.55, text:''},
            khotang:{metric:-1.01, text:''},
            udaypur:{metric:1.13, text:''},
            saptari:{metric:1.25, text:''},
            siraha:{metric:1.17, text:''},
            dhanusa:{metric:1.35, text:''},
            mahattori:{metric:1.55, text:''},
            sarlahi:{metric:1.90, text:''},
            sindhuli:{metric:0.52, text:''},
            ramechhap:{metric:-0.34, text:''},
            dolakha:{metric:-0.82, text:''},
            sindhupalchok:{metric:-0.55, text:''},
            kavre:{metric:0.11, text:''},
            lalitpur:{metric:3.23, text:''},
            bhaktapur:{metric:2.96, text:''},
            kathmandu:{metric:4.76, text:''},
            nuwakot:{metric:-0.34, text:''},
            rasuwa:{metric:-0.21, text:''},
            dhading:{metric:-0.07, text:''},
            makwanpur:{metric:0.85, text:''},
            rautahat:{metric:2.45, text:''},
            bara:{metric:2.26, text:''},
            parsa:{metric:1.91, text:''},
            chitwan:{metric:1.83, text:''},
            gorkha:{metric:-0.67, text:''},
            lamjung:{metric:-0.46, text:''},
            tanahu:{metric:0.48, text:''},
            syanja:{metric:-0.97, text:''},
            kaski:{metric:2.54, text:''},
            manang:{metric:-3.84, text:''},
            mustang:{metric:-0.82, text:''},
            myagdi:{metric:-0.06, text:''},
            parbat:{metric:-0.71, text:''},
            baglung:{metric:0.04, text:''},
            gulmi:{metric:-0.45, text:''},
            palpa:{metric:0.03, text:''},
            nawalparasi:{metric:1.22, text:''},
            rupandehi:{metric:2.25, text:''},
            kapilvastu:{metric:1.69, text:''},
            arghakhanchi:{metric:-0.39, text:''},
            puythan:{metric:1.01, text:''},
            rolpa:{metric:0.78, text:''},
            rukum:{metric:1.13, text:''},
            salyan:{metric:1.32, text:''},
            dang:{metric:1.88, text:''},
            banke:{metric:2.45, text:''},
            bardia:{metric:1.10, text:''},
            surkhet:{metric:2.22, text:''},
            dailekh:{metric:1.58, text:''},
            jajarkot:{metric:2.46, text:''},
            dolpa:{metric:2.17, text:''},
            jumla:{metric:1.95, text:''},
            kalikot:{metric:2.94, text:''},
            mugu:{metric:2.30, text:''},
            humla:{metric:2.28, text:''},
            bajura:{metric:2.20, text:''},
            bajhang:{metric:1.61, text:''},
            achham:{metric:1.09, text:''},
            doti:{metric:0.23, text:''},
            kailali:{metric:2.22, text:''},
            kanchanpur:{metric:1.62, text:''},
            dadeldhura:{metric:1.15, text:''},
            baitadi:{metric:0.73, text:''},
            darchula:{metric:0.9, text:''}
        },
        template:'#districtTemplateGR'
    }

}
