import React from 'react';
import Line from "../../UI/Line/Line";
import Kinds from "../../UI/Kinds/Kinds";
import './NavPanel.scss'

const navPanel = (props) => {
  let { catName } = props;
  return (
      <div className={'NavPanel'}>
        <h3 className="NavPanel__title">Панель навигации</h3>
        <Line topBorderColor={'#848480'} />
        <div className="NavPanel__content">
          {Object.keys(props.data).map((item, index) => {
            return (
                <Kinds data={props.data[item]} key={index} title={catName[index]} />
            )
          })}
          {props.children}
        </div>
      </div>
  );
};

export default navPanel;