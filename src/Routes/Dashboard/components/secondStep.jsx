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
        inputText, setInputText,
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
        console.log(window);
        autoComplete = await new window.google.maps.places.Autocomplete(
            document.getElementById("autoComplete"), {
            // types: ['etablishment'],
            types: [],
            fields: ['place_id', 'geometry', 'name'],
            // regions: ['locality', 'sublocality', 'postal_code']
        })
        autoComplete.addListener('place_changed', onPlaceChanged)
    }

    const onPlaceChanged = () => {
        const place = autoComplete.getPlace();

        if (place.geometry) {
            const { lat, lng } = place.geometry.location
            const locationValue = document.getElementById("autoComplete").value;
            setCurrentAddress({
                lat: lat(),
                lng: lng(),
                location: locationValue || place?.name || "----"
            })
        } else {
            setCurrentAddress(null);
            setDistance(null);
        }
    }

    const calculateDistance = () => {
        var directionsService = new window.google.maps.DirectionsService();
        const route = {
            origin: "Lidl Näsi, Maistraatinkatu 2, 06100 Porvoo, Finland",
            destination: currentAddress.location,
            travelMode: 'DRIVING'
        }

        directionsService.route(route, (response, status) => { // anonymous function to capture directions
            if (status !== 'OK') {
                window.alert('Directions request failed due to ' + status);
                return;
            } else {
                var directionsData = response.routes[0].legs[0]; // Get data about the mapped route
                if (!directionsData) {
                    window.alert('Directions request failed');
                    return;
                }
                else {
                    setDistance(parseFloat(directionsData.distance.text.split(" ")[0]));
                }
            }
        });
    }

    return (
        <React.Fragment>
            <InputField
                value={currentAddress?.location}
                type="text"
                id="autoComplete"
                onChange={(e) => {
                    if (e.target.value === "") {
                        setDistance(null);
                        setCurrentAddress(null);
                    }
                }}
                placeholder="Katuosoite (nimi ja numero)"
            />
            <MarginTop marginTop={32}>
                <OutlineTextField
                    required={true}
                    value={building}
                    id="outlined-size-small"
                    label="Rappu ja asunnen numero"
                    placeholder="esim. A 10"
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
                            disabled={!(currentAddress && distance && distance < 10 && building)}
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