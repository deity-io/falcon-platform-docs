const isSupported = () => { 
  const { navigator, location } = window;
  const isApiAvailable = navigator && 'serviceWorker' in navigator;
  const isHttps = location.protocol === 'https:';
  const isLocalHost = location.host.match(/(localhost|127.0.0.1)/);

  return isApiAvailable && (isHttps || isLocalHost);
}

export const registerServiceWorker = () => {
  if (isSupported) {
     navigator.serviceWorker.register("/sw.js");
   }
}
