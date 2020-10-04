import { load } from "@tensorflow-models/posenet"
import { InputResolution, MobileNetMultiplier, PoseNetArchitecture, PoseNetOutputStride, PoseNetQuantBytes } from "@tensorflow-models/posenet/dist/types";

import { TensorFlow } from "./TensorFlow"
export class PoseNet {

    private _tfjs: TensorFlow;

    constructor() {
        this._tfjs = new TensorFlow()
        this._tfjs.isReady()
    }

    private poseNetState = {
        algorithm: 'single-pose',
        input: {
            architecture: 'MobileNetV1',
            outputStride: 16,
            inputResolution: 513,
            multiplier: 0.75,
            quantBytes: 2
        },
        singlePoseDetection: {
            minPoseConfidence: 0.1,
            minPartConfidence: 0.5,
        },
        output: {
            showVideo: true,
            showPoints: true,
        },
    };

    public model = async () => {
        return await load({
            architecture: this.poseNetState.input.architecture as PoseNetArchitecture,
            outputStride: this.poseNetState.input.outputStride as PoseNetOutputStride,
            inputResolution: this.poseNetState.input.inputResolution as InputResolution,
            multiplier: this.poseNetState.input.multiplier as MobileNetMultiplier,
            quantBytes: this.poseNetState.input.quantBytes as PoseNetQuantBytes,
        });
    }

}