import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { 
    QuizList,
    NewQuiz,
    NewQuestions,
    AnswerQuestions
} from './containers';

// Component with all the Routes of the Application
export default function Routes() {
    return (
        <Router>
            <Switch>
                {/* assuming that the main route of the Application is the quiz list */}
                <Route exact path="/" component={QuizList} />
                <Route path="/quiz/new" component={NewQuiz} />
                <Route path="/quiz/:id/questions/new" component={NewQuestions} />
                <Route path="/quiz/:id" component={AnswerQuestions} />
            </Switch>
        </Router>
    )
}