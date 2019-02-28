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
            return {
                ...menuState,
                menu: action.payload([...menuState.menu]),
            };

        case 'MENU_ACTIVE_LINK':
            return {
                ...menuState,
                menu: action.payload([...menuState.menu])
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