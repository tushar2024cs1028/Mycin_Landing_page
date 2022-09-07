import React from 'react';

import Header from '../components/Header/Header';
import Firstsection from '../components/first-section/firstsection';
import Secondsection from '../components/secondsection/secondsection';
import Footer from '../components/footer/Footer';
import Anouncement from '../components/Anouncement/Anouncement';

    
const Home=()=>{
    return (
    <div>
        <Header/>
        <Firstsection/>
        <Secondsection/>
       
        <Anouncement/>
        <Footer/>
    </div>
    );
};
export default Home;