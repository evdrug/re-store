const initialState = {
    books: [],
    menu: [
        {
            id:1,
            label:'Home',
            icon: ['fa','coffee'],
            parentId: '',
            to: '/',
        },
        {
            id:2,
            label:'Cart',
            icon: ['fab','google'],
            parentId: '',
            to: '#',
            visible:false,
        },
        {
            id:4,
            label:'sub1',
            icon: ['fa','coffee'],
            parentId: 2,
            to: '/cart/',
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
            icon: ['fa','exchange-alt'],
            parentId: 11,
            to: '#',
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
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload
            };

        case 'VISIBLE_SUBMENU':
            return {
                ...state,
                menu: action.payload(state.menu)
            };
            
        case 'ACTIVE_LINK':
            return {
                ...state,
                menu: action.payload(state.menu)
            };

        default:
            return state;
    }
};

export default reducer;

