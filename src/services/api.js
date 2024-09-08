import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Ajusta esta URL según tu backend

export const getClientes = () => axios.get(`${API_BASE_URL}/clientes`);
export const getTransacciones = () => axios.get(`${API_BASE_URL}/transacciones`);
export const getFraudesSospechados = () => axios.get(`${API_BASE_URL}/fraudes-sospechados`);
export const bloquearCuenta = (idCliente) => axios.post(`${API_BASE_URL}/bloquear-cuenta/${idCliente}`);
