var lst = localStorage;
var total;
var db = false;
var s1 = 0;
var left = 0;
var first_0 = false;
var keynums = [];
var trp = false;
var p5 = false;
var times = 0;
var c0 = 0;
var types = 0;
var half = false;
var scpl = false;
var b0 = false;
var b1 = false;
var se2;
var opt = [];
var keyin = false;
var nt0 = 0;
var nt1 = 0;
var si2;
var cst;
var options = ['-', '2x', '4x', 't/2', '+5'];
var rank_n = null;
var courses = ['↑↓←→', 'D/F/J/K', 'Space', 'Enter', 'A~Z/1~9', '4キー', 'Click', '-'];
var scrk = ["D", "C", "B", "BB", "BBB", "A", "AA", "AAA", "S", "S+", "SS", "SS+", "SSS", "SSS+"];
var k1 = {
    8: 'BackSpace',
    13: 'Enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    32: 'Space',
    37: '←',
    38: '↑',
    39: '→',
    40: '↓',
    189: '-'
};
var cl = false;
var score = 0;
var keyname = [];
var alpb = 'abcdefghijklmnopqrstuvwxyz';
for (i = 0; i < 36; i++) {
    if (i < 10)
        k1[(i + 48)] = i.toString();
    else
        k1[(i + 55)] = alpb[i - 10];
}
function sum(list) {
    var n = 0;
    for (i = 0; i < list.length; i++)
        n += list[i];
    return n;
}
var key = {};
var k0 = Object.keys(k1);
k0.sort();
for (var i = 0; i < k0.length; i++)
    key[k0[i]] = k1[k0[i]];
