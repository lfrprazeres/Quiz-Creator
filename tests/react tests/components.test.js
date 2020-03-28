import React from 'react';
import { shallow, configure } from 'enzyme';
import { 
    CreateSection,
    Button,
    QuizTable,
} from '../../src/components';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { store } from '../../src/store';
import toJson from 'enzyme-to-json'

configure({adapter: new Adapter()});

describe('Components tests', () => {
    it('should render CreateSection without crash with the properly props', () => {
        const props = {
            title: "component title",
            current:"1",
            total:"2",
            buttonText: "Next",
            backTitle: "Back to List",
            onClickButton: jest.fn()
        };
        const wrapper = shallow(
            <Provider store={store}>
                <CreateSection {...props} />
            </Provider>
            );
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render Button without crash with the properly props', () => {
        const props = {
            variant:"contained", 
            color:"primary", 
            className: "className",
            onClick:jest.fn(),
            bg:"blue"
        };
        const wrapper = shallow(<Button {...props} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render QuizTable without crash with the properly props', () => {
        const props = {
            quiz: [
                [ 1, "title 1", "description 1" ],
                [ 2, "title 2", "description 2" ],
                [ 3, "title 2", "description 3" ]
            ],
            onDeleteQuiz: jest.fn()
        }
        const wrapper = shallow(
            <Provider store={store}>
                <QuizTable {...props} />
            </Provider>
        );
        expect(toJson(wrapper)).toMatchSnapshot();
    });
})