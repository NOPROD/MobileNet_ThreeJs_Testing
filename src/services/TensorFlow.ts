import { KernelBackend, getBackend, backend } from "@tensorflow/tfjs";

export class TensorFlow {
    private kernel: KernelBackend | string | null = null;
    isReady() {
        this.kernel = getBackend();
        return this.kernel === null ? (backend() ? true : false) : true;
    }

}