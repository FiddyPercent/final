import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var mapElement,
    mapContainter,
    appElement;






if (navigator.serviceWorker) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js', {scope: "/"}).then(function(registration) {
       console.log('ServiceWorker registration is complete');
    }, function(error) {
      // registration failed :(
      console.log('ServiceWorker registration failed', error);
    });
  });
}


ReactDOM.render(<App />, document.getElementById('root'));

