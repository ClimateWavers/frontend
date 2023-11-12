import Mtn from '../../public/mtn.png'
import airtel from '../../public/airtel.png'
import etisalat from '../../public/etisalat.png'
import glo from '../../public/glo.png'


export const networkData = [
    {
        id:1,
        name:'Mtn',
        pic: Mtn,
        // className: ' bg-[#fef40026] border-transparent rounded-full border-2 ${ network === name && ` border-2 !${border}` } ' ,
        bgColor: 'bg-[#fef40026]',
        borderColor: 'border-[#FEF400]',
    },
    {
        id:2,
        name:'Airtel',
        pic: airtel,
        bgColor: 'bg-[#e2001026]',
        borderColor: 'border-[#E20010]',
    },
    {
        id:3,
        name:'Glo',
        pic: glo,
        bgColor: 'bg-[#006e5326]',
        borderColor: 'border-[#006e52d8]',
    },
    {
        id:4,
        name:'9moblie',
        pic: etisalat,
        bgColor: 'bg-[#50b65126]',
        borderColor: 'border-[#50b652b5]',
    },
]