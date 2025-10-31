import { HashRouter, Route, Routes } from "react-router-dom"
import Home from "./components/PageParts/Home"
import Header from "./components/Header"
import About from "./components/Pages/About"
import ContentLinks from "./components/ContentLinks"
import Footer from "./components/Footer"
import MainPage from "./components/Pages/MainPage"
import ForSignup from "./components/Pages/ForSignup"
import LearnMore from "./components/Pages/LearnMore"
import Live from "./components/Pages/Live/Live"
import AllPosts from "./components/Pages/AllPosts"
import ArtistsInfo from "./components/Pages/ArtistsInfo"
import News from "./components/Pages/News"
import Downloads from "./components/Pages/Downloads"
import Jobs from "./components/Pages/Jobs"
import Apprenticeships from "./components/Pages/Apprenticeships"
import Push from "./components/Pages/Push"
import LoginRegister from "./components/Pages/LoginRegister"

function App() {

  return (
    <HashRouter>
      <Header />
      <ContentLinks />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/forsignup" element={<ForSignup />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/live" element={<Live />} />
        <Route path="/allposts" element={<AllPosts />} />
        <Route path="/artistsinfo" element={<ArtistsInfo />} />
        <Route path="/news" element={<News />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/Apprenticeships" element={<Apprenticeships />} />
        <Route path="/push" element={<Push />} />
        <Route path="/login-register" element={<LoginRegister />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App
