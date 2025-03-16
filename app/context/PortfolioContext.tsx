import React, { createContext, useContext, useState, useEffect } from "react";
import { getPortfolio, updatePortfolio, API_BASE_URL } from "@/app/utils/api.service";
import { PortfolioData } from "@/app/interface/portfolioData";
import { useAuth } from "./AuthContext";

interface PortfolioContextProps {
  portfolio: PortfolioData | null;
  loading: boolean;
  error: string | null;
  fetchPortfolioData: () => Promise<void>;
  updatePortfolioSettings: (settings: Partial<PortfolioData>) => Promise<void>;
  getCompleteImageUrl: (imagePath: string) => string | null;
}

const PortfolioContext = createContext<PortfolioContextProps | undefined>(undefined);

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio doit être utilisé à l'intérieur d'un PortfolioProvider");
  }
  return context;
};

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { authState } = useAuth();
  const [portfolio, setPortfolio] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPortfolioData = async () => {
    if (!authState?.authenticated) return;
    try {
      setLoading(true);
      const data = await getPortfolio();
      setPortfolio(data);
      setError(null);
    } catch (err) {
      setError("Erreur lors du chargement du portfolio");
    } finally {
      setLoading(false);
    }
  };

  const updatePortfolioSettings = async (settings: Partial<PortfolioData>) => {
    try {
      setLoading(true);
      await updatePortfolio(settings);
      await fetchPortfolioData();
    } catch (err) {
      console.error("Erreur lors de la mise à jour du portfolio:", err);
      setError("Impossible de mettre à jour les paramètres du portfolio");
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const getCompleteImageUrl = (imagePath: string) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    return `${API_BASE_URL}/${imagePath}`;
  };

  useEffect(() => {
    if (authState?.authenticated) {
      fetchPortfolioData();
    }
  }, [authState?.authenticated]);

  const value = {
    portfolio,
    loading,
    error,
    fetchPortfolioData,
    updatePortfolioSettings,
    getCompleteImageUrl
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
