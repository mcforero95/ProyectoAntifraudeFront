import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function FraudeSospechadoList() {
  const [fraudesSospechados, setFraudesSospechados] = useState([]);

  useEffect(() => {
    axios.get('/api/fraudes-sospechados')
      .then(response => setFraudesSospechados(response.data))
      .catch(error => console.error('Error al obtener fraudes sospechados:', error));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Fraudes Sospechados</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Transacción</TableCell>
              <TableCell>Nivel de Riesgo</TableCell>
              <TableCell>Motivo de Sospecha</TableCell>
              <TableCell>Fecha y Hora</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fraudesSospechados.map(fraude => (
              <TableRow key={fraude.id_fraude_sospechado}>
                <TableCell>{fraude.id_transaccion}</TableCell>
                <TableCell>{fraude.nivel_riesgo}</TableCell>
                <TableCell>{fraude.motivo_sospecha}</TableCell>
                <TableCell>{fraude.fecha_hora_sospecha}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default FraudeSospechadoList;
