import { Page } from './pages/page';
import { Item } from './pages/item';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'

import Container from '@mui/material/Container';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element = {<Page />} />
            <Route path="/character/:id" element = {<Item />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
