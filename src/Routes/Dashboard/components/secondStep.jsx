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
        console.log(window);
        autoComplete = await new window.google.maps.places.Autocomplete(
            document.getElementById("autoComplete"), {
            // types: ['establishment'],
            fields: ['place_id', 'geometry', 'name'],
            regions: ['locality', 'sublocality', 'postal_code']
        })
        autoComplete.addListener('place_changed', onPlaceChanged)
    }

    const onPlaceChanged = () => {
        const place = autoComplete.getPlace();
        if (place.geometry) {
            const { lat, lng } = place.geometry.location
            console.log(lat(), lng())
            setCurrentAddress({
                lat: lat(),
                lng: lng(),
                location: autoComplete?.gm_accessors?.place?.De?.formattedPrediction || place?.name || "----"
            })
        } else {
            setCurrentAddress(null);
            setDistance(null);
        }
    }

    // const calculateDistance = () => {
    //     const lat = currentAddress.lat;
    //     const lng = currentAddress.lng;
    //     const R = 3958.8; // Radius of the Earth in miles

    //     const storeLat = 60.390040 * (Math.PI / 180); // Convert degrees to radians
    //     const rlat2 = lat * (Math.PI / 180); // Convert degrees to radians
    //     const difflat = rlat2 - storeLat; // Radian difference (latitudes)
    //     const difflon = (lng - 25.651800) * (Math.PI / 180); // Radian difference (longitudes)

    //     const tempDistance = 2 * R * Math.asin(Math.sqrt(Math.sin(difflat / 2) * Math.sin(difflat / 2) + Math.cos(storeLat) * Math.cos(rlat2) * Math.sin(difflon / 2) * Math.sin(difflon / 2)));
    //     setDistance(tempDistance);
    //     console.log(tempDistance);
    //     return tempDistance * 1.6;
    // }

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

    // const calculateDistance = () => {
    //     let lat1 = 60.390040;
    //     let lat2 = currentAddress.lat;
    //     let lng1 = 25.651800;
    //     let lng2 = currentAddress.lng;

    //     let R = 6378137;
    //     let dLat = degreesToRadians(lat2 - lat1);
    //     let dLong = degreesToRadians(lng2 - lng1);

    //     let a = Math.sin(dLat / 2)
    //         *
    //         Math.sin(dLat / 2)
    //         +
    //         Math.cos(degreesToRadians(lat1))
    //         *
    //         Math.cos(degreesToRadians(lat1))
    //         *
    //         Math.sin(dLong / 2)
    //         *
    //         Math.sin(dLong / 2);

    //     let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     let distance = R * c;

    //     console.log(distance);

    //     return distance;
    // }

    const degreesToRadians = (degrees) => {
        return degrees * Math.PI / 180;
    }

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