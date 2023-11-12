import {ArrowSwapHorizontal, ArrowRight, ArrowLeft, Tag } from 'iconsax-react';



export const recentTransactions = [
    {   
        index:1,
        id: 'inwinienw',
        icon: <ArrowSwapHorizontal color='#135549' /> ,
        timeOfTransaction:"09:23pm" ,
        category: "Airtime to Cash",
        narration: `Converted N5,000 to cash`,
        debitOrCredit: "debit",
        amount: '',
        
    },
    {   
        index:2,
        id: 'sounosounw',
        icon: <ArrowRight color='#38D103' /> ,
        timeOfTransaction:"09:23pm" ,
        category: "transfer",
        narration: `Received N100,000.00 from Access bank`,
        debitOrCredit: "credit",
        amount: '+N100,000.00',
        
    },
    {   
        index:3,
        id: 'adiwvnawubv',
        icon: <ArrowLeft color='#FF5757' /> ,
        timeOfTransaction:"09:23pm" ,
        category: "transfer",
        narration: `Sent N10,000.00 to John Baushe`,
        debitOrCredit: "debit",
        amount: '-N10,000.00',
        
    },
    {   
        index:4,
        id: 'sdunounsd',
        icon: <Tag color='#135549' /> ,
        timeOfTransaction:"09:23pm" ,
        category: "Bills",
        narration: `Electricity bill payment`,
        debitOrCredit: "debit",
        amount: '-N25,000.00',
        
    },
]