import fs from "fs";
import path from "path";

const DISTRIBUTOR_LOGOS_DIR = path.join(process.cwd(), "public/logos/distributors");
const SUPPORTED_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".svg", ".webp"]);

export type DistributorLogo = {
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
 * Loads Distributor logos from public/logos/distributors/.
 * Drop new image files into that folder to add distributors — no code changes needed.
 */
export function getDistributorLogos(): DistributorLogo[] {
  if (!fs.existsSync(DISTRIBUTOR_LOGOS_DIR)) {
    return [];
  }

  return fs
    .readdirSync(DISTRIBUTOR_LOGOS_DIR)
    .filter((file) => SUPPORTED_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b))
    .map((file) => {
      const slug = path.basename(file, path.extname(file));
      return {
        name: formatLogoName(slug),
        src: `/logos/distributors/${file}`,
      };
    });
}
