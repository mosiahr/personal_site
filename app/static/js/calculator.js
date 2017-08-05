/**
 * Created by mosya on 28.07.17.
 */

$(document).ready(function() {

    var osago = JSON.parse(data);
    console.log(osago);

    function insertOption(el, ind) {
        var html = '';
        var i = 0;
        for (obj in osago[el]) {
            if (ind == i + 1) {
                html += '<option selected value="' + osago[el][obj]['k'] + '">' + osago[el][obj]['title'] + '</option>';
            }
            else {
                html += '<option value="' + osago[el][obj]['k'] + '">' + osago[el][obj]['title'] + '</option>';
            }
            i++;
        }
        document.getElementById(el).innerHTML += html;
    }

    function insertOptionBonus(el, ind) {
        var html = '';
        var i = 0;
        for (obj in osago[el]) {
            if (ind == i + 1) {
                html += '<option selected value="' + osago[el][obj]['k'] + '">' + osago[el][obj]['title'] + ' (' + osago[el][obj]['k'].toFixed(2) + ')' + '</option>';
            }
            else {
                 html += '<option value="' + osago[el][obj]['k'] + '">' + osago[el][obj]['title'] + ' (' + osago[el][obj]['k'].toFixed(2) + ')' + '</option>';
            }
            i++;
        }
        document.getElementById(el).innerHTML += html;
    }

    function change() {
        selectAuto = $('#auto option').filter(':selected').val();
        selectZone = $('#zone option').filter(':selected').val();
        selectPeirod = $('#period option').filter(':selected').val();
        selectIndividual = $('#individual option').filter(':selected').val();
        selectBonus = $('#bonus option').filter(':selected').val();
        selectExemption = $('#exemption option').filter(':selected').val();
        rezult({
            auto: parseFloat(selectAuto),
            zone: parseFloat(selectZone),
            period: parseFloat(selectPeirod),
            individual: parseFloat(selectIndividual),
            bonus: parseFloat(selectBonus),
            exemption: parseFloat(selectExemption)
        });
    }

    function eventSelect(el) {
        $(el).change(function () {
            change();
        });
    }

    function rezult(select) {

        var sum,
        // значения по-умолчанию
            basePay = osago['base_pay'],
            auto = select.auto,
            zone = select.zone,
            period = select.period,
            individual = select.individual,
            bonus = select.bonus,
            exemption = select.exemption;

        sum = parseFloat((basePay * auto * zone * period * individual * bonus * exemption).toFixed(2));
        console.log(basePay, auto, zone, period, individual, bonus, exemption, sum);

        document.getElementById('auto_rez').innerHTML = auto;
        document.getElementById('zone_rez').innerHTML = zone;
        document.getElementById('period_rez').innerHTML = period;
        document.getElementById('individual_rez').innerHTML = individual;
        document.getElementById('bonus_rez').innerHTML = bonus;
        document.getElementById('exemption_rez').innerHTML = exemption;
        document.getElementById('rezult').innerHTML = sum;
    }

    insertOption('auto', 1);
    insertOption('zone', 6);
    insertOption('period', 7);
    insertOption('individual', 1);
    insertOptionBonus('bonus', 5);
    insertOption('exemption', 2);

    eventSelect('#auto');
    eventSelect('#zone');
    eventSelect('#period');
    eventSelect('#individual');
    eventSelect('#bonus');
    eventSelect('#exemption');

    // When the page loads, the calculation is performed
    change();
});
