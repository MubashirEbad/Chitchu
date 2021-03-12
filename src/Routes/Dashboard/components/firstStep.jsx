import React from 'react';
import PrimaryButton from "components/Buttons";
import MaterialDropdown from "components/MaterilUIDropdown";
import { DashboardContext } from '../dashboard.context';
import { storesList, citiesList } from 'utils/application.utils';
import { MarginTop, RightAlign } from "./index.styled.components";

const FirstStep = (props) => {
    const { setStep } = props;
    const {
        city, setCity,
        store, setStore,
    } = React.useContext(DashboardContext);

    return (
        <React.Fragment>
            <MaterialDropdown
                value={city}
                height="56px"
                width="100%"
                title="Valitse Kaupunki"
                filterOptions={citiesList}
                onOptionClick={setCity}
            />
            <MarginTop marginTop={32}>
                <MaterialDropdown
                    value={store}
                    height="56px"
                    width="100%"
                    title="Valitse Kauppa"
                    filterOptions={storesList}
                    onOptionClick={setStore}
                />
            </MarginTop>
            <MarginTop marginTop={48}>
                <RightAlign>
                    <PrimaryButton
                        type="submit"
                        size="large"
                        marginTop="0px"
                        disabled={!(store && city)}
                        label="Jatka"
                        onClick={() => setStep(1)}
                        textCase="uppercase"
                    />
                </RightAlign>
            </MarginTop>
        </React.Fragment>
    )
}

export default FirstStep;