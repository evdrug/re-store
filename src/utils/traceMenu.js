const traceMenu = (menu) => {
    const copyMenu = menu.map(item => ({...item}));
    let tracert =[];
    const flatMenu = (menu, parentId = '') => {
        const m = menu.filter(item => item.parentId === parentId);
        return m.map(item => {
            item.visible = false;
            item.activeChildLink = false;
            item.activeLink = false;
            item.tracert = [...tracert];
            tracert.push(item.id);
            flatMenu(menu, item.id);
            tracert.pop();
            return item;
        });
    };
    flatMenu(copyMenu);
    return copyMenu;
};

export default traceMenu;