const visibleSubmenu = (clickItem) => {
    return {
        type: 'MENU_VISIBLE_SUBMENU',
        payload: clickItem
    };
};

const activeLink = (clickItem = '/') => {
    return {
        type: 'MENU_ACTIVE_LINK',
        payload: clickItem
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