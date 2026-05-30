import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = new Set(process.argv.slice(2));
const argList = process.argv.slice(2);
const baseDir = args.has("--dist") ? path.join(root, "dist") : path.join(root, "src");
const portArgIndex = argList.indexOf("--port");
const requestedPort = portArgIndex >= 0 ? Number(argList[portArgIndex + 1]) : 5173;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp"
};

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.normalize(decoded).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(baseDir, normalized === "/" ? "index.html" : normalized);
  return filePath.startsWith(baseDir) ? filePath : path.join(baseDir, "index.html");
}

async function fileResponse(req, res) {
  try {
    let filePath = safePath(req.url || "/");
    const fileStat = await stat(filePath).catch(() => null);

    if (!fileStat || fileStat.isDirectory()) {
      filePath = path.join(baseDir, "index.html");
    }

    const ext = path.extname(filePath);
    res.writeHead(200, {
      "Content-Type": mimeTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    res.end(await readFile(filePath));
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(`Server error: ${error.message}`);
  }
}

function listen(port) {
  const server = createServer(fileResponse);

  server.on("error", (error) => {
    if (error.code === "EADDRINUSE") {
      listen(port + 1);
      return;
    }

    throw error;
  });

  server.listen(port, "127.0.0.1", () => {
    console.log(`Abdi Party Box running at http://localhost:${port}`);
    console.log(`Serving ${path.relative(root, baseDir)}`);
  });
}

listen(Number.isFinite(requestedPort) ? requestedPort : 5173);
