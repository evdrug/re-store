import React from "react";
import { shallow, mount } from "enzyme";
import MenuItemLink from "./menu-item-link";
import MyLink from "../my-link";


describe('render <MenuItemLink />', () => {
    let wrapper;
    let item = {
        id:1,
        label:'Home',
        icon: ['fa','coffee'],
        parentId: '',
        to: '/',
    };
    beforeEach(() => wrapper = shallow(<MenuItemLink item={item}/>));
    // it('should render correctly', () => expect(wrapper).toMatchSnapshot());

    it('should render MyLink', function () {
        expect(wrapper.find(MyLink).length).toEqual(1);
    });

    it('should render 3 <div>', function () {
        expect(wrapper.find('div').length).toEqual(3);
    });
});

describe('render <MenuItemLink />', () => {
    let wrapper;
    let item = {
        id:1,
        label:'Home',
        icon: ['fa','coffee'],
        parentId: '',
        to: '/',
        submenu: ['1','2'],
        visible: true
    };
    beforeEach(() => wrapper = shallow(<MenuItemLink item={item}/>));

    it('should render MySubLink', function () {
      expect(wrapper.find('Connect(MySubLink)').length).toEqual(1);
    });

    it('should rotate icon', function () {
        expect(wrapper.find('.rotate-90').length).toEqual(1);
    });

});