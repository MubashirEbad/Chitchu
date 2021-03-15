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
    OptionsMenu,
    SearchFieldContainer,
    MainContainer,
    InputField,
    ErrorMessage,
} from "./index.styled.components";
import { GET_CURRENT_LOCATION } from 'api';

const SecondStep = (props) => {
    const [error, setError] = React.useState(null);
    const [distance, setDistance] = React.useState(null);
    const { setStep } = props;
    const {
        building, setBuilding,
        currentAddress, setCurrentAddress,
    } = React.useContext(DashboardContext);
    let autoComplete;

    React.useEffect(() => {
        initializeMap()
    }, [])

    React.useEffect(() => {
        if (currentAddress) calculateDistance()
        else setDistance(null)
    }, [currentAddress])

    const initializeMap = async () => {
        autoComplete = await new window.google.maps.places.Autocomplete(
            document.getElementById("autoComplete"), {
            types: ['establishment'],
            fields: ['place_id', 'geometry', 'name']
        })
        autoComplete.addListener('place_changed', onPlaceChanged)
    }

    const onPlaceChanged = () => {
        console.log("came");
        const place = autoComplete.getPlace();
        if (place.geometry) {
            const { lat, lng } = place.geometry.location
            setCurrentAddress({
                lat: lat(),
                lng: lng(),
            })
        } else {
            setCurrentAddress(null);
            setDistance(null);
        }
    }

    const calculateDistance = () => {
        console.log(currentAddress);
        const lat = currentAddress.lat;
        const lng = currentAddress.lng;
        const R = 3958.8; // Radius of the Earth in miles

        const storeLat = 60.390040 * (Math.PI / 180); // Convert degrees to radians
        const rlat2 = lat * (Math.PI / 180); // Convert degrees to radians
        const difflat = rlat2 - storeLat; // Radian difference (latitudes)
        const difflon = (lng - 25.651800) * (Math.PI / 180); // Radian difference (longitudes)

        const tempDistance = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(storeLat) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
        setDistance(tempDistance);
        return tempDistance * 1.6;
    }

    console.log(distance);

    return (
        <React.Fragment>
            <InputField
                type="text"
                id="autoComplete"
                onChange={(e) => {
                    if (e.target.value === "") {
                        setDistance(null);
                        setCurrentAddress(null);
                    }
                }}
                placeholder="Katusonite (nimi ja numero)"
            />
            <MarginTop marginTop={32}>
                <OutlineTextField
                    value={building}
                    textfieldType="number"
                    id="outlined-size-small"
                    label="Rappu ja asunnen numero"
                    placeholder=""
                    variant="outlined"
                    onChange={setBuilding}
                    marginTop="0 !important"
                />
            </MarginTop>
            {
                currentAddress && distance && distance > 10 && (
                    <MarginTop marginTop={16}>
                        <ErrorMessage>Etäisyys on kuljetusalueemme ulkopuolella.</ErrorMessage>
                        <ErrorMessage>Jos silti haluatte ruokalähetyksen, ottakaa yhteyttä tähän numeroon 0401848772.</ErrorMessage>
                    </MarginTop>
                )
            }
            {
                currentAddress && distance && distance <= 10 && (
                    <MarginTop marginTop={16}>
                        <ErrorMessage>kotiinkuljetus: €{distance < 5 ? 7.99 : 9.99} eur</ErrorMessage>
                    </MarginTop>
                )
            }
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
// export default GoogleApiWrapper({
//     apiKey: "AIzaSyAgp_YFhuJg0LqMJT03VG2lFCEP-yb0P3M"
// })(SecondStep)