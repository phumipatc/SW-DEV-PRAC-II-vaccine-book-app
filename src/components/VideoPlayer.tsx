import { useRef,useEffect } from "react";
import useWindowListener from "@/hooks/useWindowListener";

export default function VideoPlayer({videoStatus, videoPath}: { videoStatus: boolean, videoPath: string }) {
	const videoRef = useRef<HTMLVideoElement>(null);
	useWindowListener('contextmenu', (e) => e.preventDefault());
	useEffect(() => {
		if(videoStatus){
			videoRef.current?.play();
		}else{
			videoRef.current?.pause();
		}
	}, [videoStatus]);
	return (
		<div>
			<video className='w-[100%]' src={videoPath} ref={videoRef} muted loop controls/>
		</div>
	)
}