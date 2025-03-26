import axios from "axios";
import { PortfolioData } from "../interface/portfolioData";

export const API_BASE_URL = "http://192.168.148.143:8081";
const API_PATH = `${API_BASE_URL}/api`;

const prepareImageFile = (imageUri: string | null): any => {
  if (!imageUri) return null;
  
  const filename = imageUri.split("/").pop() || "image.jpg";
  const match = /\.(\w+)$/.exec(filename);
  const type = match ? `image/${match[1]}` : "image/jpeg";
  
  return {
    uri: imageUri,
    name: filename,
    type,
  };
};

const getAuthHeader = () => {
  const token = axios.defaults.headers.common["Authorization"];
  return { Authorization: token };
};

/**
 * Crée un nouveau portfolio
 * @param payload - Données du portfolio
 */
export const createPortfolio = async (payload: any) => {
  try {
    const response = await axios.post(
      `${API_PATH}/portfolio`,
      payload,
      { headers: getAuthHeader() }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du portfolio:", error);
    throw error;
  }
};

/**
 * Crée un nouveau projet
 * @param projectData - Données du projet
 * @param imageUri - URI de l'image à associer au projet
 */
export const createProject = async (projectData: any, imageUri: string | null) => {
  try {
    const formData = new FormData();
    
    const projectsLinks = projectData.links && projectData.links.length > 0 
      ? projectData.links.map((link: any) => ({
          name: link.name,
          url: link.url
        }))
      : [];
    
    formData.append(
      "json",
      JSON.stringify({
        title: projectData.title,
        description: projectData.description,
        projectsLinks: projectsLinks,
        images: [],
        projectsImages: []
      })
    );
    
    if (imageUri) {
      formData.append("images[0]", prepareImageFile(imageUri) as any);
    }
    
    const response = await axios.post(
      `${API_PATH}/project`,
      formData,
      { 
        headers: { 
          ...getAuthHeader(),
          "Content-Type": "multipart/form-data",
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du projet:", error);
    throw error;
  }
};

/**
 * Crée une nouvelle compétence
 * @param skillData - Données de la compétence
 * @param imageUri - URI de l'image à associer à la compétence
 */
export const createSkills = async (skillData: any, imageUri: string | null) => {
  try {
    const formData = new FormData();
    
    formData.append("tools[0][name]", skillData.name);
    
    if (imageUri) {
      formData.append("tools[0][image]", prepareImageFile(imageUri) as any);
    }
    
    const response = await axios.post(
      `${API_PATH}/portfolio/tools`,
      formData,
      {
        headers: {
          ...getAuthHeader(),
          "Content-Type": "multipart/form-data",
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création de la compétence:", error);
    throw error;
  }
};

/**
 * Get les données  portfolio des user
 */
export const getPortfolio = async (): Promise<PortfolioData> => {
  try {
    const response = await axios.get(
      `${API_PATH}/portfolio`,
      { headers: getAuthHeader() }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération du portfolio:", error);
    throw error;
  }
};

/**
 * Met à jour les paramètres du portfolio
 * @param settings - Paramètres à mettre à jour
 */
export const updatePortfolio = async (settings: Partial<any>) => {
  try {
    const response = await axios.put(
      `${API_PATH}/portfolio`,
      settings,
      { headers: getAuthHeader() }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du portfolio:", error);
    throw error;
  }
};

/**
 * Met à jour un projet existant
 * @param id - ID du projet
 * @param projectData - Données du projet
 * @param imageUri - URI de l'image à associer au projet
 */
export const updateProject = async (
  id: string, 
  projectData: { title: string; description: string; links?: { name: string; url: string }[] },
  imageUri?: string | null
) => {
  try {
    const formData = new FormData();
    
    // Convertir les liens en format attendu par l'API
    const projectsLinks = projectData.links && projectData.links.length > 0 
      ? projectData.links.map(link => ({
          name: link.name,
          url: link.url
        }))
      : [];
    
    // Ajouter les données du projet en JSON
    formData.append(
      "json",
      JSON.stringify({
        title: projectData.title,
        description: projectData.description,
        projectsLinks: projectsLinks,
      })
    );
    
    // Ajouter l'image si présente
    if (imageUri) {
      formData.append("images[0]", prepareImageFile(imageUri) as any);
    }
    
    // Envoyer la requête avec l'en-tête d'authentification
    const response = await axios.post(
      `${API_PATH}/project/${id}`, 
      formData, 
      {
        headers: {
          ...getAuthHeader(),
          'Content-Type': 'multipart/form-data',
        },
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la mise à jour du projet:", error);
    throw error;
  }
};

/**
 * Supprime un projet existant
 * @param id - ID du projet à supprimer
 */
export const deleteProject = async (id: string) => {
  try {
    const response = await axios.delete(
      `${API_PATH}/project/${id}`,
      { headers: getAuthHeader() }
    );
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la suppression du projet:", error);
    throw error;
  }
};