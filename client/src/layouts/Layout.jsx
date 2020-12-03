import React from 'react';
import Header from "../components/Header";
export default function Layout(props) {
  return (
    <div className="Layout">
      <Header handleLogout={props.handleLogout}/>
      {props.children}
    </div>
  )
}

