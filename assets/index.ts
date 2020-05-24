import MediaPlayer from "@alexbarba/platzimediaplayer/lib/MediaPlayer";
import AutoPlay from "@alexbarba/platzimediaplayer/lib/plugins/AutoPlay";
import AutoPause from "@alexbarba/platzimediaplayer/lib/plugins/AutoPause";
import Ads from "@alexbarba/platzimediaplayer/lib/plugins/Ads";

const video = document.querySelector("video");
const playButton: HTMLElement = document.getElementById("playButton");
const muteButton: HTMLElement = document.getElementById("muteButton");

const player = new MediaPlayer({
	el: video,
	plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("/sw.js").catch((error) => {
		console.log(error.message);
	});
}
