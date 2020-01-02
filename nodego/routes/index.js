const mockjs =require('mockjs')
const express = require('express');
const router = express.Router();

let makeIssue = function(){
    let date = new Date();
    let first_issue_date = new Date();
    first_issue_date.setHours(9)
    first_issue_date.setMinutes(10)
    first_issue_date.setSeconds(0)
    let end_issue_date = new Date(first_issue_date.getTime()+77*10*60*1000)

    let cur_issue,end_time,state;
    if(date.getTime()-first_issue_date.getTime()>0&&date.getTime()-end_issue_date.getTime()<0) {
        let cur_issue_date = new Date();
        cur_issue_date.setHours(9)
        cur_issue_date.setMinutes(0)
        cur_issue_date.setSeconds(0)
        let minus_time = date.getTime()
        let h = Math.ceil(minus_time/1000/60/10);
        let end_date = new Date(cur_issue_date.getTime()+1000*60*10*h)
        end_time = end_date.getTime()
        cur_issue = [end_date.getFullYear(),('0'+end_date.getMonth()+1).slice(-2),('0'+end_date.getDate()).slice(-2),('0'+h).slice(-2)].join('');
    }else {
        if(date.getDate()!=end_issue_date.getDate()){
            first_issue_date.setDate(first_issue_date.getDate()+1)
        }
        end_time = first_issue_date.getTime()
        cur_issue = [first_issue_date.getFullYear(),('0'+first_issue_date.getMonth()+1).slice(-2),('0'+first_issue_date.getDate()).slice(-2),'01'].join('')
    }

    let cur_date = new date()
    if (end_time-cur_date.getTime()>1000+60*2) {
        state = '正在销售'
    }else{
        state = '开奖中'
    }
    return {
        issue: cur_issue,
        state: state,
        end_time:end_time
    }
}
router.get('/get/omit',(req,res,next)=>{
    res.json(mockjs.mock({
        'code': 1,
        'data|11':[/[1-9]{1,3}|0/],
        'issue':/[1-9]{8}/
    }))
})
module.exports = router;
