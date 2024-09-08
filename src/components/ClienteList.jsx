import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function ClienteList() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    axios.get('/api/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error('Error al obtener clientes:', error));
  }, []);

  return (
    <div>
      <Typography variant="h4" gutterBottom>Lista de Clientes</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Documento</TableCell>
              <TableCell>Estado de Cuenta</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map(cliente => (
              <TableRow key={cliente.id_cliente}>
                <TableCell>{cliente.nombre}</TableCell>
                <TableCell>{cliente.documento_identidad}</TableCell>
                <TableCell>{cliente.estado_cuenta}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ClienteList;
