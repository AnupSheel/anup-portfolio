import fs from "fs";
import path from "path";

const srcDir =
  "c:\\Users\\chiku.000\\Desktop\\Anup website\\anup-portfolio\\src";
const oldDir = path.join(srcDir, "component", "pages", "_component");
const newDir = path.join(srcDir, "features", "resumeContent");

// Define the grouping / mapping of files to folders
const mapping = {
  "constants.ts": "shared",
  "navbar.tsx": "navbar",
  "hero-section.tsx": "hero",
  "about-section.tsx": "about",
  "projects-section.tsx": "projects",
  "skills-section.tsx": "skills",
  "experience-section.tsx": "experience",
  "education-section.tsx": "education",
  "contact-section.tsx": "contact",
  "footer-section.tsx": "footer",
  "animated-background.tsx": "shared",
  "floating-particles.tsx": "shared",
  "typewriter-text.tsx": "shared",
  "magnetic-link.tsx": "shared",
  "reveal.tsx": "shared",
  "animated-counter.tsx": "shared",
  "tilt-card.tsx": "shared",
  "skill-tag.tsx": "shared",
};

fs.mkdirSync(newDir, { recursive: true });

// Read all files
const files = fs.readdirSync(oldDir);
const fileContents = {};

files.forEach((f) => {
  if (fs.statSync(path.join(oldDir, f)).isFile()) {
    const destFolder = mapping[f] || "shared";
    fs.mkdirSync(path.join(newDir, destFolder), { recursive: true });
    fileContents[f] = {
      oldPath: path.join(oldDir, f),
      newPath: path.join(newDir, destFolder, f),
      folder: destFolder,
      content: fs.readFileSync(path.join(oldDir, f), "utf-8"),
    };
  }
});

Object.values(fileContents).forEach((fileNode) => {
  let content = fileNode.content;
  const currentFolder = fileNode.folder;

  content = content.replace(
    /(["'])\.\/([^"']+)(["'])/g,
    (match, p1, filename, p3) => {
      const targetFolder = mapping[filename];
      if (targetFolder) {
        if (targetFolder === currentFolder) {
          return `${p1}./${filename}${p3}`;
        } else {
          return `${p1}../${targetFolder}/${filename}${p3}`;
        }
      }
      return match;
    },
  );

  content = content.replace(
    /(["'])\.\.\/\.\.\/ui\/([^"']+)(["'])/g,
    (match, p1, filename, p3) => {
      return `${p1}../../../component/ui/${filename}${p3}`;
    },
  );

  fs.writeFileSync(fileNode.newPath, content);
});

// Update index.tsx
const indexPath = path.join(srcDir, "component", "pages", "index.tsx");
let indexContent = fs.readFileSync(indexPath, "utf-8");

indexContent = indexContent.replace(
  /(["'])\.\/_component\/([^"']+)(["'])/g,
  (match, p1, filename, p3) => {
    const targetFolder = mapping[filename];
    if (targetFolder) {
      return `${p1}../../features/resumeContent/${targetFolder}/${filename}${p3}`;
    }
    return match;
  },
);

fs.writeFileSync(indexPath, indexContent);

console.log("Refactoring complete!");
