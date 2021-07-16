var Calu = {
    init: function () {
        Calu.getCurrect();
    },
    getCurrect: function () {
        $.get("https://raw.githubusercontent.com/ga503306/TEST/main/config", function (data) {
            var config = JSON.parse(data);
            console.log(config);
            price_low = config.price_low;
            price_high = config.price_high;
        });
    },
    check: function () {
        var width = $('#width').val();
        var height = $('#height').val();
        //進位到整數 = 幅數 = 寬度2（兩倍用布量）/30.3（換算成尺）/5（5呎，一幅是五尺）=
        var vu = Math.ceil(width * 2 / 30.3 / 5);
        //進位到第一位數 = 碼數 =（高度/30.3）+1（上下反摺30公分左右）｝幅數/3（一碼3尺）
        var ma = Math.ceil((((height / 30.3) + 1) * vu / 3) / 10) * 10;
        //布價 = 折數 * 單價 * 碼數
        //最高價 最低價
        var amt_low = 0.9 * price_low * ma;
        var amt_high = 0.4 * price_high * ma;
        $('#amt_low').val(amt_low);
        $('#amt_high').val(amt_high);
        //軌道 (寬度/30.3)*100=軌道前
        var rail = roundToTwo(width / 30.3) * 100
        $('#rail').val(rail);
        //車工 = 碼數 * 230
        var turner = ma * 230;
        $('#turner').val(turner);
        //總金額
        var total_low = amt_low * 2.5 + turner + rail;
        var total_high = amt_high * 2.5 + turner + rail;
        $('#total_low').val(total_low);
        $('#total_high').val(total_high);
    }
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
