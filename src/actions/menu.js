const visibleSubmenu = (clickItem) => {
    const subMenu = {...clickItem, visible:!clickItem.visible};
    const func = (store) => {
        return store.map( item => {
            if (clickItem.tracert.filter(ck => ck === item.id).length) {
                return {...item, visible:true};
            }
            if (item.id === subMenu.id ) {
                return subMenu;
            }
            return {...item, visible:false}
        })
    };

    return {
        type: 'MENU_VISIBLE_SUBMENU',
        payload: func
    };
};

const activeLink = (clickItem = '/') => {
    const func = (store) => {
        const filterItem = store.filter(link => link.to === clickItem);
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
        type: 'MENU_ACTIVE_LINK',
        payload: func
    };
};

const menuLoaded = (newMenu) => {
    return {
        type: 'FETCH_MENU_SUCCESS',
        payload: newMenu
    };
};
const menuRequest = () => {
    return {
        type: 'FETCH_MENU_REQUEST',
    };
};


const menuError = (error) => {
    return {
        type: 'FETCH_MENU_FAILURE',
        payload: error
    };
};

const menuToggle = () => {
    return {
        type: 'MENU_TOGGLE',
    };
};

export {
    visibleSubmenu,
    activeLink,
    menuLoaded,
    menuRequest,
    menuError,
    menuToggle,
}