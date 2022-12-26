import React from 'react';
import CONSTANTS from '../../constants';
import * as style from './ContestPricing.module.sass';
const { PRICING_LEVEL } = CONSTANTS;

const CoutestPricing = (props) => {
  return (
    <div className={style.wraperContestPricingPage}>
      {PRICING_LEVEL.map((item, i) => (
        <section key={i} className={style.widthCard}>
          <div
            className={style.sectionCardLevel}
            style={{ border: `10px solid ${item.COLOR}` }}
          >
            <h1 className={style.title} style={{ color: `${item.COLOR}` }}>
              {item.TITLE}
            </h1>
            <p className={style.description}>{item.SPECIFICATIONS}</p>
            <p className={style.priceCard} style={{ color: `${item.COLOR}` }}>
              {item.PRICE}
              {item.PRICE_VALUE}
            </p>
          </div>
          {item.PRIZE_WINNER && (
            <ul className={style.prizeList}>
              <li>{item.PRIZE_WINNER}</li>
              <li>{item.VALIDATION_SERVICES}</li>
            </ul>
          )}

          {item.SERVICES && (
            <ul>
              {item.SERVICES.map((value, i) => (
                <li className={style.serviceItem} key={(i, value)}>
                  {value}
                </li>
              ))}
            </ul>
          )}

          {item.OPTION_SERVICES && (
            <ul className={style.optionServiceItem}>
              {item.OPTION_SERVICES.map((value, i) => (
                <li key={(value, i)}>{value}</li>
              ))}
            </ul>
          )}

          {item.ITEMS && (
            <div className={style.Paragraph}>
              {item.ITEMS.map((value, i) => (
                <p key={(i, value)}>{value}</p>
              ))}
            </div>
          )}

          <button
            className={style.btnStart}
            style={{ backgroundColor: `${item.COLOR}` }}
          >
            {item.TEXT_BTN}
          </button>
        </section>
      ))}
    </div>
  );
};

export default CoutestPricing;
