import React from 'react';
import PrimaryButton from "components/Buttons";
import { DashboardContext } from '../dashboard.context';
import OutlineTextField from "components/TextFields/OutlinedTextField";
import {
    MarginTop,
    MarginLeft,
    RightAlign,
    Container,
    EachRow,
    DropDownItem,
} from "./index.styled.components";
import { GET_CURRENT_LOCATION } from 'api';

const SecondStep = (props) => {
    const { setStep } = props;
    const {
        currentAddress, setCurrentAddress,
    } = React.useContext(DashboardContext);

    React.useEffect(() => {
        if (currentAddress) {
            GET_CURRENT_LOCATION(currentAddress)
                .then(res => {
                    const formattedText = res
                })
                .catch(err => {

                })
        }
    }, [currentAddress]);

    return (
        <React.Fragment>
            <OutlineTextField
                value={currentAddress}
                required={true}
                id="outlined-size-small"
                label="Toimitusosoite"
                placeholder="Valitse kaupunki"
                variant="outlined"
                onChange={setCurrentAddress}
                required={true}
                marginTop="0 !important"
            />
            {/* <Container>
                {
                    [1, 2, 3, 4].map(item => {
                        return (
                            <EachRow>
                                asfdasfzdsadzdasdas
                            </EachRow>
                        )
                    })
                }
            </Container> */}
            {/* <DropDownItem overlay={menuItems} placement="bottomCenter" trigger={"hover"}>
                <OutlineTextField
                    value={currentAddress}
                    required={true}
                    id="outlined-size-small"
                    label="Toimitusosoite"
                    placeholder="Valitse kaupunki"
                    variant="outlined"
                    onChange={setCurrentAddress}
                    required={true}
                    marginTop="0 !important"
                />
            </DropDownItem> */}
            {/* )
            } */}
            <MarginTop marginTop={48}>
                <RightAlign>
                    <PrimaryButton
                        type="submit"
                        size="large"
                        marginTop="0px"
                        label="Edellinen"
                        onClick={() => setStep(0)}
                        textCase="uppercase"
                    />
                    <MarginLeft marginLeft={16}>
                        <PrimaryButton
                            type="submit"
                            size="large"
                            marginTop="0px"
                            disabled={!(currentAddress)}
                            label="Jatka"
                            onClick={() => setStep(2)}
                            textCase="uppercase"
                        />
                    </MarginLeft>
                </RightAlign>
            </MarginTop>
        </React.Fragment>
    )
}

export default SecondStep;