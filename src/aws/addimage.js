export const addImage = (selectedFiles, handleNewUrls) => {
  // Select all file input elements in the form
  const imageInputs = document.querySelectorAll(".file-input:not(.event-listener-attached)");

  // Add event listeners to each file input element
  imageInputs.forEach(imageInput => {
    imageInput.addEventListener("change", async event => {
      event.preventDefault();
      const files = Array.from(imageInput.files);
      if (!files.length) return;

      // Store the selected files in the object
      selectedFiles[imageInput.name] = [];
      for (const file of files) {
        try {
          // Fetch pre-signed URL from the server
          const token = localStorage.getItem("token");
          if (!token) throw new Error("Please sign in before uploading files.");
          if (!file.type) throw new Error("This file type is not supported.");

          const signedResponse = await fetch(`http://localhost:3333/s3Url?contentType=${encodeURIComponent(file.type)}`, {
            method: "GET",
            headers: {
              Authorization: token,
            }
          });
          if (!signedResponse.ok) throw new Error("Could not prepare the file upload.");
          const { url } = await signedResponse.json();

          // Post the image to the bucket
          const uploadResponse = await fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": file.type,
            },
            body: file
          });
          if (!uploadResponse.ok) throw new Error("The file upload failed.");

          const imageUrl = url.split('?')[0];
          console.log(`Image URL: ${imageUrl}`);

          // Store the image URL
          selectedFiles[imageInput.name].push(imageUrl);

          // Call the callback with the updated URLs
          if (handleNewUrls) {
            handleNewUrls(selectedFiles);
          }

        } catch (error) {
          console.error(`Error uploading file ${file.name}:`, error);
        }
      }
      console.log(`URLs for ${imageInput.name}:`, selectedFiles[imageInput.name]);
    });

    // Mark the input as having an event listener attached
    imageInput.classList.add('event-listener-attached');
  });
};
