import * as React  from 'react';
import { shallow } from './enzyme';

import BookshelfChanger from '../BookshelfChanger';

describe('BookshelfChanger component tests', () => {

    it('renderiza o BookshelfChanger', () => {
        const shelfChange = jest.fn();
        const props = {
            'book': {},
            'shelfChange': shelfChange
        }
        const wrapper = shallow(<BookshelfChanger {...props} />);        
        expect(wrapper)
    });

    it('simula o evento onChange do elemento select', () => {
        const shelfChange = jest.fn();
        const props = {
            'book': {},
            'shelfChange': shelfChange
        }
        const wrapper = shallow(<BookshelfChanger {...props} />);
        wrapper.find('select').simulate('change', {target: {value: 'none'}});
        expect(shelfChange).toBeCalledTimes(1);
    });
});