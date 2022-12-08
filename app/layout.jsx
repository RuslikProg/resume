import "./globals.css";

const RootLayout = ({children})=>{
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Kvachuk CV</title>
        <meta name="Kvachuk Ruslan CV" content="Kvachuk Ruslan resume, front-end developer" />
        <link rel="icon" href="/favicon-32x32.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;