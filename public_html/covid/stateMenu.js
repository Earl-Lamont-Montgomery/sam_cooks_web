import {
    max,
    geoAlbersUsa,
    geoPath,
    select
  } from 'd3';
  import { menu } from './menu';
  
  export const stateMenu = () => {
    let width;
    let height;
    let data;
    let plot;
    
    const my = (selection) => {
      const menuContainer = select('body')
          .append('div')
          .attr('class', 'menu-container');
      const state_menu = menuContainer.append('div');
      const yMenu = menuContainer.append('div');
      
      function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
      }
      const states = data
        .map((d) => d.location)
        .filter(onlyUnique);
      const options = states.map((d) => {
        return { value: d, text: d };
      });
      
      state_menu.call(
        menu()
          .id('state-menu')
          .labelText('State:')
          .options(options)
          .on('change', (state) => {
            selection.call(
              plot.selected_state(state)
            );
          })
      );
    };
  
    my.data = function (_) {
      return arguments.length ? ((data = _), my) : data;
    };
      
    my.plot = function (_) {
      return arguments.length ? ((plot = _), my) : plot;
    };
    
    return my;
  };
  