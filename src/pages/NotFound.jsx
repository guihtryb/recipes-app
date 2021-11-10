import React from 'react';
import Footer from '../components/Footer';
import '../style/NotFound.css';

export default function NotFound() {
  return (
    <main className="not-found-container">
      <h2 className="not-found-title">Not Found</h2>
      <span className="not-found-subtitle">
        <i>
          This option is only valid for meals
          <br />
          Try `/explorar/comidas/area` instead
        </i>
      </span>
      <img className="not-found-gif" src="https://media0.giphy.com/media/VwoJkTfZAUBSU/giphy.gif?cid=ecf05e47zse2ehqpm9n2yoqtd53r610pp36f8uom3nxjtzgm&rid=giphy.gif&ct=g" alt="Not Found Giphy" />
      <Footer />
    </main>
  );
}
