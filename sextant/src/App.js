import styles from './styles/App.module.css';
import Banner from './components/Banner';
import Layout from './components/Layout';

function App() {
  return (
    <div className={styles.app}>
      <Banner />
      <Layout />
    </div>
  );
}

export default App;
