import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ClienteList from './components/ClienteList';
import TransaccionList from './components/TransaccionList';
import FraudeSospechadoList from './components/FraudeSospechadoList';
import Layout from './components/Layout';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#2196f3',
    },
    background: {
      default: '#f0f8ff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/clientes" element={<ClienteList />} />
            <Route path="/transacciones" element={<TransaccionList />} />
            <Route path="/fraudes-sospechados" element={<FraudeSospechadoList />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
