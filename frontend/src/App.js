// import './App.css';
import {
  Footer,
  EventDetail,
  Navigation,
  Banner,
  Carousel,
} from "./components";
import LectureOption from "./components/lectures/LectureOption";

function App() {
  return (
    <div className="App">
      <Navigation page={"home"} />
      <Banner />
      <Carousel />
      <LectureOption />
      <EventDetail />
      {/* <About/> */}
      <Footer />
    </div>
  );
}

export default App;
