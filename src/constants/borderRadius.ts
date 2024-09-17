// borderRadius.ts

interface BorderRadius {
    small: number;
    medium: number;
    large: number;
    rounded: number; // Optional, for fully rounded elements
  }
  
  const BORDER_RADIUS: BorderRadius = {
    small: 4,
    medium: 8,
    large: 12,
    rounded: 50, // Example for fully rounded, e.g., for circular elements
  };
  
  export default BORDER_RADIUS;
  