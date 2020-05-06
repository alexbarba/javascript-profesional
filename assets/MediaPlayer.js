class MediaPlayer {
	constructor(config) {
		this.media = config.el;
		this.plugins = config.plugins || [];
		if (this.plugins) {
			this._initPlugins();
		}
		this.interactionIsActive = true;
	}
	play() {
		this.media.play();
	}

	pause() {
		this.media.pause();
	}

	_initPlugins() {
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
