var price_low_array = [];
var price_high_array = [];
var Calu = {
    init: function () {
        Calu.getCurrect();
    },
    getCurrect: function () {
        $.get("https://raw.githubusercontent.com/ga503306/TEST/main/config", function (data) {
            var config = JSON.parse(data);
            console.log(config);
            
          
            price_low_array.push(config.price1_low);//摺景簾
            price_high_array.push(config.price1_high);
            price_low_array.push(config.price2_low);//蛇形簾
            price_high_array.push(config.price2_high);
            price_low_array.push(config.price3_low);//無接縫紗簾 折景簾
            price_high_array.push(config.price3_high);
            price_low_array.push(config.price4_low);//鋁百葉/塑鋁百葉
            price_high_array.push(config.price4_high);
            price_low_array.push(config.price5_low);//調光簾/斑馬簾
            price_high_array.push(config.price5_high);
            price_low_array.push(config.price6_low);//木百葉
            price_high_array.push(config.price6_high);
            price_low_array.push(config.price7_low);//風琴簾
            price_high_array.push(config.price7_high);
            price_low_array.push(config.price8_low);//捲簾
            price_high_array.push(config.price8_high);
        });
    },
    check: function () {
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
                var ma = (width * 2.5 / 30.3 / 3) + 0.1
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
                var ma = (width * 2 / 30.3 / 3) + 0.1
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
                var cube = (width * height / 30.3 / 30.3) + 0.1
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
                var amt_low = 1 * price_low_array[$("#type").val() - 1] * cube;
                var amt_high = 1 * price_low_array[$("#type").val() - 1] * cube;
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
                var total_low = Math.ceil(amt_low * 2.5 + install );
                var total_high = Math.ceil(amt_high * 2.5 + install );
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
