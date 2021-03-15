import React from 'react';
import PrimaryButton from "components/Buttons";
import MaterialDropdown from "components/MaterilUIDropdown";
import { DashboardContext } from '../dashboard.context';
import { timeIntervalsList } from 'utils/application.utils';
import {
    MarginTop,
    RightAlign,
    HintText,
    MarginLeft,
    TimesContainer,
    EachTime,
} from "./index.styled.components";

const ThirdStep = (props) => {
    const { setStep } = props;
    const {
        time, setTime
    } = React.useContext(DashboardContext);

    const renderOptions = () => {
        const options = [];
        for (let a = 0; a < timeIntervalsList.length; a += 2) {
            options.push(
                <TimesContainer>
                    <EachTime
                        selected={timeIntervalsList[a].label === time?.label}
                        first={a === 0}
                        onClick={() => setTime(timeIntervalsList[a])}>
                        {timeIntervalsList[a].label}
                    </EachTime>
                    {
                        timeIntervalsList[a + 1] && (
                            <EachTime
                                selected={timeIntervalsList[a + 1].label === time?.label}
                                onClick={() => setTime(timeIntervalsList[a + 1])}>
                                {timeIntervalsList[a + 1].label}
                            </EachTime>
                        )
                    }
                </TimesContainer>
            )
        }
        return options;
    }

    return (
        <React.Fragment>
            {renderOptions()}
            <MarginTop marginTop={16}>
                <HintText> Normaali toimitusaika on 59 minuuttia </HintText>
            </MarginTop>
            <MarginTop marginTop={48}>
                <RightAlign>
                    <PrimaryButton
                        type="submit"
                        size="large"
                        marginTop="0px"
                        label="Edellinen"
                        onClick={() => setStep(1)}
                        textCase="uppercase"
                    />
                    <MarginLeft marginLeft={16}>
                        <PrimaryButton
                            type="submit"
                            size="large"
                            marginTop="0px"
                            disabled={!(time)}
                            label="Jatka"
                            onClick={() => setStep(3)}
                            textCase="uppercase"
                        />
                    </MarginLeft>
                </RightAlign>
            </MarginTop>
        </React.Fragment>
    )
}

export default ThirdStep;