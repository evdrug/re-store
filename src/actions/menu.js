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
        type: 'VISIBLE_SUBMENU',
        payload: func
    };
};

const activeLink = (clickItem) => {

    const func = (store) => {

        return store.map( item => {
            if (item.id === clickItem.id) {
                return {...item, activeLink:true};
            }

            if (clickItem.tracert.filter(ck => ck === item.id).length) {
                return {...item, activeChildLink:true, visible:true};
            }

            return {...item, activeLink:false, activeChildLink:false, visible:false}
        })
    };
    return {
        type: 'ACTIVE_LINK',
        payload: func
    };
};

export {
    visibleSubmenu,
    activeLink
}