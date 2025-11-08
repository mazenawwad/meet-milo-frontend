/**
 * Centralized image paths for the application
 * All images are stored in the public folder
 */

export const miloImages = {
  milo1: '/milo1.png',
  milo2: '/milo2.png',
  milo3: '/milo3.png',
  milo4: '/milo4.png',
  milo5: '/milo5.png',
} as const;

// Export as an array for easy iteration
export const miloImagesArray = [
  miloImages.milo1,
  miloImages.milo2,
  miloImages.milo3,
  miloImages.milo4,
  miloImages.milo5,
] as const;


