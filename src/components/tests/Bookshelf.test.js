import * as React  from 'react';
import { shallow } from './enzyme';

import Bookshelf from '../Bookshelf';

describe('Bookshelf component tests', () => {

    it('renderiza o BookList', () => {
        const shelfChange = jest.fn();        
        const props = {
            books: [{                
                id: 'rafael',
                imageLinks: {},
                shelf: 'read',
                filter: jest.fn(),
                map: jest.fn()
            }],
            bookshelf: 'read',
            bookshelfTitle: 'Read',
            shelfChange: shelfChange
        }        
        const wrapper = shallow(<Bookshelf {...props} />);        
        expect(wrapper)
    });
});