import './App.css';
import { RestaurantListPagination } from './components/RestaurantListPagination';

function App() {
  const data = {
    restaurantName: "#807 TUTTA BELLA",
    restaurantDescription: "Seating 0-12 - Risk Category III",
    restaurantCity: "SEATTLE",
    restaurantZipCode: "98105",
    restaurantInspectionResult: "Satisfactory",
    restaurantInspectionDate: "2023-03-02T00:00:00.000",
  };

  const dataList = Array(26).fill(data);
  return (
    <div className="App">
      <RestaurantListPagination restaurantCardList={dataList}/>
    </div>
  );
}

export default App;
