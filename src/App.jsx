import LandingPage from './pages/LandingPage';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

function App() {
  return (
    <ThemeConfig>
      <GlobalStyles />
      <LandingPage />
    </ThemeConfig>
  );
}

export default App;
