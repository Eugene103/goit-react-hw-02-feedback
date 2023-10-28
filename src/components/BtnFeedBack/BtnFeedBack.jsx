import { Container, Btn } from './BtnFeedBack.styled'

export const BtnFeedBack = ({ onChangeStatisticks }) => {
    return <Container>
        <Btn  onClick={evt =>{onChangeStatisticks('good')}}>Good</Btn>
        <Btn  onClick={evt =>{onChangeStatisticks('neutral')}}>Neutral</Btn>
        <Btn  onClick={evt =>{onChangeStatisticks('bad')}}>Bad</Btn>
    </Container>
}