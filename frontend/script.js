const API_URL = "/api";

document.getElementById("uploadForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();
  const fileInput = document.getElementById("imageInput");
  formData.append("image", fileInput.files[0]);

  await fetch(`${API_URL}/uploads`, {
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
    const container = document.createElement("div");
    container.style.display = "inline-block";
    container.style.margin = "5px";

    const imgElement = document.createElement("img");
    imgElement.src = `${API_URL}/uploads/${img}`;
    imgElement.style.width = "100px";
    imgElement.style.display = "block";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = async () => {
      await fetch(`${API_URL}/images/${img}`, { method: "DELETE" });
      loadImages();
    };

    container.appendChild(imgElement);
    container.appendChild(deleteBtn);
    gallery.appendChild(container);
  });
}

loadImages();
