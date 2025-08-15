import fs from "fs"
import puppeteer from "puppeteer"
import archiver from "archiver"
import { fileURLToPath } from "url";
import path from "path";

const GenerateProfile = async (req, res) => {
  const __filename = fileURLToPath(import.meta.url);

  // Get the current directory name
  const __dirname = path.dirname(__filename);
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Profile ID is required" });
    }
    const profileurl = `https://creato-iota.vercel.app/profile/${id}`;

    const outputDir = path.join(__dirname, "dist");
    const zipPath = path.join(__dirname, "build.zip");

    if (fs.existsSync(outputDir))
      fs.rmSync(outputDir, { recursive: true, force: true });
    if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

    fs.mkdirSync(outputDir);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(profileurl, { waitUntil: "networkidle0", timeout: 0 });

    const htmlContent = await page.content();

    fs.writeFileSync(path.join(outputDir, "index.html"), htmlContent);

    await browser.close();

    const output = fs.createWriteStream(zipPath);
    const archive = archiver("zip", { zlib: { level: 9 } });

    // when zip is ready
    output.on("close", () => {
      res.download(zipPath, "build.zip", () => {
        // After sending, clean up files
        fs.rmSync(outputDir, { recursive: true, force: true });
        fs.unlinkSync(zipPath);
      });
    });

    archive.pipe(output);

    // Add dist folder contents to zip
    archive.directory(outputDir, false);

    // Finalize the zip
    await archive.finalize();
  } catch (error) {
    console.error("Error generating profile:", error);
    return res.status(500).json({ error: "Failed to generate profile" });
  }
};

export default GenerateProfile;