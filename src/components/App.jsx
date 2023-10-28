import { Component } from "react";
import { BtnFeedBack } from "./BtnFeedBack/BtnFeedBack";
import { Statistics } from "./Statistics/Statisticks";
import { Section } from "./Section/Section";
import { Container } from "./GlobalStyle";
import { Notification } from "./Notification/Notification";

export class App extends Component{
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  changeStatisticks = (key) => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }))
  }
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad
  }
  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const toPercentage = (this.state.good / total) * 100;
    return Math.round(toPercentage)
  }
  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    return <Container>
    <Section title="Please leave feedback" />
      <BtnFeedBack onChangeStatisticks={this.changeStatisticks} />
      {this.state.bad > 0 || this.state.good > 0 || this.state.neutral > 0 ? (<Statistics state={this.state} total={total} positiveFeedback={positiveFeedback} />)
      : (<Notification message={'There is no feedback'}/>)}
      </Container>
  }
}
