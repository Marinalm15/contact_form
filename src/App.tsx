
import { styled } from 'styled-components'
import './App.css'
import { FormContainer } from './pages/Form'
import { ToastContainer } from 'react-toastify'

const AppWrapper = styled.div`
  min-height: 100vh;     
  background-color: #006747;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function App() {

  return (
    <AppWrapper>
      <FormContainer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppWrapper>
  )
}

