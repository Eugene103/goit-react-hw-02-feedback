import { BtnFeedBack } from "components/BtnFeedBack/BtnFeedBack"

export const SectionFeedBack = ({title, options, onChangeStatisticks}) => {
    return <><h2>{title}</h2>
        <BtnFeedBack options={options } onChangeStatisticks={onChangeStatisticks}/>
    </>
}