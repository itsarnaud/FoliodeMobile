import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import { getPortfolio, updatePortfolio, API_BASE_URL } from "@/app/utils/api.service";
import { PortfolioData } from "@/app/interface/portfolioData";
import { useAuth } from "./AuthContext";

interface PortfolioContextProps {
  portfolio: PortfolioData | null;
  loading: boolean;
  error: string | null;
  fetchPortfolioData: (forceRefresh?: boolean) => Promise<void>;
  updatePortfolioSettings: (settings: Partial<PortfolioData>) => Promise<void>;
  getCompleteImageUrl: (imagePath: string) => string | null;
  needsRefresh: boolean;
  markNeedsRefresh: () => void;
  clearNeedsRefresh: () => void;
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
  const [needsRefresh, setNeedsRefresh] = useState<boolean>(false);
  const markNeedsRefresh = () => setNeedsRefresh(true);
  const clearNeedsRefresh = () => setNeedsRefresh(false);
  
  const lastFetchTimeRef = useRef<number>(0);
  const isMountedRef = useRef<boolean>(true);
  const isRequestInProgressRef = useRef<boolean>(false);
  const dataLoadedRef = useRef<boolean>(false);

  useEffect(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const fetchPortfolioData = async (forceRefresh = false) => {
    if (!authState?.authenticated) return;
    
    if (isRequestInProgressRef.current && !forceRefresh) {
      return;
    }

    if (dataLoadedRef.current && !forceRefresh) {
      return;
    }

    const now = Date.now();
    if (!forceRefresh && now - lastFetchTimeRef.current < 1000) {
      return;
    }

    try {
      isRequestInProgressRef.current = true;
      setLoading(true);
      lastFetchTimeRef.current = now;
      
      const data = await getPortfolio();
      
      if (isMountedRef.current) {
        setPortfolio(data);
        setError(null);
        dataLoadedRef.current = true;
      }
    } catch (err) {
      console.error("Erreur lors du chargement du portfolio:", err);
      if (isMountedRef.current) {
        setError("Erreur lors du chargement du portfolio");
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
      isRequestInProgressRef.current = false;
    }
  };

  const updatePortfolioSettings = async (settings: Partial<PortfolioData>) => {
    if (isRequestInProgressRef.current) return;
    
    try {
      isRequestInProgressRef.current = true;
      setLoading(true);
      await updatePortfolio(settings);
      await fetchPortfolioData(true);
    } catch (err) {
      console.error("Erreur lors de la mise à jour du portfolio:", err);
      if (isMountedRef.current) {
        setError("Impossible de mettre à jour les paramètres du portfolio");
      }
      throw err;
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
      isRequestInProgressRef.current = false;
    }
  };

  const getCompleteImageUrl = (imagePath: string) => {
    if (!imagePath) return null;
    if (imagePath.startsWith('http')) return imagePath;
    return `${API_BASE_URL}/${imagePath}`;
  };

  useEffect(() => {
    if (authState?.authenticated && !portfolio && !loading && !isRequestInProgressRef.current && !dataLoadedRef.current) {
      fetchPortfolioData();
    }
  }, [authState?.authenticated]);
  
  useEffect(() => {
    if (!authState?.authenticated) {
      dataLoadedRef.current = false;
    }
  }, [authState?.authenticated]);

  useEffect(() => {
    if (authState?.authenticated) {
      setPortfolio(null);
      dataLoadedRef.current = false;
      fetchPortfolioData(true);
    }
  }, [authState]);

  const value = {
    portfolio,
    loading,
    error,
    fetchPortfolioData,
    updatePortfolioSettings,
    getCompleteImageUrl,
    needsRefresh,
    markNeedsRefresh,
    clearNeedsRefresh,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};
