import logo from "./logo.svg";
import "./App.css";
import "./components/Item";
import Item from "./components/Item";
import ItemDate from "./components/ItemDate";
import Card from "./components/card";

function App() {
  let responseItem = [
    {
      itemName: "Surf Excel",
      itemDate: 10,
      itemMonth: " August ",
      itemYear: 2024
    },
    {
      itemName: "Ariel",
      itemDate: 15,
      itemMonth: " September ",
      itemYear: 2023
    },
    {
      itemName: "Tide",
      itemDate: 5,
      itemMonth: " July ",
      itemYear: 2022
    }
  ];
  
  // const itemTwoName = "SurfExcel";
  // return ke andar agar multiple lines ho toh use parent div me rkhna pdta hai ek
  return (
    <div>
      <Card>
      <Item name={responseItem[0].itemName}></Item>
      <ItemDate day = {responseItem[0].itemDate} month ={responseItem[0].itemMonth}  year={responseItem[0].itemYear}>Hello Ji kaise ho sare</ItemDate>

      {/* <Item name={itemTwoName}></Item>
      <ItemDate day = "03" month ="February"  year="2000"></ItemDate> */}
      <Item name={responseItem[1].itemName}></Item>
      <ItemDate day = {responseItem[1].itemDate} month ={responseItem[1].itemMonth} year={responseItem[1].itemYear}></ItemDate>

      <Item name={responseItem[2].itemName}></Item>
      <ItemDate day = {responseItem[2].itemDate} month ={responseItem[2].itemMonth}  year={responseItem[2].itemYear}></ItemDate>

      <div className="App">Hello Jee</div>
      </Card>

     
    </div>
  );
}

export default App;
