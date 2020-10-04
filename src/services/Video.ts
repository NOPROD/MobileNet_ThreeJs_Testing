export class Video {
    private video;

    public async start() {
        try {
            this.video = await this.setupCamera();
            this.video.play();
        } catch (e) {
            throw e;
        }
    }

    private async setupCamera() {
        const video: any = document.getElementById('video');
        video.width = 500;
        video.height = 500;

        const stream = await navigator.mediaDevices.getUserMedia({
            'audio': false,
            'video': {
                width: 500,
                height: 500,
            },
        });
        video.srcObject = stream;

        return new Promise((resolve) => {
            video.onloadedmetadata = () => resolve(video);
        });
    }
}