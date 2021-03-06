import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LinkButton from '../components/LinkButton';
import '../style/Explore.css';

function Explore() {
  return (
    <section className="explore-section">
      <div className="explore-container">
        <div className="explore-wrapper">
          <Header title="Explorar" />
          <div className="categories-container">
            <LinkButton
              text="Explorar Comidas"
              linkTo="/recipes-app/explorar/comidas"
              testid="explore-food"
            />

            <LinkButton
              text="Explorar Bebidas"
              linkTo="/recipes-app/explorar/bebidas"
              testid="explore-drinks"
            />
          </div>
          <Footer />
        </div>
      </div>
    </section>

  );
}

export default Explore;
