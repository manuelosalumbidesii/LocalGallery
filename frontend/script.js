const API_URL = "/api";

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();
  const fileInput = document.getElementById("imageInput");
  formData.append("image", fileInput.files[0]);

  await fetch(`${API_URL}/upload`, {
    method: "POST",
    body: formData,
  });

  fileInput.value = "";
  loadImages();
});

async function loadImages() {
  const res = await fetch(`${API_URL}/images`);
  const images = await res.json();
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";
  images.forEach((img) => {
    const imgElement = document.createElement("img");
    imgElement.src = `${API_URL}/uploads/${img}`;
    gallery.appendChild(imgElement);
  });
}

loadImages();
