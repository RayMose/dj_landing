class MusicPlayer {
    constructor() {
        this.audio = new Audio();
        this.isPlaying = false;
        this.currentTrackIndex = 0;
        this.tracks = [
            { title: "Firestone", artist: "Kygo ft. Conrad Sewell", src: "/music/firestone.mp3", art: "/images/firestone-art.jpg" },
            { title: "Stole the Show", artist: "Kygo ft. Parson James", src: "/music/stole-the-show.mp3", art: "/images/stole-the-show-art.jpg" },
            // Add more tracks here
        ];

        this.initElements();
        this.addEventListeners();
        this.loadTrack(this.currentTrackIndex);
    }

    initElements() {
        this.playerElement = document.getElementById('music-player');
        this.playPauseBtn = document.getElementById('play-pause');
        this.prevBtn = document.getElementById('prev-track');
        this.nextBtn = document.getElementById('next-track');
        this.albumArt = document.getElementById('album-art');
        this.trackTitle = document.getElementById('track-title');
        this.trackArtist = document.getElementById('track-artist');
        this.progressBar = document.getElementById('progress-bar');
    }

    addEventListeners() {
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        this.prevBtn.addEventListener('click', () => this.prevTrack());
        this.nextBtn.addEventListener('click', () => this.nextTrack());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.nextTrack());
    }

    loadTrack(index) {
        const track = this.tracks[index];
        this.audio.src = track.src;
        this.albumArt.src = track.art;
        this.trackTitle.textContent = track.title;
        this.trackArtist.textContent = track.artist;
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.pauseTrack();
        } else {
            this.playTrack();
        }
    }

    playTrack() {
        this.audio.play();
        this.isPlaying = true;
        this.playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }

    pauseTrack() {
        this.audio.pause();
        this.isPlaying = false;
        this.playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }

    prevTrack() {
        this.currentTrackIndex--;
        if (this.currentTrackIndex < 0) {
            this.currentTrackIndex = this.tracks.length - 1;
        }
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) this.playTrack();
    }

    nextTrack() {
        this.currentTrackIndex++;
        if (this.currentTrackIndex >= this.tracks.length) {
            this.currentTrackIndex = 0;
        }
        this.loadTrack(this.currentTrackIndex);
        if (this.isPlaying) this.playTrack();
    }

    updateProgress() {
        const progress = (this.audio.currentTime / this.audio.duration) * 100;
        this.progressBar.style.width = `${progress}%`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MusicPlayer();
});