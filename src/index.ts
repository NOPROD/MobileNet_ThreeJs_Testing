import { Video } from './services/Video'
import { PoseNet } from './services/PoseNet'

new Video().start().then(() => { console.log('Camera ok') })
new PoseNet().model().then(console.log);
