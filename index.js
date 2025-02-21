// Trigger the file input when the "Upload Image" button is clicked
function triggerFileInput() {
    const fileInput = document.getElementById('fileInput');
    fileInput.click();  // This simulates the click action on the hidden file input
}

// Handle the image upload once the file is selected
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];  // Get the selected file
    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.alt = 'Uploaded Image';
            imgElement.style.maxWidth = '100%';
            imgElement.style.maxHeight = '300px';

            const imagePreview = document.getElementById('imagePreview');
            imagePreview.innerHTML = '';  // Clear previous preview
            imagePreview.appendChild(imgElement);

            // Simulate getting a public URL
            const fakeURL = URL.createObjectURL(file); // For testing purposes
            const imageURL = document.getElementById('imageURL');
            const urlInput = document.getElementById('urlInput');
            imageURL.classList.remove('hidden');
            urlInput.value = fakeURL;  // Set the URL for the image
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please choose an image to upload.');
    }
});

// Copy the URL to clipboard
function copyToClipboard() {
    const urlInput = document.getElementById('urlInput');
    urlInput.select();
    document.execCommand('copy');
    alert('URL copied to clipboard!');
}
