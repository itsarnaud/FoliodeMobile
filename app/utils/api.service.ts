import axios from "axios";

export const createPortfolio = async (payload: any) => {
  const token = axios.defaults.headers.common["Authorization"];
  try {
    const response = await axios.post(
      `http://192.168.1.22:8080/api/portfolio`,
      payload,
      { headers: { Authorization: token } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createProject = async (projectData: any, imageUri: string | null) => {
  const token = axios.defaults.headers.common["Authorization"];
  
  try {
    const formData = new FormData();
    
    formData.append("json", JSON.stringify({
      title: projectData.title,
      description: projectData.description,
      projectsLinks: projectData.links || [],
      images: [],
      projectsImages: []
    }));
    
    if (imageUri) {
      const filename = imageUri.split('/').pop() || 'image.jpg';
      const match = /\.(\w+)$/.exec(filename);
      const type = match ? `image/${match[1]}` : 'image/jpeg';
      
      formData.append('images[0]', {
        uri: imageUri,
        name: filename,
        type,
      } as any);
    }
    
    const response = await axios.post(
      `http://192.168.1.22:8080/api/project`,
      formData,
      { 
        headers: { 
          Authorization: token,
          'Content-Type': 'multipart/form-data',
        }
      }
    );
    
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la création du projet:", error);
    throw error;
  }
};