import React from 'react';
import PrimaryButton from "components/Buttons";
import { DashboardContext } from '../dashboard.context';
import PhoneField from "components/PhoneInput";
import TextArea from "components/TextFields/TextArea";
import OutlineTextField from "components/TextFields/OutlinedTextField";
import {
    MarginTop,
    MarginLeft,
    RightAlign,
} from "./index.styled.components";

const FourthStep = (props) => {
    const { setStep } = props;
    const {
        name, setName,
        phone, setPhone,
        description, setDescription
    } = React.useContext(DashboardContext);

    return (
        <React.Fragment>
            <TextArea
                rows={3}
                required={true}
                id="outlined-size-small"
                label="Mitä sinun täytyy ostaa"
                placeholder="esim: 2 X Maito Valio 1.5%, Ruisleipä kaksi kerta, Coca cola 1.5 X 2 pack, Malboro light soft savuke"
                variant="outlined"
                onChange={setDescription}
            />
            <MarginTop marginTop={32}>
                <OutlineTextField
                    value={name}
                    required={true}
                    id="outlined-size-small"
                    label="Toimitusosoite"
                    placeholder="Valitse kaupunki"
                    variant="outlined"
                    onChange={setName}
                    required={true}
                    marginTop="0 !important"
                />
            </MarginTop>
            <MarginTop marginTop={32}>
                <PhoneField
                    required={true}
                    value={phone}
                    label="Puhelin"
                    placeholder="+122333"
                    handleChange={setPhone}
                />
            </MarginTop>
            <MarginTop marginTop={48}>
                <RightAlign>
                    <PrimaryButton
                        type="submit"
                        size="large"
                        marginTop="0px"
                        label="Edellinen"
                        onClick={() => setStep(2)}
                        textCase="uppercase"
                    />
                    <MarginLeft marginLeft={16}>
                        <PrimaryButton
                            type="submit"
                            size="large"
                            marginTop="0px"
                            disabled={!(name && description)}
                            label="Tilaa Tilaus"
                            onClick={() => setStep(4)}
                            textCase="uppercase"
                        />
                    </MarginLeft>
                </RightAlign>
            </MarginTop>
        </React.Fragment>
    )
}

export default FourthStep;