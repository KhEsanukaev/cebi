import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Categories from './components/Categories';
import './App.css';
import Doorhandles from './components/Doorhandles';
import Footer from './components/Footer';
import Card from './components/Card/index.tsx';
import AboutUs from './components/AboutUs/index.tsx';
import Contacts from './components/Contacts/index.tsx';
import Upload from './components/Upload/index.tsx';
import PhotoSlider from './components/PhotoSlider/index.tsx';
import Image from './components/Image/index.tsx';
import { useState } from 'react';


function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div>
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        <Routes>
          <Route path="/" element={
            <div className='main-container'>
              <Categories />
              <Doorhandles searchQuery={searchQuery}/>
              <Image />
            </div>
          }/>
       
          <Route path="/category/:id" element={
                        <>
                        <Categories />
                        <Doorhandles searchQuery={searchQuery}/>
                        <Image />
                      </>
          } />
          <Route path="/card/:id" element={<Card />} />
          <Route path="/aboutUs" element={<AboutUs/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/upload" element={<Upload/>} />
          <Route path="/photoslider" element={<PhotoSlider/>} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

