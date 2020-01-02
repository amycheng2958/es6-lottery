import axios from 'axios'
import {getData} from './util.js'
axios.defaults.baseURL = '/use';
class Interface {
    // 获取遗漏数据
    getOmit(params) {
        let url = '/get/omit'
        return getData(url,params);
    }
    // 获取开奖号码
    getOpenCode(params) {
        let url = '/get/opencode'
        return getData(url, params)
    }
    // 获取当前状态
    getState(params) {
        let url = '/get/state'
        return getData(url,params);
    }
}
export default new Interface()