
I have a csv file with airport information (2) that looks like the following. I want to change it to Rap_Aritst information with their location. I will provide the list of rap artist to build up my csv file but I need you to provide the additional information I need.  from example (1) It looks like it's reading the LATITUDE, LONGITUDE, AIRPORT_STATE, AIRPORT_NAME. My data will at least have LATITUDE, LONGITUDE, RAPPER_STATE, RAPPER_NAME. In my data that I will present it will containt RAPPER_NAME, RAPPER_CITY, RAPPER_STATE, and RAPPER_COUNTRY. I would like that information to also go into the new csv data. I below starting at (3) is a list of rap artists to begin converting.

(1)
    const viz = vl
      .markCircle({ size: 40})
      .encode(
        vl.latitude().fieldQ('LATITUDE'),
        vl.longitude().fieldQ('LONGITUDE'),
        vl.color().fieldN('AIRPORT_STATE'),
        vl.tooltip().fieldN('AIRPORT_NAME')
      );

(2)
AIRPORT_ID,AIRPORT,AIRPORT_NAME,AIRPORT_CITY,AIRPORT_STATE,LAT_DEGREES,LAT_HEMISPHERE,LAT_MINUTES,LAT_SECONDS,LATITUDE,LON_DEGREES,LON_HEMISPHERE,LON_MINUTES,LON_SECONDS,LONGITUDE
10010,1B1,Columbia County,"Hudson, NY",NY,42.0,N,17.0,29.0,42.29138889,73.0,W,42.0,37.0,-73.71027778
10011,1G4,Grand Canyon West,"Peach Springs, AZ",AZ,35.0,N,59.0,10.0,35.98611111,113.0,W,49.0,1.0,-113.81694444



(3)
Yazz The Greatest - Philadelphia, Pennsylvania, United States
YBN Nahmir - Birmingham, Alabama, United States
Yeat - United States (Specific city and state not available)
Yelawolf - Gadsden, Alabama, United States
Yella Beezy - Dallas, Texas, United States
YFN Lucci - Atlanta, Georgia, United States
YG - Compton, California, United States
YGD Tha Top Dogg - United States (Specific city and state not available)
YGTUT - Chattanooga, Tennessee, United States
YK Osiris - Jacksonville, Florida, United States
YN Jay - Detroit, Michigan, United States
YNW BSlime - Gifford, Florida, United States
YNW Melly - Gifford, Florida, United States
Yo Gotti - Memphis, Tennessee, United States
Yo-Yo - Compton, California, United States
Yoon Mi-rae - Fort Hood, Texas, United States
Young B - United States (Specific city and state not available)
Young Bleed - Baton Rouge, Louisiana, United States
Young Buck - Nashville, Tennessee, United States
Young Chris - Philadelphia, Pennsylvania, United States
Young Dolph - Memphis, Tennessee, United States
Young Dre the Truth - Oakland, California, United States
Young Dro - Atlanta, Georgia, United States
Young Greatness - New Orleans, Louisiana, United States
Young M.A - Brooklyn, New York, United States
Young Maylay - Los Angeles, California, United States
Young Noble - Montclair, California, United States
Young Nudy - Atlanta, Georgia, United States
Young Roddy - New Orleans, Louisiana, United States
Young Scooter - Atlanta, Georgia, United States
Young Scrap - United States (Specific city and state not available)
Young Thug - Atlanta, Georgia, United States
Young Zee - Newark, New Jersey, United States
YoungBoy Never Broke Again - Baton Rouge, Louisiana, United States
Younglord - New York City, New York, United States
Your Old Droog - Brooklyn, New York, United States
YTCracker - Colorado Springs, Colorado, United States
Yukmouth - Oakland, California, United States
Yung Bans - Atlanta, Georgia, United States
Yung Bleu - Mobile, Alabama, United States
Yung Gravy - Rochester, Minnesota, United States
Yung Joc - Atlanta, Georgia, United States
Yung Kayo - United States (Specific city and state not available)
Yung L.A. - Atlanta, Georgia, United States
Yung Mal - Atlanta, Georgia, United States
Yung Ro - Houston, Texas, United States
Yung Simmie - Miami, Florida, United States
Yung Wun - Atlanta, Georgia, United States
YungManny - United States (Specific city and state not available)
Z-Ro - Houston, Texas, United States
Zack de la Rocha - Long Beach, California, United States
Zack Fox - United States (Specific city and state not available)
Zane One - United States (Specific city and state not available)
Zaytoven - Atlanta, Georgia, United States
Zebra Katz - United States (Specific city and state not available)
Zelooperz - Detroit, Michigan, United States
ZillaKami - Bay Shore, New York, United States
Zombie Juice - Brooklyn, New York, United States
Élan Luz Rivera - New York City, New York, United States