import { ThemeContainer } from 'context/themeProvider';

const AppProvider: React.FC = ({ children}) => {
  return (
    <ThemeContainer>
      {children}
    </ThemeContainer>
  )
}

export default AppProvider;
