import { Label, TextAreaWrapper, TextArea } from "./styles";

interface MessageInputProps {
    label: string;
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}


export function InputTextArea({ label, placeholder, value, onChange }: MessageInputProps) {
    return (
        <TextAreaWrapper>
            <Label>{label}</Label>
            <TextArea
                placeholder={placeholder}
                rows={5}
                value={value}
                onChange={onChange}
            />
        </TextAreaWrapper>
    )
}