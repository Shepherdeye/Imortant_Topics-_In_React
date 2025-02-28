export const sendToNatiq = async (text) => {
    try {
        const response = await axios.post(
            "https://echo-6sdzv54itq-uc.a.run.app/natiq",
            { text },
            { headers: { "Content-Type": "application/json" } }
        );

        const base64Audio = response.data?.wave;
        const durations = response.data?.durations;
        if (!base64Audio) return { audioURL: null, wordTimings: [] };


        // Convert Base64 to Blob
        const binary = atob(base64Audio.replace(/-/g, "+").replace(/_/g, "/"));
        const array = Uint8Array.from(binary, c => c.charCodeAt(0));

        const audioBlob = new Blob([array], { type: "audio/wav" });
        const audioURL = URL.createObjectURL(audioBlob);


        // also need  to define the word timing
        const wordTimings = durations.map(([word, start, end]) => ({
            text: word,
            start: start * 1000,
            end: end * 1000
        }));


        return { audioURL, wordTimings };

    } catch (error) {
        console.error("Natiq API error:", error);
        return { audioURL: null };
    }
};
export const sendToNatiq = async (text) => {
    try {
        const response = await axios.post(
            "https://echo-6sdzv54itq-uc.a.run.app/natiq",
            { text },
            { headers: { "Content-Type": "application/json" } }
        );

        const base64Audio = response.data?.wave;
        const durations = response.data?.durations;
        if (!base64Audio) return { audioURL: null, wordTimings: [] };


        // Convert Base64 to Blob
        const binary = atob(base64Audio.replace(/-/g, "+").replace(/_/g, "/"));
        const array = Uint8Array.from(binary, c => c.charCodeAt(0));

        const audioBlob = new Blob([array], { type: "audio/wav" });
        const audioURL = URL.createObjectURL(audioBlob);


        // also need  to define the word timing
        const wordTimings = durations.map(([word, start, end]) => ({
            text: word,
            start: start * 1000,
            end: end * 1000
        }));


        return { audioURL, wordTimings };

    } catch (error) {
        console.error("Natiq API error:", error);
        return { audioURL: null };
    }
};
export const sendToNatiq = async (text) => {
    try {
        const response = await axios.post(
            "https://echo-6sdzv54itq-uc.a.run.app/natiq",
            { text },
            { headers: { "Content-Type": "application/json" } }
        );

        const base64Audio = response.data?.wave;
        const durations = response.data?.durations;
        if (!base64Audio) return { audioURL: null, wordTimings: [] };


        // Convert Base64 to Blob
        const binary = atob(base64Audio.replace(/-/g, "+").replace(/_/g, "/"));
        const array = Uint8Array.from(binary, c => c.charCodeAt(0));

        const audioBlob = new Blob([array], { type: "audio/wav" });
        const audioURL = URL.createObjectURL(audioBlob);


        // also need  to define the word timing
        const wordTimings = durations.map(([word, start, end]) => ({
            text: word,
            start: start * 1000,
            end: end * 1000
        }));


        return { audioURL, wordTimings };

    } catch (error) {
        console.error("Natiq API error:", error);
        return { audioURL: null };
    }
};
export const sendToNatiq = async (text) => {
    try {
        const response = await axios.post(
            "https://echo-6sdzv54itq-uc.a.run.app/natiq",
            { text },
            { headers: { "Content-Type": "application/json" } }
        );

        const base64Audio = response.data?.wave;
        const durations = response.data?.durations;
        if (!base64Audio) return { audioURL: null, wordTimings: [] };


        // Convert Base64 to Blob
        const binary = atob(base64Audio.replace(/-/g, "+").replace(/_/g, "/"));
        const array = Uint8Array.from(binary, c => c.charCodeAt(0));

        const audioBlob = new Blob([array], { type: "audio/wav" });
        const audioURL = URL.createObjectURL(audioBlob);


        // also need  to define the word timing
        const wordTimings = durations.map(([word, start, end]) => ({
            text: word,
            start: start * 1000,
            end: end * 1000
        }));


        return { audioURL, wordTimings };

    } catch (error) {
        console.error("Natiq API error:", error);
        return { audioURL: null };
    }
};

export const sendToNatiq = async (text) => {
    try {
        const response = await axios.post(
            "https://echo-6sdzv54itq-uc.a.run.app/natiq",
            { text },
            { headers: { "Content-Type": "application/json" } }
        );

        const base64Audio = response.data?.wave;
        const durations = response.data?.durations;
        if (!base64Audio) return { audioURL: null, wordTimings: [] };


        // Convert Base64 to Blob
        const binary = atob(base64Audio.replace(/-/g, "+").replace(/_/g, "/"));
        const array = Uint8Array.from(binary, c => c.charCodeAt(0));

        const audioBlob = new Blob([array], { type: "audio/wav" });
        const audioURL = URL.createObjectURL(audioBlob);


        // also need  to define the word timing
        const wordTimings = durations.map(([word, start, end]) => ({
            text: word,
            start: start * 1000,
            end: end * 1000
        }));


        return { audioURL, wordTimings };

    } catch (error) {
        console.error("Natiq API error:", error);
        return { audioURL: null };
    }
};