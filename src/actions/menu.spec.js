import * as actions from './menu';

describe('actions menu', () => {
    it('should  menuLoaded', function () {
        const text = 'test';
        const payload = {
            type: 'FETCH_MENU_SUCCESS',
            payload: text
        };
        expect(actions.menuLoaded(text)).toEqual(payload)
    });

    it('should menuRequest', function () {
        expect(actions.menuRequest()).toEqual({type: 'FETCH_MENU_REQUEST'})
    });

    it('should menuError', function () {
        const message = 'error';
        const error = {
            type: 'FETCH_MENU_FAILURE',
            payload: message
        };
        expect(actions.menuError(message)).toEqual(error);
    });

    it('should menuToggle', function () {
        expect(actions.menuToggle()).toEqual({type: 'MENU_TOGGLE'})
    });

    it('should activeLink', function () {
        const link = '/home';
        const activeLink = {
            type: 'MENU_ACTIVE_LINK',
            payload: link
        };
        expect(actions.activeLink(link)).toEqual(activeLink);
    });

    it('should visibleSubmenu', function () {
        const link = '/home';
        const activeLink = {
            type: 'MENU_VISIBLE_SUBMENU',
            payload: link
        };
        expect(actions.visibleSubmenu(link)).toEqual(activeLink);
    });
});