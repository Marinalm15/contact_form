# Formulário de Contato

Um simples formulário de contato feito em **React**, utilizando validação com **React Hook Form** e **Yup**, além de feedback ao usuário com **React Toastify**.  

---

## Funcionalidades

- Validação de campos em tempo real:
  - **Nome** obrigatório
  - **E-mail** válido e obrigatório
  - **Mensagem** obrigatória
- Exibição de erros diretamente abaixo dos campos
- Feedback visual ao usuário com notificações (`toast`)
- Botão de envio com **loading spinner** simulando envio para o backend
- Reset automático do formulário após envio bem-sucedido

---

## Tecnologias Utilizadas

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Hook Form](https://react-hook-form.com/)
- [Yup](https://github.com/jquense/yup)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [React Icons](https://react-icons.github.io/react-icons/) (para o spinner)

---

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Marinalm15/contact_form.git
cd contact_form
yarn install
# ou
npm install