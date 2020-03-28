import React from 'react';
import { shallow, configure } from 'enzyme';
import {
    NewQuiz,
    NewQuestions,
    AnswerQuestions,
    QuizList
} from '../../src/containers';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from "react-redux";
import { store } from '../../src/store';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

describe('Containers tests', () => {

    it('should render AnswerQuestions without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <AnswerQuestions />
            </Provider>
        );
        expect(wrapper).toMatchSnapshot();
    })

    it('should render NewQuestions without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <NewQuestions />
            </Provider>
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render NewQuiz without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <NewQuiz />
            </Provider>
        );

        expect(toJson(wrapper)).toMatchSnapshot();
    });

    it('should render QuizList without crash with the properly props', () => {
        const wrapper = shallow(
            <Provider store={store}>
                <QuizList />
            </Provider>
        )
    })
})