if (lst.getItem('#keyrank1') === null) {
    var ranks = JSON.stringify({
        1: {
            "score": 0,
            "push": 0,
            "course": 8,
            "option": "-"
        },
        2: {
            "score": 0,
            "push": 0,
            "course": 8,
            "option": "-"
        },
        3: {
            "score": 0,
            "push": 0,
            "course": 8,
            "option": "-"
        },
        4: {
            "score": 0,
            "push": 0,
            "course": 8,
            "option": "-"
        },
        5: {
            "score": 0,
            "push": 0,
            "course": 8,
            "option": "-"
        }
    });
    lst.setItem('#keyrank1', ranks);
} else {
    // if (document.getElementById('vsn').innerHTML !== "20200501-1"){
    //     var json = [];
    //     var js0 = JSON.parse(lst.getItem('#keyrank1'));
    //     var bl_1 = false;
    // }
}
var nums = Object.keys(key).map(str=>parseInt(str, 10));
function scplc() {
    if (!scpl) {
        scpl = true;
        document.getElementById("ck_0").innerHTML = "　";
    } else {
        scpl = false;
        document.getElementById('ck_0').innerHTML = "。";
    }
}
function course(x) {
    x = x || 0;
    var b_s = false;
    switch (x) {
    case 1:
        keynums = [37, 38, 39, 40];
        score = 360;
        if (cl)
            clear();
        break;
    case 2:
        keynums = [68, 70, 74, 75];
        score = 360;
        if (cl) {
            db = true;
            opt.push(1);
        }
        break;
    case 3:
        keynums = [32];
        score = 700;
        if (cl) {
            trp = true;
            opt.push(2);
        }
        break;
    case 4:
        keynums = [13];
        score = 750;
        if (cl) {
            half = true;
            opt.push(3);
        }
        break;
    case 5:
        keynums = nums;
        score = 270;
        if (cl) {
            p5 = true;
            opt.push(4);
        }
        break;
    case 6:
        b_s = true;
        score = 360;
        break;
    case 7:
        keynums = ['mouse'];
        score = 750;
        break;
    default:
        b_s = true;
        score = 360;
        break;
    }
    if (!cl) {
        opt = opt.filter(function(x, i, self) {
            return self.indexOf(x) === i;
        });
        if (b_s)
            keyselect();
        else
            startcheck(x);
    } else {
        cl = false;
    }
    types = parseInt(x);
    cst = 2 * score / 10;
    console.log(cst);
}
function reset() {
    times = 0;
    c0 = 0;
    trp = false;
    opt = [];
    p5 = false;
    b0 = false;
    b1 = false;
    db = false;
    rank_now = null;
    keynums = [];
    scpl = false;
    keyname = [];
    half = false;
    score = 0;
    types = 0;
    first_0 = false;
    total = 0;
    left = 0;
    nt0 = 0;
    nt1 = 0;
}
function re_start() {
    total = 0;
    times = 0;
    left = 0;
    course(types);
}
function mainMenu() {
    reset();
    document.getElementById('main').innerHTML = "<p class='msg_c' style='margin-bottom: 7.5px;' onclick='scplc()'>コースを選択してください<br><span style='font-size: 17.5px;'>(カッコ内はオプション操作)</span></p><p class='msg_c' id='alert'>※製作者は、このゲームをプレイして起きた損害の責任は負いません<span id='ck_0'>。</span></p><div id='select_course'><input type='button' class='selector' id='sel1' onclick='course(1)' value='上下左右&#32;(Reset)'><br><input type='button' class='selector' id='sel2' onclick='course(2)' value='D/F/J/K'><br><input type='button' class='selector' id='sel3' onclick='course(3)' value='スペース'><br><input type='button' class='selector' id='sel4' onclick='course(4)' value='エンター'><br><input type='button' class='selector' id='sel5' onclick='course(5)' value='A~Z / 1~9'><br><input type='button' class='selector' id='sel6' onclick='course(6)' value='お好きな4キー'><br><input type='button' class='selector' id='sel7' onclick='course(7)' value='マウスクリック'><br><hr color='#000000' size='2' width='80%' noshade style='text-align: center; border-style: dashed;'><input type='button' class='selector' id='sel8' onclick='ranking()' value='ランキングを表示'><br><input type='button' class='selector' id='sel8' onclick='checker()' value='コントローラー'><br></div>";
}
function rkey() {
    var n = [];
    var cm = 0;
    var n0 = null;
    while (true) {
        n0 = Math.floor(Math.random() * (nums.length));
        if (cm === 0) {
            n.push(key[nums[n0]]);
        } else {
            if (n.indexOf(key[nums[n0]]) < 0) {
                n.push(key[nums[n0]]);
            }
            if (n.length >= 4 || cm >= 10) {
                if (cm >= 10)
                    console.log(10);
                break;
            }
        }
        cm++;
    }
    document.getElementById('dispkey').innerHTML = n.join(", ");
    keyname = n;
}
function keyselect() {
    b0 = true;
    document.getElementById('main').innerHTML = "<p class='msg_c' onkeydown='keyset()'>キーを入力してください:</p><p id='dispcourse'>キー:&#32;</p><p class='msg_c' id=dispkey>-, -, -, -</p><input type='button' class='selector' id='sel7' onclick='rkey()' value='Random'><br><input type='button' class='selector' id='sel7' onclick='startcheck_1()' value='Continue'><br><input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Back'><br>";
    keyname = ['-', '-', '-', '-'];
}
function keyset() {
    if (b0) {
        c0 += 1;
        if (key[event.keyCode] === undefined) {
            window.alert('このキーは入力できません:\nkeyCode=' + event.keyCode);
        } else {
            keyname.push(key[event.keyCode]);
            keyname.shift();
            document.getElementById('dispkey').innerHTML = keyname.join(', ');
        }
    }
}
function keyplus() {
    if (keyin) {
        if (b1 && keynums[0] !== "mouse") {
            if (times > 99) {
                nt1 = new Date().getTime();
                clearInterval(si2);
                clearInterval(se2);
                b1 = false;
                keyin = false;
                showresults();
            }else if (keynums.indexOf(event.keyCode) >= 0){
                times++;
                document.getElementById('showtimes').innerHTML = times;
            }
        }
    }
}
function keyplus_1() {
    if (keyin) {
        if (keynums[0] === 'mouse') {
            if (times > 99) {
                nt1 = new Date().getTime();
                clearInterval(si2);
                clearInterval(se2);
                b1 = false;
                keyin = false;
                showresults();
            }else{
                times++;
                document.getElementById('showtimes').innerHTML = times;
            }
            se2 = setInterval(function() {
                document.getElementById('hidbtn').focus();
            }, 1);
        }
    }
}
function startcheck(course) {
    if (opt.length <= 0)
        opt.push(0);
    var csn = ['上下左右キー', 'D / F / J / Kのみ', 'スペースキー', 'エンターキー', 'アルファベット+数字キー', 'エラー：Backを押してください', 'マウスクリック'];
    document.getElementById('main').innerHTML = "<p class='msg_c'>これで開始します。よろしいですか？</p><p id='dispcourse'>コース:&#32;「&#32;" + csn[(course - 1)] + "&#32;」<br>Option:&#32;" + opt.sort(function(a, b) {
        return a - b;
    }).map(function(x) {
        return options[x];
    }).join(', ') + "</p><input type='button' class='selector' id='sel_st' onclick='gameStart()' value='Yes'><br><input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Back'><br>";
}
function findFromValue(obj, val) {
    var result = null;
    const k_00 = Object.keys(obj);
    for (let i = 0; i < k_00.length; i++)
        if (obj[k_00[i]] === val)
            result = k_00[i];
    return result;
}
function startcheck_1() {
    b0 = false;
    if (opt.length <= 0)
        opt.push(0);
    for (i = 0; i < keyname.length; i++)
        keynums.push(parseInt(findFromValue(key, keyname[i])));
    document.getElementById('main').innerHTML = "<p class='msg_c'>これで開始します。よろしいですか？</p><p id='dispcourse'>コース:&#32;「&#32;お好きな4キー&#32;」</p><p id='dispcourse'>キー:&#32;「&#32;" + keyname.join(', ') + "&#32;」<br>Option:&#32;" + opt.sort(function(a, b) {
        return a - b;
    }).map(function(x) {
        return options[x];
    }).join(', ') + "</p><input type='button' class='selector' id='sel_st' onclick='gameStart()' value='Yes'><br><input type='button' class='selector' id='sel_menu' onclick='keyselect()' value='Back'><br><input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Goto:&#32;MainMenu'><br>";
}
function rest() {// if types
}
function gameStart() {
    var t5 = 5;
    document.getElementById('main').innerHTML = "<p class='msg_c'><span id='showtimes' style='font-size: 40px;'>6</span><br></p><!--input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Goto:&#32;MainMenu'><br-->";
    var se1 = setInterval(function() {
        document.getElementById('showtimes').innerHTML = t5;
        t5--;
        if (t5 < 0) {
            clearInterval(se1);
            pressKeys();
        }
    }, 1000);
}
function pressKeys() {
    b1 = true;
    keyin = true;
    // if (p5)
    //     left += 5;
    // if (half)
    //     left = Math.floor(left / 2);
    // if (trp)
    //     left = Math.floor(left * 0.4);
    // document.getElementById('body0').focus();
    nt0 = new Date().getTime();
    document.getElementById('main').innerHTML = "<p class='msg_c'>Press:&#32;<span id='showtimes'>0</span>key / 100<br><span id='showctd'>" + 0 + "</span>&#32;seconds past...</p>" + '<div id=set01><p class="clickwin" id="clicks" onclick="keyplus_1()">ここをクリック！</p></div><br>';
    if (types !== 7)
        document.getElementById('clicks').innerHTML = 'キーを連打！';
    // setTimeout(function() {
    //     b1 = false;
    //     keyin = false;
    //     showresults();
    // }, left * 1000);
    si2 = setInterval(function() {
        left++;
        // if (times > 99) {
        //     nt1 = new Date().getTime();
        //     clearInterval(si2);
        //     clearInterval(se2);
        //     b1 = false;
        //     keyin = false;
        //     showresults();
        // } else
            document.getElementById('showctd').innerHTML = left;
    }, 1000);
}
function result_format() {
    var opt_now = opt.sort(function(a, b) {
        return a - b;
    });
    //.map(function (x){return options[x];}).join(', ');
    // console.log(opt_now);
    if (opt_now.length <= 0)
        opt_now.push(0);
    document.getElementById('main').innerHTML = '<p class="msg_c">今回の記録</p><div id="scores"></div>';
    document.getElementById('scores').innerHTML = '<p class="p_score">コース:&#32;<span>' + courses[types - 1] + '<p class="p_score">スコア:&#32;<span>' + total + '</span></p>' + '<p class="p_score">past:&#32;<span>' + s1 + '</span> / <span>' + (cst * 100) + '</span></p><p class="p_score"><span id="ranks"></span><p><p class="p_score">Rank:&#32;<span id="op"></span><p>' + "<input type='button' class='selector' id='sel_rank' onclick='ranking()' value='ランキングを表示'><br>" + "<input type='button' class='selector' id='rest_btn' onclick='re_start()' value='Re:&#32;Start'><br>" + "<input type='button' class='selector' id='sel_menu' onclick='mainMenu()' value='Goto:&#32;MainMenu'><br>";
    document.getElementById('op').innerHTML = rank_n//opt_now.map(function(x) {return options[x];}).join(', ');
    var json = JSON.parse(lst.getItem('#keyrank1'));
    if (first_0) {
        var pushl = 0;
        for (i = 0; i < Object.keys(json).length; i++)
            if (pushl < parseInt(json[i + 1]["push"]))
                pushl = parseInt(json[i + 1]["push"]);
        if (total > parseInt(json[1]["score"])) {
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング1位達成';
            rank_now = 1;
            // json[5]["score"] = json[4]["score"];
            // json[5]["push"] = json[4]["push"];
            // json[5]["course"] = json[4]["course"];
            // json[5]["option"] = json[4]["option"];
            json[4]["score"] = json[3]["score"];
            json[4]["push"] = json[3]["push"];
            json[4]["course"] = json[3]["course"];
            json[4]["option"] = json[3]["option"];
            json[3]["score"] = json[2]["score"];
            json[3]["push"] = json[2]["push"];
            json[3]["course"] = json[2]["course"];
            json[3]["option"] = json[2]["option"];
            json[2]["score"] = json[1]["score"];
            json[2]["push"] = json[1]["push"];
            json[2]["course"] = json[1]["course"];
            json[2]["option"] = json[1]["option"];
            json[1]["score"] = total;
            json[1]["push"] = s1;
            json[1]["course"] = types;
            json[1]["option"] = rank_n// parseInt(opt_now.map(function(x) {return x.toString();}).join(''));
        } else if (total > parseInt(json[2]["score"])) {
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング2位達成';
            rank_now = 2;
            // json[5]["score"] = json[4]["score"];
            // json[5]["push"] = json[4]["push"];
            // json[5]["course"] = json[4]["course"];
            // json[5]["option"] = json[4]["option"];
            json[4]["score"] = json[3]["score"];
            json[4]["push"] = json[3]["push"];
            json[4]["course"] = json[3]["course"];
            json[4]["option"] = json[3]["option"];
            json[3]["score"] = json[2]["score"];
            json[3]["push"] = json[2]["push"];
            json[3]["course"] = json[2]["course"];
            json[3]["option"] = json[2]["option"];
            json[2]["score"] = total;
            json[2]["push"] = s1;
            json[2]["course"] = types;
            json[2]["option"] = rank_n// parseInt(opt_now.map(function(x) {return x.toString();}).join(''));
        } else if (total > parseInt(json[3]["score"])) {
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング3位達成';
            rank_now = 3;
            // json[5]["score"] = json[4]["score"];
            // json[5]["push"] = json[4]["push"];
            // json[5]["course"] = json[4]["course"];
            // json[5]["option"] = json[4]["option"];
            json[4]["score"] = json[3]["score"];
            json[4]["push"] = json[3]["push"];
            json[4]["course"] = json[3]["course"];
            json[4]["option"] = json[3]["option"];
            json[3]["score"] = total;
            json[3]["push"] = s1;
            json[3]["course"] = types;
            json[3]["option"] = rank_n// parseInt(opt_now.map(function(x) {return x.toString();}).join(''));
        } else if (total > parseInt(json[4]["score"])) {
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング4位達成';
            rank_now = 4;
            // json[5]["score"] = json[4]["score"];
            // json[5]["push"] = json[4]["push"];
            // json[5]["course"] = json[4]["course"];
            // json[5]["option"] = json[4]["option"];
            json[4]["score"] = total;
            json[4]["push"] = s1;
            json[4]["course"] = types;
            json[4]["option"] = rank_n// parseInt(opt_now.map(function(x) {return x.toString();}).join(''));
        } else {
            document.getElementById('ranks').innerHTML = 'ランキング圏外';
            rank_now = 6;
        }
        if (s1 > pushl) {
            document.getElementById('ranks').innerHTML = '最大past値更新';
            rank_now = 5;
            json[5]["score"] = total;
            json[5]["push"] = s1;
            json[5]["course"] = types;
            json[5]["option"] = rank_n// parseInt(opt_now.map(function(x) {return x.toString();}).join(''));
        }
    }
    if (first_0)
        lst.setItem('#keyrank1', JSON.stringify(json));
    if (!first_0) {
        switch (rank_now) {
        case 1:
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング1位達成';
            break;
        case 2:
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング2位達成';
            break;
        case 3:
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング3位達成';
            break;
        case 4:
            document.getElementById('ranks').innerHTML = 'デバイス内ランキング4位達成';
            break;
        case 5:
            document.getElementById('ranks').innerHTML = '最大past値更新';
            break;
        case 6:
            document.getElementById('ranks').innerHTML = 'ランキング圏外';
            break;
        default:
            document.getElementById('ranks').innerHTML = 'エラー発生:Goto:MainMenuを押してください';
            break;
        }
    }
    first_0 = false;
}
function showresults() {
    first_0 = true;
    document.getElementById('main').innerHTML = '<p class="msg_c">スコアを計算中！<br>ちょっと待っててね。</p>';
    s1 = cst * 100 - (nt1 - nt0);
    if (scpl) total = score * s1 * 1.2;
    // if (db) {
    //     score *= 2;
    //     times /= 2;
    // }
    // if (trp) {
    //     score *= 2;
    //     times *= 2;
    // }
    // if (half)
    //     times *= 2;
    // if (p5)
    //     times = Math.round(times * 0.4);
    // if (scpl) {
    //     score *= 1.5;
    //     times *= 2;
    // }
    total = score * s1;//score * times + (score * 10) * parseInt((times - (times % 100)) / 100);
    if (s1 >= 4250){
        rank_n = (scrk[scrk.length - 1]);
    }else if (s1 >= 4000){
        rank_n = (scrk[scrk.length - 2]);
    }else if (s1 >= 3500){
        rank_n = (scrk[scrk.length - 3]);
    }else if (s1 >= 3000){
        rank_n = (scrk[scrk.length - 4]);
    }else if (s1 >= 2500){
        rank_n = (scrk[scrk.length - 5]);
    }else if (s1 >= 2000){
        rank_n = (scrk[scrk.length - 6]);
    }else if (s1 >= 1500){
        rank_n = (scrk[scrk.length - 7]);
    }else if (s1 >= 1000){
        rank_n = (scrk[scrk.length - 8]);
    }else if (s1 >= 0){
        rank_n = (scrk[scrk.length - 9]);
    }else if (s1 >= -1000){
        rank_n = (scrk[scrk.length - 10]);
    }else if (s1 >= -2000){
        rank_n = (scrk[scrk.length - 11]);
    }else if (s1 >= -3000){
        rank_n = (scrk[scrk.length - 12]);
    }else if (s1 >= -4000){
        rank_n = (scrk[scrk.length - 13]);
    }else{
        rank_n = ("F");
    }
    
    // console.log("nt1 - nt0");
    // console.log(nt1 - nt0);
    // console.log(score);
    // opt_now = scrk[];
    setTimeout(result_format(), 3000);
}
function ranking() {
    if (cl) {
        cl = false;
        opt = [];
    } else {
        var json = JSON.parse(lst.getItem('#keyrank1'));
        // document.getElementById('main').innerHTML = '<p class="msg_c">準備中！<br>ちょっと待っててね。</p>' +"<input type='button' class='selector' id='sel_menu' onclick='branch_0()' value='Back'><br>";
        document.getElementById('main').innerHTML = '<p class="msg_c">デバイス内ランキング</p><ul class="ul-des"><li class="wsets"><ul class="ul_in"><li class="lipart">順位<span id="spw" style="font-weight: 100;"></span></li><li class="lipart">スコア</li><li class="lipart">past</li><li class="lipart">コース</li><li class="lipart">Rank</li></ul></li></ul><br>' + '<li class="wsets"><ul class="ul_in"><li class="lipart">1</li><li class="lipart">' + json[1]["score"] + '</li><li class="lipart">' + json[1]["push"] + '</li><li class="lipart">' + courses[parseInt(json[1]["course"]) - 1] + '</li><li class="lipart">' + json[1]["option"]/*.toString().split("").map(function(x) {
            return options[x];
        }).join(', ')*/ + '</li></ul><br><ul class="ul_in"><li class="lipart">2</li><li class="lipart">' + json[2]["score"] + '</li><li class="lipart">' + json[2]["push"] + '</li><li class="lipart">' + courses[parseInt(json[2]["course"]) - 1] + '</li><li class="lipart">' + json[2]["option"]/*.toString().split("").map(function(x) {
            return options[x];
        }).join(', ')*/ + '</li></ul><br><ul class="ul_in"><li class="lipart">3</li><li class="lipart">' + json[3]["score"] + '</li><li class="lipart">' + json[3]["push"] + '</li><li class="lipart">' + courses[parseInt(json[3]["course"]) - 1] + '</li><li class="lipart">' + json[3]["option"]/*.toString().split("").map(function(x) {
            return options[x];
        }).join(', ')*/ + '</li></ul><br><ul class="ul_in"><li class="lipart">4</li><li class="lipart">' + json[4]["score"] + '</li><li class="lipart">' + json[4]["push"] + '</li><li class="lipart">' + courses[parseInt(json[4]["course"]) - 1] + '</li><li class="lipart">' + json[4]["option"]/*.toString().split("").map(function(x) {
            return options[x];
        }).join(', ')*/ + '</li></ul><br><ul class="ul_in" id="pushdis"><li class="lipart">max_past</li><li class="lipart">' + json[5]["score"] + '</li><li class="lipart">' + json[5]["push"] + '</li><li class="lipart">' + courses[parseInt(json[5]["course"]) - 1] + '</li><li class="lipart">' + json[5]["option"]/*.toString().split("").map(function(x) {
            return options[x];
        }).join(', ')*/ + '</li></ul><br></li><br><br>' + "<input type='button' class='selector' id='sel_menu' onclick='branch_0()' value='Back'><br>";
    }
}
function branch_0() {
    if (score > 0)
        result_format();
    else
        mainMenu();
}
function clear() {
    score = 0;
    if (cl || scpl) {
        if (window.confirm('本当にランキングをリセットしますか？')) {
            var json = JSON.parse(lst.getItem('#keyrank1'));
            for (i = 0; i < 4; i++) {
                json[i + 1]["score"] = 0;
                json[i + 1]["push"] = 0;
                json[i + 1]["course"] = 8;
                json[i + 1]["option"] = "-";
            }
            if (scpl) {
                json[5]["score"] = 0;
                json[5]["push"] = 0;
                json[5]["course"] = 8;
                json[5]["option"] = "-";
            }
            lst.setItem("#keyrank1", JSON.stringify(json));
            cl = false;
            scpl = false;
            setTimeout(function() {
                branch_0()
            }, 10);
        }
    }
}
function checker() {
    if (!cl)
        cl = true;
    else if (cl)
        cl = false;
}
