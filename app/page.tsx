import { ThemeProvider } from './components/ThemeContext';
import PortfolioWrapper from './components/PortfolioWrapper';

export default function Home() {
  return (
    <ThemeProvider>
      <PortfolioWrapper />
    </ThemeProvider>
  );
}
