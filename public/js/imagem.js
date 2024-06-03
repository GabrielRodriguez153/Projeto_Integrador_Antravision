        const uploadBtn = document.getElementById('upload')
        const fileInput = document.getElementById('fileInp')
        const imageContainer = document.getElementById('imageContainer')

        uploadBtn.addEventListener('click', (event) => {
            fileInput.value = null;
            fileInput.click();
        });

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const img = document.createElement('img');
                    img.src = e.target.result;
                    imageContainer.innerHTML = '';
                    imageContainer.appendChild(img);
                    imageContainer.appendChild(uploadBtn);
                };
                reader.readAsDataURL(file);
            }
        });