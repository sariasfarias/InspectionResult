import './App.css';
import { RestaurantCard } from './components/RestaurantCard';

function App() {
  const data = {
    restaurantName: "#807 TUTTA BELLA",
    restaurantDescription: "Seating 0-12 - Risk Category III",
    restaurantCity: "SEATTLE",
    restaurantZipCode: "98105",
    restaurantInspectionResult: "Unsatisfactory",
    restaurantInspectionDate: "2023-03-02T00:00:00.000",
  }

  return (
    <div className="App">
      <RestaurantCard {...data}/>
    </div>
  );
}

export default App;
