import React, { Component } from 'react';
import { Icon } from 'antd';
import lax from 'lax.js';

class Competence extends Component {
  render() {
    return (
      <ul className="list-unstyled">
      <li className="lax" data-lax-preset="zoomIn fadeIn"><Icon type="file-search"/>&nbsp; A1.4.1 Participation à un projet</li>
      <li className="lax" data-lax-preset="zoomIn fadeIn"><Icon type="exception"/>&nbsp; A4.1.2 Conception ou adaptation de l'interface utilisateur d'une solution applicative</li>
      <li className="lax" data-lax-preset="zoomIn fadeIn"><Icon type="cloud-upload"/>&nbsp; A4.1.7 Développement, utilisation ou adaptation de composants logiciels</li>
      <li className="lax" data-lax-preset="zoomIn fadeIn"><Icon type="experiment"/>&nbsp; A4.1.6 Gestion d'environnements de développement et de test</li>
      <li className="lax" data-lax-preset="zoomIn fadeIn"><Icon type="read"/>&nbsp; A4.1.1 Rédaction d'une documentation d'utilisation</li>
      <li className="lax" data-lax-preset="zoomIn fadeIn"><Icon type="read"/>&nbsp; A4.1.9 Rédaction d'une documentation technique</li>
      </ul>
    );
  }
}


export default Competence;