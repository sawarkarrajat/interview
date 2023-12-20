import { useEffect, useState } from "react";
import Table from "./components/Table";
import './App.css';
export default function App() {
  const [listOfPeople, setListOfPeople] = useState([]);
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    const fetchPeople = async () => {
      try {
        const listOfPeople = await fetch("https://swapi.dev/api/people/");
        const resp = await listOfPeople.json();
        console.log('resp.results: ', resp.results);
        setListOfPeople(resp.results);

      } catch (error) {
        setError(true);
      }
    };
    fetchPeople();
  }, []);
  const handleSelect = (event) => {
    const obj = listOfPeople.find((element) => element.name === event.target.value);
    console.log('obj: ', obj);
    setSelected(obj);
  }
  return (
    <div className="App">
      <h4>starwars</h4>
      {error && <p>Error fetching people</p>}
      {listOfPeople?.length && (
        <select data-testid="select-option" name="listOfPeople" id="listOfPeople" onChange={handleSelect} defaultValue={null}>
          {listOfPeople?.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      )}
      <Table selected={selected} />
    </div>
  );
}
