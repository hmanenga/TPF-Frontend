import { LightThemeColors } from "../../config/colors";
 

const buttonPrimary = {
    enabled: {
      button: {
        backgroundColor: '#228B22',
      },
      title: {
        color: "#FFF",
      },
      icon: {
        color: "#FFF",
      },
    },
    disabled: {
      button: {
        backgroundColor: "#B8B8B8",
      },
      title: {
        color: "#FFF",
      },
      icon: {
        color: "#FFF",
      },
    },
  };
  const buttonOutline = {
    enabled: {
      button: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: LightThemeColors.primary,
      },
      title: {
        color: LightThemeColors.primary,
      },
      icon: {
        color: "#550AB1",
      },
    },
    disabled: {
      button: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#B8B8B8",
      },
      title: {
        color: "#B8B8B8",
      },
      icon: {
        color: "#B8B8B8",
      },
    },
  };

  const iconizedButton = {
    enabled: {
      button: {
        backgroundColor: "transparent",
      },
      title: {
        color: "#FFF",
      },
      icon: {
        color: 'red',
        size: 48,
      },
    },
    disabled: {
      button: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: "#B8B8B8",
      },
      title: {
        color: "#B8B8B8",
      },
      icon: {
        color: "#B8B8B8",
      },
    },
  };  
  export const buttonBlackFriday = {
    enabled: {
      button: {
        backgroundColor: LightThemeColors.gray,
      },
      title: { color: "#fbb605"},
      icon: { color: "#fbb605" },
    },
    disabled: {
      button: {
        backgroundColor: "#B8B8B8",
      },
      title: { color: "#FFF" },
      icon: { color: "#FFF" },
    },
  };
  export const buttonRemove = {
    enabled: {
      button: {
        backgroundColor: 'red',
      },
      title: { color: "#FFF" },
      icon: { color: "#FFF" },
    },
    disabled: {
      button: {
        backgroundColor: "#B8B8B8",
      },
      title: { color: "#FFF" },
      icon: { color: "#FFF" },
    },
  };
 
  export const buttonCancel = {
    enabled: {
      button: {
        backgroundColor: 'gray',
      },
      title: { color: "#FFF" },
      icon: { color: "#FFF" },
    },
    disabled: {
      button: {
        backgroundColor: "#B8B8B8",
      },
      title: { color: "#FFF" },
      icon: { color: "#FFF" },
    },
  };

  export const variants = {
    primary: buttonPrimary,
    outline: buttonOutline,
    blackFriday: buttonBlackFriday,
    remove:buttonRemove,
    iconized: iconizedButton,
    cancel:buttonCancel
  };