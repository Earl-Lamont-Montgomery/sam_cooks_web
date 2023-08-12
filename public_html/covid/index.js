const { 
    csv,
    select,
    json,
    brushX
  } = d3;
  import { interactiveBar } from './interactiveBar';
  import { stateMenu } from './stateMenu';
  import { mapElement } from './mapElement';
  import React, { useState, useRef } from 'react';
  
  // data source url
  const csvUrl = [
    'https://gist.githubusercontent.com/',
    'PeterVanNostrand/', // User
    'd449b0a3e5914278dfa79ba60e48df5d/', // Id of the Gist
    'raw/', // commit
    'vaccine_data.csv', // File name
  ].join('');
  
  // parsing the dataset
  const parseRow = (d) => {
    d.date = new Date(d.date);
    d.total_vaccinations = +d.total_vaccinations;
    d.total_distributed = +d.total_distributed;
    d.people_vaccinated = +d.people_vaccinated;
    d.people_fully_vaccinated_per_hundred = +d.people_fully_vaccinated_per_hundred;
    d.total_vaccinations_per_hundred = +d.total_vaccinations_per_hundred;
    d.people_fully_vaccinated = +d.people_fully_vaccinated;
    d.people_vaccinated_per_hundred = +d.people_vaccinated_per_hundred;
    d.distributed_per_hundred = +d.distributed_per_hundred;
    d.daily_vaccinations_raw = +d.daily_vaccinations_raw;
    d.daily_vaccinations = +d.daily_vaccinations;
    d.daily_vaccinations_per_million = +d.daily_vaccinations_per_million;
    d.share_doses_used = +d.share_doses_used;
    return d;
  };
  
  // Select the SVG element
  const width = window.innerWidth;
  const height = window.innerHeight;
  const svg = select('body')
    .append('svg')
    .attr('width', width)
    .attr('height', height);
  
  var tooltip = select('body')
    .append('div')
      .append('div')
      .attr('id', 'tooltip')
          .attr('class', 'tooltip-container')
      .style('position','absolute')
      .style('visibility', 'hidden');
  
  const main = async () => {
    // const brushRef = useRef();
    
    // load data
    const data = await csv(csvUrl, parseRow);
    const us_states = await json('https://unpkg.com/us-atlas@3.0.0/states-10m.json');
    let stateCentroids = await json('state_centroids.json');
  
    // create map
    const map_group = svg.append('g');
    const map_height = height - bar_plot_height;
     const map_plot = mapElement()
        .data(data)
        .map_data(us_states)
        .state_centroids(stateCentroids)
         .selected_date(new Date('2021-09-04'));
    map_group.call(map_plot);
    map_group.attr('transform', 'scale(0.6)');
    
    // create bar plot
    const bar_group = svg.append('g');
    const bar_plot_height = 200;
    const bar_plot = interactiveBar()
      .width(width)
      .height(bar_plot_height)
      .data(data)
      .xValue((d) => d.date)
      .yValue((d) => d.daily_vaccinations)
      .margin({
        top: 20,
        right: 20,
        bottom: 40,
        left: 100,
      })
      .bar_width(3)
      .bar_color('#5DABF4')
        .bar_opacity(1.0)
      .selected_state("Alabama")
        .label_size('1em')
        .map_group(map_group)
        .map(map_plot);
    bar_group.attr('transform', `translate(0,${height-bar_plot_height})`);
    bar_group.call(bar_plot);
    
  
    
    // create menu
    const my_menu = stateMenu()
        .data(data)
        .plot(bar_plot);
      bar_group.call(my_menu);
  };
  
  main();
  