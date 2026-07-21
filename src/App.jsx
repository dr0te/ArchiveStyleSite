import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Gallery from "./components/Gallery/Gallery";
import Footer from "./components/Footer/Footer";
import PostPage from "./components/PostPage/PostPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Header />

    <main>
      <Routes>
        <Route 
          path="/"
          element={
            <>
              <Hero />
              <Gallery />
            </>
          }        
        />
        <Route 
          path="/post/:id"
          element={<PostPage />}
        />
      </Routes>
    </main>

    <Footer />
    </>
  )
}

export default App