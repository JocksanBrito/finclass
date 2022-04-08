import React from "react";
import { View } from "react-native";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import banner from "../../../assets/images/banner/image.png";
import { useTheme } from 'styled-components';
// import emailIcon from "../../../assets/icons/email.png";
import { Banner, Container, Content, EmailIcon, ImpactPhrase } from "./styles";

const Acess: React.FC = () => {
    return <Container>
        <Banner  resizeMode="contain" source={banner}/>
        <Content>
            <ImpactPhrase type="bold" >
                {`Aprenda a investir e\nconquiste sua liberdade\nfinanceira`}
            </ImpactPhrase>
        </Content>
    </Container>;
};

export default Acess;
