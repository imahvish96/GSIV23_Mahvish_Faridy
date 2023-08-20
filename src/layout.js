import React from 'react';
import Header from './components/ui/header';

function Layout(props) {
  return (
    <React.Fragment>
        <Header/>
        {props.children}
    </React.Fragment>
  )
}

export default Layout