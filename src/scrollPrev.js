import { getCurrentIndex, setCurrentIndex } from "./sharedState";
import ReloadImage from './reloadImage';

export default () => {
    setCurrentIndex(getCurrentIndex() - 1);
    ReloadImage();
}