import sharp from "sharp"
import path from "node:path"

const root = process.cwd()
const src = path.join(root, "public", "mascot-favicon-source.png")
const out = path.join(root, "app", "icon.png")

const SIZE = 512
const PADDING = 56 // breathing room around the bird

// Trim the transparent border, then fit the bird into a padded square canvas.
const trimmed = await sharp(src)
  .trim()
  .resize(SIZE - PADDING * 2, SIZE - PADDING * 2, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toBuffer()

await sharp({
  create: {
    width: SIZE,
    height: SIZE,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  },
})
  .composite([{ input: trimmed, gravity: "center" }])
  .png()
  .toFile(out)

console.log("[v0] Wrote favicon to", out)
