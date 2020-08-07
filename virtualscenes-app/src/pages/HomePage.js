import React, { Component } from 'react';

import Header from '../components/HomePageComponents/Header';
import Banner from '../components/HomePageComponents/Banner';
import Section1 from '../components/HomePageComponents/Section1';
import Section2 from '../components/HomePageComponents/Section2';
import Prices from '../components/HomePageComponents/Prices';
import Footer from '../components/HomePageComponents/Footer';

// import './styles/main.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        {/* <nav class="fixed w-full h-full md:h-auto bg-black">
          <div class="flex items-center justify-between text-center flex-wrap bg-black md:p-2 w-full-max2 mx-auto">
            <div class="block md:hidden bg-gray-700 py-2 w-full">
              <button class="items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div class="w-full md:pt-0 pt-12 md:flex-grow md:flex md:items-center md:w-auto">
              <div class="flex items-center flex-shrink-0 text-white md:mr-2 md:pb-0 pb-6">
                <img src="src/static/icons8-search-30-white.png" alt="Search icon" class="fill-current h-5 w-5 m-auto" width="54" height="54" viewBox="0 0 54 54" />
              </div>
              <div class="text-sm md:flex-grow md:pl-24">
                <a href="/" class="block mt-4 md:inline-block md:mt-0 text-gray-400 hover:text-white md:mr-16 font-sans">
                  Home
                </a>
                <a href="/" class="block mt-4 md:inline-block md:mt-0 text-gray-400 hover:text-white md:mr-16 font-sans">
                  Tutorials 
                </a>
                <a href="/" class="block mt-4 md:inline-block md:mt-0 text-gray-400 hover:text-white md:mr-16 font-sans">
                  Library
                </a>
                <a href="/" class="block mt-4 md:inline-block md:mt-0 text-gray-400 hover:text-white md:mr-16 font-sans">
                  Workspace
                </a>
                <a href="/" class="block mt-4 md:inline-block md:mt-0 text-gray-400 hover:text-white font-sans md:pb-0 pb-6">
                  Pricing
                </a>
              </div>
              <div>
                <a href="/" class="inline-block text-sm px-8 py-2 leading-none border rounded-full text-white border-white hover:border-transparent hover:text-gray-500 hover:bg-white mt-4 md:mt-0">Log in</a>
              </div>
            </div>
          </div>
        </nav> */}
        <Section1 />
        <Section2 />
        <Prices />
        <Banner />
        <Footer />
      </div>
    );
  }
}

export default Home;
