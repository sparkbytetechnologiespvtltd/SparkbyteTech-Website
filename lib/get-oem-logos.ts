import fs from "fs";
import path from "path";

const OEM_LOGOS_DIR = path.join(process.cwd(), "public/logos/oems");
const SUPPORTED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".svg", ".webp"]);

export type OemLogo = {
  name: string;
  src: string;
};

function formatLogoName(filename: string) {
  return filename
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Loads OEM logos from public/logos/oems/.
 * Drop a new image file into that folder to add a partner — no code changes needed.
 */
export function getOemLogos(): OemLogo[] {
  if (!fs.existsSync(OEM_LOGOS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(OEM_LOGOS_DIR)
    .filter((file) => SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const slug = path.basename(file, path.extname(file));
      return {
        name: formatLogoName(slug),
        src: `/logos/oems/${file}`,
      };
    });
}
