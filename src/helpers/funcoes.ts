type MenuOption = '' | 'all' | 'dog' | 'cat' | 'fish'

export const createMenuOption = (activeMenu: MenuOption) => {
    let retunOb = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if (activeMenu !== '') {
        retunOb[activeMenu] = true;
    }

    return retunOb;
}