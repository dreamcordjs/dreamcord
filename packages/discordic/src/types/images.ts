export const ALLOWED_EXTENSIONS = [
  "webp",
  "png",
  "jpg",
  "jpeg",
  "gif",
] as const;
export const ALLOWED_SIZES = [
  16, 32, 64, 128, 256, 512, 1_024, 2_048, 4_096,
] as const;
export type ImageExtension = (typeof ALLOWED_EXTENSIONS)[number];
export type ImageSize = (typeof ALLOWED_SIZES)[number];

export interface ImageURLOptions {
  extension?: ImageExtension;
  forceStatic?: boolean;
  size?: ImageSize;
}
