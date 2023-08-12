import {
    scaleLinear,
    extent,
    axisLeft,
    axisBottom,
    transition,
    select,
    scaleTime,
    brushX
  } from 'd3';
  
  
  export const interactiveBar = () => {
    let width;
    let height;
    let state_data;
    let data;
    let xValue;
    let yValue;
    let margin;
    let bar_width;
    let bar_color;
    let bar_opacity;
    let selected_state;
    let label_size;
      let map_group;
    let map;
    
    const my = (selection) => {
      function filter_state(list) {
        return list.location == selected_state;
      }
  
      // Create a time scale for the x-axis
      const mindate = new Date('2021-04-01');
      const maxdate = new Date('2021-09-04');
      const x = scaleTime()
        .domain([mindate, maxdate])
        .range([margin.left, width - margin.right]);
  
      state_data = data.filter(filter_state);
  
      // create y scale, y is used to determine the bar height y1 is just used
      // to plot the axis in the right direction
      const y = scaleLinear()
        .domain([
          extent(state_data, yValue)[1] * 1.1,
          extent(state_data, yValue)[0],
        ])
        .range([height - margin.bottom, margin.top]);
      const y1 = scaleLinear()
        .domain([
          extent(state_data, yValue)[0],
          extent(state_data, yValue)[1] * 1.1,
        ])
        .range([height - margin.bottom, margin.top]);
  
      // create a set of marks to visualize
      const correctDate = (d) => {
        let date = new Date(d.valueOf());
        date.setDate(date.getDate() + 32);
        return date;
      };
      const marks = state_data.map((d) => {
        return {
          x: x(xValue(d)),
          y: y(yValue(d)),
          date: correctDate(d.date),
          doses: d.daily_vaccinations,
        };
      });
  
      // hover animation functions
      function handle_mouse_over(e, d) {
        selection
          .selectAll('rect')
          .transition()
          .duration('100')
          .attr('opacity', bar_opacity / 2);
        select(this)
          .transition()
          .duration('100')
          .attr('opacity', bar_opacity);
        select('#tooltip')
          .style('visibility', 'visible')
          .text(
            'Date: ' +
              d.date.getMonth() +
              '/' +
              d.date.getDate() +
              ', Doses: ' +
              d.doses
          );
      }
  
      function handle_mouse_move(e, d) {
        // console.log(event.PageX, event.PageY);
        select('#tooltip')
          .style('top', event.pageY - 25 + 'px')
          .style('left', event.pageX + 'px');
      }
  
      function handle_mouse_out(e, d) {
        selection
          .selectAll('rect')
          .transition()
          .duration('100')
          .attr('opacity', bar_opacity);
        select('#tooltip').style('visibility', 'hidden');
      }
  
      // animation functions
      const t = transition().duration(500);
  
      const positionBars = (bars) => {
        bars
          .attr('x', (d) => {
            return d.x + bar_width / 2;
          })
          .attr('y', (d) => {
            // place the bottom of each bar at the x-axis
            return height - margin.bottom - d.y;
          })
          .attr('fill', bar_color)
          .attr('opacity', bar_opacity)
          .attr('height', (d) => d.y);
      };
  
      const initializeWidth = (bars) => {
        bars.attr('width', 0);
        bars.attr('height', 0);
        bars.on('mouseover', handle_mouse_over);
        bars.on('mousemove', handle_mouse_move);
        bars.on('mouseout', handle_mouse_out);
      };
      const growWidth = (enter) => {
        enter.transition(t).attr('width', bar_width);
        enter.transition(t).attr('height', (d) => d.y);
      };
      
  
  
      // draw the bars
      const bars = selection
        .selectAll('rect')
        .data(marks)
        .join(
          (enter) =>
            enter
              .append('rect')
              .call(positionBars)
              .call(initializeWidth)
              .call(growWidth),
          (update) =>
            update.call((update) =>
              update
                .transition(t)
                .delay((d, i) => i * 10)
                .call(positionBars)
            ),
          (exit) => exit.remove()
        );
      // redraw y axis
      selection
        .selectAll('.y-axis')
        .data([null])
        .join('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left},0)`)
        .transition(t)
        .call(axisLeft(y1));
  
      // redraw x axis
      selection
        .selectAll('.x-axis')
        .data([null])
        .join('g')
        .attr('class', 'x-axis')
        .attr(
          'transform',
          `translate(0,${height - margin.bottom})`
        )
        .transition(t)
        .call(axisBottom(x));
      
      // brushing
      function brushed(e, d){
        const brush_area = e.selection;
        
        let end_date = new Date('2021-09-04');
        if(brush_area){
          const start_date = x.invert(brush_area[0]);
            end_date = x.invert(brush_area[1]);
        }
        map_group.call(map.selected_date(end_date));
      }
      const brush = brushX()
        .extent([[0,0], [width, height]])
        .on("brush end", brushed);
      selection.call(brush);
      
          // Add axis labels
      const label_group = selection.append('g')
      label_group
        .selectAll('.x-axis-label')
          .data([null])
          .join('text')
        .attr('y', height - 10)
        .attr('x', width / 2 - 10)
        .text('Date, 2021')
        .attr('font-size', label_size)
          .attr('class', 'x-axis-label');
    
      label_group
        .selectAll('.y-axis-label')
          .data([null])
          .join('text')
        .attr('x', 0)
        .attr('y', height/2-20)
        .text('Daily Doses Distributed')
        .attr('transform', `rotate(270, 70, ${height/2})`)
        .attr('font-size', label_size)
          .attr('class', 'y-axis-label');
    };
  
    my.width = function (_) {
      return arguments.length ? ((width = +_), my) : width;
    };
  
    my.height = function (_) {
      return arguments.length ? ((height = +_), my) : height;
    };
  
    my.data = function (_) {
      return arguments.length ? ((data = _), my) : data;
    };
  
    my.xValue = function (_) {
      return arguments.length ? ((xValue = _), my) : xValue;
    };
  
    my.yValue = function (_) {
      return arguments.length ? ((yValue = _), my) : yValue;
    };
  
    my.margin = function (_) {
      return arguments.length ? ((margin = _), my) : margin;
    };
  
    my.bar_width = function (_) {
      return arguments.length
        ? ((bar_width = +_), my)
        : bar_width;
    };
  
    my.bar_opacity = function (_) {
      return arguments.length
        ? ((bar_opacity = +_), my)
        : bar_opacity;
    };
  
    my.bar_color = function (_) {
      return arguments.length
        ? ((bar_color = _), my)
        : bar_color;
    };
  
    my.selected_state = function (_) {
      return arguments.length
        ? ((selected_state = _), my)
        : selected_state;
    };
    
    my.label_size = function (_) {
      return arguments.length
        ? ((label_size = _), my)
        : label_size;
    };
    
    my.map_group = function (_) {
      return arguments.length ? ((map_group = _), my) : map_group;
    };
    
    my.map = function (_) {
      return arguments.length ? ((map = _), my) : map;
    };
  
    return my;
  };
  