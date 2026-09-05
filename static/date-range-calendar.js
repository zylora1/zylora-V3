/**
 * Zylora Calendar Date Range Picker
 * Follows CustomRangeSelectDemo specification:
 * - dateRange: { from: Date, to: Date }
 * - Range styling:
 *   - range_start: bg-blue-500/20 rounded-l-full
 *   - range_end: bg-blue-500/20 rounded-r-full
 *   - day_button: range start/end: bg-blue-500 text-white rounded-full
 *   - range_middle: bg-blue-500/20 rounded-none
 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['react', 'react-dom'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('react'), require('react-dom'));
  } else {
    root.ZyloraCalendar = factory(root.React, root.ReactDOM);
  }
})(typeof self !== 'undefined' ? self : this, function (React, ReactDOM) {
  if (!React || !ReactDOM) {
    console.warn('ZyloraCalendar: React or ReactDOM not found.');
    return { mount: function() {} };
  }

  const { useState, useEffect, useRef } = React;
  const e = React.createElement;

  function formatDisplayDate(d) {
    if (!d) return '';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }

  function isSameDay(d1, d2) {
    if (!d1 || !d2) return false;
    return d1.getFullYear() === d2.getFullYear() &&
           d1.getMonth() === d2.getMonth() &&
           d1.getDate() === d2.getDate();
  }

  function isBetween(d, start, end) {
    if (!d || !start || !end) return false;
    const t = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
    const s = new Date(start.getFullYear(), start.getMonth(), start.getDate()).getTime();
    const eTime = new Date(end.getFullYear(), end.getMonth(), end.getDate()).getTime();
    return t > s && t < eTime;
  }

  function CalendarMonth({ year, month, dateRange, onSelectDate }) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayIndex = new Date(year, month, 1).getDay();
    const today = new Date();

    const days = [];
    for (let i = 0; i < firstDayIndex; i++) {
      days.push(e('div', { key: 'blank-' + i, className: 'cal-blank-cell' }));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const current = new Date(year, month, day);
      const isStart = isSameDay(current, dateRange?.from);
      const isEnd = isSameDay(current, dateRange?.to);
      const inMiddle = isBetween(current, dateRange?.from, dateRange?.to);
      const isToday = isSameDay(current, today);

      let cellClass = "cal-day-cell";
      if (isStart && isEnd) {
        cellClass += " range_single";
      } else if (isStart) {
        cellClass += " range_start";
      } else if (isEnd) {
        cellClass += " range_end";
      } else if (inMiddle) {
        cellClass += " range_middle";
      }

      let btnClass = "cal-day-btn";
      if (isStart || isEnd) {
        btnClass += " range-active-endpoint";
      } else if (inMiddle) {
        btnClass += " range-middle-btn";
      }
      if (isToday) {
        btnClass += " today-btn";
      }

      days.push(
        e('div', {
          key: 'day-' + day,
          className: cellClass,
          'data-range-start': isStart ? 'true' : undefined,
          'data-range-end': isEnd ? 'true' : undefined,
          'data-range-middle': inMiddle ? 'true' : undefined,
        },
          e('button', {
            type: 'button',
            className: btnClass,
            'data-range-start': isStart ? 'true' : undefined,
            'data-range-end': isEnd ? 'true' : undefined,
            'data-range-middle': inMiddle ? 'true' : undefined,
            'data-selected': (isStart || isEnd) ? 'true' : undefined,
            onClick: () => onSelectDate(current),
            'aria-label': current.toDateString()
          }, day)
        )
      );
    }

    return e('div', { className: 'cal-month-wrap' },
      e('div', { className: 'cal-weekday-row' },
        ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(w =>
          e('span', { key: w, className: 'cal-weekday-label' }, w)
        )
      ),
      e('div', { className: 'cal-days-grid' }, days)
    );
  }

  function CalendarDateRangePicker({ initialRange, onRangeChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const [dateRange, setDateRange] = useState(initialRange || {
      from: new Date(2026, 5, 4),
      to: new Date(2026, 5, 17)
    });
    const [currentMonthDate, setCurrentMonthDate] = useState(dateRange?.from || new Date(2026, 5, 1));
    const containerRef = useRef(null);

    const year = currentMonthDate.getFullYear();
    const month = currentMonthDate.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(() => {
      function handleClickOutside(event) {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const handleSelectDate = (date) => {
      if (!dateRange.from || (dateRange.from && dateRange.to)) {
        const newRange = { from: date, to: undefined };
        setDateRange(newRange);
      } else if (dateRange.from && !dateRange.to) {
        let from = dateRange.from;
        let to = date;
        if (to < from) {
          to = from;
          from = date;
        }
        const newRange = { from, to };
        setDateRange(newRange);
        if (onRangeChange) onRangeChange(newRange);
      }
    };

    const handlePreset = (days) => {
      const now = new Date();
      const from = new Date(now.getTime() - (days - 1) * 86400000);
      const newRange = { from, to: now };
      setDateRange(newRange);
      setCurrentMonthDate(from);
      if (onRangeChange) onRangeChange(newRange);
      setIsOpen(false);
    };

    const prevMonth = () => {
      setCurrentMonthDate(new Date(year, month - 1, 1));
    };

    const nextMonth = () => {
      setCurrentMonthDate(new Date(year, month + 1, 1));
    };

    const label = (dateRange.from && dateRange.to)
      ? `${formatDisplayDate(dateRange.from)} – ${formatDisplayDate(dateRange.to)}`
      : dateRange.from
      ? `${formatDisplayDate(dateRange.from)} – Select end date`
      : 'Select date range';

    return e('div', { className: 'calendar-range-container', ref: containerRef },
      e('button', {
        type: 'button',
        className: 'calendar-range-trigger ' + (isOpen ? 'active' : ''),
        onClick: () => setIsOpen(!isOpen),
        'aria-expanded': isOpen,
        'aria-label': 'Select custom analytics dates'
      },
        e('svg', {
          width: '15', height: '15', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2',
          style: { marginRight: '6px', color: '#0071e3' }
        },
          e('rect', { x: '3', y: '4', width: '18', height: '18', rx: '2', ry: '2' }),
          e('line', { x1: '16', y1: '2', x2: '16', y2: '6' }),
          e('line', { x1: '8', y1: '2', x2: '8', y2: '6' }),
          e('line', { x1: '3', y1: '10', x2: '21', y2: '10' })
        ),
        e('span', { className: 'range-trigger-text' }, label),
        e('svg', {
          width: '12', height: '12', viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: '2.2',
          style: { marginLeft: '8px', opacity: 0.65 }
        },
          e('polyline', { points: '6 9 12 15 18 9' })
        )
      ),

      isOpen && e('div', { className: 'calendar-popover' },
        e('div', { className: 'cal-header-bar' },
          e('button', {
            type: 'button',
            className: 'cal-nav-btn',
            onClick: prevMonth,
            'aria-label': 'Previous month'
          }, '‹'),
          e('div', { className: 'cal-title' }, `${monthNames[month]} ${year}`),
          e('button', {
            type: 'button',
            className: 'cal-nav-btn',
            onClick: nextMonth,
            'aria-label': 'Next month'
          }, '›')
        ),

        e(CalendarMonth, {
          year,
          month,
          dateRange,
          onSelectDate: handleSelectDate
        }),

        e('div', { className: 'cal-footer-presets' },
          e('span', { className: 'cal-preset-label' }, 'Quick:'),
          e('button', { type: 'button', className: 'cal-preset-btn', onClick: () => handlePreset(7) }, '7D'),
          e('button', { type: 'button', className: 'cal-preset-btn', onClick: () => handlePreset(14) }, '14D'),
          e('button', { type: 'button', className: 'cal-preset-btn', onClick: () => handlePreset(30) }, '30D'),
          e('button', { type: 'button', className: 'cal-preset-btn', onClick: () => handlePreset(90) }, '90D'),
          e('button', {
            type: 'button',
            className: 'cal-apply-btn',
            onClick: () => {
              if (onRangeChange && dateRange.from) onRangeChange(dateRange);
              setIsOpen(false);
            }
          }, 'Apply')
        )
      )
    );
  }

  return {
    CalendarDateRangePicker,
    mount: function (container, options) {
      if (!container) return;
      ReactDOM.render(
        e(CalendarDateRangePicker, {
          initialRange: options?.initialRange,
          onRangeChange: options?.onRangeChange
        }),
        container
      );
    }
  };
});
