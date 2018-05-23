import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

var mapElement,
    mapContainter,
    appElement;

  window.onload = function() {
    window.addEventListener("resize", setWindowHeight, false);
    setWindowHeight();
  };

  //Used to dynamicly adjust height
  function setWindowHeight() {
    if (!mapElement) mapElement = document.querySelector("#map");
    if (!appElement) appElement = document.querySelector(".app");
    if (!mapContainter) mapContainter = document.querySelector('.list-view');
    console.log(mapContainter.innerHeight);
    mapElement.style.height =  mapContainter.innerHeight + "px";
    appElement.style.height =  window.innerHeight + "px";
  }



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

