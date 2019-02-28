const subMenu = (menu, parentId = '') => {
    const m = menu.filter(item => item.parentId === parentId);
    return m.map(item => {
        const copyItem = {...item};
        const submenu = subMenu(menu, copyItem.id);
        if (submenu.length) {
            copyItem.submenu = submenu;
            copyItem.to = undefined;
        }
        return copyItem;
    });
};

export default subMenu;