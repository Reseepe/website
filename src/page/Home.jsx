import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import First from '../components/misc/First';
import Superiority from '../components/misc/Superiority'
import AboutApp from '../components/misc/AboutApp';
import How from '../components/misc/How';
import Team from '../components/misc/Team';

const Home = () => {
    return (
        <div className='w-full'>
            <Navbar />

            <div>
                <First />
                <Superiority />
                <AboutApp />
                <How />
                <Team />
            </div>

            <Footer />
        </div>
    )
}

export default Home