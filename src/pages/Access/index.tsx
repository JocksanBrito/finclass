import React from "react";
import Button from "../../components/Button";
import Separator from "../../components/Separator";
import banner from "../../../assets/images/banner/image.png";
import { useTheme } from 'styled-components';
import emailIcon from "../../../assets/icons/email.png";
import { Banner, Container, Content, EmailIcon, ImpactPhrase } from "./styles";
import { useNavigation } from "@react-navigation/native";



const Access: React.FC = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const handleButtonLogin = () => navigation.navigate("login");
 
    return <Container>
        <Banner  resizeMode="contain" source={banner}/>
        <Content>
            <ImpactPhrase type="bold" >
                {`Aprenda a investir e\nconquiste sua liberdade\nfinanceira`}
            </ImpactPhrase>
            <Separator height={20} />
            <Button title="Assine agora" />
            <Separator height={20} />
            <Button 
                outLined 
                title="Entrar com e-mail" 
                textType="semiBold"
                icon={
                <EmailIcon 
                    style={{ tintColor: colors.background.onMain }}
                    source={emailIcon} />}
                    onPress={handleButtonLogin}
            />
            <Separator height={45} />
        </Content>
    </Container>;
};

export default Access;
