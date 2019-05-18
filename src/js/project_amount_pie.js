google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
        ['จังหวัด', 'แผนงาน'],
        ['นครนายก', 31],
        ['ปราจีนบุรี', 30],
        ['สระแก้ว', 30],
        ['จันทบุรี', 38],
        ['ตราด', 31]
    ]);

    var options = {
        width: 900,
        height: 500,
        legend: { position: 'none' },
        chart: {
            title: 'จำนวนแผนงานแบ่งตามจังหวัด'
        },
        axes: {
            x: {
                0: { side: 'top', label: 'จังหวัด' } // Top x-axis.
            }
        },
        bar: { groupWidth: "70%" }
    };

    var chart = new google.charts.Bar(document.getElementById('project_amount_pie'));
    // Convert the Classic options to Material options.
    chart.draw(data, google.charts.Bar.convertOptions(options));
};
