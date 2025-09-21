import { ErrorText } from "./styles";

interface ErrorMessageProps {
    message: string | undefined;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <ErrorText>
            * {message}
        </ErrorText>
    )
}