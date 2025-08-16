import fs from "fs";
import puppeteer from "puppeteer";
import archiver from "archiver";
import { fileURLToPath } from "url";
import path from "path";

const GenerateProfile = async (req, res) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Profile ID is required" });
    }

    const profileurl = `https://creato-iota.vercel.app/profile/${id}`;

    const outputDir = path.join(__dirname, "dist");

    // clean old folder
    if (fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true, force: true });
    }
    fs.mkdirSync(outputDir);

    // generate profile html with puppeteer
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(profileurl, { waitUntil: "networkidle0", timeout: 0 });

    const htmlContent = await page.content();
    fs.writeFileSync(path.join(outputDir, "index.html"), htmlContent);
    await browser.close();

    // tell browser it’s a zip download
    res.setHeader("Content-Type", "application/zip");
    res.setHeader("Content-Disposition", "attachment; filename=build.zip");

    // create archive and stream directly to response
    const archive = archiver("zip", { zlib: { level: 9 } });
    archive.pipe(res);
    archive.directory(outputDir, false);

    archive.on("error", (err) => {
      throw err;
    });

    await archive.finalize();

    // cleanup folder after streaming
    archive.on("end", () => {
      fs.rmSync(outputDir, { recursive: true, force: true });
    });
  } catch (error) {
    console.error("Error generating profile:", error);
    return res.status(500).json({ error: "Failed to generate profile" });
  }
};

export default GenerateProfile;
