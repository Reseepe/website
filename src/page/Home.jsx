import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Footer from '../components/navigation/Footer';
import First from '../components/misc/First';

const Home = () => {
    return (
        <div className='w-full'>
            <Navbar />

            <div>
                <First />
            </div>

            <Footer />
        </div>
    )
}

export default Home