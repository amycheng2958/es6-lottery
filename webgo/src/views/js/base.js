import $ from 'jquery'

class Base {
    initPlayList() {
        this.play_list.set('r2', {
            bonus: 6,
            tip: '从01~11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元',
            name: '任二'
        })
            .set('r3', {
                bonus: 19,
                tip: '从01~11中任选3个或多个号码，所选号码与开奖号码任意三个号码相同，即中奖<em class="red">19</em>元',
                name: '任三'
            })
            .set('r4', {
                bonus: 78,
                tip: '从01~11中任选4个或多个号码，所选号码与开奖号码任意四个号码相同，即中奖<em class="red">78</em>元',
                name: '任四'
            })
            .set('r5', {
                bonus: 540,
                tip: '从01~11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em class="red">540</em>元',
                name: '任五'
            })
            .set('r6', {
                bonus: 90,
                tip: '从01~11中任选6个或多个号码，所选号码与开奖号码任意五个号码相同，即中奖<em class="red">90</em>元',
                name: '任六'
            })
            .set('r7', {
                bonus: 26,
                tip: '从01~11中任选7个或多个号码，所选号码与开奖号码任意五个号码相同，即中奖<em class="red">26</em>元',
                name: '任七'
            })
            .set('r8', {
                bonus: 9,
                tip: '从01~11中任选8个或多个号码，所选号码与开奖号码任意五个号码相同，即中奖<em class="red">9</em>元',
                name: '任八'
            })

    }

    // 初始化号码
    initNumber() {
        for (let i = 1; i < 12; i++) {
            this.number.add('' + i).padStart(2, '0')

        }
    }

    setOmit(omit) {
        this.omit.clear()
        for (let [index, item] of omit.entries()) {
            this.omit.set(index, item)
        }
        $(this.omit_el).each((index, item) => {
            $(item).text(self.omit.get(index))
        })
    }

    setOpenCode(code) {
        this.open_code.clear()
        for (let item of code.values()) {
            this.open_code.add(item)
        }
        this.updateOpenCode && this.updateOpencode.call(this, code)
    }

    toggleCodeActive(e) {
        let $cur = $(e.currentTarget)
        $cur.toggleClass('btn-boll-active')
        this.getCount()
    }

    changePlayNav(e) {
        let $cur = $(e.currentTarget)
        $cur.addClass('active').sinlings().removeClass('active')
        this.cur_play = $cur.attr('desc').toLocaleLowerCase()
        $('#zx_sm span').html(this.play_list.get(this.cur_play).tip)
        $('.boll-list .btn-boll').removeClass('btn-boll-active')
        this.getCount()
    }

    assistHandle(e) {
        e.preventDefault()
        let $cur = $(e.currentTarget)
        let index = $cur.index()
        $('.boll-list .btn-boll').removeClass('btn-boll-active')
        if (index === 0) {
            $('.boll-list .btn-boll').addClass('btn-boll-active')
        }
        if (index === 1) {
            $('.boll-list .btm-boll').each((i, t) => {
                if (t.textContent - 5 > 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 2) {
            $('.boll-list .btm-boll').each((i, t) => {
                if (t.textContent - 6 < 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 3) {
            $('.boll-list .btm-boll').each((i, t) => {
                if (t.textContent % 2 == 1) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        if (index === 4) {
            $('.boll-list .btm-boll').each((i, t) => {
                if (t.textContent % 2 == 0) {
                    $(t).addClass('btn-boll-active')
                }
            })
        }
        this.getCount()
    }

    // 获取当前彩票名称
    getName() {
        return this.name
    }

    // 添加号码
    addCode() {
        let $active = $('.boll-list .btn-boll-active').text().match(/\d{2}/g)
        let active = $active ? active.length : 0
        let count = this.computeCount(active)
        if (count) {
            this.addCodeItem($active.join(''), this.cur_play, this.play_list.get(this.cur_play).name, count)

        }

    }
    // 添加单次号码
    addCodeItem(code, type, typename) {
        const tpl = `
            <li codes="${type}|${code}" bonus="${count*2}" count="1">
                <div class="code">
                    <b>${typename}${count>1?'复式':'单式'}</b>
                    <b class="em">06 08 09 10</b>
                    [1注,<em class="code-list-money">2</em>元]
                </div>
            </li>        
        `
        $(this.cart_el).append(tpl)
        this.getTotal()
    }
    getCount() {
        let active= $('.boll-list .btn-boll-active').length;
        let count = this.computeCount(active,this.cur_play)
        let range = this.computeBonus(active,this.cur_play)
        let money = count * 2
        let win1 = range[0]-money
        let win2 = range[1]-money
        let tpl;
        let c1=(win1<0&&win2<0)?Math.abs(win1):win1
        let c2=(win1<0&&win2<0)?Math.abs(win2):win2
        if(count===0) {
            tpl=`您选中了<b class="red">${count}</b>注，共<b class="red">${count*2}</b>元`
        }else if(range[0]===range[1]) {
            tpl=`您选中了<b>${count}</b>注，共<b>${count*2}</b>元<em>若中奖，奖金：<strong class="red">${range[0]}</strong>元，您将${win1>=0?'盈利':'亏损'}<strong class="red">166</strong>元</em>`
        }else {
            tpl=`您选中了<b>${count}</b>注，共<b>${count*2}</b>元<em>若中奖，奖金：
            <strong class="red">${range[0]}</strong>至<strong class="red">${range[1]}
            </strong>元，您将${(win1<0&&win2<0)?'亏损':'盈利'}<strong class="${win1>=0?'red':'green'}">${c1}
            </strong>至<strong class="${win2>=0?'red':'green'}">${c1}</strong>元</em>`
        }
        $('.sel_info').html(tpl)
    }
    getTotal() {
        let count = 0
        $('.codelist li').each((index,item)=>{
            count+=$(item).attr(count)*1
        })
        $('#count').text(count)
        $('#money').text(count*2)
    }
    // 计算所有金额
    getRandom (num) {
        let arr =[],index
        let number=Array.from(this.number)
        while (num--){
            index = Number.parseInt(Math.random()*number.length)
            arr.push(number[index])
            number.splice(index,1)
        }
        return arr.join('')
    }
    getRandomCode(e) {
        e.preventDefault()
        let num = e.currentTarget.getAttribute('count')
        let play = this.cur_play.match(/\d+/g)[0]
        if(num === '0') {
            $(this.cart_el).html('')
        }else {
            for(let i=0;i<num;i++) {
                this.addCodeItme(this.getRandom(play),this.cur_play,this.play_list.get(this.cur_play).name,1);

            }
        }
    }
}
export default Base