import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../pages/HeroSection';
import Services from '../components/Services';

const HomeLayout = () => {
    // console.log('dddddddd')
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Navbar></Navbar>
                <section>
                    <HeroSection></HeroSection>
                </section>
            </header>

            <main>
                <Services></Services>
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;