const color1Input = document.getElementById("color1")
const color2Input = document.getElementById("color2")

const hex1Input = document.getElementById("hex1")
const hex2Input = document.getElementById("hex2")

const gradientPreview = document.getElementById("previewColor")


const slider = document.getElementById("angle")
const label = document.getElementById("angleLabel")

const cssOutput = document.getElementById("cssOutput")
const btn = document.getElementById("copyBtn")

function updateGradient() {
  const c1 = color1Input.value;
  const c2 = color2Input.value;
  const angle = slider.value;

   const css   = `background: linear-gradient(${angle}deg, ${c1}, ${c2});`;

   gradientPreview.style.background = `linear-gradient(${angle}deg, ${c1}, ${c2})`

   cssOutput.textContent = css

   label.textContent = `${angle}°`
}

// 
color1Input.addEventListener("input", (e) => {
  hex1Input.value = color1Input.value
  updateGradient()

})
color2Input.addEventListener("input", (e) => {
  hex2Input.value = color2Input.value
  updateGradient()
})

// 
hex1Input.addEventListener("input", () => {
  const hex = hex1Input.value.trim();

  // Update only when valid hex
  if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    color1Input.value = hex;
  }
  updateGradient()
});
hex2Input.addEventListener("input", () => {
  const hex = hex2Input.value.trim();

  // Update only when valid hex
  if (/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    color2Input.value = hex;
  }
updateGradient()
});

// 
slider.addEventListener("input", updateGradient)

