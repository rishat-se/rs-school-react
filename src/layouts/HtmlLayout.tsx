import React, { ReactNode } from 'react';

type HtmlLayoutProps = {
  children: ReactNode;
};

function HtmlLayout({ children }: HtmlLayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
        <link rel="stylesheet" type="text/css" href="index.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>RS-School React App</title>
      </head>
      <body>
        <div id="app" className="container">
          {children}
        </div>
      </body>
    </html>
  );
}

export default HtmlLayout;
