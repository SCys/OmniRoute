import fs from "fs";
import path from "path";

// In build-next-isolated.mjs:
// await fs.cp(path.join(projectRoot, "docs"), path.join(standaloneDir, "docs"), { recursive: true });
// If someone builds with docs/i18n present, it copies the entire 500MB docs/i18n!
