class Timer {
    countdown(endstr,update,handle) {
        let end = Date.parse(endstr)
        let now = new Date().getTime()
        // if(end - now) {
        //     handle.call(this)
        // }
        let s_left = parseInt(end-now);  // 剩余的毫秒数
        const d = 24 * 60 * 60 * 1000;
        const h = 60 * 60 * 1000;
        const m = 60 * 1000;

        let d_left = Math.floor(s_left / d); //计算剩余的天数
        let h_left = Math.floor(s_left / h); //计算剩余的小时
        let m_left = Math.floor(s_left / m); //计算剩余的分钟
        console.log(d_left)
    }
}

export default new Timer()