import React from 'react';
import './Stars.scss'

const Stars = (prop) => {
  return (
      <div className={'stars'}>
        <ul className="stars__list">
          <li className="stars__c-raiting" style={{width: '69.7px'}}>4.1</li>
          <li><a href="#" title="Плохо" className="r1-unit">1</a></li>
          <li><a href="#" title="Приемлемо" className="r2-unit">2</a></li>
          <li><a href="#" title="Средне" className="r3-unit">3</a></li>
          <li><a href="#" title="Хорошо" className="r4-unit">4</a></li>
          <li itemProp="best"><a href="#" title="Отлично" className="r5-unit">5</a></li>
        </ul>
      </div>
  );
};

export default Stars;