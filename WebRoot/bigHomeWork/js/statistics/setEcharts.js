/**
 * Created by liangjiahui on 2018/6/8.
 */
//折线图
function setLine(param){
    var chart = echarts.init(param.echarts_div);
    var option = {
        xAxis: {
            type: 'category',
            data:param.X
        },
        yAxis: {
            type: 'value'
        },
        tooltip: {
            trigger: 'axis'
        },
        series: [{
            data:param.datas,
            type: 'line'
        }]
    };
    chart.setOption(option);
}
//饼图
function setPie(param){
    var chart = echarts.init(param.echarts_div);
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: param.noShowPer == true?"{a} <br/>{b} : {c}%":"{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: param.X
        },
        series : [
            {
                name: param.name,
                type: 'pie',
                radius : '80%',
                center: ['40%', '50%'],
                data:param.datas,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chart.setOption(option);
}
//双柱柱状图
function setDoubleBar(param){
    var chart = echarts.init(param.echarts_div);
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(data)
            {
                if(data[0] != null && data[1] != null){
                    return data[0].name+"</br>"+
                        data[0].seriesName+" : "+data[0].value+"</br>"+
                        data[1].seriesName+" : "+data[1].value+"</br>";
                }else if(data[0] == null){
                    return data[1].name+"</br>"+
                        data[1].seriesName+" : "+data[1].value+"</br>";
                }else if(data[1] == null){
                    return data[0].name+"</br>"+
                        data[0].seriesName+" : "+data[0].value+"</br>";
                }
            }
        },
        legend: {
            data: param.legend
        },
        xAxis: {
            type: 'category',
            data: param.X
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            name: param.legend[0],
            data: param.datas1,
            type: 'bar'
        },{
            name: param.legend[1],
            data: param.datas2,
            type: 'bar'
        }]
    };

    chart.setOption(option);
}
//双饼图
function setDoublePie(param){
    var chart = echarts.init(param.echarts_div);
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        title: [{
            left: '20%',
            text: param.name1
        }, {
            left: '60%',
            text: param.name2
        }],
        legend: {
            orient: 'vertical',
            left: 'left',
            data: param.legend
        },
        series : [
            {
                name: param.name1,
                type: 'pie',
                radius : '60%',
                center: ['30%', '50%'],
                data:param.datas1,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            },
            {
                name: param.name2,
                type: 'pie',
                radius : '60%',
                center: ['70%', '50%'],
                data:param.datas2,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    chart.setOption(option);
}

//堆叠柱状图
function setStackBar(param){
    var chart = echarts.init(param.echarts_div);
    var series = [];
    for(var i = 0;i<param.series.length;i++){
        var obj = {
            name: param.series[i].name,
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: false,
                }
            },
            data: param.series[i].data
        }
        series.push(obj);
    }
    var option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
            // formatter: param.noShowPer == true?"{a} <br/>{b} : {c}%":"{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            data: param.legend
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis:  {
            type: 'value'
        },
        yAxis: {
            type: 'category',
            data:param.Y
        },
        series: series
    };
    chart.setOption(option);
}