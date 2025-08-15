import fs from "fs"
import puppeteer from "puppeteer"
import archiver from "archiver"
import path from "path"


async export default GenerateProfile(){

    try {
        const {profileId} = req.params;
        if(profileId === undefined || profileId === null){
            return res.status(400).json({error: "Profile ID is required"});
        }
       const profileurl = `https://creato-iota.vercel.app/profile/${profileId}`;
       
       const outputDir  = path.join(__dirname, "dist")
       const zipPath  = path.join(__dirname, "build.zip")
           

        if (fs.existsSync(outputDir)) fs.rmSync(outputDir, { recursive: true, force: true });
        if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);

        fs.mkdirSync(outputDir);


        const browser  = await puppeteer.launch();
        const page = await browser.newPage();


        await page.goto(profileurl, { waitUntil: "networkidle0" });
        
        const htmlContent = await page.content();

        fs.writeFileSync(path.join(outputDir, "index.html"), htmlContent);

        await browser.close();

        const output = fs.createWriteStream(zipPath);
        const archive = archiver("zip", { zlib: { level: 9 } });

        // when zip is ready
        output.on("close",()=>{
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
       return res.status(200).json({message: "Profile generated successfully"});
    } catch (error) {
        console.error("Error generating profile:", error);
        return res.status(500).json({error: "Failed to generate profile"});
    }
    
    
}