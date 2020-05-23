class MediaPlayer {
	media: HTMLMediaElement;
	plugins: Array<any>;
	interactionIsActive: Boolean;
	container: HTMLElement;

	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		this.initPlayer();
		if (this.plugins) {
			this.initPlugins();
		}
		this.interactionIsActive = true;
	}

	initPlayer() {
		this.container = document.createElement("div");
		this.container.style.position = "relative";
		this.media.parentNode.insertBefore(this.container, this.media);
		this.container.appendChild(this.media);
	}
	play() {
		this.media.play();
	}

	pause() {
		this.media.pause();
	}

	private initPlugins() {
		this.plugins.forEach((plugin) => {
			plugin.run(this);
		});
	}

	togglePlay() {
		if (this.media.paused) {
			this.play();
			this.interactionIsActive = true;
		} else {
			this.pause();
			this.interactionIsActive = false;
		}
	}

	mute() {
		this.media.muted = true;
	}

	unmute() {
		this.media.muted = false;
	}

	toggleMute() {
		this.media.muted = !this.media.muted;
	}
}

export default MediaPlayer;
