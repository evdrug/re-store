const menuReducer = (state, action) => {
    if (state === undefined) {
        return {
            menu: [
            ],
            menuLoading: false,
            menuErrorMessage: null,
            menuActive: false
        }
    }
    const {menuState} = state;

    switch (action.type) {
        case 'FETCH_MENU_SUCCESS':
            return {
                ...menuState,
                menu: action.payload,
                menuLoading: false,
                menuErrorMessage: null
            };
        case 'FETCH_MENU_REQUEST':
            return {
                ...menuState,
                menuLoading: true,
                menuErrorMessage: null,
            };
        case 'FETCH_MENU_FAILURE':
            return {
                ...menuState,
                menuLoading: false,
                menuErrorMessage: action.payload
            };

        case 'MENU_VISIBLE_SUBMENU':
            const subMenu = {...action.payload, visible:!action.payload.visible};
            const visibleSubMenu = (store) => {
                return store.map( item => {
                    if (action.payload.tracert.filter(ck => ck === item.id).length) {
                        return {...item, visible:true};
                    }
                    if (item.id === subMenu.id ) {
                        return subMenu;
                    }
                    return {...item, visible:false}
                })
            };
            return {
                ...menuState,
                menu: visibleSubMenu([...menuState.menu]),
            };
        case 'MENU_ACTIVE_LINK':
            const aciveLink = (store) => {
                const filterItem = store.filter(link => link.to === action.payload);
                const itemMenu = filterItem.length ? filterItem[0] : {id:'', tracert:[]};
                return store.map( item => {
                    if (item.id === itemMenu.id) {
                        return {...item, activeLink:true};
                    }

                    if (itemMenu.tracert.filter(ck => ck === item.id).length) {
                        return {...item, activeLink:false, activeChildLink:true, visible:true};
                    }
                    return {...item, activeLink:false, activeChildLink:false, visible:false}
                });
            };
            return {
                ...menuState,
                menu: aciveLink([...menuState.menu])
            };
        case 'MENU_TOGGLE':
            return {
                ...menuState,
                menuActive: !menuState.menuActive
            };

        default:
            return state.menuState;
    }
};
export default menuReducer;