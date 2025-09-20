import WelcomeMessage from "./components/WelcomeMessage"
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";

import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import UserProfile from "./components/UserProfile";


function App() {
  return (
    <>
      <WelcomeMessage />
    <Header />, <MainContent />, <Footer />
    <UserProfile name="Alice" age="25" bio="Loves hiking and photograpy" />
    </>
  )
}

export default App
