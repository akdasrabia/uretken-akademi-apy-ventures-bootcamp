import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import { Table, Form } from "react-bootstrap";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => alert("Api error", error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container ">
      <div className="container mb-5">
        <h1 className="jumbatron mt-5">Kripto Borsa</h1>
        <Form>
          <Form.Group className="my-5">
            <Form.Label>Arama</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="..."
            />
          </Form.Group>
        </Form>
      </div>
      <div className="container">
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">İsim</th>
              <th scope="col">Sembol</th>
              <th scope="col">Fiyat</th>
              <th scope="col">Değişim</th>
            </tr>
          </thead>

          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                price={coin.current_price}
                symbol={coin.symbol}
                image={coin.image}
                priceChange={coin.price_change_percentage_24h}
              />
            );
          })}
        </Table>
      </div>
    </div>
  );
}

export default App;
