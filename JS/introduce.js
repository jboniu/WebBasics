
//1.获取DOM容器，对Echarts进行初始化
const echart = echarts.init(document.getElementById('ech-form'));
//2.设置图表参数
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            },
        }
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: [, 'bar', 'line'] },
            restore: { show: true },
            saveAsImage: { show: true }
        },
        iconStyle: {
            borderStyle: 'white',
            color: 'white'
        }

    },
    legend: {
        textStyle: {
            color: 'white'
        },
        data: ['发行年份', '豆瓣评分']

    },
    grid: {
        // left: '10%',
        bottom: '18%'
    },
    xAxis: [
        {
            type: 'category',
            // max: 7,
            data: ['猫之报恩', '悬崖上的金鱼姬', '侧耳倾听', '幽灵公主', '借东西的小人阿莉埃蒂', '天空之城', '哈尔的移动城堡', '千与千寻'],
            axisPointer: {
                type: 'shadow'
            },
            axisLabel: {
                interval: 0,
                rotate: 40,
                textStyle: {
                    color: 'white'
                }
            }
        }
    ],
    yAxis: [{
        type: 'value',
        name: '发行年份',
        nameTextStyle: {
            color: 'white'
        },
        min: 1985,
        max: 2011,
        interval: 2,
        axisLabel: {
            formatter: '{value} 年',
            textStyle: {
                color: 'white'
            }
        }
    },
    {
        type: 'value',
        name: '豆瓣评分',
        nameTextStyle: {
            color: 'white'
        },
        min: 8.0,
        max: 9.3,
        interval: 0.1,
        axisLabel: {
            formatter: '{value} 分',
            textStyle: {
                color: 'white'
            }
        }
    }

    ],
    series: [

        {
            name: '发行年份',
            type: 'bar',

            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 年';
                }
            },
            data: [2002, 2008, 1995, 1997, 2010, 1986, 2004, 2001]

        },
        {
            name: '豆瓣评分',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 分';
                }
            },
            data: [
                8.2, 8.5, 8.9, 8.9, 8.9, 9.1, 9.1, 9.3
            ]
        }
    ]
};
//3.根据参数绘制图表
echart.setOption(option);
