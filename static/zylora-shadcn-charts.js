/**
 * Zylora Shadcn UI + Recharts Custom Chart Components
 * 
 * Heavily customized for Zylora's visual design language:
 * - Zylora dark system palette with neutral series and restrained semantic colors
 * - Shadcn UI Chart container, tooltips, gradients, and typography
 * - Responsive containers with adaptive sizing
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'react-dom', 'recharts'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'), require('react-dom'), require('recharts'));
  } else {
    root.ZyloraCharts = factory(root.React, root.ReactDOM, root.Recharts);
  }
})(typeof self !== 'undefined' ? self : this, function (React, ReactDOM, Recharts) {
  if (!React || !ReactDOM || !Recharts) {
    console.warn('ZyloraCharts: React, ReactDOM or Recharts not found, deferring initialization.');
    return {
      init: function() {},
      renderLeadCaptureChart: function() {},
      renderPerformanceChart: function() {},
      renderGrowthTrendChart: function() {},
      renderLeadSourcesDonut: function() {}
    };
  }

  const e = React.createElement;

  // Zylora Brand Chart Palette - Dark Theme
  const THEME = {
    primary: '#ffffff',
    primarySoft: 'rgba(255, 255, 255, 0.14)',
    primaryGradientStart: 'rgba(255, 255, 255, 0.28)',
    primaryGradientEnd: 'rgba(99, 102, 241, 0.00)',
    cyan: '#b5b5b5',
    cyanSoft: 'rgba(181, 181, 181, 0.12)',
    green: '#8bd9aa',
    greenSoft: 'rgba(139, 217, 170, 0.12)',
    amber: '#d6aa63',
    amberSoft: 'rgba(214, 170, 99, 0.12)',
    danger: '#e77b7b',
    border: '#2a2a2a',
    gridLine: '#1c1c1c',
    axisText: '#858585',
    heading: '#ffffff',
    text: '#d0d0d0',
    cardBg: '#0a0a0a',
    tooltipBg: '#161616',
    font: "'Public Sans', Inter, system-ui, -apple-system, sans-serif"
  };

  /**
   * Shadcn UI ChartTooltipContent component
   * Mimics the official shadcn/ui <ChartTooltipContent /> popover in Dark Theme
   */
  function ShadcnTooltipContent(props) {
    const { active, payload, label, indicator = 'dot', formatter } = props;
    if (!active || !payload || !payload.length) return null;

    return e('div', {
      className: 'shadcn-chart-tooltip',
      style: {
        background: THEME.tooltipBg,
        border: '1px solid ' + THEME.border,
        borderRadius: '8px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.75)',
        padding: '10px 14px',
        minWidth: '130px',
        fontFamily: THEME.font,
        fontSize: '12px',
        color: '#ffffff',
        pointerEvents: 'none'
      }
    },
      label ? e('div', {
        className: 'shadcn-tooltip-label',
        style: {
          fontWeight: 600,
          marginBottom: '6px',
          color: '#ffffff',
          borderBottom: '1px solid ' + THEME.border,
          paddingBottom: '4px'
        }
      }, label) : null,
      payload.map(function (item, idx) {
        const color = item.color || item.fill || THEME.primary;
        const name = item.name || 'Value';
        const val = formatter ? formatter(item.value, name, item) : item.value;
        return e('div', {
          key: 'row-' + idx,
          className: 'shadcn-tooltip-row',
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginTop: '3px'
          }
        },
          indicator === 'dot' ? e('span', {
            className: 'shadcn-tooltip-dot',
            style: {
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: color,
              display: 'inline-block',
              flexShrink: 0
            }
          }) : e('span', {
            style: {
              width: '3px',
              height: '12px',
              borderRadius: '2px',
              backgroundColor: color,
              display: 'inline-block',
              flexShrink: 0
            }
          }),
          e('span', { style: { color: '#697a8d', fontSize: '11px' } }, name),
          e('span', {
            className: 'shadcn-tooltip-val',
            style: {
              fontWeight: 700,
              color: THEME.heading,
              marginLeft: 'auto'
            }
          }, String(val))
        );
      })
    );
  }

  /**
   * Lead Capture Weekly Enquiries (Bar Chart with Shadcn styling)
   */
  function LeadCaptureChart(props) {
    const data = (props.data && props.data.length) ? props.data : [
      { day: 'Mon', leads: 0, label: 'Monday' },
      { day: 'Tue', leads: 0, label: 'Tuesday' },
      { day: 'Wed', leads: 0, label: 'Wednesday' },
      { day: 'Thu', leads: 0, label: 'Thursday' },
      { day: 'Fri', leads: 0, label: 'Friday' },
      { day: 'Sat', leads: 0, label: 'Saturday' },
      { day: 'Sun', leads: 0, label: 'Sunday' }
    ];

    return e(Recharts.ResponsiveContainer, { width: '100%', height: 230 },
      e(Recharts.BarChart, {
        data: data,
        margin: { top: 12, right: 10, left: -20, bottom: 0 }
      },
        e('defs', null,
          e('linearGradient', { id: 'zyloraBarGrad', x1: '0', y1: '0', x2: '0', y2: '1' },
            e('stop', { offset: '0%', stopColor: THEME.primary, stopOpacity: 1 }),
            e('stop', { offset: '100%', stopColor: '#b5b5b5', stopOpacity: 0.7 })
          )
        ),
        e(Recharts.CartesianGrid, {
          strokeDasharray: '3 3',
          vertical: false,
          stroke: THEME.gridLine
        }),
        e(Recharts.XAxis, {
          dataKey: 'day',
          axisLine: false,
          tickLine: false,
          tick: { fill: THEME.axisText, fontSize: 11, fontFamily: THEME.font }
        }),
        e(Recharts.YAxis, {
          axisLine: false,
          tickLine: false,
          tick: { fill: THEME.axisText, fontSize: 11, fontFamily: THEME.font },
          allowDecimals: false
        }),
        e(Recharts.Tooltip, {
          content: e(ShadcnTooltipContent, { indicator: 'dot' }),
          cursor: { fill: 'rgba(99, 102, 241, 0.08)', radius: 6 }
        }),
        e(Recharts.Bar, {
          dataKey: 'leads',
          name: 'Enquiries',
          fill: 'url(#zyloraBarGrad)',
          radius: [6, 6, 2, 2],
          maxBarSize: 38
        })
      )
    );
  }

  /**
   * Website Performance & Engagement (Area Spline Chart with Shadcn styling)
   */
  function PerformanceChart(props) {
    const data = (props.data && props.data.length) ? props.data : [
      { time: '0h', visitors: 0, views: 0 },
      { time: '4h', visitors: 0, views: 0 },
      { time: '8h', visitors: 0, views: 0 },
      { time: '12h', visitors: 0, views: 0 },
      { time: '16h', visitors: 0, views: 0 },
      { time: '20h', visitors: 0, views: 0 },
      { time: '24h', visitors: 0, views: 0 }
    ];

    return e(Recharts.ResponsiveContainer, { width: '100%', height: 210 },
      e(Recharts.AreaChart, {
        data: data,
        margin: { top: 10, right: 10, left: -25, bottom: 0 }
      },
        e('defs', null,
          e('linearGradient', { id: 'zyloraPerfGrad', x1: '0', y1: '0', x2: '0', y2: '1' },
            e('stop', { offset: '5%', stopColor: THEME.primary, stopOpacity: 0.35 }),
            e('stop', { offset: '95%', stopColor: THEME.primary, stopOpacity: 0.0 })
          )
        ),
        e(Recharts.CartesianGrid, {
          strokeDasharray: '3 3',
          vertical: false,
          stroke: THEME.gridLine
        }),
        e(Recharts.XAxis, {
          dataKey: 'time',
          axisLine: false,
          tickLine: false,
          tick: { fill: THEME.axisText, fontSize: 10, fontFamily: THEME.font }
        }),
        e(Recharts.YAxis, {
          axisLine: false,
          tickLine: false,
          tick: { fill: THEME.axisText, fontSize: 10, fontFamily: THEME.font }
        }),
        e(Recharts.Tooltip, {
          content: e(ShadcnTooltipContent, { indicator: 'dot' })
        }),
        e(Recharts.Area, {
          type: 'monotone',
          dataKey: 'visitors',
          name: 'Visitors',
          stroke: THEME.primary,
          strokeWidth: 2.5,
          fill: 'url(#zyloraPerfGrad)',
          activeDot: { r: 5, stroke: '#121215', strokeWidth: 2, fill: THEME.primary }
        })
      )
    );
  }

  /**
   * Growth Center Trend Chart (Dual Area with Shadcn styling)
   */
  function GrowthTrendChart(props) {
    const data = (props.data && props.data.length) ? props.data : [
      { date: 'Day 1', forms: 0, assistant: 0 },
      { date: 'Day 2', forms: 0, assistant: 0 },
      { date: 'Day 3', forms: 0, assistant: 0 },
      { date: 'Day 4', forms: 0, assistant: 0 },
      { date: 'Day 5', forms: 0, assistant: 0 },
      { date: 'Day 6', forms: 0, assistant: 0 },
      { date: 'Day 7', forms: 0, assistant: 0 }
    ];

    return e(Recharts.ResponsiveContainer, { width: '100%', height: 240 },
      e(Recharts.AreaChart, {
        data: data,
        margin: { top: 10, right: 10, left: -20, bottom: 0 }
      },
        e('defs', null,
          e('linearGradient', { id: 'growthFormGrad', x1: '0', y1: '0', x2: '0', y2: '1' },
            e('stop', { offset: '5%', stopColor: THEME.primary, stopOpacity: 0.3 }),
            e('stop', { offset: '95%', stopColor: THEME.primary, stopOpacity: 0.0 })
          ),
          e('linearGradient', { id: 'growthAssistGrad', x1: '0', y1: '0', x2: '0', y2: '1' },
            e('stop', { offset: '5%', stopColor: THEME.cyan, stopOpacity: 0.3 }),
            e('stop', { offset: '95%', stopColor: THEME.cyan, stopOpacity: 0.0 })
          )
        ),
        e(Recharts.CartesianGrid, {
          strokeDasharray: '3 3',
          vertical: false,
          stroke: THEME.gridLine
        }),
        e(Recharts.XAxis, {
          dataKey: 'date',
          axisLine: false,
          tickLine: false,
          tick: { fill: THEME.axisText, fontSize: 10, fontFamily: THEME.font }
        }),
        e(Recharts.YAxis, {
          axisLine: false,
          tickLine: false,
          tick: { fill: THEME.axisText, fontSize: 10, fontFamily: THEME.font }
        }),
        e(Recharts.Tooltip, {
          content: e(ShadcnTooltipContent, { indicator: 'dot' })
        }),
        e(Recharts.Area, {
          type: 'monotone',
          dataKey: 'assistant',
          name: 'AI Assistant',
          stroke: THEME.cyan,
          strokeWidth: 2,
          fill: 'url(#growthAssistGrad)',
          activeDot: { r: 5, stroke: '#fff', strokeWidth: 2, fill: THEME.cyan }
        }),
        e(Recharts.Area, {
          type: 'monotone',
          dataKey: 'forms',
          name: 'Website Forms',
          stroke: THEME.primary,
          strokeWidth: 2,
          fill: 'url(#growthFormGrad)',
          activeDot: { r: 5, stroke: '#fff', strokeWidth: 2, fill: THEME.primary }
        })
      )
    );
  }

  /**
   * Lead Sources Donut Chart
   */
  function LeadSourcesDonut(props) {
    const rawData = props.data || [];
    const total = rawData.reduce(function(acc, cur) { return acc + (Number(cur.value) || 0); }, 0);
    const data = total > 0 ? rawData : [{ name: 'No lead sources yet', value: 1, color: '#262626' }];

    return e('div', { style: { position: 'relative', width: '100%', height: 210, display: 'flex', alignItems: 'center', justifyContent: 'center' } },
      e(Recharts.ResponsiveContainer, { width: '100%', height: '100%' },
        e(Recharts.PieChart, null,
          total > 0 ? e(Recharts.Tooltip, {
            content: e(ShadcnTooltipContent, {
              indicator: 'dot',
              formatter: function(val) {
                return val + ' (' + Math.round((val / total) * 100) + '%)';
              }
            })
          }) : null,
          e(Recharts.Pie, {
            data: data,
            cx: '50%',
            cy: '50%',
            innerRadius: 55,
            outerRadius: 80,
            paddingAngle: total > 0 ? 4 : 0,
            dataKey: 'value'
          },
            data.map(function(item, idx) {
              return e(Recharts.Cell, { key: 'cell-' + idx, fill: item.color });
            })
          )
        )
      ),
      e('div', {
        style: {
          position: 'absolute',
          textAlign: 'center',
          pointerEvents: 'none'
        }
      },
        e('b', { style: { display: 'block', fontSize: '24px', fontWeight: 700, color: '#ffffff', fontFamily: THEME.font, lineHeight: 1 } }, String(total)),
        e('small', { style: { display: 'block', fontSize: '10px', color: '#a1a1aa', marginTop: '2px' } }, 'Total')
      )
    );
  }

  // Helper renderers that attach to DOM IDs
  function renderLeadCaptureChart(containerId, data) {
    const node = document.getElementById(containerId);
    if (!node) return;
    try {
      if (ReactDOM.createRoot) {
        if (!node._reactRoot) node._reactRoot = ReactDOM.createRoot(node);
        node._reactRoot.render(e(LeadCaptureChart, { data: data }));
      } else {
        ReactDOM.render(e(LeadCaptureChart, { data: data }), node);
      }
    } catch (err) {
      console.warn('LeadCaptureChart render warning:', err);
    }
  }

  function renderPerformanceChart(containerId, data) {
    const node = document.getElementById(containerId);
    if (!node) return;
    try {
      if (ReactDOM.createRoot) {
        if (!node._reactRoot) node._reactRoot = ReactDOM.createRoot(node);
        node._reactRoot.render(e(PerformanceChart, { data: data }));
      } else {
        ReactDOM.render(e(PerformanceChart, { data: data }), node);
      }
    } catch (err) {
      console.warn('PerformanceChart render warning:', err);
    }
  }

  function renderGrowthTrendChart(containerId, data) {
    const node = document.getElementById(containerId);
    if (!node) return;
    try {
      if (ReactDOM.createRoot) {
        if (!node._reactRoot) node._reactRoot = ReactDOM.createRoot(node);
        node._reactRoot.render(e(GrowthTrendChart, { data: data }));
      } else {
        ReactDOM.render(e(GrowthTrendChart, { data: data }), node);
      }
    } catch (err) {
      console.warn('GrowthTrendChart render warning:', err);
    }
  }

  function renderLeadSourcesDonut(containerId, data) {
    const node = document.getElementById(containerId);
    if (!node) return;
    try {
      if (ReactDOM.createRoot) {
        if (!node._reactRoot) node._reactRoot = ReactDOM.createRoot(node);
        node._reactRoot.render(e(LeadSourcesDonut, { data: data }));
      } else {
        ReactDOM.render(e(LeadSourcesDonut, { data: data }), node);
      }
    } catch (err) {
      console.warn('LeadSourcesDonut render warning:', err);
    }
  }

  function init() {
    // Mount overview charts if containers exist
    if (document.getElementById('shadcnLeadCaptureRoot')) {
      renderLeadCaptureChart('shadcnLeadCaptureRoot');
    }
    if (document.getElementById('shadcnWebsitePerfRoot')) {
      renderPerformanceChart('shadcnWebsitePerfRoot');
    }
  }

  // Auto-init on DOMContentLoaded
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      setTimeout(init, 0);
    }
  }

  return {
    THEME: THEME,
    ShadcnTooltipContent: ShadcnTooltipContent,
    LeadCaptureChart: LeadCaptureChart,
    PerformanceChart: PerformanceChart,
    GrowthTrendChart: GrowthTrendChart,
    LeadSourcesDonut: LeadSourcesDonut,
    renderLeadCaptureChart: renderLeadCaptureChart,
    renderPerformanceChart: renderPerformanceChart,
    renderGrowthTrendChart: renderGrowthTrendChart,
    renderLeadSourcesDonut: renderLeadSourcesDonut,
    init: init
  };
});
