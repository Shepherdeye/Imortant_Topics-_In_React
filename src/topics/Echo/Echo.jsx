import React, { useEffect, useRef, useState } from 'react'
import RecordRTC from 'recordrtc';
import { sendToKatib, sendToNatiq } from '../../utils/ApiCalls';

const Echo = () => {
    const [recording, setRecording] = useState(false);
    const [pause, setPause] = useState(false);
    const [audioUrl, setAudioUrl] = useState(null);
    const [generatedAudioUrl, setGeneratedAudioUrl] = useState(null);
    const [transcripedText, setTranscripedText] = useState("");
    const [recordingTime, setRecordingTime] = useState(0);
    const [blob, setBlob] = useState(null);
    const streamRef = useRef(null);
    const recorderRef = useRef(null);
    const audioGeneratedAudioRef = useRef(null);
    const intervalTimerRef = useRef(null);
    const [loadingText, setLoadingText] = useState(false);
    const [loadingAudio, setLoadingAudio] = useState(false);
    const [wordsTimings, setWordsTimings] = useState([]);
    const [highlitedIndex, setHighlightedIndex] = useState(null)



    // Formating Time
    const formatingTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
    }
    // starting recording
    const startRecord = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;

        const recorder = new RecordRTC(stream, {
            type: "audio",
            mimeType: "audio/wav",
            recorderType: RecordRTC.StereoAudioRecorder,
            numberOfAudioChannels: 1
        });

        recorder.startRecording();
        recorderRef.current = recorder;
        setRecording(true);
        setPause(false);
        setRecordingTime(0);

        // star the timer 
        intervalTimerRef.current = setInterval(() => {
            setRecordingTime(prev => prev + 1);
        }, 1000);



    }
    // pause Record
    const pauseRecord = () => {
        if (recorderRef.current) {
            recorderRef.current.pauseRecording();
            setPause(true);
            clearInterval(intervalTimerRef.current);
        }
    }
    // resume Recording
    const resumeRecord = () => {
        if (recorderRef.current) {
            recorderRef.current.resumeRecording();
            setPause(false);
            intervalTimerRef.current = setInterval(() => {
                setRecordingTime(prev => prev + 1)
            }, 1000);
        }
    }
    // Stop record
    const stopRecord = () => {
        if (recorderRef.current) {
            recorderRef.current.stopRecording(() => {
                const blob = recorderRef.current.getBlob();
                const url = URL.createObjectURL(blob);
                setBlob(blob);
                setAudioUrl(url);
            })

            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
            setRecording(false);
            setPause(false);
            clearInterval(intervalTimerRef.current);
        }
    }
    //restart record
    const restartRecord = () => {

        setAudioUrl(null);
        stopRecord();
        startRecord();
    }
    // upload Files
    const uploadFiles = (e) => {
        const file = e.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setAudioUrl(url);
            setBlob(file);
        }

    }

    const handleTheTextGeneration = async (audioBlob) => {
        if (!audioBlob) {
            alert("there is no audio selected ..!")
            return "";
        }
        setLoadingText(true);

        try {
            const text = await sendToKatib(audioBlob);
            if (!text) throw new Error("No Text");
            setTranscripedText(String(text));


            // setTranscripedText(text);
        } catch (error) {
            console.log('>>>>>>>>>>>', error)
        }
        setLoadingText(false);
    }
    const handleTheGeneratedAudio = async (text) => {
        if (!text) {
            throw new Error("cant get the Text");
        }

        setLoadingAudio(true);

        try {
            const { url, wordTimings } = await sendToNatiq(text);
            setWordsTimings(wordTimings);
            setGeneratedAudioUrl(url);

        } catch (error) {
            console.log(error);
        }

        setLoadingAudio(false);
    };


    // highlited text

    useEffect(() => {

        if (!audioGeneratedAudioRef?.current || !wordsTimings.length) {
            return;
        }
        const handleHighlight = () => {
            const currentTime = audioGeneratedAudioRef.current.currentTime * 1000;
            const index = wordsTimings.findIndex(({ start, end }) => start <= currentTime && end >= currentTime);
            setHighlightedIndex(index < 0 ? null : index);
        };
        const targetAudio = audioGeneratedAudioRef.current;
        targetAudio.addEventListener("timeupdate", handleHighlight);

        return () => targetAudio.removeEventListener("timeupdate", handleHighlight);

    }, [wordsTimings, audioGeneratedAudioRef])

    return (
        <div className='m-auto text-white my-10 p-5'>
            <h1 className='text-3xl text-center'>
                This is the Echo Audio Test
            </h1>
            {/*this is the recording Dev*/}
            <div className='flex flex-col items-center w-8/12 m-auto p-5 justify-center my-8 bg-gray-100 rounded-xl'>
                <div className=' flex items-center justify-around w-7/12'>

                    {!recording ? <button onClick={startRecord} className='bg-red-800 p-3 text-xl w-max rounded-sm  cursor-pointer hover:bg-gray-800'>Start Record</button> : <> <div>
                        <button onClick={stopRecord} className='bg-black p-3 text-xl w-max rounded-sm  cursor-pointer hover:bg-gray-800'>Stop Record</button>
                    </div>
                        <div>

                            {pause ? <button onClick={resumeRecord} className='bg-green-800 p-3 text-xl w-max rounded-sm cursor-pointer hover:bg-gray-800'>Resume Record</button> :
                                <button onClick={pauseRecord} className='bg-gray-400 p-3 text-xl w-max rounded-sm cursor-pointer hover:bg-gray-800'>Pause Record</button>
                            }

                        </div>

                        <button onClick={restartRecord} className='bg-yellow-800 p-3 text-xl w-max rounded-sm cursor-pointer hover:bg-gray-800'>Restart Record</button></>}
                </div>


                {/* recording Dev */}
                {
                    recording && <div className='text-red-700 text-2xl my-4 font-bold'>
                        Recording...
                        {formatingTime(recordingTime)}
                    </div>
                }

                {/* recored Or Uploaded Audio */}
                {
                    audioUrl && !recording && <audio controls src={audioUrl} className="my-5 w-5/10" ></audio>

                }
                <div className=' text-white p-1 font-bold text-xl mt-5'>

                    {!recording && <label className='cursor-pointer bg-gray-700 w-max p-3 rounded-sm'>
                        📤 Choose File
                        <input
                            type="file"
                            accept='audio/*'
                            disabled={recording}
                            className='hidden'
                            onChange={uploadFiles}
                        />

                    </label>}
                </div>
            </div >
            {
                audioUrl && <div className='flex w-full justify-center items-center'>
                    <button
                        disabled={loadingText}
                        onClick={() => handleTheTextGeneration(blob)}
                        className='bg-green-700 text-white font-bold p-3 rounded-sm cursor-pointer' >
                        {loadingText ? 'Loading...' : "GenerateText"}
                    </button>
                </div>
            }


            {/*this is the Result Dev*/}

            {
                transcripedText.length > 0 && <div className='flex flex-col items-center w-8/12 m-auto p-5 justify-center my-8  rounded-xl' >

                    <div className='bg-gray-600 p-5  text-xl font-bold rounded-lg capitalize'>
                        {transcripedText.split(" ").map((word, index) => {
                            return <span key={index}
                                className={highlitedIndex == index ? "bg-yellow-300 p-1 text-black rounded-sm" : ""}
                            >
                                {`${word} `}
                            </span>
                        })}
                    </div>

                    <button
                        onClick={() => handleTheGeneratedAudio(transcripedText)}
                        disabled={loadingAudio}
                        className='bg-blue-900 text-white font-bold rounded-sm p-3 my-3 cursor-pointer'>
                        {loadingAudio ? "Loading..." : "Generate Audio"}
                    </button>

                    {
                        generatedAudioUrl && <div>
                            <audio ref={audioGeneratedAudioRef} controls src={generatedAudioUrl}></audio>
                        </div>
                    }
                </div >
            }


        </div >
    )
}

export default Echo
