export interface Template {
    id: string;
    name: string;
    preview: string;
    color: {
      primary: string;
      secondary: string;
      warning: string;
      success: string;
      info: string;
      light: string;
    };
  }
  
  export const templates: Template[] = [
    {
      id: "prestige",
      name: "prestige",
      preview: require("../../assets/images/luxury.png"),
      color: {
        primary: "#0E0E0E",
        secondary: "#DAC6A7",
        warning: "#0E0E0E",
        success: "#DAC6A7",
        info: "#343230",
        light: "#181716",
      },
    },
    {
      id: "banto",
      name: "Banto",
      preview: require("../../assets/images/banto.png"),
      color: {
        primary: "#669BBC",
        secondary: "#FDF0D5",
        warning: "#ffc107",
        success: "#28a745",
        info: "#17a2b8",
        light: "#003049",
      },
    },
    {
      id: "emerald",
      name: "Emerald",
      preview: require("../../assets/images/emerald.png"),
      color: {
        primary: "#334B35",
        secondary: "#FFFFFF",
        warning: "#F6EEE1",
        success: "#FAAF15",
        info: "#231C0A",
        light: "#334B35",
      },
    },
  ];