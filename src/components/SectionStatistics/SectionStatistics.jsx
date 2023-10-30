import { Notification } from "components/Notification/Notification"
import { Statistics } from "components/Statistics/Statisticks"
import { Container } from "./SectionStatistics.styled";

export const SectionStatistics = ({onCheck, state, total, positiveFeedback}) => {
    return <Container><h2>Statistics</h2>
           {onCheck()
            ? (<Statistics state={state} total={total} positiveFeedback={positiveFeedback} />)
            : (<Notification message={'There is no feedback'} />)}
    </Container>
}