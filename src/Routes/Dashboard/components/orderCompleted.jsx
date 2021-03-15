import React from 'react';
import PrimaryButton from "components/Buttons";
import {
    MarginTop,
    CenterAlign,
    Container,
    TextTitle,
    TextDescription,
    Circle,
    SuccessIcon,
    CircleContainer,
} from "./index.styled.components";

const OrderCompleted = (props) => {
    const { setStep } = props;

    return (
        <React.Fragment>
            <Container>
                <TextTitle> Tilaus tehty </TextTitle>
                <TextDescription> Tilaus on tehty onnistuneesti! </TextDescription>
                <CircleContainer>
                    <Circle>
                        <SuccessIcon />
                    </Circle>
                </CircleContainer>
            </Container>
            <MarginTop marginTop={48}>
                <CenterAlign>
                    <PrimaryButton
                        type="submit"
                        size="large"
                        marginTop="0px"
                        label="Tilaa uudelleen"
                        onClick={() => setStep(0)}
                        textCase="uppercase"
                    />
                </CenterAlign>
            </MarginTop>
        </React.Fragment>
    )
}

export default OrderCompleted;