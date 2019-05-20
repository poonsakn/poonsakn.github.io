google.charts.load('42', { packages: ['corechart', 'line'] });
google.charts.setOnLoadCallback(drawCurveTypes);

function drawCurveTypes() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'ปี');
    data.addColumn('number', 'นครนายก');
    data.addColumn('number', 'ปราจีนบุรี');
    data.addColumn('number', 'สระแก้ว');
    data.addColumn('number', 'จันทบุรี');
    data.addColumn('number', 'ตราด');
    data.addColumn('number', 'รวม');

    data.addRows([
        [2547, 754042478, 1486365755, 1348142946, 1784308644, 637485044, 6010344867],
        [2548, 1063093933, 1722566577, 1627128709, 2118978897, 1125969721, 7657737837],
        [2549, 1423453812, 1935155630, 1852977416, 2388382798, 1280226150, 8880195806],
        [2550, 1270661752, 1663623037, 1258540404, 1731744046, 969887469, 6894456708],
        [2551, 1167624807, 1853321477, 1069062571, 1636812912, 986770871, 6713592638],
        [2552, 866523988, 1471831843, 1348147153, 1443304572, 1146172788, 6275980344],
        [2553, 902717086, 1345506049, 1383138225, 1808729526, 1051594531, 6491685417],
        [2554, 1074604547, 2619175866, 1834420738, 2521125368, 1721509442, 9770835961],
        [2555, 757601846, 3095906970, 1295469212, 4132868701, 1061234055, 10343080784],
        [2556, 1420060225, 2527417981, 2405838384, 4270890687, 1289056289, 11913263566],
        [2557, 1697591341, 3232180765, 2927530863, 4396028648, 1574666279, 13827997896],
        [2558, 3109042467, 5655465432, 4064899211, 4388076158, 2531557863, 19749041131],
        [2559, 5165450628, 4911241059, 4983507491, 5902952700, 3197632741, 24160784619],
        [2560, 3441633290, 3668785650, 4739107646, 4251241430, 2173545340, 18274313356],
        [2561, 4007808867, 5410493590, 5430021448, 5729599097, 2939898418, 23517821420],
        [2562, 4418795647, 5579013247, 5382134847, 6253304134, 2828784744, 24462032619]

    ]);

    var options = {
        width: "100%",
        height: 900,
        hAxis: {
            title: 'Time',
            format: '####'
        },
        vAxis: {
            title: 'งบประมาณ',
        },
    };

    var chart = new google.visualization.LineChart(document.getElementById('budget_ts'));
    chart.draw(data, options);
}
