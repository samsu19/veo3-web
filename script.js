async function generateVeo() {
    const prompt = document.getElementById("prompt").value;
    const resultBox = document.getElementById("result");

    resultBox.innerHTML = "Generating...";

    const response = await fetch("https://api.openai.com/v1/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer AIzaSyD66EAbstzF8Uuwfn3m5WN3xaUWkPTIvhM"
        },
        body: JSON.stringify({
            model: "gpt-5.1-vision-output", 
            prompt: prompt
        })
    });

    const data = await response.json();
    console.log(data);

    if (data?.video_url) {
        resultBox.innerHTML = `
        <video controls width="100%">
            <source src="${data.video_url}" type="video/mp4">
        </video>`;
    } else {
        resultBox.innerHTML = "Gagal generate video.";
    }
}
