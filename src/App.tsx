import './App.css';
import { RestaurantCardListContainer } from './components/RestaurantListContainer';

function App() {
  const data = {
    restaurantName: "#807 TUTTA BELLA",
    restaurantDescription: "Seating 0-12 - Risk Category III",
    restaurantCity: "SEATTLE",
    restaurantZipCode: "98105",
    restaurantInspectionResult: "Unsatisfactory",
    restaurantInspectionDate: "2023-03-02T00:00:00.000",
  };

  const dataList = Array(6).fill(data);

  return (
    <div className="App">
      <RestaurantCardListContainer restaurantCardList={dataList}/>
    </div>
  );
}

export default App;
