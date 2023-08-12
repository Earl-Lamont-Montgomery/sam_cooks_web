import {
    max,
    geoAlbersUsa,
    geoPath,
    topjson,
    transition,
    forceSimulation,
    forceCollide,
    forceX,
    forceY
  } from 'd3';
  
  export const mapElement = () => {
    let width;
    let height;
    let data;
    let map_data;
    let state_centroids;
    let selected_date;
    
    const my = (selection) => {
        const projection = geoAlbersUsa();
      const path = geoPath(projection);
  
      const states = selection
        .selectAll('path')
        .data(topojson.feature(map_data, map_data.objects.states).features)
        .join(
          (enter) =>
            enter
              .append('path')
              .attr('d', path)
              .attr('id', (d) => d.properties.name)
              .attr('id', (d) => d.location)
              .attr('stroke', 'black')
              .attr('fill', 'lightgray'),
          (update) =>
            update.call((update) =>update),
          (exit) => exit.remove()
        );
       
    
      // const selected_date = new Date('2021-09-04');
      function filter_date(list) {
        return list.date.getDate() == selected_date.getDate()&& 
          list.date.getMonth() == selected_date.getMonth()&& 
          list.date.getFullYear() == selected_date.getFullYear();
      }
      const date_data = data.filter(filter_date);  
      
      let my_state = "California"
      function get_state_centroid(centroids) {
        return centroids.name == my_state;
      }
  
      let marks = date_data.map((d) => {
        my_state = d.location;
        const center = state_centroids.filter(get_state_centroid)[0];
        if(center)
          return { 
            location : d.location,
            lat : center.lat,
            lon : center.lon,
            full : d.people_fully_vaccinated_per_hundred,
            part : d.people_vaccinated_per_hundred,
            doses : d.share_doses_used
          }
      });
  
      marks = marks.filter(function( element ) {
       return element !== undefined;
      });
  
      const highest_vacc = max(marks, function (d) {
          return d.full;
      });
    
      const circleRadius = d3
        .scaleLinear()
        .domain([0, highest_vacc])
        .range([0, 25]); // 0 to maximum radius in pixels
      
       function radius (d) { 
          return circleRadius(d.full);
        }
  
      var simulation = forceSimulation(marks)
        .force("x", forceX(function(d) {
          return projection([+d.lon,+d.lat])[0];
        }))
        .force("y", forceY(function(d) {
          return projection([+d.lon,+d.lat])[1];
        }))
        .force("collide", forceCollide(d => radius(d) + 1))
        .stop();
      for (var i = 0; i < 120; ++i) simulation.tick();
      
      console.log(marks);
      
      const t = transition().duration(500);
      const growCircles = (enter) => {
        enter.transition(t).attr('r', (d) => radius(d));
        // enter.attr('r', (d) => radius(d));
      };
      
      const circles  = selection
        .selectAll('circle')
        .data(marks)
          .join(
          (enter) =>
            enter
              .append('circle')
                  .attr('cx', (d) => d.x)
                  .attr('cy', (d) => d.y)
                   .attr('id', (d) => d.location)
                  .attr('fill', 'blue')
                  .attr('opacity', 0.5)
                  .call(growCircles),
          (update) =>
            update.call((update) =>
              update
  
                .call(growCircles)
            ),
          (exit) => exit.remove()
        );
    };
  
    my.data = function (_) {
      return arguments.length ? ((data = _), my) : data;
    };
    
    my.map_data = function (_) {
      return arguments.length ? ((map_data = _), my) : map_data;
    };
    
    my.state_centroids = function (_) {
      return arguments.length ? ((state_centroids = _), my) : state_centroids;
    };
    
    my.selected_date = function (_) {
      return arguments.length ? ((selected_date = _), my) : selected_date;
    };
    
    return my;
  };
  