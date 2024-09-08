import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function TransaccionList() {
  const [transacciones, setTransacciones] = useState([]);

  useEffect(() => {
    axios.get('/api/transacciones')
      .then(response => setTransacciones(response.data))
      .catch(error => console.error('Error al obtener transacciones:', error));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Lista de Transacciones</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Cliente</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell>Fecha y Hora</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transacciones.map(transaccion => (
              <TableRow key={transaccion.id_transaccion}>
                <TableCell>{transaccion.id_cliente}</TableCell>
                <TableCell>{transaccion.monto}</TableCell>
                <TableCell>{transaccion.fecha_hora}</TableCell>
                <TableCell>{transaccion.tipo_transaccion}</TableCell>
                <TableCell>{transaccion.estado_transaccion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TransaccionList;
