import * as React  from 'react';
import { shallow } from './enzyme';

import BookList from '../BookList';

describe('BookList component tests', () => {

    it('renderiza o BookList vazio', () => {
        const shelfChange = jest.fn();
        const props = {
            'book': {},
            'shelfChange': shelfChange
        }
        const wrapper = shallow(<BookList {...props} />);        
        expect(wrapper)
    });

    it('renderiza o BookList com autor e imagem', () => {
        const shelfChange = jest.fn();
        const props = {
            'book': {
                authors: ['rafael'],
                imageLinks: {}
            },
            'shelfChange': shelfChange
        }
        const wrapper = shallow(<BookList {...props} />);        
        expect(wrapper)
    });
});