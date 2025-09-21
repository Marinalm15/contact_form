import { Controller, useForm } from "react-hook-form";
import { InputText } from "../../components/InputText";
import { InputTextArea } from "../../components/InputTextArea";
import { Form, FormTitle, FormWrapper, SubTitle, SubmitButton } from "./styles";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ErrorMessage } from "../../components/ErrorMessage";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export function FormContainer() {

    const [isLoading, setIsLoading] = useState(false);

    const schema = yup.object({
        name: yup.string().required("Nome é obrigatório"),
        email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
        message: yup.string().required("Mensagem é obrigatória"),
    }).required();

    type FormData = yup.InferType<typeof schema>;

    const { handleSubmit, control, reset, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const onSubmit = (data: FormData) => {
        console.log("Form Data:", data);
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            toast.success("Mensagem enviada com sucesso!");
            reset();
        }, 2000);

    };

    return (
        <FormWrapper>
            <FormTitle>Contacte-nos</FormTitle>
            <SubTitle>Preencha o formulário abaixo e responderemos o mais rápido possível</SubTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputText
                                {...field}
                                label="Nome"
                                placeholder="Digite seu nome"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.name &&
                        <ErrorMessage message={errors.name.message} />
                    }
                </div>
                <div>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputText
                                {...field}
                                label="E-mail"
                                placeholder="Digite seu e-mail"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.email &&
                        <ErrorMessage message={errors.email.message} />
                    }
                </div>
                <div>
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <InputTextArea
                                {...field}
                                label="Mensagem"
                                placeholder="Digite sua mensagem"
                                value={field.value}
                                onChange={field.onChange}
                            />
                        )}
                    />
                    {errors.message &&
                        <ErrorMessage message={errors.message.message} />
                    }
                </div>
                <SubmitButton type="submit" disabled={isLoading}>
                    {isLoading ? (
                        <FaSpinner className="spinner" />
                    ) : (
                        "Enviar"
                    )}
                </SubmitButton>
            </Form>
        </FormWrapper>
    )
}