import { getCurrentIndex, setCurrentIndex } from "./sharedState";
import ReloadImage from './reloadImage';
import ReloadQuickNavigator from "./reloadQuickNavigator";

export default () => {
    setCurrentIndex(getCurrentIndex() - 1);
    ReloadImage();
    ReloadQuickNavigator();
}