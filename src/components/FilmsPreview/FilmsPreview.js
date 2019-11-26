import React from 'react';
import './FilmsPreview.scss'

const FilmsPreview = (props) => {
  return (
      <div className="FilmsPreview">
        <div className="FilmsPreview__wrap">
          <ul className={'FilmsPreview__list'}>
            {props.preview.map((film, index) => {
              return (
                  <li className={'FilmsPreview__item'}>
                    <div className={'FilmsPreview__inner'}>
                      <a href="#">
                        <img src={`/img/preview/${index + 1}.jpg`} alt="img"/>
                      </a>
                    </div>
                  </li>
              )
            })}

          </ul>
        </div>
      </div>
  );
};

export default FilmsPreview;