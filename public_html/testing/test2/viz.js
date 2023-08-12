import vl from 'vega-lite-api';
export const viz = vl
  .markCircle({ size: 40})
  .encode(
    vl.latitude().fieldQ('LATITUDE'),
    vl.longitude().fieldQ('LONGITUDE'),
    vl.color().fieldN('AIRPORT_STATE'),
    vl.tooltip().fieldN('AIRPORT_NAME')
  );