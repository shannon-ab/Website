import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config/config'
import Footer from '../views/Footer';
import Header from '../components/Header';

import AboutPage from '../views/About';
import ProjectPage from '../views/Events';
import Contact from '../views/Contact';

const IndexPage = () => (
  <Layout>
    <Header />

    <header id="home" className="masthead">
      <div className="container d-flex h-100 align-items-center">
        <div className="mx-auto text-center">
          <h1 className="mx-auto my-0 text-uppercase">{config.heading}</h1>
          <h2 className="text-white-50 mx-auto mt-2 mb-5">
            {config.subHeading}
          </h2>
          <Scroll type="id" element="about">
            <a href="#about" className="btn btn-primary">
              About
            </a>
          </Scroll>
        </div>
      </div>
    </header>

    <AboutPage />

    <ProjectPage />

    <Contact />

    <Footer />
  </Layout>
);

export default IndexPage;
