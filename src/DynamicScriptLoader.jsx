import React, { useEffect } from 'react';

const DynamicScriptLoader = () => {
  // Function to dynamically load the fetched JavaScript
  const injectScript = (compiledjs) => {
    const scriptElement = document.createElement('script');
    scriptElement.textContent = compiledjs;
    document.body.appendChild(scriptElement);
  };

  // Recursive function to wait for records and trigger a callback
  const waitForRecordsToLoad = (callback) => {
    const itemBoard = document.getElementById('item-board');
    if (itemBoard?.childElementCount > 0) {
      callback();
    } else {
      setTimeout(() => waitForRecordsToLoad(callback), 100);
    }
  };

  useEffect(() => {
    // Fetch the script and append it
    fetch(
      'https://dash.basefront.app/api/1.1/obj/view/1737313369661x872429172607418400'
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.response?.compiledjs) {
          injectScript(data.response.compiledjs);
          waitForRecordsToLoad(() => {
            if (typeof window.resizeAllGridItems === 'function') {
              window.resizeAllGridItems();
            } else {
              console.warn('resizeAllGridItems is not defined');
            }
          });
        } else {
          console.error('Compiled JS not found in the response');
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div>
      <div id="loading"></div>
      <div className="view-container"></div>
      <div className="modal" id="modal"></div>
    </div>
  );
};

export default DynamicScriptLoader;
