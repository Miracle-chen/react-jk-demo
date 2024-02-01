import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const BarEcharts = () => {
    const echartRef = useRef();
    useEffect(()=>{
        // 获取当前节点
        const dom = echartRef.current;
        // 生成初始化图表实例对象
        const myEchart = echarts.init(dom);
        const options = {
            title: {
                text: '图表标题'
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                }
            ]
        };
        // 设置图表数据
        myEchart.setOption(options);
    }, [])
    return <div ref={echartRef} style={{ width: 500, height: 400 }}></div>
};

export default BarEcharts;