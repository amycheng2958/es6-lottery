<template>
    <div id="doc3" class="syy">
        <div id="bd" class="kpc-bd">
            <div class="mod-cz-hd">
                <div class="hd clearfix">
                    <div class="cz-logo cz-syylogo">
                        <a href="#"></a>
                    </div>
                    <h1 class="cz-name">11选5 <span> 第<em id="curr_issue">**</em>期</span></h1>
                    <ul class="cz-params cz-params-kp">
                        <li>购彩剩余时间:</li>
                        <li id="countdown"></li>
                        <li>
                            销售：9:00～22:00（78期） 10分钟开奖　返奖<b>59%</b>
                        </li>
                    </ul>
                    <span class="label label-important bg-ccc state_el">暂停销售</span>
                </div>
                <div class="bd">
                    <div class="nav-cz-main clearfix">
                        <ul class="main">
                            <li class="active"><a href="javascript:void(0)">选号投注</a></li>
                            <li><a href="javascript:void(0)">遗漏数据</a></li>
                            <li><a href="javascript:void(0)">单式上传</a></li>
                        </ul>
                        <div class="helper-nav">
                            <a href="javascript:;">购彩小助手<i class="ico ico-arrow02"></i></a>
                        </div>
                        <ul class="quirk">
                            <li><a href="javascript:void(0)" target="_blank">走势图表</a></li>
                            <li class="divider">|</li>
                            <li><a href="javascript:void(0)" target="_blank">杀号定胆</a></li>
                            <li class="divider">|</li>
                            <li><a href="javascript:void(0)" target="_blank" id="sd_plays">玩法介绍</a></li>
                            <li class="divider">|</li>
                            <li><a href="javascript:void(0)" target="_blank" id="sd_zhongjiang">胆拖奖金对照</a></li>
                            <li class="divider">|</li>
                            <li><a href="javascript:void(0)" target="_blank">倍投计算器</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 导航 -->
            <div class="mod-cz-bd">
                <div class="nav-cz-sub" style="position:relative;">
                    <ul class="clearfix" id="plays">
                        <li desc="R2"><a href="#">任二</a></li>
                        <li desc="R3"><a href="#">任三</a></li>
                        <li desc="R4"><a href="#">任四</a></li>
                        <li desc="R5" class="active"><a href="#">任五</a></li>
                        <li desc="R6"><a href="#">任六</a></li>
                        <li desc="R7"><a href="#">任七</a></li>
                        <li desc="R8"><a href="#">任八</a></li>
                    </ul>
                </div>
            </div>

            <!-- 主体部分 -->
            <div class="grid-1 clearfix">
                <!-- 左侧 -->
                <div class="article">
                    <div class="plays_box">
                        <div class="plays">
                            <div class="mod-select-info ssytips">
                                <p id="zx_sm" class="plays-memo"><i class="ico ico-info-s"></i><b>玩法提示：</b><span>从01～11中任选5个或多个号码，所选号码与开奖号码相同，即中奖<em
                                        class="red">540</em>元</span></p>
                            </div>
                            <div class="mod-select-bolls code_box">
                                <div class="hd">
                                    <h3 class="clearfix">
                                      <span class="t1" id="play_tips">
                                        <em>选号区</em> 至少选5个
                                      </span>
                                        <span class="t2"><em>操作区</em> 快捷选号</span>
                                    </h3>
                                </div>
                                <div class="bd">
                                    <div class="tools-boll-list">
                                        <div class="boll-item boll-item-col3 sd_zx_r5">
                                            <div class="k">
                                                <span class="k1">号码<span class="caret"></span></span>
                                                <span class="k2">遗漏</span>
                                            </div>
                                            <div class="v">
                                                <div class="boll-list" unselectable="on" onselectstart="return false;">
                                                    <ul class="clearfix">
                                                        <li><em class="btn-boll">01</em><span>0</span></li>
                                                        <li><em class="btn-boll">02</em><span>0</span></li>
                                                        <li><em class="btn-boll">03</em><span class="red">5</span></li>
                                                        <li><em class="btn-boll">04</em><span>1</span></li>
                                                        <li><em class="btn-boll">05</em><span>1</span></li>
                                                        <li><em class="btn-boll">06</em><span>2</span></li>
                                                        <li><em class="btn-boll">07</em><span>0</span></li>
                                                        <li><em class="btn-boll">08</em><span>3</span></li>
                                                        <li><em class="btn-boll">09</em><span class="">0</span></li>
                                                        <li><em class="btn-boll">10</em><span>1</span></li>
                                                        <li><em class="btn-boll">11</em><span>0</span></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="t">
                                                <div class="tool-list">
                                                    <ul class="clearfix dxjo">
                                                        <li><a href="#" class="btn btn-middle">全</a></li>
                                                        <li><a href="#" class="btn btn-middle">大</a></li>
                                                        <li><a href="#" class="btn btn-middle">小</a></li>
                                                        <li><a href="#" class="btn btn-middle">奇</a></li>
                                                        <li><a href="#" class="btn btn-middle">偶</a></li>
                                                        <li><a href="#" class="lnk">清除</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ft">
                                        <p class="sel_info">您选了 <b>0</b> 注，共 <b>0</b> 元 <em></em></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mod-select-result">
                        <div class="hd confirm_sel_code_list" style="margin-left: 200px;text-align: left;">
                            <button type="button" class="btn" id="confirm_sel_code"><span
                                    class="btn-large btn-slt-ok"><i class="l"><i class="r">确认选号</i></i></span></button>
                            <a href="javascript:;" class="lnk lnk-calcel">清空选号</a>
                        </div>
                        <div class="bd clearfix">
                            <div class="result">
                                <div class="content">
                                    <ul class="clearfix codelist"></ul>
                                </div>
                            </div>
                            <div class="qkmethod">
                                <ul plays="Z1|直选">
                                    <li><a class="btn-middle" count="1" href="#">机选1注</a></li>
                                    <li><a class="btn-middle" count="5" href="#">机选5注</a></li>
                                    <li><a class="btn-middle" count="10" href="#">机选10注</a></li>
                                    <li><a class="btn-middle" count="0" href="#">清空列表</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="mod-select-result" id="result">
                        <div class="ft">
                            <div class="total">
                                您选了 <b class="em" id="count">0</b> 注， 倍投 <input class="text" id="mul" type="text"
                                                                                value="1"> 倍，共 <b class="em" id="money"
                                                                                                  style="display: inline-block;">0</b>
                                元
                            </div>
                        </div>
                    </div>
                    <div class="mod-submit">
                        <button type="button" id="post_data" class="btn btn-sd"><span
                                class="btn-large2 btn-large2-primary">立即投注</span></button>
                    </div>
                </div>

                <!-- 右侧 -->
                <div class="aside">
                    <div class="mod-aside mod-aside-xssckj">
                        <div class="hd clearfix">
                            <h3> 11选5 第 <em class="red" id="open_issue">022478</em> 期 开奖</h3>
                            <div class="ball-num clearfix">
                                <ul id="open_code_list">
                                    <li class="ico-ball3">09</li>
                                    <li class="ico-ball3">02</li>
                                    <li class="ico-ball3">01</li>
                                    <li class="ico-ball3">07</li>
                                    <li class="ico-ball3">11</li>
                                </ul>
                            </div>
                            <p class="kj-date">今天已售78期，还剩0期</p>
                        </div>
                        <div class="bd">
                            <div class="kpkjcode">
                                <table width="100%">
                                    <thead>
                                    <tr style="line-height: 24px;">
                                        <th>期号</th>
                                        <th>开奖号码</th>
                                        <th>
                                            <span>大小比</span>
                                            <span>奇偶比</span>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr issue="022478">
                                        <td class="issgray">022478</td>
                                        <td><em class="red syycode">09 02 </em><em class="red">01</em><em
                                                class="gray666"> 07 11</em></td>
                                        <td><span class="gray666">3:2</span><span class="gray666">4:1</span></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="ft text-right muted" style="margin-top: 6px;"><a href="javascript:void(0)"
                                                                                     target="_blank"
                                                                                     class="lnk">查询历史开奖</a> | <a
                                href="javascript:void(0)" target="_blank" class="lnk">查看走势图表</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import lottery from './js/lottery.js'
    export default {
        name: "login",
        data(){
            return {}
        },
        mounted(){
            // Timer.countdown('Thu Jan 03 2020 18:00:00')
            // Interface.getOmit({}).then((res)=>{
            //     const json = res.data;
            //     if(json.code == 1) {
            //     }else {
            //     }
            // })
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,audio,canvas,details,figcaption,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,summary,time,video {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    fieldset,img {
        border: 0;
    }
    address,caption,cite,code,dfn,em,th,var,optgroup {
        font-style: normal;
        font-weight: normal;
    }
    ins {
        text-decoration: none;
    }
    li {
        list-style: none;
    }
    table {
        font-size: inherit;
        border-collapse: collapse;
        border-spacing: 0;
    }
    caption,th {
        text-align: left;
    }
    h1,h2,h3,h4,h5,h6 {
        font-size: 100%;
    }
    q:before,q:after {
        content: '';
    }
    abbr,acronym {
        border: 0;
        font-variant: normal;
    }
    legend {
        color: #000;
    }
    input,button,textarea,select,optgroup,option {
        font-family: inherit;
        font-size: inherit;
        font-style: inherit;
        font-weight: inherit;
    }
    input,button,textarea,select {
        margin: 0;
        *font-size: 100%;
        line-height: 1.2;
    }
    a img,img {
        -ms-interpolation-mode: bicubic;
    }
    sub,sup {
        vertical-align: baseline;
    }
    article,aside,dialog,figure,footer,header,hgroup,nav,section,blockquote {
        display: block;
    }
    pre {
        white-space: pre-wrap;
        word-wrap: break-word;
    }




    body {
        font-family: simsun;
        color: #333;
        background: #fff;
        font-size: 12px;
        &.bg {
            background: #fff url(https://p1.ssl.qhimg.com/t010097eedacd27db1b.png) no-repeat top center;
        }
    }
    a {
        color: #333;
        text-decoration: none;
        &:hover {
            color: #c70000;
        }
        &.em {
            color: #0063c8;
        }
        &.btn-small {
            &:hover {
                border-color: #c45300;
                background: #f58d41;
            }
        }
    }
    :focus {
        -moz-outline-style: none;
    }
    textarea {
        resize: none;
        overflow: auto;
    }
    input[type=text]:focus,input[type=password]:focus,textarea:focus {
        outline: 0;
    }
    input,select,button {
        vertical-align: middle;
    }
    select {
        height: 22px;
    }
    .oldie {
        input {
            line-height: 1.3;
        }
        textarea {
            overflow: auto;
            line-height: 1.3;
        }
    }
    .oldie a span,.oldie a i,.oldie a b {
        cursor: pointer;
    }
    .mark {
        color: #f00;
    }
    .em {
        color: #cf1917;
    }
    .lnk {
        color: #3f79d0;
    }
    .muted {
        color: #999;
    }
    .clearfix {
        zoom: 1;
        &:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }
    }
    .c-red {
        color: red;
    }
    .c-blue {
        color: blue;
    }
    .text-center {
        text-align: center;
    }
    .text-right {
        text-align: right;
    }
    .text-left {
        text-align: left;
    }
    .fl {
        float: left;
    }
    .fr {
        float: right;
    }
    .none {
        display: none;
    }
    .gray {
        color: #999!important;
    }
    .red {
        color: #d80000!important;
    }
    .orange {
        color: #fa6705!important;
    }
    .green {
        color: #63a72a!important;
    }
    .blue {
        color: #096ed6!important;
    }
    .gray999 {
        color: #999!important;
    }
    .gray666 {
        color: #666!important;
    }
    .gray333 {
        color: #333!important;
    }
    .absolute {
        position: absolute;
    }
    .relative {
        position: relative;
    }
    .btn {
        &:hover {
            color: #c70000;
        }
    }
    .w45 {
        width: 45px!important;
    }
    .w60 {
        width: 60px!important;
    }
    .w90 {
        width: 90px!important;
    }
    .w120 {
        width: 120px!important;
    }
    .w150 {
        width: 150px!important;
    }
    .f-s16 {
        font-size: 16px;
    }
    /*#doc1,#doc2,#doc3 {*/
        /*margin: auto;*/
        /*text-align: left;*/
        /*min-width: 760px;*/
        /*zoom: 1;*/
    /*}*/
    /*#doc1 {*/
        /*margin: auto 10px;*/
    /*}*/
    /*#doc2 {*/
        /*width: 760px;*/
    /*}*/
    #doc3 {
        width: 100%;
        padding: 0 20px;
        margin: 0 auto;
        background: #fff;
    }
    #doc4 {
        zoom: 1;
    }
    .grid-1 {
        background: url(https://p4.ssl.qhimg.com/t013c49b3e58d516a78.png) repeat-y 100% 0;
        .article {
            float: left;
            width: 728px;
        }
        .aside {
            float: right;
            width: 249px;
        }
    }
    #hd {
        height: 110px;
        position: relative;
        z-index: 30\0;
        *z-index: 30;
        border: 1px solid #dadada;
        background: url(https://p2.ssl.qhimg.com/t01b6f2490c269710de.png) repeat-x 0 -173px;
        box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        .nav-login {
            .logined {
                .dropdown {
                    a {
                        background: 0;
                        background-color: transparent;
                        text-align: left;
                    }
                }
            }
            .dropdown {
                height: auto;
            }
            .dropdown-active {
                clear: both;
                position: absolute;
                zoom: 1;
                z-index: 30\0;
                *z-index: 30;
                width: 225px;
                right: 42px;
                top: 24px;
                box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
                background: url(about:blank);
                .mycp2 {
                    margin-top: -27px;
                }
                .dropdown-toggle {
                    float: right;
                    position: relative;
                    margin-bottom: -1px;
                    width: 70px;
                    margin-left: 60px;
                    padding: 3px 0 8px 11px;
                    _padding-top: 2px;
                    border: 1px #cecece solid;
                    border-bottom: 0;
                    color: #528fe9;
                    background: #fff;
                }
                .dropdown-menu {
                    clear: both;
                    display: block;
                    border: 1px #cecece solid;
                    background: #fff;
                }
            }
        }
        .more-show {
            display: block;
            position: absolute;
            background: 0;
            top: 67px;
            left: 580px;
            width: 50px;
            border: 1px solid #fff;
            *left: 573px;
            left: 577px\0;
            display: block;
            position: absolute;
            background: 0;
            top: 67px;
            left: 570px;
            width: 50px;
            *width: 55px;
            border: 1px solid #fff;
            *left: 565px;
            .item-more-hd {
                padding: 0 0 0 5px;
                line-height: 26px;
                cursor: pointer;
                padding: 0 0 0 5px;
                height: 26px;
                line-height: 26px;
                cursor: pointer;
                .ico {
                    width: 9px;
                    height: 5px;
                    background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -366px;
                    width: 9px;
                    height: 5px;
                    background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -366px;
                }
            }
            .item-more-list {
                display: none;
                a {
                    float: none;
                    display: none;
                    height: 28px;
                    padding: 0 5px;
                    line-height: 28px;
                    margin-right: 0;
                    float: none;
                    height: 28px;
                    padding: 0 5px;
                    line-height: 28px;
                    margin-right: 0;
                    &:hover {
                        background: #f5f5f5;
                        background: #f5f5f5;
                    }
                }
            }
            .ico {
                display: none;
                display: none;
            }
            .num {
                .d {
                    color: #d80000;
                    color: #d80000;
                }
            }
        }
        .mhover {
            background: #fff;
            width: 79px;
            border: 1px solid #dadada;
            top: 68px\0;
            width: 79px;
            background: #fff;
            border: 1px solid #dadada;
            .num {
                display: none;
                display: none;
            }
            .ico {
                display: inline-block;
                display: inline-block;
            }
            .item-more-hd {
                display: block;
                _height: 20px;
                _padding-top: 6px;
                display: block;
                _height: 20px;
                _padding-top: 6px;
            }
            .item-more-list {
                display: block;
                a {
                    display: block;
                    display: block;
                }
            }
        }
    }
    #bd {
        background: #fff;
    }
    #ft {
        text-align: center;
        margin: 35px 0 10px;
        line-height: 1.7;
        a {
            margin: 0 5px;
        }
        .policy {
            display: block;
            margin: 5px 0;
            a {
                display: inline-block;
                zoom: 1;
                height: 49px;
                margin: 0 2px;
                background: url(http://p5.qhimg.com/t019413d04708267886.png) no-repeat;
            }
            .o1 {
                width: 133px;
            }
            .o2 {
                width: 132px;
                background-position: -142px 0;
            }
            .o3 {
                width: 122px;
                background-position: -283px 0;
            }
            .o4 {
                width: 149px;
                background-position: -414px 0;
            }
            .o5 {
                width: 213px;
                background-position: -572px 0;
            }
        }
        .red {
            color: #f60;
        }
    }
    a:active,button:active,input:active {
        outline: 0;
    }
    #cssHasLoadFlag110 {
        display: none!important;
    }
    .ico {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        font-size: 0;
        line-height: 0;
        vertical-align: middle;
    }
    .ico-user {
        width: 14px;
        height: 13px;
        background: url(https://p2.ssl.qhimg.com/t01b6f2490c269710de.png) no-repeat 0 -43px;
    }
    .ico-cz {
        display: block;
        width: 40px;
        height: 40px;
        background: url(https://p2.ssl.qhimg.com/t01fc3b4c38a4ad6617.png) no-repeat 0 0;
    }
    .ico-cz-1 {
        background-position: 0 -280px;
    }
    .ico-cz-2 {
        background-position: 0 -320px;
    }
    .ico-cz-3 {
        background-position: 0 -360px;
    }
    .ico-cz-4 {
        background-position: 0 -117px;
    }
    .ico-cz-5 {
        background-position: 0 -156px;
    }
    .ico-cz-6 {
        background-position: 0 -195px;
    }
    .ico-cz-7 {
        background-position: 0 -234px;
        width: 36px;
        height: 36px;
    }
    .ico-cz-8 {
        background-position: 0 -400px;
    }
    .ico-cz-9 {
        background-position: 0 -440px;
    }
    .ico-cz-10 {
        background-position: 0 -484px;
    }
    .ico-cz-11 {
        background-position: 0 -548px;
    }
    .ico-cz-12 {
        background-position: 0 -611px;
    }
    .ico-info-s {
        width: 13px;
        height: 11px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -172px;
    }
    .ico-help {
        width: 13px;
        height: 13px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -100px;
        width: 13px;
        height: 13px;
        background: url(https://p2.ssl.qhimg.com/t01dec5f3b6620a2df6.png) no-repeat;
        _background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -100px;
    }
    .ico-help-m {
        width: 16px;
        height: 16px;
        background: url(http://w.qhimg.com/images/v2/ons/caipiao/img/help.gif) no-repeat;
    }
    .ico-new {
        width: 17px;
        height: 18px;
        background: url(http://p6.qhimg.com/t018a179faca9602a90.png) no-repeat;
    }
    .ico-jiajiang {
        width: 28px;
        height: 23px;
        background: url(http://p2.qhimg.com/t012f4c86ac6b5f8ec1.png) no-repeat;
    }
    .ico-light {
        width: 13px;
        height: 15px;
        background: url(http://w.qhimg.com/images/v2/ons/caipiao/img/light.gif) no-repeat;
    }
    .ico-quest {
        width: 15px;
        height: 15px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -50px;
    }
    .ico-answer {
        width: 15px;
        height: 15px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -75px;
    }
    .ico-lg360 {
        width: 18px;
        height: 18px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 0;
    }
    .ico-succ {
        width: 30px;
        height: 30px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -134px -96px;
    }
    .ico-info {
        width: 30px;
        height: 30px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -178px -96px;
    }
    .ico-fail,.ico-error {
        width: 30px;
        height: 30px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -222px -96px;
    }
    .ico-account,.ico-pwd,.ico-user2 {
        width: 11px;
        height: 13px;
        background: url(https://p2.ssl.qhimg.com/t01b6f2490c269710de.png) no-repeat;
    }
    .ico-account {
        background-position: -59px -43px;
    }
    .ico-pwd {
        background-position: -78px -43px;
    }
    .ico-user2 {
        background-position: -97px -43px;
    }
    .ico-err-m {
        width: 14px;
        height: 14px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -178px 0;
    }
    .ico-succ-m {
        width: 16px;
        height: 14px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -134px -24px;
    }
    .ico-close {
        width: 7px;
        height: 7px;
        background: url(https://p0.ssl.qhimg.com/t01da8d666c88dcbd62.png) no-repeat 0 0;
    }
    .ico-bao {
        width: 12px;
        height: 14px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -28px;
    }
    .ico-orderup {
        width: 7px;
        height: 9px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -148px;
    }
    .ico-orderdown {
        width: 7px;
        height: 9px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -157px;
    }
    .ico-msg {
        width: 14px;
        height: 10px;
        vertical-align: -1px;
        background: url("https://p1.ssl.qhimg.com/t018af20130253ce54b.png") -24px -24px;
    }
    .btn-boll {
        display: block;
        width: 32px;
        height: 35px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        padding-right: 2px;
        font-family: 'Microsoft Yahei';
        line-height: 32px;
        text-align: center;
        color: #555;
        text-shadow: 1px 1px 1px #fff;
        background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat -88px 0;
        &:hover {
            color: #555;
            text-decoration: none;
        }
    }
    .btn-boll-tips-red {
        background-position: -265px 0;
    }
    .btn-boll-tips-blue {
        background-position: -307px 0;
    }
    .btn-boll-tips {
        background-position: -179px 0;
        color: #333;
        background-position: -179px 0;
        color: #555;
    }
    .btn-blueboll-tips {
        background-position: -223px 0;
        color: #333;
    }
    .btn-boll-2 {
        background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat -44px 0;
        color: #fff;
        text-shadow: 0 0 1px #333;
    }
    .btn-boll-active {
        color: #fff;
        text-shadow: 1px 1px 1px #c00;
        background-position: 0 0;
        &:hover {
            color: #fff;
        }
    }
    .btn-boll-dis {
        color: #5a5959;
        background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat -135px 0;
    }
    .boll-blue-list {
        .btn-boll-tips {
            background-position: -223px 0;
            color: #333;
        }
        .btn-boll-active {
            background: url(https://p5.ssl.qhimg.com/t01a0e7cd5f318b5156.png) no-repeat -40px 0;
            color: #fff;
            text-shadow: 0 0 1px #333;
        }
    }
    button {
        &.btn {
            border: 0;
            padding: 0;
            margin: 0;
            background: 0;
            cursor: pointer;
            overflow: visible;
            white-space: pre;
            word-break: keep-all;
        }
        &.btn-sd {
            border-radius: 3px;
        }
    }
    .btn-large {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        height: 34px;
        padding: 0 12px;
        line-height: 34px;
        border-radius: 2px;
        border: 1px #e9d9b2 solid;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        font-size: 18px;
        font-family: 'Microsoft Yahei';
        color: #ca9035;
        background: #fcf7e9 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -87px;
        cursor: pointer;
        &:hover {
            background-position: 0 -131px;
        }
    }
    .btn-slt-ok {
        i {
            font-style: normal;
            &.l {
                padding-left: 25px;
                background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -119px;
            }
            &.r {
                padding-right: 25px;
                color: #c63;
                background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 83px -119px;
            }
        }
    }
    .btn-middle {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        white-space: pre;
        word-break: keep-all;
        height: 22px;
        line-height: 22px;
        border-radius: 2px;
        text-align: center;
        border: 1px #cecece solid;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        *text-shadow: 1px 1px 1px #fff;
        background: #f8f8f8 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -53px;
        cursor: pointer;
    }
    .btn-middle-padding {
        padding: 0 10px;
    }
    .btn-middle-primary {
        height: 19px;
        line-height: 19px;
        padding: 0 6px;
        color: #cd8a1f;
        border-color: #f2daa0;
        background: #ffedc9;
    }
    a.btn-middle-primary,a.btn-middle-primary:hover {
        color: #cd8a1f!important;
        text-decoration: none;
    }
    .btn-small {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        white-space: pre;
        word-break: keep-all;
        height: 20px;
        line-height: 19px;
        padding: 0 5px;
        border-radius: 2px;
        text-align: center;
        border: 1px #db7830 solid;
        text-shadow: 1px 1px 1px #c45300;
        background: #f47b22;
        cursor: pointer;
    }
    a.btn-small,a.btn-small:hover {
        color: #fff;
        text-decoration: none;
    }
    .btn-panel {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        white-space: pre;
        word-break: keep-all;
        height: 34px;
        line-height: 34px;
        border-radius: 2px;
        text-align: center;
        border: 1px #cecece solid;
        box-shadow: 0 1px 3px rgba(0,0,0,0.1);
        text-shadow: 1px 1px 1px #fff;
        background: #f8f8f8 url(https://p3.ssl.qhimg.com/t019e71cc1d6a58b175.png) repeat-x 0 -209px;
        cursor: pointer;
        vertical-align: middle;
    }
    a.btn-panel,a.btn-panel:hover {
        color: #333;
        text-decoration: none;
    }
    .btn-panel-primary {
        padding: 0 26px;
        font-weight: bold;
        font-size: 14px;
        color: #fff;
        border-color: #c7282a;
        text-shadow: 1px 1px 1px #c7282a;
        background: #e4484b url(https://p3.ssl.qhimg.com/t019e71cc1d6a58b175.png) repeat-x 0 -48px;
        cursor: pointer;
    }
    .btn-large2 {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        height: 42px;
        padding: 0 36px;
        line-height: 42px;
        border-radius: 3px;
        border: 1px #940811 solid;
        text-shadow: 1px -1px 1px rgba(0,0,0,0.3);
        font-size: 24px;
        font-family: 'Microsoft Yahei';
        cursor: pointer;
        background: #fcf7e9 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 0;
    }
    .btn-large2-primary {
        color: #fff;
        border-top-color: #c61825;
    }
    .btn-large2-dis {
        color: #fff;
        border-color: #ababab #868686 #868686;
        background-position: 0 -175px;
    }
    .btn-large3 {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        height: 36px;
        padding: 0 23px;
        line-height: 36px;
        border-radius: 3px;
        border: 1px #940811 solid;
        text-shadow: 1px -1px 1px rgba(0,0,0,0.3);
        font-size: 24px;
        font-family: 'Microsoft Yahei';
        cursor: pointer;
        background: #fcf7e9 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -228px;
    }
    .btn-large3-primary {
        color: #fff;
        border-top-color: #c61825;
    }
    a.btn-large3-primary,a.btn-large3-primary:hover {
        color: #fff;
        text-decoration: none;
    }
    .btn-large3-dis {
        color: #fff;
        border-color: #ababab #868686 #868686;
        background-position: 0 -175px;
    }
    .tab-content {
        .pane {
            display: none;
        }
        .active {
            display: block;
        }
    }
    .page {
        padding: 5px 0;
        text-align: center;
        color: #999;
        strong {
            border: 0;
        }
        .pagesub {
            color: #333;
            .ext {
                color: #999;
            }
            .pageup {
                margin-left: 10px;
            }
            .pagedown {
                margin-right: 10px;
            }
        }
    }
    .page a,.page b,.page strong {
        border: 1px solid #d4d4d4;
        display: inline-block;
        padding: 0 5px;
        margin: 0 4px;
        line-height: 20px;
        height: 20px;
        vertical-align: middle;
    }
    input.text,textarea.textarea {
        padding: 2px 3px;
        border: 1px #bbb solid;
        *padding: 3px 3px 2px;
    }
    .input-mini {
        width: 60px;
    }
    .input-small {
        width: 90px;
    }
    .input-medium {
        width: 150px;
    }
    .input-large {
        width: 210px;
    }
    .input-xlarge {
        width: 270px;
    }
    .input-xxlarge {
        width: 530px;
    }
    .form {
        .fm-item {
            padding: 3px 0;
            .t {
                color: #999;
            }
            .k {
                text-align: right;
            }
        }
    }
    .form-inline,.form .fm-item {
        overflow: hidden;
        zoom: 1;
    }
    .form-inline {
        .fm-item {
            display: inline-block;
            *display: inline;
            *zoom: 1;
        }
    }
    .form .fm-item .k,.form .fm-item .v,.form .fm-item .t {
        float: left;
    }
    .form .fm-item .k,.form .fm-item .v {
        margin-right: 10px;
    }
    .fm-item {
        line-height: 1.75em;
    }
    .mod-kefu {
        position: fixed;
        _position: absolute;
        margin-left: 980px;
        top: 232px;
        width: 59px;
        padding-bottom: 6px;
        background: url(https://p2.ssl.qhimg.com/t01ef1d5e54e086daba.png) no-repeat 0 bottom;
        ul {
            li {
                a {
                    display: block;
                    width: 100%;
                    height: 62px;
                    background: url(https://p2.ssl.qhimg.com/t01ef1d5e54e086daba.png) no-repeat;
                    &.a1 {
                        background-position: 0 0;
                        &:hover {
                            background-position: -69px 0;
                        }
                    }
                    &.a2 {
                        background-position: 0 -62px;
                        &:hover {
                            background-position: -69px -62px;
                        }
                    }
                    &.a3 {
                        background-position: 0 -124px;
                        &:hover {
                            background-position: -69px -124px;
                        }
                    }
                    &.a4 {
                        background-position: 0 -186px;
                        &:hover {
                            background-position: -69px -186px;
                        }
                    }
                    &.a5 {
                        background-position: 0 -248px;
                        &:hover {
                            background-position: -69px -248px;
                        }
                    }
                    &.a6 {
                        background-position: 0 -312px;
                        &:hover {
                            background-position: -69px -312px;
                        }
                    }
                }
            }
        }
    }
    .form-panel {
        .fm-item {
            min-height: 34px;
            margin-bottom: 9px;
            line-height: 34px;
            .k {
                width: 67px;
                text-align: right;
            }
            .v {
                .err {
                    display: block;
                    padding-top: 3px;
                    line-height: 1.2;
                    color: #f00;
                }
            }
        }
        .btn {
            margin-right: 10px;
        }
        input {
            &.text {
                width: 244px;
                height: 30px;
                line-height: 30px;
                border-color: #d5d5d5;
                border-radius: 3px;
                &:focus {
                    border-color: #f29f9f;
                    box-shadow: 0 0 4px rgba(0,0,0,0.3);
                }
            }
            &.text2 {
                &:focus {
                    border-color: #9ff2a5;
                    box-shadow: 0 0 4px rgba(0,0,0,0.3);
                }
            }
            &.text3 {
                &:focus {
                    border-color: #7fa9e0;
                    box-shadow: 0 0 4px rgba(0,0,0,0.3);
                }
            }
            &.input-small {
                width: 124px;
            }
            &.change-phone {
                width: 220px;
            }
            &.copy-text {
                height: 25px;
                width: 300px;
            }
        }
        .btn-panel {
            padding: 0 17px;
        }
        .btns {
            padding-top: 11px;
            margin-bottom: 11px;
            text-align: left;
        }
        .xieyi {
            text-align: center;
            padding: 8px 0;
        }
        .ui-mmqd {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            font-size: 0;
            line-height: 0;
            width: 34px;
            height: 10px;
            margin-left: 2px;
            background-color: #ccc;
        }
        .ui-mmqd-1 {
            background-color: #c8220b;
        }
        .c-qd-1 {
            color: #c8220b;
        }
        .ui-mmqd-2 {
            background-color: #ef9b1f;
        }
        .c-qd-2 {
            color: #ef9b1f;
        }
        .ui-mmqd-3 {
            background-color: #2d83bb;
        }
        .c-qd-3 {
            color: #2d83bb;
        }
        .ui-mmqd-4 {
            background-color: #63a72a;
        }
        .c-qd-4 {
            color: #63a72a;
        }
        .btn-panel02 {
            padding: 0 12px;
            margin-right: 10px;
        }
    }
    .ico-records-he {
        width: 22px;
        height: 22px;
        background: url(https://p1.ssl.qhimg.com/t017705a7b3f4786c7a.png) no-repeat 0 0;
    }
    .ico-records-zhui {
        width: 22px;
        height: 22px;
        background: url(https://p1.ssl.qhimg.com/t017705a7b3f4786c7a.png) no-repeat 0 -48px;
    }
    .ico-records-zi {
        width: 22px;
        height: 22px;
        background: url(https://p1.ssl.qhimg.com/t017705a7b3f4786c7a.png) no-repeat 0 -24px;
    }
    .btn-large4 {
        display: inline-block;
        height: 28px;
        padding: 0 16px;
        border-radius: 3px;
        border: 1px #c31c1c solid;
        background: #d53131 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -328px;
        line-height: 28px;
        color: #fff;
        font-size: 14px;
        font-family: 'Microsoft Yahei';
    }
    .btn-large4-gray {
        border: 1px #c0c0c0 solid;
        background: #e3e3e3 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) no-repeat 0 -365px;
        color: #333;
        border: 1px #c0c0c0 solid;
        background: #e3e3e3 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -365px;
        color: #333;
    }
    .btn-boll2 {
        display: block;
        width: 34px;
        height: 34px;
        font-size: 20px;
        font-family: 'Arial';
        line-height: 34px;
        text-align: center;
        color: #fff;
        background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -156px;
    }
    .btn-boll2-blue {
        background-position: -44px -156px;
    }
    .btn-large5 {
        display: inline-block;
        height: 28px;
        padding: 0 16px;
        border-radius: 3px;
        border: 1px #e86541 solid;
        background: #f18c48 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -404px;
        line-height: 28px;
        color: #fff;
        font-size: 14px;
        font-family: 'Microsoft Yahei';
        cursor: pointer;
        &:hover {
            background-position: 0 -437px;
        }
    }
    .icon-help-step {
        width: 22px;
        height: 17px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -193px;
    }
    .ico-count {
        width: 9px;
        height: 8px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -82px;
    }
    .ico-numtabledown {
        width: 13px;
        height: 15px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -221px;
    }
    .ico-numtableup {
        width: 13px;
        height: 15px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -98px;
    }
    .input-xmini {
        width: 28px;
    }
    .btn-boll-large-box {
        .btn-boll-large {
            display: block;
            width: 47px;
            height: 47px;
            font-size: 22px;
            font-weight: bold;
            cursor: pointer;
            font-family: 'Microsoft Yahei';
            line-height: 45px;
            text-align: center;
            color: #555;
            text-shadow: 1px 1px 1px #fff;
            background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat -57px -232px;
        }
        .btn-boll-active {
            background-position: 0 -232px;
            color: #fff;
            text-shadow: none;
        }
    }
    .btn-middle-red {
        display: inline-block;
        height: 22px;
        border: 1px solid #f8a9a9;
        background: #ffdfde url(https://p5.ssl.qhimg.com/t01ce114f27ad37ff37.png) repeat-x 0 0;
        border-radius: 2px;
        padding: 0 6px;
        color: #d74200;
        line-height: 22px;
        cursor: pointer;
    }
    .btn-middle-blue {
        display: inline-block;
        height: 22px;
        border: 1px solid #7fb4cf;
        background: #bae3ff url(https://p5.ssl.qhimg.com/t01ce114f27ad37ff37.png) repeat-x 0 -26px;
        border-radius: 2px;
        padding: 0 6px;
        color: #467ba7;
        line-height: 22px;
        cursor: pointer;
    }
    .btn-middle-gray {
        display: inline-block;
        height: 22px;
        border: 1px solid #d3d3d3;
        background: #e7e6e6 url(https://p5.ssl.qhimg.com/t01ce114f27ad37ff37.png) repeat-x 0 -52px;
        border-radius: 2px;
        padding: 0 6px;
        color: #555;
        line-height: 22px;
        cursor: pointer;
    }
    .btn-boll2-middle {
        display: block;
        width: 70px;
        height: 33px;
        border: 1px solid #bcbcbc;
        background: #e8e8e8 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -545px;
        line-height: 33px;
        font-size: 15px;
        font-family: 'Microsoft Yahei';
        color: #555;
        text-shadow: 1px 1px 1px #fff;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 2px 3px rgba(0,0,0,0.1);
    }
    .btn-boll2-large {
        display: block;
        width: 105px;
        height: 33px;
        border: 1px solid #bcbcbc;
        background: #e8e8e8 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -545px;
        line-height: 33px;
        font-size: 15px;
        font-family: 'Microsoft Yahei';
        color: #555;
        text-shadow: 1px 1px 1px #fff;
        border-radius: 10px;
        cursor: pointer;
        box-shadow: 0 2px 3px rgba(0,0,0,0.1);
    }
    .btn-boll2-active {
        border: 1px solid #c73f3d;
        background: #bb2f2d url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -588px;
        color: #fff;
        text-shadow: none;
    }
    .k3-boll-box {
        .btn-boll-middle {
            display: block;
            width: 70px;
            height: 33px;
            border: 1px solid #bcbcbc;
            background: #e8e8e8 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -545px;
            line-height: 33px;
            font-size: 15px;
            font-family: 'Microsoft Yahei';
            color: #555;
            text-shadow: 1px 1px 1px #fff;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 2px 3px rgba(0,0,0,0.1);
        }
        .btn-boll-large {
            display: block;
            width: 105px;
            height: 33px;
            border: 1px solid #bcbcbc;
            background: #e8e8e8 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -545px;
            line-height: 33px;
            font-size: 15px;
            font-family: 'Microsoft Yahei';
            color: #555;
            text-shadow: 1px 1px 1px #fff;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0 2px 3px rgba(0,0,0,0.1);
        }
        .btn-boll-active {
            border: 1px solid #c73f3d;
            background: #bb2f2d url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -588px;
            color: #fff;
            text-shadow: none;
        }
    }
    .c404 {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 530px;
        height: 470px;
        margin: -235px 0 0 -265px;
        background: url(https://p0.ssl.qhimg.com/t011d2fd94bbe546546.jpg) no-repeat top;
        text-align: center;
        color: #4a4a4a;
        a {
            color: #2467da;
        }
        b {
            font-size: 14px;
        }
        .mt1 {
            margin-top: 400px;
        }
        .mt2 {
            margin-top: 25px;
        }
    }
    .ico-moredata {
        width: 12px;
        height: 12px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -244px;
        vertical-align: -3px;
    }
    .ico-new2 {
        width: 12px;
        height: 12px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -265px;
    }
    .ico-quest2 {
        width: 20px;
        height: 20px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -287px;
    }
    .ico-time {
        width: 15px;
        height: 15px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -317px;
    }
    .ico-money {
        width: 16px;
        height: 16px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -342px;
    }
    .prizeguide-cont {
        width: 650px;
        padding: 64px 0;
        background: rgba(0,0,0,0.6);
        filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);
        .pop-close {
            position: absolute;
            top: 6px;
            right: 9px;
            cursor: pointer;
            font-size: 18px;
            font-family: 'Microsoft Yahei';
            color: #fff9a0;
        }
        .ico-close {
            display: inline-block;
            width: 24px;
            height: 25px;
            margin-right: 3px;
            background: url(http://p0.qhimg.com/t019b83411d737da7c9.png) no-repeat;
            _background: url(http://p7.qhimg.com/t01a35aa5798b91ad9b.png) no-repeat;
            vertical-align: middle;
        }
    }
    .prize-step {
        width: 558px;
        height: 514px;
        margin: 0 auto;
        background: url(http://p3.qhimg.com/t019acaad9b9bd96556.png) no-repeat;
        _background: url(http://p9.qhimg.com/t018d985476e7c3f929.png) no-repeat;
    }
    .prize-btn {
        width: 180px;
        height: 55px;
        margin: 0 auto;
        background: url(http://p6.qhimg.com/t0177f9be7dbb688435.png) no-repeat;
        cursor: pointer;
        _background: url(http://p5.qhimg.com/t01f81b49703fc0090b.png) no-repeat;
    }
    .share {
        position: relative;
        .share-word {
            color: #666;
            cursor: pointer;
        }
        .ico-arrow {
            display: inline-block;
            width: 0;
            height: 0;
            margin: 0 0 0 3px;
            background: 0;
            border-width: 4px 4px;
            border-style: solid;
            border-color: #666 transparent transparent;
            _border-color: #666 #fff #fff;
            vertical-align: -3px;
            font-size: 0;
            line-height: 0;
        }
        .share-con {
            display: none;
            position: absolute;
            top: 22px;
            right: 0;
            width: 108px;
            _width: 108px;
            padding: 7px 9px 7px 11px;
            border: 1px solid #dfdfdf;
            border-radius: 2px;
            background: #eeeded;
            overflow: hidden;
            zoom: 1;
        }
        .share-link {
            float: left;
            width: 16px;
            height: 16px;
            margin-right: 2px;
            background: url(https://p4.ssl.qhimg.com/t01b9f4993a1df3682f.png) no-repeat;
            line-height: 9999em;
            overflow: hidden;
        }
        .share-link-rr {
            background-position: 0 -63px;
        }
        .share-link-db {
            background-position: 0 -105px;
        }
        .share-link-sina {
            background-position: 0 -21px;
        }
        .share-link-taobao {
            background-position: 0 -42px;
        }
        .share-link-qzone {
            background-position: 0 -84px;
        }
        .share-link-qwb {
            background-position: 0 -126px;
        }
    }
    .share-show {
        .ico-arrow {
            border-color: transparent transparent #666;
            _border-color: #fff #fff #666;
            vertical-align: 1px;
        }
        .share-con {
            display: block;
        }
    }
    .mobile-code {
        position: fixed;
        _position: absolute;
        margin-left: 980px;
        top: 400px;
        .qrcode {
            float: left;
            display: block;
            width: 21px;
            padding: 6px 9px;
            background: #e1e2e6;
            color: #8a8b8c;
            text-align: center;
            line-height: 16px;
            font-size: 14px;
            .ico-mobile {
                width: 21px;
                height: 31px;
                background: url(http://p8.qhimg.com/d/inn/79057e9c/ico-mobilecode.png) no-repeat;
                margin-bottom: 5px;
            }
            .ico-left {
                width: 6px;
                height: 9px;
                background: url(http://p8.qhimg.com/d/inn/79057e9c/ico-mobilecode.png) no-repeat 0 -41px;
            }
            .ico-right {
                width: 6px;
                height: 9px;
                background: url(http://p8.qhimg.com/d/inn/79057e9c/ico-mobilecode.png) no-repeat -15px -41px;
            }
        }
        .qrcode-box-wrap {
            float: left;
            overflow: hidden;
        }
        .qrcode-box {
            float: left;
            margin-left: -150px;
            height: 199px;
            padding: 10px 15px 13px;
            background: #fbfbfb;
            border: 1px solid #ccc;
            border-left: none;
            text-align: center;
            color: #494949;
            .appdown {
                display: inline-block;
                height: 38px;
                line-height: 38px;
                padding: 0 9px;
                margin-top: 10px;
                border: 1px solid #629f2b;
                border-radius: 6px;
                background: #7dc140;
                background-image: linear-gradient(to bottom,#7dc140,#6dac33);
                color: #fff;
                font-size: 14px;
                font-family: 'Microsoft Yahei';
            }
            a {
                &.appdown {
                    &:hover {
                        background: #6dac33;
                        background-image: linear-gradient(to bottom,#6dac33,#7dc140);
                    }
                }
            }
            img {
                margin: 12px 0 5px;
            }
            b {
                font-size: 14px;
            }
        }
    }
    .ico-delete {
        width: 10px;
        height: 9px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -328px;
        cursor: pointer;
    }
    .modcz-logo {
        display: inline-block;
        width: 65px;
        height: 65px;
        background: url(https://p2.ssl.qhimg.com/t015a4651af739b6e4a.png) no-repeat;
    }
    .modcz-ssq {
        background-position: 0 0;
    }
    .modcz-11-5 {
        background-position: 0 -72px;
    }
    .modcz-cgj {
        background-position: 0 -140px;
    }
    .modcz-dlt {
        background-position: 0 -210px;
    }
    .modcz-new11-5 {
        background-position: 0 -280px;
    }
    .modcz-jclq {
        background-position: 0 -348px;
    }
    .modcz-fc3d {
        background-position: 0 -416px;
    }
    .modcz-ssc {
        background-position: 0 -488px;
    }
    .modcz-bd {
        background-position: 0 -558px;
    }
    .modcz-qlc {
        background-position: 0 -630px;
    }
    .modcz-k3 {
        background-position: 0 -698px;
    }
    .modcz-sf14 {
        background-position: 0 -770px;
    }
    .modcz-qxc {
        background-position: 0 -840px;
    }
    .modcz-poker {
        background-position: 0 -910px;
    }
    .modcz-jczq {
        background-position: 0 -977px;
    }
    .modcz-kl8 {
        background-position: 0 -1048px;
    }
    .modcz-sfgg {
        background-position: 0 -1120px;
    }
    .modcz-pl3 {
        background-position: 0 -1190px;
    }
    .modcz-pl5 {
        background-position: 0 -1260px;
    }
    .modcz-15x5 {
        background-position: 0 -1334px;
    }
    .modcz-4cjq {
        background-position: 0 -1408px;
    }
    .modcz-6cjq {
        background-position: 0 -1480px;
    }
    .modcz-rx9 {
        background-position: 0 -1554px;
    }
    .modcz-zcsf {
        background-position: 0 -1624px;
    }
    .modcz-sh11-5 {
        background-position: 0 -1697px;
    }
    .panle-aside-lucky {
        position: fixed;
        _position: absolute;
        left: 50%;
        width: 162px;
        top: 154px;
        margin-left: 560px;
        z-index: 50;
        &.left {
            position: fixed;
            _position: absolute;
            left: auto;
            right: 50%;
            width: 162px;
            top: 146px;
            margin-right: 520px;
            z-index: 50;
            .panle-aside-close {
                right: initial;
                left: 0;
            }
        }
        .panle-aside-box {
            width: 162px;
            position: absolute;
            right: 0;
            overflow: visible;
        }
        .panle-aside-cont {
            width: 160px;
            border: 1px solid #f2f2f2;
            border-top: 0;
            background: #fff;
        }
        .panle-aside-close {
            position: absolute;
            top: -29px;
            right: 0;
            width: 22px;
            height: 22px;
            border: 1px solid #dcdcdc;
            border-radius: 22px;
            text-align: center;
            color: #939393;
            font-family: 'simsun';
            line-height: 22px;
            cursor: pointer;
            background: #fff;
            &:hover {
                color: #888;
            }
        }
        .panle-aside-hd {
            border-top: 2px solid #d21e1e;
            background: #f5f5f5;
            h2 {
                padding: 8px;
                text-align: center;
                img {
                    vertical-align: middle;
                }
            }
        }
        .panle-aside-bd {
            height: 643px;
            overflow: hidden;
        }
        .panle-goods-list {
            height: 643px;
            overflow: hidden;
            li {
                box-sizing: border-box;
                padding: 0 9px;
                border-bottom: 1px dotted #c0c0c0;
                text-align: center;
            }
            a {
                display: block;
                position: relative;
                padding: 2px 0 10px;
                zoom: 1;
            }
            .goods-img {
                img {
                    width: 100px;
                    height: 100px;
                    vertical-align: middle;
                    margin: 0 21px;
                }
            }
            .goods-name {
                font-weight: normal;
                color: #333;
            }
        }
        .buy-btn {
            display: inline-block;
            vertical-align: middle;
            border: 1px solid #f44e31;
            color: #f44e31;
            width: 85px;
            line-height: 20px;
            border-radius: 5px;
            margin-top: 8px;
        }
        .goods-mask {
            transition: height .0s;
            height: 0;
            overflow: hidden;
            position: absolute;
            left: -9px;
            right: -9px;
            bottom: 0;
            background: rgba(0,0,0,0.6);
            text-align: center;
            filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000,endcolorstr=#7F000000);
            img {
                width: 90px;
                height: 90px;
                margin: 31px;
                border: 4px solid #fff;
            }
        }
        a {
            &:hover {
                .goods-mask {
                    zoom: 1;
                    height: 160px;
                    width: 160px;
                }
            }
        }
        .panle-aside-ft {
            position: relative;
            height: 32px;
            line-height: 32px;
            background: #f5f5f5;
            .goods-total {
                font-size: 14px;
                font-weight: normal;
                text-align: center;
            }
            .trigger-bar {
                position: absolute;
                width: 20px;
                height: 20px;
                top: 6px;
                background: url(http://p0.qhimg.com/t011bbe7dff591722b7.png) no-repeat center;
                cursor: pointer;
            }
            .prev {
                left: 15px;
                background-position: 0 0;
            }
            .prev-display {
                background-position: -20px 0;
                cursor: default;
            }
            .next {
                right: 15px;
                background-position: -40px 0;
            }
            .next-display {
                background-position: -60px 0;
                cursor: default;
            }
        }
    }
    .panle-aside-showbar {
        position: absolute;
        right: 10px;
        top: 130px;
        width: 38px;
        height: 27px;
        background: url(http://p0.qhimg.com/t01c267ffd143e5d23b.png) no-repeat;
        text-align: center;
        padding-top: 135px;
        cursor: pointer;
        display: none;
        .icon-show-left {
            display: inline-block;
            vertical-align: middle;
            width: 17px;
            height: 14px;
            background: url(http://p2.qhimg.com/t01ec55cce958f6c0fc.png) no-repeat;
        }
    }
    .logo {
        float: left;
        margin-right: 15px;
        a {
            float: left;
            width: 130px;
            height: 33px;
            text-indent: -999em;
            background: url(https://p2.ssl.qhimg.com/t01b6f2490c269710de.png) no-repeat 0 0;
        }
    }
    .nav-main {
        float: left;
        margin-right: 25px;
        overflow: hidden;
        *font-family: simsun;
        li {
            a {
                padding-left: 7px;
                background: url(https://p2.ssl.qhimg.com/t01b6f2490c269710de.png) no-repeat right -60px;
            }
            span {
                padding-right: 7px;
            }
            &.active {
                position: relative;
                a {
                    font-weight: bold;
                    color: #d80000;
                }
                span {
                    background-position: 100% -45px;
                }
            }
        }
    }
    .nav-main li,.nav-main li a,.nav-main li span {
        float: left;
        height: 34px;
        line-height: 33px;
    }
    .nav-quirk {
        float: left;
        height: 34px;
        line-height: 33px;
        color: #dbdbdb;
        *font-family: simsun;
        span {
            margin: 0 4px;
        }
    }
    .nav-quirk a,.nav-quirk a:hover {
        color: #777;
    }
    .nav-login {
        float: right;
        margin-top: 5px;
        *margin-top: 7px;
        *font-family: simsun;
        position: relative;
        padding-right: 5px;
        z-index: 30;
        .login {
            display: none;
        }
        .divider {
            margin: 0 10px;
            color: #d3d3d3;
        }
        .ico-user {
            vertical-align: middle;
            margin-right: 3px;
        }
        .dropdown {
            position: relative;
            z-index: 30;
            .caret {
                margin-left: 4px;
                width: 7px;
                height: 12px;
                background: url(https://p2.ssl.qhimg.com/t01b6f2490c269710de.png) no-repeat -28px -39px;
            }
            .caret-open {
                background: url(https://p2.ssl.qhimg.com/t01b6f2490c269710de.png) no-repeat -40px -39px;
            }
        }
        .base-info {
            p {
                height: 20px;
            }
        }
    }
    .nav-login a,.nav-login a:hover {
        color: #787878;
    }
    .nav-login a,.nav-login span,.nav-login .dropdown {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: middle;
    }
    .nav-login ul.list span,.nav-login ul.list a,.nav-login ul.list b {
        vertical-align: top;
        *vertical-align: middle;
    }
    .mod-my-cp-dlg {
        overflow: hidden;
        zoom: 1;
        overflow: hidden;
        zoom: 1;
        a {
            &.lnk {
                color: #528fe9;
                text-decoration: none;
                color: #528fe9;
                text-decoration: none;
            }
        }
        .base-info {
            padding: 10px 10px 11px;
            padding: 10px;
            .k {
                color: #999;
                color: #999;
            }
            .v {
                zoom: 1;
                zoom: 1;
            }
        }
        .nav {
            padding: 10px 10px 12px;
            background: #f8f8f8;
            border-top: 1px #e5e5e5 solid;
            padding: 10px;
            background: #f8f8f8;
            border-top: 1px #e5e5e5 solid;
            h3 {
                padding: 0 0 6px;
                padding: 2px 0 7px;
            }
            .nav-1 {
                overflow: hidden;
                zoom: 1;
                margin-bottom: 6px;
                border: 1px #cecece solid;
                border-radius: 2px;
                background: #f7f7f7;
                overflow: hidden;
                zoom: 1;
                margin-bottom: 6px;
                border: 1px #cecece solid;
                border-radius: 2px;
                background: #f7f7f7;
                li {
                    float: left;
                    padding: 0 9px;
                    border-left: 1px #cecece solid;
                    margin-left: -1px;
                    float: left;
                    padding: 0 9px;
                    border-left: 1px #cecece solid;
                    margin-left: -1px;
                }
            }
            .nav-2 {
                text-align: center;
                zoom: 1;
                text-align: center;
                zoom: 1;
                li {
                    display: inline;
                    padding: 0 1px;
                    display: inline;
                    padding: 0 1px;
                    i {
                        vertical-align: middle;
                        margin-right: 2px;
                        vertical-align: middle;
                        margin-right: 2px;
                    }
                }
            }
        }
    }
    .mod-caizhong {
        padding-top: 9px;
        .group {
            float: left;
            height: 51px;
            background: url(https://p2.ssl.qhimg.com/t01b6f2490c269710de.png) no-repeat right -98px;
            display: inline;
            dt {
                float: left;
                width: 40px;
                margin-top: 2px;
            }
            dd {
                float: left;
                line-height: 22px;
                padding-top: 5px;
                display: inline;
                a {
                    float: left;
                    margin-right: 9px;
                    white-space: pre;
                    word-break: keep-all;
                    display: inline;
                }
                .more {
                    color: #f50000;
                }
            }
        }
        .group-1 {
            dd {
                width: 210px;
            }
        }
        .group-2 {
            dd {
                width: 330px;
            }
        }
        .group-3 {
            background: 0;
            dd {
                width: 260px;
            }
        }
    }
    .mod-hd {
        padding-top: 11px;
        .myorder-cz-logo {
            top: 3px;
        }
        .hd {
            position: relative;
            height: 38px;
            line-height: 30px;
            .label {
                float: right;
                display: inline;
                height: 31px;
                line-height: 31px;
                color: #882a00;
                padding: 0 10px;
                margin: 2px 0 0 0;
                text-align: center;
                border-radius: 3px;
                border: 1px solid #dca055;
                background: url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -476px;
            }
            .hdfr {
                padding-top: 8px;
                color: #1567dd;
                a {
                    padding: 0 9px;
                    color: #1567dd;
                }
            }
        }
        .cz-logo {
            position: absolute;
            left: 14px;
            top: -8px;
            width: 74px;
            height: 74px;
        }
        .cz-name {
            float: left;
            display: inline;
            margin-left: 92px;
            font-size: 16px;
            font-family: 'Microsoft Yahei';
            padding-top: 8px;
            em {
                color: #c70000;
            }
        }
        .case-data {
            float: left;
            display: inline;
            margin-left: 18px;
            padding-top: 8px;
            font-size: 14px;
        }
        .bd-main {
            height: 34px;
            border-top: 3px solid #4f8c00;
            border-bottom: 1px solid #d5d5d5;
            border-left: 1px solid #d5d5d5;
            border-right: 1px solid #d5d5d5;
            background: #efefef;
            background-image: linear-gradient(to bottom,#fdfdfd,#eaeaea);
            .fr {
                padding-right: 9px;
                line-height: 34px;
            }
            .cut-off {
                color: #666;
            }
        }
        .hd-tab {
            display: inline;
            float: left;
            margin-left: 92px;
            padding-top: 4px;
            li {
                &.active {
                    position: relative;
                    float: left;
                    padding: 0 15px;
                    background: #639f13;
                    color: #fff;
                    font-weight: bold;
                    line-height: 23px;
                    border-radius: 2px;
                    font-family: 'simsun';
                }
                i {
                    display: inline-block;
                    position: absolute;
                    top: 23px;
                    left: 50%;
                    height: 0;
                    width: 0;
                    margin-left: -4px;
                    border-color: #639f13 #eaeaea #eaeaea #eaeaea;
                    border-style: solid;
                    border-width: 4px 4px 0;
                    overflow: hidden;
                }
            }
        }
    }
    .c-topnav-bg {
        width: 100%;
        background: url(http://p0.qhimg.com/t012794630e336e2d97.png) repeat-x;
        border-bottom: 1px solid #d6d6d6;
    }
    .c-topnav {
        width: 980px;
        margin: 0 auto;
        .topnav-mobile {
            float: left;
            li {
                float: left;
                display: inline;
                margin-right: 10px;
                line-height: 28px;
            }
            .ico-mobile {
                float: left;
                width: 9px;
                height: 16px;
                margin: 6px 5px 0 0;
                background: url(http://p6.qhimg.com/t01c7487a034ab95c3a.png) no-repeat;
            }
            a {
                color: #666;
            }
        }
        .topnav-item {
            float: left;
            li {
                float: left;
                display: inline;
                line-height: 28px;
                margin-right: 10px;
                color: #878787;
                a {
                    color: #878787;
                }
            }
            .divider {
                color: #ddd;
            }
        }
        .topnav-login {
            position: relative;
            float: right;
            padding-top: 3px;
            z-index: 30;
            *font-family: simsun;
            .passport_login {
                display: inline-block;
                height: 20px;
                border-radius: 2px;
                padding: 0 5px;
                margin-left: 3px;
                border: 1px #b3b3b3 solid;
                background: #f8f8f8 url(http://p6.qhimg.com/t01e3ce2d2253e8ec99.png) repeat-x 0 -53px;
                cursor: pointer;
                line-height: 20px;
                color: #1582bd;
            }
            .logined {
                padding-top: 2px;
                .divider {
                    margin: 0 10px;
                    color: #d3d3d3;
                }
            }
            .ico-user {
                vertical-align: middle;
                margin-right: 3px;
            }
            .dropdown {
                position: relative;
                .caret {
                    margin-left: 4px;
                    width: 7px;
                    height: 12px;
                    background: url(http://p7.qhimg.com/t011c27a8359a9d73e1.png) no-repeat -28px -37px;
                }
                .caret-open {
                    background: url(http://p7.qhimg.com/t011c27a8359a9d73e1.png) no-repeat -40px -39px;
                }
            }
            .dropdown-active {
                clear: both;
                position: absolute;
                zoom: 1;
                z-index: 30;
                width: 230px;
                right: 37px;
                top: 27px;
                box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
                .mycp2 {
                    margin-top: -27px;
                }
                .dropdown-toggle {
                    float: right;
                    position: relative;
                    margin-bottom: -1px;
                    width: 70px;
                    margin-left: 60px;
                    padding: 4px 0 5px 11px;
                    border: 1px #cecece solid;
                    border-bottom: 0;
                    color: #528fe9;
                    background: #fff;
                }
                .dropdown-menu {
                    clear: both;
                    display: block;
                    border: 1px #cecece solid;
                    background: #fff;
                }
            }
        }
        .passport_reg {
            display: inline-block;
            height: 20px;
            border-radius: 2px;
            padding: 0 5px;
            margin-left: 3px;
            border: 1px #b3b3b3 solid;
            background: #f8f8f8 url(http://p6.qhimg.com/t01e3ce2d2253e8ec99.png) repeat-x 0 -53px;
            cursor: pointer;
            line-height: 20px;
            color: #1582bd;
        }
    }
    .c-topnav .topnav-login .logined a,.c-topnav .topnav-login .logined a:hover {
        color: #787878;
    }
    .c-topnav .topnav-login .logined a,.c-topnav .topnav-login span,.c-topnav .topnav-login .dropdown {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        *vertical-align: middle;
    }
    .c-hd {
        height: 65px;
        .search-form {
            margin-top: 18px;
            label {
                float: left;
                line-height: 29px;
                font-size: 14px;
                color: #999;
            }
            .select-box {
                position: relative;
                float: left;
                width: 75px;
                height: 23px;
                background: #fff;
                padding: 0 5px;
                margin-right: 5px;
                border: 3px #c4c4c4 solid;
                font-size: 12px;
                text-align: left;
                cursor: pointer;
                line-height: 23px;
                z-index: 1;
                .ico {
                    width: 0;
                    height: 0;
                    background: 0;
                    margin-top: 10px;
                    border-width: 4px 4px;
                    border-style: solid;
                    border-color: #7f7f7f #fff #fff;
                    font-size: 0;
                    line-height: 0;
                }
                .txt-box {
                    width: 100%;
                    margin-right: 0!important;
                    vertical-align: top!important;
                    display: inline-block;
                    height: 23px;
                    line-height: 23px;
                    em {
                        color: #bebebe;
                    }
                }
                .list {
                    display: block;
                    position: absolute;
                    top: 26px;
                    left: -3px;
                    _left: 2px;
                    width: 100%;
                    padding: 0 2px;
                    background: #fff;
                    border: 1px #d5d5d5 solid;
                    border-top: 0;
                    li {
                        padding: 0 5px;
                        margin: 0 -2px;
                        color: #666;
                        &:hover {
                            color: #fff;
                            background: #3985db;
                        }
                    }
                }
            }
            .search-btn {
                display: inline-block;
                width: auto;
                height: 29px;
                padding: 0 12px;
                background: #c74311;
                text-align: center;
                line-height: 29px;
                font-size: 14px;
                color: #fff;
                font-family: 'Microsoft Yahei';
                box-shadow: 0 0 4px rgba(0,0,0,0.3);
            }
            .ipt-box {
                float: left;
                .ipttxt {
                    width: 180px;
                    height: 19px;
                    margin-right: 5px;
                    border: 3px #c4c4c4 solid;
                    line-height: 19px;
                    color: #c6c6c6;
                }
            }
        }
    }
    .c-logo {
        float: left;
        display: inline;
        margin: 18px 25px 0 0;
        a {
            display: block;
            width: 188px;
            height: 30px;
            background: url(http://p9.qhimg.com/t01033594edfd4d0407.png) no-repeat;
        }
    }
    .c-sub-logo {
        float: left;
        height: 30px;
        margin-top: 18px;
        background: url(http://p0.qhimg.com/d/inn/a5734600/c-sub-logo.png) no-repeat;
    }
    .ckaij-sub-logo {
        width: 188px;
    }
    .cranking-sub-logo {
        width: 188px;
        background-position: 0 -35px;
    }
    .cggdt-sub-logo {
        width: 190px;
        background-position: 0 -105px;
    }
    .c-hd-r {
        float: right;
    }
    .c-nav {
        height: 38px;
        background: #bb3503;
        border: 1px solid #a02e00;
        ul {
            li {
                float: left;
                background: url(http://p2.qhimg.com/t0169144ff7dbd8aca9.png) no-repeat right;
                a {
                    display: block;
                    height: 38px;
                    padding: 0 15px;
                    font-size: 14px;
                    color: #fff;
                    line-height: 38px;
                    cursor: pointer;
                    _float: left;
                    &:hover {
                        color: #fff;
                        border: 1px solid #85000b;
                        margin: -1px;
                        background: #9c0011;
                        *position: relative;
                        *zoom: 1;
                    }
                }
                &.current {
                    margin: -1px;
                    background: #87000e;
                    border: 1px solid #700009;
                    a {
                        &:hover {
                            border: 0;
                            background: 0;
                            margin: 0;
                        }
                    }
                }
                &.last {
                    background: 0;
                    a {
                        padding: 0 22px;
                    }
                }
            }
        }
    }
    .c-site-nav {
        width: 100%;
        background: #f4f4f4;
        .site-nav-bd {
            margin: 0 auto;
            width: 980px;
            height: 30px;
            background: #f4f4f4;
        }
        .sitenav-item {
            float: left;
            li {
                float: left;
                display: inline;
                margin-right: 15px;
                color: #666;
                line-height: 30px;
                a {
                    color: #666;
                }
                .orz {
                    color: #ce4f45;
                }
                .lot_enter {
                    font-weight: bold;
                    color: #8a0b00;
                }
            }
        }
        .nav-login {
            padding-right: 0;
            margin-top: 4px;
            .dropdown-active {
                clear: both;
                position: absolute;
                zoom: 1;
                z-index: 30;
                width: 225px;
                right: 42px;
                top: 24px;
                _top: 22px;
                box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
                background: url(about:blank);
                .dropdown-toggle {
                    float: right;
                    position: relative;
                    margin-bottom: -1px;
                    width: 70px;
                    margin-left: 60px;
                    padding: 3px 0 5px 11px;
                    _padding-top: 5px;
                    border: 1px #cecece solid;
                    border-bottom: 0;
                    color: #528fe9;
                    background: #fff;
                }
                .mycp2 {
                    margin-top: -27px;
                }
                .dropdown-menu {
                    clear: both;
                    display: block;
                    border: 1px #cecece solid;
                    background: #fff;
                }
            }
        }
    }
    .lottery-all {
        position: relative;
        z-index: 30;
        padding: 0 5px;
    }
    .lottery-all-list {
        display: none;
        position: absolute;
        top: 30px;
        left: 0;
        border: 2px solid #8a0b00;
        background: #ffeab7;
        z-index: 30;
        .lottery-all-arrow {
            position: absolute;
            width: 10px;
            height: 7px;
            left: 50px;
            top: -7px;
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -407px;
        }
        .lottery-map {
            .lottery-map-item {
                padding: 10px 6px 10px 12px;
                border-top: 1px solid #fff8e7;
                border-bottom: 1px solid #fcdf97;
            }
            .lottery-map-item-first {
                border-top: 0;
            }
            .lottery-map-item-last {
                border-bottom: 0;
            }
            .lottery-item-tit {
                display: inline-block;
                width: 20px;
                height: 30px;
                background: url(https://p5.ssl.qhimg.com/t012df21bdf9871fbb0.png) no-repeat;
                vertical-align: middle;
            }
            .item-tit-1 {
                background-position: 0 0;
            }
            .item-tit-2 {
                background-position: 0 -38px;
            }
            .item-tit-3 {
                background-position: 0 -75px;
            }
            ul {
                width: 182px;
                display: inline-block;
                *display: inline;
                *zoom: 1;
                padding-left: 5px;
                vertical-align: middle;
                li {
                    margin: 0 5px;
                    line-height: 22px;
                    *white-space: nowrap;
                    a {
                        color: #8a0b00;
                    }
                }
            }
        }
    }
    .lottery-all-hover {
        background: #e8e8e8;
        .lottery-all-list {
            display: none;
        }
    }
    .c-header {
        width: 100%;
        background: #bc0606;
    }
    .c-header-bd {
        width: 980px;
        margin: 0 auto;
        height: 90px;
        overflow: hidden;
        clear: both;
        .cp-logo {
            float: left;
            margin: 21px 9px 0 0;
            a {
                display: block;
                width: 217px;
                height: 60px;
                background: url(https://p3.ssl.qhimg.com/t010d523e3f01650297.png) no-repeat;
            }
        }
        .c-sub {
            float: left;
            font-weight: normal;
            margin-top: 27px;
            font-family: 'Microsoft Yahei';
            color: #fff;
            font-size: 22px;
            .stext {
                color: #ccc;
                font-size: 16px;
            }
        }
        .c-hd-r {
            float: right;
        }
    }
    .c-main-nav {
        width: 980px;
        margin: 0 auto;
        height: 33px;
        background: #8a0b00;
        z-index: 25;
        ul {
            li {
                position: relative;
                z-index: 2;
                a {
                    display: block;
                    color: #fff;
                    line-height: 33px;
                    padding: 0 17px;
                    font-size: 14px;
                    &:hover {
                        background: #a50000;
                        color: #fff;
                    }
                    .arrow {
                        display: inline-block;
                        width: 10px;
                        height: 5px;
                        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -414px;
                        vertical-align: middle;
                        -webkit-transition: .3s ease-in;
                        -moz-transition: .3s ease-in;
                        -o-transition: .3s ease-in;
                        transition: .3s ease-in;
                        _display: none;
                    }
                }
                &.hover {
                    a {
                        .arrow {
                            -webkit-transform: rotate(180deg);
                            -moz-transform: rotate(180deg);
                            -o-transform: rotate(180deg);
                            -ms-transform: rotate(0);
                            transform: rotate(180deg);
                        }
                    }
                }
                &.current {
                    a {
                        background: #b10e00;
                    }
                    .child-nav {
                        a {
                            background: #fff1bf;
                            font-weight: normal;
                        }
                    }
                }
                .child-nav {
                    position: absolute;
                    left: 0;
                    top: 33px;
                    border: 2px solid #a50000;
                    background: #fff1bf;
                    border-top: 0;
                    z-index: 26;
                    a {
                        padding: 0;
                        text-align: center;
                        color: #a50000;
                        &:hover {
                            background: #ffe199;
                        }
                    }
                }
            }
        }
    }
    .c-main-nav ul,.c-main-nav ul li {
        float: left;
    }
    .c-indexheader {
        background: #fff;
        .c-main-nav {
            ul {
                li {
                    &.current {
                        a {
                            background: #cb1200;
                        }
                        .child-nav {
                            a {
                                background: 0;
                            }
                        }
                    }
                }
            }
        }
        .c-header-bd {
            height: 63px;
            .cp-logo {
                margin: 14px 9px 0 0;
                a {
                    width: 385px;
                    height: 35px;
                    background: url(https://p4.ssl.qhimg.com/t011118a7fec39a3960.png) no-repeat;
                }
            }
        }
        .c-hd-r {
            img {
                height: 63px;
                vertical-align: middle;
            }
        }
    }
    .c-main-nav-box {
        background: #8a0b00;
    }
    .home-header {
        width: 980px;
        margin: 0 auto;
        a {
            &.logo {
                width: 186px;
                height: 52px;
                float: left;
                margin-top: 16px;
                display: block;
                font-size: 0;
                line-height: 0;
                background: url(https://p1.ssl.qhimg.com/t0121b5db4a3baacccb.png);
            }
            &.newlogo {
                background: url(https://p2.ssl.qhimg.com/t01d394aad527e7e7e7.png);
            }
        }
        .head-ad {
            float: left;
            img {
                height: 84px;
                vertical-align: middle;
            }
        }
    }
    .home-nav-warpper {
        width: 100%;
        background: #d21e1e;
        height: 38px;
        z-index: 25;
        position: relative;
    }
    .home-nav {
        width: 980px;
        margin: 0 auto;
        color: #fff;
        line-height: 38px;
        font-size: 14px;
        ul {
            width: 754px;
            float: left;
            margin-left: -4px;
            li {
                width: 72px;
                margin: 0 3px;
                float: left;
                display: inline;
                height: 38px;
                text-align: center;
                position: relative;
                a {
                    color: #fff;
                    position: relative;
                    width: 72px;
                    height: 38px;
                    display: inline-block;
                    &:hover {
                        color: #fff;
                    }
                }
                &.home-nav-telephone {
                    background: url(http://p0.qhimg.com/t010c4befdc5d4a99f1.png) no-repeat 5px center;
                    padding-left: 12px;
                    margin-right: 0;
                    width: 85px;
                    &:hover {
                        background: #931515 url(http://p0.qhimg.com/t010c4befdc5d4a99f1.png) no-repeat 5px center;
                    }
                }
                .child-nav {
                    position: absolute;
                    left: 0;
                    top: 38px;
                    border: 2px solid #a50000;
                    background: #fff6d3;
                    border-top: 0;
                    z-index: 5;
                    width: 68px;
                    a {
                        padding: 0;
                        text-align: center;
                        color: #a50000;
                        border-bottom: 1px solid #fceeb2;
                        display: inline-block;
                        width: 68px;
                        background: #fff6d3;
                        &:hover {
                            background: #ffe199;
                        }
                    }
                }
                &.current {
                    .child-nav {
                        a {
                            background: #fff6d3;
                            font-weight: normal;
                        }
                    }
                }
                &.wd {
                    width: 60px;
                    a {
                        width: 60px;
                    }
                    .child-nav {
                        width: 56px;
                        a {
                            width: 56px;
                        }
                    }
                }
                .home-app-ewm {
                    a {
                        display: inline;
                    }
                }
            }
        }
    }
    .home-nav ul li.current,.home-nav ul li:hover {
        background: #931515;
        width: 72px;
        height: 38px;
    }
    .menu {
        width: 220px;
        background: #a01e14;
        display: block;
        float: left;
        padding-left: 10px;
    }
    .duijiang-home {
        color: #fff;
        margin-right: 8px;
        font-size: 12px;
    }
    .buy-dat {
        color: #fff;
    }
    .buy-dat:hover,.duijiang-home:hover {
        color: #fff;
        text-decoration: underline;
    }
    .nav-cz {
        position: relative;
        cursor: pointer;
        background: #a01e14 url(https://p3.ssl.qhimg.com/t018c5e1f0ff3f962f4.png) 200px center no-repeat;
    }
    .nav-cz-cont {
        position: absolute;
        top: 38px;
        left: 0;
        background: #fff6d3;
        border: 2px solid #b70e0e;
        width: 226px;
        border-top: 0;
        padding-top: 10px;
    }
    .nav-cz-icon {
        width: 34px;
        float: left;
        display: inline-block;
        line-height: 15px;
        position: relative;
        margin: 7px 12px;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        cursor: pointer;
    }
    .nav-cz-list {
        border-bottom: 1px solid #fceeb2;
        background: #fff6d3;
        float: left;
    }
    .cz-title-list {
        font-size: 12px;
        line-height: 21px;
        float: right;
        width: 160px;
        margin: 10px 0;
        margin-right: 2px;
        a {
            margin: 0 2px;
            position: relative;
            display: inline-block;
            width: 75px;
            &:hover {
                color: #a01e14;
                text-decoration: none;
            }
        }
    }
    .cz-add-img {
        position: absolute;
        top: 5px;
        left: 47px;
    }
    .cz-add-new {
        position: absolute;
        top: -13px;
        left: 20px;
    }
    .home-app-ewm {
        position: absolute;
        top: 38px;
        right: 0;
        border: 1px solid #a01e14;
        width: 205px;
        height: 255px;
        text-align: center;
        background: #fff;
        color: #333;
        font-family: "Microsoft YaHei";
        h3 {
            margin: 0;
            font-size: 16px;
        }
        p {
            margin-top: -10px;
            font-size: 12px;
            line-height: 24px;
            margin-bottom: 5px;
        }
        input {
            border: 1px solid #797979;
            margin-top: -12px;
            _margin-top: 0;
            &.home-app-value {
                width: 117px;
                height: 22px;
                font-size: 12px;
                line-height: 22px;
                color: #999;
                padding-left: 2px;
            }
            &.app-dispatch {
                background: #f96;
                height: 26px;
                border-left: none;
                color: #fff;
            }
        }
    }
    .home-app-point {
        color: #c33;
        text-align: left;
        padding-left: 21px;
        line-height: 15px;
    }
    .notice-cp {
        width: 600px;
        height: 400px;
        background: #f9f9f9;
        font-size: 14px;
    }
    .notice-title {
        height: 38px;
        background: #f65f13;
        color: #fff;
        font-weight: bold;
        line-height: 38px;
        padding-left: 20px;
    }
    .notice-close {
        position: absolute;
        right: 10px;
        height: 10px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        top: -5px;
        display: inline-block;
    }
    .notice-point {
        background: url(https://p2.ssl.qhimg.com/t01046ffb2ba417c1d2.png) no-repeat;
        border-bottom: 1px dotted #999;
        line-height: 30px;
        width: 545px;
        margin: 20px auto 20px 30px;
        padding: 20px 0 20px 0;
        p {
            margin-left: 115px;
        }
    }
    .notice-choose {
        width: 575px;
        margin: 25px auto 0;
        b {
            width: 100%;
            display: inline-block;
        }
        ul {
            width: 380px;
            float: left;
            margin: 10px 0 0 20px;
            display: inline;
            li {
                float: left;
                width: 106px;
                height: 36px;
                line-height: 36px;
                margin: 10px;
                display: inline;
                font-weight: bold;
                text-align: center;
                a {
                    color: #fff;
                }
                &.blue {
                    background: #acd2fa;
                    &:hover {
                        background: #80bcfb;
                    }
                }
                &.green {
                    background: #9ed47a;
                    &:hover {
                        background: #83b860;
                    }
                }
                &.red {
                    background: #f28c8c;
                    &:hover {
                        background: #dc6464;
                    }
                }
            }
        }
        .ewm {
            text-align: center;
            text-align: center;
            margin-top: 20px;
            float: right;
            margin-right: 20px;
            span {
                font-size: 12px;
            }
        }
    }
    .notice-title,.notice-title-green,.notice-title-blue,.notice-title-red {
        height: 38px;
        background: #f65f13;
        color: #fff;
        font-weight: bold;
        line-height: 38px;
        padding-left: 20px;
    }
    .notice-title-green {
        background: #4e980e;
    }
    .notice-title-blue {
        background: #0668bc;
    }
    .notice-title-red {
        background: #c2502c;
    }
    .mask {
        background: #000;
        opacity: .3;
    }
    .panel {
        z-index: 299;
        position: relative;
        text-align: left;
        .hd {
            zoom: 1;
        }
        .close {
            cursor: pointer;
        }
        .resize {
            position: absolute;
            right: 0;
            bottom: 0;
            width: 10px;
            height: 10px;
        }
        .panel-iframe {
            width: 100%;
            height: 100%;
            _height: 3000px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 0;
            filter: alpha(opacity=0);
            -ms-filter: alpha(opacity=0);
        }
        .checkcode {
            display: inline-block;
            border: 1px solid #eee;
            vertical-align: middle;
            img {
                vertical-align: middle;
                height: 34px;
            }
        }
    }
    .panel .co1,.panel .co2,.panel .cue,.panel .sd,.panel .close,.panel .resize {
        z-index: 3;
    }
    .panel-t0 {
        position: relative;
        zoom: 1;
        z-index: 0;
        .panel-content {
            position: relative;
            z-index: 2;
        }
    }
    .panel-drag-enabled {
        cursor: move;
    }
    .panel-t1 {
        position: relative;
        zoom: 1;
        z-index: 0;
        _padding-bottom: 3px;
        _overflow-y: hidden;
        .panel-content {
            position: relative;
            z-index: 2;
            background: #fff;
            border: 0;
            .hd {
                background: #c22708 url(https://p3.ssl.qhimg.com/t019e71cc1d6a58b175.png) repeat-x;
                zoom: 1;
                h3 {
                    font-size: 14px;
                    font-weight: bold;
                    color: #fff;
                    padding: 8px 14px 9px;
                }
            }
            .ft {
                background: #dbf4bf;
                text-align: center;
                button {
                    margin: 3px 5px;
                    font-size: 14px;
                    padding: 0 8px;
                    cursor: pointer;
                }
            }
        }
        .sd {
            display: block;
            width: 100%;
            height: 100%;
            _height: 3000px;
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            box-shadow: 0 0 10px rgba(0,0,0,0.4);
        }
        .close {
            width: 13px;
            height: 12px;
            display: block;
            overflow: hidden;
            text-indent: -9999px;
            background: url(https://p3.ssl.qhimg.com/t019e71cc1d6a58b175.png) no-repeat 0 -172px;
            position: absolute;
            top: 14px;
            right: 14px;
        }
    }
    .panel-t2 {
        border: 1px solid #eebd54;
        background-color: #fffee6;
        position: relative;
        z-index: 0;
        zoom: 1;
        _overflow-y: hidden;
        _height: 100%;
        .panel-content {
            position: relative;
            z-index: 2;
            .hd {
                h3 {
                    font-weight: bold;
                    font-size: 12px;
                    padding: 7px 8px;
                }
            }
        }
        .co1 {
            position: absolute;
            top: 0;
            background-position: 100% 0;
            top: -1px;
            span {
                background-position: 0 -8px;
            }
        }
        .co2 {
            position: absolute;
            background-position: 100% -4px;
            bottom: -1px;
            _bottom: -2px;
            span {
                background-position: 0 -12px;
            }
        }
        .close {
            width: 16px;
            height: 16px;
            display: block;
            overflow: hidden;
            text-indent: -9999px;
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -63px -17px;
            position: absolute;
            top: 5px;
            right: 5px;
            &:hover {
                background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -94px -17px;
            }
        }
    }
    .panel-t2 .co1,.panel-t2 .co1 span,.panel-t2 .co2,.panel-t2 .co2 span {
        position: relative;
        display: block;
        clear: both;
        font-size: 0;
        height: 4px;
        background: url(https://p0.ssl.qhimg.com/t01a85a64c00c6708f9.png) no-repeat;
    }
    .panel-t2 .co1,.panel-t2 .co2 {
        width: 100%;
        right: -1px;
    }
    .panel-t2 .co1 span,.panel-t2 .co2 span {
        width: 4px;
        left: -2px;
    }
    .panel-t2-lb .cue,.panel-t2-lt .cue,.panel-t2-tl .cue,.panel-t2-tr .cue,.panel-t2-rt .cue,.panel-t2-rb .cue,.panel-t2-br .cue,.panel-t2-bl .cue {
        width: 12px;
        height: 13px;
        background: url(https://p2.ssl.qhimg.com/t015e99a6c4cca7b6b7.png) 0 0 no-repeat;
        position: absolute;
        z-index: 5;
    }
    .panel-t2-lb {
        .cue {
            width: 13px;
            height: 12px;
            background-position: 0 -40px;
            left: -12px;
            bottom: 20px;
        }
    }
    .panel-t2-lt {
        .cue {
            width: 13px;
            height: 12px;
            background-position: -40px -40px;
            left: -12px;
            top: 20px;
        }
    }
    .panel-t2-tl {
        .cue {
            background-position: -80px -40px;
            left: 20px;
            top: -12px;
        }
    }
    .panel-t2-tr {
        .cue {
            background-position: -120px -40px;
            right: 20px;
            top: -12px;
        }
    }
    .panel-t2-rt {
        .cue {
            background-position: -160px -40px;
            right: -12px;
            top: 20px;
        }
    }
    .panel-t2-rb {
        .cue {
            background-position: -200px -40px;
            right: -12px;
            bottom: 20px;
        }
    }
    .panel-t2-br {
        .cue {
            background-position: -240px -40px;
            right: 20px;
            bottom: -12px;
        }
    }
    .panel-t2-bl {
        .cue {
            background-position: -280px -40px;
            left: 20px;
            bottom: -12px;
        }
    }
    .panel-t3 {
        position: relative;
        zoom: 1;
        z-index: 0;
        _padding-bottom: 3px;
        _overflow-y: hidden;
        .panel-content {
            position: relative;
            z-index: 2;
            border: 1px solid #1dace8;
            background: #fff;
            .hd {
                background: #bfecff;
                h3 {
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    padding: 5px 7px 3px 7px;
                }
            }
        }
        .sd {
            display: block;
            background: #333;
            width: 100%;
            height: 100%;
            _height: 3000px;
            position: absolute;
            top: 3px;
            left: 3px;
            z-index: -1;
            opacity: .20;
            filter: alpha(opacity="20");
        }
        .close {
            width: 16px;
            height: 16px;
            display: block;
            overflow: hidden;
            text-indent: -9999px;
            background: url(https://p1.ssl.qhimg.com/t016fca81aeac2bbffd.png) no-repeat;
            position: absolute;
            top: 5px;
            right: 8px;
            &:hover {
                background: url(https://p1.ssl.qhimg.com/t016fca81aeac2bbffd.png) no-repeat 0 -26px;
            }
        }
    }
    .panel-t4 {
        position: relative;
        zoom: 1;
        z-index: 0;
        _padding-bottom: 3px;
        _overflow-y: hidden;
        .panel-content {
            position: relative;
            z-index: 2;
            border: 1px solid #f1c463;
            background: #fff;
            .hd {
                background: #f6deaa;
                h3 {
                    font-size: 14px;
                    font-weight: bold;
                    color: #000;
                    padding: 4px 7px 1px 7px;
                }
            }
        }
        .sd {
            display: block;
            background: #333;
            width: 100%;
            height: 100%;
            _height: 3000px;
            position: absolute;
            top: 3px;
            left: 3px;
            z-index: -1;
            opacity: .20;
            filter: alpha(opacity="20");
        }
        .close {
            width: 16px;
            height: 16px;
            display: block;
            overflow: hidden;
            text-indent: -9999px;
            background: url(https://p1.ssl.qhimg.com/t016fca81aeac2bbffd.png) no-repeat;
            position: absolute;
            top: 5px;
            right: 8px;
            &:hover {
                background: url(https://p1.ssl.qhimg.com/t016fca81aeac2bbffd.png) no-repeat 0 -26px;
            }
        }
    }
    .panel-t5 {
        position: relative;
        zoom: 1;
        z-index: 0;
        _padding-bottom: 3px;
        _overflow-y: hidden;
        zoom: 1;
        z-index: 0;
        _padding-bottom: 3px;
        _overflow-y: hidden;
        .panel-content {
            position: relative;
            z-index: 2;
            border: 1px solid #a1a1a1;
            background: #fff;
            position: relative;
            z-index: 2;
            border: 1px solid #a1a1a1;
            background: #fff;
            .hd {
                background: #f6deaa;
                background: url(https://p5.ssl.qhimg.com/t015890cbd2586a8270.png) repeat-x;
                border-bottom: 1px solid #d6d6d6;
                h3 {
                    font-size: 14px;
                    font-weight: bold;
                    color: #000;
                    padding: 4px 7px 1px 7px;
                    font-size: 108%;
                    font-weight: bold;
                    color: #000;
                    padding: .3em .5em .1em .5em;
                }
            }
        }
        .sd {
            display: block;
            background: #333;
            width: 100%;
            height: 100%;
            _height: 3000px;
            position: absolute;
            top: 3px;
            left: 3px;
            z-index: -1;
            opacity: .20;
            filter: alpha(opacity="20");
            display: block;
            background: #333;
            width: 100%;
            height: 100%;
            _height: 3000px;
            position: absolute;
            top: 3px;
            left: 3px;
            z-index: -1;
            opacity: .20;
            filter: alpha(opacity="20");
        }
        .close {
            width: 7px;
            height: 7px;
            display: block;
            overflow: hidden;
            text-indent: -9999px;
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -63px 0;
            position: absolute;
            top: .4em;
            right: .6em;
        }
    }
    .panel-t5-lt {
        .cue {
            width: 18px;
            height: 18px;
            display: block;
            overflow: hidden;
            text-indent: -9999px;
            background: url(https://p2.ssl.qhimg.com/t015e99a6c4cca7b6b7.png) -40px 0 no-repeat;
            position: absolute;
            top: 30px;
            left: -17px;
            background-position: -40px 0;
            top: 30px;
            left: -17px;
        }
    }
    .panel-t5-lb .cue,.panel-t5-lt .cue,.panel-t5-tl .cue,.panel-t5-tr .cue,.panel-t5-rt .cue,.panel-t5-rb .cue,.panel-t5-br .cue,.panel-t5-bl .cue {
        width: 20px;
        height: 20px;
        background: url(https://p0.ssl.qhimg.com/t01a6789d0e12378608.gif) 0 0 no-repeat;
        position: absolute;
        z-index: 5;
    }
    .panel-t5-lb {
        .cue {
            background-position: 0 0;
            bottom: 30px;
            left: -17px;
        }
    }
    .panel-t5-tr {
        .cue {
            background-position: -80px -1px;
            right: 30px;
            top: -17px;
        }
    }
    .panel-t5-tl {
        .cue {
            background-position: -120px -1px;
            left: 30px;
            top: -17px;
        }
    }
    .panel-t5-rb {
        .cue {
            width: 21px;
            height: 21px;
            background-position: -160px 0;
            right: -20px;
            bottom: 30px;
        }
    }
    .panel-t5-rt {
        .cue {
            width: 21px;
            height: 21px;
            background-position: -200px 0;
            right: -20px;
            top: 30px;
        }
    }
    .panel-t5-bl {
        .cue {
            width: 21px;
            height: 21px;
            background-position: -240px 0;
            left: 30px;
            bottom: -19px;
            _bottom: -17px;
        }
    }
    .panel-t5-br {
        .cue {
            width: 21px;
            height: 21px;
            background-position: -280px 0;
            right: 30px;
            bottom: -19px;
            _bottom: -17px;
        }
    }
    .panel-t5-tr .sd,.panel-t5-tl .sd,.panel-t5-br .sd,.panel-t5-bl .sd {
        _height: expression(this.parentNode.offsetHeight-3);
    }
    .panel-t5-tr,.panel-t5-tl,.panel-t5-br,.panel-t5-bl {
        _overflow-y: visible;
    }
    .panel-t6 {
        position: relative;
        zoom: 1;
        z-index: 0;
        _padding-bottom: 3px;
        _overflow-y: hidden;
        .panel-content {
            position: relative;
            z-index: 2;
            border: 1px solid #f1ca6f;
            background: #fffee6;
        }
        .sd {
            display: block;
            background: #333;
            width: 100%;
            height: 100%;
            _height: 3000px;
            position: absolute;
            top: 3px;
            left: 3px;
            z-index: -1;
            opacity: .20;
            filter: alpha(opacity="20");
        }
        .close {
            width: 16px;
            height: 16px;
            display: block;
            overflow: hidden;
            text-indent: -9999px;
            background: url(https://p1.ssl.qhimg.com/t016fca81aeac2bbffd.png) no-repeat;
            position: absolute;
            top: 5px;
            right: 8px;
            &:hover {
                background: url(https://p1.ssl.qhimg.com/t016fca81aeac2bbffd.png) no-repeat 0 -26px;
            }
        }
    }
    .panel-t7 {
        position: relative;
        zoom: 1;
        z-index: 0;
        border: 1px solid #cfcfcf;
        background: #f3f5f7;
        padding: 10px 14px;
        border-radius: 3px;
        box-shadow: 0 0 2px rgba(0,0,0,.15);
        color: #666;
        .close {
            position: absolute;
            right: 14px;
            top: 10px;
            background: url('https://p5.ssl.qhimg.com/t0192942babe40f23d5.png') no-repeat -63px 6px;
            padding-left: 10px;
        }
        table {
            width: 100%;
            text-align: center;
            th {
                text-align: center;
                font-weight: bold;
                color: #444;
            }
            td {
                border-right: 1px solid #e8e9eb;
                border-bottom: 1px solid #e8e9eb;
                line-height: 20px;
            }
        }
        td {
            i {
                color: #cf1917;
                font-style: normal;
                &.cl {
                    color: #528fe9;
                }
            }
        }
        .sd {
            position: absolute;
            left: 60px;
            background: url('https://p5.ssl.qhimg.com/t0192942babe40f23d5.png') no-repeat -33px -20px;
            height: 10px;
            top: -5px;
            width: 9px;
            height: 5px;
            z-index: 3;
        }
    }
    .panel-t8 {
        position: relative;
        zoom: 1;
        z-index: 0;
        border: 1px #dd9d68 solid;
        background: #fffaee;
        padding: 10px 14px;
        border-radius: 3px;
        box-shadow: 0 0 2px rgba(0,0,0,.15);
        color: #666;
        .close {
            position: absolute;
            right: 14px;
            top: 10px;
            background: url('https://p0.ssl.qhimg.com/t01da8d666c88dcbd62.png') no-repeat 0 center;
            padding-left: 10px;
        }
        .bd {
            color: #666;
            overflow: hidden;
            zoom: 1;
            span {
                float: left;
                font-weight: bold;
                color: #666;
            }
            div {
                overflow: hidden;
                zoom: 1;
            }
        }
        .sd {
            position: absolute;
            background: url('https://p5.ssl.qhimg.com/t0192942babe40f23d5.png') no-repeat -34px -54px;
            height: 10px;
            top: -5px;
            width: 9px;
            height: 5px;
            z-index: 3;
        }
        .tl {
            left: 20px;
        }
        .tr {
            right: 20px;
        }
        .bl {
            left: 20px;
        }
        .br {
            right: 20px;
        }
    }
    .bb-confirm-success {
        background: url(https://p2.ssl.qhimg.com/t01f3e637fee8ca571e.png) 27px 18px no-repeat #feffea;
        padding: 23px 20px 20px 95px;
        h4 {
            font-size: 14px;
            font-weight: bold;
        }
        p {
            font-size: 12px;
            margin-top: 4px;
            &.submit {
                margin-top: 10px;
            }
        }
    }
    .bb-confirm-warning {
        background: url(https://p3.ssl.qhimg.com/t0136ba4f7564f44ff2.png) 27px 18px no-repeat #feffea;
        padding: 23px 20px 20px 95px;
        h4 {
            font-size: 14px;
            font-weight: bold;
        }
        p {
            font-size: 12px;
            margin-top: 4px;
            &.submit {
                margin-top: 10px;
            }
        }
    }
    .bb-confirm-failure {
        background: url(https://p5.ssl.qhimg.com/t01cacc390ba0141645.png) 27px 18px no-repeat #feffea;
        padding: 23px 20px 20px 95px;
        h4 {
            font-size: 14px;
            font-weight: bold;
        }
        p {
            font-size: 12px;
            margin-top: 4px;
            &.submit {
                margin-top: 10px;
            }
        }
    }
    .bb-box-success {
        background: url(https://p2.ssl.qhimg.com/t01f3e637fee8ca571e.png) 27px 110px no-repeat #feffea;
        border: 1px solid #ffe067;
        padding: 110px 2em 2em 100px;
        min-height: 50px;
        _height: 50px;
        zoom: 1;
        h4 {
            font-size: 123.1%;
            font-weight: bold;
            &.lonely {
                margin: 0;
                padding: .7em 0 0;
            }
        }
        p {
            font-size: 12px;
            line-height: 1.5;
            margin-top: 7px;
        }
        ul {
            margin-top: 10px;
        }
        li {
            list-style: disc;
            margin: 7px 0 0 17px;
            font-size: 12px;
        }
    }
    .bb-box-warning {
        background: url(https://p3.ssl.qhimg.com/t0136ba4f7564f44ff2.png) 27px 110px no-repeat #feffea;
        border: 1px solid #ffe067;
        padding: 110px 2em 2em 100px;
        min-height: 50px;
        _height: 50px;
        zoom: 1;
        h4 {
            font-size: 123.1%;
            font-weight: bold;
            &.lonely {
                margin: 0;
                padding: .7em 0 0;
            }
        }
        p {
            font-size: 12px;
            line-height: 1.5;
            margin-top: 7px;
        }
        ul {
            margin-top: 10px;
        }
        li {
            list-style: disc;
            margin: 7px 0 0 17px;
            font-size: 12px;
        }
    }
    .bb-box-failure {
        background: url(https://p5.ssl.qhimg.com/t01cacc390ba0141645.png) 27px 110px no-repeat #feffea;
        border: 1px solid #ffe067;
        padding: 110px 2em 2em 100px;
        min-height: 50px;
        _height: 50px;
        zoom: 1;
        h4 {
            font-size: 123.1%;
            font-weight: bold;
            &.lonely {
                margin: 0;
                padding: .7em 0 0;
            }
        }
        p {
            font-size: 12px;
            line-height: 1.5;
            margin-top: 7px;
        }
        ul {
            margin-top: 10px;
        }
        li {
            list-style: disc;
            margin: 7px 0 0 17px;
            font-size: 12px;
        }
    }
    .panel-help {
        position: relative;
        zoom: 1;
        z-index: 0;
        _padding-bottom: 3px;
        _overflow-y: hidden;
        .panel-content {
            position: relative;
            z-index: 2;
            border: 1px solid #808080;
            background: #fff;
            .hd {
                background: #e0e1e2 url(https://p5.ssl.qhimg.com/t015890cbd2586a8270.png) repeat-x 0 -320px;
                border-bottom: 1px solid #ccc;
                h3 {
                    font-size: 12px;
                    font-weight: bold;
                    color: #000;
                    padding: 2px 8px 2px 8px;
                }
            }
            .bd {
                font-size: 12px;
                padding: 5px 10px 10px;
                background: #f2f2f2;
                color: #333;
                line-height: 1.7;
            }
        }
        .close {
            width: 25px;
            height: 15px;
            display: block;
            overflow: hidden;
            text-indent: -9999px;
            background: url(https://p1.ssl.qhimg.com/t0120aa25441c32647c.png) no-repeat;
            position: absolute;
            top: 4px;
            right: 8px;
            &:hover {
                background-position: 0 -15px;
            }
        }
    }
    .panel-login {
        width: 384px;
        .form-panel {
            .is-keep {
                padding-left: 46px;
            }
            .btns {
                padding-left: 46px;
                overflow: hidden;
                height: 36px;
            }
        }
        .toreg {
            padding: 6px 0 6px 46px;
            border-top: 1px #ececec dotted;
            font-family: tahoma;
            color: #ccc;
            .ico {
                vertical-align: middle;
            }
        }
        .err {
            color: #f00;
            margin-left: 200px;
        }
    }
    .panel-reg {
        width: 434px;
        .form-panel {
            padding-top: 24px;
            .fm-item {
                margin-bottom: 0;
            }
            .btn {
                margin-left: 77px;
            }
        }
        .tab-content {
            background: #fff;
            border: 1px #d8d8d8 solid;
            border-top: 0;
        }
        .nav-type {
            height: 23px;
            padding-top: 10px;
            border-bottom: 1px solid #e7e7e7;
        }
        .nav-type-tab {
            height: 24px;
            padding-top: 10px;
            .v {
                display: inline-block;
                span {
                    &:hover {
                        cursor: pointer;
                    }
                }
            }
            .type-item {
                display: inline-block;
                height: 20px;
                line-height: 20px;
                background: #dca0a0;
                color: #fff;
                padding: 0 5px;
                cursor: pointer;
            }
            .driver {
                color: #dadada;
            }
        }
    }
    .panel-reg-bd {
        padding: 25px 31px;
        background: #f2f2f2;
    }
    .panel-login .nav-tab,.panel-reg .nav-tab {
        border-bottom: 1px #d26060 solid;
    }
    .panel-login .nav-tab li,.panel-reg .nav-tab li {
        position: relative;
        float: left;
        margin-right: 3px;
        margin-top: 1px;
        padding: 0 31px;
        height: 30px;
        line-height: 30px;
        border: 1px #e4b8b8 solid;
        border-radius: 2px 2px 0 0;
        border-bottom: 0;
        color: #c8220b;
        cursor: pointer;
        background: url(https://p3.ssl.qhimg.com/t019e71cc1d6a58b175.png) repeat-x 0 -132px;
    }
    .panel-login .nav-tab li .ico-active1,.panel-reg .nav-tab li .ico-active1 {
        display: none;
        position: absolute;
        left: 50%;
        bottom: -1px;
        _bottom: -2px;
        width: 12px;
        height: 5px;
        margin-left: -6px;
        font-size: 0;
        line-height: 0;
        background: url(https://p3.ssl.qhimg.com/t019e71cc1d6a58b175.png) no-repeat 0 -194px;
    }
    .panel-login .nav-tab li.active,.panel-reg .nav-tab li.active {
        font-weight: bold;
        color: #fcf3f3;
        height: 31px;
        margin-top: 0;
        border-color: #d26060;
        background-position: 0 -91px;
    }
    .panel-login .nav-tab li.active .ico-active1,.panel-reg .nav-tab li.active .ico-active1 {
        display: block;
    }
    .autobuy {
        .form-panel {
            .btn {
                margin-left: 0;
            }
        }
    }
    .panel-login-bd {
        padding: 5px 24px 12px;
        .form-panel {
            input {
                &.text {
                    width: 238px;
                }
            }
            .fm-item {
                .k {
                    width: auto;
                }
            }
        }
    }
    .coop-login {
        width: 398px;
        .panel-login-bd {
            .form-panel {
                input {
                    &.text {
                        width: 200px;
                        height: 26px;
                        line-height: normal;
                        *line-height: 26px;
                    }
                }
                .fm-item {
                    .k {
                        width: 62px;
                    }
                }
            }
        }
        .errtips {
            height: 24px;
            margin-left: 60px;
            line-height: 24px;
            margin-top: 3px;
            width: 600px;
        }
        .auto-login {
            margin-left: 72px;
            color: #999;
        }
        .form-panel {
            .btns {
                padding-left: 71px;
            }
        }
    }
    .nicheng {
        width: 470px;
        .form-panel {
            .fm-item {
                .k {
                    width: 90px;
                }
            }
            p {
                padding-left: 21px;
                padding-bottom: 10px;
                color: #666;
            }
            .btns {
                margin-left: 24px;
                padding-top: 0;
            }
        }
        .top {
            height: 30px;
            line-height: 30px;
            border-bottom: 1px #d26060 solid;
            color: #f00;
            text-align: center;
        }
    }
    .panel-pay-bd {
        padding: 25px 40px;
        background: #fff;
    }
    .panel-pay {
        .list {
            margin-bottom: 15px;
            font-size: 14px;
            .k {
                color: #999;
            }
        }
        .err {
            color: #f00;
        }
        .err-box {
            overflow: hidden;
            height: 20px;
            margin-bottom: -6px;
            padding-left: 70px;
        }
        .form-panel {
            .btns {
                padding-left: 70px;
            }
        }
    }
    .panel-fb {
        width: 384px;
        _float: left;
        background: url(about:blank) no-repeat;
        .feedback {
            padding: 25px 40px;
            _padding: 25px 35px;
            .ico {
                float: left;
                margin-right: 10px;
            }
            .cont {
                overflow: hidden;
                zoom: 1;
                h4 {
                    font-size: 14px;
                }
            }
            .btns {
                padding-top: 10px;
            }
            .btn {
                margin-right: 10px;
            }
        }
        .bgf4 {
            background: #f4f4f4;
            position: relative;
        }
    }
    .panel-fb .feedback .cont h4,.panel-fb .feedback .cont p {
        margin-bottom: 2px;
    }
    .panel-info {
        width: 384px;
        .bd {
            padding: 25px 40px;
            background: #fff;
        }
        p {
            font-size: 14px;
        }
        .ico {
            vertical-align: middle;
            margin-right: 10px;
        }
        .btns {
            padding-top: 25px;
        }
        .btn {
            margin-right: 10px;
        }
    }
    .select-box {
        font-size: 12px;
        text-align: left;
        cursor: pointer;
        display: inline-block;
        *zoom: 1;
        *display: inline;
        background: #fff;
        width: 90px;
        height: 20px;
        line-height: 20px;
        position: relative;
        padding: 0 5px;
        border: 1px #d5d5d5 solid;
        z-index: 20;
        *vertical-align: middle;
        .txt-box {
            width: 100%;
            margin-right: 0!important;
            vertical-align: top!important;
            display: inline-block;
            *zoom: 1;
            *display: inline;
            height: 20px;
            line-height: 20px;
        }
        .ico {
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -30px 4px;
            height: 20px;
            width: 20px;
            float: right;
        }
        .list {
            position: absolute;
            top: 20px;
            left: -1px;
            border: 1px #d5d5d5 solid;
            width: 100%;
            background: #fff;
            display: none;
            li {
                padding: 0 5px;
                &:hover {
                    color: #fff;
                    background: #3985db;
                    a {
                        color: #fff;
                        background: #3985db;
                    }
                }
            }
        }
        .ico-arrow {
            height: 0;
            width: 0;
            margin: 8px 2px 0 0;
            border-color: #333 transparent transparent transparent;
            _border-color: #333 #f4f4f4 #f4f4f4 #f4f4f4;
            border-style: solid;
            border-width: 4px 4px 0;
            overflow: hidden;
            background: 0;
        }
    }
    .panel-made-bd {
        padding-top: 0;
        background: #fff;
        padding-bottom: 10px;
        .tab-content {
            border: 0;
        }
    }
    .panel-nocord {
        width: 200px;
        height: 107px;
        margin: 50px auto;
        padding-left: 127px;
        background: url(https://p5.ssl.qhimg.com/t01db6e8281b241424d.png) no-repeat;
        h3 {
            font-size: 16px;
            color: #55a110;
            font-family: "Microsoft YaHei";
            font-weight: 100;
        }
        p {
            padding-top: 10px;
            color: #666;
            line-height: 22px;
            a {
                &.lnk {
                    text-decoration: underline;
                }
            }
        }
    }
    .panel-t9 {
        position: relative;
        zoom: 1;
        z-index: 0;
        border: 1px #ddb963 solid;
        background: #fdc333;
        padding: 3px 14px;
        border-radius: 3px;
        box-shadow: 0 0 2px rgba(0,0,0,.15);
        color: #666;
        .close {
            position: absolute;
            right: 8px;
            top: 8px;
            width: 10px;
            height: 9px;
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -347px;
        }
        .bd {
            color: #864b11;
            overflow: hidden;
            zoom: 1;
            border: none!important;
            background: none!important;
            span {
                float: left;
                color: #c34e06;
                font-weight: bold;
                color: #d8950f;
            }
            div {
                overflow: hidden;
                zoom: 1;
            }
        }
        .sd {
            position: absolute;
            bottom: -5px;
            left: 50%;
            margin-left: -5px;
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -34px -70px;
            height: 5px;
            width: 9px;
            height: 5px;
            z-index: 3;
        }
        .tl {
            left: 20px;
        }
        .tr {
            right: 20px;
        }
        .bl {
            left: 20px;
        }
        .br {
            right: 20px;
        }
    }
    .ico-user3 {
        width: 12px;
        height: 14px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -220px;
    }
    .ico-arrow02 {
        width: 15px;
        height: 16px;
        background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -148px;
    }
    .ico-arrow02-up {
        background-position: -33px -173px;
    }
    .select-box03 {
        position: relative;
        .hd {
            position: relative;
            display: inline-block;
            height: 24px;
            line-height: 24px;
            border: 1px solid #bcbcbc;
            border-bottom: 0;
            cursor: pointer;
            z-index: 4;
            _height: 18px;
            _padding-top: 6px;
            _line-height: 18px;
        }
        .ico-arrow {
            display: inline-block;
            width: 9px;
            height: 6px;
            margin-left: 4px;
            background: url(https://p0.ssl.qhimg.com/t012d6f392f477e0792.png) no-repeat -14px -230px;
            vertical-align: middle;
            _margin-top: 5px;
        }
        .bd {
            position: absolute;
            left: -1px;
            top: 24px;
            background: #fff;
            z-index: 3;
            border: 1px solid #bcbcbc;
            margin-top: -1px;
            -webkit-box-shadow: 0 0 7px #cdcdcd;
            -moz-box-shadow: 0 0 7px #cdcdcd;
            box-shadow: 0 0 7px #cdcdcd;
        }
    }
    .select-box03 .k,.select-box03 .v {
        float: left;
    }
    .select-box03-show {
        z-index: 25;
        .hd {
            display: block;
            background: #fff;
        }
        .ico-arrow {
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg);
        }
    }
    .condTableDiv {
        max-height: 500px;
        *height: 500px;
        overflow: auto;
    }
    .condTable {
        padding: 16px 0;
        margin-left: 18px;
        width: 724px;
        table {
            border-right: 1px solid #c0c4cf;
            border-bottom: 1px solid #c0c4cf;
            td {
                &.spf-score {
                    padding: 0;
                    text-align: center;
                    .spf {
                        display: inline-block;
                        padding: 0;
                        border-bottom: 0;
                    }
                }
            }
            tr {
                &.even {
                    background-color: #f5f4f3;
                    .mztablec {
                        background-color: #fff;
                    }
                }
            }
        }
        th {
            background-color: #d8d7d7;
            border-top: 1px solid #c0c4cf;
        }
        td {
            div {
                border-bottom: 1px solid #c0c4cf;
                min-height: 26px;
                *height: 26px;
                line-height: 26px;
                word-break: break-all;
                &.mztablec {
                    border: 0;
                    height: auto;
                    table {
                        border-right: 0;
                        border-bottom: 0;
                        tr {
                            &:first-child {
                                th {
                                    border-top: 0;
                                }
                            }
                        }
                    }
                }
                &.showmzdetail {
                    border: 0;
                    cursor: pointer;
                }
            }
        }
        p {
            font-size: 12px;
            &.txt {
                height: 18px;
            }
        }
        .page {
            padding-bottom: 0;
        }
    }
    .conpopTable {
        padding: 0;
        background: #fff;
        width: auto;
    }
    .condTable th,.condTable td {
        text-align: center;
        border-left: 1px solid #c0c4cf;
        border-top: 1px solid #c0c4cf;
        height: 26px;
        vertical-align: middle;
    }
    .condTable th.tl,.condTable td.tl {
        text-indent: 4px;
        text-align: left;
    }
    .condTable td.tl td,.condTable td.tl th {
        padding: 2px 5px;
        text-indent: 0;
        text-align: center;
    }
    .condTable table td.spf-score .spf.s,.condTable table tr td.s {
        background-color: #fdfbd8;
    }
    .yellow,.yellow a,a.yellow {
        color: #e59206;
    }
    .c-tabul {
        padding: 2px 5px;
        height: 26px;
        line-height: 26px;
        background: #dedede url(http://p3.qhimg.com/t0119d85df2c35ad074.png) repeat-x 0 0;
        li {
            float: left;
            margin-left: -1px;
            _position: relative;
            cursor: pointer;
            height: 24px;
            padding: 0 9px;
            line-height: 24px;
            border: 1px #999 solid;
            background: url(http://p0.qhimg.com/t01721b80c618e4c299.png) repeat-x;
            &.selected {
                border-color: #ba2f18;
                position: relative;
                *position: auto;
                font-weight: bold;
                color: #fff;
                background: #d24036;
                box-shadow: inset 1px 0 8px rgba(0,0,0,0.3);
            }
        }
    }
    .panel-jczq {
        .panel-content {
            .c-tabul {
                li {
                    &.selected {
                        border-color: #4f8c00;
                        background: #65a314;
                    }
                }
            }
            .hd {
                background: #5e9620 url(http://p6.qhimg.com/t01ce433b904454b7f8.png) repeat-x 0 -66px;
                zoom: 1;
            }
        }
    }
    .condTable td div.mztablec table tr td.tdf1,.condTable td div.mztablec table tr th:first-child {
        border-left: 0;
    }
    #queryValue {
        width: 450px;
        margin-right: 10px;
    }
    #queryMzConent {
        margin: 10px auto;
    }
    .panel-tab-menu {
        ul {
            height: 34px;
            border-bottom: 2px solid #cdcdcd;
        }
        li {
            position: relative;
            float: left;
            width: 224px;
            text-align: center;
            height: 34px;
            line-height: 34px;
            color: #666;
            font-size: 14px;
            font-weight: bold;
            cursor: pointer;
            &.active {
                color: #c5240a;
                border-bottom: 2px solid #c5240a;
                margin-bottom: -2px;
                .arrow {
                    display: block;
                }
            }
        }
        .arrow {
            display: none;
            position: absolute;
            left: 50%;
            bottom: 0;
            border-color: transparent transparent #c5240a transparent;
            border-style: solid;
            border-width: 0 6px 6px 6px;
            width: 0;
            height: 0;
            margin-left: -6px;
            font-size: 0;
            line-height: 0;
        }
    }
    .panel-gd {
        .form-panel {
            input {
                &.input-mini {
                    width: 58px;
                    height: 18px;
                    line-height: 18px;
                    padding: 2px 0 1px 2px;
                    vertical-align: middle;
                    border-color: #d6d6d6;
                    border-radius: 0;
                    box-shadow: inset 1px 1px 3px rgba(0,0,0,0.1);
                }
            }
            .d {
                margin: 15px 5px 0;
            }
        }
    }
    .autogd-list {
        padding: 10px 20px 15px;
        .table {
            th {
                text-align: center;
                height: 26px;
                background: #f2f2f2;
                color: #666;
            }
            td {
                text-align: center;
                padding: 8px 0;
                border-bottom: 1px solid #e9e9e9;
                color: #666;
                &.ta-l {
                    text-align: left;
                    padding-left: 15px;
                }
            }
        }
        .autogd-list-hd {
            padding: 8px 0;
            .text {
                padding: 3px 3px;
            }
            .btn-middle {
                height: 20px;
                padding: 0 3px;
                vertical-align: middle;
                line-height: 20px;
            }
        }
    }
    .select-panel {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: middle;
        position: relative;
        .txt-box {
            display: block;
            height: 34px;
            line-height: 34px;
            padding: 0 0 0 3px;
            border: 1px solid #d5d5d5;
            border-radius: 3px;
            cursor: pointer;
        }
        .arrow-box {
            float: right;
            width: 24px;
            text-align: center;
            .arrow {
                display: inline-block;
                width: 9px;
                height: 6px;
                background: url(https://p1.ssl.qhimg.com/t018af20130253ce54b.png) no-repeat -96px -24px;
                -webkit-transition: .3s ease-in;
                -moz-transition: .3s ease-in;
                -o-transition: .3s ease-in;
                transition: .3s ease-in;
                vertical-align: middle;
                *margin-top: 13px;
            }
        }
        .list {
            display: none;
            position: absolute;
            top: 35px;
            left: 0;
            max-height: 120px;
            _height: 120px;
            overflow-x: hidden;
            overflow-y: auto;
            background: #fff;
            border: 1px solid #d5d5d5;
            li {
                line-height: 24px;
                padding: 0 0 0 3px;
                cursor: pointer;
                font-size: 12px;
                &:hover {
                    background: #3388d1;
                    color: #fff;
                }
            }
        }
    }
    .select-panel-show {
        .arrow {
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg);
            -ms-transform: rotate(0);
        }
        .list {
            display: block;
        }
    }
    .panel-reallogin {
        .real-form {
            padding: 20px 70px;
            .form {
                padding-top: 15px;
                .fm-item {
                    height: 60px;
                    margin-bottom: 0;
                    padding: 0;
                }
            }
        }
        .form-panel {
            .btns {
                padding: 0 0 0 77px;
            }
        }
        .real-sidebar {
            padding: 20px;
        }
        .real-form02 {
            padding: 20px 40px;
        }
    }
    .panel-t12 {
        position: relative;
        zoom: 1;
        z-index: 0;
        border: 1px #dd9d68 solid;
        background: #fffaee;
        padding: 0 10px;
        border-radius: 3px;
        box-shadow: 0 0 2px rgba(0,0,0,.15);
        color: #666;
        .close {
            position: absolute;
            right: 0;
            top: -4px;
            background: 0;
            cursor: pointer;
            padding-left: 0;
            color: #b94f22;
        }
        .sd {
            position: absolute;
            background: url('https://p5.ssl.qhimg.com/t0192942babe40f23d5.png') no-repeat -33px -429px;
            bottom: -4px;
            width: 7px;
            height: 4px;
            z-index: 3;
        }
        .bd {
            span {
                float: left;
                color: #666;
            }
            div {
                overflow: hidden;
                zoom: 1;
            }
        }
    }
    .add-mod {
        li {
            line-height: 25px;
            height: 24px;
            margin: 8px 0 0 5px;
            width: 219px;
            &.active {
                background: #c22708;
                color: #fff;
            }
        }
    }
    .btn-panel-do {
        background: #ca200c;
        border-radius: 0;
        border-color: #bcbcbc;
    }
    .form-tishi {
        line-height: 23px;
        height: 23px;
        display: block;
        margin-top: -23px;
    }
    .ts-hight {
        line-height: 40px;
    }
    .btn-large-link {
        display: inline-block;
        *width: 160px;
        height: 42px;
        padding: 0 30px;
        line-height: 42px;
        border-radius: 3px;
        border: 1px solid #940811;
        text-shadow: 1px -1px 1px rgba(0,0,0,0.3);
        font-size: 20px;
        color: #fff;
        font-family: "Microsoft Yahei";
        cursor: pointer;
        background: url("http://p7.qhimg.com/t01ead3fafdd00ec563.png") repeat-x scroll 0 0 #fcf7e9;
        zoom: 1;
    }
    .use-successful {
        border-bottom: 1px dashed #999;
        padding: 10px 0 20px 0;
        text-align: center;
        height: 60px;
        margin-bottom: 20px;
        .lqcg {
            margin-left: 5px;
            font-size: 14px;
            display: inline-block;
            margin-top: 5px;
            vertical-align: middle;
        }
    }
    .lq-cont {
        line-height: 30px;
        font-size: 14px;
        margin: 20px 0 20px;
    }
    .btns02 {
        padding-left: 76px;
        margin-top: 20px;
    }
    .tab-ssq {
        margin: 10px 0 0 -5px;
        float: left;
        li {
            display: inline;
            span {
                &.ssq-blue {
                    background: url(http://p1.qhimg.com/d/_zaixianyingxiao/ico-bigssq.png) no-repeat 0 -46px;
                }
            }
            input {
                &.blue-qiu {
                    background-position: 0 -46px;
                    outline: 0;
                }
            }
        }
    }
    .tab-ssq li span,.tab-ssq li input {
        background: url(http://p6.qhimg.com/t013787c11075f47870.png) no-repeat;
        width: 45px;
        height: 45px;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 24px;
        float: left;
        display: block;
        margin: 0 4px;
        cursor: pointer;
        overflow: hidden;
        _display: inline;
    }
    span {
        &.left-big-ssq {
            float: left;
            margin-top: 15px;
            margin-left: 5px;
            font-size: 24px;
            _margin-left: 0;
        }
    }
    .tab-ssq li input,.tab-ssq li .blue-qiu {
        background: url(http://p4.qhimg.com/t01e37bcfb7049e3279.png) no-repeat;
        border: 0;
        color: #000;
        padding: 0;
    }
    .change-bg {
        background: #f1f1f1;
        height: 34px;
        width: 75px;
        color: #888;
        display: inline-block;
        margin-top: 17px;
        line-height: 34px;
        cursor: pointer;
        font-size: 14px;
        text-align: center;
        &:hover {
            background: #bababa;
            color: #000;
        }
    }
    .use-input-font {
        font-size: 14px;
        margin-top: 20px;
        display: inline-block;
    }
    .use-input {
        height: 50px;
        vertical-align: top;
        border-color: #d5d5d5;
        border-radius: 3px;
        width: 445px;
    }
    .use-share {
        a {
            background: url(http://p5.qhimg.com/t010928af26a8ac9257.png) no-repeat;
            width: 55px;
            height: 55px;
            display: inline-block;
            margin-left: 9px;
            cursor: pointer;
            &.bshare-usblog {
                background-position: 0 0;
            }
            &.bshare-sinaminiblog {
                background-position: -63px 0;
            }
            &.bshare-weixin {
                background-position: -126px 0;
            }
            &.bshare-qzone {
                background-position: -190px 0;
            }
            &.bshare-txwb {
                background-position: -254px 0;
            }
            &:hover {
                -moz-opacity: .75;
                opacity: .75;
            }
        }
        .tit {
            float: left;
            display: inline-block;
            line-height: 30px;
            font-size: 14px;
        }
    }
    .copy-link {
        height: 27px;
        line-height: 27px;
        font-size: 12px;
        margin-top: 0;
        background: #e0e0e0;
    }





    .mod-cz-hd {
        padding-top: 11px;
        .hd {
            position: relative;
            height: 36px;
            padding-top: 8px;
            .label {
                float: right;
                display: inline;
                margin: 4px 12px 0 0;
                width: 59px;
                height: 21px;
                line-height: 21px;
                text-align: center;
                border-radius: 3px;
            }
            .label-important {
                color: #fff;
                background: #dc271f;
            }
            .bg-ccc {
                color: #fff;
                background: #a4a4a4;
            }
        }
        .cz-logo {
            width: 74px;
            height: 74px;
            position: absolute;
            left: 14px;
            top: -8px;
        }
        .cz-logo-1 {
            background: url(https://p5.ssl.qhimg.com/t0135e253f1f19c0564.png) no-repeat 0 0;
        }
        .cz-name {
            font-size: 20px;
            margin-left: 92px;
            float: left;
            display: inline;
            font-family: 'Microsoft Yahei';
            em {
                color: #c70000;
            }
        }
        .cz-logo-p5 {
            background: url(https://p5.ssl.qhimg.com/t014fd9bbe81600e201.jpg) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-qxc {
            background: url(https://p4.ssl.qhimg.com/t01c9370e1b78d1666d.jpg) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-slt {
            background: url(https://p0.ssl.qhimg.com/t012ca5248fc3956816.jpg) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-xw {
            background: url(https://p2.ssl.qhimg.com/t0146d485fd3c47d59b.jpg) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-qlc {
            background: url(https://p3.ssl.qhimg.com/t013e9f5ec9a41034a1.jpg) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-ssq {
            background: url(https://p4.ssl.qhimg.com/t0170fd951f3a36f7a9.jpg) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-k3 {
            background: url(https://p1.ssl.qhimg.com/t01fdccfc0067f6800b.png) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-x11-5 {
            background: url(https://p0.ssl.qhimg.com/t01fbaa907233fe98be.png) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-hlj11-5 {
            background: url(https://p0.ssl.qhimg.com/t01deea7cb9ffd703f6.png) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-gd11-5 {
            background: url(https://p3.ssl.qhimg.com/t01e6a8477055d3c54d.png) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-sh11-5 {
            background: url(https://p5.ssl.qhimg.com/t01455d6fcad9b1f128.png) no-repeat 0 0;
            top: -2px;
        }
        .cz-logo-ln11-5 {
            background: url(https://p2.ssl.qhimg.com/t011db27ac6d1c6ade4.png) no-repeat 0 0;
            top: 0;
        }
        .cz-logo-xj11-5 {
            background: url(https://p4.ssl.qhimg.com/t01543ae4783d73095a.png) no-repeat 0 0;
            top: 0;
        }
        .cz-logo-og {
            background: url(https://p3.ssl.qhimg.com/t01c03ff1e44431e112.png) no-repeat 0 0;
            top: -6px;
            height: 80px;
        }
        .cz-params {
            float: left;
            padding: 6px 0 0 23px;
            li {
                float: left;
                margin-right: 15px;
                line-height: 24px;
                .v {
                    color: #333;
                }
                b {
                    color: #c70000;
                }
            }
        }
        .cz-params-kp {
            float: left;
            padding: 4px 0 0 23px;
            .countdown {
                b {
                    font-size: 16px;
                }
            }
        }
        .nav-cz-main {
            height: 30px;
            background: #d31c0e url(https://p0.ssl.qhimg.com/t01604d5862dd0f23b9.png) repeat-x 0 0;
            .main {
                float: left;
                padding-left: 92px;
                border-right: 1px #e7361f solid;
                li {
                    float: left;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    border-left: 1px #e7361f solid;
                    border-right: 1px #ae0100 solid;
                    a {
                        padding: 0 10px;
                        display: inline-block;
                        height: 30px;
                        line-height: 30px;
                    }
                    &.active {
                        &:hover {
                            background: #bf0824 url(https://p2.ssl.qhimg.com/t01edf7d8164b7bdd24.png) no-repeat center bottom;
                        }
                    }
                    &:hover {
                        background: #ba1009;
                    }
                }
                a {
                    color: #fff;
                }
                .active {
                    background: #a61125 url(https://p2.ssl.qhimg.com/t01edf7d8164b7bdd24.png) no-repeat center bottom;
                    border-left-color: #910e19;
                    border-right-color: #951022;
                    font-weight: bold;
                }
            }
            .quirk {
                float: right;
                li {
                    float: left;
                    padding: 0 10px;
                    height: 30px;
                    line-height: 30px;
                    &.divider {
                        padding: 0;
                        color: #db6c66;
                    }
                    a {
                        color: #f3d3cf;
                    }
                }
            }
        }
        .cz-logo-pl3 {
            background: url(https://p4.ssl.qhimg.com/t012e996bd58c925fbf.png) no-repeat 0 0;
        }
        .cz-zclogo {
            background: url(https://p5.ssl.qhimg.com/t014b8a65b8e67ad608.png) no-repeat 0 0;
        }
        .cz-jq4logo {
            background: url(https://p0.ssl.qhimg.com/t01b3d3feeb83c9f2ab.png) no-repeat 0 0;
        }
        .cz-zc6logo {
            background: url(https://p2.ssl.qhimg.com/t0121840175b47d7cc9.png) no-repeat 0 0;
        }
        .helper-nav {
            float: left;
            padding-left: 15px;
            a {
                display: inline-block;
                color: #fff;
                height: 28px;
                padding-top: 2px \9
            ;
                *padding-top: 0;
                line-height: 30px;
                _height: 20px;
                _padding-top: 8px;
                font-weight: bold;
                font-family: 'simsun';
            }
            .ico-arrow02 {
                margin-left: 5px;
                vertical-align: -5px;
            }
        }
    }

    .sd-z3-wz {
        color: #fa6705;
    }

    .cz-params {
        font-size: 14px;
    }

    .mod-cz-bd {
        border: 1px #d5d5d5 solid;
        border-width: 0 1px 1px;
        .nav-cz-sub {
            padding: 5px 11px;
            background: #dedede url(https://p5.ssl.qhimg.com/t01fedc349dd63d1be1.png) repeat-x 0 0;
            li {
                float: left;
                margin-left: -1px;
                _position: relative;
                height: 24px;
                padding: 0 9px;
                line-height: 24px;
                border: 1px #999 solid;
                background: url(https://p2.ssl.qhimg.com/t010020268de73e4126.png) repeat-x;
                a {
                    height: 24px;
                    line-height: 24px;
                    display: inline-block;
                }
            }
            .active {
                border-color: #ba2f18;
                position: relative;
                *position: auto;
                font-weight: bold;
                color: #fff;
                background: #d24036;
                box-shadow: inset 1px 0 8px rgba(0, 0, 0, 0.3);
                a {
                    color: #fff;
                }
            }
            .jiajiang {
                float: right;
                height: 26px;
                line-height: 34px;
            }
        }
    }

    .mod-aside {
        padding: 0 13px;
        margin-bottom: 10px;
        .hd {
            border-bottom: 1px #c0c0c0 solid;
            h3 {
                font-size: 14px;
                padding: 2px 0 2px;
                float: left;
                color: #555;
                a {
                    color: #555;
                }
            }
            .more {
                float: right;
                margin-top: 3px;
                font-family: simsun;
            }
            .nav-tab {
                float: right;
                ul {
                    float: right;
                    position: relative;
                    margin-bottom: -1px;
                    border: 1px #c0c0c0 solid;
                    border-radius: 2px 2px 0 0;
                }
                li {
                    float: left;
                    padding: 0 10px;
                    height: 24px;
                    line-height: 24px;
                    border-left: 1px #c0c0c0 solid;
                    background: #fff url(https://p5.ssl.qhimg.com/t012181b9ed877b2ee7.png) repeat-x 0 0;
                    &.first {
                        border: 0;
                    }
                    a {
                        color: #000;
                        &:hover {
                            text-decoration: none;
                        }
                    }
                    &.active {
                        background: #fafafa;
                        position: relative;
                        height: 25px;
                        margin-bottom: -1px;
                    }
                }
            }
            .nav-tab-t2 {
                ul {
                    border: 0;
                    padding-top: 6px;
                }
                li {
                    width: 13px;
                    height: 13px;
                    padding: 0;
                    margin-left: -1px;
                    border: 1px solid #d8d8d8;
                    line-height: 15px;
                    text-align: center;
                    font-family: '\5b8b\4f53';
                    font-size: 14px;
                }
            }
        }
        .list {
            padding: 5px 0;
            li {
                padding: 2px 0;
                .k {
                    color: #888;
                }
                .v {
                    color: #333;
                }
                .ib {
                    float: left;
                    width: 60px;
                    margin: 0 5px -5px;
                }
            }
        }
        .list-h {
            li {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                .ib {
                    display: inline-block;
                    width: 65px;
                    height: 18px;
                    *height: 20px;
                    overflow: hidden;
                    margin: 0 4px -5px;
                }
            }
        }
        .muted {
            color: #aaa;
        }
        .ico-ball {
            width: 19px;
            height: 19px;
            line-height: 19px;
            text-align: center;
            font-family: Tahoma;
            font-size: 11px;
            font-weight: bold;
            color: #fff;
            background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -78px;
        }
        .list-ball-t1 {
            padding-top: 5px;
            li {
                margin-bottom: 5px;
                .progress {
                    width: 110px;
                    margin-right: 5px;
                    .bar {
                        background: #f5d89d;
                        border-radius: 2.5px;
                    }
                    .blue-bar {
                        background: #c2d8e5;
                    }
                }
                .txt-1 {
                    color: #666;
                    margin-right: 10px;
                }
                .txt-2 {
                    color: #999;
                    margin-right: -1px;
                    em {
                        color: #333;
                    }
                }
                .progress-t2 {
                    width: 155px;
                }
                .progress-t3 {
                    width: 120px;
                }
            }
            .k {
                display: inline-block;
                width: 60px;
                color: #666;
                *display: inline;
                *zoom: 1;
            }
            .kwauto {
                width: auto;
            }
        }
        .list-ball-t2 {
            li {
                background: #f0f0f0;
                float: left;
                width: 100%;
                overflow: hidden;
                zoom: 1;
                margin-bottom: 10px;
            }
            span {
                float: left;
                height: 19px;
                line-height: 19px;
                &.name {
                    color: #333;
                }
            }
            .ico-ball {
                margin-right: 8px;
                background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -107px;
            }
            .ico-ball-dis {
                background-position: -44px -107px;
                color: #d58f00;
            }
            .money {
                float: right;
                padding-right: 11px;
                height: 19px;
                color: #d80000;
                font-weight: bold;
                background: url(https://p5.ssl.qhimg.com/t010917d20e2151bdb0.png) no-repeat 100% -58px;
            }
            .money2 {
                color: #333;
                font-weight: normal;
            }
        }
        .ico-ball-blue {
            background-position: -44px -78px;
        }
        .ico-ball2 {
            width: 22px;
            height: 22px;
            line-height: 22px;
            text-align: center;
            font-family: Tahoma;
            font-size: 11px;
            font-weight: bold;
            color: #fff;
            background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -46px;
        }
        .ico-ball-t2 {
            background-position: -44px -46px;
        }
        .award {
            color: #666;
            padding: 0 0 4px 14px;
        }
        .bd {
            .tab-content-t2 {
                width: 223px;
                padding-top: 10px;
                overflow: hidden;
            }
        }
        .list-t2 {
            li {
                a {
                    color: #999;
                    &:hover {
                        color: #d80000;
                    }
                }
            }
        }
        .ico-ball3 {
            display: inline-block;
            width: 29px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -199px;
            color: #fff;
            font-size: 14px;
            font-family: Tahoma;
            font-weight: bold;
            *display: inline;
            *zoom: 1;
            *margin-right: 3px;
        }
        .lnk {
            a {
                color: #3f79d0;
            }
        }
    }

    .mod-aside .list-ball-t1 li span, .mod-aside .list-ball-t1 li .ico-ball, .mod-aside .list-ball-t1 li .ico-ball2, .mod-aside .list-ball-t1 li .progress {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: middle;
    }

    .mod-aside .list-ball-t1 li .progress, .mod-aside .list-ball-t1 li .progress .bar {
        height: 5px;
        font-size: 0;
        line-height: 0;
    }

    .mod-aside .list-ball-t1 li .ico-ball, .mod-aside .list-ball-t1 li .ico-ball2 {
        margin-right: 6px;
    }

    .mod-aside-t1 {
        background: #fffaee;
        padding-bottom: 11px;
        border-bottom: 1px #e9d9b2 solid;
        .hd {
            border-color: #f0deb3;
            padding-top: 12px;
            margin-bottom: 5px;
            p {
                clear: both;
                font-size: 14px;
                padding-bottom: 5px;
                font-family: Tahoma;
                color: #777;
                &.red {
                    font-size: 12px;
                }
                em {
                    color: #c70000;
                    font-size: 24px;
                }
            }
        }
        h4 {
            padding: 10px 0 3px;
            font-weight: normal;
        }
        li {
            padding: 1px 0;
            margin-left: 3px;
            .square {
                width: 3px;
                height: 3px;
                margin-right: 5px;
                display: inline-block;
                *display: inline;
                *zoom: 1;
                font-size: 0;
                line-height: 0;
                overflow: hidden;
                background: #888;
                vertical-align: middle;
            }
            a {
                color: #888;
                display: inline-block;
                *display: inline;
                *zoom: 1;
                vertical-align: middle;
                &:hover {
                    color: #c70000;
                }
            }
        }
    }

    .mod-aside-t2 {
        z-index: 5;
        position: relative;
        padding-right: 4px;
        .hd {
            padding-bottom: 12px;
            border-bottom-style: dashed;
        }
        h3 {
            margin-right: 9px;
            span {
                font-size: 12px;
            }
            b {
                color: #d80000;
            }
        }
        .date {
            float: left;
            color: #888;
            padding-top: 4px;
        }
        .ball-num {
            clear: both;
            padding-top: 4px;
            line-height: 20px;
            .more {
                margin-left: 4px;
                float: none;
            }
        }
        .ball-list {
            float: left;
            .ico-ball {
                float: left;
                margin-right: 3px;
            }
            .ico-ball2 {
                float: left;
                margin-right: 3px;
            }
        }
        .ball-desc {
            float: left;
            color: #888;
            padding-left: 5px;
            padding-top: 3px;
            em {
                color: #333;
            }
        }
        .list {
            i {
                &.li-1 {
                    display: inline-block;
                    *display: inline;
                    *zoom: 1;
                    width: 5px;
                    height: 5px;
                    margin-right: 9px;
                    background: url(https://p5.ssl.qhimg.com/t01e60c81e08cd7b496.png) no-repeat;
                    vertical-align: middle;
                }
            }
            span {
                vertical-align: middle;
                color: #888;
                em {
                    color: #333;
                }
            }
        }
        .ft {
            padding: 2px 0 0 14px;
            a {
                margin-right: 10px;
            }
        }
        .ball-list-nobg {
            .ico-ball-nobg {
                float: left;
                width: 14px;
                line-height: 20px;
                color: #da0000;
                text-align: center;
                font-family: Tahoma;
                font-size: 16px;
                font-weight: bold;
            }
        }
    }

    .mod-aside-t3 {
        .hd {
            h3 {
                color: #f46929;
            }
            .nav-tab {
                li {
                    &.active {
                        a {
                            color: #f46929;
                        }
                    }
                }
            }
        }
        .bd {
            padding-top: 16px;
        }
    }

    .mod-aside-t4 {
        .bd {
            padding-top: 7px;
        }
    }

    .mod-select-filter {
        padding: 6px 0 0 15px;
        *zoom: 1;
        label {
            margin-right: 5px;
            *margin-right: 2px;
            input {
                margin-right: 3px;
            }
        }
        span {
            &.numcount {
                float: right;
                margin-right: 50px;
                font-weight: bold;
                color: #d93300;
                cursor: pointer;
            }
        }
    }

    .yl_nav {
        .mod-select-filter {
            label {
                margin-right: 2px;
                margin-right: 0 \9
            ;
            }
        }
    }

    .mod-select-filter label input, .mod-select-filter label span {
        vertical-align: middle;
        font-family: tahoma;
    }

    .mod-select-info {
        padding: 10px 0 0 55px;
        color: #999;
        .ico {
            margin-right: 6px;
        }
    }

    .sfc-bd {
        .mod-select-info {
            padding-left: 12px;
        }
        .mod-cz-hd {
            .nav-cz-main {
                background: #4f960c url(https://p1.ssl.qhimg.com/t010ed68ab7061ae9fc.png) repeat-x 0 0;
                .main {
                    border-right: 1px #6abd31 solid;
                    li {
                        border-left: 1px #69bd31 solid;
                        border-right: 1px #426f14 solid;
                        &:hover {
                            background: #34820b;
                        }
                        &.active {
                            &:hover {
                                background: #499817 url(https://p2.ssl.qhimg.com/t01edf7d8164b7bdd24.png) no-repeat center bottom;
                            }
                        }
                    }
                    .active {
                        background: #377810 url(https://p2.ssl.qhimg.com/t01edf7d8164b7bdd24.png) no-repeat center bottom;
                        border-right-color: #416e13;
                    }
                }
                .quirk {
                    li {
                        a {
                            color: #dbebce;
                        }
                        &.divider {
                            color: #86b555;
                        }
                    }
                }
            }
        }
        .mod-cz-bd {
            .nav-zc-sub {
                .active {
                    border-color: #4f8c00;
                    background: #65a314;
                }
            }
            .nav-cz-sub {
                .active {
                    background: none repeat scroll 0 0 #65a314;
                    border-color: #4f8c00;
                }
            }
        }
    }

    .syy {
        .mod-select-bolls {
            margin: 0 38px;
            .boll-item-col3 {
                .v {
                    width: 419px;
                }
            }
        }
        .kpkjcode {
            span {
                display: inline-block;
                width: 36px;
            }
        }
        .ten-issue-code-data {
        }
    }

    .mod-select-bolls {
        margin: 0 54px;
        .hd {
            padding: 10px 0;
            text-align: center;
            span {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                font-weight: normal;
                color: #777;
                text-align: center;
                &.muted {
                    color: #bebebe;
                }
            }
            em {
                font-size: 14px;
                font-weight: bold;
                color: #c00;
                &.blue {
                    color: #096ed6;
                }
            }
            .t1 {
                width: 428px;
            }
            .t2 {
                width: 190px;
            }
            .t1-w {
                width: 282px;
            }
        }
        .boll-item {
            overflow: hidden;
            zoom: 1;
            .k {
                width: 40px;
                span {
                    display: block;
                    position: relative;
                }
                .k1 {
                    width: 33px;
                    height: 19px;
                    line-height: 17px;
                    margin: 7px 0 8px 0;
                    text-align: center;
                    border-radius: 2px;
                    background: #e6e6e6;
                    color: #999;
                    .caret {
                        position: absolute;
                        right: -10px;
                        top: 5px;
                        width: 0;
                        height: 0;
                        font-size: 0;
                        border-color: #fff #fff #fff #e6e6e6;
                        border-width: 5px;
                        border-style: solid;
                        position: absolute;
                        right: -10px;
                        top: 5px;
                        width: 0;
                        height: 0;
                        font-size: 0;
                        border-color: #fff #fff #fff #e6e6e6;
                        border-width: 5px;
                        border-style: solid;
                        line-height: 0;
                        _right: -11px;
                    }
                }
                .k2 {
                    color: #999;
                    padding-left: 4px;
                    font-family: simsun;
                }
                .k1-three {
                    width: 39px;
                }
            }
            .v {
                position: relative;
                z-index: 1;
            }
            .k2-hide {
                .k2 {
                    visibility: hidden;
                }
            }
            .k1-hide {
                .k1 {
                    visibility: hidden;
                }
            }
            .ssq-icon {
                float: left;
                width: 60px;
                background: url(https://p3.ssl.qhimg.com/t01cf19a7e3c97c067d.png) no-repeat;
            }
            .luckbuy {
                .ssq-icon-xingm {
                    width: 56px;
                    height: 52px;
                    background-position: 0 0;
                }
                .ssq-icon-shoujh {
                    width: 61px;
                    height: 60px;
                    background-position: 0 -56px;
                }
                .ssq-icon-shengri {
                    width: 64px;
                    height: 67px;
                    background-position: 0 -121px;
                }
            }
            .form-item {
                padding: 5px 0 0 20px;
            }
            .k-w {
                padding-right: 10px;
                text-align: right;
                span {
                    display: inline-block;
                }
            }
            .package-item {
                .k {
                    width: 68px;
                }
                .v {
                    position: static;
                }
            }
        }
        .boll-item-col3 {
            .v {
                width: 388px;
            }
            .t {
                width: 190px;
            }
        }
        .boll-item-col2 {
            .v {
                width: 575px;
            }
            .t {
                display: none;
            }
        }
        .boll-list {
            li {
                float: left;
                margin-right: 3px;
                width: 34px;
                height: 57px;
                text-align: center;
                span {
                    color: #8a8a8a;
                    &.red {
                        color: #d80000;
                    }
                    &.k3-boll-num {
                        color: #333;
                    }
                }
                .c1 {
                    color: #cf1917;
                }
                em {
                    display: block;
                }
            }
        }
        .tool-list {
            padding-top: 6px;
            margin-right: -20px;
            position: relative;
            li {
                float: left;
                line-height: 21px;
                .btn {
                    float: left;
                    margin-right: 9px;
                    width: 22px;
                    text-align: center;
                }
                .dt-qb {
                    width: 69px;
                }
                .btn2 {
                    display: inline;
                    float: left;
                    margin-right: 14px;
                }
            }
        }
        .ft {
            border-top: 1px #ededed solid;
            padding: 9px 0;
            margin-top: 10px;
            text-align: center;
            b {
                color: #cf1917;
                font-family: Tahoma;
                &.blue {
                    color: #096ed6;
                }
            }
            input {
                &.text {
                    width: 45px;
                }
            }
        }
        .tool-list-sty2 {
            font-size: 0;
            text-align: center;
            li {
                float: none;
                display: inline-block;
                *display: inline;
                *zoom: 1;
                margin-right: 10px;
                vertical-align: top;
                font-size: 12px;
            }
        }
        .pt0 {
            padding-top: 0;
        }
        .boll-list02 {
            li {
                width: auto;
                margin-right: 10px;
                _display: inline;
            }
        }
        .boll-item-col4 {
            .v {
                width: 600px;
            }
        }
        .boll-item-col6 {
            padding: 0 0 0 80px;
            .v {
                width: 260px;
            }
        }
        .tools-boll-xssc {
            .boll-item {
                .k {
                    .k1 {
                        margin: 6px 0 10px 0;
                        z-index: 3;
                    }
                }
            }
        }
        .boll-item-col5 {
            .v {
                width: 274px;
            }
        }
        .boll-item-sd {
            .btn-boll2-middle {
                width: 104px;
                height: 30px;
                line-height: 30px;
            }
            .boll-list02 {
                li {
                    margin-right: 12px;
                }
            }
        }
        .k3bx-boll-box {
            li {
                height: auto;
            }
        }
    }

    .mod-select-bolls .boll-item .k, .mod-select-bolls .boll-item .v, .mod-select-bolls .boll-item .t {
        float: left;
    }

    .qxc {
        .boll-item {
            .k {
                width: 45px;
                .k1 {
                    width: 37px;
                }
            }
        }
    }

    .mod-select-result {
        margin-left: 90px;
        margin-top: 0;
        position: relative;
        .hd {
            text-align: center;
            margin-bottom: 15px;
            .btn {
                margin-right: 18px;
            }
        }
        .bd {
            border: 1px #e5e5e5 solid;
            width: 550px;
            background: #fbfbfb;
        }
        .result {
            float: left;
            width: 448px;
            height: 140px;
            border-right: 1px #e5e5e5 solid;
            .content {
                background: #fffdf7;
                height: 113px;
                overflow: auto;
                border-bottom: 1px #e5e5e5 solid;
                li {
                    overflow: hidden;
                    zoom: 1;
                    padding: 2px 8px;
                    border-bottom: 1px #ddd dotted;
                    *overflow: visible;
                    *zoom: 0;
                    &.active {
                        background: #fce1c5;
                    }
                    .em {
                        color: red;
                        margin: 0 5px;
                    }
                    &.libgred {
                        background: #ffaf9a;
                    }
                }
                .code {
                    float: left;
                    width: 360px;
                    word-break: break-all;
                    word-wrap: break-word;
                    text-align: left;
                }
                .del {
                    float: right;
                    cursor: pointer;
                    color: #999;
                    &:hover {
                        color: #c70000;
                    }
                }
                .modi {
                    float: right;
                    cursor: pointer;
                    color: #999;
                    margin-right: 4px;
                    &:hover {
                        color: #c70000;
                    }
                }
            }
            .ctrls {
                height: 25px;
                line-height: 25px;
                border-top: 1px #fff solid;
                text-align: right;
                padding-right: 13px;
                a {
                    color: #c63;
                    margin-left: 15px;
                }
            }
        }
        .qkmethod {
            overflow: hidden;
            zoom: 1;
            padding: 10px 0 0 10px;
            li {
                margin-bottom: 8px;
            }
            .btn-middle {
                width: 78px;
            }
        }
        .total {
            padding-top: 10px;
            input {
                width: 45px;
            }
        }
    }

    .mod-select-result-isupload .result, .mod-select-result-matrix .result {
        width: 100%;
    }

    .mod-select-result-isupload .result .content, .mod-select-result-matrix .result .content {
        height: 140px;
    }

    .mod-select-result-isupload .hd, .mod-select-result-matrix .hd {
        display: none;
    }

    .mod-select-result-isupload .qkmethod, .mod-select-result-matrix .qkmethod {
        display: none;
    }

    .mod-select-result-isupload .ctrls, .mod-select-result-matrix .qkmethod {
        display: none;
    }

    .mod-buy-method {
        margin: 25px 54px 0 54px;
        border: 1px #d4d4d4 solid;
        .nav-tab {
            padding: 7px 10px;
            background: #f4f4f4;
        }
        .rd-group {
            float: left;
        }
        .tips {
            float: right;
        }
        .tab-content {
            .total {
                padding: 5px 10px;
                border-bottom: 1px #fff solid;
                background: #f7f7f7;
                .count {
                    float: left;
                }
                .help {
                    float: right;
                }
            }
        }
        .form {
            margin: 17px 40px 10px;
        }
        .table {
            .s0 {
                width: 40px;
                text-align: center;
            }
            .s1 {
                width: 190px;
            }
            .s2 {
                width: 90px;
            }
            .s3 {
                width: 90px;
                text-align: center;
            }
            .s4 {
                text-align: center;
            }
            .text {
                width: 30px;
                vertical-align: middle;
            }
            .hd {
                border-bottom: 1px solid #e4e4e4;
                padding: 5px 0;
                margin-bottom: 5px;
                td {
                    font-weight: bold;
                }
            }
        }
        .tab-pane-znzh {
            .table {
                .hd {
                    border-bottom: 0;
                    border-bottom: 0;
                    margin-bottom: 0;
                    padding: 5px 0 0;
                }
            }
        }
    }

    .mod-buy-method .rd-group label input, .mod-buy-method .rd-group label span {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: middle;
        font-family: tahoma;
    }

    .mod-buy-method label .checkbox, .mod-buy-method label span {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: middle;
    }

    .mod-buy-method .table .hd td, .mod-buy-method .table .bd td {
        padding: 3px;
        *padding: 2px 3px;
    }

    .mod-upload {
        margin: 0 0 0 90px;
        padding: 5px 0;
        h3 {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            vertical-align: top;
        }
        ul {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            color: #999;
            li {
                padding: 2px 0;
                margin-right: 10px;
                vertical-align: middle;
                *display: inline;
                *zoom: 1;
            }
        }
        .upload {
            padding-top: 15px;
        }
        .input-file {
            width: 250px;
            vertical-align: middle;
        }
        .btn {
            margin-right: 10px;
            vertical-align: middle;
        }
        .btn-middle {
            padding: 0 7px;
        }
        .lnk {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            vertical-align: middle;
        }
    }

    .mod-submit {
        text-align: center;
        padding: 15px 0;
        p {
            padding: 4px 0;
        }
    }

    .mod-submit label .checkbox, .mod-submit label span {
        display: inline-block;
        *display: inline;
        *zoom: 1;
        vertical-align: middle;
    }

    .mod-cz-desc {
        margin: 10px 35px 18px 37px;
        .hd {
            border-bottom: 1px #e5e5e5 solid;
            h3 {
                float: left;
                background: #fff;
                padding-right: 8px;
                position: relative;
                margin-bottom: -9px;
                font-size: 1.2em;
            }
            .hdr {
                float: right;
                cursor: pointer;
            }
        }
        .bd {
            padding: 27px 20px 0;
        }
        .table {
            float: left;
            width: 270px;
            table {
                width: 100%;
            }
            th {
                border: 1px #ececec solid;
                background: #fafafa;
                padding: 5px;
                text-align: center;
                font-weight: bold;
            }
            td {
                border-bottom: 1px #eee dashed;
                padding: 11px 5px;
                text-align: left;
            }
            .a-r {
                text-align: right;
            }
            .a-c {
                text-align: center;
            }
        }
        .q-and-a {
            float: right;
            width: 300px;
            padding-bottom: 20px;
            h4 {
                font-weight: normal;
                margin-bottom: 10px;
            }
            dt {
                font-weight: bold;
            }
            i {
                float: left;
                margin-right: 10px;
                margin-top: 2px;
            }
            span {
                display: block;
                overflow: hidden;
                zoom: 1;
            }
        }
        .square {
            display: inline-block;
            vertical-align: middle;
            width: 4px;
            height: 4px;
            border-radius: 4px;
            line-height: 0;
            font-size: 0;
            background: #999;
        }
    }

    .mod-cz-desc .q-and-a dt, .mod-cz-desc .q-and-a dd {
        padding: 3px 0;
        overflow: hidden;
        zoom: 1;
        color: #666;
    }

    .mod-pop-10t {
        padding: 8px 14px;
        .panel-content {
            background: #f3f5f7;
        }
        h4 {
            font-weight: normal;
            margin-bottom: 5px;
        }
        table {
            width: 100%;
        }
        th {
            font-weight: bold;
        }
    }

    .mod-pop-10t th, .mod-pop-10t td {
        padding: 2px 3px;
        text-align: center;
    }

    .mod-cz-hm-hd {
        padding: 5px 11px;
        background: #dedede url(https://p5.ssl.qhimg.com/t01fedc349dd63d1be1.png) repeat-x 0 0;
        .form {
            height: 22px;
            padding-top: 4px;
        }
        .filter {
            margin-right: 20px;
        }
        .btn-hm {
            float: right;
        }
        .btn-middle {
            padding: 0 10px;
            height: 20px;
            line-height: 20px;
        }
        .t {
            b {
                font-weight: 400;
                color: #444;
                font-family: "microsoft yahei";
                font-size: 20px;
                margin: 0 20px 0 0;
            }
            em {
                color: #666;
                font-family: "microsoft yahei";
                font-size: 20px;
                margin: 0 20px 0 0;
            }
        }
        .tc {
            span {
                margin-right: 5px;
                vertical-align: middle;
            }
            input {
                vertical-align: middle;
            }
        }
        .l2 {
            float: left;
        }
        .r2 {
            text-align: right;
        }
    }

    .mod-cz-hm-hd .form label, .mod-cz-hm-hd .form select, .mod-cz-hm-hd .form input, .mod-cz-hm-hd .form button {
        vertical-align: middle;
    }

    .mod-cz-hm-hd .filter, .mod-cz-hm-hd .paper {
        float: left;
    }

    .mod-cz-hm-bd {
        background: #fff;
        position: relative;
        padding-bottom: 60px;
        height: 100%;
        .table {
            table {
                width: 100%;
                th {
                    height: 27px;
                    line-height: 27px;
                    text-align: center;
                    border-bottom: 1px #d3d3d3 solid;
                    color: #444;
                }
                td {
                    height: 35px;
                    border-bottom: 1px #e5e5e5 solid;
                    text-align: center;
                    img {
                        vertical-align: middle;
                        margin: 0 2px;
                    }
                }
                .top {
                    td {
                        background: #fff7e4;
                    }
                }
                .tdleft {
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 8em;
                    margin-left: .5em;
                }
                .tdright {
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 6em;
                    margin-right: .5em;
                }
                .tdright2 {
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 6em;
                    padding-right: 5px;
                }
                .tdright3 {
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 6em;
                    padding-right: 20px;
                }
                .tdright4 {
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 8em;
                    margin-right: 5px;
                }
                .tdleft2 {
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 10em;
                    padding-right: 20px;
                }
                .tdleft-name {
                    text-align: left;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 8em;
                }
                .tdright-zj {
                    text-align: right;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 7em;
                    margin-left: .5em;
                }
            }
            .a2 {
                color: #999;
            }
            .a3 {
                color: #6c6c6c;
                word-wrap: break-word;
                word-break: break-all;
            }
        }
        .total {
            position: absolute;
            width: 100%;
            bottom: 0;
            background: #e0e0e0;
            color: #666;
            line-height: 38px;
            .l {
                float: left;
                padding: 5px 10px;
            }
            .r {
                float: right;
                font-size: 14px;
                margin: 7px 10px 0 0;
            }
            .r2 {
                margin: 5px 10px 0 0;
            }
            b {
                font-size: 20px;
                font-family: 'Microsoft Yahei';
            }
            .f {
                line-height: 23px;
                h3 {
                    font-size: 16px;
                }
                p {
                    span {
                        font-size: 14px;
                        &.t2 {
                            color: #666;
                        }
                    }
                }
            }
            .pick-total {
                .pick-total-result {
                    .content {
                        li {
                            b {
                                font-size: 12px;
                                font-family: Tahoma, Arial, "\fffd\fffd\fffd\fffd", Helvetica, sans-serif;
                            }
                        }
                    }
                }
            }
        }
        .tdu {
            color: #3f79d0;
            text-decoration: underline;
        }
    }

    .box-input-money {
        position: relative;
        zoom: 1;
    }

    .box-input-money-d {
        position: absolute;
        top: 0;
        right: 0;
        width: 124px;
        display: none;
        div {
            background: #fffaeb;
            border: 2px solid #e1e1e1;
            clear: both;
        }
        span {
            float: right;
            width: 73px;
            height: 21px;
            line-height: 19px;
            position: relative;
            bottom: -2px;
            border: 2px solid #e1e1e1;
            border-bottom: 0;
            color: #3f79d0;
            background-color: #ffda6d;
            background-image: linear-gradient(to bottom, #ffda6d, #fffaeb);
            b {
                float: right;
                height: 21px;
                width: 8px;
                background: url('https://p1.ssl.qhimg.com/t0144797788eef2ed4b.png');
                overflow: hidden;
                margin: 0 6px 0 0;
            }
            em {
                float: left;
                margin: 0 0 0 10px;
            }
        }
    }

    .box-input-money a:hover + div, .box-input-money div:hover {
        display: block;
    }

    .panel-table {
        width: 614px;
        .hd {
            overflow: hidden;
            zoom: 1;
            h3 {
                float: left;
            }
            span {
                line-height: 38px;
                color: #fff6f5;
            }
        }
        .table {
            width: 614px;
            table {
                width: 100%;
            }
            tr {
                border-bottom: 1px solid #e5e5e5;
                line-height: 42px;
                &.th {
                    line-height: 26px;
                    background: #fafafa;
                    border-bottom: 1px solid #ececec;
                    th {
                        color: #777;
                        font-weight: bold;
                    }
                }
            }
            .index {
                text-align: center;
            }
        }
        .a1 {
            color: #3f79d0;
        }
    }

    body {
        .panel-order-pay {
            width: 585px;
        }
        .panel-order-view {
            width: 535px;
        }
        .panel-gd {
            width: 486px;
        }
        .panel-gd2 {
            width: 624px;
        }
        .panel-order-view02 {
            width: 535px;
        }
    }

    .panel-order-pay {
        h4 {
            b {
                color: #f41800;
            }
        }
        .table {
            padding: 30px;
            table {
                width: 100%;
            }
            tr {
                line-height: 42px;
                &.th {
                    line-height: 26px;
                    background-image: linear-gradient(to bottom, #fefefe, #f9f9f9);
                    background-color: #fefefe;
                    border: 1px solid #ececec;
                }
            }
            td {
                &.stats {
                    color: #da0000;
                }
            }
        }
        .a1 {
            color: #3f79d0;
        }
        .tip {
            line-height: 38px;
            font-weight: bold;
            b {
                color: #f41800;
            }
        }
    }

    .panel-order-pay .table tr.th th, .panel-order-pay .table td {
        text-align: center;
        color: #444;
    }

    .panel-order-view {
        h4 {
            b {
                color: #f41800;
            }
        }
        .table {
            padding: 15px;
            table {
                width: 100%;
            }
            tr {
                &.th {
                    line-height: 26px;
                    background-image: linear-gradient(to bottom, #fefefe, #f9f9f9);
                    background-color: #fefefe;
                    border: 1px solid #ececec;
                }
            }
            td {
                padding: 5px 15px;
                line-height: 16px;
                &.t {
                    text-align: left;
                }
            }
            .e {
                color: #b61500;
            }
            .u {
                color: #2767c6;
            }
        }
        .a1 {
            color: #3f79d0;
        }
        .tip {
            line-height: 38px;
        }
    }

    .panel-order-view .table tr.th th, .panel-order-view .table td {
        text-align: center;
        color: #444;
        border: 1px solid #ececec;
    }

    .mod-cz-hm-bd2 {
        padding-bottom: 0;
        .total {
            position: static;
        }
        .table2 {
            margin: -1px -1px 0;
            thead {
                td {
                    line-height: 23px;
                    height: 23px;
                }
                th {
                    line-height: 26px;
                    background: #f5f5f5;
                }
            }
            table {
                td {
                    height: 29px;
                    line-height: 29px;
                }
            }
            .ch {
                color: #e01003;
            }
            .cl {
                color: #146ac9;
            }
        }
        .table {
            color: #666;
            tbody {
                .c9 {
                    color: #999;
                }
                .co {
                    color: #ff9600;
                }
            }
        }
    }

    .mod-cz-hm-hd2 {
        padding: 0;
        height: auto;
        .arrow {
            display: inline-block;
            width: 0;
            height: 0;
            overflow: hidden;
            line-height: 0;
            font-size: 0;
            vertical-align: middle;
            border-top: 5px solid #727272;
            border-bottom: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            _color: #ff3fff;
            _filter: chroma(color=#ff3fff);
            transition: all .2s ease-in;
        }
    }

    .hst-tit {
        height: 36px;
        padding: 5px 11px;
        background-image: linear-gradient(to bottom, #f8f8f8, #f1f1f1);
        background-color: #f8f8f8;
        border: solid #d8d8d8;
        border-width: 1px 0;
        h3 {
            line-height: 36px;
            font-size: 16px;
        }
        .select {
            line-height: 24px;
            height: 26px;
            position: relative;
            top: 6px;
            z-index: 2;
            width: 120px;
            em {
                padding: 0 25px 0 10px;
                display: block;
                width: 50px;
                border: 1px solid #c1c1c1;
                border-radius: 3px;
                background: #fff;
                position: relative;
                z-index: 3;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2) inset;
                i {
                    margin: 0 -10px 0 0;
                    position: relative;
                    right: -5px;
                }
            }
            .opts {
                position: relative;
                background: #fff;
                border: 1px solid #c1c1c1;
                border-radius: 0 3px 3px 3px;
                left: 0;
                display: none;
                top: -1px;
                overflow: hidden;
                box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2) inset;
                padding: 0 3px 2px;
                a {
                    display: block;
                    background: #fff;
                    padding: 0 10px;
                    transition: all .2s ease-in;
                    &:hover {
                        background: #f6f6f6;
                    }
                }
            }
            &:hover {
                em {
                    border-radius: 3px 3px 0 0;
                    border-bottom: 0;
                    i {
                        border-bottom: 5px solid #727272;
                        border-top: 0;
                    }
                }
                .opts {
                    display: block;
                }
            }
        }
        ul {
            float: left;
            height: 38px;
            margin-top: -2px;
            li {
                float: left;
                height: 38px;
                padding: 0 5px 0 0;
                a {
                    float: left;
                    height: 36px;
                    line-height: 36px;
                    border: 1px solid #bbb;
                    border-bottom-color: #d8d8d8;
                    position: relative;
                    top: 6px;
                    background: #fff;
                    color: #333;
                    padding: 0 23px;
                    border-radius: 3px 3px 0 0;
                    font-size: 14px;
                    &:hover {
                        color: #666;
                        text-decoration: none;
                    }
                    &.on {
                        color: #666;
                        font-weight: bold;
                        border-bottom-color: #fff;
                    }
                }
            }
        }
    }

    .hst-tit .ico, .hst-tit h3, .hst-tit .select {
        float: left;
        margin-right: 10px;
    }

    .hst-tit2 {
        overflow: hidden;
        background: #fff;
        height: 34px;
        line-height: 34px;
        padding: 0 14px;
        border-bottom: 1px solid #d8d8d8;
        h4 {
            font-size: 14px;
        }
        .r2 {
            a {
                display: inline-block;
                color: #777;
                border: 1px solid #e1e1e1;
                line-height: 17px;
                padding: 0 9px;
                margin: 0 0 0 5px;
                &:hover {
                    border-color: #ffcf94;
                    text-decoration: none;
                }
                &.on {
                    border-color: #ffcf94;
                    color: #e96e20;
                }
                &.d2 {
                    padding: 0 5px;
                }
                &.cuz {
                    border-color: #80c1ea;
                    color: #e21001;
                    box-shadow: 0 0 4px #80c1ea;
                }
            }
            .arrow {
                border-width: 3px 3px 0;
                margin: 0 0 0 3px;
            }
            span {
                display: inline-block;
                line-height: 19px;
                padding: 0 0 0 15px;
            }
        }
    }

    .mod-cz-hm-bd2 .table2 thead th, .mod-cz-hm-bd2 .table2 td {
        border: 1px solid #d8d8d8;
        border-collapse: collapse;
        padding: 0 5px;
    }

    .mod-cz-hm-bd2 .table2 tbody tr:nth-of-type(even), .mod-cz-hm-bd2 .table2 tbody tr.even {
        background: #f9f9f9;
    }

    .panel-gd {
        .form-panel {
            padding-top: 6px;
            .fm-item {
                .k {
                    width: 115px;
                    *width: 100px;
                }
            }
            input {
                &.input-small {
                    width: 75px;
                    height: 22px;
                    line-height: 22px;
                    vertical-align: middle;
                    width: 73px;
                    height: 18px;
                    line-height: 18px;
                    padding: 2px 0 1px 2px;
                    vertical-align: middle;
                    border-color: #d6d6d6;
                    border-radius: 0;
                    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
                }
            }
            .btns {
                .btn {
                    padding-left: 0;
                }
            }
        }
        .fm-item {
            margin-bottom: 0;
            *margin-bottom: -5px;
        }
        .c {
            color: #666;
        }
        .c2 {
            color: #666;
        }
        .r {
            margin-right: 10px;
            input {
                vertical-align: middle;
                margin-right: 2px;
            }
        }
        .d {
            margin: 5px 5px 0;
            border-top: 1px solid #e7e7e7;
            line-height: 0;
            font-size: 0;
            text-align: center;
            font-family: nsimsun;
            span {
                line-height: 20px;
                display: inline-block;
                margin-top: -10px;
                font-size: 12px;
                background: #fff;
                padding: 0 10px;
            }
            em {
                color: #f30000;
                font-weight: bold;
            }
        }
        .btns {
            text-align: center;
        }
        .cz-logo {
            width: 70px;
            height: 74px;
            position: absolute;
            left: 14px;
            top: -8px;
        }
        .cz-logo-1 {
            background: url(https://p5.ssl.qhimg.com/t0135e253f1f19c0564.png) no-repeat 0 0;
        }
        .f2 {
            h3 {
                padding: 15px 0 5px;
            }
            ol {
                li {
                    list-style: decimal inside;
                    padding: 2px;
                }
            }
        }
    }

    .panel-gd-s {
        padding-bottom: 15px;
        overflow: hidden;
        .f {
            overflow: hidden;
            zoom: 1;
            padding-left: 10px;
            line-height: 23px;
            ul {
                float: left;
                width: 100%;
                margin-top: -3px;
            }
            li {
                float: left;
                width: 50%;
                height: 23px;
                overflow: hidden;
                &.r3 {
                    text-align: right;
                }
                &.w {
                    width: 100%;
                }
                img {
                    vertical-align: middle;
                    margin-right: 2px;
                }
            }
            select {
                vertical-align: middle;
            }
        }
    }

    .panel-gd-s .image img, .panel-gd-s .image {
        float: left;
    }

    .ie6 {
        .panel-gd-s {
            .f {
                padding-left: 7px;
            }
        }
    }

    .panel-gd-s .f li i, .panel-gd-s2 .ln i {
        color: #ff6d0b;
        font-weight: bold;
        font-style: normal;
    }

    .panel-gd-s2 {
        padding: 10px 14px;
        background: #fff;
        line-height: 23px;
        position: relative;
        .ln {
            height: 23px;
            .i {
                float: left;
                margin-left: 20px;
            }
            .i2 {
                float: right;
            }
            .sj {
                width: 41px;
                margin: 0 -13px 0 0;
                background: #d3e6f2;
                border-radius: 2px;
                text-align: center;
                line-height: 19px;
                position: relative;
                top: 2px;
            }
        }
    }

    .panel-reg-bd {
        .panel-gd-s {
            padding: 25px 31px 15px;
            margin: 0 -31px 0;
            position: relative;
            zoom: 1;
            background: #fdefef;
        }
    }

    .panel-gd-bd {
        background: #f2f2f2;
        padding: 15px 0 0;
        .panel-gd-s {
            padding: 0 14px 15px;
        }
        .table {
            background: url(https://p2.ssl.qhimg.com/t014e52e6c734e641c5.png) 0 27px;
            height: 267px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            text-align: center;
        }
        thead {
            th {
                text-align: center;
                background: #eaeaea;
                line-height: 27px;
                height: 27px;
            }
        }
        tbody {
            line-height: 24px;
            em {
                color: #f00;
            }
        }
        .page {
            background: #fff;
            padding: 15px 0;
        }
    }

    .panel-gd-dz {
        position: absolute;
        width: 410px;
        height: 310px;
        right: 14px;
        top: 33px;
        border: 2px solid #dadada;
        background: #f7f7f7;
        box-shadow: 2px 1px 3px rgba(0, 0, 0, .3);
        h3 {
            border: solid #dadada;
            border-width: 2px 2px 0;
            position: absolute;
            right: -2px;
            top: -25px;
            background: #f7f7f7;
            line-height: 23px;
            height: 23px;
            padding: 0 5px;
            box-shadow: 2px -1px 3px rgba(0, 0, 0, .3);
        }
        .dz {
            padding: 10px 20px 0;
            position: relative;
            background: #f7f7f7;
            .tit {
                line-height: 27px;
                border-bottom: 1px solid #e7e7e7;
            }
            .form-panel {
                .fm-item {
                    .k {
                        width: auto;
                    }
                }
            }
        }
        .form-panel {
            .fm-item {
                line-height: 23px;
                min-height: 23px;
                margin-bottom: 0;
            }
            input {
                &.input-small {
                    height: 17px;
                    line-height: 17px;
                }
            }
        }
        .d {
            margin: 15px 0 10px;
            span {
                background: #f7f7f7;
            }
        }
    }

    .mod-cz-hm-ft {
        padding: 5px 10px 0;
        .d {
            line-height: 27px;
            overflow: hidden;
            zoom: 1;
            vertical-align: bottom;
            position: relative;
            z-index: 1;
            margin-bottom: -1px;
            .bt {
                background: #f6f6f6;
                float: right;
                line-height: 25px;
                padding: 0 22px;
                border: 1px solid #cecece;
                position: relative;
                z-index: 10;
                &:hover {
                    text-decoration: none;
                    color: #333;
                }
                em {
                    color: #ed0000;
                }
                b {
                    display: none;
                }
            }
            .on {
                background: #fafafa;
                border-bottom: 0 none;
                padding: 0 25px 1px 19px;
                b {
                    display: block;
                    position: absolute;
                    height: 21px;
                    width: 8px;
                    background: url('https://p1.ssl.qhimg.com/t0144797788eef2ed4b.png');
                    overflow: hidden;
                    right: 9px;
                    top: 2px;
                }
            }
            span {
                color: #999;
                margin-right: 10px;
                vertical-align: bottom;
                b {
                    color: #333;
                    font-weight: 400;
                    font-size: 14px;
                }
            }
        }
        .table {
            thead {
                tr {
                    background: #fafafa;
                    border: 1px solid #d8d8d8;
                }
            }
        }
    }

    .reback {
        line-height: 38px;
        background: url(https://p4.ssl.qhimg.com/t01a04366b3d5c96754.png) no-repeat 0 7px;
        height: 38px;
        padding-left: 25px;
    }

    .tab-pane-zh {
        .ipt48 {
            width: 48px;
            vertical-align: middle;
        }
        .box {
            max-height: 270px;
            _height: 270px;
            overflow: hidden;
            overflow-y: auto;
        }
    }

    .panel-test {
        padding-top: 5px;
        overflow: hidden;
        .table {
            margin: 0 -1px -1px 0;
        }
    }

    .plays-memo b, .plays-memo span {
        color: #333;
    }

    .textarea-xlarge {
        height: 44px;
    }

    .prize-a {
        margin-left: 4px;
        font-size: 12px;
    }

    .ipt-45 {
        width: 45px;
    }

    .xfq {
        .fg {
            display: inline-block;
            width: 39px;
            *zoom: 1;
        }
    }

    input {
        &.text {
            &.hm-input {
                width: 70px;
                height: 24px;
                line-height: 24px;
                font-size: 14px;
                background: url(https://p5.ssl.qhimg.com/t01570d56650b5fe1fc.png) no-repeat -1px -2px;
                border: 0;
                font-weight: bold;
                text-align: center;
                color: #444;
                font-family: Arial, '\fffd\fffd\fffd\fffd', Tahoma, Helvetica, sans-serif;
            }
        }
    }

    .inputArea {
        .delProjID {
            padding: 0 10px;
            height: 20px;
            line-height: 20px;
        }
    }

    .btn-large3 {
        font-size: 23px;
        font-weight: bold;
    }

    .coop-ck-table {
        th {
            background-color: #fbfbfb;
        }
    }

    .tips-bottom {
        padding: 10px 30px 20px;
        margin: 10px 0 0;
        border: 1px #ddd solid;
        background: #fff;
        color: #666;
    }

    .remark {
        padding: 5px 20px 20px;
        border-top: 1px #ccc dashed;
    }

    .failed {
        padding: 0 20px 10px;
        tr {
            border: 1px #ccc solid;
            height: 22px;
            line-height: 22px;
        }
    }

    .ffailed {
        p {
            padding: 0 0 4px 0;
        }
    }

    .failed td, .failed th {
        padding: 0 4px;
    }

    .ten-issue-code {
        width: 221px;
        left: -13px;
        _left: -28px;
        top: 26px;
        z-index: 5;
        position: absolute;
    }

    .odd {
        background: #f7f8f9;
    }

    .line-light {
        background-color: #fff7e4;
    }

    .zhanji-dingz {
        li {
            &.fm-item {
                padding: 0;
            }
        }
    }

    .pl3-bd {
        .mod-cz-hd {
            .nav-cz-main {
                background: #096abf url(https://p3.ssl.qhimg.com/t01ba044b88d54fc0a1.png) repeat-x 0 0;
                .main {
                    border-right: 1px solid #1b81ed;
                    li {
                        border-left: 1px #1b81ed solid;
                        border-right: 1px #005f9e solid;
                        &.active {
                            &:hover {
                                background: #0970cd url(https://p2.ssl.qhimg.com/t01edf7d8164b7bdd24.png) no-repeat center bottom;
                            }
                        }
                        &:hover {
                            background: #105caa;
                        }
                    }
                    .active {
                        background: #115da6 url(https://p2.ssl.qhimg.com/t01edf7d8164b7bdd24.png) no-repeat center bottom;
                        border-left-color: #284070;
                        border-right-color: #1059a0;
                    }
                }
                .quirk {
                    li {
                        a {
                            color: #cee1f2;
                        }
                        &.divider {
                            color: #5397d2;
                        }
                    }
                }
            }
        }
        .mod-cz-bd {
            .nav-cz-sub {
                .active {
                    border-color: #005da3;
                    background: #2e8ccd;
                }
            }
        }
    }

    .mod-select-bolls-3 {
        margin: 0 20px;
        .boll-item-col2 {
            .v {
                width: 648px;
            }
            .t {
                width: 0;
            }
        }
    }

    .mod-select-bolls-col2 {
        margin: 0 20px;
        .boll-item-col3 {
            .v {
                width: 426px;
            }
            .t {
                width: 222px;
            }
        }
    }

    .btn-boll-2 {
        &:hover {
            color: #fff;
        }
    }

    .tool-list-sty2 {
        li {
            .btn-middle {
                padding: 0 7px;
                _height: 17px;
                _padding: 5px 7px 0;
                i {
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -136px;
                    &.blue-ball {
                        background-position: -44px -136px;
                    }
                }
            }
        }
    }

    .checkall-btn {
        float: right;
        display: inline;
        margin: -52px 26px 0 0;
        .btn-middle {
            padding: 0 7px;
        }
    }

    .checkall-xw-btn {
        float: left;
        display: inline;
        margin-top: 4px;
        .btn-middle {
            padding: 0 7px;
        }
    }

    .prize-balllist-fl {
        float: left;
    }

    .prize-ball-list {
        padding-top: 5px;
        overflow: hidden;
        display: inline-block;
        overflow: hidden;
        vertical-align: top;
        li {
            float: left;
            width: 10px;
            margin-right: 3px;
        }
    }

    .prize-ball {
        display: inline-block;
        zoom: 1;
        *display: inline;
        width: 10px;
        height: 10px;
        background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -136px;
        display: inline-block;
        width: 10px;
        height: 10px;
        *margin-right: 3px;
        background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -136px;
    }

    .prize-ball-blue {
        overflow: hidden;
        padding-top: 5px;
        display: inline-block;
        vertical-align: top;
        .prize-ball {
            background-position: -44px -136px;
        }
    }

    .luckbuy {
        .luckbuy-list {
            text-align: center;
            padding: 0 0 12px 10px;
            li {
                width: 83px;
                height: 83px;
                margin: 14px 0 0 14px;
                em {
                    display: block;
                    width: 83px;
                    height: 83px;
                }
            }
        }
        .form-item {
            label {
                color: #333;
                font-size: 28px;
                line-height: 42px;
                font-weight: bold;
                font-family: 'Microsoft Yahei';
                vertical-align: middle;
            }
            .ssq-luck-ipt {
                width: 298px;
                height: 20px;
                padding: 11px 0 11px 4px;
                line-height: 20px;
                font-size: 20px;
                border: 1px solid #b2b2b2;
                margin-left: 3px;
                vertical-align: middle;
                box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.1);
            }
        }
        .select-box {
            height: 42px;
            line-height: 42px;
            border: 0;
            .txt-box {
                display: inline-block;
                width: 96px;
                height: 42px;
                line-height: 42px;
                border: 1px solid #b2b2b2;
            }
            .ico {
                width: 43px;
                height: 42px;
                background: url(https://p0.ssl.qhimg.com/t015002cd89d9e167d2.png) no-repeat;
            }
            .txt {
                font-size: 34px;
                font-weight: bold;
                font-family: Arial;
                margin-left: 7px;
            }
            .select-txt {
                font-size: 28px;
                font-weight: bold;
                font-family: 'Microsoft Yahei';
                color: #666;
                display: inline-block;
                height: 42px;
                line-height: 42px;
            }
            .list {
                width: 96px;
                top: 42px;
                left: 5px;
                max-height: 420px;
                _height: 420px;
                overflow: auto;
                li {
                    float: none;
                    width: auto;
                    height: 42px;
                    line-height: 42px;
                    margin: 0;
                    font-size: 34px;
                    font-weight: bold;
                    font-family: Arial;
                    text-align: left;
                }
            }
        }
        .select-box-nian {
            .txt-box {
                width: 155px;
            }
            .list {
                width: 155px;
            }
        }
    }

    .tool-list {
        .tool-list-num {
            text-align: center;
            font-size: 0;
            dt {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                font-size: 12px;
            }
            dd {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                a {
                    display: inline-block;
                    width: 27px;
                    text-align: center;
                    line-height: 27px;
                    color: #666;
                    font-family: Tahoma;
                    font-size: 14px;
                    font-weight: bold;
                    background: #dedede;
                    &:hover {
                        background: #ffb814;
                    }
                    &.active {
                        color: #fff;
                        background: #d11b0f;
                    }
                }
            }
        }
    }

    .ssq-shengxiao {
        li {
            em {
                background: url(https://p0.ssl.qhimg.com/t012e1dec23f7835e83.png) no-repeat;
                &:hover {
                    &.shu {
                        background-position: 0 -194px;
                    }
                    &.niu {
                        background-position: -97px -194px;
                    }
                    &.hu {
                        background-position: -193px -194px;
                    }
                    &.tu {
                        background-position: -290px -194px;
                    }
                    &.long {
                        background-position: -387px -194px;
                    }
                    &.she {
                        background-position: -484px -194px;
                    }
                    &.ma {
                        background-position: 0 -291px;
                    }
                    &.yang {
                        background-position: -97px -291px;
                    }
                    &.hou {
                        background-position: -193px -291px;
                    }
                    &.ji {
                        background-position: -290px -291px;
                    }
                    &.gou {
                        background-position: -387px -291px;
                    }
                    &.zhu {
                        background-position: -484px -291px;
                    }
                }
                &.niu {
                    background-position: -97px 0;
                }
                &.hu {
                    background-position: -193px 0;
                }
                &.tu {
                    background-position: -290px 0;
                }
                &.long {
                    background-position: -387px 0;
                }
                &.she {
                    background-position: -484px 0;
                }
                &.ma {
                    background-position: 0 -97px;
                }
                &.yang {
                    background-position: -97px -97px;
                }
                &.hou {
                    background-position: -193px -97px;
                }
                &.ji {
                    background-position: -290px -97px;
                }
                &.gou {
                    background-position: -387px -97px;
                }
                &.zhu {
                    background-position: -484px -97px;
                }
            }
            &.btn-boll-active {
                em {
                    &.shu {
                        background-position: 0 -387px;
                    }
                    &.niu {
                        background-position: -97px -386px;
                    }
                    &.hu {
                        background-position: -193px -386px;
                    }
                    &.tu {
                        background-position: -290px -386px;
                    }
                    &.long {
                        background-position: -387px -386px;
                    }
                    &.she {
                        background-position: -484px -386px;
                    }
                    &.ma {
                        background-position: 0 -484px;
                    }
                    &.yang {
                        background-position: -97px -484px;
                    }
                    &.hou {
                        background-position: -193px -484px;
                    }
                    &.ji {
                        background-position: -290px -484px;
                    }
                    &.gou {
                        background-position: -387px -484px;
                    }
                    &.zhu {
                        background-position: -484px -484px;
                    }
                }
            }
        }
    }

    .ssq-xingzuo {
        li {
            em {
                background: url(https://p3.ssl.qhimg.com/t01ec5720b9b757d54d.png) no-repeat;
                &:hover {
                    &.by {
                        background-position: 0 -194px;
                    }
                    &.jn {
                        background-position: -97px -194px;
                    }
                    &.sz {
                        background-position: -193px -194px;
                    }
                    &.jx {
                        background-position: -290px -194px;
                    }
                    &.shiz {
                        background-position: -387px -194px;
                    }
                    &.cn {
                        background-position: -484px -194px;
                    }
                    &.tc {
                        background-position: 0 -291px;
                    }
                    &.tx {
                        background-position: -97px -291px;
                    }
                    &.ss {
                        background-position: -193px -291px;
                    }
                    &.mj {
                        background-position: -290px -291px;
                    }
                    &.sp {
                        background-position: -387px -291px;
                    }
                    &.sy {
                        background-position: -484px -291px;
                    }
                }
                &.jn {
                    background-position: -97px 0;
                }
                &.sz {
                    background-position: -193px 0;
                }
                &.jx {
                    background-position: -290px 0;
                }
                &.shiz {
                    background-position: -387px 0;
                }
                &.cn {
                    background-position: -484px 0;
                }
                &.tc {
                    background-position: 0 -97px;
                }
                &.tx {
                    background-position: -97px -97px;
                }
                &.ss {
                    background-position: -193px -97px;
                }
                &.mj {
                    background-position: -290px -97px;
                }
                &.sp {
                    background-position: -387px -97px;
                }
                &.sy {
                    background-position: -484px -97px;
                }
            }
            &.btn-boll-active {
                em {
                    &.by {
                        background-position: 0 -387px;
                    }
                    &.jn {
                        background-position: -97px -386px;
                    }
                    &.sz {
                        background-position: -193px -386px;
                    }
                    &.jx {
                        background-position: -290px -386px;
                    }
                    &.shiz {
                        background-position: -387px -386px;
                    }
                    &.cn {
                        background-position: -484px -386px;
                    }
                    &.tc {
                        background-position: 0 -484px;
                    }
                    &.tx {
                        background-position: -97px -484px;
                    }
                    &.ss {
                        background-position: -193px -484px;
                    }
                    &.mj {
                        background-position: -290px -484px;
                    }
                    &.sp {
                        background-position: -387px -484px;
                    }
                    &.sy {
                        background-position: -484px -484px;
                    }
                }
            }
        }
    }

    .ssq-xingming, .ssq-shoujh {
        padding: 30px 0 10px 44px;
    }

    .ssq-shengri {
        padding: 30px 0 10px 28px;
        line-height: 75px;
    }

    .mod-upload-col2 {
        margin: 0 30px 15px;
        h3 {
            line-height: 26px;
        }
        ul {
            color: #333;
            line-height: 22px;
            li {
                display: inline-block;
            }
        }
        p {
            padding-top: 5px;
            color: #999;
        }
    }

    .mod-select-result-col2 {
        margin: 0 30px;
        .total-result {
            display: inline-block;
            padding-right: 60px;
        }
        .total {
            input {
                width: auto;
                &.ipt-45 {
                    width: 45px;
                }
            }
        }
    }

    .issueList {
        background: #fafafa;
        padding: 10px 30px 0 0;
        li {
            float: left;
            width: 288px;
            height: 38px;
            padding-left: 30px;
            .clogray {
                color: #666;
                font-family: Tahoma;
            }
        }
    }

    .mod-textarea-result-copy {
        margin-bottom: 10px;
        .bd {
            border: 0;
        }
        .result {
            border-right: 0;
            .content {
                border-bottom: 0;
            }
        }
        .textarea {
            font-weight: bold;
        }
    }

    .textarea-wlarge {
        width: 542px;
    }

    .textarea-hlarge {
        height: 130px;
    }

    .mod-select-bolls-col3 {
        margin: 0 auto;
    }

    .sfc-table {
        width: 728px;
        border-bottom: 1px solid #d0d0d0;
        th {
            border: 1px solid #d0d0d0;
            border-bottom: 0;
            background: url(https://p3.ssl.qhimg.com/t01f7f2e80bc142fa88.png) repeat-x;
            font-weight: bold;
            text-align: center;
            color: #333;
            line-height: 22px;
        }
        sup {
            vertical-align: super;
            font-size: 12px;
            font-family: 'Microsoft Yahei';
            font-weight: normal;
            color: #676767;
        }
        tbody {
            tr {
                td {
                    border-top: 1px solid #d0d0d0;
                    text-align: center;
                    color: #656565;
                }
            }
        }
        .txtc-f {
            color: #fff;
        }
        .txtc-blue {
            color: #1e51a4;
        }
        .cur {
            cursor: pointer;
        }
        .score {
            color: #ccc;
            span {
                color: #656565;
                display: inline-block;
                width: 30px;
                *width: 28px;
                display: inline-block;
                width: 36px;
                *width: 30px;
                color: #656565;
                text-align: center;
                &.centbg-blue {
                    background: #4480e0;
                    color: #fff;
                    width: 32px;
                    *width: 26px;
                    margin: 0 2px;
                }
                &.centbg-deepred {
                    background: #c45f5f;
                    color: #fff;
                    width: 32px;
                    *width: 26px;
                    margin: 0 2px;
                }
                &.centbg-yellow {
                    background: #df8e00;
                    color: #fff;
                    width: 32px;
                    *width: 26px;
                    margin: 0 2px;
                }
            }
            .btn {
                width: 22px;
                margin: 5px 5px;
                text-align: center;
                color: #666;
                font-weight: bold;
                font-family: Tahoma;
                font-size: 14px;
            }
            .btn-boll-active {
                border: 1px #f66a03 solid;
                background: #ff8331 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) no-repeat 0 -299px;
                color: #fff;
            }
        }
        .btn-middel-y {
            width: 15px;
            height: 15px;
            line-height: 15px;
            color: #c87843;
        }
        a {
            color: #1e51a4;
        }
        .bet-score {
            border-left: 1px solid #d0d0d0;
            .score {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                vertical-align: middle;
                .btn {
                    margin: 3px 5px;
                }
            }
            .zhuke {
                display: inline-block;
                width: 37px;
                vertical-align: middle;
            }
            .all-btn {
                display: inline-block;
                width: 34px;
                vertical-align: middle;
            }
        }
        .visit-team {
            font-size: 14px;
            display: inline-block;
            width: 75px;
            color: #333;
        }
        .visit-team02 {
            font-size: 12px;
            display: inline-block;
            width: 75px;
            color: #333;
        }
    }

    .mod-aside-bg {
        background: #fffaee;
        padding: 10px 13px;
        border-bottom: 1px #e9d9b2 solid;
    }

    .winner-infor {
        float: left;
        width: 223px;
        dl {
            padding-bottom: 4px;
        }
        dt {
            float: left;
        }
        .icon {
            display: inline-block;
        }
        .icon-prize {
            width: 40px;
            height: 40px;
            background: url(https://p0.ssl.qhimg.com/t013c14ace6349cc9dd.png) no-repeat;
        }
        dd {
            overflow: hidden;
            zoom: 1;
            padding-left: 10px;
            color: #666;
            h4 {
                color: #333;
                font-weight: normal;
                font-size: 12px;
            }
        }
        .infor {
            line-height: 22px;
            strong {
                display: inline-block;
                float: left;
            }
            span {
                display: block;
                overflow: hidden;
            }
        }
        .tool {
            padding: 6px 0 0 38px;
            .btn-middle {
                padding: 0 10px;
                margin-right: 10px;
            }
        }
    }

    .btn-middel-y {
        display: inline-block;
        white-space: pre;
        word-break: keep-all;
        height: 22px;
        line-height: 22px;
        border-radius: 2px;
        text-align: center;
        border: 1px #fad0a9 solid;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        background: #f8f8f8 url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -274px;
        cursor: pointer;
    }

    .mod-explaina-table {
        td {
            &.kjhm-rj {
                text-align: right;
                font-weight: bold;
                padding-right: 5px;
            }
        }
        .th2 {
            th {
                background: #f0f0f0;
                text-align: center;
            }
        }
        th {
            text-align: center;
        }
    }

    .ssc-gray {
        color: #8a8a8a;
    }

    .kpc-bd {
        .mod-cz-hd {
            .cz-xssclogo {
                background: url(https://p4.ssl.qhimg.com/t01c1287c2da6701809.png) no-repeat 0 0;
            }
            .cz-params {
                li {
                    b {
                        &.normal {
                            color: #000;
                            font-size: 12px;
                        }
                    }
                }
            }
            .nav-cz-main {
                background: #ed5314 url(https://p0.ssl.qhimg.com/t01604d5862dd0f23b9.png) repeat-x 0 -64px;
                .main {
                    border-right: 1px solid #ff7c05;
                    .active {
                        background: #ec1200 url(https://p2.ssl.qhimg.com/t01edf7d8164b7bdd24.png) no-repeat center bottom;
                        border-left-color: #d81200;
                        border-right-color: #e40c0a;
                    }
                    li {
                        border-left: 1px #ff7c05 solid;
                        border-right: 1px #e40c0a solid;
                        &.active {
                            &:hover {
                                background: #f03d0d url(https://p2.ssl.qhimg.com/t01edf7d8164b7bdd24.png) no-repeat center bottom;
                            }
                        }
                        &:hover {
                            background: #f03d0d;
                        }
                    }
                }
                .quirk {
                    li {
                        a {
                            color: #fddfd0;
                        }
                        &.divider {
                            color: #f78e5c;
                        }
                    }
                }
            }
            .cz-kl8logo {
                background: url(https://p0.ssl.qhimg.com/t01d976b425890fcb6b.png) no-repeat 0 0;
            }
            .cz-syylogo {
                height: 74px;
                width: 74px;
                background: url(https://p4.ssl.qhimg.com/t01ecb8c93e6cd5e311.png) no-repeat 0 0;
            }
        }
        .mod-cz-bd {
            .nav-cz-sub {
                .active {
                    border-color: #ba2f18;
                    background: #ee6227;
                }
            }
        }
    }

    .kpc-select-item {
        margin-top: 10px;
        margin-top: 0;
        z-index: 3;
        zoom: 1;
        .hd {
            padding: 5px;
        }
        .boll-item {
            padding: 7px 15px 10px;
            background: #fffaee;
            border: 1px solid #eadab5;
            .k {
                width: 60px;
                .k1 {
                    width: auto;
                    .caret {
                        border-color: #fffaee #fffaee #fffaee #e6e6e6;
                        _right: -10px;
                    }
                }
                .k2 {
                    margin-top: 7px;
                }
            }
            .v {
                width: 528px;
            }
            .t {
                float: none;
                width: 585px;
                overflow: hidden;
                padding: 5px 0 0 4px;
                p {
                    color: #c4c4c4;
                }
                .tool-bar {
                    float: right;
                    color: #c4c4c4;
                    a {
                        color: #3f79d0;
                    }
                }
            }
        }
        .num-list {
            li {
                float: left;
                display: inline;
                width: 63px;
                margin-left: 12px;
                _margin-left: 8px;
                width: 67px;
                margin-left: 8px;
                _margin-left: 4px;
                .btn-middle {
                    height: 18px;
                    line-height: 18px;
                    border: 1px solid #bcbcbc;
                    padding: 0 5px;
                    margin-top: 7px;
                    height: 18px;
                    line-height: 18px;
                    border: 1px solid #bcbcbc;
                    padding: 0 5px;
                    margin-top: 7px;
                    background: url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -629px;
                    width: 65px;
                    padding: 0;
                    &:hover {
                        border: 1px solid #eccba8;
                        background: #ffe4bd url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -274px;
                        color: #e40000;
                    }
                }
                .n {
                    display: block;
                    text-align: center;
                    margin-top: 7px;
                    color: #8a8a8a;
                }
            }
            .r4 {
                li {
                    width: 75px;
                    .btn-middle {
                        width: 75px;
                    }
                }
            }
            .r5 {
                li {
                    width: 95px;
                    .btn-middle {
                        width: 95px;
                    }
                }
            }
            .r6 {
                li {
                    width: 120px;
                    .btn-middle {
                        width: 120px;
                    }
                }
            }
            .r7 {
                li {
                    width: 128px;
                    .btn-middle {
                        width: 128px;
                    }
                }
            }
            .r8 {
                li {
                    width: 173px;
                    .btn-middle {
                        width: 173px;
                    }
                }
            }
        }
        .yl-combo-r7 {
            .boll-item {
                .v {
                    width: 554px;
                }
            }
        }
        .tools-boll-xssc {
            .boll-item {
                padding: 7px 10px 10px;
                .k {
                    width: 72px;
                }
                .v {
                    width: 526px;
                }
            }
        }
    }

    .mod-cz-desc02 {
        .hd {
            border-bottom: 0;
        }
        .bd {
            padding: 10px 0 0;
        }
    }

    .mod-kjnum-table {
        border: 1px solid #e0e0e0;
        .br2 {
            border-right: 1px solid #e0e0e0;
        }
        tr {
            td {
                border-right: 1px solid #e0e0e0;
            }
        }
        td {
            .code {
                display: inline-block;
                width: 50px;
                color: #146ac9;
            }
            .code2 {
                display: inline-block;
                width: 30px;
            }
        }
        tbody {
            tr {
                &:nth-child(even) {
                    background-color: #f8f8f8;
                }
            }
        }
    }

    .mod-kjnum-table th span, .mod-kjnum-table td span {
        display: inline-block;
        width: 50px;
        text-align: center;
    }

    .mod-kjnum-table th, .mod-kjnum-table td {
        padding: 3px 0;
        border-bottom: 1px solid #e0e0e0;
    }

    .mod-explaina-table th, .mod-explaina-table td {
        padding: 3px 0 3px 5px;
        border: 1px solid #e0e0e0;
    }

    .ball-num {
        text-align: center;
    }

    .mod-aside-xssckj {
        .hd {
            border-bottom: 0;
            h3 {
                float: none;
                padding: 10px 0;
                font-size: 13px;
                text-align: center;
            }
            .kj-date {
                text-align: center;
                padding: 5px 0;
            }
        }
        .bd {
            margin-top: 10px;
        }
        .ft {
            padding: 0 0 10px 0;
        }
    }

    .kpkjcode {
        span {
            display: inline-block;
            width: 39px;
        }
        th {
            padding: 0 2px;
            background: #f4f4f4;
            border: 1px solid #dcdcdc;
            text-align: center;
        }
        .tabtit {
            display: inline-block;
            width: 65px;
            *width: 65px;
            cursor: pointer;
            border-bottom: 1px solid #dcdcdc;
            border-right: 1px solid #dcdcdc;
            text-align: center;
            color: #3f79d0;
            &:hover {
                color: #c70000;
            }
        }
        .last {
            border-right: 0;
        }
        .active {
            border-bottom: 0;
            color: #dd3e3e;
            font-weight: bold;
            background-image: linear-gradient(to bottom, #fefefe, #f4f4f4);
            &:hover {
                color: #dd3e3e;
            }
        }
        tr {
            line-height: 17px;
        }
        td {
            padding: 4px 0;
            text-align: center;
        }
        .yl_issue {
            color: #999;
        }
    }

    .mod-kjnum-table th, .mod-explaina-table th {
        background: #f4f4f4;
    }

    .tab-pane-znzh {
        .fm-item {
            p {
                padding: 3px 0;
            }
        }
        .dissel {
            color: #999;
        }
        .table {
            th {
                padding: 5px 0;
                border-top: 1px solid #d5d5d5;
                background: #f4f4f4;
            }
            .tal {
                text-align: left;
            }
        }
    }

    .btn-small-primary {
        padding: 0 10px;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
        color: #fff9e6;
        font-weight: normal;
        border-radius: 0;
        text-shadow: none;
    }

    .tab-pane-znzh .table td, .tab-pane-znzh .table th {
        text-align: center;
    }

    .mod-select-bolls-col4 {
        .boll-item {
            padding: 0 0 0 40px;
            .v {
                width: 260px;
            }
        }
        .hd {
            text-align: left;
            .t1 {
                width: 365px;
            }
        }
        .boll-list {
            li {
                width: 47px;
                height: 65px;
                margin-right: 10px;
            }
        }
    }

    .ico-ball2 {
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        font-family: Tahoma;
        font-size: 11px;
        font-weight: bold;
        color: #fff;
        background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat 0 -46px;
    }

    .ico-ball-t2 {
        background-position: -44px -46px;
    }

    .coop-kj-num {
        height: 44px;
        background: #ffe9b8;
        .kj-ball-list {
            float: left;
            padding: 10px 0 0 15px;
        }
        .ball-list {
            display: inline-block;
            vertical-align: middle;
            *display: inline;
            *zoom: 1;
        }
        .ico-ball2 {
            float: left;
            margin-right: 3px;
        }
    }

    .coop-kj-num .coop-kj-data, .coop-kj-num .coop-kj-lnk {
        float: left;
        display: block;
        padding: 0 0 0 15px;
        color: #666;
        line-height: 44px;
    }

    .panel-order-view02 {
        .tip {
            line-height: 38px;
        }
        .sel_info {
            text-align: right;
            line-height: 30px;
        }
        .table {
            padding: 15px;
            th {
                line-height: 28px;
            }
            td {
                padding: 5px;
                vertical-align: top;
                em {
                    color: #999;
                }
            }
            .t1 {
                background: #f2f2f2;
                vertical-align: middle;
            }
            &.name {
                display: inline-block;
                width: 22px;
            }
        }
    }

    .panel-order-view02 .table th, .panel-order-view02 .table td {
        text-align: center;
        border: 1px solid #ececec;
    }

    .mod-cz-hm-hd3 {
        background: #fff;
        .mod-select-filter {
            padding: 0;
        }
    }

    .ico-ball3 {
        width: 22px;
        height: 22px;
        line-height: 22px;
        text-align: center;
        font-family: Tahoma;
        font-size: 11px;
        font-weight: bold;
        color: #555;
        background: url(https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png) no-repeat -44px -287px;
    }

    .ico-ball3-active {
        background-position: 0 -287px;
        color: #fff;
    }

    .select-box02 {
        width: 85px;
        border-radius: 3px;
        padding: 0 0 0 5px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1) inset;
        .list {
            _left: 2px;
        }
    }

    .select-box-current {
        border-color: #80c1ea;
        box-shadow: 0 0 4px #80c1ea;
        .list {
            display: block;
        }
    }

    .select-con .select-box, .select-con .select02 {
        display: inline-block;
        vertical-align: middle;
        *margin-right: 5px;
        *vertical-align: middle;
        *display: inline;
        *zoom: 1;
    }

    .select02 {
        position: relative;
        z-index: 20;
        .txt-box {
            position: relative;
            z-index: 21;
            margin: 0 2px;
            display: inline-block;
            width: 85px;
            border-radius: 3px;
            padding: 0 0 0 5px;
            font-size: 12px;
            text-align: left;
            background: #fff;
            height: 20px;
            border: 1px #d5d5d5 solid;
            cursor: pointer;
            box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1) inset;
            background-image: linear-gradient(to bottom, #fff, #f3f3f3);
        }
        .ico {
            float: right;
            height: 20px;
            width: 20px;
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -30px 4px;
        }
        .select-bd {
            position: absolute;
            top: 19px;
            _top: 20px;
            right: 0;
            display: none;
            width: 294px;
            border: 3px solid #bfbfbf;
            border-radius: 3px;
            text-align: left;
            padding: 6px 10px 5px;
            background: #fff;
            .ball-list {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                vertical-align: top;
                margin-bottom: 5px;
                li {
                    float: left;
                    margin-right: 3px;
                    cursor: pointer;
                }
            }
            .search-btn {
                display: inline-block;
                padding: 0 5px;
                height: 21px;
                border: 1px solid #da9e49;
                border-radius: 2px;
                background: #ffcc76;
                background-image: linear-gradient(to bottom, #ffd177, #ffb770);
                line-height: 21px;
                color: #7c2300;
                cursor: pointer;
                vertical-align: middle;
                *margin-left: 5px;
            }
            .tips {
                padding-bottom: 5px;
            }
        }
    }

    .select02-current {
        .txt-box {
            height: 19px;
            margin: 0;
            border: 3px solid #bfbfbf;
            border-radius: 3px 3px 0 0;
            border-bottom: 0;
            background-image: none;
            box-shadow: none;
            line-height: 16px;
        }
        .select-bd {
            display: block;
        }
        .ico {
            background-position: -30px 2px;
        }
    }

    .mod-cz-hm-bd3 {
        .table3 {
            margin: 0 -1px 0;
            table {
                th {
                    height: 24px;
                    border: 1px solid #d0d0d0;
                    background: #eaeaea url(https://p3.ssl.qhimg.com/t01f7f2e80bc142fa88.png) repeat-x;
                    font-weight: bold;
                    text-align: center;
                    color: #666;
                    line-height: 24px;
                    &.bc {
                        background: #eaeaea;
                        font-weight: normal;
                        color: #333;
                    }
                }
                td {
                    height: 35px;
                    border: 1px solid #d0d0d0;
                    font-size: 12px;
                    color: #666;
                }
                .yl_code {
                    font-size: 14px;
                }
            }
            .tw1 {
                width: 115px;
            }
            .tw2 {
                width: 188px;
            }
            .tw3 {
                width: 138px;
            }
            .tw4 {
                width: 305px;
            }
            .tw5 {
                width: 103px;
            }
            .tw6 {
                width: 60px;
            }
            .tw7 {
                width: 60px;
            }
            .tw8 {
                width: 78px;
            }
            .th1 {
                height: auto;
            }
            .t1 {
                display: inline-block;
                width: 42px;
                height: 24px;
                _height: 19px;
                _padding-top: 5px;
                text-align: center;
                font-weight: normal;
            }
            .t2 {
                display: inline-block;
                width: 40px;
                text-align: center;
                font-weight: normal;
            }
            .t3 {
                display: inline-block;
                width: 55px;
                text-align: center;
                font-weight: normal;
            }
            .tpot {
                cursor: pointer;
            }
            .fsz14 {
                font-size: 14px;
            }
            .fsz14i {
                font-size: 14px;
                font-family: Verdana;
                color: #c70000;
                font-weight: bold;
            }
            .even {
                background: #f6f6f6;
            }
            .line-light {
                background: #fff7e4;
            }
            span {
                em {
                    display: inline-block;
                    vertical-align: -1px;
                }
            }
            .arrow-up {
                display: block;
                height: 0;
                width: 0;
                margin-bottom: 2px;
                border-color: #eaeaea #eaeaea #9d9d9d #eaeaea;
                border-style: solid;
                border-width: 0 4px 4px;
                *border-width: 0 5px 5px;
                overflow: hidden;
            }
            .arrow-down {
                display: block;
                height: 0;
                width: 0;
                border-color: #9d9d9d #eaeaea #eaeaea #eaeaea;
                border-style: solid;
                border-width: 4px 4px 0;
                overflow: hidden;
            }
            .active-up {
                .arrow-up {
                    border-color: #eaeaea #eaeaea #e1652f #eaeaea;
                }
            }
            .active-down {
                .arrow-down {
                    border-color: #e1652f #eaeaea #eaeaea #eaeaea;
                }
            }
            .button {
                text-align: left;
                padding-left: 6px;
                font-size: 0;
                .btn-min {
                    display: inline-block;
                    height: 21px;
                    line-height: 21px;
                    padding: 0 8px;
                    margin-right: 6px;
                    *margin-right: 5px;
                    border: 1px solid #b6b6b6;
                    border-radius: 2px;
                    background: url(https://p2.ssl.qhimg.com/t01552ea6f952636a04.png) repeat-x 0 -24px;
                    color: #444;
                    font-size: 12px;
                    cursor: pointer;
                }
                .btn-min-active {
                    border: 1px solid #c65101;
                    background-position: 0 -113px;
                    color: #fff;
                    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
                }
            }
            tfoot {
                td {
                    border: 0;
                }
                .more-data-list {
                    margin: 0 2px;
                }
            }
        }
        .syyw7 {
            .tw1 {
                width: 180px;
            }
            .tw8 {
                width: 65px;
            }
        }
        .syyw5 {
            .tw1 {
                width: 130px;
            }
            .tw8 {
                width: 75px;
            }
        }
        .syyw8 {
            .tw1 {
                width: 195px;
            }
            .tw7 {
                width: 55px;
            }
            .tw8 {
                width: 65px;
            }
        }
        .data-info {
            padding: 16px 0 4px 24px;
            h3 {
                margin-bottom: 1px;
            }
            p {
                color: #666;
                line-height: 24px;
            }
        }
    }

    .select-con .select-box, .select-con .select02, .select-con .kj-box {
        display: inline-block;
        vertical-align: middle;
        *margin-right: 5px;
        *vertical-align: middle;
        *display: inline;
        *zoom: 1;
    }

    .select-con {
        .kj-box {
            position: relative;
            z-index: 20;
            .kj-btn {
                margin: 0 2px;
                display: inline-block;
                border-radius: 3px;
                padding: 0 10px;
                font-size: 12px;
                text-align: left;
                background: #fff;
                height: 20px;
                border: 1px #d5d5d5 solid;
                cursor: pointer;
                color: #0f63c2;
                line-height: 20px;
                background-image: linear-gradient(to bottom, #fff, #f4f4f4);
            }
        }
    }

    .panel-t7 {
        .panel-content {
            .hd {
                border-bottom: 1px #c0c0c0 dashed;
                padding-bottom: 8px;
            }
        }
    }

    .ten-issue-code-data {
        width: 216px;
        right: -75px;
        _right: -69px;
        top: 26px;
        z-index: 5;
        position: absolute;
        .sd {
            left: 141px;
            _left: 145px;
        }
        .table {
            height: 230px;
            overflow: hidden;
        }
    }

    .pick-total {
        position: relative;
        z-index: 2;
        display: inline-block;
        *display: inline;
        *zoom: 1;
        margin-right: 5px;
        padding-top: 2px;
        .btn-large {
            position: relative;
            z-index: 3;
            border: 1px solid #eac47b;
            background: #fbedcf url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) repeat-x 0 -131px;
            color: #983d00;
            em {
                color: #c51700;
                font-size: 20px;
            }
        }
        .arrow {
            display: inline-block;
            height: 0;
            width: 0;
            margin-left: 5px;
            border-color: #c46200 #ffeecd #ffeecd #ffeecd;
            border-style: solid;
            border-width: 5px 5px 0;
            overflow: hidden;
            vertical-align: middle;
        }
        .pick-total-result {
            display: none;
            position: absolute;
            left: 0;
            z-index: 2;
            bottom: 38px;
            *bottom: 37px;
            width: 433px;
            border: 1px solid #d1d1d1;
            background: #fff;
            .hd {
                height: 32px;
                line-height: 32px;
                background: #fcfcfc;
                padding: 0 8px;
                border-bottom: 1px solid #d1d1d1;
                background-image: linear-gradient(to bottom, #fff, #fafafa);
                h3 {
                    float: left;
                    color: #333;
                    font-weight: normal;
                }
                .hd-fr {
                    float: right;
                    cursor: pointer;
                }
            }
            .content {
                background: #fffdf7;
                height: 140px;
                overflow: auto;
                border-bottom: 1px #e5e5e5 solid;
                line-height: 18px;
                color: #333;
                li {
                    overflow: hidden;
                    zoom: 1;
                    padding: 2px 8px;
                    border-bottom: 1px #ddd dotted;
                    .em {
                        color: red;
                        margin: 0 5px;
                    }
                    &.active {
                        background: #fce1c5;
                    }
                }
                .del {
                    float: right;
                    cursor: pointer;
                    color: #999;
                }
                .modi {
                    float: right;
                    cursor: pointer;
                    color: #999;
                    margin-right: 4px;
                }
                .code {
                    float: left;
                    width: 340px;
                    word-break: break-all;
                    word-wrap: break-word;
                    text-align: left;
                }
            }
        }
    }

    .pick-total-active {
        .arrow {
            border-color: #ffeecd #ffeecd #c46200 #ffeecd;
            border-style: solid;
            border-width: 0 5px 5px;
        }
        .pick-total-result {
            display: block;
        }
    }

    .data-center-tips {
        position: relative;
        height: 34px;
        background: #ffe9b8;
        line-height: 34px;
        color: #666;
        _height: 27px;
        _padding-top: 7px;
        .ball-list {
            display: inline-block;
            *display: inline;
            *zoom: 1;
            li {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                margin: 0 1px;
                *margin-right: 3px;
            }
        }
        .btn {
            display: inline-block;
            height: 21px;
            line-height: 21px;
            padding: 0 8px;
            border: 1px solid #e9b542;
            border-radius: 2px;
            background: #ffeabc url(https://p5.ssl.qhimg.com/t01ead3fafdd00ec563.png) no-repeat 0 -514px;
            cursor: pointer;
            color: #d77400;
        }
        .close {
            position: absolute;
            right: 10px;
            top: 0;
            line-height: 34px;
            cursor: pointer;
        }
    }

    .more-data-list {
        height: 20px;
        background: #f2f2f2;
        cursor: pointer;
        line-height: 18px;
        &:hover {
            background: #ebebeb;
        }
        em {
            padding-left: 5px;
            color: #0b8bd4;
            font-size: 12px;
            font-family: 'simsun';
        }
    }

    .active {
        .lnk {
            color: red;
            font-weight: bold;
        }
    }

    #zzhlist {
        em {
            color: #d80000;
        }
        .znzh_cur_issue {
            padding-left: 14px;
            text-align: left;
        }
        .znzh_issue {
            padding-left: 14px;
            text-align: left;
        }
    }

    #seeCodeListsfc {
        .name {
            font-size: 13px;
        }
    }

    .kl8-table {
        margin-top: 9px;
        table {
            border: 1px solid #ddd;
        }
        th {
            height: 29px;
            background: #f5f5f5;
            border-bottom: 1px solid #ddd;
            text-align: center;
        }
        td {
            height: 27px;
            text-align: center;
        }
        tr {
            &.even {
                background: #f7f7f7;
            }
        }
    }

    .mod-kl8explaina-table {
        border-bottom: 1px solid #ddd;
        th {
            height: 28px;
            border: 1px solid #ddd;
            background: #f5f5f5;
            text-align: center;
        }
        td {
            height: 28px;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            text-align: center;
        }
    }

    .kl8-num {
        dl {
            margin-bottom: 15px;
        }
        .ball-list {
            .ico-ball {
                float: left;
                margin: 6px 3px 0 0;
            }
        }
        .num-list {
            li {
                float: left;
                width: 21px;
                height: 18px;
                margin: 0 -1px -1px 0;
                border: 1px solid #d4d4d4;
                line-height: 18px;
                text-align: center;
                color: #db3132;
                _position: relative;
                _zoom: 1;
            }
        }
        .hd {
            width: 211px;
            border-bottom: 0;
            overflow: hidden;
            padding: 0 5px;
            background: #e9e9e9;
            line-height: 21px;
        }
        .kl8-lastestnum {
            .hd {
                width: 223px;
                padding: 0;
                background: 0;
                p {
                    height: 23px;
                }
            }
        }
        .lastdl {
            border-bottom: 0;
            margin-bottom: 0;
        }
        .kl8-hd-fr {
            float: right;
            color: #676767;
        }
        .kl8-hd-fl {
            float: left;
            padding-right: 10px;
        }
        .mark {
            color: #777;
        }
        .mark-date {
            color: #444;
        }
    }

    .kl8-lastestnum {
        .kj-date {
            padding: 10px 0 0;
            text-align: center;
            padding: 5px 0;
            text-align: center;
        }
        .kj-dated {
            color: #a62f00;
            padding: 5px 0;
            text-align: center;
        }
        .kj-jc {
            padding: 5px 0;
            text-align: center;
        }
    }

    .mod-aside-t5 {
        padding-top: 8px;
    }

    .mod-select-bolls-col5 {
        margin: 0 40px;
        _width: 648px;
    }

    .bettip-tab {
        margin-bottom: 20px;
        table {
            th {
                line-height: 24px;
                background: #e1e1e1;
                text-align: center;
            }
            td {
                line-height: 28px;
                border-bottom: 1px solid #e5e5e5;
                text-align: center;
            }
        }
    }

    .aside {
        .kpkjcode {
            .thbg {
                th {
                    line-height: 20px;
                    background: #fff url(https://p5.ssl.qhimg.com/t012181b9ed877b2ee7.png) repeat-x 0 0;
                }
            }
        }
    }

    .sfc-table-box {
        .cent {
            display: inline-block;
            padding: 0 1px;
            line-height: 17px;
        }
        .centbg-blue {
            background: #4480e0;
            color: #fff;
        }
        .centbg-deepred {
            background: #c45f5f;
            color: #fff;
        }
        .centbg-yellow {
            background: #df8e00;
            color: #fff;
        }
        .centtip {
            padding: 7px 0 0 13px;
            font-family: '\fffd\fffd\fffd\fffd';
            .cent {
                padding: 0 4px;
                line-height: 20px;
                margin-left: 3px;
            }
        }
    }

    .zzhlist-scroll {
        max-height: 240px;
        overflow-y: scroll;
        overflow-x: hidden;
        _height: 240px;
    }

    .mod-kpcz-bd {
        .nav-cz-sub {
            background: #dedede;
        }
    }

    .cz-helper {
        padding: 5px 11px 2px;
        background: #dedede url(https://p5.ssl.qhimg.com/t01fedc349dd63d1be1.png) repeat-x 0 0;
        .cz-helper-tit {
            float: left;
            line-height: 21px;
            h3 {
                float: left;
                margin-right: 15px;
                font-size: 14px;
                color: #444;
            }
            .ico-user3 {
                float: left;
                margin: 4px 4px 0 0;
            }
            span {
                display: inline-block;
                margin-right: 15px;
                a {
                    color: #347aea;
                }
                &.c {
                    color: #acacac;
                }
            }
        }
        .cz-helper-fr {
            float: right;
            line-height: 21px;
            em {
                color: #777;
            }
        }
        .bd {
            margin-top: 4px;
        }
        .lottery-list {
            li {
                float: left;
                height: auto;
                padding: 0;
                border: 1px solid #ababab;
                border-left: none;
                background: #f9f9f9;
                line-height: 20px;
                text-align: center;
                a {
                    display: block;
                    width: 67px;
                    height: 66px;
                    color: #555;
                    padding: 6px 5px;
                    -webkit-transition: all .3s ease-out;
                    -moz-transition: all .3s ease-out;
                    -ms-transition: all .3s ease-out;
                    -o-transition: all .3s ease-out;
                    transition: all .3s ease-out;
                    &:hover {
                        background: #fff8e8;
                    }
                    p {
                        height: 22px;
                        line-height: 22px;
                        overflow: hidden;
                    }
                }
                &.active {
                    border: 1px solid #eba462;
                    background: #fff0cf;
                    box-shadow: none;
                    font-weight: normal;
                    a {
                        &:hover {
                            background: #fff0cf;
                        }
                    }
                }
                .gray {
                    color: #767676;
                }
                .fsz14 {
                    font-size: 14px;
                    color: #ef4300;
                    font-family: Tahoma;
                }
            }
        }
        .more {
            _float: left;
            display: inline-block;
            width: 15px;
            padding: 9px 0 0 5px;
            line-height: 15px;
        }
    }

    .syycode {
        font-weight: bold;
        padding-left: 5px;
    }

    .orange {
        color: #fa6705;
    }

    .ssytips {
        padding: 10px 0 0 40px;
    }

    .issgray {
        color: #999;
    }

    .blgray {
        color: #666;
    }

    #pop_mask {
        position: fixed;
        _position: absolute;
        width: 100%;
        height: 100%;
        background: #000;
        top: 0;
        left: 0;
        filter: alpha(opacity=50);
        -moz-opacity: .5;
        opacity: .5;
        z-index: 9999;
    }

    #ifr_mask {
        position: fixed;
        _position: absolute;
        width: 100%;
        height: 100%;
        background: #000;
        top: 0;
        left: 0;
        filter: alpha(opacity=50);
        -moz-opacity: .5;
        opacity: .5;
        z-index: 999;
    }

    .pop_guidepage {
        position: absolute;
        top: 233px;
        left: 50%;
        width: 980px;
        margin-left: -490px;
        z-index: 10000;
        visibility: visible;
    }

    .guide-siderbar {
        float: right;
        width: 250px;
        padding: 7px 0 35px;
        background: rgba(0, 0, 0, 0.5);
        filter: progid:DXImageTransform.Microsoft.gradient(startcolorstr=#7F000000, endcolorstr=#7F000000);
        .hd {
            padding: 0 15px 0 20px;
            h2 {
                font-size: 26px;
                font-family: 'Microsoft Yahei';
                color: #fff9a0;
                font-weight: normal;
                text-shadow: 1px 1px 2px #000;
            }
            .close {
                float: right;
                margin-top: 6px;
                cursor: pointer;
                font-size: 18px;
                font-family: 'Microsoft Yahei';
                color: #fff9a0;
            }
            .ico-close {
                display: inline-block;
                width: 24px;
                height: 25px;
                margin-right: 3px;
                background: url(http://p0.qhimg.com/t019b83411d737da7c9.png) no-repeat;
                _background: url(http://p7.qhimg.com/t01a35aa5798b91ad9b.png) no-repeat;
                vertical-align: middle;
            }
        }
        .guide-menu {
            padding-left: 27px;
            margin-top: 52px;
            li {
                position: relative;
                height: 87px;
                cursor: pointer;
                span {
                    display: block;
                    width: 190px;
                    height: 52px;
                    cursor: pointer;
                    background: url(http://p7.qhimg.com/t01ebc997a05d6cd36c.png) no-repeat;
                    _background: url(http://p3.qhimg.com/t013a7c5932fb7be155.png) no-repeat;
                    &.step-1 {
                        background-position: 0 0;
                    }
                    &.step-2 {
                        background-position: 0 -70px;
                    }
                    &.step-3 {
                        background-position: 0 -139px;
                    }
                    &.step-4 {
                        background-position: 0 -209px;
                    }
                }
                &.active {
                    span {
                        &.step-1 {
                            background-position: -198px 0;
                        }
                        &.step-2 {
                            background-position: -198px -70px;
                        }
                        &.step-3 {
                            background-position: -198px -139px;
                        }
                        &.step-4 {
                            background-position: -198px -209px;
                        }
                    }
                    .ico-anzai {
                        display: block;
                    }
                }
                .ico-anzai {
                    position: absolute;
                    display: none;
                    top: -32px;
                    right: 34px;
                    width: 74px;
                    height: 40px;
                    background: url(http://p3.qhimg.com/t010d48bd42df45bfc4.png) no-repeat;
                    _background: 0;
                    _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='http://p3.qhimg.com/t010d48bd42df45bfc4.png');
                }
                .ico-guide {
                    position: absolute;
                    top: 46px;
                    left: 186px;
                    width: 20px;
                    height: 68px;
                    background: url(http://p0.qhimg.com/t01c0eb954bda033a9f.png) no-repeat;
                    _background: url(http://p1.qhimg.com/t01d2ce4b7e87968823.png) no-repeat;
                }
            }
        }
        .guide-list {
            width: 196px;
            margin: 0 auto;
            li {
                float: left;
                width: 98px;
                text-align: center;
                line-height: 30px;
                a {
                    color: #fff9a0;
                    font-size: 16px;
                    font-family: 'Microsoft Yahei';
                }
            }
        }
    }

    .guide-cont {
        float: left;
        width: 730px;
        .ico-next {
            position: absolute;
            display: inline-block;
            width: 195px;
            height: 90px;
            background: url(http://p3.qhimg.com/t01cb4555693f3c7f94.png) no-repeat;
            cursor: pointer;
            _background: 0;
            _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='http://p3.qhimg.com/t01cb4555693f3c7f94.png');
        }
        .ico-start {
            position: absolute;
            display: inline-block;
            width: 195px;
            height: 90px;
            background: url(http://p8.qhimg.com/t016fcab0dd6009c57a.png) no-repeat;
            cursor: pointer;
            _background: 0;
            _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='http://p8.qhimg.com/t016fcab0dd6009c57a.png');
        }
        .ico-arrow2 {
            position: absolute;
            display: inline-block;
            width: 39px;
            height: 28px;
            background: url(http://p9.qhimg.com/t014d61c82fe552bf0d.png) no-repeat;
            _background: 0;
            _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='http://p9.qhimg.com/t014d61c82fe552bf0d.png');
        }
        .ico-arrow3 {
            position: absolute;
            display: inline-block;
            width: 187px;
            height: 134px;
            background: url(http://p2.qhimg.com/t0101b666907f700737.png) no-repeat;
            _background: 0;
            _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='http://p2.qhimg.com/t0101b666907f700737.png');
        }
        p {
            cursor: pointer;
        }
        .step1-cont {
            position: relative;
            width: 656px;
            height: 338px;
            margin: 30px 0 0 56px;
            .ico-next {
                bottom: -66px;
                right: 38px;
            }
            .ico-arrow2 {
                top: 74px;
                right: -39px;
            }
        }
        .step2-cont {
            position: relative;
            width: 625px;
            height: 205px;
            margin: 360px 0 0 54px;
            .ico-next {
                bottom: -66px;
                left: 556px;
            }
            .ico-arrow3 {
                top: -152px;
                left: 504px;
            }
        }
        .step3-cont {
            position: relative;
            width: 432px;
            height: 274px;
            margin: 158px 0 0 280px;
            .ico-next {
                left: 257px;
                top: 243px;
            }
            .ico-arrow2 {
                top: 112px;
                right: -40px;
            }
        }
        .step4-cont {
            position: relative;
            width: 475px;
            height: 303px;
            margin: 167px 0 0 255px;
            .ico-start {
                left: 229px;
                top: 280px;
            }
            .ico-arrow2 {
                top: 179px;
                right: -38px;
            }
        }
    }

    .kpproid {
        padding: 0 15px 15px 15px;
        color: #666;
        font-size: 12px;
        text-align: center;
        table {
            border: 1px #eee solid;
            th {
                text-align: center;
                background-color: #eee;
            }
        }
        tr {
            height: 40px;
            border-bottom: 1px #eee solid;
        }
    }

    .panel-filter-box {
        padding: 0 18px;
        .tips {
            padding: 11px 0 13px 15px;
        }
        .filter {
            padding: 15px 0 0 15px;
            background: #f9f9f9;
            dl {
                overflow: hidden;
            }
            dt {
                float: left;
                width: 70px;
                padding-top: 1px;
                span {
                    display: inline-block;
                    padding: 1px 6px 1px 4px;
                    background: #e0e0e0;
                    line-height: 20px;
                    border-radius: 2px;
                    font-size: 12px;
                    color: #444;
                }
            }
            dd {
                overflow: hidden;
                zoom: 1;
                em {
                    display: inline-block;
                    width: 43px;
                    height: 24px;
                    margin: 0 15px 15px 0;
                    _margin: 0 14px 15px 0;
                    color: #777;
                    border: 1px solid #c4c4c4;
                    border-radius: 2px;
                    background: #dadada;
                    background: #d4d4d4 url(https://p4.ssl.qhimg.com/t01eef016fcae5a9d9f.png) repeat-x 0 -26px;
                    cursor: default;
                    text-align: center;
                    font-size: 14px;
                    line-height: 24px;
                    vertical-align: top;
                    &.hanzi {
                        font-size: 12px;
                    }
                    &.ablepoint {
                        border: 1px solid #d0d0d0;
                        background: #e2e2e2 url(https://p4.ssl.qhimg.com/t01eef016fcae5a9d9f.png) repeat-x;
                        color: #333;
                        cursor: pointer;
                    }
                    &.hover {
                        background: #fae0bc url(https://p4.ssl.qhimg.com/t01eef016fcae5a9d9f.png) repeat-x 0 -78px;
                        border: 1px solid #f5b369;
                        color: #5a1805;
                    }
                    &.active {
                        border: 1px solid #c76013;
                        background: #f39c40 url(https://p4.ssl.qhimg.com/t01eef016fcae5a9d9f.png) repeat-x 0 -52px;
                        color: #5a1805;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .panel-filter {
        .btns {
            padding: 15px 0;
            .lnk {
                text-decoration: underline;
                padding-left: 15px;
            }
        }
        .btn {
            padding: 0 4px;
        }
    }

    #selectHM {
        margin: 0 15px 15px 0;
    }

    .filter_showResult {
        width: 300px;
        margin-left: 20px;
        margin-top: 15px;
        padding-bottom: 20px;
        .filterTBox {
            width: 300px;
            margin-bottom: 10px;
            border: 1px solid #dedede;
        }
        .filterTHead {
            height: 21px;
            background: #c3c2c2;
            border-bottom: 1px dotted #ddd;
            clear: both;
        }
        .filterTBody {
            height: 220px;
            overflow: auto;
            overflow-x: hidden;
            ul {
                height: 21px;
                border-bottom: 1px dotted #ddd;
                clear: both;
            }
            .code {
                color: #d80000;
            }
        }
        ul {
            li {
                float: left;
                text-align: center;
                border-left: 1px dotted #ddd;
                &.ser {
                    width: 60px;
                    border-left: 0;
                }
                &.code {
                    width: 160px;
                }
            }
        }
        .resultTj {
            padding-left: 10px;
            b {
                font-weight: normal;
            }
        }
    }

    .filter_showResult ul li.opt a, .filter_showResult ul li.opt span {
        margin-left: 26px;
    }

    .ppck {
        margin-top: 10px;
        label {
            display: inline-block;
            margin-right: 10px;
            cursor: pointer;
            input {
                margin-right: 4px;
            }
        }
    }

    .plays_box {
        .fr-tab {
            float: right;
            padding: 8px 40px 0 0;
            color: #74a4ec;
            .numcount {
                float: none;
                margin-right: 0;
                font-weight: normal;
                cursor: pointer;
            }
            .divider {
                color: #c4c4c4;
                padding: 0 5px;
            }
            .chart {
                cursor: pointer;
            }
            .act {
                font-weight: bold;
                color: #d93300;
            }
        }
    }

    .tools-boll-list {
        position: relative;
        zoom: 1;
        .sd {
            position: absolute;
            top: -4px;
            right: 85px;
            height: 5px;
            width: 8px;
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -244px;
            z-index: 3;
        }
    }

    .xssc-select {
        position: relative;
        width: 72px;
        z-index: 5;
        .txt-box {
            display: block;
            height: 20px;
            padding: 0 4px;
            border: 1px #a6a6a6 solid;
            z-index: 5;
            font-size: 12px;
            text-align: left;
            cursor: pointer;
            line-height: 20px;
            background: #dcdcde url(https://p2.ssl.qhimg.com/t01966bbacfc527c4ef.png) repeat-x;
            font-family: 'simsun';
        }
        .txt {
            color: #2c79eb;
            _display: inline-block;
            _vertical-align: middle;
        }
        .ico {
            display: inline-block;
            font-size: 0;
            border-width: 4px;
            vertical-align: middle;
            border-style: solid dashed dashed;
            border-color: #6b6a70 transparent transparent transparent;
            margin: 2px 0 0 0;
        }
        .list {
            position: absolute;
            top: 20px;
            left: 0;
            width: 70px;
            border: 1px #a6a6a6 solid;
            background: #fff;
            display: none;
            text-align: left;
            li {
                padding: 0 4px;
                cursor: pointer;
                background: #fbfbfb;
                color: #333;
                &:hover {
                    color: #fff;
                    background: #519bd8 url(https://p2.ssl.qhimg.com/t01966bbacfc527c4ef.png) repeat-x 0 -25px;
                    a {
                        color: #fff;
                        background: #3985db;
                    }
                }
            }
        }
        .ico-arrow {
            height: 0;
            width: 0;
            margin: 8px 2px 0 0;
            border-color: #333 transparent transparent transparent;
            _border-color: #333 #f4f4f4 #f4f4f4 #f4f4f4;
            border-style: solid;
            border-width: 4px 4px 0;
            overflow: hidden;
            background: 0;
        }
    }

    .tools-boll-xssc {
        z-index: 2;
        .boll-item {
            overflow: visible;
        }
    }

    .tools-boll-chart {
        .sd {
            right: 18px;
        }
    }

    .chart-item {
        border: 1px solid #ebdcb9;
        background: #fffaee;
        .hd {
            padding: 5px 8px;
        }
        .period-tab {
            float: left;
            li {
                float: left;
                margin-right: 2px;
                line-height: 16px;
                em {
                    display: inline-block;
                    padding: 0 6px;
                    color: #177cda;
                    font-size: 12px;
                    font-weight: normal;
                    cursor: pointer;
                    font-family: 'simsun';
                    line-height: 17px;
                    vertical-align: top;
                }
                &.active {
                    em {
                        background: #ef7a3e;
                        border-radius: 2px;
                        color: #fff;
                    }
                }
            }
        }
        .tips {
            float: right;
            color: #999;
            line-height: 16px;
            font-family: 'simsun';
            .ico-dot {
                display: inline-block;
                width: 5px;
                height: 5px;
                margin: 0 5px;
                background: url(https://p1.ssl.qhimg.com/t01df1ae305fb647f74.png) no-repeat;
                vertical-align: 2px;
                _vertical-align: -4px;
            }
        }
        .chart-filter {
            label {
                margin-left: 5px;
                cursor: pointer;
            }
        }
    }

    .chart-table {
        th {
            line-height: 23px;
            border: 1px solid #e7e2d6;
            border-left: none;
            text-align: center;
            font-weight: bold;
            color: #777;
        }
        td {
            height: 20px;
            border: 1px solid #e7e2d6;
            border-bottom: 0;
            border-left: none;
            text-align: center;
            color: #999;
            &.sd-z3-wz {
                color: #fa6705;
            }
        }
        .red {
            color: #d40000;
        }
        .brn {
            border-right: 0;
        }
        .brt {
            border-right: 3px solid #e7e2d6;
        }
        .ball {
            position: relative;
            display: inline-block;
            width: 21px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            color: #fff;
            background: url(https://p5.ssl.qhimg.com/t01e6e5a194c150bfba.png) no-repeat;
            zoom: 1;
            font-family: 'Microsoft Yahei';
        }
        .ball_5 {
            background-position: 0 -105px;
        }
        .ball_4 {
            background-position: 0 -79px;
        }
        .ball_17 {
            background-position: 0 -383px;
        }
        .ball_1 {
            background-position: 0 -2px;
        }
        .ball_2 {
            background-position: 0 -27px;
        }
        .ball_15 {
            background-position: 0 -338px;
        }
        .ball_c18 {
            background-position: 0 -248px;
        }
        .ball_14 {
            background-position: 0 -316px;
        }
        .ysep_12 {
            background: #f3e6c0;
        }
        .bg_4 {
            color: #f86300;
        }
        .bg_2 {
            color: #096ed6;
        }
        .bg_1 {
            color: #63a72a;
        }
        .bg_3 {
            color: #ea180d;
        }
        .bg_5 {
            background: #009e38;
            color: #fff;
        }
        .bg_9 {
            background: #1e88ee;
            color: #fff;
        }
        .bg_6 {
            background: #06c18e;
            color: #fff;
        }
        .bg_7 {
            background: #2a527f;
            color: #fff;
        }
        .bg_8 {
            background: #ff9c02;
            color: #fff;
        }
        .bg_10 {
            background: #1489ec;
            color: #fff;
        }
        .bg_11 {
            background: #008722;
            color: #fff;
        }
        .bg_12 {
            background: #ff8700;
            color: #fff;
        }
        .bg_13 {
            background: #5206c1;
            color: #fff;
        }
        .bg_14 {
            background: #683535;
            color: #fff;
        }
        .bg_15 {
            background: #c00;
            color: #fff;
        }
        .bg_16 {
            background: #698353;
            color: #fff;
        }
        .bg_17 {
            background: #ffddc4;
            color: #f00;
        }
        .bg_18 {
            background: #c2d5fe;
            color: blue;
        }
    }

    .s_ball {
        position: absolute;
        top: -6px;
        right: -6px;
        width: 17px;
        height: 15px;
        text-align: center;
        line-height: 13px;
        background: url(https://p2.ssl.qhimg.com/t013c228ac371aac6c3.png) no-repeat;
        font-size: 10px;
        _filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=scale, src="http://chart.cp.360.cn/static/v2/images/s_ball.png");
        _background: 0;
    }

    .compare-cont {
        padding: 0 15px 30px;
        .result {
            .content {
                height: 145px;
                background: #fffdf7;
                overflow: auto;
                border: 1px #e5e5e5 solid;
                li {
                    overflow: hidden;
                    zoom: 1;
                    padding: 5px 12px;
                    border-bottom: 1px #ddd dotted;
                }
            }
        }
        .codelist-compare {
            li {
                b {
                    font-weight: normal;
                }
                .code {
                    color: #999;
                    b {
                        color: #000;
                    }
                }
                .em {
                    color: #d80000 !important;
                    margin: 0 10px;
                }
            }
        }
        .method {
            padding: 8px 0;
            line-height: 20px;
            label {
                margin-right: 15px;
                font-size: 14px;
                color: #666;
                cursor: pointer;
            }
            .ipt-r {
                vertical-align: -2px;
                margin-right: 3px;
            }
        }
    }

    .compare-msg {
        padding: 8px 0;
        .item {
            display: inline-block;
            margin-right: 20px;
        }
    }

    .compare-ft {
        padding-top: 10px;
        text-align: center;
    }

    .compare-result {
        padding: 0 15px 30px;
        .result-hd {
            border-bottom: 1px solid #ececec;
            h4 {
                font-size: 14px;
                float: left;
                background-color: #fff;
                padding-right: 10px;
                position: relative;
                margin-bottom: -9px;
            }
        }
        .result-bd {
            padding: 30px 0 0;
        }
        .compare-list {
            width: 400px;
            margin: 0 auto;
            li {
                padding: 4px 0;
                p {
                    cursor: pointer;
                    &:hover {
                        background: #fffdf7;
                    }
                }
            }
            .ico-libefore {
                display: inline-block;
                width: 8px;
                height: 8px;
                margin-right: 8px;
                background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat 0 -368px;
                vertical-align: middle;
            }
            .number {
                width: 140px;
                color: #666;
            }
            .bonus-hign {
                width: 222px;
            }
            .ico-liafter {
                display: inline-block;
                width: 11px;
                height: 7px;
                margin-right: 8px;
                background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -398px;
                vertical-align: middle;
                cursor: pointer;
                -webkit-transition: .3s ease-in;
                -moz-transition: .3s ease-in;
                -o-transition: .3s ease-in;
                transition: .3s ease-in;
            }
            .active {
                .ico-liafter {
                    -webkit-transform: rotate(180deg);
                    -moz-transform: rotate(180deg);
                    -o-transform: rotate(180deg);
                    transform: rotate(180deg);
                    -ms-transform: rotate(0);
                }
            }
        }
        .code-show {
            display: none;
            position: relative;
            margin-top: 5px;
            background: #f5f5f5;
            padding: 5px 0;
            .coner {
                position: absolute;
                height: 0;
                width: 0;
                margin: 8px 2px 0 0;
                border-color: transparent transparent #f5f5f5 transparent;
                _border-color: #fff #fff #f5f5f5 #fff;
                border-style: solid;
                border-width: 0 6px 6px;
                overflow: hidden;
                background: 0;
                top: -14px;
                right: 9px;
            }
            li {
                padding: 2px 0 2px 15px;
            }
            .date {
                width: 100px;
            }
            .numlist {
                width: 152px;
            }
            .bonus {
                width: 130px;
            }
        }
        .active {
            .code-show {
                display: block;
            }
        }
    }

    .compare-result .compare-list .number, .compare-result .compare-list .bonus-hign, .compare-result .code-show .date, .compare-result .code-show .numlist, .compare-result .code-show .bonus {
        display: inline-block;
        vertical-align: middle;
    }

    .compare-qlc {
        .compare-result {
            .code-show {
                .date {
                    width: 96px;
                }
                .numlist {
                    width: 156px;
                }
            }
        }
    }

    .compare-tips {
        margin: 12px 15px 0 15px;
        padding: 60px 0;
        border-top: 1px solid #ececec;
        color: #999;
        line-height: 24px;
    }

    .lnk-compare {
        margin-left: 25px;
        margin-left: 25px;
    }

    .ta-c {
        text-align: center;
    }

    .yellow {
        color: #f5ae32;
    }

    .panel-compare {
        .new {
            display: block;
            position: absolute;
            top: 3px;
            left: 168px;
            color: #ffe096;
            font-size: 10px;
            z-index: 3;
        }
    }

    .ad980 {
        margin: 0 auto;
        width: 980px;
    }

    .jq4-table {
        th {
            background: #f9f9f9;
            color: #666;
        }
    }

    .select-box03 {
        z-index: 10;
    }

    .select-opei {
        .hd {
            padding: 0;
            border: 0;
        }
        .bd {
            width: 370px;
            text-align: left;
            font-weight: normal;
            display: none;
            .item {
                width: 350px;
                padding: 5px 10px 8px;
                border-bottom: 1px solid #ededed;
                overflow: hidden;
                zoom: 1;
                color: #666;
                .k {
                    width: 24px;
                    margin-right: 10px;
                }
                .v {
                    width: 316px;
                }
                label {
                    display: inline-block;
                    width: 73px;
                    line-height: 1.8;
                    cursor: pointer;
                }
            }
        }
    }

    .radio_ck {
        vertical-align: -2px;
        margin-right: 3px;
    }

    .panel-jjc-vs {
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
        .table {
            th {
                height: 31px;
                background-color: #f4f4f4;
                text-align: center;
                color: #444;
            }
            td {
                height: 24px;
                text-align: center;
                color: #666;
            }
        }
        .even {
            td {
                background-color: #f5f5f5;
            }
        }
        .text-left {
            text-align: left;
        }
        .score {
            width: 86px;
            color: #bbb;
            width: 65px;
        }
        .table-02 {
            th {
                height: 31px;
                background-color: #f4f4f4;
                text-align: center;
                color: #444;
                font-weight: normal;
            }
            tbody {
                th {
                    height: 29px;
                    font-weight: bold;
                    background-color: #fff;
                    border: 1px solid #ebebeb;
                }
                td {
                    height: 29px;
                    border: 1px solid #ebebeb;
                    text-align: center;
                    color: #666;
                }
            }
        }
        .jc-team {
            width: 50px;
        }
        .lc-score {
            width: 45px;
            margin: 0 5px;
        }
        .ebg1 {
            height: 24px;
            line-height: 24px;
            color: #fff;
        }
    }

    .panel-jjc-vs .table, .panel-jjc-vs .table-02 {
        border: 1px solid #cbcbcb;
    }

    .panel-jjc-vs .jc-team-m, .panel-jjc-vs .score {
        float: left;
        font-size: 12px;
    }

    .panel-jjc-vs td.ta-l, .panel-jjc-vs th.ta-l {
        padding-left: 12px;
        text-align: left;
    }

    .ipt-r {
        vertical-align: -2px;
    }

    .dqjx-box {
        position: relative;
        margin-top: 10px;
        padding: 5px 10px;
        background: #fffaee;
        border: 1px solid #eadab5;
        .sd {
            position: absolute;
            top: -5px;
            right: 164px;
            height: 5px;
            width: 8px;
            background: url(https://p5.ssl.qhimg.com/t0192942babe40f23d5.png) no-repeat -33px -244px;
            z-index: 3;
        }
        .fm-item {
            padding: 5px 0;
        }
    }

    .u-select {
        position: relative;
        .txt-box {
            display: block;
            height: 26px;
            box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
            vertical-align: middle;
            line-height: 26px;
            border: 1px #bbb solid;
            padding-left: 10px;
            cursor: pointer;
            .arrow-box {
                float: right;
                width: 19px;
                text-align: center;
                border-left: 1px solid #dadada;
                *height: 22px;
                *padding-top: 4px;
            }
            .arrow {
                display: inline-block;
                width: 9px;
                height: 6px;
                background: url(https://p1.ssl.qhimg.com/t018af20130253ce54b.png) no-repeat -96px -24px;
                -webkit-transition: .3s ease-in;
                -moz-transition: .3s ease-in;
                -o-transition: .3s ease-in;
                transition: .3s ease-in;
                vertical-align: middle;
            }
        }
        .list {
            display: none;
            position: absolute;
            top: 27px;
            border: 1px solid #ccc;
            background-color: #fff;
            li {
                line-height: 22px;
                padding: 0 0 0 10px;
                cursor: pointer;
                &:hover {
                    background-color: #3985db;
                    color: #fff;
                }
            }
        }
    }

    .u-select-show {
        .arrow {
            -webkit-transform: rotate(180deg);
            -moz-transform: rotate(180deg);
            -o-transform: rotate(180deg);
            transform: rotate(180deg);
            -ms-transform: rotate(0);
        }
        .list {
            display: block;
        }
    }

    .package-item {
        float: left;
        width: 211px;
        margin: 15px 4px 0 0;
        padding: 10px 6px;
        background: #f5f5f5;
        border: 1px solid #f5f5f5;
        *display: inline;
        height: 250px;
        &:hover {
            background: #fffdf7;
            border: 1px solid #f35d2f;
        }
        .hd {
            h3 {
                font-size: 14px;
                em {
                    font-size: 12px;
                    font-weight: normal;
                    color: #999;
                }
            }
        }
        .sel_info {
            padding: 10px 0;
        }
        .u-select {
            display: inline-block;
            z-index: 10;
            *display: inline;
            *zoom: 1;
            vertical-align: middle;
            .txt-box {
                height: 18px;
                line-height: 18px;
                padding-left: 3px;
                background: #fff;
                .arrow-box {
                    *height: 14px;
                    *padding-top: 4px;
                }
            }
            .list {
                top: 19px;
                li {
                    padding-left: 3px;
                    line-height: 16px;
                }
            }
        }
        .form {
            .fm-item {
                overflow: visible;
            }
        }
    }

    .package-c {
        padding-bottom: 15px;
        border-bottom: 1px dotted #d6d6d6;
    }

    .stock {
        display: inline-block;
        border: 1px solid #a0a0a0;
        background: #fff;
        vertical-align: middle;
        _height: 18px;
        _overflow: hidden;
        .ipt-text {
            float: left;
            width: 40px;
            height: 14px;
            border: 0;
            box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.1);
        }
        .btn-add {
            float: left;
            width: 21px;
            height: 18px;
            background: url(https://p2.ssl.qhimg.com/t012f6c0e7cd53a23d0.png) no-repeat 0 -24px;
            border: 0;
            cursor: pointer;
        }
        .btn-minus {
            float: left;
            width: 21px;
            height: 18px;
            background: url(https://p2.ssl.qhimg.com/t012f6c0e7cd53a23d0.png) no-repeat -21px -24px;
            border: 0;
            cursor: pointer;
        }
    }

    .btn-red-l {
        display: inline-block;
        height: 30px;
        padding: 0 22px;
        border: 1px solid #950811;
        background: #cb0505;
        border-radius: 4px;
        font-size: 14px;
        color: #fff;
        line-height: 30px;
        font-family: 'Microsoft Yahei';
        cursor: pointer;
        background-image: -webkit-linear-gradient(to top, #b70404, #da0f0f);
        background-image: linear-gradient(to top, #b70404, #da0f0f);
        text-shadow: 2px -1px 0 #970202;
    }

    .retest {
        display: inline-block;
        cursor: pointer;
        .retest-item {
            display: inline-block;
            height: 18px;
            padding: 0 4px;
            margin-right: 4px;
            border: 1px solid #a0a0a0;
            background: #fff;
            line-height: 18px;
        }
        .active {
            background: #f35d2f;
            color: #fff;
            border: 1px solid #e83904;
        }
    }

    .ico-lucky {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(https://p2.ssl.qhimg.com/t012f6c0e7cd53a23d0.png) no-repeat 0 -48px;
        margin-right: 3px;
        vertical-align: middle;
    }

    .ico-money2 {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(https://p2.ssl.qhimg.com/t012f6c0e7cd53a23d0.png) no-repeat -24px -48px;
        margin-right: 3px;
        vertical-align: middle;
    }

    .ico-luck {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url(https://p2.ssl.qhimg.com/t012f6c0e7cd53a23d0.png) no-repeat -48px -48px;
        margin-right: 3px;
        vertical-align: middle;
    }

    .package-item .form .fm-item:after, .mod-select-bolls .boll-item:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }

    .myplan-cont {
        padding: 20px;
        .myplan-fm-item {
            padding-top: 15px;
            zoom: 1;
            .k {
                float: left;
                width: 110px;
                text-align: right;
            }
            .kl {
                float: left;
                width: 269px;
                text-align: left;
                margin-left: 35px;
            }
            .v {
                overflow: hidden;
                zoom: 1;
            }
            .plan-n {
                display: inline-block;
                height: 22px;
                line-height: 22px;
                background: #f5f5f5;
                padding: 0 5px;
                color: #ca200c;
                cursor: pointer;
            }
        }
    }

    .myplan-fm {
        padding-bottom: 20px;
    }

    .myplan-list {
        .myplan-table {
            width: 408px;
            height: 140px;
            background: #f5f5f5;
            border: 1px solid #d8d8d8;
            overflow: auto;
            overflow-x: hidden;
        }
        td {
            padding: 5px 0;
            text-align: center;
            padding: 4px 0 \0
        ;
            &.t-l {
                text-align: left;
                padding-left: 10px;
            }
        }
        .all {
            display: inline-block;
            padding: 6px 0 6px 11px;
        }
    }

    .myplan-cur {
        background: #e9e8e8;
    }

    .chart-tab {
        position: relative;
        z-index: 1;
        .ysep_5 {
            background: #d8e2eb;
            color: #000;
        }
        .ysep_6 {
            background: #d8e2eb;
            color: #3387db;
        }
        .ysep_12 {
            background: #d8e2eb;
            color: #db6033;
        }
    }

    .chart-svg {
        position: absolute;
        left: 0;
        top: 0;
    }

    .ipt-c {
        vertical-align: -2px;
        margin-right: 2px;
    }

    .nonum {
        .chart-table {
            .tdbg_8 {
                color: #fff;
            }
            .tdbg_2 {
                color: #fff;
            }
            .ybg_1 {
                background: #d8e2eb;
                color: #8b8989;
                font-size: 11px;
            }
            .ysep_5 {
                background: #d8e2eb;
                color: #000;
                font-size: 11px;
            }
            .ysep_6 {
                background: #d8e2eb;
                color: #3387db;
                font-size: 11px;
            }
            .ysep_12 {
                background: #d8e2eb;
                color: #db6033;
                font-size: 11px;
            }
            .bg_4 {
                color: #f86300;
            }
            .bg_2 {
                color: #096ed6;
            }
            .bg_1 {
                color: #63a72a;
            }
            .bg_3 {
                color: #ea180d;
            }
        }
    }

    .all-cz {
        position: relative;
        z-index: 2;
        .allcz-box {
            position: absolute;
            top: 21px;
            right: 0;
            width: 260px;
            padding: 0 8px;
            background: #fff;
            border: 1px solid #c3c3c3;
        }
    }

    .allcz-box {
        .allcz-item {
            padding: 10px 0;
            border-bottom: 1px solid #e4e4e4;
            .allcz-list {
                display: inline-block;
                *display: inline;
                *zoom: 1;
                width: 222px;
                vertical-align: middle;
                li {
                    float: left;
                    margin: 0 5px;
                    line-height: 22px;
                    display: inline;
                    white-space: nowrap;
                }
            }
            .ico-cz {
                display: inline-block;
                width: 22px;
                height: 34px;
                background: url(http://p4.qhimg.com/t013ef2cf8f3f1168b1.png) no-repeat;
                vertical-align: middle;
                margin: 0 5px;
            }
            .ico-cz-10 {
                background-position: -12px -492px;
            }
            .ico-cz-11 {
                background-position: -12px -557px;
            }
            .ico-cz-12 {
                background-position: -12px -620px;
            }
        }
        .last {
            border-bottom: 0;
        }
    }

    .panel-loading {
        width: 200px;
        height: 67px;
        margin: 50px auto;
        text-align: center;
        padding-top: 40px;
    }

    .panel-passtype {
        position: absolute;
        top: 600px;
        left: 830px;
        z-index: 100;
        border: 2px solid #7cb62c;
        padding: 5px;
        background: #fff;
        .sd {
            position: absolute;
            top: -7px;
            left: 50%;
            margin-left: -5px;
            width: 9px;
            height: 5px;
            background: url(https://p0.ssl.qhimg.com/t012d6f392f477e0792.png) no-repeat 0 -131px;
        }
    }

    .f-hall-body {
        .mod-kefu {
            top: 188px;
        }
    }

    .mod-hmfamous {
        background: #f9f9f9;
        border-bottom: 1px solid #d0d0d0;
        .mod-famous-hd {
            padding: 10px 11px 0 20px;
            h2 {
                float: left;
                font-size: 20px;
                color: #d00000;
                font-family: 'Microsoft Yahei';
                margin-right: 25px;
            }
            .tab-menu {
                float: left;
                margin-right: 25px;
                li {
                    float: left;
                    padding: 0 10px;
                    height: 24px;
                    a {
                        display: block;
                        _float: left;
                        font-size: 16px;
                        color: #666;
                        font-family: 'Microsoft Yahei';
                        &:hover {
                            color: #d00;
                        }
                    }
                    &.current {
                        a {
                            height: 23px;
                            font-size: 16px;
                            border-bottom: 3px solid #e42e2e;
                            color: #333;
                        }
                    }
                }
            }
        }
        .mod-famous-bd {
            padding: 15px 5px 20px;
        }
        .hmfamous-list {
            overflow: hidden;
            zoom: 1;
            li {
                float: left;
                width: 290px;
                padding: 0 12px 0 20px;
                background: url(https://p1.ssl.qhimg.com/t016fd6866f1d9c0bfe.png) repeat-y right top;
                &.last {
                    background: 0;
                }
                .tit {
                    padding-bottom: 5px;
                    a {
                        font-size: 14px;
                        font-family: '\fffd\fffd\fffd\fffd,Microsoft Yahei';
                    }
                    img {
                        vertical-align: middle;
                    }
                }
            }
            .user-logo {
                float: left;
                margin-right: 15px;
                img {
                    width: 64px;
                    height: 64px;
                    border-radius: 5px;
                }
            }
            .txt-cont {
                overflow: hidden;
                zoom: 1;
                p {
                    line-height: 22px;
                    color: #666;
                }
            }
        }
        .btn {
            float: right;
            margin-top: -28px;
            padding-right: 8px;
        }
        .made-btn {
            display: inline-block;
            height: 28px;
            line-height: 28px;
            padding: 0 15px;
            color: #fff;
            background: #e42e2e;
            font-size: 14px;
            font-family: 'Microsoft Yahei';
            vertical-align: middle;
            &:hover {
                background: #d02323;
                color: #fff;
            }
        }
        .disabled {
            background: #ee7321;
            &:hover {
                background: #ff7f00;
            }
        }
        .s-block {
            display: inline-block;
            background-color: #ff4141;
            color: #fff;
            width: 16px;
            height: 16px;
            line-height: 16px;
            font-size: 12px;
            text-align: center;
            margin-left: .5em;
            font-weight: normal;
            vertical-align: middle;
        }
        .f-arrow {
            margin-top: 1px;
        }
        .f-arrow-tip {
            margin-left: 2px;
            vertical-align: bottom;
            font-weight: normal;
            color: #999;
        }
        .zjmargin6 {
            margin: 0 1px;
        }
    }

    .panel-content {
        .zjmargin6 {
            margin: 0 2px;
        }
    }

    .btn-boll-sd-sha {
        display: block;
        width: 32px;
        height: 35px;
        font-size: 15px;
        font-weight: bold;
        cursor: pointer;
        padding-right: 2px;
        font-family: 'Microsoft Yahei';
        line-height: 32px;
        text-align: center;
        color: #555;
        text-shadow: 1px 1px 1px #fff;
        background: url("https://p2.ssl.qhimg.com/t01df24192ace1dbec8.png") no-repeat scroll -135px 0;
    }

    .k3-btn-boll {
        width: 308px;
        height: auto;
        padding: 10px 30px 20px;
        margin-bottom: 20px;
        border: 1px solid #ededed;
        border-radius: 8px;
        background: 0;
        line-height: normal;
        text-align: left;
        font-family: 'Microsoft Yahei';
        font-size: 15px;
        font-weight: bold;
        .k3-boll-num {
            display: inline-block;
            width: 46px;
            text-align: center;
            font-size: 14px;
            color: #333;
            line-height: 24px;
        }
        .btn-boll2-large {
            margin: 10px auto -38px;
            _position: relative;
        }
    }

    .k3bx-boll-box {
        .k3-btn-boll-active {
            border-color: #da4643;
            background: 0;
        }
    }

    .k3-btn-boll-2 {
        text-align: center;
    }

    .notice-cp {
        width: 600px;
        height: 400px;
        background: #f9f9f9;
        font-size: 14px;
    }

    .notice-title {
        height: 38px;
        background: #f65f13;
        color: #fff;
        font-weight: bold;
        line-height: 38px;
        padding-left: 20px;
    }

    .notice-close {
        position: absolute;
        right: 10px;
        height: 10px;
        font-size: 30px;
        color: #fff;
        cursor: pointer;
        top: -5px;
        display: inline-block;
    }

    .notice-point {
        background: url(https://p2.ssl.qhimg.com/t01046ffb2ba417c1d2.png) no-repeat;
        border-bottom: 1px dotted #999;
        line-height: 30px;
        width: 545px;
        margin: 20px auto 20px 30px;
        padding: 20px 0 20px 0;
        p {
            margin-left: 115px;
        }
    }

    .notice-choose {
        width: 575px;
        margin: 25px auto 0;
        ul {
            margin-left: -10px;
            li {
                width: 170px;
                float: left;
                display: inline;
                margin: 20px 0 0 20px;
                font-size: 12px;
                background: url(https://p2.ssl.qhimg.com/t01046ffb2ba417c1d2.png) no-repeat;
                margin-left: 14px;
                &.eleven-five {
                    background-position: 0 -123px;
                }
                &.eleven-five02 {
                    background-position: -181px -123px;
                }
                &.eleven-five03 {
                    background-position: -358px -123px;
                }
                .link {
                    width: 85px;
                    height: 85px;
                    display: inline-block;
                    float: left;
                    margin-right: 5px;
                }
            }
        }
        .tit {
            font-weight: bold;
            font-size: 14px;
        }
        p {
            margin-top: 5px;
            height: 47px;
        }
        .buy-button {
            line-height: 34px;
            color: #fff;
            width: 107px;
            height: 34px;
            box-shadow: 1px 1px 2px #ffa146 inset;
            border-radius: 3px;
            text-shadow: 1px 1px 2px #9f4f00;
            background: #f16d1e;
            display: inline-block;
            margin: 20px 0 0 32px;
            text-align: center;
            font-size: 14px;
            border: 1px solid #c24b02;
        }
    }
    #countdown em {
        font-weight: bold;
        color: #c70000;
    }
</style>