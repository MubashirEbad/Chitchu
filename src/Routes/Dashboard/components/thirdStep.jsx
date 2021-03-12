import React from 'react';
import PrimaryButton from "components/Buttons";
import MaterialDropdown from "components/MaterilUIDropdown";
import { DashboardContext } from '../dashboard.context';
import { timeIntervalsList } from 'utils/application.utils';
import { MarginTop, RightAlign, HintText, MarginLeft } from "./index.styled.components";

const ThirdStep = (props) => {
    const { setStep } = props;
    const {
        time, setTime
    } = React.useContext(DashboardContext);

    return (
        <React.Fragment>
            <MaterialDropdown
                value={time}
                height="56px"
                width="100%"
                title="Valitse Kaupunki"
                filterOptions={timeIntervalsList}
                onOptionClick={setTime}
            />
            <MarginTop marginTop={4}>
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