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
        const text = words.map(word => word.text).join(" ");

        return text

    } catch (error) {
        console.log('failed to fetch words =>>', error)
    }

}



export const sendToNatiq = async (text) => {

    if (!text.trim()) {
        alert("there is No Text");
        return { audioURL: null, wordTimings: [] };
    }


    try {
        const response = await axios.post('https://echo-6sdzv54itq-uc.a.run.app/natiq',
            { text },
            { headers: { "Content-Type": "application/json" } }
        );
        const waveAudio = response.data?.wave;
        const durations = response.data?.durations || [];
        if (!waveAudio) return { audioURL: null, wordTimings: [], error: "second" };


        // remove the decoded data
        // هنا بنبدل  ال "-" بال "+" وكمان "_" بال "/" تمام
        const normalBase64 = waveAudio.replace(/-/g, "+").replace(/_/g, "/");
        // this transfer  from "dhasjdjasj" to "welcome" 
        const normalText = atob(normalBase64);
        // in this  by  using Unit8Arry we trnsfer  int  array of number  to  store  the  data as number
        const blob = new Blob([Uint8Array.from(normalText, c => c.charCodeAt(0))], { type: "audio/wav" });
        const url = URL.createObjectURL(blob);
        const wordTimings = durations.map(([text, start, end]) => {
            return {
                text: text,
                start: start * 1000,
                end: end * 1000
            }
        })
        return { url, wordTimings }
    } catch (error) {
        console.log(Error);
    }

}