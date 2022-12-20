import React from 'react';
import CONSTANTS from '../../constants';
const { PRICING_LEVEL } = CONSTANTS;

const CoutestPricing = (props) => {
  return (
    <div>
      {PRICING_LEVEL.map((item, i) => (
        <section key={i}>
          <h1>{item.TITLE}</h1>
          <p>{item.SPECIFICATIONS}</p>
          <p>{item.PRICE}</p>
          <p>{item.PRICE_VALUE}</p>
          <ul>
            <li>{item.PRIZE_WINNER}</li>
            <li>{item.VALIDATION_SERVICES}</li>
          </ul>

          <ul>
            {item.SERVICES &&
              item.SERVICES.map((value, i) => (
                <li key={(i, value)}>{value}</li>
              ))}
            {item.OPTION_SERVICES &&
              item.OPTION_SERVICES.map((value, i) => (
                <li key={(value, i)}>{value}</li>
              ))}
          </ul>
          {item.ITEMS &&
            item.ITEMS.map((value, i) => <p key={(i, value)}>{value}</p>)}
          <button>{item.TEXT_BTN}</button>
        </section>
      ))}
    </div>
  );
};

export default CoutestPricing;
