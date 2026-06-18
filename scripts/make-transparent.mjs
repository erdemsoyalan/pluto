import sharp from "sharp"
import path from "path"

const input = path.resolve("public/pluto-waving-original.png")
const output = path.resolve("public/pluto-waving.png")

const img = sharp(input).ensureAlpha()
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true })
const { width, height, channels } = info

// Sample the background color from the top-left corner
const bg = { r: data[0], g: data[1], b: data[2] }
console.log("[v0] Background sample color:", bg)

const tolerance = 60 // color distance threshold
const isBg = (i) => {
  const dr = data[i] - bg.r
  const dg = data[i + 1] - bg.g
  const db = data[i + 2] - bg.b
  return Math.sqrt(dr * dr + dg * dg + db * db) <= tolerance
}

// The mascot only uses teal, yellow, and navy — none close to cream — so we
// can safely clear every cream pixel globally, including pockets enclosed by
// the bird outline (e.g. between the legs).
for (let p = 0; p < width * height; p++) {
  const i = p * channels
  if (isBg(i)) data[i + 3] = 0
}

await sharp(data, { raw: { width, height, channels } })
  .png()
  .toFile(output)

console.log("[v0] Wrote transparent image to", output)
