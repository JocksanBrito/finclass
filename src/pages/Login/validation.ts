import * as yup from "yup"

export const schemaLogin = yup.object({
    email: yup.string().email("Email inválido").required("E-mail obrigatório"),
    password: yup.string().required("Senha é obrigatória").min(6, "Pelo menos 6 caracteres")

}).required();