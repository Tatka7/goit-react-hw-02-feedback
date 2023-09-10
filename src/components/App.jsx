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

  addFeedback = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const valuesArr = Object.values(this.state);
    return valuesArr.reduce((previousValue, elem) => previousValue + elem, 0);
  };

  countPositiveFeedbackPercentage() {
    const totalFeedback = this.countTotalFeedback();
    const count = this.state.good / totalFeedback;
    return Math.round(count * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    // const totalFeedback = this.countTotalFeedback(state);
    // const count = state.good / totalFeedback;
    const positivePercentage = this.countPositiveFeedbackPercentage();

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
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.addFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
