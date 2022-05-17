import React from "react";

const Coin = ({ name, price, symbol, image, priceChange }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>
            <img width="30" height="30" src={image} alt="crypto" />
          </td>
          <td>{name}</td>
          <td>{symbol}</td>
          <td>${price}</td>
          <td>{priceChange}%</td>
        </tr>
      </tbody>
    </>
  );
};

export default Coin;
