import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/school/school-common.css'

import SchoolsNav from '../components/SchoolNav'
import MainNavbar from '../components/MainNavbar'

import ONU from '../components/education/ONU';
import Sinclair from '../components/education/Sinclair';
import WrightState from '../components/education/WSU';

export default function Education() {
  return (
    <>
      <MainNavbar />
      <SchoolsNav />
        <main className="container">
            <ONU />
            <Sinclair />
            <WrightState />
        </main>
    </>
  )
}
