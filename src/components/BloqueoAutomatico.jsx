import React from 'react';
import axios from 'axios';
import { detectarFraude } from '../utils/fraudeDetection';

function BloqueoAutomatico({ transaccion }) {
  const bloquearCuenta = async () => {
    if (detectarFraude(transaccion)) {
      try {
        await axios.post(`/api/bloquear-cuenta/${transaccion.id_cliente}`);
        console.log('Cuenta bloqueada automáticamente');
        // Aquí puedes agregar lógica para actualizar la UI o notificar al usuario
      } catch (error) {
        console.error('Error al bloquear la cuenta:', error);
      }
    }
  };

  React.useEffect(() => {
    bloquearCuenta();
  }, [transaccion]);

  return null; // Este componente no renderiza nada, solo ejecuta lógica
}

export default BloqueoAutomatico;
