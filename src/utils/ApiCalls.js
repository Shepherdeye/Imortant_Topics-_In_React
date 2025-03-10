import axios from "axios";

export const sendToKatib = async (audioFile) => {
    if (!audioFile) {
        alert("Fetch Error: there is No Audio Selected");
        return "";
    }
    const formData = new FormData();
    formData.append("file", audioFile, "audio.wav");

    try {
        const respose = await axios.post(
            "https://echo-6sdzv54itq-uc.a.run.app/kateb",
            formData,
            { headers: { "Content-Type": "multipart/form-data" } }
        );
        const words = respose.data?.json?.words || [];
        console.log('this is the words ->', words)
        return words
    } catch (error) {
        console.log('>>>>>>>>>>>', error)
    }


}