import { Component } from "react";
import { SectionFeedBack } from "./SectionFeedBack/SectionFeedBack";
import { Container } from "./GlobalStyle";
import { SectionStatistics } from "./SectionStatistics/SectionStatistics";

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
  checkState = () => {
    return this.state.bad > 0 || this.state.good > 0 || this.state.neutral > 0
  }
  render() {
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return <Container>
      <SectionFeedBack
        title="Please leave feedback"
        options={['good', 'neutral', 'bad']}
        onChangeStatisticks={this.changeStatisticks}>
      </SectionFeedBack>
      <SectionStatistics
        onCheck={this.checkState}
        state={this.state}
        total={total}
        positiveFeedback={positiveFeedback}
      >
        </SectionStatistics>
      </Container>
  }
}
