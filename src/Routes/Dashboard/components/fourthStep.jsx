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
    SubTitle,
    SubTitleText
} from "./index.styled.components";

import UploadFiles from "components/fileUpload";

const FourthStep = (props) => {
    const { setStep } = props;
    const {
        name, setName,
        phone, setPhone,
        file, setFile,
        submitForm,
        otherInfo, setOtherInfo,
        description, setDescription,
    } = React.useContext(DashboardContext);

    return (
        <React.Fragment>
            {/* <SubTitle> S-Market Näsi: <SubTitleText> https://www.foodie.fi/store/ea5a9e7c043f5091ada437c1035a5218 </SubTitleText> </SubTitle>
        <SubTitle> K-CityMarket Porvoo: <SubTitleText> https://www.k-ruoka.fi/kauppa/k-citymarket-porvoo </SubTitleText> </SubTitle> */}
            <SubTitleText target="_blank" href="https://www.foodie.fi/store/ea5a9e7c043f5091ada437c1035a5218"> S-Market Näsi </SubTitleText>
            <MarginTop marginTop={8}>
                <SubTitleText target="_blank" href="https://www.k-ruoka.fi/kauppa/k-citymarket-porvoo"> K-CityMarket Porvoo </SubTitleText>
            </MarginTop>

            <MarginTop marginTop={32}>
                <UploadFiles setFile={setFile} />
            </MarginTop>
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
                    placeholder="esim: 2 X Maito Valio 1.5%, Ruisleipä kaksi kerta, Coca cola 1.5 X 2 pack"
                    variant="outlined"
                    onChange={setDescription}
                    marginTop="32 !important"
                />
            </MarginTop>
            <MarginTop marginTop={32}>
                <OutlineTextField
                    value={otherInfo}
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
                    label="Nimi"
                    placeholder="esim. Jukka"
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
                    label="Puhelin"
                    placeholder="esim. 0401234567"
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
                            disabled={!((file || description) && phone)}
                            label="Tilaa Tilaus"
                            onClick={submitForm}
                            textCase="uppercase"
                        />
                    </MarginLeft>
                </RightAlign>
            </MarginTop>
        </React.Fragment>
    )
}

export default FourthStep;