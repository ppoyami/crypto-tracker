// 캔들 색상 변경
export const candlestickOption: ApexCharts.ApexOptions = {
  chart: {
    type: 'candlestick',
    height: 450,
  },
  title: {
    text: 'CandleStick Chart',
    align: 'left',
  },
  xaxis: {
    type: 'category',
    labels: {
      formatter: value => {
        const date = new Date(value);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${month}/${day}`;
      },
    },
  },
  yaxis: {
    tooltip: {
      enabled: true,
    },
  },
  plotOptions: {
    candlestick: {
      colors: {
        upward: '#DF7D46',
        downward: '#3C90EB',
      },
    },
  },
  tooltip: {
    theme: 'dark',
  },
};
