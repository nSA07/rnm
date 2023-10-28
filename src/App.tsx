import { Page } from './pages/page';
import { Item } from './pages/item';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer'

import Container from '@mui/material/Container';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element:
    <Page />,
  },
  {
    path: "/e",
    element: <Item />,
  },
]);

function App() {

  return (
    <>
      <Header />
      <Container maxWidth="lg">
          <RouterProvider router={router} />
      </Container>
      <Footer />
    </>
  )
}

export default App
