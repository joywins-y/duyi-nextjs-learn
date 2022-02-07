import Header from '../components/Header';
import './global.css';

export default ({ Component, pageProps }) => {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  );
};
