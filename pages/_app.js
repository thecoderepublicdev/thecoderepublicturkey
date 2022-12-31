import '../styles/globals.css';
import '../styles/import.module.css';
import 'material-symbols';

function MyApp({ Component, pageProps, canonical}) {
  return(
    <>
      <Component {...pageProps} canonical={canonical}/>
    </>
  )
}

MyApp.getInitialProps = ({ ctx }) => {
  const isProd = process.env.NODE_ENV === "production";
  const base = isProd ? "https://www.thecoderepublic.com.tr" : "http://localhost:3000";
  const { asPath } = ctx;
  const canonical = base + asPath;

  return {
    canonical,
  };
};


export default MyApp;
