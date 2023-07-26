import { useState } from 'react'
import './App.css'
import FilterSideBar from './components/FilterSideBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { FilterStatesContext } from './utils/ContextManagement';

const theme = createTheme({
  palette: {
    mode: 'dark',
    common: {
      black: '#555555',
      white: '#cccccc'
    },
    primary: {
      main: 'rgb(42 73 145)',
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
  typography: {
    fontFamily: 'Inter',
  },
});

function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setFiltersState = (filters: any) => {
    setState({ ...filterState, filters: filters })
  }

  const initState = {
    filters: { resource_type: '', action: '', build_reason: '' },
    setFiltersState: setFiltersState
  }

  const [filterState, setState] = useState({ ...initState })
  return (
    <ThemeProvider theme={theme}>
        <div
          className="MainContainer"
          style={{
            minHeight: 'calc(100vh - 4rem)'
          }}
        >
          <FilterStatesContext.Provider value={filterState}>
            <FilterSideBar />
          </FilterStatesContext.Provider>
        </div>
      
    </ThemeProvider>
  )
}

export default App
