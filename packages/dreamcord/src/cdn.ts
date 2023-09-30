import {
  ALLOWED_EXTENSIONS,
  ALLOWED_SIZES,
  ImageSize,
  ImageURLOptions,
} from "@dreamcord/api-types";
import { Constants } from "./utils/consts";

export interface MakeURLOptions {
  allowedExtensions?: readonly string[];
  extension?: string | undefined;
  size?: ImageSize;
}

export class CDN {
  public constructor(private readonly base: string = Constants.CDN) {}

  public avatar(
    id: string,
    avatarHash: string,
    options?: Readonly<ImageURLOptions>
  ): string {
    return this.dynamicMakeURL(
      `/avatars/${id}/${avatarHash}`,
      avatarHash,
      options
    );
  }

  public banner(
    id: string,
    bannerHash: string,
    options?: Readonly<ImageURLOptions>
  ): string {
    return this.dynamicMakeURL(
      `/banners/${id}/${bannerHash}`,
      bannerHash,
      options
    );
  }

  public defaultAvatar(index: number): string {
    return this.makeURL(`/embed/avatars/${index}`, { extension: "png" });
  }

  public icon(
    id: string,
    iconHash: string,
    options?: Readonly<ImageURLOptions>
  ): string {
    return this.dynamicMakeURL(`/icons/${id}/${iconHash}`, iconHash, options);
  }

  private dynamicMakeURL(
    route: string,
    hash: string,
    { forceStatic = false, ...options }: Readonly<ImageURLOptions> = {}
  ): string {
    return this.makeURL(
      route,
      !forceStatic && hash.startsWith("a_")
        ? { ...options, extension: "gif" }
        : options
    );
  }

  private makeURL(
    route: string,
    {
      allowedExtensions = ALLOWED_EXTENSIONS,
      extension = "webp",
      size,
    }: Readonly<MakeURLOptions> = {}
  ): string {
    // eslint-disable-next-line no-param-reassign
    extension = String(extension).toLowerCase();

    if (!allowedExtensions.includes(extension)) {
      throw new RangeError(
        `Invalid extension provided: ${extension}\nMust be one of: ${allowedExtensions.join(
          ", "
        )}`
      );
    }

    if (size && !ALLOWED_SIZES.includes(size)) {
      throw new RangeError(
        `Invalid size provided: ${size}\nMust be one of: ${ALLOWED_SIZES.join(
          ", "
        )}`
      );
    }

    const url = new URL(`${this.base}${route}.${extension}`);

    if (size) {
      url.searchParams.set("size", String(size));
    }

    return url.toString();
  }
}
