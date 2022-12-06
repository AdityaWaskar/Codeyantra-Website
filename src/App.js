// import './App.css';
import { About, Footer, EventDetail, Navigation, Banner } from './components';
import LectureOption from './components/lectures/LectureOption';
// import Welcome from './components/welcome/Welcome';
function App() {
  return (
    <div className="App">
      <Navigation page={'home'}/>
      <Banner/>
      <LectureOption/>
      <EventDetail/>
      {/* <About/> */}
      <Footer/>

    </div>
  );
}

export default App;
