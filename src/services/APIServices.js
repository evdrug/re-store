export default class APIServices {
    getBooks = () => [
        {
            id: 1,
            title: 'Prod Service',
            autor: 'qwer'
        },
        {
            id: 2,
            title: 'Prod Service2',
            autor: 'qwer2'
        }
    ];
     dataMenu = [
        {
            id:1,
            label:'Home',
            icon: ['fa','coffee'],
            parentId: '',
            to: '/',
        },
        {
            id:2,
            label:'Вланы',
            icon: ['fa','server'],
            parentId: '',
            to: '#',
            visible:false,
        },
        {
            id:4,
            label:'Список вланов',
            icon: ['fa','list-ul'],
            parentId: 2,
            to: '/vlans/',
        },
        {
            id:5,
            label:'sub2',
            icon: ['fa','exchange-alt'],
            parentId: 2,
            to: '#',
        },
        {
            id:6,
            label:'sub3',
            icon: ['fa','exchange-alt'],
            parentId: 2,
            to: '#',
            visible:false,
        },
        {
            id:7,
            label:'sub1',
            icon: ['fa','coffee'],
            parentId: 6,
            to: '/',
        },
        {
            id:8,
            label:'sub4',
            icon: ['fa','exchange-alt'],
            parentId: 6,
            to: '#',
        },
        {
            id:3,
            label:'Test',
            icon: ['fa','exchange-alt'],
            parentId: '',
            to: '#',
        },
        {
            id:11,
            label:'Test',
            icon: ['fa','exchange-alt'],
            parentId: '',
            to: '#',
        },
        {
            id:13,
            label:'TestSub1',
            icon: ['fa','search'],
            parentId: 11,
            to: '/cart/23',
        },
        {
            id:14,
            label:'TestSub2',
            icon: ['fa','exchange-alt'],
            parentId: 11,
            to: '#',
        },
        {
            id:15,
            label:'TestSub1',
            icon: ['fa','exchange-alt'],
            parentId: 5,
            to: '#',
        },
        {
            id:16,
            label:'TestSub2',
            icon: ['fa','exchange-alt'],
            parentId: 5,
            to: '#',
        }
    ];
     dataVlans = [
         {
             id: 1,
             map: '172.17.0.26',
             vlanIdP1: 10,
             vlanIdP2: 20,
             shape: '3M@172.17.26.3',
             commentMap: 'text comment Map',
             userName:'bot',
             info: [
                 {
                     id: 1,
                     client: 'Test Client',
                     address: 'Галерный пр.3',
                     switch: '172.17.1.86',
                     port: '10',
                     account: '8000010426',
                     typePort: 'access',
                     typeTask: 'z',
                     comment: 'comment point',
                     typePoint: 'p',
                     user: 'bot'
                 },
                 {
                     id: 2,
                     client: 'Test Client',
                     address: 'Галерный пр.5',
                     switch: '172.17.1.110',
                     port: '8',
                     account: '8000010427',
                     typePort: 'access',
                     typeTask: 'z',
                     comment: 'comment point',
                     typePoint: 'p',
                     user: 'bot'
                 }
             ]
         },
         {
             id: 2,
             map: '',
             vlanIdP1: 10,
             vlanIdP2: 10,
             shape: '30M@172.17.1.3',
             commentMap: 'text comment Map 2',
             userName:'bot',
             info: [
                 {
                     id: 1,
                     client: 'Test Client2',
                     address: 'Б.Морская 22',
                     switch: '172.17.22.86',
                     port: '10',
                     account: '8000010359',
                     typePort: 'access',
                     typeTask: 'z',
                     comment: 'comment point',
                     typePoint: 'p',
                     user: 'bot'
                 },
                 {
                     id: 2,
                     client: 'Test Client 4',
                     address: 'Гончарная 29',
                     switch: '172.17.22.110',
                     port: '8',
                     account: '8000010465',
                     typePort: 'tagget',
                     typeTask: 'z',
                     comment: 'comment point',
                     typePoint: 'mp',
                     user: 'bot'
                 }
             ]
         },
         {
             id: 3,
             map: '',
             vlanIdP1: 36,
             vlanIdP2: 10,
             shape: '30M@172.17.1.3',
             commentMap: 'text comment Map 2',
             userName:'bot',
             info: [
                 {
                     id: 1,
                     client: 'Test Client2',
                     address: 'Б.Морская 22',
                     switch: '172.17.22.86',
                     port: '10',
                     account: '8000010359',
                     typePort: 'access',
                     typeTask: 'z',
                     comment: 'comment point',
                     typePoint: 'p',
                     user: 'bot'
                 },
             ]
         },
         {
             id: 4,
             map: '',
             vlanIdP1: 35,
             vlanIdP2: 35,
             shape: '30M@172.17.1.3',
             commentMap: 'text comment Map 2',
             userName:'bot',
             info: [

             ]
         },

         ];

    getMenu = () => {
       return new Promise((resolve, reject) => {
           setTimeout(() => {
               // reject(new Error('errooooorrrr'))
               resolve(this.dataMenu)
           }, 700)
       })
    };

    getVlans = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // reject(new Error('errooooorrrr'))
                resolve(this.dataVlans)
            }, 700)
        })
    }
};