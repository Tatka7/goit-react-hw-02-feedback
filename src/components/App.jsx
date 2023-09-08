import { Component } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions';
import Notification from './notification/Notification';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import css from './App.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = evt => {
    const name = evt.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = state => {
    const valuesArr = Object.values(state);
    return valuesArr.reduce((previousValue, elem) => previousValue + elem, 0);
  };
  countPositiveFeedbackPercentage(data) {
    return Math.round(data * 100);
  }

  render() {
    const state = this.state;
    const totalFeedback = this.countTotalFeedback(state);
    const count = state.good / totalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage(count);

    return (
      <div
        className={css.conteiner}
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#ffffff',
          flexDirection: 'column',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={this.addFeedback} />
        </Section>
        <Section title="Statistics">
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
