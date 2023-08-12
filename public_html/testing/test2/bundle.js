(function (d3,vl,vega,vegaLite,vegaTooltip) {
    'use strict';
  
    vl = vl && vl.hasOwnProperty('default') ? vl['default'] : vl;
    vega = vega && vega.hasOwnProperty('default') ? vega['default'] : vega;
    vegaLite = vegaLite && vegaLite.hasOwnProperty('default') ? vegaLite['default'] : vegaLite;
  
    // Appearance customization to improve readability.
    // See https://vega.github.io/vega-lite/docs/
    const dark = '#3e3c38';
    const config = {
      axis: {
        domain: false,
        tickcolor: 'lightgrey'
      },
      style: {
        "guide-label": {
          fontSize: 15,
          fill: dark
        },
        "guide-title": {
          fontSize: 19,
          fill: 'grey'
        }
      }
    };
  
    const csvUrl = './airports/newrapgeo.csv';
  
    const getData = async () => {
      const data = await d3.csv(csvUrl);
      
      // Have a look at the attributes available in the console!
      console.log(data[0]);
  
      return data;
    };
  
    const viz = vl
      .markCircle({ size: 40})
      .encode(
        vl.latitude().fieldQ('LATITUDE'),
        vl.longitude().fieldQ('LONGITUDE'),
        vl.color().fieldN('AIRPORT_STATE'),
        vl.tooltip().fieldN('AIRPORT_NAME')
      );
  
    vl.register(vega, vegaLite, {
      view: { renderer: 'svg' },
      init: view => { view.tooltip(new vegaTooltip.Handler().call); }
    });
  
    const run = async () => {
      const marks = viz
        .data(await getData())
        .width(window.innerWidth)
        .height(window.innerHeight)
        .autosize({ type: 'fit', contains: 'padding' })
        .config(config);
      
      document.body.appendChild(await marks.render());
    };
    run();
  
  }(d3,vl,vega,vegaLite,vegaTooltip));
