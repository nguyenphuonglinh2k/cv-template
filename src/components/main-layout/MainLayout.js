import React from 'react';
import { Container } from 'reactstrap';
import {
  Link
} from "react-router-dom";

import Welcome from '../welcome/Welcome.js';

import './MainLayout.scss';

export default function MainLayout() {
    return (
      <Container className="container d-flex align-items-center">
        <div className="wrapper d-flex">
          <div className="avatar col-md-4">
            <img src="http://demos.ashmawi.work/html/riche/img/picc.jpg" alt="" />
          </div>
          <div className="d-flex flex-column">
            <div className="navbar-header">
              <ul className="d-flex">
                <li>
                  <Link to="/">welcome</Link>
                </li>
                <li>
                  <Link to="/">profile</Link></li>
                <li>
                  <Link to="/">resume</Link></li>
                <li>
                  <Link to="/">portfolio</Link></li>
                <li>
                  <Link to="/">blog</Link></li>
                <li>
                  <Link to="/">contact</Link></li>
              </ul>
            </div>
            <div className="content">
              <Welcome />
            </div>
          </div>
        </div>
      </Container>
    );
}