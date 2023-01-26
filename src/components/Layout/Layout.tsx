import React from 'react';
import './Layout.style.scss';

type PropsType = {
  children: React.ReactNode | React.ReactNode[] | React.ReactElement
}

const Layout:React.FC<PropsType> = (props) => {
  return (
    <div className={'layout'}>
      {props.children}
    </div>
  )
}

export default React.memo(Layout);
