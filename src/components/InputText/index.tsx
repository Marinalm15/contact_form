import { InputWrapper, Input, Label } from "./styles";

interface InputTextProps {
    label: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputText({ label, placeholder, value, onChange }: InputTextProps) {
    return (
        <InputWrapper>
            <Label>{label}</Label>
            <Input
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </InputWrapper>
    )
}