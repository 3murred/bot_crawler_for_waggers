import axios from "axios";
import type { Instance, Strategy } from "./types";

const API_BASE_URL = "https://capimbot-api.onrender.com";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk2NWE3ZmUyLTlkODctNGMwYy1hMDE0LTZjNjhlY2QzNDMyYiIsInJvbGUiOiJNRU1CUk8iLCJpYXQiOjE3NDIyMjA0OTh9.9026oEFuFwD3Z5tYMEnItQlUF2A3-y8o2bLK_j2Dowk";

// Configuração base do axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
});

// Instâncias
export const fetchInstances = async (): Promise<Instance[]> => {
  try {
    const response = await api.get("/instancias");
    return response.data;
  } catch (error) {
    console.error("Error fetching instances:", error);
    throw error;
  }
};

export const createInstance = async (
  instance: Partial<Instance>
): Promise<Instance> => {
  try {
    const response = await api.post("/instancias", instance);
    return response.data;
  } catch (error) {
    console.error("Error creating instance:", error);
    throw error;
  }
};

export const updateInstance = async (
  id: string,
  instance: Partial<Instance>
): Promise<Instance> => {
  try {
    const response = await api.patch(`/instancias/${id}`, instance);
    return response.data;
  } catch (error) {
    console.error("Error updating instance:", error);
    throw error;
  }
};

export const deleteInstance = async (id: string): Promise<void> => {
  try {
    await api.delete(`/instancias/${id}`);
  } catch (error) {
    console.error("Error deleting instance:", error);
    throw error;
  }
};

export const startInstance = async (id: string): Promise<void> => {
  try {
    await api.post(`/instancias/${id}/iniciar`);
  } catch (error) {
    console.error("Error starting instance:", error);
    throw error;
  }
};

export const stopInstance = async (id: string): Promise<void> => {
  try {
    await api.post(`/instancias/${id}/desligar`);
  } catch (error) {
    console.error("Error stopping instance:", error);
    throw error;
  }
};

// Estratégias
export const fetchStrategies = async (): Promise<Strategy[]> => {
  try {
    const response = await api.get("/estrategias");
    return response.data;
  } catch (error) {
    console.error("Error fetching strategies:", error);
    throw error;
  }
};

export const createStrategy = async (
  strategy: Partial<Strategy>
): Promise<Strategy> => {
  try {
    const response = await api.post("/estrategias", strategy);
    return response.data;
  } catch (error) {
    console.error("Error creating strategy:", error);
    throw error;
  }
};

export const updateStrategy = async (
  id: string,
  strategy: Partial<Strategy>
): Promise<Strategy> => {
  try {
    const response = await api.patch(`/estrategias/${id}`, strategy);
    return response.data;
  } catch (error) {
    console.error("Error updating strategy:", error);
    throw error;
  }
};

export const deleteStrategy = async (id: string): Promise<void> => {
  try {
    await api.delete(`/estrategias/${id}`);
  } catch (error) {
    console.error("Error deleting strategy:", error);
    throw error;
  }
};

// Contas
export const addAccount = async (
  instanceId: string,
  account: { plataforma: string; email: string; senha: string }
) => {
  try {
    const response = await api.post(
      `/instancias/${instanceId}/contas`,
      account
    );
    return response.data;
  } catch (error) {
    console.error("Error adding account:", error);
    throw error;
  }
};

export const removeAccount = async (instanceId: string) => {
  try {
    await api.delete(`/instancias/${instanceId}/contas`);
  } catch (error) {
    console.error("Error removing account:", error);
    throw error;
  }
};

// Históricos
export const fetchHistory = async (instanceId: string) => {
  try {
    const response = await api.get(`/instancias/${instanceId}/historicos`);
    return response.data;
  } catch (error) {
    console.error("Error fetching history:", error);
    throw error;
  }
};

export const clearHistory = async (instanceId: string) => {
  try {
    await api.delete(`/instancias/${instanceId}/historicos`);
  } catch (error) {
    console.error("Error clearing history:", error);
    throw error;
  }
};
