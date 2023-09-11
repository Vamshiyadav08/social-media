import React from 'react';
import "./layout.scss"
import NavBar from '../components/NavBar/NavBar';
import LeftBar from '../components/LeftBar/LeftBar';
import RightBar from '../components/RightBar/RightBar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
        <NavBar/>
        <div>
            <LeftBar/>
            <Outlet/>
            <RightBar/>
        </div>
    </div>
  )
}
