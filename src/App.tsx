import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import { carouselData } from "./mock/carouselData";

function App() {
  return (
    <div className="App">
      <Carousel data={carouselData} />
    </div>
  );
}

export default App;
