import React from 'react';
import './Link.scss'

const Link = (props) => {
  return (
      <a
          href={props.href}
          target={props.isTarget ? '_blank' : '_self'}
          style={{fontSize: props.fontSize ? props.fontSize + 'px' : null}}
          className={['Link', props.clas ? [...props.clas].join('') : null].join(' ')}>
        {props.text}
      </a>
  );
};

export default Link;