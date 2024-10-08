import React, { useEffect } from 'react';

export function MoonClerkEmbed() {
  useEffect(() => {
    // Create script tag
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://d2l7e0y6ygya2s.cloudfront.net/assets/embed.js';
    script.async = true;

    script.onload = script.onreadystatechange = function () {
      const rs = this.readyState;
      if (rs && rs !== 'complete' && rs !== 'loaded') return;

      try {
        const opts = {
          checkoutToken: '1efczbe8kbh',
          width: '100%',
        };
        new window.MoonclerkEmbed(opts).display();
      } catch (e) {
        console.error('[MC]', e);
      }
    };

    // Append script to the page
    document.getElementById('mc1efczbe8kbh').appendChild(script);

    // Clean up script when the component unmounts
    return () => {
      const mcContainer = document.getElementById('mc1efczbe8kbh');
      if (mcContainer) {
        while (mcContainer.firstChild) {
          mcContainer.removeChild(mcContainer.firstChild);
        }
      }
    };
  }, []);

  return (
    <div id="mc1efczbe8kbh">
      {/* Link is shown in case the script does not load properly */}
      <a href="https://app.moonclerk.com/pay/1efczbe8kbh">Caleb Develops</a>
    </div>
  );
}
