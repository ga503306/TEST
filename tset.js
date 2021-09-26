var price_low_array = [];
var price_high_array = [];
var Calu = {
    init: function () {
        Calu.getCurrect();
    },
    check: function () {
        //還沒寫完
        price_high_array.push($('#price_high').val());
        price_low_array.push($('#price_low').val());
        var width = $('#width').val();
        var height = $('#height').val();
        if (width * 3 < height) {
            alert('高度不可超過寬度三倍');
            return false;
        }
        switch ($("#type").val()) {
            case '1':
                //進位到整數 = 幅數 = 寬度2（兩倍用布量）/30.3（換算成尺）/5（5呎，一幅是五尺）=
                var vu = Math.ceil(width * 2 / 30.3 / 5);
                //進位到小數第一位數 = 碼數 =（高度/30.3）+1（上下反摺30公分左右）｝幅數/3（一碼3尺）
                var ma = Math.ceil((((height / 30.3) + 1) * vu / 3) * 10) / 10;
                //布價 = 折數 * 單價 * 碼數
                //最高價 最低價
                var amt_low = 1 * price_low_array[0] * ma;
                var amt_high = 1 * price_high_array[0] * ma;
                $('#amt_low').val(amt_low);
                $('#amt_high').val(amt_high);
                //軌道 (寬度/30.3)*100=軌道前
                var rail = Math.ceil(width / 30.3) * 100
                //如果低於500，軌道價就等於500
                if (rail < 500) {
                    rail = 500;
                }
                $('#rail').val(rail);
                //車工 = 幅數 * 250
                var turner = vu * 250;
                $('#turner').val(turner);
                //安裝費 50一尺
                var install = Math.ceil(width / 30.3) * 50;
                //如果低於500，安裝費就等於500
                if (install < 500) {
                    install = 500;
                }
                $('#install').val(install);

                //總金額
                var total_low = Math.ceil(amt_low * 2.5 + turner + rail + install);
                var total_high = Math.ceil(amt_high * 2.5 + turner + rail + install);
                $('#total_low').val(total_low);
                $('#total_high').val(total_high);
                break;
            case '2':
                //寬度2.5/30.3/3=碼數
                var ma = accAdd(Math.floor((width * 2.5 / 30.3 / 3) * 10) / 10, 0.1)
                //布價 = 折數 * 單價 * 碼數
                //最高價 最低價
                var amt_low = 1 * price_low_array[1] * ma;
                var amt_high = 1 * price_high_array[1] * ma;
                $('#amt_low').val(amt_low);
                $('#amt_high').val(amt_high);
                //軌道 (寬度/30.3)*100=軌道前
                var rail = Math.ceil(width / 30.3) * 200
                //如果低於500，軌道價就等於500
                if (rail < 500) {
                    rail = 500;
                }
                $('#rail').val(rail);
                //車工 = 寬度/30.3 * 120
                var turner = Math.ceil(width / 30.3 * 10) / 10 * 120;
                $('#turner').val(turner);
                //安裝費 50一尺
                var install = Math.ceil(width / 30.3) * 50;
                //如果低於500，安裝費就等於500
                if (install < 500) {
                    install = 500;
                }
                $('#install').val(install);

                //總金額
                var total_low = Math.ceil(amt_low * 2.5 + turner + rail + install);
                var total_high = Math.ceil(amt_high * 2.5 + turner + rail + install);
                $('#total_low').val(total_low);
                $('#total_high').val(total_high);
                break;
            case '3':
                //寬度2/30.3/3=碼數
                var ma = accAdd(Math.floor((width * 2 / 30.3 / 3) * 10) / 10, 0.1)
                //布價 = 折數 * 單價 * 碼數
                //最高價 最低價
                var amt_low = 1 * price_low_array[2] * ma;
                var amt_high = 1 * price_high_array[2] * ma;
                $('#amt_low').val(amt_low);
                $('#amt_high').val(amt_high);
                //軌道 (寬度/30.3)*100=軌道前
                var rail = Math.ceil(width / 30.3) * 100
                //如果低於500，軌道價就等於500
                if (rail < 500) {
                    rail = 500;
                }
                $('#rail').val(rail);
                //車工 = 碼數 * 240
                var turner = ma * 240;
                $('#turner').val(turner);
                //安裝費 50一尺
                var install = Math.ceil(width / 30.3) * 50;
                //如果低於500，安裝費就等於500
                if (install < 500) {
                    install = 500;
                }
                $('#install').val(install);
                //鉛條 25一尺
                var lead = Math.ceil(width / 30.3) * 25;
                //總金額
                var total_low = Math.ceil(amt_low * 2.5 + turner + rail + install + lead);
                var total_high = Math.ceil(amt_high * 2.5 + turner + rail + install + lead);
                $('#total_low').val(total_low);
                $('#total_high').val(total_high);
                break;
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
                //寬度高度/30.3/30.3=才數
                var cube = accAdd(Math.floor((width * height / 30.3 / 30.3) * 10) / 10, 0.1);
                //基本才 如果是鋁百葉 12 基本才12
                if ($("#type").val() == 3) {
                    if (cube < 12) {
                        cube = 12;
                    }
                }
                else {
                    if (cube < 15) {
                        cube = 15;
                    }
                }
                //最高價 最低價 * 才數
                var amt_low = accMul(price_low_array[$("#type").val() - 1], cube);
                var amt_high = accMul(price_high_array[$("#type").val() - 1], cube);
                $('#amt_low').val(amt_low);
                $('#amt_high').val(amt_high);

                //安裝費 50一尺
                var install = Math.ceil(width / 30.3) * 50;
                //如果低於500，安裝費就等於500
                if (install < 500) {
                    install = 500;
                }
                $('#install').val(install);

                //總金額
                var total_low = Math.ceil(amt_low + install);
                var total_high = Math.ceil(amt_high + install);
                $('#total_low').val(total_low);
                $('#total_high').val(total_high);
                break;
            default:
                alert('請選擇種類');
                return false;
        }


    }
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
//加法
function accAdd(arg1, arg2) {
    var r1, r2, m;
    try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2));
    return (arg1 * m + arg2 * m) / m;
}
//乘法
function accMul(arg1, arg2) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
        m += s1.split(".")[1].length;
    } catch (e) { }
    try {
        m += s2.split(".")[1].length;
    } catch (e) { }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
}
