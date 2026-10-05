export const settingsimg = async (file) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Please sign in before uploading an image.");
    if (!file.type) throw new Error("This image type is not supported.");

    const response = await fetch(`http://localhost:3333/s3Url?contentType=${encodeURIComponent(file.type)}`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch pre-signed URL');
    }

    const { url } = await response.json();
    // Post the image to the bucket
    const uploadResponse = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": file.type,
      },
      body: file,
    });
    if (!uploadResponse.ok) throw new Error("The image upload failed.");

    const imageUrl = url.split('?')[0];
    console.log(`Image URL: ${imageUrl}`);

    return imageUrl;
  } catch (error) {
    console.error(`Error uploading file ${file.name}:`, error);
    throw error;
  }
};

