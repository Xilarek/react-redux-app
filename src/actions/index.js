const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    };
};

const menuReauested = () => {
    return {
        type: 'MENU_REQUESTED'
    };
};

export {
    menuLoaded,
    menuReauested
};