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
  milo6: '/milo6.png',
  milo7: '/milo7.png',
  milo8: '/milo8.png',
} as const;

// Export as an array for easy iteration
export const miloImagesArray = [
  miloImages.milo1,
  miloImages.milo2,
  miloImages.milo3,
  miloImages.milo4,
  miloImages.milo5,
  miloImages.milo6,
  miloImages.milo7,
  miloImages.milo8,
] as const;


