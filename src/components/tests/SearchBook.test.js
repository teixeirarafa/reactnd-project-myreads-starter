import * as React  from 'react';
import { shallow } from './enzyme';

import SearchBooks from '../SearchBooks';

describe('SearchBooks component tests', () => {
    let history = { push: jest.fn() };
    let shelfChange = jest.fn();
    let props = {
        history,
        shelfChange: shelfChange,
        booksOnShelf: [{
            id: 'rafael',
            imageLinks: {},
            shelf: 'read',
        }],
    }
    let wrapper = shallow(<SearchBooks {...props} />);

    it('renderiza o SearchBooks', () => {        
        expect(wrapper)
    });

    it('simula o click no botão e por consequecia a chamada do history.push()', () => {       
        wrapper.find('button').simulate('click');
        expect(history.push).toBeCalledTimes(1);
    });

    it('deve chamar updateQuery e alterar state.query quando mudar o valor do input', () => {        
        const updateQuery = jest.spyOn(wrapper.instance(), 'updateQuery');        
        const input = wrapper.find('DebounceInput');
        expect(wrapper.state('query')).toBe('');
        input.simulate('change', { target: { value: 'react' } });
        expect(updateQuery).toHaveBeenCalled();
        expect(wrapper.state('query')).toBe('react');
    });

    it('deve chamar a função searchBooks e BooksAPI.search', () => {        
        const searchBooks = jest.spyOn(wrapper.instance(), 'searchBooks');
        //const updateBooks = jest.spyOn(wrapper.instance(), 'updateBooks');
        const booksAPI = require('../../service/BooksAPI')
        const search = jest.spyOn(booksAPI, 'search');
        const input = wrapper.find('DebounceInput');       
        input.simulate('change', { target: { value: 'react' } });
        expect(searchBooks).toHaveBeenCalled();
        expect(search).toHaveBeenCalled();
        //expect(updateBooks).toHaveBeenCalled();        
    });
});