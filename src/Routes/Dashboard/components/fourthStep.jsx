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
    CenterAlign,
    Title,
    Loader,
    LoadingContainer,
} from "./index.styled.components";

import UploadFiles from "components/fileUpload";

const FourthStep = (props) => {
    const { setStep } = props;
    const {
        name, setName,
        phone, setPhone,
        file, setFile,
        otherInfo, setOtherInfo,
        description, setDescription,
    } = React.useContext(DashboardContext);

    return (
        <React.Fragment>
            <UploadFiles setFile={setFile} />
            <MarginTop marginTop={32}>
                <CenterAlign>
                    <Title> TAI </Title>
                </CenterAlign>
            </MarginTop>
            <MarginTop marginTop={32}>
                <TextArea
                    rows={3}
                    required={true}
                    id="outlined-size-small"
                    label="Mitä sinun täytyy ostaa"
                    placeholder="esim: 2 X Maito Valio 1.5%, Ruisleipä kaksi kerta, Coca cola 1.5 X 2 pack, Malboro light soft savuke"
                    variant="outlined"
                    onChange={setDescription}
                    marginTop="32 !important"
                />
            </MarginTop>
            <MarginTop marginTop={32}>
                <TextArea
                    rows={3}
                    required={false}
                    id="outlined-size-small"
                    label="Viesti kuljettajalle"
                    placeholder="kirjoita lisäohjeita kuljettajalle, kuten esim. ovikoodi."
                    variant="outlined"
                    onChange={setOtherInfo}
                    marginTop="0 !important"
                />
            </MarginTop>
            <MarginTop marginTop={32}>
                <OutlineTextField
                    value={name}
                    id="outlined-size-small"
                    label="Toimitusosoite"
                    placeholder="Valitse kaupunki"
                    variant="outlined"
                    onChange={setName}
                    marginTop="0 !important"
                />
            </MarginTop>
            <MarginTop marginTop={32}>
                <OutlineTextField
                    textfieldType="number"
                    value={phone}
                    id="outlined-size-small"
                    label="Puheline"
                    placeholder=""
                    variant="outlined"
                    onChange={setPhone}
                    required={true}
                    marginTop="0 !important"
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
                            disabled={!(file || description)}
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