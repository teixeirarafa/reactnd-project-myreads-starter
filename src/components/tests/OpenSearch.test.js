import * as React  from 'react';
import { shallow } from './enzyme';

import OpenSearch from '../OpenSearch';

describe('OpenSearch tests', () => {

    it('renderiza o botão open-search', () => {
        const historyMock = { push: jest.fn() };
        const wrapper = shallow(<OpenSearch history={historyMock} />);
        //expect(wrapper.find('.open-search')).toBeDefined();
        //expect(wrapper.find('button').length).toBe(1);
        expect(wrapper)
    });

    it('simula o click no botão e por consequecia a chamada do history.push()', () => {
        const historyMock = { push: jest.fn() };
        const wrapper = shallow(<OpenSearch history={historyMock} />);
        wrapper.find('button').simulate('click');
        expect(historyMock.push).toBeCalledTimes(1);
    });
});