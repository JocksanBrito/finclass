import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import Text from "../../components/Text/index";
import lock from "../../../assets/icons/lock/icon.png";
import {
  Container,
  Header,
  LockIcon,
  Content,
  OptionRightHeader,
} from "./styles";

import useAuth from "../../hooks/useAuth";
import { schemaLogin } from "./validation";

const Login: React.FC = () => {
  const auth = useAuth();

  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLogin),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleGoBack = () => navigation.goBack();

  const onSubmit = async () => {
    await handleSubmit(({ email, password }) => {
      auth.login()
      console.log(email, password);
    })();
  };

  return (
    <Container>
      <Content>
        <Separator height={20} />
        <Header>
          <BackButton onPress={handleGoBack} />
          <OptionRightHeader>
            <Text size={13}>Recuperar Senha</Text>
            <Separator height={10} />
            <LockIcon source={lock} />
          </OptionRightHeader>
        </Header>
        <Separator height={30} />
        <Text size={22} type="bold">{`Acessar\nminha conta`}</Text>
        <Separator height={35} />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                autoCompleteType="email"
                autoCapitalize="none"
                keyboardType="email-address"
                name="E-mail"
                placeholder="Insira seu e-mail"
                onChange={onChange}
                onChangeText={(text) => setValue("email", text)}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
                rightIcon={undefined}
                leftIcon={undefined}
              />
            );
          }}
        />
        <Separator height={25} />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => {
            return (
              <Input
                autoCompleteType="password"
                autoCapitalize="none"
                name="Senha"
                placeholder="Insira sua senha"
                secureTextEntry
                onChange={onChange}
                onChangeText={(text) => setValue("password", text)}
                onBlur={onBlur}
                value={value}
                error={errors.password?.message}
                rightIcon={undefined}
                leftIcon={undefined}
              />
            );
          }}
        />
        <Separator height={55} />
        <Button title="Entrar" onPress={onSubmit} textType="semiBold" />
      </Content>
    </Container>
  );
};

export default Login;
