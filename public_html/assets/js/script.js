var data; 
var song_data;
var bio_data;
var catties;
var artist_regions;
ChartStatus = Object;








// var eight_dict = {
//   1: {
//     "artist": "",
//     "songs": 0,
//     "keywords": 0,
//     "keysandsongs": 0
//   },
//   2: {
//     "artist": "",
//     "songs": 0,
//     "keywords": 0,
//     "keysandsongs": 0
//   },
//   3: {
//     "artist": "",
//     "songs": 0,
//     "keywords": 0,
//     "keysandsongs": 0
//   },
//   4: {
//     "artist": "",
//     "songs": 0,
//     "keywords": 0,
//     "keysandsongs": 0
//   },
//   5: {
//     "artist": "",
//     "songs": 0,
//     "keywords": 0,
//     "keysandsongs": 0
//   },
//   6: {
//     "artist": "21 Savage",
//     "songs": 8,
//     "keywords": 0,
//     "keysandsongs": 0
//   },
//   7: {
//     "artist": "",
//     "songs": 0,
//     "keywords": 0,
//     "keysandsongs": 0
//   },
//   8: {
//     "artist": "",
//     "songs": 0,
//     "keywords": 0,
//     "keysandsongs": 0
//   }
// };


var eight_dict = {
  1: {
    "artist": "",
    "songs": 0,
    "keywords": 0
  },
  2: {
    "artist": "",
    "songs": 0,
    "keywords": 0
  },
  3: {
    "artist": "",
    "songs": 0,
    "keywords": 0
  },
  4: {
    "artist": "",
    "songs": 0,
    "keywords": 0
  },
  5: {
    "artist": "",
    "songs": 0,
    "keywords": 0
  },
  6: {
    "artist": "",
    "songs": 0,
    "keywords": 0
  },
  7: {
    "artist": "",
    "songs": 0,
    "keywords": 0
  },
  8: {
    "artist": "",
    "songs": 0,
    "keywords": 0
  }
};



hier_chart = {
  "hiers": [
      {"name":"rap.east..twooog.G-Unit","size":1986,"imports":["rap.east.ninetiesmale.Notorious BIG","rap.west.ninetiesm.Snoop Dogg","rap.east.eightiesm.LL Cool J","rap.west.eightiesm.Ice Cube"]},
      {"name":"rap.east.eightiesf.MC Lyte","size":20724,"imports":["rap.east.eightiesg.UTFO"]},
      {"name":"rap.east.eightiesf.Roxanne Shante","size":1732,"imports":[]},
      {"name":"rap.east.eightiesg.Black Sheep","size":4000,"imports":[]},
      {"name":"rap.east.eightiesg.Branubians","size":1382,"imports":[]},
      {"name":"rap.east.eightiesg.De La Soul","size":10993,"imports":["rap.east.ninetiesmale.Notorious BIG"]},
      {"name":"rap.east.eightiesg.Double X Posse","size":2042,"imports":["rap.east.eightiesg.Branubians"]},
      {"name":"rap.east.eightiesg.EPMD","size":649,"imports":[]},
      {"name":"rap.east.eightiesg.Fat Boys","size":603,"imports":[]},
      {"name":"rap.east.eightiesg.Fearless Four","size":591,"imports":[]},
      {"name":"rap.east.eightiesg.Grand Master Flash and the Furious 5","size":619,"imports":[]},
      {"name":"rap.east.eightiesg.Heavy D & the Boyz","size":461,"imports":[]},
      {"name":"rap.east.eightiesg.Jungle Brothers","size":460,"imports":[]},
      {"name":"rap.east.eightiesg.Nice & Smooth","size":6367,"imports":[]},
      {"name":"rap.east.eightiesg.Public Enemy","size":4896,"imports":[]},
      {"name":"rap.east.eightiesg.Run DMC","size":2042,"imports":[]},
      {"name":"rap.east.eightiesg.Salt-N-Pepa","size":2138,"imports":["rap.east.eightiesm.Captain Sky"]},
      {"name":"rap.east.eightiesg.Stetsasonic","size":2022,"imports":[]},
      {"name":"rap.east.eightiesg.The Roots","size":2649,"imports":["rap.east.eightiesm.Special Ed"]},
      {"name":"rap.east.eightiesg.Ultramagnetic MCs","size":322,"imports":[]},
      {"name":"rap.east.eightiesg.UTFO","size":166,"imports":[]},
      {"name":"rap.east.eightiesm.Audio Two","size":4141,"imports":[]},
      {"name":"rap.east.eightiesm.Big Daddy Kane","size":300,"imports":["rap.south.twentenm.Kodak Black"]},
      {"name":"rap.east.eightiesm.Biz Markie","size":1121,"imports":[]},
      {"name":"rap.east.eightiesm.Captain Sky","size":2649,"imports":[]},
      {"name":"rap.east.eightiesm.DJ Jazzy Jeff & The Fresh Prince","size":307,"imports":[]},
      {"name":"rap.east.eightiesm.Doug E Fresh","size":296,"imports":[]},
      {"name":"rap.east.eightiesm.Eric B and Rakim","size":777,"imports":[]},
      {"name":"rap.east.eightiesm.Gang Starr","size":1722,"imports":[]},
      {"name":"rap.east.eightiesm.Just-Ice","size":594,"imports":[]},
      {"name":"rap.east.eightiesm.Kid 'n Play","size":292,"imports":[]},
      {"name":"rap.east.eightiesm.Kool G Rap","size":3252,"imports":[]},
      {"name":"rap.east.eightiesm.Kool Moe Dee","size":287,"imports":[]},
      {"name":"rap.east.eightiesm.KRS-One","size":330,"imports":[]},
      {"name":"rap.east.eightiesm.Kurtis Blow","size":593,"imports":[]},
      {"name":"rap.east.eightiesm.LL Cool J","size":740,"imports":["rap.east.eightiesg.Ultramagnetic MCs"]},
      {"name":"rap.east.eightiesm.Lord Finesse","size":352,"imports":["rap.east.eightiesg.UTFO"]},
      {"name":"rap.east.eightiesm.MC Shan","size":3322,"imports":[]},
      {"name":"rap.east.eightiesm.PMD","size":3770,"imports":["rap.east.ninetiesg.Onyx"]},  
      {"name":"rap.east.eightiesm.Schoolly D","size":742,"imports":[]},
      {"name":"rap.east.eightiesm.Slick Rick","size":291,"imports":[]},
      {"name":"rap.east.eightiesm.Special Ed","size":4665,"imports":["rap.east.eightiesg.Public Enemy","rap.east.eightiesm.Eric B and Rakim"]},
      {"name":"rap.east.eightiesm.Sugar Hill Gang","size":1000,"imports":[]},
      {"name":"rap.east.ninetiesg.Main Source","size":3240,"imports":[]},
      {"name":"rap.east.ninetiesg.Mobb Deep","size":586,"imports":[]},
      {"name":"rap.east.ninetiesg.Naughty By Nature","size":2059,"imports":[]},
      {"name":"rap.east.ninetiesg.The Lox","size":2039,"imports":[]},
      {"name":"rap.east.ninetiesm.Akinyele","size":1124,"imports":[]},
      {"name":"rap.east.ninetiesm.Big Pun","size":4130,"imports":[]},
      {"name":"rap.east.ninetiesm.Busta Rhymes","size":970,"imports":[]},
      {"name":"rap.east.ninetiesm.DMX","size":600,"imports":[]},
      {"name":"rap.east.ninetiesm.MF DOOM","size":772,"imports":[]},
      {"name":"rap.east.ninetiesm.Onyx","size":1316,"imports":[]},
      {"name":"rap.east.ninetiesf.Lauryn Hill","size":1316,"imports":["rap.east.eightiesm.Kurtis Blow"]},
      {"name":"rap.east.ninetiesf.Monie Love","size":20859,"imports":["rap.east.eightiesg.Branubians"]},
      {"name":"rap.east.ninetiesg.Das EFX","size":1676,"imports":["rap.east.eightiesg.Branubians"]},
      {"name":"rap.east.ninetiesg.Fugees","size":2105,"imports":[]},
      {"name":"rap.east.ninetiesg.Lost Boyz","size":626,"imports":["rap.east.eightiesg.Black Sheep"]},
      {"name":"rap.east.ninetiesg.Onyx","size":2435,"imports":[]},  
      {"name":"rap.east.ninetiesg.Wu-Tang Clan","size":611,"imports":[]},
      {"name":"rap.east.ninetiesm.Beanie Siegel","size":20860,"imports":["rap.east.eightiesg.Branubians"]},
      {"name":"rap.east.ninetiesm.Canibus","size":10101,"imports":["rap.east.eightiesm.Biz Markie"]},
      {"name":"rap.east.ninetiesm.Coolio","size":4268,"imports":["rap.east.ninetiesg.Onyx","rap.east.eightiesg.Run DMC"]},
      {"name":"rap.east.ninetiesm.Everlast","size":2016,"imports":["rap.east.eightiesm.Slick Rick"]},
      {"name":"rap.east.ninetiesm.Fat Joe","size":4614,"imports":["rap.east.twooom.50 Cent"]},
      {"name":"rap.east.ninetiesm.Ghostface Killah","size":5222,"imports":[]},
      {"name":"rap.east.ninetiesm.Jay-Z","size":444,"imports":["rap.east.ninetiesmale.Notorious BIG","rap.east.eightiesm.Special Ed","rap.east.eightiesm.Biz Markie","rap.east.eightiesg.Branubians","rap.east.eightiesm.Gang Starr","rap.east.ninetiesm.Nas"]},
      {"name":"rap.east.ninetiesm.Keith Murray","size":5103,"imports":[]},
      {"name":"rap.east.ninetiesm.Jeru the Damaja","size":2436,"imports":["rap.east.ninetiesg.Onyx"]},
      {"name":"rap.east.ninetiesm.Jim Jones","size":1383,"imports":["rap.east.eightiesg.Branubians"]},
      {"name":"rap.east.ninetiesm.Mos Def","size":218,"imports":["rap.east.ninetiesm.Jay-Z","rap.east.eightiesg.Branubians","rap.east.ninetiesmale.Notorious BIG"]},
      {"name":"rap.east.ninetiesm.Nas","size":523,"imports":["rap.east.eightiesm.Slick Rick","rap.east.eightiesm.Kurtis Blow","rap.east.eightiesm.Eric B and Rakim"]},
      {"name":"rap.east.ninetiesm.Old Dirty Bastards","size":3677,"imports":[]},
      {"name":"rap.east.ninetiesm.Papoose","size":1821,"imports":["rap.east.ninetiesg.Onyx"]},
      {"name":"rap.east.ninetiesm.Redman","size":672,"imports":["rap.west.eightiesm.Ice Cube","rap.east.eightiesg.EPMD"]},
      {"name":"rap.east.ninetiesm.Talib Kweli","size":1675,"imports":["rap.north.twentenm.J-Cole","rap.east.ninetiesmale.Notorious BIG","rap.east.eightiesg.Run DMC"]},
      {"name":"rap.east.ninetiesm.Tim Dog","size":390,"imports":["rap.east.eightiesg.Ultramagnetic MCs"]},
      {"name":"rap.east.ninetiesmale.Notorious BIG","size":267,"imports":["rap.east.eightiesm.Slick Rick","rap.east.ninetiesm.Onyx","rap.west.ninetiesm.Tupac Shakur","rap.east.ninetiesg.Wu-Tang Clan","rap.east.eightiesm.Schoolly D"]},
      {"name":"rap.east.ninetiesmale.Will Smith","size":624,"imports":["rap.east.eightiesm.Slick Rick"]},
      {"name":"rap.east.twentenf.Cardi B","size":4665,"imports":["rap.south.twentenm.Kodak Black"]},
      {"name":"rap.east.twenteng.A$AP Mob","size":1756,"imports":["rap.east.ninetiesg.Onyx"]},
      {"name":"rap.east.twentenm.A$AP Rocky","size":8435,"imports":["rap.east.eightiesg.Salt-N-Pepa"]},
      {"name":"rap.east.twentenm.Childish Gambino","size":264,"imports":[]},
      {"name":"rap.east.twentenm.Joyner Lucas","size":625,"imports":[]},
      {"name":"rap.east.twentenm.Lil Uzi Vert","size":1214,"imports":[]},
      {"name":"rap.east.twooof.Nikki Minaj","size":1354,"imports":["rap.east.eightiesm.Slick Rick"]},
      {"name":"rap.east.twooom.50 Cent","size":1353,"imports":["rap.east.eightiesm.Eric B and Rakim"]},
      {"name":"rap.east.twooom.El-P","size":386,"imports":[]},
      {"name":"rap.east.twooom.Fabolous","size":599,"imports":[]},
      {"name":"rap.north.eightiesg.3rd Bass","size":1876,"imports":[]},
      {"name":"rap.north.eightiesg.Beastie Boys","size":791,"imports":[]},
      {"name":"rap.north.ninetiesg.Bone Thugs-N-Harmony","size":1594,"imports":[]},
      {"name":"rap.north.ninetiesm.Common","size":354,"imports":[]},
      {"name":"rap.north.ninetiesm.Kanye West","size":7840,"imports":["rap.east.ninetiesg.Onyx","rap.east.eightiesm.Audio Two","rap.west.eightiesm.Eazy E","rap.east.twooom.50 Cent","rap.east.ninetiesg.Onyx"]},
      {"name":"rap.north.ninetiesm.Royce Da 5'9''","size":2832,"imports":["rap.east.eightiesm.Special Ed"]},
      {"name":"rap.north.twentenm.Chance the Rapper","size":1554,"imports":[]},
      {"name":"rap.north.twentenm.J-Cole","size":1382,"imports":["rap.east.twooom.50 Cent"]},
      {"name":"rap.north.twentenm.Juice Wrld","size":603,"imports":[]},
      {"name":"rap.north.twokaysm.Eminem","size":301,"imports":["rap.east.ninetiesg.Onyx","rap.east.eightiesm.Eric B and Rakim","rap.east.ninetiesm.Jay-Z"]},
      {"name":"rap.north.twooom.Drake","size":323,"imports":[]},
      {"name":"rap.south.eightiesg.UGK","size":522,"imports":["rap.east.eightiesm.Gang Starr"]},
      {"name":"rap.south.eightiesm.Scarface","size":8833,"imports":[]},
      {"name":"rap.south.eightiesm.The D.O.C.","size":3617,"imports":[]},
      {"name":"rap.south.ninetiesf.Missy Elliott","size":3331,"imports":[]},
      {"name":"rap.south.ninetiesg.Outkast","size":10066,"imports":[]},
      {"name":"rap.south.ninetiesg.Kriss Kross","size":5130,"imports":[]},
      {"name":"rap.south.ninetiesm.Lil Wayne","size":2105,"imports":["rap.east.ninetiesg.Fugees","rap.west.twentenm.Kendrick Lamar","rap.east.ninetiesf.Lauryn Hill"]},
      {"name":"rap.south.twentenf.Megan thee Stallion","size":4614,"imports":["rap.east.eightiesg.Salt-N-Pepa"]},
      {"name":"rap.south.twentenm.21 Savage","size":1101,"imports":[]},
      {"name":"rap.south.twentenm.Denzel Curry","size":280,"imports":[]},
      {"name":"rap.south.twentenm.Don Trip","size":363,"imports":[]},
      {"name":"rap.south.twentenm.Future","size":283,"imports":[]},
      {"name":"rap.south.twentenm.Gunna","size":597,"imports":[]},
      {"name":"rap.south.twentenm.Kenny Mason","size":595,"imports":[]},
      {"name":"rap.south.twentenm.Moneybagg Yo","size":2165,"imports":[]},
      {"name":"rap.south.twentenm.NBA Youngboy","size":1229,"imports":[]},
      {"name":"rap.south.twentenm.Rick Ross","size":3623,"imports":[]},
      {"name":"rap.south.twentenm.Travis Scott","size":2047,"imports":["rap.south.twentenm.Young Thug"]},
      {"name":"rap.south.twentenm.Young Thug","size":1375,"imports":[]},
      {"name":"rap.south.twentenm.Kodak Black","size":444,"imports":[]},
      {"name":"rap.south.twooom.2Chainz","size":1082,"imports":["rap.east.ninetiesg.Wu-Tang Clan"]},
      {"name":"rap.south.twooom.Killer Mike","size":277,"imports":[]},
      {"name":"rap.south.twooom.Lil Boosie","size":843,"imports":[]},
      {"name":"rap.south.twooom.Lil Jon","size":3748,"imports":[]},
      {"name":"rap.south.twooom.Mike Jones","size":781,"imports":[]},
      {"name":"rap.south.twooom.TI","size":1425,"imports":[]},
      {"name":"rap.south.twooom.Wale","size":933,"imports":["rap.east.eightiesm.Audio Two","rap.east.ninetiesm.Jay-Z","rap.east.ninetiesmale.Notorious BIG"]},
      {"name":"rap.west.eightiesg.Digital Underground","size":335,"imports":[]},
      {"name":"rap.west.eightiesg.NWA","size":1759,"imports":[]},
      {"name":"rap.west.eightiesm.Ice Cube","size":671,"imports":[]},
      {"name":"rap.west.eightiesm.Ice Cube","size":748,"imports":[]},
      {"name":"rap.west.eightiesm.Ice-Tea","size":275,"imports":["rap.east.ninetiesm.Jay-Z"]},
      {"name":"rap.west.eightiesm.Sir Mix-a-Lot","size":1000,"imports":[]},
      {"name":"rap.west.eightiesm.Tone Loc","size":1144,"imports":[]},
      {"name":"rap.west.eightiesm.Tone Loc","size":8746,"imports":["rap.west.eightiesm.Ice-Tea"]},
      {"name":"rap.west.ninetiesg.Cypress Hill","size":299,"imports":[]},
      {"name":"rap.west.ninetiesm.DJ Quik","size":772,"imports":[]},
      {"name":"rap.west.ninetiesm.Mac Dre","size":2732,"imports":[]},
      {"name":"rap.west.ninetiesg.Black Eyed Peas","size":1629,"imports":["rap.east.eightiesg.Branubians"]},
      {"name":"rap.west.ninetiesm.Del the Funky Homosapien","size":285,"imports":["rap.east.eightiesg.Ultramagnetic MCs"]},
      {"name":"rap.west.ninetiesm.Tupac Shakur","size":5002,"imports":["rap.west.eightiesm.Ice Cube","rap.east.eightiesf.MC Lyte","rap.west.ninetiesm.Snoop Dogg","rap.east.eightiesm.Big Daddy Kane","rap.east.eightiesm.LL Cool J"]},
      {"name":"rap.west.ninetiesm.Snoop Dogg","size":902,"imports":["rap.east.eightiesm.Slick Rick","rap.west.ninetiesm.Tupac Shakur"]},
      {"name":"rap.west.twentenm.Kendrick Lamar","size":708,"imports":["rap.west.eightiesm.Ice Cube"]},
      {"name":"rap.west.twooom.Nipsey Hussle","size":4116,"imports":["rap.south.ninetiesg.Kriss Kross","rap.west.eightiesg.NWA"]},
      {"name":"rap.west.twooom.Tyler the Creator","size":5833,"imports":["rap.east.ninetiesg.Onyx"]},
      {"name":"rap.north.twooom.Drake","size":763,"imports":["rap.east.ninetiesm.Ghostface Killah"]},
      {"name":"rap.west.eightiesm.Eazy E","size":2490,"imports":[]}
  ]
}


  // Consolidated Artist object 
  cons_sams_artista = {
    "sam_artists": [
      {
        "Artist": "21 Savage",
        "bio": "21 Savage is a British rapper known for his <i>distinct trap style</i> and introspective lyrics. Born in London, he moved to Atlanta at a young age and emerged as a prominent figure in the hip-hop scene. His music often reflects on his personal experiences, addressing topics like <i>violence</i>, <i>poverty</i>, and <b><span style='color: red';>social injustice</span></b>.",
        "songs": [
          "A Lot",
          "Letter 2 My Momma",
          "Nothing New"
        ],
        "count": 3,
        "eras": [
          "2010+"
        ],
        "location": "Atlanta, Georgia",
        "region": "South"
      },
      {
        "Artist": "3rd Bass",
        "bio": "3rd Bass was an American hip-hop group known for their witty and <span class='pir'>socially conscious</span> lyrics. Consisting of MC Serch, Prime Minister Pete Nice, and DJ Richie Rich, they rose to prominence in the late 1980s and early 1990s. Their music often tackled themes of racial inequality, politics, and cultural criticism.",
        "songs": [
          "Derilicts of Dialect",
          "The Gas Face",
          "No Master Plan No Master Race",
          "No Static at All",
          "Oval Office",
          "Pop Goes the Weasel",
          "Problem Child",
          "Product of the Environment"
        ],
        "count": 8,
        "eras": [
          "1980s"
        ],
        "location": "",
        "region": "North"
      },
      {
        "Artist": "50 Cent",
        "bio": "50 Cent is an American rapper and actor who gained popularity with his debut album 'Get Rich or Die Tryin'.' Born Curtis Jackson, he rose to prominence in the early 2000s with his gritty lyrics and captivating storytelling. Beyond his music career, 50 Cent has ventured into entrepreneurship and acting, showcasing his versatility and business acumen.",
        "songs": [
          "Hate It Or Love It"
        ],
        "count": 1,
        "eras": [
          "2000s"
        ],
        "location": "Queens, New York",
        "region": "North"
      },
      {
        "Artist": "Akinyele",
        "bio": "Akinyele is a provocative and controversial Hip Hop artist known for pushing boundaries with his explicit lyrics. His debut album 'Vagina Diner' gained attention for its daring content. Akinyele's music often sparks discussions about societal taboos and challenges traditional norms.",
        "songs": [
          "30 Days",
          "Pussy Makes the World Go Round",
          "Exercise"
        ],
        "count": 3,
        "eras": [
          "1990s"
        ],
        "location": "Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Beastie Boys",
        "bio": "Beastie Boys were an American rap/rock group known for their energetic performances and genre-blending music. Consisting of Michael Diamond (Mike D), Adam Horovitz (Ad-Rock), and Adam Yauch (MCA), they emerged in the 1980s as pioneers of hip-hop and alternative music fusion. Their influential career spanned decades, leaving an indelible impact on the music industry.",
        "songs": [
          "Fight for Your Right (To Party!)",
          "Sabotage"
        ],
        "count": 2,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "North"
      },
      {
        "Artist": "Big Daddy Kane",
        "bio": "Big Daddy Kane is an American rapper and actor known for his smooth delivery and influential contributions to hip-hop. With his charismatic stage presence and intricate wordplay, he became one of the leading figures in the golden age of hip-hop in the late 1980s and early 1990s. His lyrical prowess and suave style influenced generations of artists.",
        "songs": [
          "Word to the Mother",
          "Young, Gifted and Black"
        ],
        "count": 2,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Big Pun",
        "bio": "Big Pun, whose real name was Christopher Rios, was a highly influential Puerto Rican-American rapper known for his exceptional lyricism and impactful storytelling. He left a lasting legacy on the hip-hop community as one of the first Latino rappers to achieve mainstream success. Despite his untimely passing, his contributions to the genre continue to inspire and influence artists to this day.",
        "songs": [
          "100%",
          "Beware",
          "Twinz (Deep Cover'98)",
          "You Ain't a Killer"
        ],
        "count": 4,
        "eras": [
          "1990s"
        ],
        "location": "Bronx, New York",
        "region": "East"
      },
      {
        "Artist": "Biz Markie",
        "bio": "Biz Markie was an American rapper, beatboxer, and producer known for his humorous and lighthearted style. With his distinctive baritone voice and playful lyrics, he achieved mainstream success in the late 1980s. Biz Markie's contributions to hip-hop extended beyond his music, as he also served as a DJ and appeared in films and TV shows. Additionally, he subtly made <span class='pir';>political statements</span> in his music, demonstrating a slight bit of activism.",
        "songs": [
          "Busy Doin Nothin",
          "Hooker Got a Boyfriend",
          "vapors"
        ],
        "count": 3,
        "eras": [
          "1980s"
        ],
        "location": "New York, New York",
        "region": "East"
      },
      {
        "Artist": "Black Eyed Peas",
        "bio": "Black Eyed Peas is an American musical group known for their eclectic blend of hip-hop, pop, and electronic music. Consisting of will.i.am (William James Adams Jr.), apl.de.ap (Allan Pineda Lindo), Taboo (Jaime Luis Gomez), and Fergie (Stacy Ann Ferguson), The group's music often carries socially conscious messages and promotes positivity and unity.",
        "songs": [
          "Just Can't Get Enough",
          "Where is the Love"
        ],
        "count": 2,
        "eras": [
          "1990s"
        ],
        "location": "Los Angeles, California",
        "region": "West"
      },
      {
        "Artist": "Black Moon",
        "bio": "Black Moon is an American hip hop group from Brooklyn, New York, formed in the early 1990s. The group consists of members Buckshot, 5 ft, and DJ Evil Dee. Known for their underground sound and <span class='pir'>contribution to the creation of hardcore hip-hop with a focus on social consciousness</span>, they are acclaimed for albums like 'Enta da Stage'.",
        "songs": [
          "How Many MC's...",
          "I Got Cha Opin",
          "Shit Iz Real",
          "Two Turntables & A Mic",
          "Buck 'Em Down",
          "Reality"
        ],
        "count": 6,
        "eras": [
          "1990s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Bone Thugs-N-Harmony",
        "bio": "Bone Thugs-N-Harmony is an American hip-hop group known for their melodic harmonies and rapid-fire delivery. Formed in Cleveland, Ohio, they rose to prominence in the 1990s with hits like 'Tha Crossroads' and '1st of tha Month'. Their unique style and introspective lyrics made them influential figures in the rap scene.",
        "songs": [
          "1st of the Month",
          "Change the World",
          "Tha Crossroads"
        ],
        "count": 3,
        "eras": [
          "1990s"
        ],
        "location": "Cleveland, Ohio",
        "region": "North"
      },
      {
        "Artist": "Busta Rhymes",
        "bio": "Busta Rhymes is an American rapper, singer, and actor known for his energetic performances and rapid-fire rhymes. With a career spanning several decades, he has released numerous chart-topping hits and collaborated with various artists. Busta Rhymes is celebrated for his dynamic flow and charismatic stage presence.",
        "songs": [
          "One",
          "When Disaster Strikes"
        ],
        "count": 2,
        "eras": [
          "1990s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Canibus",
        "bio": "Canibus is an American rapper known for his intricate wordplay and lyrical depth. Emerging in the late 1990s, he gained attention for his technical skills and thought-provoking verses. Canibus's music often explores complex themes and showcases his intellectual approach to hip-hop.",
        "songs": [
          "Channel Zero",
          "Nigganometry"
        ],
        "count": 2,
        "eras": [
          "1990s"
        ],
        "location": "Jamaica, Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Cardi B",
        "bio": "Cardi B is an American rapper, songwriter, and actress who rose to fame with her chart-topping debut single 'Bodak Yellow'. Known for her charismatic personality and unapologetic lyrics, she has become one of the most successful female artists in the music industry. Cardi B's bold and confident style has made her a cultural icon.",
        "songs": [
          ""
        ],
        "count": 0,
        "eras": [
          "2010+"
        ],
        "location": "New York, New York",
        "region": "East"
      },
      {
        "Artist": "Chance the Rapper",
        "bio": "Chancelor Bennett, better known by his stage name Chance the Rapper, is an American rapper, singer, songwriter, and record producer. He is known for his eclectic mix of hip hop, gospel, and soul music, as well as his <span class='pir';>socially conscious</span> lyrics.",
        "songs": [
          "Yah Know",
          "Blessings",
          "Cocoa Butter Kisses",
          "Angels",
          "Same Drugs",
          "How Great Is Our God"
        ],
        "count": 6,
        "eras": [
          "2010+"
        ],
        "location": "Chicago, Illinois",
        "region": "North"
      },
      {
        "Artist": "Childish Gambino",
        "bio": "Childish Gambino, also known as Donald Glover, is a multi-talented artist who excels in music, acting, writing, and producing. With critically acclaimed albums like 'Awaken, My Love!' and the hit single 'This Is America', he has proven himself as an innovative and socially conscious artist. Childish Gambino's work often explores themes of race, identity, and cultural commentary.",
        "songs": [
          "3005",
          "53.49",
          "Earth: The Oldest Computer (The Last Night)",
          "Feels Like Summer",
          "Life: The Biggest Troll (Andrew Auernheimer)",
          "Redbone",
          "Sweatpants",
          "That Power",
          "This Is America"
        ],
        "count": 9,
        "eras": [
          "2010+"
        ],
        "location": "Stone Mountain, Georgia",
        "region": "East"
      },
      {
        "Artist": "Common",
        "bio": "Common is an American rapper, actor, and activist known for his introspective and socially conscious lyrics. With a career spanning over three decades, he has released acclaimed albums and collaborated with various artists. Common's music often delves into themes of love, self-reflection, and social issues.",
        "songs": [
          "A Song for Assata",
          "Be",
          "Black America Again",
          "Faithful",
          "Glory",
          "I Used to Love H.E.R.",
          "Letter to the Free",
          "Retrospect for Life",
          "Testify",
          "The 6th Sense",
          "The Believer",
          "The Corner",
          "The Dreamer",
          "The Food",
          "The People",
          "U, Black Maybe"
        ],
        "count": 16,
        "eras": [
          "1990s"
        ],
        "location": "Chicago, Illinois",
        "region": "North"
      },
      {
        "Artist": "Cypress Hill",
        "bio": "Cypress Hill is an American hip-hop group hailing from South Gate, California. Formed in 1988, the group consists of members B-Real, Sen Dog, DJ Muggs, and Eric Bobo. Known for their distinctive sound and lyrical prowess, Cypress Hill emerged as pioneers of West Coast rap, blending elements of hip-hop with funk, rock, and reggae influences.\n\nWith their self-titled debut album released in 1991, Cypress Hill achieved commercial success and critical acclaim. The album featured hits like 'How I Could Just Kill a Man' and 'Hand on the Pump,' showcasing their raw energy, socially conscious lyrics, and signature smoked-out vibe. Over the years, the group has continued to release successful albums, collaborating with various artists and consistently pushing the boundaries of rap music.\n\nBeyond their music, Cypress Hill has been vocal advocates for marijuana legalization and have openly embraced cannabis culture. Their music often explores themes of rebellion, urban life, and the struggles faced by marginalized communities, making them influential figures in the hip-hop community.",
        "songs": [
          "Hand On the Pump",
          "How I Could Just Kill a Man",
          "Insane in the Brain",
          "Pigs",
          "Rise Up",
          "Tequila Sunrise"
        ],
        "count": 6,
        "eras": [
          "1990s"
        ],
        "location": "South Gate, California",
        "region": "West"
      },
      {
        "Artist": "De La Soul",
        "bio": "De La Soul is an American hip-hop trio known for their eclectic and innovative approach to rap music. Formed in the late 1980s, they achieved critical acclaim with their debut album '3 Feet High and Rising'. De La Soul's unique sound, blending soulful samples, playful lyrics, and positive vibes, has made them influential figures in alternative hip-hop.",
        "songs": [
          "Ghetoo Thang",
          "Itsoweezee (HOT)",
          "Me, Myself, and I",
          "My Brother's a Basehead",
          "Say No Go",
          "Stakes is High",
          "Who Do You Worship"
        ],
        "count": 7,
        "eras": [
          "1980s"
        ],
        "location": "Amityville, New York",
        "region": "East"
      },
      {
        "Artist": "Digital Underground",
        "bio": "Digital Underground was an American hip-hop group known for their innovative and funky sound. Led by Shock G (also known as Humpty Hump), they achieved mainstream success in the 1990s with hits like 'The Humpty Dance' and 'Doowutchyalike'. Digital Underground's music combined elements of funk, soul, and humor, making them influential figures in the hip-hop community.",
        "songs": [
          "No Nose Job",
          "Same Song",
          "Tie the Knot"
        ],
        "count": 3,
        "eras": [
          "1980s"
        ],
        "location": "Oakland, California",
        "region": "West"
      },
      {
        "Artist": "DJ Jazzy Jeff & The Fresh Prince",
        "bio": "DJ Jazzy Jeff & The Fresh Prince, consisting of DJ Jazzy Jeff (Jeff Townes) and Will Smith, gained popularity in the late 1980s and early 1990s with their upbeat and playful hip-hop sound. Known for their hit singles 'Parents Just Don't Understand' and 'Summertime', they brought a fresh and lighthearted approach to rap music. Their collaboration paved the way for Will Smith's successful acting career.",
        "songs": [
          "Parents Just Don't Understand"
        ],
        "count": 1,
        "eras": [
          "1980s"
        ],
        "location": "Philadelphia, Pennsylvania",
        "region": "East"
      },
      {
        "Artist": "Denzel Curry",
        "bio": "Denzel Curry is an American rapper and songwriter known for his raw and introspective style. Emerging from the underground rap scene, he gained critical acclaim with his album 'TA13OO', which delves into themes of mental health, identity, and social issues. Denzel Curry's powerful delivery and thought-provoking lyrics have solidified his position as one of the most exciting voices in contemporary hip-hop.",
        "songs": [
          "BLACK BALLOONS",
          "Clout Cobain",
          "P.A.T.",
          "SIRENS",
          "Speedboat",
          "Ultimate"
        ],
        "count": 6,
        "eras": [
          "2010+"
        ],
        "location": " Carol City, Florida",
        "region": "South"
      },
      {
        "Artist": "DMX",
        "bio": "DMX, also known as Dark Man X, was a prominent American rapper and actor. He gained immense popularity in the late 1990s and early 2000s with his intense and raw lyrical style. DMX's music often delved into his <span style='color: red';><b>personal struggles, faith, and the challenges</b></span> faced by the urban community. One of his unique qualities was his ability to deliver heartfelt storytelling through his music.",
        "songs": [
          "Slippin'",
          "Who We Be",
          "Where the Hood At",
          "Stop Being Greedy",
          "The Omen"
        ],
        "count": 5,
        "eras": [
          "1990s",
          "1990s"
        ],
        "location": "Yonkers, New York",
        "region": "East"
      },
      {
        "Artist": "Don Trip",
        "bio": "Don Trip (Christopher Donnie Wallace Jr) is a Memphis-based Hip Hop artist known for his introspective lyrics and storytelling abilities. He gained recognition for his mixtapes and collaborations with fellow Memphis rapper Starlito. Don Trip's music often explores personal struggles, street life, and the harsh realities of his environment.",
        "songs": [
          "Hold Back Tears",
          "Letter to My Son",
          "Letter to My Son Part 2",
          "Prolly",
          "The Life"
        ],
        "count": 5,
        "eras": [
          "2010+"
        ],
        "location": "Memphis, Tennessee",
        "region": "South"
      },
      {
        "Artist": "Doug E. Fresh",
        "bio": "Doug E. Fresh is an American rapper, beatboxer, and producer known for his exceptional beatboxing skills and energetic performances. Often referred to as the 'Human Beatbox', he popularized beatboxing as an art form and influenced generations of artists. With hits like 'The Show' and 'La Di Da Di', Doug E. Fresh contributed significantly to the development of hip-hop culture.",
        "songs": [
          "Ain't No Half-Steppin",
          "Play This Only At Night"
        ],
        "count": 2,
        "eras": [
          "1980s"
        ],
        "location": "Barbados, New York",
        "region": "East"
      },
      {
        "Artist": "DJ Quik",
        "bio": "DJ Quik is an American rapper, record producer, and DJ known for his smooth and funky production style. With his distinctive G-funk sound and laid-back delivery, he became a prominent figure in West Coast hip-hop. DJ Quik's musical versatility and ability to blend different genres have earned him recognition as one of the pioneers of the West Coast rap scene.",
        "songs": [
          "Black Mercedes",
          "Fandango",
          "Nobody",
          "Nobody Does It Better",
          "You'z a Ganxta"
        ],
        "count": 5,
        "eras": [
          "1990s"
        ],
        "location": "Compton, California",
        "region": "West"
      },
      {
        "Artist": "Drake",
        "bio": "Drake is a Canadian rapper, singer, songwriter, and actor who has achieved tremendous success in the music industry. With chart-topping hits like 'Hotline Bling', 'God's Plan', and 'In My Feelings', he has become one of the biggest artists of his generation. Known for his introspective lyrics and catchy melodies, Drake has influenced the modern sound of hip-hop and R&B.",
        "songs": [
          ""
        ],
        "count": 0,
        "eras": [
          "2000s"
        ],
        "location": "Ontario, Canada",
        "region": "North"
      },
      {
        "Artist": "El-P",
        "bio": "El-P, whose real name is Jaime Meline, is an American rapper, record producer, and co-founder of the hip-hop collective Company Flow. Known for his complex and politically charged lyrics, El-P is considered one of the pioneers of underground and alternative hip-hop. As a solo artist, he has released critically acclaimed albums such as 'Fantastic Damage' and 'I'll Sleep When You're Dead.' El-P's innovative production style and thought-provoking content have solidified his place as a socially conscious and influential figure in hip-hop. El-P continues to inspire and challenge audiences with his unique approach to music and activism.",
        "songs": [
          "Deep Space 9mm",
          "Stepfather Factory",
          "The Full Retard",
          "Drones Over BKLYN",
          "Cancer 4 Cure",
          "Tasmanian Pain Coaster"
        ],
        "count": 6,
        "eras": [
          "2000s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Eminem",
        "bio": "Eminem, also known as Marshall Mathers or Slim Shady, is an American rapper, songwriter, and record producer. With his exceptional lyrical skills, intense delivery, and controversial subject matter, he became one of the most successful and influential artists in hip-hop history. Eminem's albums, including 'The Marshall Mathers LP' and 'The Eminem Show', have garnered critical acclaim and commercial success, solidifying his place as a rap icon.",
        "songs": [
          "Lose Yourself",
          "Not Afraid",
          "Stan",
          "Toy Soldier",
          "White America"
        ],
        "count": 5,
        "eras": [
          "1990s"
        ],
        "location": "Detroit, Michigan",
        "region": "North"
      },
      {
        "Artist": "EPMD",
        "bio": "EPMD, which stands for Erick and Parrish Making Dollars, is an American hip-hop duo consisting of Erick Sermon and Parrish Smith. They emerged in the late 1980s and gained recognition for their innovative production style and witty lyrics. With hits like 'You Gots to Chill' and 'Strictly Business', EPMD became influential figures in East Coast hip-hop.",
        "songs": [
          "Crossover",
          "You Gots to Chill"
        ],
        "count": 2,
        "eras": [
          "1980s"
        ],
        "location": "Brentwood New York",
        "region": "East"
      },
      {
        "Artist": "Eric B & Rakim",
        "bio": "Eric B & Rakim were an American hip-hop duo known for their groundbreaking contributions to the genre. Comprised of Eric B (Eric Barrier) as the DJ and Rakim as the MC, they elevated rap music with their intricate lyricism and smooth delivery. Their albums, including 'Paid in Full' and 'Follow the Leader', are regarded as classics in hip-hop history. They emerged in the late 1980s and are known for their innovative and influential contributions to the genre. Rakim's intricate rhyme schemes and smooth flow, combined with Eric B.'s skillful production, revolutionized hip hop and set a new standard for lyricism and musicality. With their <span style='color: red'><b>timeless hits</b></span>, they continue to inspire generations of hip hop artists",
        "songs": [
          "Don't Sweat the Technique",
          "Follow the Leader",
          "In the Ghetto",
          "Mahogany",
          "Microphone Fiend",
          "Paid in Full",
          "Teach the Children"
        ],
        "count": 7,
        "eras": [
          "1980s"
        ],
        "location": "Long Island, New York",
        "region": "East"
      },
      {
        "Artist": "Fabolous",
        "bio": "Fabolous, born John David Jackson, is an American rapper and songwriter from Brooklyn, New York. He gained popularity for his smooth delivery and clever wordplay. Fabolous has released several successful albums and is known for his socially conscious and culturally relevant songs.",
        "songs": [
          "My Time",
          "Breathe",
          "Life Is So Exciting"
        ],
        "count": 3,
        "eras": [
          "2000s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Fat Boys",
        "bio": "Fat Boys were an American hip-hop trio known for their lighthearted and comedic approach to rap music. Comprised of Prince Markie Dee, Kool Rock-Ski, and Buff Love (formerly known as The Human Beatbox), they achieved mainstream success in the 1980s. With their playful rhymes and beatboxing skills, Fat Boys left a lasting impact on the rap scene.",
        "songs": [
          "Big & Beautiful",
          "Don't Be Stupid",
          "Jailhouse Rap",
          "Protect Yourself / My Nuts",
          "The Fat Boys at Forty"
        ],
        "count": 5,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Fearless Four",
        "bio": "Fearless Four was an American hip-hop group known for their energetic performances and contributions to the early hip-hop movement. Comprised of Great Peso, Devastating Tito, Mighty Mike C, and Krazy Eddie, they emerged in the late 1970s and gained popularity with their dynamic stage shows and rap battles. Fearless Four played a significant role in shaping the foundation of hip-hop culture.",
        "songs": [
          "Problems of the World Today"
        ],
        "count": 1,
        "eras": [
          "1980s"
        ],
        "location": "New York, New York",
        "region": "East"
      },
      {
        "Artist": "Fugees",
        "bio": "Fugees, comprised of Wyclef Jean, Lauryn Hill, and Pras Michel, were an American hip-hop group known for their fusion of rap, R&B, and reggae. They achieved massive success in the 1990s with their album 'The Score', featuring hits like 'Killing Me Softly' and 'Ready or Not'. The Fugees showcased their diverse talents and conscious lyricism, leaving a lasting impact on the music industry.",
        "songs": [
          "Family Business",
          "Fugee-La",
          "Ghetto Misfortunes Wealth",
          "Ready or Not",
          "Temple",
          "The Mask",
          "The Score",
          "Vocab"
        ],
        "count": 8,
        "eras": [
          "1990s"
        ],
        "location": "South Orange, New Jersey",
        "region": "East"
      },
      {
        "Artist": "Future",
        "bio": "Nayvadius DeMun Wilburn, better known by his stage name Future, is an American rapper, singer, songwriter, and record producer. He is known for his mumble-styled vocals and prolific output, having released a number of mixtapes and albums since his debut in 2010.",
        "songs": [
          "Codeine Crazy",
          "March Madness",
          "Feds Watching",
          "Life Is Good",
          "Mask Off"
        ],
        "count": 5,
        "eras": [
          "2010+"
        ],
        "location": "Atlanta, Georgia",
        "region": "South"
      },
      {
        "Artist": "Gang Starr",
        "bio": "Gang Starr was an American hip-hop duo consisting of Guru and DJ Premier. Known for their jazz-influenced production and intelligent lyrics, they became one of the most respected and influential groups in hip-hop. With albums like 'Step in the Arena' and 'Moment of Truth', Gang Starr's music showcased their dedication to the art form and their commitment to preserving the essence of true hip-hop.",
        "songs": [
          "DWYCK",
          "Just To Get a Rep",
          "Mass Appeal"
        ],
        "count": 3,
        "eras": [
          "1990s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Grand Master Flash and the Furious 5",
        "bio": "Grandmaster Flash and the Furious Five were an American hip-hop group known for their pioneering contributions to the genre. Led by Grandmaster Flash, they played a pivotal role in the development of turntablism and were one of the first rap groups to gain mainstream success. With hits like 'The Message' and 'White Lines (Don't Don't Do It)', they addressed social issues and set the stage for future rap artists.",
        "songs": [
          "Birthday Party",
          "Freedom",
          "New York, New York",
          "The Message",
          "White Lines"
        ],
        "count": 5,
        "eras": [
          "1980s"
        ],
        "location": "South Bronx, New York",
        "region": "East"
      },
      {
        "Artist": "Gunna",
        "bio": "Gunna, also known as Sergio Giavanni Kitchens, is an American rapper and songwriter hailing from Atlanta, Georgia. He gained recognition in the hip hop scene with his melodic style and unique vocal delivery. Gunna has collaborated with various artists and is known for his trap-infused sound and introspective lyrics.",
        "songs": [
          ""
        ],
        "count": 0,
        "eras": [
          "2010+"
        ],
        "location": "Atlanta, Georgia",
        "region": "South"
      },
      {
        "Artist": "Heavy D & the Boyz",
        "bio": "Heavy D & the Boyz were an American hip-hop group led by rapper Heavy D. Known for their upbeat and danceable tracks, they achieved commercial success in the late 1980s and 1990s. With hits like 'Now That We Found Love' and 'Is It Good to You', Heavy D & the Boyz brought a unique blend of rap, R&B, and dance music to the mainstream.",
        "songs": [
          "Black Coffee",
          "Don't Curse",
          "Self-Destruction"
        ],
        "count": 3,
        "eras": [
          "1980s"
        ],
        "location": "Mount Vernon, New York",
        "region": "East"
      },
      {
        "Artist": "Ice Cube",
        "bio": "Ice Cube, born O'Shea Jackson, is an American rapper, actor, and filmmaker. As a member of the influential group N.W.A, he played a pivotal role in shaping gangsta rap and addressing social issues in his lyrics. Ice Cube's solo career brought him further success with albums like 'AmeriKKKa's Most Wanted' and 'The Predator'. He has since become a prominent figure in both the music and film industries.",
        "songs": [
          "Black Korea",
          "Check Yoself",
          "Child Support",
          "F*ck tha Police",
          "It Was a Good Day"
        ],
        "count": 5,
        "eras": [
          "1980s"
        ],
        "location": "Los Angeles, California",
        "region": "West"
      },
      {
        "Artist": "Ice-T",
        "bio": "Ice-T is an American rapper, actor, and producer who has made significant contributions to hip-hop and the entertainment industry. Known for his gritty and raw lyrics, he gained recognition with tracks like '6 in the Mornin' and 'Colors'. Ice-T's versatility as an artist extends to his acting career, where he has starred in various films and television shows.",
        "songs": [
          "6 'N the Mornin'",
          "Colors",
          "Freedom of Speech",
          "I'm Your Pusher",
          "Lethal Weapon",
          "New Jack Hustler",
          "O.G. Original Gangster"
        ],
        "count": 7,
        "eras": [
          "1980s"
        ],
        "location": "Los Angeles, California",
        "region": "West"
      },
      {
        "Artist": "Jay-Z",
        "bio": "Jay-Z, born Shawn Carter, is an American rapper, songwriter, and entrepreneur. With his exceptional wordplay and business acumen, he has become one of the most successful and influential artists in hip-hop. Jay-Z's albums, including 'The Blueprint' and 'The Black Album', are regarded as classics in the genre. Beyond music, he has ventured into various business endeavors, making him a powerful figure in the entertainment industry.",
        "songs": [
          "99 Problems",
          "Hard Knock Life",
          "No Church in the Wild",
          "The Story of O.J."
        ],
        "count": 4,
        "eras": [
          "1990s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "J-Cole",
        "bio": "J-Cole is an American rapper, singer, and producer known for his introspective lyrics and storytelling abilities. Rising to prominence with his mixtapes and debut album 'Cole World: The Sideline Story', he has since released critically acclaimed projects that tackle social issues and personal experiences. J-Cole's music resonates with audiences for its honesty and thought-provoking content.",
        "songs": [
          "1985",
          "Be Free",
          "Climb Back",
          "Crooked Smile",
          "Firing Squad",
          "Lost Ones",
          "Middle Child",
          "Neighbors"
        ],
        "count": 8,
        "eras": [
          "2000s"
        ],
        "location": "Fayetteville, North Carolina",
        "region": "South"
      },
      {
        "Artist": "Joey Badass",
        "bio": "Joey Badass, born Jo-Vaughn Virginie Scott, is an American rapper, singer, songwriter, and actor. Raised in Brooklyn, New York, he became known for his unique style and socially conscious lyrics. In his work, Joey addresses various societal issues, such as racial inequality, politics, and self-awareness <span class='pir';></span>.",
        "songs": ["Babylon", "Black Beetles", "Eulogy", "For My People", "Good Morning Amerikkka", "Head High", "Land of the Free", "Righteous Minds", "Temptation"],
        "count": 9,
        "eras": ["2010+"],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Joyner Lucas",
        "bio": "Joyner Lucas is a highly skilled rapper known for his thought-provoking and introspective lyrics. His songs often address social and political issues, shedding light on topics such as racism, mental health, and personal struggles. He uses his music as a platform to spark conversations and create awareness about important societal matters.",
        "songs": [
          "I'm Not Racist",
          "Devil's Work",
          "ISIS (featuring Logic)",
          "Frozen",
          "I Love"
        ],
        "count": 5,
        "eras": [
          "2010+"
        ],
        "location": "Worcester, Massachusetts",
        "region": "East"
      },
      {
        "Artist": "Juice Wrld",
        "bio": "Juice Wrld, whose real name is Jarad Higgins, was an American rapper, singer, and songwriter. Known for his melodic style and emotionally raw lyrics, Juice Wrld gained widespread recognition for his ability to seamlessly blend elements of hip hop and rock music. His music often delved into themes of mental health, heartbreak, and the struggles of fame, resonating with a generation of listeners.",
        "songs": [
          "Lucid Dreams",
          "Legends",
          "Robbery",
          "Wishing Well"
        ],
        "count": 4,
        "eras": [
          "2010+"
        ],
        "location": "Chicago, Illinois",
        "region": "North"
      },
      {
        "Artist": "Jungle Brothers",
        "bio": "Jungle Brothers are an American hip-hop group known for their eclectic and innovative style. As pioneers of the Native Tongues collective, they infused jazz, funk, and Afrocentric influences into their music. With albums like 'Straight Out the Jungle' and 'Done by the Forces of Nature', Jungle Brothers pushed boundaries and expanded the sonic possibilities of hip-hop.",
        "songs": [
          "Black is Black",
          "Black Woman",
          "Breathe Don't Stop",
          "Straight Out the Jungle",
          "What 'U' Waitin' '4'?"
        ],
        "count": 5,
        "eras": [
          "1980s"
        ],
        "location": "New York, New York",
        "region": "East"
      },
      {
        "Artist": "Just-Ice",
        "bio": "Just-Ice is an American rapper known for his aggressive and powerful delivery. A part of the early hip-hop scene in the 1980s, he gained recognition with his debut album 'Back to the Old School'. Just-Ice's commanding presence and hard-hitting lyrics made him a notable figure in the development of hardcore rap and street-oriented hip-hop.",
        "songs": [
          "Freedom of Speech",
          "Going Way Back",
          "Latoya",
          "Moshitup"
        ],
        "count": 4,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Kanye West",
        "bio": "Kanye West is an American rapper, producer, and fashion designer known for his innovative and genre-defying music. With critically acclaimed albums like 'The College Dropout', 'Late Registration', and 'My Beautiful Dark Twisted Fantasy', he has established himself as one of the most influential and controversial figures in hip-hop. Kanye West's artistic vision, outspoken personality, and boundary-pushing creativity have left a lasting impact on the music industry.",
        "songs": [
          "All Falls Down",
          "Diamonds from Sierra Leone",
          "Heard Em Say",
          "Hey Mama",
          "Jesus is Lord",
          "Jesus Walks",
          "New Slaves",
          "No Church in the Wild",
          "Selah",
          "Spaceship",
          "Ultralight Beam",
          "Water",
          "Who Will Survive In America",
          "Ye vs. The People"
        ],
        "count": 14,
        "eras": [
          "2000s"
        ],
        "location": "Chicago, Illinois",
        "region": "North"
      },
      {
        "Artist": "Kendrick Lamar",
        "bio": "Kendrick Lamar is an American rapper and songwriter hailed for his lyrical prowess and socially conscious themes. With albums like 'good kid, m.A.A.d city', 'To Pimp a Butterfly', and 'DAMN.', he has garnered critical acclaim and commercial success. Kendrick Lamar's thought-provoking lyrics, intricate storytelling, and poetic style have solidified his position as one of the most important voices in modern hip-hop.",
        "songs": [
          "Alright",
          "Complexion (A Zulu Love)",
          "DNA",
          "F*ck Your Ethnicity",
          "FEAR",
          "HiiiPower",
          "How Much a Dollar Cost",
          "i",
          "King Kunta",
          "Ronald Reagan Era (His Evils)",
          "The Blacker the Berry",
          "United in Grief"
        ],
        "count": 12,
        "eras": [
          "2010+"
        ],
        "location": "Compton, California",
        "region": "West"
      },
      {
        "Artist": "Kenny Mason",
        "bio": "Kenny Mason is an American rapper, singer, and songwriter known for his versatile style and introspective lyrics. Blending elements of rap, rock, and alternative music, he has garnered attention for his unique sound and artistic vision. Kenny Mason's music explores personal struggles, societal issues, and existential themes, showcasing his ability to convey depth and emotion through his music.",
        "songs": [
          "Angels Calling",
          "Handle Me",
          "Hit",
          "Metal Wings",
          "PTSD"
        ],
        "count": 5,
        "eras": [
          "2010+"
        ],
        "location": "Atlanta, Georgia",
        "region": "South"
      },
      {
        "Artist": "Kid 'n Play",
        "bio": "Kid 'n Play were an American hip-hop duo consisting of Christopher Reid (Kid) and Christopher Martin (Play). They gained popularity in the late 1980s and early 1990s with their upbeat and playful tracks. Known for their dance moves and comedic chemistry, Kid 'n Play brought a fun and energetic vibe to the rap scene and left a mark on the hip-hop culture of the time.",
        "songs": [
          "Black is Beautiful",
          "Face the Nation",
          "Slippin'"
        ],
        "count": 3,
        "eras": [
          "1980s"
        ],
        "location": "New York, New York",
        "region": "East"
      },
      {
        "Artist": "Killer Mike",
        "bio": "Killer Mike is an American rapper, activist, and entrepreneur known for his socially conscious lyrics and powerful delivery. With his distinctive voice and thought-provoking verses, he has garnered critical acclaim for albums like 'R.A.P. Music' and 'Run the Jewels'. Killer Mike's music addresses systemic issues, political commentary, and personal experiences, making him a prominent voice in contemporary hip-hop.",
        "songs": [
          "2 Sides",
          "Anywhere but Here",
          "Blackboy, Whiteboy",
          "Close Your Eyes",
          "DDFH",
          "Don't Die",
          "Don't Let the Devil",
          "Early",
          "Exit 9",
          "Follow Your Dreams",
          "Ghetto Gospel",
          "Go",
          "God in the Building II",
          "Goddammit",
          "Grandma's House",
          "High and Holy",
          "Ju$t",
          "Kill Your Masters",
          "Lie Cheat Steal",
          "Motherless",
          "NRICH",
          "Pl8to",
          "Reagan",
          "Run",
          "Scared Straight",
          "Scientists and Engineers",
          "Shed Tears",
          "Slammer",
          "Something for Junkies",
          "Spaceship Views",
          "That's Life",
          "Walking in the Snow"
        ],
        "count": 31,
        "eras": [
          "2000s"
        ],
        "location": "Atlanta, Georgia",
        "region": "South"
      },
      {
        "Artist": "Kodak Black",
        "bio": "Kodak Black is an American rapper and songwriter known for his raw and emotive style. Rising to prominence with hits like 'Tunnel Vision' and 'Zeze', he has made a significant impact on the trap music scene. Kodak Black's music often reflects his experiences growing up in Florida and tackles themes of street life, struggle, and personal introspection.",
        "songs": [
          "Calling My Spirit",
          "Tunnel Vision"
        ],
        "count": 2,
        "eras": [
          "2010+"
        ],
        "location": "Pompano Beach, Florida",
        "region": "South"
      },
      {
        "Artist": "Kool G Rap",
        "bio": "<span class='pir';>Kool G Rap, born Nathaniel Thomas Wilson, is a highly influential rapper from Queens, New York. Known for his complex lyrics and gritty storytelling, he is considered a pioneer of hardcore rap and mafioso rap. His socially conscious themes often revolve around street life, social inequality, and personal struggles.</span>",
        "songs": [
          "Erase Racism",
          "For da Brothaz",
          "Ghetto Knows",
          "Good Die Young",
          "Ill Street Blues",
          "My Life",
          "On the Run",
          "Riker's Island",
          "Road to the Riches",
          "Sad",
          "Streets of New York",
          "The Streets"
        ],
        "count": 11,
        "eras": [
          "1980s",
          "1990s",
          "2000s"
        ],
        "location": "Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Kool Moe Dee",
        "bio": "Kool Moe Dee is an American rapper, actor, and author known for his pioneering contributions to hip-hop. As a member of the influential group Treacherous Three, he helped shape the early rap scene. With solo hits like 'Wild Wild West' and 'How Ya Like Me Now', Kool Moe Dee showcased his confident delivery and intricate rhymes, establishing himself as a rap legend.",
        "songs": [
          "Go See the Doctor",
          "Rise 'N' Shine",
          "Self-Destruction",
          "Wild Wild West"
        ],
        "count": 4,
        "eras": [
          "1980s"
        ],
        "location": "Manhattan, New York",
        "region": "East"
      },
      {
        "Artist": "KRS-One",
        "bio": "KRS-One, also known as The Teacha, is an American rapper and activist known for his thought-provoking lyrics and socially conscious messages. As a founding member of Boogie Down Productions, he played a crucial role in the development of conscious rap and politically charged hip-hop. KRS-One's music addresses issues such as racism, inequality, and the power of knowledge, making him a respected figure in the genre.",
        "songs": [
          "Black and Proud",
          "Black Cop",
          "Edutainment",
          "Elementary",
          "Ghetto Music",
          "House Niggas",
          "Illegal Business",
          "Jah Rulez",
          "Loves Gonna Getcha",
          "My Philosophy",
          "Nervous",
          "Racist",
          "Self-Destruction",
          "Sex and Violence",
          "Sound of Da Police",
          "Stop the Violence",
          "T'Cha",
          "The Eye Opener",
          "Who Protects Us From You",
          "Why Is That?",
          "You Must Learn"
        ],
        "count": 19,
        "eras": [
          "1980s"
        ],
        "location": "The Bronx, New York",
        "region": "East"
      },
      {
        "Artist": "Kurtis Blow",
        "bio": "Kurtis Blow is an American rapper, singer, and record producer who played a significant role in popularizing rap music in the early days of the genre. With hits like 'The Breaks' and 'Basketball', he became one of the first commercially successful rappers. Kurtis Blow's contributions to hip-hop include his charismatic delivery, innovative rhymes, and his role in establishing rap as a viable form of music.",
        "songs": [
          "America",
          "Basketball",
          "If I Ruled the World",
          "The Breaks"
        ],
        "count": 3,
        "eras": [
          "1980s"
        ],
        "location": "Harlem, New York",
        "region": "East"
      },
      {
        "Artist": "Lauryn Hill",
        "bio": "Lauryn Hill is an American singer, rapper, and songwriter known for her powerful vocals and introspective lyrics. Rising to fame as a member of the Fugees, she achieved critical acclaim with her solo album 'The Miseducation of Lauryn Hill'. Lauryn Hill's music blends elements of hip-hop, soul, and R&B, and her passionate performances have solidified her as one of the most influential artists of her generation.",
        "songs": [
          "Doo Wop (That Thing)",
          "Every Ghetto, Every City",
          "Everything is Everything",
          "Final Hour",
          "Forgive Them Father",
          "To Zion"
        ],
        "count": 6,
        "eras": [
          "1990s"
        ],
        "location": "South Orange, New Jersey",
        "region": "East"
      },
      {
        "Artist": "Lil Boosie",
        "bio": "Nayvadius DeMun Wilburn, better known by his stage name Lil Boosie, is an American rapper, singer, songwriter, and record producer. He is known for his mumble-styled vocals and prolific output, having released a number of mixtapes and albums since his debut in 2010.",
        "songs": [
          "True Soldier",
          "My Block",
          "Free Boosie",
          "Better Days",
          "Dead Man Walking",
          "Letter to My Son",
          "Freedom"
        ],
        "count": 7,
        "eras": [
          "2000s"
        ],
        "location": "Baton Rouge, Louisiana",
        "region": "South"
      },
      {
        "Artist": "Lil Jon",
        "bio": "Lil Jon, born Jonathan Smith, is a renowned rapper, producer, and DJ. He rose to prominence in the early 2000s with his energetic and infectious crunk sound. Known for his distinctive ad-libs and commanding stage presence, Lil Jon became a key figure in the crunk movement, leaving an indelible mark on hip hop culture. With a string of chart-topping hits and collaborations, he continues to be a celebrated artist in the industry.",
        "songs": [
          "Hard Times",
          "I Am American",
          "Put Your Hood Up",
          "Read a Book",
          "Rep Yo City"
        ],
        "count": 5,
        "eras": [
          "2000s"
        ],
        "location": "Atlanta, Georgia",
        "region": "South"
      },
      {
        "Artist": "Lil Uzi Vert",
        "bio": "Lil Uzi Vert is an American rapper and songwriter known for his unique style and energetic performances. With his melodic flows and introspective lyrics, he has gained popularity with hits like 'XO Tour Llif3' and 'Money Longer'. Lil Uzi Vert's music bridges the gap between rap and rock, showcasing his versatility and pushing the boundaries of contemporary hip-hop.",
        "songs": [
          "Dark Queen",
          "Money Longer",
          "The Way Life Goes",
          "XO Tour Lif3"
        ],
        "count": 4,
        "eras": [
          "2010+"
        ],
        "location": "Philadelphia, Pennsylvania",
        "region": "East"
      },
      {
        "Artist": "Lil Wayne",
        "bio": "Lil Wayne, born Dwayne Michael Carter Jr., is an American rapper, singer, and songwriter. With his distinctive voice, rapid-fire delivery, and prolific output, he has become one of the most successful and influential artists in hip-hop. Lil Wayne's albums, including 'Tha Carter III' and 'Tha Carter IV', have received critical acclaim, and his lyrical dexterity and wordplay have solidified his status as a rap icon.",
        "songs": [
          "Georgia Bush",
          "London Roads",
          "Misunderstood",
          "Open Letter",
          "Tie My Hands"
        ],
        "count": 5,
        "eras": [
          "1990s"
        ],
        "location": "New Orleans, Louisiana",
        "region": "South"
      },
      {
        "Artist": "LL Cool J",
        "bio": "LL Cool J, born James Todd Smith, is an American rapper, actor, and entrepreneur. Known for his smooth delivery and charismatic persona, he gained prominence in the 1980s and 1990s with hits like 'I Need Love' and 'Mama Said Knock You Out'. LL Cool J's versatile style and crossover success have made him a legendary figure in hip-hop, and his longevity in the industry is a testament to his talent and versatility.",
        "songs": [
          "Black Radio"
        ],
        "count": 1,
        "eras": [
          "1980s"
        ],
        "location": "Bay Shore, New York",
        "region": "East"
      },
      {
        "Artist": "The Lox",
        "bio": "The Lox is an American hip-hop group consisting of Jadakiss, Styles P, and Sheek Louch. Known for their gritty lyrics and raw delivery, they emerged in the late 1990s as part of the East Coast rap scene. The Lox's music reflects the realities of street life and addresses social issues, showcasing their lyrical skill and capturing the essence of hardcore rap.",
        "songs": [
          "Dope Money",
          "Why"
        ],
        "count": 2,
        "eras": [
          "1990s"
        ],
        "location": "Yonkers, New York",
        "region": "East"
      },
      {
        "Artist": "Mac Dre",
        "bio": "Mac Dre was a highly influential rapper from Vallejo, California. He played a significant role in popularizing the hyphy movement, a subgenre of hip hop characterized by its energetic and upbeat sound. Mac Dre's music often incorporated witty wordplay, humorous lyrics, and storytelling, which endeared him to his fans. Tragically, he was murdered in 2004, but his legacy continues to inspire artists in the Bay Area and beyond.",
        "songs": [
          "Thizzle Dance",
          "Feelin' Myself",
          "Thizzle Washington",
          "Punk Police",
          "Genie of the Lamp",
          "Dreganomics"
        ],
        "count": 6,
        "eras": [
          "1990s"
        ],
        "location": "Oakland, California",
        "region": "West"
      },
      {
        "Artist": "Main Source",
        "bio": "Main Source is a legendary hip hop group formed in 1989. Composed of members Large Professor, Sir Scratch, and K-Cut, they are known for their innovative production and thought-provoking lyrics. Their music often addresses social issues and explores the African-American experience.",
        "songs": [
          "Just Hangin' Out",
          "Live at the BBQ"
        ],
        "count": 2,
        "eras": [
          "1990s"
        ],
        "location": "New York, New York",
        "region": "East"
      },
      {
        "Artist": "MC Shan",
        "bio": "MC Shan (Shawn Moltke) is an American rapper and hip-hop artist known for his contributions to the genre during the 1980s and 1990s. He was a key figure in the early days of hip-hop and gained popularity with his storytelling and lyrical skills. MC Shan's music often addressed <span class='pir'>social issues</span> and <span class='pir'>street life</span>, making him a socially conscious and culturally relevant artist during his era.",
        "songs": [
          "The Bridge",
          "Juice Crew Law",
          "I Pioneered This",
          "Project 'Ho",
          "Kill That Noise",
          "Cocaine"
        ],
        "count": 6,
        "eras": [
          "1980s"
        ],
        "location": "Queensbridge, New York",
        "region": "East"
      },
      {
        "Artist": "MF DOOM",
        "bio": "MF DOOM, also known as Daniel Dumile, started his career with the group 3rd Bass before embarking on his solo journey. He quickly gained recognition for his highly influential and enigmatic persona in hip hop. With his signature mask and intricate wordplay, he captivated audiences and gained a devoted following. MF DOOM's lyrical prowess and innovative production made him a revered artist in the underground rap scene. His impact on the genre is felt through his thought-provoking lyrics, unique storytelling, and boundary-pushing artistry.",
        "songs": [
          "Doomsday",
          "Accordion",
          "Rapp Snitch Knishes",
          "All Caps",
          "Rhymes Like Dimes",
          "One Beer",
          "Gazzillion Ear"
        ],
        "count": 7,
        "eras": [
          "1990s"
        ],
        "location": "Long Island, New York",
        "region": "East"
      },
      {
        "Artist": "Missy Elliott",
        "bio": "Missy Elliott is an American rapper, singer, songwriter, and producer known for her innovative and boundary-pushing music. With her unique style and futuristic visuals, she has become one of the most influential figures in hip-hop and R&B. Missy Elliott's hits like 'Get Ur Freak On', 'Work It', and 'Lose Control' showcase her unmatched creativity, captivating performances, and empowering lyrics.",
        "songs": [
          "Pass That Dutch"
        ],
        "count": 1,
        "eras": [
          "1990s"
        ],
        "location": "Portsmouth, Virginia",
        "region": "South"
      },
      {
        "Artist": "Mobb Deep",
        "bio": "Mobb Deep was an American hip-hop duo consisting of Havoc and Prodigy. Emerging in the 1990s, they became synonymous with gritty, street-oriented rap. With albums like 'The Infamous' and 'Hell on Earth', Mobb Deep's music provided a raw and unfiltered depiction of life in the inner city. Their dark and introspective lyrics, combined with haunting production, have left a lasting impact on the rap genre.",
        "songs": [
          "Drink Away the Pain (Situations)",
          "G.O.D. Pt. III",
          "Give Up the Goods (Just Step)",
          "Hell on Earth",
          "Quiet Storm",
          "Shook Ones Pt. II",
          "Survival of the Fittest",
          "Temperature's Rising",
          "The Start of Your Ending (41st Side)",
          "Trife Life"
        ],
        "count": 10,
        "eras": [
          "1990s"
        ],
        "location": "Queensbridge, New York",
        "region": "East"
      },
      {
        "Artist": "Moneybagg Yo",
        "bio": "Moneybagg Yo, born Demario DeWayne White Jr., is an American rapper and songwriter from Memphis, Tennessee. Known for his gritty and authentic style, Moneybagg Yo rose to prominence with his mixtapes and gained mainstream success with his albums. His lyrics often reflect his experiences growing up in a rough environment and touch on topics such as street life, struggle, and personal growth.",
        "songs": [
          "Black Heart",
          "Fed Baby's",
          "Reset",
          "Say Na"
        ],
        "count": 4,
        "eras": [
          "2010+"
        ],
        "location": "Memphis, Tennessee",
        "region": "South"
      },
      {
        "Artist": "Mos Def",
        "bio": "Mos Def, also known as Yasiin Bey, is an American rapper, actor, and activist. Known for his thought-provoking lyrics and conscious approach to hip-hop, he has become a respected figure in the genre. Mos Def's albums like 'Black on Both Sides' and his work with the group Black Star showcase his lyrical prowess and social commentary, solidifying his status as a revered artist.",
        "songs": [
          "Black Radio",
          "Casa Bey",
          "Fear Not of Man",
          "Mathematics",
          "Mr. Nigga",
          "Umi Says"
        ],
        "count": 6,
        "eras": [
          "1990s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "N.W.A.",
        "bio": "N.W.A., which stands for Niggaz Wit Attitudes, was an American hip-hop group known for their provocative and politically charged music. Comprised of Eazy-E, Ice Cube, Dr. Dre, MC Ren, and DJ Yella, they pioneered the gangsta rap subgenre and addressed the realities of life in Compton, California. N.W.A.'s album 'Straight Outta Compton' and their groundbreaking track 'Fuck tha Police' sparked controversy and ignited important conversations about racial inequality and police brutality.",
        "songs": [
          "Express Yourself",
          "F*ck da Police",
          "The Message"
        ],
        "count": 3,
        "eras": [
          "1980s"
        ],
        "location": "Los Angeles, California",
        "region": "West"
      },
      {
        "Artist": "Nas",
        "bio": "Nas, born Nasir bin Olu Dara Jones, is an American rapper and entrepreneur. With his poetic lyricism and introspective storytelling, he has earned widespread acclaim and is regarded as one of the greatest rappers of all time. Nas's debut album 'Illmatic' is considered a hip-hop masterpiece, and his subsequent releases have continued to showcase his lyrical depth and social commentary.",
        "songs": [
          "Black Republican",
          "Daughters",
          "I Can",
          "I Gave You Power",
          "If I Ruled The World",
          "One Love",
          "The World Is Yours"
        ],
        "count": 7,
        "eras": [
          "1990s"
        ],
        "location": "Queensbridge, New York",
        "region": "East"
      },
      {
        "Artist": "Naughty By Nature",
        "bio": "Naughty By Nature is an American hip-hop group known for their energetic and infectious music. Consisting of Treach, Vin Rock, and DJ Kay Gee, they achieved mainstream success with hits like 'O.P.P.' and 'Hip Hop Hooray'. Naughty By Nature's music is characterized by catchy hooks, party anthems, and a blend of rap and R&B influences, making them a beloved and influential act in the rap scene.",
        "songs": [
          "Everything's Gonna Be Alright",
          "Mourn You Til I Join You"
        ],
        "count": 2,
        "eras": [
          "1990s"
        ],
        "location": "East Orange, New Jersey",
        "region": "East"
      },
      {
        "Artist": "NBA Youngboy",
        "bio": "NBA Youngboy, also known as YoungBoy Never Broke Again, is an American rapper and songwriter. He gained significant popularity for his distinct Southern style and emotionally charged lyrics. NBA Youngboy's music often reflects his personal experiences, struggles, and triumphs, making him a relatable figure for many listeners.",
        "songs": [
          "I Am Who They Say I Am",
          "Untouchable",
          "No Smoke",
          "Genie",
          "Akbar",
          "Outside Today"
        ],
        "count": 6,
        "eras": [
          "2010+"
        ],
        "location": "Baton Rouge, Louisiana",
        "region": "South"
      },
      {
        "Artist": "Nice & Smooth",
        "bio": "Nice & Smooth is an American hip-hop duo consisting of Greg Nice and Smooth B. With their smooth flows and playful lyrics, they gained popularity in the 1990s. Nice & Smooth's hits like 'Hip-Hop Junkies' and 'Sometimes I Rhyme Slow' showcased their chemistry and their ability to create catchy and feel-good rap tracks.",
        "songs": [
          "Breakdown",
          "Do Whatcha Gotta",
          "DWYCK",
          "Ghetoo Freaks",
          "Ooh Child",
          "Sometimes I Rhyme Slow"
        ],
        "count": 6,
        "eras": [
          "1980s"
        ],
        "location": "New York, New York",
        "region": "East"
      },
      {
        "Artist": "Nicki Minaj",
        "bio": "Nicki Minaj is a Trinidadian-American rapper, singer, and songwriter. With her distinctive flow, dynamic delivery, and larger-than-life persona, she has become one of the most successful female artists in hip-hop. Nicki Minaj's albums, including 'Pink Friday' and 'The Pinkprint', have spawned numerous chart-topping hits, and her versatility as a rapper and singer has solidified her status as a global superstar.",
        "songs": [
          ""
        ],
        "count": 0,
        "eras": [
          "2000s"
        ],
        "location": "Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Nipsey Hussle",
        "bio": "Nipsey Hussle, born Ermias Asghedom, was an American rapper, entrepreneur, and community activist. Known for his entrepreneurial spirit and dedication to his community, he gained recognition with his mixtapes and his album 'Victory Lap'. Nipsey Hussle's music conveyed his experiences growing up in South Los Angeles, and his commitment to uplifting and empowering his community made him a beloved figure in hip-hop.",
        "songs": [
          "Blue Laces 2",
          "Blue Laces",
          "Dedication",
          "Don't Take Days Off",
          "Loaded Bases",
          "Ocean Views",
          "Racks in the Middle",
          "Roll The Windows Up"
        ],
        "count": 8,
        "eras": [
          "2000s"
        ],
        "location": "Los Angeles, California",
        "region": "West"
      },
      {
        "Artist": "Notorious B.I.G.",
        "bio": "Notorious B.I.G., also known as Biggie Smalls, was an American rapper and songwriter. Regarded as one of the greatest rappers of all time, his impactful career was cut short due to his untimely death. Notorious B.I.G.'s albums, including 'Ready to Die' and 'Life After Death', showcased his storytelling abilities, lyrical prowess, and distinctive flow, solidifying his legacy as a rap legend.",
        "songs": [
          "Sky's the Limit"
        ],
        "count": 1,
        "eras": [
          "1990s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Onyx",
        "bio": "Onyx is an American hip-hop group consisting of Fredro Starr, Sticky Fingaz, Sonny Seeza, and Big DS (deceased). Known for their aggressive and energetic style, they gained recognition with their debut album 'Bacdafucup' and hits like 'Slam'. Onyx's music embodies the rawness of East Coast hardcore rap, and their powerful performances and gritty lyrics have made them influential figures in the genre.",
        "songs": [
          "All We Got is Us",
          "Last Dayz"
        ],
        "count": 2,
        "eras": [
          "1990s"
        ],
        "location": "Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Outkast",
        "bio": "Outkast is an American hip-hop duo consisting of Andre 3000 and Big Boi. Known for their eclectic and innovative approach to rap music, they have pushed boundaries and achieved critical acclaim with albums like 'Aquemini' and 'Speakerboxxx/The Love Below'. Outkast's music blends various genres, including funk, soul, and pop, and their unique style and artistic vision have left an indelible mark on hip-hop.",
        "songs": [
          "Bombs Over Baghdad",
          "Rosa Parks"
        ],
        "count": 2,
        "eras": [
          "1990s"
        ],
        "location": "Atlanta, Georgia",
        "region": "South"
      },
      {
        "Artist": "Public Enemy",
        "bio": "Public Enemy is an American hip-hop group known for their politically charged and socially conscious music. Led by Chuck D and Flava Flav, they emerged in the 1980s as one of the most influential rap groups. Public Enemy's albums like 'It Takes a Nation of Millions to Hold Us Back' and 'Fear of a Black Planet' addressed issues of racial inequality and social injustice, solidifying their status as pioneers of conscious rap.",
        "songs": [
          "911 is a Joke",
          "Fight The Power",
          "Don't Believe The Hype",
          "Black Steel in the Hour of Chaos",
          "Bring the Noise",
          "Can't Truss It",
          "Shut Em Down",
          "Welcome to the Terrordome"
        ],
        "count": 8,
        "eras": [
          "1980s"
        ],
        "location": "Long Island, New York",
        "region": "East"
      },
      {
        "Artist": "Redman",
        "bio": "Redman, born Reggie Noble, is an American rapper, producer, and actor. Known for his witty wordplay, charismatic delivery, and humorous style, he gained recognition as a solo artist and for his collaborations with Method Man. Redman's albums like 'Muddy Waters' and 'Doc's da Name 2000' showcase his unique personality and his ability to craft engaging and entertaining rap music.",
        "songs": [
          "Can't Wait",
          "Dare Iz a Darkside",
          "Sooperman Luva II",
          "Whateva Man"
        ],
        "count": 4,
        "eras": [
          "1990s"
        ],
        "location": "Newark, New Jersey",
        "region": "East"
      },
      {
        "Artist": "Rick Ross",
        "bio": "Rick Ross, born William Leonard Roberts II, is an American rapper and entrepreneur. Known for his deep, authoritative voice and luxurious lifestyle, Ross has gained prominence in the hip-hop industry. He often raps about his experiences as a former drug dealer and his rise to success, while also addressing social and cultural issues in his music. One interesting fact about Rick Ross is that he founded the record label Maybach Music Group.",
        "songs": [
          "Free Mason",
          "Pirates",
          "Rich Forever",
          "Usual Suspects",
          "Valley of Death"
        ],
        "count": 5,
        "eras": [
          "2010+"
        ],
        "location": "Carol City, Florida",
        "region": "South"
      },
      {
        "Artist": "Roxanne Shante",
        "bio": "Roxanne Shante is an American rapper and hip-hop pioneer. Rising to fame in the 1980s, she became known for her response tracks in the Roxanne Wars, a series of diss tracks between different artists. Roxanne Shante's bold and confident persona, coupled with her sharp rhymes and lyrical skill, cemented her as one of the prominent female voices in early hip-hop.",
        "songs": [
          "Go On Girl",
          "Have a Nice Day",
          "Independent Woman",
          "Runaway"
        ],
        "count": 4,
        "eras": [
          "1980s"
        ],
        "location": "Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Run DMC",
        "bio": "Run DMC is an American hip-hop group consisting of Joseph Simmons (Run), Darryl McDaniels (DMC), and Jason Mizell (Jam Master Jay, deceased). Considered one of the pioneering acts of hip-hop, they achieved mainstream success in the 1980s and influenced the rap and rock fusion. Run DMC's hits like 'Walk This Way' and 'It's Tricky' showcased their unique style, blending rap with rock elements and establishing them as cultural icons.",
        "songs": [
          "30 Days",
          "Hard Times",
          "It's Like That",
          "Pause",
          "Proud to be Black",
          "Wake Up"
        ],
        "count": 6,
        "eras": [
          "1980s"
        ],
        "location": "Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Salt-N-Pepa",
        "bio": "Salt-N-Pepa is an American hip-hop group consisting of Cheryl James (Salt), Sandra Denton (Pepa), and Deidra Roper (DJ Spinderella). Known for their empowering lyrics and female-forward approach, they became one of the most successful female rap groups. Salt-N-Pepa's hits like 'Push It' and 'Shoop' broke barriers and opened doors for women in hip-hop, solidifying their status as pioneers and role models.",
        "songs": [
          "Expression",
          "Let's Talk About Sex",
          "None of Your Business",
          "Whatta Man"
        ],
        "count": 4,
        "eras": [
          "1980s"
        ],
        "location": "Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Scarface",
        "bio": "Scarface, born Brad Terrence Jordan, is an American rapper and record producer. As a member of the Geto Boys and through his solo career, he has gained recognition for his introspective lyrics and gritty storytelling. Scarface's albums, including 'The Diary' and 'The Fix', delve into topics like street life, social issues, and personal struggles, showcasing his lyrical depth and authenticity.",
        "songs": [
          "Faith",
          "Goin Down",
          "Guess Who's Back",
          "Hand of the Dead Body",
          "High Note",
          "I Seen a Man Die",
          "In Between Us",
          "Jesse James",
          "Look Me in My Eyes",
          "Mind Playin' Tricks",
          "My Block",
          "Never Seen a Man Cry",
          "No Tears",
          "Now I Feel Ya",
          "Smartz",
          "Smile",
          "The Diary",
          "The White Sheet",
          "What Can I Do"
        ],
        "count": 19,
        "eras": [
          "1980s"
        ],
        "location": "Houston, Texas",
        "region": "South"
      },
      {
        "Artist": "Schoolly D",
        "bio": "Schoolly D, born Jesse Bonds Weaver Jr., is an American rapper and actor known for his influence on gangsta rap. Emerging in the 1980s, he introduced explicit and confrontational lyrics to the genre. Schoolly D's albums like 'Schoolly D' and 'Saturday Night! The Album' established his reputation as one of the pioneers of hardcore rap, and his music reflected the realities of urban life in Philadelphia.",
        "songs": [
          "Am I Black Enough For You"
        ],
        "count": 1,
        "eras": [
          "1980s"
        ],
        "location": "Philadelphia, Pennsylvania",
        "region": "East"
      },
      {
        "Artist": "Sir Mix-a-Lot",
        "bio": "Sir Mix-a-Lot, born Anthony Ray, is an American rapper, producer, and songwriter known for his humorous and catchy music. He gained mainstream success with the hit single 'Baby Got Back', which became a cultural phenomenon. Sir Mix-a-Lot's music combines rap, funk, and pop influences, and his playful and irreverent lyrics have made him a popular figure in hip-hop.",
        "songs": [
          "One Time's Got No Case",
          "Swap Meet Louie"
        ],
        "count": 2,
        "eras": [
          "1980s"
        ],
        "location": "Seattle, Washington",
        "region": "West"
      },
      {
        "Artist": "Slick Rick",
        "bio": "Slick Rick, born Ricky Martin Lloyd Walters, is a British-American rapper and record producer. Known for his storytelling abilities and distinctive delivery, he has been a significant influence on the rap scene. Slick Rick's albums like 'The Great Adventures of Slick Rick' and his storytelling tracks like 'Children's Story' have solidified his status as a rap legend and one of the greatest storytellers in hip-hop.",
        "songs": [
          "A Letter",
          "Children's Story",
          "Hey Young World",
          "Street Talkin",
          "Teenage Love"
        ],
        "count": 5,
        "eras": [
          "1980s"
        ],
        "location": "London, England",
        "region": "East"
      },
      {
        "Artist": "Snoop Dogg",
        "bio": "Calvin Cordozar Broadus Jr., known professionally as Snoop Doggy Dogg, also known as Snoop Dogg, is an American rapper, singer, and actor. With his laid-back delivery and smooth flow, he has become one of the most recognizable and iconic figures in hip-hop. Snoop Dogg's albums, including 'Doggystyle' and 'Doggfather', have achieved commercial success, and his collaborations with various artists have showcased his versatility and longevity in the industry. His smooth flow and distinctive voice have made him a global icon. Snoop's music often reflects the culture and issues of the streets, blending <span class='pir';>gangsta rap with insights on societal problems and personal challenges</span>.",
        "songs": [
          "Murder Was the Case",
          "No Guns Allowed",
          "One Blood, One Cuzz",
          "The Police",
          "This City",
          "Vato"
        ],
        "count": 6,
        "eras": [
          "1990s",
          "2000s",
          "2010+"
        ],
        "location": "Long Beach, California",
        "region": "West"
      },
      {
        "Artist": "Special Ed",
        "bio": "Special Ed, born Edward Archer, is an American rapper and actor known for his intricate rhymes and wordplay. Emerging in the late 1980s, he gained recognition for his hit single 'I Got It Made'. Special Ed's music showcases his lyrical skill and clever punchlines, solidifying his status as a respected lyricist in hip-hop.",
        "songs": [
          "The Mission"
        ],
        "count": 1,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Stetsosonic",
        "bio": "Stetsosonic, also known as Stetsasonic, is an American hip-hop group known for their innovative fusion of live instrumentation and rap. Active in the 1980s and 1990s, they incorporated elements of funk, jazz, and soul into their music. Stetsosonic's albums like 'In Full Gear' and their hit single 'Talkin' All That Jazz' showcased their musicality and social consciousness, making them influential figures in the development of hip-hop.",
        "songs": [
          "A.F.R.I.C.A.",
          "Freedom or Death",
          "In Full Gear",
          "Sally",
          "Talkin' All That Jazz"
        ],
        "count": 5,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Sugar Hill Gang",
        "bio": "Sugar Hill Gang is an American hip-hop group known for their pioneering track 'Rapper's Delight', which is widely regarded as the first commercially successful rap single. Emerging in the late 1970s, they played a significant role in popularizing hip-hop music. Sugar Hill Gang's contributions to the genre have made them cultural icons, and their music continues to be celebrated as a cornerstone of rap history.",
        "songs": [
          ""
        ],
        "count": 0,
        "eras": [
          "1980s"
        ],
        "location": "Englewood, New Jersey",
        "region": "East"
      },
      {
        "Artist": "T.I.",
        "bio": "T.I., born Clifford Joseph Harris Jr., is an American rapper, actor, and entrepreneur. With his charismatic delivery and lyrical prowess, he has become one of the most successful and influential artists in hip-hop. T.I.'s albums like 'Trap Muzik' and 'Paper Trail' have garnered critical acclaim, and his hits like 'Live Your Life' and 'Whatever You Like' have topped the charts, solidifying his status as a rap heavyweight.",
        "songs": [
          "Dead and Gone",
          "Live Your Life",
          "New National Anthem",
          "No Mediocre"
        ],
        "count": 4,
        "eras": [
          "2000s"
        ],
        "location": "Atlanta, Georgia",
        "region": "South"
      },
      {
        "Artist": "Talib Kweli",
        "bio": "Talib Kweli is an American rapper, entrepreneur, and social activist. Known for his conscious and thought-provoking lyrics, he has made a significant impact on the rap scene. Talib Kweli's albums like 'Quality' and his collaborations with artists like Mos Def as part of Black Star have showcased his insightful storytelling and his dedication to addressing social and political issues through his music.",
        "songs": [
          "Black Star",
          "Get By",
          "The Blast",
          "The Proud"
        ],
        "count": 4,
        "eras": [
          "1990s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "The D.O.C.",
        "bio": "The D.O.C., born Tracy Lynn Curry, is an American rapper and songwriter. He gained recognition as a member of the N.W.A. collective and for his solo work. The D.O.C.'s debut album 'No One Can Do It Better' showcased his lyrical skills and smooth flow, but his career was tragically affected by a car accident that damaged his vocal cords. Nevertheless, his contributions to hip-hop continue to be celebrated.",
        "songs": [
          ""
        ],
        "count": 0,
        "eras": [
          "1980s"
        ],
        "location": "Dallas, Texas",
        "region": "South"
      },
      {
        "Artist": "The Roots",
        "bio": "The Roots is an American hip-hop group known for their live instrumentation and eclectic sound. Comprised of Tariq Trotter (Black Thought) and Ahmir Thompson (Questlove), they have redefined the possibilities of hip-hop as a genre. The Roots' albums like 'Things Fall Apart' and 'Phrenology' showcase their musical versatility, poetic lyricism, and their ability to bridge the gap between rap and other genres, earning them critical acclaim and a dedicated fanbase.",
        "songs": [
          "Thought @ Work",
          "What They Do",
          "Don't Say Nuthin'"
        ],
        "count": 3,
        "eras": [
          "1990s"
        ],
        "location": "Philadelphia, Pennsylvania",
        "region": "East"
      },
      {
        "Artist": "Tone Loc",
        "bio": "Tone Loc is an American rapper, actor, and producer. Known for his deep, gravelly voice and laid-back delivery, he achieved commercial success with hits like 'Wild Thing' and 'Funky Cold Medina'. Tone Loc's music embodies the fun and carefree spirit of 1980s and 1990s hip-hop, and his distinctive voice and catchy hooks have made him a memorable figure in the genre.",
        "songs": [
          "All Through the Night",
          "Cheeba Cheeba"
        ],
        "count": 2,
        "eras": [
          "1980s"
        ],
        "location": "Los Angeles, California",
        "region": "West"
      },
      {
        "Artist": "Travis Scott",
        "bio": "Travis Scott, born Jacques Berman Webster II, is an American rapper, singer, and producer. With his atmospheric beats, autotuned vocals, and energetic performances, he has become one of the leading figures in modern hip-hop. Travis Scott's albums like 'Astroworld' and his collaborations with other artists have topped the charts and showcased his ability to push boundaries and create immersive musical experiences.",
        "songs": [
          "90210",
          "Stop trying to be God"
        ],
        "count": 2,
        "eras": [
          "2010+"
        ],
        "location": "Houston, Texas",
        "region": "South"
      },
      {
        "Artist": "Tribe Called Quest",
        "bio": "A Tribe Called Quest is an American hip-hop group known for their unique style and conscious lyrics. Consisting of Q-Tip, Phife Dawg, Ali Shaheed Muhammad, and Jarobi White, they emerged in the 1990s and achieved critical acclaim. A Tribe Called Quest's albums like 'The Low End Theory' and 'Midnight Marauders' blended jazz-infused beats with socially aware rhymes, influencing a generation of artists and solidifying their status as rap legends.",
        "songs": [
          "We The People..."
        ],
        "count": 1,
        "eras": [
          "1990s"
        ],
        "location": "Queens, New York",
        "region": "East"
      },
      {
        "Artist": "Tupac Shakur",
        "bio": "Tupac Shakur, also known as 2Pac, was an American rapper, actor, and activist. Considered one of the greatest and most influential rappers of all time, he addressed social issues and reflected on his personal struggles in his music. Tupac Shakur's albums like 'Me Against the World' and 'All Eyez on Me' showcased his raw talent, poetic lyricism, and powerful delivery, leaving a lasting impact on hip-hop and popular culture.",
        "songs": [
          "Brenda's Got a Baby",
          "Changes",
          "Dear Mama",
          "Ghetto Gospel",
          "Holler If Ya Hear Me",
          "I Wonder If Heaven Got a Ghetto",
          "Keep Ya Head Up",
          "Pain",
          "Trapped",
          "White Man'z World"
        ],
        "count": 10,
        "eras": [
          "1990s"
        ],
        "location": "East Harlem, New York",
        "region": "West"
      },
      {
        "Artist": "UGK",
        "bio": "UGK (Underground Kingz) was a pioneering hip hop duo from Port Arthur, Texas, consisting of Chad 'Pimp C' Butler and Bernard 'Bun B' Freeman. Known for their unique blend of Southern rap and soulful production, UGK gained recognition for their gritty street narratives, honest lyricism, and influential contributions to the Southern hip hop scene. Their music shed light on the struggles and realities faced by marginalized communities, while also addressing themes of love, respect, and cultural identity.",
        "songs": [
          "One Day",
          "Int'l Players Anthem (I Choose You)",
          "Pocket Full of Stones"
        ],
        "count": 3,
        "eras": [
          "1980s"
        ],
        "location": "Port Arthur, Texas",
        "region": "South"
      },
      {
        "Artist": "Ultramagnetic MCs",
        "bio": "Ultramagnetic MCs is an American hip-hop group known for their innovative and experimental approach to rap music. With their eclectic samples, abstract lyrics, and complex rhyme patterns, they pushed the boundaries of the genre. Ultramagnetic MCs' albums like 'Critical Beatdown' and 'Funky' showcased their unique style, and their influence can be heard in the work of many subsequent artists.",
        "songs": [
          "A Chorus Line",
          "Ego Trippin",
          "One Two One Two",
          "Poppa Large",
          "Raise It Up"
        ],
        "count": 5,
        "eras": [
          "1980s"
        ],
        "location": "Bronx, New York",
        "region": "East"
      },
      {
        "Artist": "UTFO",
        "bio": "UTFO, which stands for Untouchable Force Organization, was an American hip-hop group known for their pioneering work in the genre. They gained recognition for their hit single 'Roxanne, Roxanne', which sparked the Roxanne Wars, a series of response tracks from various artists. UTFO's music showcased their charismatic delivery, clever wordplay, and innovative production, making them influential figures in the early days of rap.",
        "songs": [
          "Bad Luck Barry",
          "Lethal",
          "Nothing Cold Will Ever Last",
          "Skeezer",
          "Split Personality",
          "Split Personality II",
          "Take a Chance",
          "The Ride",
          "We're All in the Same Gang",
          "Ya Shoulda Listened"
        ],
        "count": 10,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Whistle",
        "bio": "Whistle is an American hip-hop group known for their energetic and dance-oriented rap music. Active in the 1980s and 1990s, they achieved success with hits like '(Nothing Serious) Just Buggin' and 'Right Next to Me'. Whistle's music combined rap with elements of pop and dance, and their catchy hooks and upbeat vibes made them popular in both the rap and dance music scenes.",
        "songs": [
          ""
        ],
        "count": 0,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "Whodini",
        "bio": "Whodini is an American hip-hop group known for their innovative blend of rap and R&B. With their smooth vocals, catchy hooks, and dynamic stage presence, they gained popularity in the 1980s. Whodini's albums like 'Escape' and 'Back in Black' featured hits like 'Friends' and 'Freaks Come Out at Night', showcasing their versatility and their ability to create infectious and memorable rap songs.",
        "songs": [
          "Be Yourself",
          "Friends",
          "One Love"
        ],
        "count": 3,
        "eras": [
          "1980s"
        ],
        "location": "Brooklyn, New York",
        "region": "East"
      },
      {
        "Artist": "World Famous Supreme Team",
        "bio": "<span class='pir';>The World Famous Supreme Team</span> was a pioneering hip-hop radio show and DJ duo formed by members Andre 'Doctor' Williams and Ronald 'Jazz' Hamilton. Their show aired on WHBI-FM and later on WHBI 105.9 in New York City during the early 1980s. They played a significant role in the early development of hip-hop culture, blending music, comedy, and social commentary. The World Famous Supreme Team was known for their unique and innovative approach to radio, incorporating skits, live performances, and interviews with hip-hop artists, contributing to the growth and popularity of hip-hop in its early stages. </span>",
        "songs": [
          "World Famous"
        ],
        "count": 1,
        "eras": ["1980s"],
        "location": "New York City, NY",
        "region": "East"
      },
      {
        "Artist": "Wu-Tang Clan",
        "bio": "Wu-Tang Clan is an American hip-hop group known for their distinctive sound, intricate lyricism, and extensive collective of talented artists. Comprised of RZA, GZA, Method Man, Raekwon, Ghostface Killah, and others, they emerged in the 1990s as one of the most influential rap groups. Wu-Tang Clan's debut album 'Enter the Wu-Tang (36 Chambers)' and subsequent solo projects have solidified their status as rap legends and cultural icons.",
        "songs": [
          "A Better Tomorrow",
          "C.R.E.A.M.",
          "Can It Be That It Was All So Simple Then",
          "Protect Ya Neck",
          "Triumph"
        ],
        "count": 5,
        "eras": [
          "1990s"
        ],
        "location": "Staten, Island, New York",
        "region": "East"
      },
      {
        "Artist": "XXXTencantion",
        "bio": "XXXTencantion, born Jahseh Dwayne Ricardo Onfroy, was an American rapper, singer, and songwriter. Known for his versatile style and emotionally charged music, he gained popularity in the SoundCloud rap scene. XXXTencantion's albums like '17' and '?' showcased his introspective lyrics, blending genres like hip-hop, rock, and emo. Despite his tragic and untimely death, his impact on the music industry and his dedicated fanbase continue to resonate.",
        "songs": [
          "Changes",
          "Hope",
          "Jocelyn Flores",
          "Sad"
        ],
        "count": 4,
        "eras": [
          "2010+"
        ],
        "location": "Plantation, Florida",
        "region": "South"
      },
      {
        "Artist": "Young Dolph",
        "bio": "Young Dolph, born Adolph Thornton Jr., is an American rapper and entrepreneur. Known for his gritty street tales and confident delivery, he has built a loyal following with his mixtapes and albums. Young Dolph's projects like 'King of Memphis' and 'Role Model' showcase his charismatic personality and his ability to craft hard-hitting and catchy rap tracks that resonate with his audience.",
        "songs": [
          "Death Row",
          "Rich Slave",
          "The Land"
        ],
        "count": 3,
        "eras": [
          "2010+"
        ],
        "location": "Chicago, Illinois",
        "region": "South"
      },
      {
        "Artist": "Young Thug",
        "bio": "Jeffrey Lamar Williams, known as Young Thug, is a versatile and influential hip-hop artist from Atlanta, Georgia. He has made a significant impact on modern hip-hop culture with his unique vocal style and boundary-pushing music. Throughout his career, Young Thug has touched on various social issues, showcased individuality, and challenged traditional norms, making him a socially conscious artist.",
        "songs": [
          "Check",
          "For Ya'll (featuring Jacquees)",
          "Tomorrow Til Infinity"
        ],
        "count": 3,
        "eras": ["2010+"],
        "location": "Atlanta, Georgia",
        "region": "South"
      }      
    ]
  } 


  // changed from biodata to bio_data
  bio_data = {
    "biogs": [
      {
        "Artist": "21 Savage",
        "bio": "21 Savage is a British rapper known for his <i>distinct trap style</i> and introspective lyrics. Born in London, he moved to Atlanta at a young age and emerged as a prominent figure in the hip-hop scene. His music often reflects on his personal experiences, addressing topics like <i>violence</i>, <i>poverty</i>, and <b><span style='color: red';>social injustice</span></b>.",
        "location": ""
      },
      {
        "Artist": "3rd Bass",
        "bio": "3rd Bass was an American hip-hop group known for their witty and socially conscious lyrics. Consisting of MC Serch, Prime Minister Pete Nice, and DJ Richie Rich, they rose to prominence in the late 1980s and early 1990s. Their music often tackled themes of racial inequality, politics, and cultural criticism.",
        "location": ""
      },
      {
        "Artist": "50 Cent",
        "bio": "50 Cent is an American rapper and actor who gained popularity with his debut album 'Get Rich or Die Tryin'.' Born Curtis Jackson, he rose to prominence in the early 2000s with his gritty lyrics and captivating storytelling. Beyond his music career, 50 Cent has ventured into entrepreneurship and acting, showcasing his versatility and business acumen.",
        "location": ""
      },
      {
        "Artist": "Akinyele",
        "bio": "Akinyele is a provocative and controversial Hip Hop artist known for pushing boundaries with his explicit lyrics. His debut album 'Vagina Diner' gained attention for its daring content. Akinyele's music often sparks discussions about societal taboos and challenges traditional norms."
      },
      {
        "Artist": "Beastie Boys",
        "bio": "Beastie Boys were an American rap/rock group known for their energetic performances and genre-blending music. Consisting of Michael Diamond (Mike D), Adam Horovitz (Ad-Rock), and Adam Yauch (MCA), they emerged in the 1980s as pioneers of hip-hop and alternative music fusion. Their influential career spanned decades, leaving an indelible impact on the music industry.",
        "location": ""
      },
      {
        "Artist": "Big Daddy Kane",
        "bio": "Big Daddy Kane is an American rapper and actor known for his smooth delivery and influential contributions to hip-hop. With his charismatic stage presence and intricate wordplay, he became one of the leading figures in the golden age of hip-hop in the late 1980s and early 1990s. His lyrical prowess and suave style influenced generations of artists.",
        "location": ""
      },
      {
        "Artist": "Big Pun",
        "bio": "Big Pun, whose real name was Christopher Rios, was a highly influential Puerto Rican-American rapper known for his exceptional lyricism and impactful storytelling. He left a lasting legacy on the hip-hop community as one of the first Latino rappers to achieve mainstream success. Despite his untimely passing, his contributions to the genre continue to inspire and influence artists to this day."
      },
      {
        "Artist": "Biz Markie",
        "bio": "Biz Markie was an American rapper, beatboxer, and producer known for his humorous and lighthearted style. With his distinctive baritone voice and playful lyrics, he achieved mainstream success in the late 1980s. Biz Markie's contributions to hip-hop extended beyond his music, as he also served as a DJ and appeared in films and TV shows.",
        "location": ""
      },
      {
        "Artist": "Black Eyed Peas",
        "bio": "Black Eyed Peas is an American musical group known for their eclectic blend of hip-hop, pop, and electronic music. Consisting of will.i.am (William James Adams Jr.), apl.de.ap (Allan Pineda Lindo), Taboo (Jaime Luis Gomez), and Fergie (Stacy Ann Ferguson), they achieved global success with their chart-topping hits and infectious energy. The group's music often carries socially conscious messages and promotes positivity and unity.",
        "Location": ""
      },
      {
        "Artist": "Bone Thugs-N-Harmony",
        "bio": "Bone Thugs-N-Harmony is an American hip-hop group known for their melodic harmonies and rapid-fire delivery. Formed in Cleveland, Ohio, they rose to prominence in the 1990s with hits like 'Tha Crossroads' and '1st of tha Month'. Their unique style and introspective lyrics made them influential figures in the rap scene.",
        "location": ""
      },
      {
        "Artist": "Busta Rhymes",
        "bio": "Busta Rhymes is an American rapper, singer, and actor known for his energetic performances and rapid-fire rhymes. With a career spanning several decades, he has released numerous chart-topping hits and collaborated with various artists. Busta Rhymes is celebrated for his dynamic flow and charismatic stage presence.",
        "location": ""
      },
      {
        "Artist": "Canibus",
        "bio": "Canibus is an American rapper known for his intricate wordplay and lyrical depth. Emerging in the late 1990s, he gained attention for his technical skills and thought-provoking verses. Canibus's music often explores complex themes and showcases his intellectual approach to hip-hop.",
        "location": ""
      },
      {
        "Artist": "Cardi B",
        "bio": "Cardi B is an American rapper, songwriter, and actress who rose to fame with her chart-topping debut single 'Bodak Yellow'. Known for her charismatic personality and unapologetic lyrics, she has become one of the most successful female artists in the music industry. Cardi B's bold and confident style has made her a cultural icon.",
        "location": ""
      },
      {
        "Artist": "Chance the Rapper",
        "bio": "Chancelor Bennett, better known by his stage name Chance the Rapper, is an American rapper, singer, songwriter, and record producer. He is known for his eclectic mix of hip hop, gospel, and soul music, as well as his socially conscious lyrics.",
        "location": "Chicago, Illinois"
      },
      {
        "Artist": "Childish Gambino",
        "bio": "Childish Gambino, also known as Donald Glover, is a multi-talented artist who excels in music, acting, writing, and producing. With critically acclaimed albums like 'Awaken, My Love!' and the hit single 'This Is America', he has proven himself as an innovative and socially conscious artist. Childish Gambino's work often explores themes of race, identity, and cultural commentary.",
        "location": ""
      },
      {
        "Artist": "Common",
        "bio": "Common is an American rapper, actor, and activist known for his introspective and socially conscious lyrics. With a career spanning over three decades, he has released acclaimed albums and collaborated with various artists. Common's music often delves into themes of love, self-reflection, and social issues.",
        "location": ""
      },
      {
        "Artist": "Cypress Hill",
        "bio": "Cypress Hill is an American hip-hop group hailing from South Gate, California. Formed in 1988, the group consists of members B-Real, Sen Dog, DJ Muggs, and Eric Bobo. Known for their distinctive sound and lyrical prowess, Cypress Hill emerged as pioneers of West Coast rap, blending elements of hip-hop with funk, rock, and reggae influences.\n\nWith their self-titled debut album released in 1991, Cypress Hill achieved commercial success and critical acclaim. The album featured hits like 'How I Could Just Kill a Man' and 'Hand on the Pump,' showcasing their raw energy, socially conscious lyrics, and signature smoked-out vibe. Over the years, the group has continued to release successful albums, collaborating with various artists and consistently pushing the boundaries of rap music.\n\nBeyond their music, Cypress Hill has been vocal advocates for marijuana legalization and have openly embraced cannabis culture. Their music often explores themes of rebellion, urban life, and the struggles faced by marginalized communities, making them influential figures in the hip-hop community.",
        "location": ""
      },
      {
        "Artist": "De La Soul",
        "bio": "De La Soul is an American hip-hop trio known for their eclectic and innovative approach to rap music. Formed in the late 1980s, they achieved critical acclaim with their debut album '3 Feet High and Rising'. De La Soul's unique sound, blending soulful samples, playful lyrics, and positive vibes, has made them influential figures in alternative hip-hop.",
        "location": ""
      },
      {
        "Artist": "Digital Underground",
        "bio": "Digital Underground was an American hip-hop group known for their innovative and funky sound. Led by Shock G (also known as Humpty Hump), they achieved mainstream success in the 1990s with hits like 'The Humpty Dance' and 'Doowutchyalike'. Digital Underground's music combined elements of funk, soul, and humor, making them influential figures in the hip-hop community.",
        "location": ""
      },
      {
        "Artist": "DJ Jazzy Jeff & The Fresh Prince",
        "bio": "DJ Jazzy Jeff & The Fresh Prince, consisting of DJ Jazzy Jeff (Jeff Townes) and Will Smith, gained popularity in the late 1980s and early 1990s with their upbeat and playful hip-hop sound. Known for their hit singles 'Parents Just Don't Understand' and 'Summertime', they brought a fresh and lighthearted approach to rap music. Their collaboration paved the way for Will Smith's successful acting career.",
        "location": ""
      },
      {
        "Artist": "DMX",
        "bio": "DMX, also known as Dark Man X, was a prominent American rapper and actor. He gained immense popularity in the late 1990s and early 2000s with his intense and raw lyrical style. DMX's music often delved into his <span style='color: red';><b>personal struggles, faith, and the challenges</b></span> faced by the urban community. One of his unique qualities was his ability to deliver heartfelt storytelling through his music.",
        "location": "East"
      },
      {
        "Artist": "Don Trip",
        "bio": "Don Trip (Christopher Donnie Wallace Jr) is a Memphis-based Hip Hop artist known for his introspective lyrics and storytelling abilities. He gained recognition for his mixtapes and collaborations with fellow Memphis rapper Starlito. Don Trip's music often explores personal struggles, street life, and the harsh realities of his environment.",
        "location": "South"
      },
      {
        "Artist": "Doug E. Fresh",
        "bio": "Doug E. Fresh is an American rapper, beatboxer, and producer known for his exceptional beatboxing skills and energetic performances. Often referred to as the 'Human Beatbox', he popularized beatboxing as an art form and influenced generations of artists. With hits like 'The Show' and 'La Di Da Di', Doug E. Fresh contributed significantly to the development of hip-hop culture.",
        "location": ""
      },
      {
        "Artist": "Denzel Curry",
        "bio": "Denzel Curry is an American rapper and songwriter known for his raw and introspective style. Emerging from the underground rap scene, he gained critical acclaim with his album 'TA13OO', which delves into themes of mental health, identity, and social issues. Denzel Curry's powerful delivery and thought-provoking lyrics have solidified his position as one of the most exciting voices in contemporary hip-hop.",
        "location": ""
      },
      {
        "Artist": "DJ Quik",
        "bio": "DJ Quik is an American rapper, record producer, and DJ known for his smooth and funky production style. With his distinctive G-funk sound and laid-back delivery, he became a prominent figure in West Coast hip-hop. DJ Quik's musical versatility and ability to blend different genres have earned him recognition as one of the pioneers of the West Coast rap scene.",
        "location": ""
      },
      {
        "Artist": "Drake",
        "bio": "Drake is a Canadian rapper, singer, songwriter, and actor who has achieved tremendous success in the music industry. With chart-topping hits like 'Hotline Bling', 'God's Plan', and 'In My Feelings', he has become one of the biggest artists of his generation. Known for his introspective lyrics and catchy melodies, Drake has influenced the modern sound of hip-hop and R&B.",
        "location": ""
      },
      {
        "Artist": "El-P",
        "bio": "El-P, whose real name is Jaime Meline, is an American rapper, record producer, and co-founder of the hip-hop collective Company Flow. Known for his complex and politically charged lyrics, El-P is considered one of the pioneers of underground and alternative hip-hop. As a solo artist, he has released critically acclaimed albums such as 'Fantastic Damage' and 'I'll Sleep When You're Dead.' El-P's innovative production style and thought-provoking content have solidified his place as a socially conscious and influential figure in hip-hop. El-P continues to inspire and challenge audiences with his unique approach to music and activism."
      },
      {
        "Artist": "Eminem",
        "bio": "Eminem, also known as Marshall Mathers or Slim Shady, is an American rapper, songwriter, and record producer. With his exceptional lyrical skills, intense delivery, and controversial subject matter, he became one of the most successful and influential artists in hip-hop history. Eminem's albums, including 'The Marshall Mathers LP' and 'The Eminem Show', have garnered critical acclaim and commercial success, solidifying his place as a rap icon.",
        "location": "North"
      },
      {
        "Artist": "EPMD",
        "bio": "EPMD, which stands for Erick and Parrish Making Dollars, is an American hip-hop duo consisting of Erick Sermon and Parrish Smith. They emerged in the late 1980s and gained recognition for their innovative production style and witty lyrics. With hits like 'You Gots to Chill' and 'Strictly Business', EPMD became influential figures in East Coast hip-hop.",
        "location": "East"
      },
      {
        "Artist": "Eric B & Rakim",
        "bio": "Eric B & Rakim were an American hip-hop duo known for their groundbreaking contributions to the genre. Comprised of Eric B (Eric Barrier) as the DJ and Rakim as the MC, they elevated rap music with their intricate lyricism and smooth delivery. Their albums, including 'Paid in Full' and 'Follow the Leader', are regarded as classics in hip-hop history. They emerged in the late 1980s and are known for their innovative and influential contributions to the genre. Rakim's intricate rhyme schemes and smooth flow, combined with Eric B.'s skillful production, revolutionized hip hop and set a new standard for lyricism and musicality. With their <span style='color: red'><b>timeless hits</b></span>, they continue to inspire generations of hip hop artists",
        "location": ""
      },
      {
        "Artist": "Fabolous",
        "bio": "Fabolous, born John David Jackson, is an American rapper and songwriter from Brooklyn, New York. He gained popularity for his smooth delivery and clever wordplay. Fabolous has released several successful albums and is known for his socially conscious and culturally relevant songs.",
        "location": ""
      },
      {
        "Artist": "Fat Boys",
        "bio": "Fat Boys were an American hip-hop trio known for their lighthearted and comedic approach to rap music. Comprised of Prince Markie Dee, Kool Rock-Ski, and Buff Love (formerly known as The Human Beatbox), they achieved mainstream success in the 1980s. With their playful rhymes and beatboxing skills, Fat Boys left a lasting impact on the rap scene.",
        "location": ""
      },
      {
        "Artist": "Fearless Four",
        "bio": "Fearless Four was an American hip-hop group known for their energetic performances and contributions to the early hip-hop movement. Comprised of Great Peso, Devastating Tito, Mighty Mike C, and Krazy Eddie, they emerged in the late 1970s and gained popularity with their dynamic stage shows and rap battles. Fearless Four played a significant role in shaping the foundation of hip-hop culture.",
        "location": ""
      },
      {
        "Artist": "Fugees",
        "bio": "Fugees, comprised of Wyclef Jean, Lauryn Hill, and Pras Michel, were an American hip-hop group known for their fusion of rap, R&B, and reggae. They achieved massive success in the 1990s with their album 'The Score', featuring hits like 'Killing Me Softly' and 'Ready or Not'. The Fugees showcased their diverse talents and conscious lyricism, leaving a lasting impact on the music industry.",
        "location": ""
      },
      {
        "Artist": "Future",
        "bio": "Nayvadius DeMun Wilburn, better known by his stage name Future, is an American rapper, singer, songwriter, and record producer. He is known for his mumble-styled vocals and prolific output, having released a number of mixtapes and albums since his debut in 2010.",
        "location": "Atlanta, Georgia"
      },
      {
        "Artist": "Gang Starr",
        "bio": "Gang Starr was an American hip-hop duo consisting of Guru and DJ Premier. Known for their jazz-influenced production and intelligent lyrics, they became one of the most respected and influential groups in hip-hop. With albums like 'Step in the Arena' and 'Moment of Truth', Gang Starr's music showcased their dedication to the art form and their commitment to preserving the essence of true hip-hop.",
        "location": ""
      },
      {
        "Artist": "Grand Master Flash and the Furious 5",
        "bio": "Grandmaster Flash and the Furious Five were an American hip-hop group known for their pioneering contributions to the genre. Led by Grandmaster Flash, they played a pivotal role in the development of turntablism and were one of the first rap groups to gain mainstream success. With hits like 'The Message' and 'White Lines (Don't Don't Do It)', they addressed social issues and set the stage for future rap artists.",
        "location": ""
      },
      {
        "Artist": "Gunna",
        "bio": "Gunna, also known as Sergio Giavanni Kitchens, is an American rapper and songwriter hailing from Atlanta, Georgia. He gained recognition in the hip hop scene with his melodic style and unique vocal delivery. Gunna has collaborated with various artists and is known for his trap-infused sound and introspective lyrics.",
        "location": ""
      },
      {
        "Artist": "Heavy D & the Boyz",
        "bio": "Heavy D & the Boyz were an American hip-hop group led by rapper Heavy D. Known for their upbeat and danceable tracks, they achieved commercial success in the late 1980s and 1990s. With hits like 'Now That We Found Love' and 'Is It Good to You', Heavy D & the Boyz brought a unique blend of rap, R&B, and dance music to the mainstream.",
        "location": ""
      },
      {
        "Artist": "Ice Cube",
        "bio": "Ice Cube, born O'Shea Jackson, is an American rapper, actor, and filmmaker. As a member of the influential group N.W.A, he played a pivotal role in shaping gangsta rap and addressing social issues in his lyrics. Ice Cube's solo career brought him further success with albums like 'AmeriKKKa's Most Wanted' and 'The Predator'. He has since become a prominent figure in both the music and film industries.",
        "location": ""
      },
      {
        "Artist": "Ice-T",
        "bio": "Ice-T is an American rapper, actor, and producer who has made significant contributions to hip-hop and the entertainment industry. Known for his gritty and raw lyrics, he gained recognition with tracks like '6 in the Mornin' and 'Colors'. Ice-T's versatility as an artist extends to his acting career, where he has starred in various films and television shows.",
        "location": ""
      },
      {
        "Artist": "Jay-Z",
        "bio": "Jay-Z, born Shawn Carter, is an American rapper, songwriter, and entrepreneur. With his exceptional wordplay and business acumen, he has become one of the most successful and influential artists in hip-hop. Jay-Z's albums, including 'The Blueprint' and 'The Black Album', are regarded as classics in the genre. Beyond music, he has ventured into various business endeavors, making him a powerful figure in the entertainment industry.",
        "location": ""
      },
      {
        "Artist": "J-Cole",
        "bio": "J-Cole is an American rapper, singer, and producer known for his introspective lyrics and storytelling abilities. Rising to prominence with his mixtapes and debut album 'Cole World: The Sideline Story', he has since released critically acclaimed projects that tackle social issues and personal experiences. J-Cole's music resonates with audiences for its honesty and thought-provoking content.",
        "location": ""
      },
      {
        "Artist": "Joyner Lucas",
        "bio": "Joyner Lucas is a highly skilled rapper known for his thought-provoking and introspective lyrics. His songs often address social and political issues, shedding light on topics such as racism, mental health, and personal struggles. He uses his music as a platform to spark conversations and create awareness about important societal matters.",
        "location": ""
      },
      {
        "Artist": "Juice Wrld",
        "bio": "Juice Wrld, whose real name is Jarad Higgins, was an American rapper, singer, and songwriter. Known for his melodic style and emotionally raw lyrics, Juice Wrld gained widespread recognition for his ability to seamlessly blend elements of hip hop and rock music. His music often delved into themes of mental health, heartbreak, and the struggles of fame, resonating with a generation of listeners.",
        "location": ""
      },
      {
        "Artist": "Jungle Brothers",
        "bio": "Jungle Brothers are an American hip-hop group known for their eclectic and innovative style. As pioneers of the Native Tongues collective, they infused jazz, funk, and Afrocentric influences into their music. With albums like 'Straight Out the Jungle' and 'Done by the Forces of Nature', Jungle Brothers pushed boundaries and expanded the sonic possibilities of hip-hop.",
        "location": ""
      },
      {
        "Artist": "Just-Ice",
        "bio": "Just-Ice is an American rapper known for his aggressive and powerful delivery. A part of the early hip-hop scene in the 1980s, he gained recognition with his debut album 'Back to the Old School'. Just-Ice's commanding presence and hard-hitting lyrics made him a notable figure in the development of hardcore rap and street-oriented hip-hop.",
        "location": ""
      },
      {
        "Artist": "Kanye West",
        "bio": "Kanye West is an American rapper, producer, and fashion designer known for his innovative and genre-defying music. With critically acclaimed albums like 'The College Dropout', 'Late Registration', and 'My Beautiful Dark Twisted Fantasy', he has established himself as one of the most influential and controversial figures in hip-hop. Kanye West's artistic vision, outspoken personality, and boundary-pushing creativity have left a lasting impact on the music industry.",
        "location": ""
      },
      {
        "Artist": "Kendrick Lamar",
        "bio": "Kendrick Lamar is an American rapper and songwriter hailed for his lyrical prowess and socially conscious themes. With albums like 'good kid, m.A.A.d city', 'To Pimp a Butterfly', and 'DAMN.', he has garnered critical acclaim and commercial success. Kendrick Lamar's thought-provoking lyrics, intricate storytelling, and poetic style have solidified his position as one of the most important voices in modern hip-hop.",
        "location": ""
      },
      {
        "Artist": "Kenny Mason",
        "bio": "Kenny Mason is an American rapper, singer, and songwriter known for his versatile style and introspective lyrics. Blending elements of rap, rock, and alternative music, he has garnered attention for his unique sound and artistic vision. Kenny Mason's music explores personal struggles, societal issues, and existential themes, showcasing his ability to convey depth and emotion through his music.",
        "location": ""
      },
      {
        "Artist": "Kid 'n Play",
        "bio": "Kid 'n Play were an American hip-hop duo consisting of Christopher Reid (Kid) and Christopher Martin (Play). They gained popularity in the late 1980s and early 1990s with their upbeat and playful tracks. Known for their dance moves and comedic chemistry, Kid 'n Play brought a fun and energetic vibe to the rap scene and left a mark on the hip-hop culture of the time.",
        "location": ""
      },
      {
        "Artist": "Killer Mike",
        "bio": "Killer Mike is an American rapper, activist, and entrepreneur known for his socially conscious lyrics and powerful delivery. With his distinctive voice and thought-provoking verses, he has garnered critical acclaim for albums like 'R.A.P. Music' and 'Run the Jewels'. Killer Mike's music addresses systemic issues, political commentary, and personal experiences, making him a prominent voice in contemporary hip-hop.",
        "location": ""
      },
      {
        "Artist": "Kodak Black",
        "bio": "Kodak Black is an American rapper and songwriter known for his raw and emotive style. Rising to prominence with hits like 'Tunnel Vision' and 'Zeze', he has made a significant impact on the trap music scene. Kodak Black's music often reflects his experiences growing up in Florida and tackles themes of street life, struggle, and personal introspection.",
        "location": ""
      },
      {
        "Artist": "Kool Moe Dee",
        "bio": "Kool Moe Dee is an American rapper, actor, and author known for his pioneering contributions to hip-hop. As a member of the influential group Treacherous Three, he helped shape the early rap scene. With solo hits like 'Wild Wild West' and 'How Ya Like Me Now', Kool Moe Dee showcased his confident delivery and intricate rhymes, establishing himself as a rap legend.",
        "location": ""
      },
      {
        "Artist": "KRS-One",
        "bio": "KRS-One, also known as The Teacha, is an American rapper and activist known for his thought-provoking lyrics and socially conscious messages. As a founding member of Boogie Down Productions, he played a crucial role in the development of conscious rap and politically charged hip-hop. KRS-One's music addresses issues such as racism, inequality, and the power of knowledge, making him a respected figure in the genre.",
        "location": ""
      },
      {
        "Artist": "Kurtis Blow",
        "bio": "Kurtis Blow is an American rapper, singer, and record producer who played a significant role in popularizing rap music in the early days of the genre. With hits like 'The Breaks' and 'Basketball', he became one of the first commercially successful rappers. Kurtis Blow's contributions to hip-hop include his charismatic delivery, innovative rhymes, and his role in establishing rap as a viable form of music.",
        "location": ""
      },
      {
        "Artist": "Lauryn Hill",
        "bio": "Lauryn Hill is an American singer, rapper, and songwriter known for her powerful vocals and introspective lyrics. Rising to fame as a member of the Fugees, she achieved critical acclaim with her solo album 'The Miseducation of Lauryn Hill'. Lauryn Hill's music blends elements of hip-hop, soul, and R&B, and her passionate performances have solidified her as one of the most influential artists of her generation.",
        "location": ""
      },
      {
        "Artist": "Lil Boosie",
        "bio": "Nayvadius DeMun Wilburn, better known by his stage name Lil Boosie, is an American rapper, singer, songwriter, and record producer. He is known for his mumble-styled vocals and prolific output, having released a number of mixtapes and albums since his debut in 2010.",
        "location": "Baton Rouge, Louisiana"
      },
      {
        "Artist": "Lil Jon",
        "bio": "Lil Jon, born Jonathan Smith, is a renowned rapper, producer, and DJ. He rose to prominence in the early 2000s with his energetic and infectious crunk sound. Known for his distinctive ad-libs and commanding stage presence, Lil Jon became a key figure in the crunk movement, leaving an indelible mark on hip hop culture. With a string of chart-topping hits and collaborations, he continues to be a celebrated artist in the industry.",
        "location": ""
      },
      {
        "Artist": "Lil Uzi Vert",
        "bio": "Lil Uzi Vert is an American rapper and songwriter known for his unique style and energetic performances. With his melodic flows and introspective lyrics, he has gained popularity with hits like 'XO Tour Llif3' and 'Money Longer'. Lil Uzi Vert's music bridges the gap between rap and rock, showcasing his versatility and pushing the boundaries of contemporary hip-hop.",
        "location": ""
      },
      {
        "Artist": "Lil Wayne",
        "bio": "Lil Wayne, born Dwayne Michael Carter Jr., is an American rapper, singer, and songwriter. With his distinctive voice, rapid-fire delivery, and prolific output, he has become one of the most successful and influential artists in hip-hop. Lil Wayne's albums, including 'Tha Carter III' and 'Tha Carter IV', have received critical acclaim, and his lyrical dexterity and wordplay have solidified his status as a rap icon.",
        "location": ""
      },
      {
        "Artist": "LL Cool J",
        "bio": "LL Cool J, born James Todd Smith, is an American rapper, actor, and entrepreneur. Known for his smooth delivery and charismatic persona, he gained prominence in the 1980s and 1990s with hits like 'I Need Love' and 'Mama Said Knock You Out'. LL Cool J's versatile style and crossover success have made him a legendary figure in hip-hop, and his longevity in the industry is a testament to his talent and versatility.",
        "location": ""
      },
      {
        "Artist": "The Lox",
        "bio": "The Lox is an American hip-hop group consisting of Jadakiss, Styles P, and Sheek Louch. Known for their gritty lyrics and raw delivery, they emerged in the late 1990s as part of the East Coast rap scene. The Lox's music reflects the realities of street life and addresses social issues, showcasing their lyrical skill and capturing the essence of hardcore rap.",
        "location": ""
      },
      {
        "Artist": "Mac Dre",
        "bio": "Mac Dre was a highly influential rapper from Vallejo, California. He played a significant role in popularizing the hyphy movement, a subgenre of hip hop characterized by its energetic and upbeat sound. Mac Dre's music often incorporated witty wordplay, humorous lyrics, and storytelling, which endeared him to his fans. Tragically, he was murdered in 2004, but his legacy continues to inspire artists in the Bay Area and beyond.",
        "location": ""
      },
      {
        "Artist": "Main Source",
        "bio": "Main Source is a legendary hip hop group formed in 1989. Composed of members Large Professor, Sir Scratch, and K-Cut, they are known for their innovative production and thought-provoking lyrics. Their music often addresses social issues and explores the African-American experience."
      },
      {
        "Artist": "MC Shan",
        "bio": "MC Shan (Shawn Moltke) is an American rapper and hip-hop artist known for his contributions to the genre during the 1980s and 1990s. He was a key figure in the early days of hip-hop and gained popularity with his storytelling and lyrical skills. MC Shan's music often addressed <span class='pir'>social issues</span> and <span class='pir'>street life</span>, making him a socially conscious and culturally relevant artist during his era."
      },
      {
        "Artist": "MF DOOM",
        "bio": "MF DOOM, also known as Daniel Dumile, started his career with the group 3rd Bass before embarking on his solo journey. He quickly gained recognition for his highly influential and enigmatic persona in hip hop. With his signature mask and intricate wordplay, he captivated audiences and gained a devoted following. MF DOOM's lyrical prowess and innovative production made him a revered artist in the underground rap scene. His impact on the genre is felt through his thought-provoking lyrics, unique storytelling, and boundary-pushing artistry.",
        "location": ""
      },
      {
        "Artist": "Missy Elliott",
        "bio": "Missy Elliott is an American rapper, singer, songwriter, and producer known for her innovative and boundary-pushing music. With her unique style and futuristic visuals, she has become one of the most influential figures in hip-hop and R&B. Missy Elliott's hits like 'Get Ur Freak On', 'Work It', and 'Lose Control' showcase her unmatched creativity, captivating performances, and empowering lyrics.",
        "location": ""
      },
      {
        "Artist": "Mobb Deep",
        "bio": "Mobb Deep was an American hip-hop duo consisting of Havoc and Prodigy. Emerging in the 1990s, they became synonymous with gritty, street-oriented rap. With albums like 'The Infamous' and 'Hell on Earth', Mobb Deep's music provided a raw and unfiltered depiction of life in the inner city. Their dark and introspective lyrics, combined with haunting production, have left a lasting impact on the rap genre.",
        "location": ""
      },
      {
        "Artist": "Moneybagg Yo",
        "bio": "Moneybagg Yo, born Demario DeWayne White Jr., is an American rapper and songwriter from Memphis, Tennessee. Known for his gritty and authentic style, Moneybagg Yo rose to prominence with his mixtapes and gained mainstream success with his albums. His lyrics often reflect his experiences growing up in a rough environment and touch on topics such as street life, struggle, and personal growth.",
        "location": ""
      },
      {
        "Artist": "Mos Def",
        "bio": "Mos Def, also known as Yasiin Bey, is an American rapper, actor, and activist. Known for his thought-provoking lyrics and conscious approach to hip-hop, he has become a respected figure in the genre. Mos Def's albums like 'Black on Both Sides' and his work with the group Black Star showcase his lyrical prowess and social commentary, solidifying his status as a revered artist.",
        "location": ""
      },
      {
        "Artist": "N.W.A.",
        "bio": "N.W.A., which stands for Niggaz Wit Attitudes, was an American hip-hop group known for their provocative and politically charged music. Comprised of Eazy-E, Ice Cube, Dr. Dre, MC Ren, and DJ Yella, they pioneered the gangsta rap subgenre and addressed the realities of life in Compton, California. N.W.A.'s album 'Straight Outta Compton' and their groundbreaking track 'Fuck tha Police' sparked controversy and ignited important conversations about racial inequality and police brutality.",
        "location": ""
      },
      {
        "Artist": "Nas",
        "bio": "Nas, born Nasir bin Olu Dara Jones, is an American rapper and entrepreneur. With his poetic lyricism and introspective storytelling, he has earned widespread acclaim and is regarded as one of the greatest rappers of all time. Nas's debut album 'Illmatic' is considered a hip-hop masterpiece, and his subsequent releases have continued to showcase his lyrical depth and social commentary.",
        "location": ""
      },
      {
        "Artist": "Naughty By Nature",
        "bio": "Naughty By Nature is an American hip-hop group known for their energetic and infectious music. Consisting of Treach, Vin Rock, and DJ Kay Gee, they achieved mainstream success with hits like 'O.P.P.' and 'Hip Hop Hooray'. Naughty By Nature's music is characterized by catchy hooks, party anthems, and a blend of rap and R&B influences, making them a beloved and influential act in the rap scene.",
        "location": ""
      },
      {
        "Artist": "NBA Youngboy",
        "bio": "NBA Youngboy, also known as YoungBoy Never Broke Again, is an American rapper and songwriter. He gained significant popularity for his distinct Southern style and emotionally charged lyrics. NBA Youngboy's music often reflects his personal experiences, struggles, and triumphs, making him a relatable figure for many listeners.",
        "location": ""
      },
      {
        "Artist": "Nice & Smooth",
        "bio": "Nice & Smooth is an American hip-hop duo consisting of Greg Nice and Smooth B. With their smooth flows and playful lyrics, they gained popularity in the 1990s. Nice & Smooth's hits like 'Hip-Hop Junkies' and 'Sometimes I Rhyme Slow' showcased their chemistry and their ability to create catchy and feel-good rap tracks.",
        "location": ""
      },
      {
        "Artist": "Nicki Minaj",
        "bio": "Nicki Minaj is a Trinidadian-American rapper, singer, and songwriter. With her distinctive flow, dynamic delivery, and larger-than-life persona, she has become one of the most successful female artists in hip-hop. Nicki Minaj's albums, including 'Pink Friday' and 'The Pinkprint', have spawned numerous chart-topping hits, and her versatility as a rapper and singer has solidified her status as a global superstar.",
        "location": ""
      },
      {
        "Artist": "Nipsey Hussle",
        "bio": "Nipsey Hussle, born Ermias Asghedom, was an American rapper, entrepreneur, and community activist. Known for his entrepreneurial spirit and dedication to his community, he gained recognition with his mixtapes and his album 'Victory Lap'. Nipsey Hussle's music conveyed his experiences growing up in South Los Angeles, and his commitment to uplifting and empowering his community made him a beloved figure in hip-hop.",
        "location": ""
      },
      {
        "Artist": "Notorious B.I.G.",
        "bio": "Notorious B.I.G., also known as Biggie Smalls, was an American rapper and songwriter. Regarded as one of the greatest rappers of all time, his impactful career was cut short due to his untimely death. Notorious B.I.G.'s albums, including 'Ready to Die' and 'Life After Death', showcased his storytelling abilities, lyrical prowess, and distinctive flow, solidifying his legacy as a rap legend.",
        "location": ""
      },
      {
        "Artist": "Onyx",
        "bio": "Onyx is an American hip-hop group consisting of Fredro Starr, Sticky Fingaz, Sonny Seeza, and Big DS (deceased). Known for their aggressive and energetic style, they gained recognition with their debut album 'Bacdafucup' and hits like 'Slam'. Onyx's music embodies the rawness of East Coast hardcore rap, and their powerful performances and gritty lyrics have made them influential figures in the genre.",
        "location": ""
      },
      {
        "Artist": "Outkast",
        "bio": "Outkast is an American hip-hop duo consisting of André 3000 and Big Boi. Known for their eclectic and innovative approach to rap music, they have pushed boundaries and achieved critical acclaim with albums like 'Aquemini' and 'Speakerboxxx/The Love Below'. Outkast's music blends various genres, including funk, soul, and pop, and their unique style and artistic vision have left an indelible mark on hip-hop.",
        "location": ""
      },
      {
        "Artist": "Public Enemy",
        "bio": "Public Enemy is an American hip-hop group known for their politically charged and socially conscious music. Led by Chuck D and Flava Flav, they emerged in the 1980s as one of the most influential rap groups. Public Enemy's albums like 'It Takes a Nation of Millions to Hold Us Back' and 'Fear of a Black Planet' addressed issues of racial inequality and social injustice, solidifying their status as pioneers of conscious rap.",
        "location": ""
      },
      {
        "Artist": "Redman",
        "bio": "Redman, born Reggie Noble, is an American rapper, producer, and actor. Known for his witty wordplay, charismatic delivery, and humorous style, he gained recognition as a solo artist and for his collaborations with Method Man. Redman's albums like 'Muddy Waters' and 'Doc's da Name 2000' showcase his unique personality and his ability to craft engaging and entertaining rap music.",
        "location": ""
      },
      {
        "Artist": "Rick Ross",
        "bio": "Rick Ross, born William Leonard Roberts II, is an American rapper and entrepreneur. Known for his deep, authoritative voice and luxurious lifestyle, Ross has gained prominence in the hip-hop industry. He often raps about his experiences as a former drug dealer and his rise to success, while also addressing social and cultural issues in his music. One interesting fact about Rick Ross is that he founded the record label Maybach Music Group.",
        "location": ""
      },      
      {
        "Artist": "Roxanne Shante",
        "bio": "Roxanne Shante is an American rapper and hip-hop pioneer. Rising to fame in the 1980s, she became known for her response tracks in the Roxanne Wars, a series of diss tracks between different artists. Roxanne Shante's bold and confident persona, coupled with her sharp rhymes and lyrical skill, cemented her as one of the prominent female voices in early hip-hop.",
        "location": ""
      },
      {
        "Artist": "Run DMC",
        "bio": "Run DMC is an American hip-hop group consisting of Joseph Simmons (Run), Darryl McDaniels (DMC), and Jason Mizell (Jam Master Jay, deceased). Considered one of the pioneering acts of hip-hop, they achieved mainstream success in the 1980s and influenced the rap and rock fusion. Run DMC's hits like 'Walk This Way' and 'It's Tricky' showcased their unique style, blending rap with rock elements and establishing them as cultural icons.",
        "location": ""
      },
      {
        "Artist": "Salt-N-Pepa",
        "bio": "Salt-N-Pepa is an American hip-hop group consisting of Cheryl James (Salt), Sandra Denton (Pepa), and Deidra Roper (DJ Spinderella). Known for their empowering lyrics and female-forward approach, they became one of the most successful female rap groups. Salt-N-Pepa's hits like 'Push It' and 'Shoop' broke barriers and opened doors for women in hip-hop, solidifying their status as pioneers and role models.",
        "location": ""
      },
      {
        "Artist": "Scarface",
        "bio": "Scarface, born Brad Terrence Jordan, is an American rapper and record producer. As a member of the Geto Boys and through his solo career, he has gained recognition for his introspective lyrics and gritty storytelling. Scarface's albums, including 'The Diary' and 'The Fix', delve into topics like street life, social issues, and personal struggles, showcasing his lyrical depth and authenticity.",
        "location": ""
      },
      {
        "Artist": "Schoolly D",
        "bio": "Schoolly D, born Jesse Bonds Weaver Jr., is an American rapper and actor known for his influence on gangsta rap. Emerging in the 1980s, he introduced explicit and confrontational lyrics to the genre. Schoolly D's albums like 'Schoolly D' and 'Saturday Night! The Album' established his reputation as one of the pioneers of hardcore rap, and his music reflected the realities of urban life in Philadelphia.",
        "location": ""
      },
      {
        "Artist": "Sir Mix-a-Lot",
        "bio": "Sir Mix-a-Lot, born Anthony Ray, is an American rapper, producer, and songwriter known for his humorous and catchy music. He gained mainstream success with the hit single 'Baby Got Back', which became a cultural phenomenon. Sir Mix-a-Lot's music combines rap, funk, and pop influences, and his playful and irreverent lyrics have made him a popular figure in hip-hop.",
        "location": ""
      },
      {
        "Artist": "Slick Rick",
        "bio": "Slick Rick, born Ricky Martin Lloyd Walters, is a British-American rapper and record producer. Known for his storytelling abilities and distinctive delivery, he has been a significant influence on the rap scene. Slick Rick's albums like 'The Great Adventures of Slick Rick' and his storytelling tracks like 'Children's Story' have solidified his status as a rap legend and one of the greatest storytellers in hip-hop.",
        "location": ""
      },
      {
        "Artist": "Snoop Dogg",
        "bio": "Snoop Dogg, also known as Snoop Dogg, is an American rapper, singer, and actor. With his laid-back delivery and smooth flow, he has become one of the most recognizable and iconic figures in hip-hop. Snoop Dogg's albums, including 'Doggystyle' and 'Doggfather', have achieved commercial success, and his collaborations with various artists have showcased his versatility and longevity in the industry.",
        "location": ""
      },
      {
        "Artist": "Special Ed",
        "bio": "Special Ed, born Edward Archer, is an American rapper and actor known for his intricate rhymes and wordplay. Emerging in the late 1980s, he gained recognition for his hit single 'I Got It Made'. Special Ed's music showcases his lyrical skill and clever punchlines, solidifying his status as a respected lyricist in hip-hop.",
        "location": ""
      },
      {
        "Artist": "Stetsosonic",
        "bio": "Stetsosonic, also known as Stetsasonic, is an American hip-hop group known for their innovative fusion of live instrumentation and rap. Active in the 1980s and 1990s, they incorporated elements of funk, jazz, and soul into their music. Stetsosonic's albums like 'In Full Gear' and their hit single 'Talkin' All That Jazz' showcased their musicality and social consciousness, making them influential figures in the development of hip-hop.",
        "location": ""
      },
      {
        "Artist": "Sugar Hill Gang",
        "bio": "Sugar Hill Gang is an American hip-hop group known for their pioneering track 'Rapper's Delight', which is widely regarded as the first commercially successful rap single. Emerging in the late 1970s, they played a significant role in popularizing hip-hop music. Sugar Hill Gang's contributions to the genre have made them cultural icons, and their music continues to be celebrated as a cornerstone of rap history.",
        "location": ""
      },
      {
        "Artist": "T.I.",
        "bio": "T.I., born Clifford Joseph Harris Jr., is an American rapper, actor, and entrepreneur. With his charismatic delivery and lyrical prowess, he has become one of the most successful and influential artists in hip-hop. T.I.'s albums like 'Trap Muzik' and 'Paper Trail' have garnered critical acclaim, and his hits like 'Live Your Life' and 'Whatever You Like' have topped the charts, solidifying his status as a rap heavyweight.",
        "location": ""
      },
      {
        "Artist": "Talib Kweli",
        "bio": "Talib Kweli is an American rapper, entrepreneur, and social activist. Known for his conscious and thought-provoking lyrics, he has made a significant impact on the rap scene. Talib Kweli's albums like 'Quality' and his collaborations with artists like Mos Def as part of Black Star have showcased his insightful storytelling and his dedication to addressing social and political issues through his music.",
        "location": ""
      },
      {
        "Artist": "The D.O.C.",
        "bio": "The D.O.C., born Tracy Lynn Curry, is an American rapper and songwriter. He gained recognition as a member of the N.W.A. collective and for his solo work. The D.O.C.'s debut album 'No One Can Do It Better' showcased his lyrical skills and smooth flow, but his career was tragically affected by a car accident that damaged his vocal cords. Nevertheless, his contributions to hip-hop continue to be celebrated.",
        "location": ""
      },
      {
        "Artist": "The Roots",
        "bio": "The Roots is an American hip-hop group known for their live instrumentation and eclectic sound. Comprised of Tariq Trotter (Black Thought) and Ahmir Thompson (Questlove), they have redefined the possibilities of hip-hop as a genre. The Roots' albums like 'Things Fall Apart' and 'Phrenology' showcase their musical versatility, poetic lyricism, and their ability to bridge the gap between rap and other genres, earning them critical acclaim and a dedicated fanbase.",
        "location": ""
      },
      {
        "Artist": "Tone Loc",
        "bio": "Tone Loc is an American rapper, actor, and producer. Known for his deep, gravelly voice and laid-back delivery, he achieved commercial success with hits like 'Wild Thing' and 'Funky Cold Medina'. Tone Loc's music embodies the fun and carefree spirit of 1980s and 1990s hip-hop, and his distinctive voice and catchy hooks have made him a memorable figure in the genre.",
        "location": ""
      },
      {
        "Artist": "Travis Scott",
        "bio": "Travis Scott, born Jacques Berman Webster II, is an American rapper, singer, and producer. With his atmospheric beats, autotuned vocals, and energetic performances, he has become one of the leading figures in modern hip-hop. Travis Scott's albums like 'Astroworld' and his collaborations with other artists have topped the charts and showcased his ability to push boundaries and create immersive musical experiences.",
        "location": ""
      },
      {
        "Artist": "Tribe Called Quest",
        "bio": "A Tribe Called Quest is an American hip-hop group known for their unique style and conscious lyrics. Consisting of Q-Tip, Phife Dawg, Ali Shaheed Muhammad, and Jarobi White, they emerged in the 1990s and achieved critical acclaim. A Tribe Called Quest's albums like 'The Low End Theory' and 'Midnight Marauders' blended jazz-infused beats with socially aware rhymes, influencing a generation of artists and solidifying their status as rap legends.",
        "location": ""
      },
      {
        "Artist": "Tupac Shakur",
        "bio": "Tupac Shakur, also known as 2Pac, was an American rapper, actor, and activist. Considered one of the greatest and most influential rappers of all time, he addressed social issues and reflected on his personal struggles in his music. Tupac Shakur's albums like 'Me Against the World' and 'All Eyez on Me' showcased his raw talent, poetic lyricism, and powerful delivery, leaving a lasting impact on hip-hop and popular culture.",
        "location": ""
      },
      {
        "Artist": "UGK",
        "bio": "UGK (Underground Kingz) was a pioneering hip hop duo from Port Arthur, Texas, consisting of Chad 'Pimp C' Butler and Bernard 'Bun B' Freeman. Known for their unique blend of Southern rap and soulful production, UGK gained recognition for their gritty street narratives, honest lyricism, and influential contributions to the Southern hip hop scene. Their music shed light on the struggles and realities faced by marginalized communities, while also addressing themes of love, respect, and cultural identity.",
        "location": ""
      },
      {
        "Artist": "Ultramagnetic MCs",
        "bio": "Ultramagnetic MCs is an American hip-hop group known for their innovative and experimental approach to rap music. With their eclectic samples, abstract lyrics, and complex rhyme patterns, they pushed the boundaries of the genre. Ultramagnetic MCs' albums like 'Critical Beatdown' and 'Funky' showcased their unique style, and their influence can be heard in the work of many subsequent artists.",
        "location": ""
      },
      {
        "Artist": "UTFO",
        "bio": "UTFO, which stands for Untouchable Force Organization, was an American hip-hop group known for their pioneering work in the genre. They gained recognition for their hit single 'Roxanne, Roxanne', which sparked the Roxanne Wars, a series of response tracks from various artists. UTFO's music showcased their charismatic delivery, clever wordplay, and innovative production, making them influential figures in the early days of rap.",
        "location": ""
      },
      {
        "Artist": "Whistle",
        "bio": "Whistle is an American hip-hop group known for their energetic and dance-oriented rap music. Active in the 1980s and 1990s, they achieved success with hits like '(Nothing Serious) Just Buggin' and 'Right Next to Me'. Whistle's music combined rap with elements of pop and dance, and their catchy hooks and upbeat vibes made them popular in both the rap and dance music scenes.",
        "location": ""
      },
      {
        "Artist": "Whodini",
        "bio": "Whodini is an American hip-hop group known for their innovative blend of rap and R&B. With their smooth vocals, catchy hooks, and dynamic stage presence, they gained popularity in the 1980s. Whodini's albums like 'Escape' and 'Back in Black' featured hits like 'Friends' and 'Freaks Come Out at Night', showcasing their versatility and their ability to create infectious and memorable rap songs.",
        "location": ""
      },
      {
        "Artist": "Wu-Tang Clan",
        "bio": "Wu-Tang Clan is an American hip-hop group known for their distinctive sound, intricate lyricism, and extensive collective of talented artists. Comprised of RZA, GZA, Method Man, Raekwon, Ghostface Killah, and others, they emerged in the 1990s as one of the most influential rap groups. Wu-Tang Clan's debut album 'Enter the Wu-Tang (36 Chambers)' and subsequent solo projects have solidified their status as rap legends and cultural icons.",
        "location": ""
      },
      {
        "Artist": "XXXTencantion",
        "bio": "XXXTencantion, born Jahseh Dwayne Ricardo Onfroy, was an American rapper, singer, and songwriter. Known for his versatile style and emotionally charged music, he gained popularity in the SoundCloud rap scene. XXXTencantion's albums like '17' and '?' showcased his introspective lyrics, blending genres like hip-hop, rock, and emo. Despite his tragic and untimely death, his impact on the music industry and his dedicated fanbase continue to resonate.",
        "location": ""
      },
      {
        "Artist": "Young Dolph",
        "bio": "Young Dolph, born Adolph Thornton Jr., is an American rapper and entrepreneur. Known for his gritty street tales and confident delivery, he has built a loyal following with his mixtapes and albums. Young Dolph's projects like 'King of Memphis' and 'Role Model' showcase his charismatic personality and his ability to craft hard-hitting and catchy rap tracks that resonate with his audience.",
        "location": ""
      }
    ]
  };


  song_data = {
    "sam_songs": [
        {
            "Song": "A Lot",
            "Reason of Selection": "This song addresses various social issues and personal experiences, including the effects of violence, racism, and the struggle for success.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Violence",
                "#Success",
                "#Loyalty",
                "#LifeOverWealthOrDeath",
                "#Struggles",
                "#Betrayal",
                "#GunViolence"
            ],
            "Overall Theme": "Reflection",
            "artist": "21 Savage",
            "Linked Lyrics": "https://genius.com/21-savage-a-lot-lyrics"
        },
        {
            "Song": "Letter 2 My Momma",
            "Reason of Selection": "This song expresses love, gratitude, and struggles faced by the artist, making it emotionally significant.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Love",
                "#Gratitude",
                "#Motherhood",
                "#Gratitude",
                "#LifeLessons",
                "#Survival",
                "#ParentalGuidance",
                "#HardTimes",
                "#PersonalGrowth",
                "#StreetLife",
                "#MotherlyLove",
                "#Materialism",
                "#LoveAndRespect",
                "#SingleMotherhood",
                "#Education",
                "#Responsibility",
                "#InnerCityLife",
                "#Struggles",
                "#Wisdom"
            ],
            "Overall Theme": "Emotional",
            "artist": "21 Savage",
            "Linked Lyrics": "https://genius.com/21-savage-letter-2-my-momma-lyrics"
        },
        {
            "Song": "Nothing New",
            "Reason of Selection": "This song highlights racial inequalities, police brutality, and the artist's perspective on systemic issues.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#RacialInequality",
                "#PoliceBrutality",
                "#SystemicIssues",
                "#Envy",
                "#DrugDealing",
                "#LossOfFaith",
                "#SchoolDropOut",
                "#DrugUse",
                "#Slavery",
                "#Poverty",
                "#NoFathering",
                "#PoppingPills",
                "#CivilRights",
                "#SystematicRacism"
            ],
            "Overall Theme": "Injustice",
            "artist": "21 Savage",
            "Linked Lyrics": "https://genius.com/21-savage-nothin-new-lyrics"
        },
        {
            "Song": "Derelicts of Dialect",
            "Reason of Selection": "Addresses the marginalization and struggles of underprivileged communities",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#DerelictsofDialect",
                "#SocialInequality",
                "#Empowerment",
                "#Stereotyping"
            ],
            "Overall Theme": "Marginalization and empowerment of underprivileged communities",
            "artist": "3rd Bass",
            "Linked Lyrics": "https://genius.com/3rd-bass-derelicts-of-dialect-lyrics"
        },
        {
            "Song": "The Gas Face",
            "Reason of Selection": "Critiques music industry's exploitation and commercialism in hip hop culture",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#CorruptMusicIndustry",
                "#SocialConsciousness",
                "#BreakingStereotypes", 
                "#ChallengingMyths", 
                "#CulturalAwareness", 
                "#RacialMisconceptions", 
                "#RejectingLabels", 
                "#EmbraceDiversity", 
                "#UnmaskingPrejudice",
                "#CulturalCritique",
                "#SocialEngineering",
                "#DeceptionInIndustry"
            ],
            "Overall Theme": "Music industry exploitation and cultural integrity",
            "artist": "3rd Bass",
            "Linked Lyrics": "https://genius.com/3rd-bass-the-gas-face-lyrics"
        },
        {
            "Song": "No Master Plan No Master Race",
            "Reason of Selection": "Challenges racist ideologies and promotes equality",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
              "#AntiRacism",
              "#BrokenHomes",
              "#CallToAction",
              "#CulturalHeritage",
              "#Diversity",
              "#Empowerment",
              "#Equality",
              "#FightForFreedom",
              "#HumanRights",
              "#Ignorance",
              "#InferiorityComplex",
              "#LoveAndPeace",
              "#NubianPride",
              "#Peace",
              "#PowerStruggles",
              "#Prejudice",
              "#QuestForTruth",
              "#QuestionOfRace",
              "#RacialSeparation",
              "#Respect",
              "#SocialJustice",
              "#SocialStruggle",
              "#SpiritualGuidance",
              "#Strength",
              "#Unity"
            ],
            "Overall Theme": "Anti-racism and equality",
            "artist": "3rd Bass",
            "Linked Lyrics": "https://genius.com/3rd-bass-no-master-plan-no-master-race-lyrics"
        },
        {
            "Song": "No Static at All",
            "Reason of Selection": "Critiques narrow-mindedness and promotes open-mindedness and cultural understanding",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#OpenMindedness",
                "#SelfExpression",
                "#UnityInMusic",
                "#Originality",
                "#EgoAndIdentity",
                "#Transformation",
                "#CreativeEnergy",
                "#CulturalUnderstanding"
            ],
            "Overall Theme": "Challenging prejudices and embracing diversity",
            "artist": "3rd Bass",
            "Linked Lyrics": "https://genius.com/3rd-bass-no-static-at-all-lyrics"
        },
        {
            "Song": "Oval Office",
            "Reason of Selection": "Critiques corrupt political systems and calls for accountability",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PoliticalCritique",
                "#MeetingOfMinds",
                "#Diplomacy",
                "#PeaceAndConflict",
                "#Invasion",
                "#PresidentialPardon",
                "#Rebels",
                "#UrbanCulture",
                "#Accountability"
            ],
            "Overall Theme": "Political critique and accountability",
            "artist": "3rd Bass",
            "Linked Lyrics": "https://genius.com/3rd-bass-oval-office-lyrics"
        },
        {
            "Song": "Pop Goes the Weasel",
            "Reason of Selection": "Critiques mainstream media and promotes critical thinking and authenticity",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#MediaCritique",
                "#ArtisticIntegrity",
                "#CallForChange",
                "#CulturalDiversity",
                "#TruthInMusic",
                "#GoForYours",
                "#Rebellion",
                "#Commercialism",
                "#StrongMindedness",
                "#CritiqueOfPopCulture",
                "#StandAgainstFakes",
                "#Authenticity"
            ],
            "Overall Theme": "Media critique and critical thinking",
            "artist": "3rd Bass",
            "Linked Lyrics": "https://genius.com/3rd-bass-pop-goes-the-weasel-lyrics"
        },
        {
            "Song": "Problem Child",
            "Reason of Selection": "Highlights struggles faced by youth in challenging environments",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#YouthEmpowerment",
                "#JuvenileChallenges",
                "#RecklessBehavior",
                "#ManVsMan",
                "#FalseProsperity",
                "#FakingPlans",
                "#CriminalPretense",
                "#ProblemsOfTheProdigal",
                "#Traitor",
                "#BadSeeds",
                "#JudgmentDay",
                "#WakeUpCall",
                "#LifeFromBehind",
                "#FastLife",
                "#LifeAndDeath",
                "#Decadence",
                "#Survival",
                "#CityPlagues",
                "#SocialChallenges"
            ],
            "Overall Theme": "Youth empowerment and social challenges",
            "artist": "3rd Bass",
            "Linked Lyrics": "https://genius.com/3rd-bass-problem-child-lyrics"
        },
        {
            "Song": "Product of the Environment",
            "Reason of Selection": "Explores the impact of surroundings on personal development, calls for social change",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
              "#AgainstBigotry",
              "#AgainstTheOdds",
              "#CommunityAwareness",
              "#CommunityUnity",
              "#CulturalReality",
              "#HustleAndSurvive",
              "#LifeInTheCity",
              "#PositiveGrowth",
              "#RacialUnity",
              "#RespectAndTalent",
              "#SocialAwareness",
              "#SocialChange",
              "#StreetWisdom",
              "#StrengthInVoice",
              "#UnityInDiversity",
              "#UrbanStruggles",
              "#VoiceOfTheYouth",
              "#YouthCulture"
            ],
            "Overall Theme": "Personal development and social change",
            "artist": "3rd Bass",
            "Linked Lyrics": "https://genius.com/3rd-bass-product-of-the-environment-lyrics"
        },
        {
            "Song": "Hate It Or Love It",
            "Reason of Selection": "This song explores the challenges and dichotomies of life, showcasing resilience and perseverance in the face of adversity.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "No",
            "Keywords": [
                "#Challenges",
                "#Resilience",
                "#Adversity"
            ],
            "Overall Theme": "Dichotomies",
            "artist": "50 Cent",
            "Linked Lyrics": "https://genius.com/The-game-hate-it-or-love-it-lyrics"
        },
        {
          "Song": "30 Days",
          "Reason of Selection": "30 Days sheds light on the realities of life in prison, addressing the hardships, isolation, and loss of freedom experienced by incarcerated individuals. It raises awareness about the impact of the criminal justice system and the need for reform.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#LifeInPrison", "#CriminalJusticeReform"],
          "Overall Theme": "Life in prison and criminal justice reform",
          "artist": "Akinyele",
          "Linked Lyrics": "https://genius.com/Akinyele-30-days-lyrics"
        },
        {
          "Song": "Exercise",
          "Reason of Selection": "Exercise touches upon various themes, including body image, self-acceptance, and societal pressures to conform to certain beauty standards. It encourages listeners to embrace their bodies and promotes a positive message about self-worth.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "No",
          "Keywords": ["#BodyImage", "#SelfAcceptance"],
          "Overall Theme": "Body image and self-acceptance",
          "artist": "Akinyele",
          "Linked Lyrics": "https://genius.com/Akinyele-exercise-lyrics"
        },
        {
          "Song": "Pussy Makes the World Go Round",
          "Reason of Selection": "Despite its provocative title, this song explores the lengths some men might go to in order to gain the affection of a woman. It can serve as a starting point for discussions on unhealthy relationships, gender dynamics, and the objectification of women in society.",
          "Socially Conscious": "No",
          "Culturally Significant": "Yes",
          "Keywords": ["#Relationships", "#GenderDynamics"],
          "Overall Theme": "Unhealthy relationships and gender dynamics",
          "artist": "Akinyele",
          "Linked Lyrics": "https://genius.com/Akinyele-pussy-makes-the-world-go-round-lyrics"
        },
        {
            "Song": "Fight for Your Right (To Party!)",
            "Reason of Selection": "This iconic song is known for its rebellious and party-centric nature, reflecting the youth culture and desire for freedom of expression.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Rebellion",
                "#Party",
                "#Freedom"
            ],
            "Overall Theme": "Youth Culture",
            "artist": "Beastie Boys",
            "Linked Lyrics": "https://genius.com/Beastie-boys-fight-for-your-right-lyrics"
        },
        {
            "Song": "Sabotage",
            "Reason of Selection": "This energetic and aggressive track showcases the Beastie Boys' unique style and attitude, making it culturally significant in the realm of hip-hop and rock fusion.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Energetic",
                "#Aggressive",
                "#Style"
            ],
            "Overall Theme": "Attitude",
            "artist": "Beastie Boys",
            "Linked Lyrics": "https://genius.com/Beastie-boys-sabotage-lyrics"
        },
        {
            "Song": "Word to the Mother",
            "Reason of Selection": "This song showcases Big Daddy Kane's lyrical skills and pays homage to his African-American heritage, highlighting the importance of cultural pride and self-expression.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#LyricalSkills",
                "#Heritage",
                "#CulturalPride"
            ],
            "Overall Theme": "Self-expression",
            "artist": "Big Daddy Kane",
            "Linked Lyrics": "https://genius.com/Big-daddy-kane-word-to-the-mother-lyrics"
        },
        {
            "Song": "Young, Gifted and Black",
            "Reason of Selection": "This empowering song celebrates the achievements and potential of Black individuals, promoting self-confidence and unity within the African-American community.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Empowerment",
                "#BlackAchievement",
                "#Unity"
            ],
            "Overall Theme": "Black Excellence",
            "artist": "Big Daddy Kane",
            "Linked Lyrics": "https://genius.com/Big-daddy-kane-young-gifted-and-black-lyrics"
        },
        {
          "Song": "100%",
          "Reason of Selection": "100% is a socially conscious track where Big Pun addresses his experiences as a Puerto Rican-American, representing his cultural heritage, and breaking down stereotypes about Latinos in hip-hop. The song also touches on issues of identity and representation.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#LatinoPride", "#Identity", "#Representation"],
          "Overall Theme": "Cultural Identity",
          "artist": "Big Pun",
          "Linked Lyrics": "https://genius.com/Big-pun-100-lyrics"
        },
        {
          "Song": "Beware",
          "Reason of Selection": "\"Beware\" showcases Big Pun's storytelling abilities, narrating a cautionary tale of betrayal, deceit, and the consequences of living a life of crime. The song addresses the dangers of street life and the importance of staying vigilant.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#Betrayal", "#CautionaryTale", "#StreetLife"],
          "Overall Theme": "Caution and Consequences",
          "artist": "Big Pun",
          "Linked Lyrics": "https://genius.com/Big-pun-beware-lyrics"
        },
        {
          "Song": "Twinz (Deep Cover '98)",
          "Reason of Selection": "This song is a remix of the classic \"Deep Cover\" by Dr. Dre and Snoop Dogg, and Big Pun's version reflects on the realities of street life, the struggles of growing up in poverty, and the pressure to survive in a hostile environment.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#StreetLife", "#Survival", "#Poverty"],
          "Overall Theme": "Urban Struggles",
          "artist": "Big Pun",
          "Linked Lyrics": "https://genius.com/Big-pun-twinz-deep-cover-98-lyrics"
        },
        {
          "Song": "You Ain't a Killer",
          "Reason of Selection": "\"You Ain't a Killer\" by Big Pun reflects on his struggles and the harsh realities of his environment while emphasizing the importance of resilience and perseverance in the face of adversity. He also criticizes the glamorization of violence in hip-hop.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#Adversity", "#Resilience", "#AntiViolence"],
          "Overall Theme": "Violence and Resilience",
          "artist": "Big Pun",
          "Linked Lyrics": "https://genius.com/Big-pun-you-aint-a-killer-lyrics"
        },
        {
            "Song": "Just Can't Get Enough",
            "Reason of Selection": "This song expresses a deep appreciation for love and highlights the desire for emotional connection, emphasizing the importance of love in our lives.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Love",
                "#EmotionalConnection"
            ],
            "Overall Theme": "Appreciation of Love",
            "artist": "Black Eyed Peas",
            "Linked Lyrics": "https://genius.com/Black-eyed-peas-just-cant-get-enough-lyrics"
        },
        {
            "Song": "Where is the Love",
            "Reason of Selection": "This powerful song addresses social issues, including violence, discrimination, and the need for unity and compassion, encouraging listeners to reflect on the state of the world and promote love and understanding.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SocialIssues",
                "#Unity",
                "#Compassion"
            ],
            "Overall Theme": "Social Awareness",
            "artist": "Black Eyed Peas",
            "Linked Lyrics": "https://genius.com/Black-eyed-peas-where-is-the-love-lyrics"
        },
        {
            "Song": "How Many MC's...",
            "Reason of Selection": "A reflection on the true nature of MCing and Hip-Hop culture.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#HipHopCulture", "#RealMC"],
            "Overall Theme": "Genuine Spirit of Hip-Hop",
            "artist": "Black Moon",
            "Linked Lyrics": "https://genius.com/Black-moon-how-many-mcs-lyrics"
          },
          {
            "Song": "I Got Cha Opin",
            "Reason of Selection": "Talks about authenticity and staying true to oneself.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#Authenticity", "#Realness"],
            "Overall Theme": "Authenticity and Individuality",
            "artist": "Black Moon",
            "Linked Lyrics": "https://genius.com/Black-moon-i-got-cha-opin-lyrics"
          },
          {
            "Song": "Shit Iz Real",
            "Reason of Selection": "Addresses real-life struggles and the harsh realities of the streets.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "No",
            "Keywords": ["#StreetLife", "#Struggle"],
            "Overall Theme": "Street Realities",
            "artist": "Black Moon",
            "Linked Lyrics": "https://genius.com/Black-moon-shit-iz-real-lyrics"
          },
          {
            "Song": "Two Turntables & A Mic",
            "Reason of Selection": "A tribute to the essence of hip-hop, celebrating the foundational tools.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": ["#HipHopEssence", "#Turntablism"],
            "Overall Theme": "Hip-Hop Foundations",
            "artist": "Black Moon",
            "Linked Lyrics": "https://genius.com/Black-moon-two-turntables-and-a-mic-lyrics"
          },
          {
            "Song": "Buck 'Em Down",
            "Reason of Selection": "Encourages empowerment and standing strong against adversity.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#Empowerment", "#Resilience"],
            "Overall Theme": "Resilience and Empowerment",
            "artist": "Black Moon",
            "Linked Lyrics": "https://genius.com/Black-moon-buck-em-down-lyrics"
          },
          {
            "Song": "Reality",
            "Reason of Selection": "Delivers a message about recognizing and dealing with real-life situations.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#Reality", "#SelfAwareness"],
            "Overall Theme": "Recognition of Reality",
            "artist": "Black Moon",
            "Linked Lyrics": "https://genius.com/Black-moon-reality-lyrics"
          },
          {
            "Song": "1st of the Month",
            "Reason of Selection": "This song depicts the struggles faced by individuals living in poverty and the anticipation of receiving government assistance on the first of the month, shedding light on socio-economic challenges.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Poverty",
                "#GovernmentAssistance",
                "#SocioEconomicChallenges"
            ],
            "Overall Theme": "Struggles of Poverty",
            "artist": "Bone Thugs-N-Harmony",
            "Linked Lyrics": "https://genius.com/Bone-thugs-n-harmony-1st-of-the-month-lyrics"
        },
        {
            "Song": "Change the World",
            "Reason of Selection": "This song delivers a powerful message of hope and the desire to bring about positive change in the world, encouraging listeners to take action and make a difference.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Hope",
                "#PositiveChange",
                "#Action"
            ],
            "Overall Theme": "Making a Difference",
            "artist": "Bone Thugs-N-Harmony",
            "Linked Lyrics": "https://genius.com/Bone-thugs-n-harmony-change-the-world-lyrics"
        },
        {
            "Song": "Tha Crossroads",
            "Reason of Selection": "This emotionally charged song pays tribute to loved ones who have passed away, reflecting on mortality, grief, and the hope of being reunited in the afterlife.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Tribute",
                "#Mortality",
                "#Grief"
            ],
            "Overall Theme": "Remembrance",
            "artist": "Bone Thugs-N-Harmony",
            "Linked Lyrics": "https://genius.com/Bone-thugs-n-harmony-tha-crossroads-lyrics"
        },
        {
            "Song": "One",
            "Reason of Selection": "This song conveys a message of unity and encourages listeners to come together and make a positive impact in the world, emphasizing the power of collective action.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Unity",
                "#PositiveImpact",
                "#CollectiveAction"
            ],
            "Overall Theme": "Unity and Positive Action",
            "artist": "Busta Rhymes",
            "Linked Lyrics": "https://genius.com/Busta-rhymes-one-lyrics"
        },
        {
            "Song": "When Disaster Strikes",
            "Reason of Selection": "This song addresses various social issues and highlights the need for resilience and determination in the face of adversity, encouraging listeners to overcome challenges.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SocialIssues",
                "#Resilience",
                "#Adversity"
            ],
            "Overall Theme": "Overcoming Challenges",
            "artist": "Busta Rhymes",
            "Linked Lyrics": "https://genius.com/Busta-rhymes-when-disaster-strikes-lyrics"
        },
        {
            "Song": "Channel Zero",
            "Reason of Selection": "This song showcases Canibus' lyrical prowess and explores various thought-provoking topics, including media manipulation, censorship, and the pursuit of truth.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#LyricalProwess",
                "#MediaManipulation",
                "#Truth"
            ],
            "Overall Theme": "Critical Thinking",
            "artist": "Canibus",
            "Linked Lyrics": "https://genius.com/Canibus-channel-zero-lyrics"
        },
        {
            "Song": "Nigganometry",
            "Reason of Selection": "This song delves into racial inequality, addressing systemic racism and advocating for social justice and equality, encouraging listeners to challenge the status quo.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#RacialInequality",
                "#SystemicRacism",
                "#SocialJustice"
            ],
            "Overall Theme": "Equality and Social Justice",
            "artist": "Canibus",
            "Linked Lyrics": "https://genius.com/Canibus-nigganometry-lyrics"
        },
        {
            "Song": "Yah Know",
            "Reason of Selection": "Celebration of Black culture",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "Black culture",
                "identity",
                "lineage",
                "hope",
                "community",
                "family"
            ],
            "Overall Theme": "Celebration of Black culture",
            "artist": "Chance the Rapper",
            "Linked Lyrics": "https://genius.com/Chance-the-rapper-yah-know-lyrics"
        },
        {
            "Song": "Blessings",
            "Reason of Selection": "Importance of community and family",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "community",
                "family",
                "hope",
                "resilience"
            ],
            "Overall Theme": "Importance of community and family",
            "artist": "Chance the Rapper",
            "Linked Lyrics": "https://genius.com/Chance-the-rapper-blessings-lyrics"
        },
        {
            "Song": "Cocoa Butter Kisses",
            "Reason of Selection": "Nostalgic look at childhood and growing up",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "childhood",
                "growing up",
                "nostalgia",
                "hope",
                "resilience"
            ],
            "Overall Theme": "Nostalgic look at childhood and growing up",
            "artist": "Chance the Rapper",
            "Linked Lyrics": "https://genius.com/Chance-the-rapper-cocoa-butter-kisses-lyrics"
        },
        {
            "Song": "Angels",
            "Reason of Selection": "Hope and resilience in the face of adversity",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "hope",
                "resilience",
                "adversity",
                "faith",
                "#love"
            ],
            "Overall Theme": "Hope and resilience in the face of adversity",
            "artist": "Chance the Rapper",
            "Linked Lyrics": "https://genius.com/Chance-the-rapper-angels-lyrics"
        },
        {
            "Song": "Same Drugs",
            "Reason of Selection": "Mental health and addiction",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#mentalhealth",
                "#addiction",
                "#hope",
                "#recovery",
                "#healing"
            ],
            "Overall Theme": "Mental health and addiction",
            "artist": "Chance the Rapper",
            "Linked Lyrics": "https://genius.com/Chance-the-rapper-same-drugs-lyrics"
        },
        {
            "Song": "How Great Is Our God",
            "Reason of Selection": "Gospel-inspired track about faith and hope",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#faith",
                "#hope",
                "#love",
                "#healing",
                "#resilience"
            ],
            "Overall Theme": "Gospel-inspired track about faith and hope",
            "artist": "Chance the Rapper",
            "Linked Lyrics": "https://genius.com/Chance-the-rapper-how-great-is-our-god-lyrics"
        },
        {
            "Song": "3005",
            "Reason of Selection": "This song combines catchy melodies with introspective lyrics, exploring themes of love, identity, and the passage of time.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#CatchyMelodies",
                "#Love",
                "#Identity"
            ],
            "Overall Theme": "Reflection and Love",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-3005-lyrics"
        },
        {
            "Song": "53.49",
            "Reason of Selection": "This song features dynamic production and thoughtful lyrics, discussing personal growth, relationships, and the pursuit of success.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#DynamicProduction",
                "#PersonalGrowth",
                "#Success"
            ],
            "Overall Theme": "Personal Development",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-5349-lyrics"
        },
        {
            "Song": "Earth: The Oldest Computer (The Last Night)",
            "Reason of Selection": "This song touches on existential themes and societal issues, questioning the role of technology and its impact on humanity.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#ExistentialThemes",
                "#SocietalIssues",
                "#Technology"
            ],
            "Overall Theme": "Humanity and Technology",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-earth:-the-oldest-computer-(the-last-night)-lyrics"
        },
        {
            "Song": "Feels Like Summer",
            "Reason of Selection": "This song reflects on the state of the world and the challenges faced by society, delivering a message of hope and unity amidst difficult times.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#StateOfTheWorld",
                "#Hope",
                "#Unity"
            ],
            "Overall Theme": "Global Issues and Unity",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-feels-like-summer-lyrics"
        },
        {
            "Song": "Life: The Biggest Troll (Andrew Auernheimer)",
            "Reason of Selection": "This song explores themes of self-reflection, social media, and the impact of the internet on modern society.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SelfReflection",
                "#SocialMedia",
                "#Internet"
            ],
            "Overall Theme": "Reflection and Technology",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-life:-the-biggest-troll-(andrew-auernheimer)-lyrics"
        },
        {
            "Song": "Redbone",
            "Reason of Selection": "This soulful track showcases Childish Gambino's versatility and touches on themes of love, relationships, and vulnerability.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Soulful",
                "#Love",
                "#Vulnerability"
            ],
            "Overall Theme": "Love and Relationships",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-redbone-lyrics"
        },
        {
            "Song": "Sweatpants",
            "Reason of Selection": "This high-energy song combines witty lyrics and a catchy beat, discussing themes of success, fame, and social dynamics.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#HighEnergy",
                "#Success",
                "#SocialDynamics"
            ],
            "Overall Theme": "Success and Social Interactions",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-sweatpants-lyrics"
        },
        {
            "Song": "That Power",
            "Reason of Selection": "This introspective track features a spoken-word narrative, delving into personal experiences, growth, and the transition into adulthood.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Introspective",
                "#PersonalExperiences",
                "#Adulthood"
            ],
            "Overall Theme": "Self-Reflection and Coming of Age",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-that-power-lyrics"
        },
        {
            "Song": "This Is America",
            "Reason of Selection": "This groundbreaking song tackles social and political issues in America, addressing gun violence, racial injustice, and the performative nature of popular culture.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SocialIssues",
                "#GunViolence",
                "#RacialInjustice"
            ],
            "Overall Theme": "Social and Political Commentary",
            "artist": "Childish Gambino",
            "Linked Lyrics": "https://genius.com/Childish-gambino-this-is-america-lyrics"
        },
        {
            "Song": "I Used to Love H.E.R.",
            "Reason of Selection": "This song metaphorically personifies hip-hop as a woman, tracing the evolution of the genre and addressing its commercialization and changing values.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#HipHop",
                "#Evolution",
                "#Commercialization"
            ],
            "Overall Theme": "Reflection on Hip-Hop Culture",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-i-used-to-love-her-lyrics"
        },
        {
            "Song": "Letter to the Free",
            "Reason of Selection": "This song addresses social and political issues, discussing mass incarceration, systemic injustice, and the resilience of marginalized communities.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#MassIncarceration",
                "#SystemicInjustice",
                "#Resilience"
            ],
            "Overall Theme": "Social and Political Commentary",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-letter-to-the-free-lyrics"
        },
        {
            "Song": "Retrospect for Life",
            "Reason of Selection": "This introspective song explores the complexities of fatherhood and the importance of responsibility and self-reflection.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Fatherhood",
                "#Responsibility",
                "#SelfReflection"
            ],
            "Overall Theme": "Fatherhood and Self-Reflection",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-retrospect-for-life-lyrics"
        },
        {
            "Song": "Testify",
            "Reason of Selection": "This song tells a gripping story of a man's encounter with the criminal justice system, shedding light on racial profiling and the flaws of the legal system.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#CriminalJusticeSystem",
                "#RacialProfiling",
                "#LegalSystem"
            ],
            "Overall Theme": "Injustice and Legal System",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-testify-lyrics"
        },
        {
            "Song": "The 6th Sense",
            "Reason of Selection": "This song showcases Common's introspective and poetic lyricism, addressing themes of self-awareness, spirituality, and personal growth.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Introspective",
                "#Spirituality",
                "#PersonalGrowth"
            ],
            "Overall Theme": "Self-Awareness and Growth",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-the-6th-sense-lyrics"
        },
        {
            "Song": "The Believer",
            "Reason of Selection": "This powerful song celebrates resilience and determination, promoting self-belief and inspiring listeners to overcome obstacles.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Resilience",
                "#Determination",
                "#SelfBelief"
            ],
            "Overall Theme": "Resilience and Self-Belief",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-the-believer-lyrics"
        },
        {
            "Song": "The Corner",
            "Reason of Selection": "This song depicts the realities of life in the inner city, addressing systemic issues, poverty, and the struggle for survival.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#InnerCity",
                "#SystemicIssues",
                "#Poverty"
            ],
            "Overall Theme": "Life in the Inner City",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-the-corner-lyrics"
        },
        {
            "Song": "The Dreamer",
            "Reason of Selection": "This uplifting song pays homage to dreamers and visionaries, inspiring listeners to pursue their dreams and create positive change in the world.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Dreamers",
                "#Visionaries",
                "#PositiveChange"
            ],
            "Overall Theme": "Dreams and Positive Change",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-the-dreamer-lyrics"
        },
        {
            "Song": "The Food",
            "Reason of Selection": "This collaborative track explores social issues and critiques the state of society, using food as a metaphor to address systemic problems and the need for change.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SocialIssues",
                "#Metaphor",
                "#SystemicProblems"
            ],
            "Overall Theme": "Social Critique and Change",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-the-food-lyrics"
        },
        {
            "Song": "The People",
            "Reason of Selection": "This song speaks to the experiences of marginalized communities, highlighting the importance of unity, self-determination, and social justice.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#MarginalizedCommunities",
                "#Unity",
                "#SocialJustice"
            ],
            "Overall Theme": "Unity and Social Justice",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-the-people-lyrics"
        },
        {
            "Song": "U, Black Maybe",
            "Reason of Selection": "This introspective song delves into the complexities of Black identity and the challenges faced by Black individuals in a society marked by racism and inequality.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BlackIdentity",
                "#Racism",
                "#Inequality"
            ],
            "Overall Theme": "Black Identity and Struggles",
            "artist": "Common",
            "Linked Lyrics": "https://genius.com/Common-u,-black-maybe-lyrics"
        },
        {
            "Song": "Hand On the Pump",
            "Reason of Selection": "This song showcases Cypress Hill's signature West Coast sound and explores themes of street life, gang culture, and self-defense.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#WestCoastSound",
                "#StreetLife",
                "#SelfDefense"
            ],
            "Overall Theme": "Street Life and Self-Defense",
            "artist": "Cypress Hill",
            "Linked Lyrics": "https://genius.com/Cypress-hill-hand-on-the-pump-lyrics"
        },
        {
            "Song": "How I Could Just Kill a Man",
            "Reason of Selection": "This iconic track addresses themes of violence, anger, and frustration, depicting the struggles faced by individuals in their environment.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Violence",
                "#Anger",
                "#Struggles"
            ],
            "Overall Theme": "Struggles and Frustration",
            "artist": "Cypress Hill",
            "Linked Lyrics": "https://genius.com/Cypress-hill-how-i-could-just-kill-a-man-lyrics"
        },
        {
            "Song": "Insane in the Brain",
            "Reason of Selection": "This song became a hip-hop anthem, discussing mental instability, drug use, and the rebellious attitude of Cypress Hill.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#MentalInstability",
                "#DrugUse",
                "#Rebellion"
            ],
            "Overall Theme": "Mental Instability and Rebellion",
            "artist": "Cypress Hill",
            "Linked Lyrics": "https://genius.com/Cypress-hill-insane-in-the-brain-lyrics"
        },
        {
            "Song": "Pigs",
            "Reason of Selection": "This song critiques law enforcement, addressing police brutality and systemic issues within the justice system.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#LawEnforcement",
                "#PoliceBrutality",
                "#SystemicIssues"
            ],
            "Overall Theme": "Police Brutality and Systemic Issues",
            "artist": "Cypress Hill",
            "Linked Lyrics": "https://genius.com/Cypress-hill-pigs-lyrics"
        },
        {
            "Song": "Rise Up",
            "Reason of Selection": "This song delivers a message of empowerment, encouraging individuals to rise above adversity, express their voice, and stand up for their rights.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "No",
            "Keywords": [
                "#Empowerment",
                "#Adversity",
                "#Rights"
            ],
            "Overall Theme": "Empowerment and Resilience",
            "artist": "Cypress Hill",
            "Linked Lyrics": "https://genius.com/Cypress-hill-rise-up-lyrics"
        },
        {
            "Song": "Tequila Sunrise",
            "Reason of Selection": "This song blends elements of hip-hop and Latin influences, providing a party anthem while referencing tequila as a symbol of celebration and enjoyment.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#PartyAnthem",
                "#LatinInfluences",
                "#Celebration"
            ],
            "Overall Theme": "Celebration and Enjoyment",
            "artist": "Cypress Hill",
            "Linked Lyrics": "https://genius.com/Cypress-hill-tequila-sunrise-lyrics"
        },
        {
            "Song": "Ghetto Thang",
            "Reason of Selection": "This song reflects on the struggles and experiences of living in the ghetto, addressing social issues and the challenges faced by marginalized communities.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Ghetto",
                "#SocialIssues",
                "#MarginalizedCommunities"
            ],
            "Overall Theme": "Life in the Ghetto",
            "artist": "De La Soul",
            "Linked Lyrics": "https://genius.com/De-la-soul-ghetto-thang-lyrics"
        },
        {
            "Song": "Itsoweezee (HOT)",
            "Reason of Selection": "This upbeat and energetic track celebrates self-expression and the power of music, encouraging listeners to let loose and enjoy themselves.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#SelfExpression",
                "#Music",
                "#Enjoyment"
            ],
            "Overall Theme": "Celebration and Music",
            "artist": "De La Soul",
            "Linked Lyrics": "https://genius.com/De-la-soul-itzsoweezee-hot-lyrics"
        },
        {
            "Song": "Me, Myself, and I",
            "Reason of Selection": "This iconic song promotes self-acceptance and individuality, encouraging listeners to embrace their unique identities and reject societal pressures.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SelfAcceptance",
                "#Individuality",
                "#RejectSocietalPressures"
            ],
            "Overall Theme": "Self-Acceptance and Individuality",
            "artist": "De La Soul",
            "Linked Lyrics": "https://genius.com/De-la-soul-me-myself-and-i-lyrics"
        },
        {
            "Song": "My Brother's a Basehead",
            "Reason of Selection": "This song addresses drug addiction and its impact on individuals and communities, shedding light on the struggles faced by those affected by substance abuse.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#DrugAddiction",
                "#SubstanceAbuse",
                "#Struggles"
            ],
            "Overall Theme": "Drug Addiction and Struggles",
            "artist": "De La Soul",
            "Linked Lyrics": "https://genius.com/De-la-soul-my-brothers-a-basehead-lyrics"
        },
        {
            "Song": "Say No Go",
            "Reason of Selection": "This song promotes a positive and anti-drug message, advocating for making healthy choices and saying no to harmful substances.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PositiveMessage",
                "#AntiDrug",
                "#HealthyChoices"
            ],
            "Overall Theme": "Anti-Drug Message",
            "artist": "De La Soul",
            "Linked Lyrics": "https://genius.com/De-la-soul-say-no-go-lyrics"
        },
        {
            "Song": "Stakes is High",
            "Reason of Selection": "This socially conscious song critiques the state of hip-hop and society, addressing issues such as materialism, commercialization, and the lack of substance in mainstream music.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#HipHop",
                "#Materialism",
                "#Commercialization"
            ],
            "Overall Theme": "Critique of Hip-Hop and Society",
            "artist": "De La Soul",
            "Linked Lyrics": "https://genius.com/De-la-soul-stakes-is-high-lyrics"
        },
        {
            "Song": "Who Do You Worship",
            "Reason of Selection": "This thought-provoking song questions the values and priorities of individuals and society, encouraging listeners to reflect on their beliefs and the things they hold dear.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Values",
                "#Beliefs",
                "#Reflection"
            ],
            "Overall Theme": "Questioning Values and Beliefs",
            "artist": "De La Soul",
            "Linked Lyrics": "https://genius.com/De-la-soul-who-do-you-worship-lyrics"
        },
        {
            "Song": "No Nose Job",
            "Reason of Selection": "This satirical song criticizes the obsession with physical appearance and the pressure to conform to societal beauty standards.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PhysicalAppearance",
                "#BeautyStandards",
                "#Critique"
            ],
            "Overall Theme": "Societal Beauty Standards",
            "artist": "Digital Underground",
            "Linked Lyrics": "https://genius.com/Digital-underground-no-nose-job-lyrics"
        },
        {
            "Song": "Same Song",
            "Reason of Selection": "This song reflects on social and political issues, discussing topics such as inequality, racism, and the struggles faced by marginalized communities.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SocialIssues",
                "#Inequality",
                "#MarginalizedCommunities"
            ],
            "Overall Theme": "Social and Political Commentary",
            "artist": "Digital Underground",
            "Linked Lyrics": "https://genius.com/Digital-underground-same-song-lyrics"
        },
        {
            "Song": "Tie the Knot",
            "Reason of Selection": "This song humorously depicts the challenges and complexities of romantic relationships, offering a lighthearted take on love and commitment.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#RomanticRelationships",
                "#Love",
                "#Commitment"
            ],
            "Overall Theme": "Love and Relationships",
            "artist": "Digital Underground",
            "Linked Lyrics": "https://genius.com/Digital-underground-tie-the-knot-lyrics"
        },
        {
            "Song": "Parents Just Don't Understand",
            "Reason of Selection": "This lighthearted and humorous song portrays the generation gap and the challenges of communication between parents and teenagers.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#GenerationGap",
                "#Communication",
                "#Humor"
            ],
            "Overall Theme": "Generation Gap and Communication",
            "artist": "DJ Jazzy Jeff & The Fresh Prince",
            "Linked Lyrics": "https://genius.com/Dj-jazzy-jeff-and-the-fresh-prince-parents-just-dont-understand-lyrics"
        },
        {
            "Song": "BLACK BALLOONS",
            "Reason of Selection": "This song addresses themes of materialism, superficiality, and the emptiness that can come with fame and success.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Materialism",
                "#Superficiality",
                "#Fame"
            ],
            "Overall Theme": "Critique of Materialism and Fame",
            "artist": "Denzel Curry",
            "Linked Lyrics": "https://genius.com/Denzel-curry-black-balloons-lyrics"
        },
        {
            "Song": "Clout Cobain",
            "Reason of Selection": "This song critiques the culture of clout-chasing and the pressures faced by artists in the entertainment industry.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#CloutChasing",
                "#EntertainmentIndustry",
                "#Critique"
            ],
            "Overall Theme": "Critique of Clout-Chasing",
            "artist": "Denzel Curry",
            "Linked Lyrics": "https://genius.com/Denzel-curry-clout-cobain-lyrics"
        },
        {
            "Song": "P.A.T.",
            "Reason of Selection": "This song reflects on personal experiences and the challenges faced by Black individuals, addressing themes of racism, police brutality, and social injustice.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Racism",
                "#PoliceBrutality",
                "#SocialInjustice"
            ],
            "Overall Theme": "Racism and Social Injustice",
            "artist": "Denzel Curry",
            "Linked Lyrics": "https://genius.com/Denzel-curry-pat-lyrics"
        },
        {
            "Song": "SIRENS",
            "Reason of Selection": "This politically charged song discusses systemic issues, racial inequality, and the artist's frustration with the state of society.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SystemicIssues",
                "#RacialInequality",
                "#Frustration"
            ],
            "Overall Theme": "Social and Political Commentary",
            "artist": "Denzel Curry",
            "Linked Lyrics": "https://genius.com/Denzel-curry-sirens-lyrics"
        },
        {
            "Song": "Speedboat",
            "Reason of Selection": "This energetic and introspective track reflects on Denzel Curry's journey and the challenges he has faced, emphasizing his resilience and determination.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Journey",
                "#Resilience",
                "#Determination"
            ],
            "Overall Theme": "Personal Journey and Resilience",
            "artist": "Denzel Curry",
            "Linked Lyrics": "https://genius.com/Denzel-curry-speedboat-lyrics"
        },
        {
            "Song": "Ultimate",
            "Reason of Selection": "This high-energy track showcases Denzel Curry's lyrical prowess and his ability to captivate listeners with his powerful delivery.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#LyricalProwess",
                "#PowerfulDelivery",
                "#HighEnergy"
            ],
            "Overall Theme": "Lyrical Skill and Energy",
            "artist": "Denzel Curry",
            "Linked Lyrics": "https://genius.com/Denzel-curry-ultimate-lyrics"
        },
        {
            "Song": "Slippin'",
            "Reason of Selection": "This song addresses DMX's personal struggles and the importance of perseverance and hope.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#Struggles", "#Perseverance"],
            "Overall Theme": "Personal struggles and resilience",
            "artist": "DMX",
            "Linked Lyrics": "https://genius.com/Dmx-Slippin-lyrics"
        },
        {
            "Song": "Stop Being Greedy",
            "Reason of Selection": "\"Stop Being Greedy\" critiques materialism and advocates for a focus on more meaningful pursuits.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "No",
            "Keywords": ["#Materialism", "#Priorities"],
            "Overall Theme": "Critique of materialism",
            "artist": "DMX",
            "Linked Lyrics": "https://genius.com/Dmx-stop-being-greedy-lyrics"
          },
          {
            "Song": "The Omen",
            "Reason of Selection": "This song discusses the influence of dark forces in society and encourages self-reflection.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": ["#SelfReflection", "#DarkForces"],
            "Overall Theme": "Influence of dark forces",
            "artist": "DMX",
            "Linked Lyrics": "https://genius.com/Dmx-the-omen-lyrics"
          },
          {
            "Song": "Where the Hood At",
            "Reason of Selection": "The song sheds light on the realities of inner-city neighborhoods and the issues they face.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#InnerCity", "#Community"],
            "Overall Theme": "Realities of inner-city neighborhoods",
            "artist": "DMX",
            "Linked Lyrics": "https://genius.com/Dmx-where-the-hood-at-lyrics"
          },
          {
            "Song": "Who We Be",
            "Reason of Selection": "\"Who We Be\" highlights the challenges faced by marginalized communities and social injustice.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#SocialJustice", "#Community"],
            "Overall Theme": "Social injustice and marginalized communities",
            "artist": "DMX",
            "Linked Lyrics": "https://genius.com/Dmx-who-we-be-lyrics"
          },
          {
            "Song": "Hold Back Tears",
            "Reason of Selection": "This emotionally powerful song delves into personal struggles, addressing themes of pain, loss, and resilience.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Emotional",
                "#Struggles",
                "#Resilience"
            ],
            "Overall Theme": "Personal Struggles and Resilience",
            "artist": "Don Trip",
            "Linked Lyrics": "https://genius.com/Don-trip-hold-back-tears-lyrics"
        },
        {
            "Song": "Letter to My Son",
            "Reason of Selection": "This heartfelt and introspective song explores the challenges and complexities of fatherhood, expressing love, advice, and guidance to the artist's son.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Fatherhood",
                "#Love",
                "#Guidance"
            ],
            "Overall Theme": "Fatherhood and Guidance",
            "artist": "Don Trip",
            "Linked Lyrics": "https://genius.com/Don-trip-letter-to-my-son-lyrics"
        },
        {
            "Song": "Letter to My Son Part 2",
            "Reason of Selection": "This continuation of the previous song continues to express the artist's love, wisdom, and hopes for his son's future.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Fatherhood",
                "#Love",
                "#Wisdom"
            ],
            "Overall Theme": "Fatherhood and Wisdom",
            "artist": "Don Trip",
            "Linked Lyrics": "https://genius.com/Don-trip-letter-to-my-son-part-2-lyrics"
        },
        {
            "Song": "Prolly",
            "Reason of Selection": "This song reflects on the artist's rise to fame and the challenges that come with success, addressing themes of ambition, determination, and the sacrifices made for a career.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Ambition",
                "#Determination",
                "#Sacrifices"
            ],
            "Overall Theme": "Ambition and Determination",
            "artist": "Don Trip",
            "Linked Lyrics": "https://genius.com/Don-trip-prolly-lyrics"
        },
        {
            "Song": "The Life",
            "Reason of Selection": "This song explores the harsh realities of street life, addressing themes of survival, perseverance, and the consequences of a life immersed in the streets.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#StreetLife",
                "#Survival",
                "#Consequences"
            ],
            "Overall Theme": "Street Life and Survival",
            "artist": "Don Trip",
            "Linked Lyrics": "https://genius.com/Don-trip-the-life-lyrics"
        },
        {
            "Song": "Ain't No Half-Steppin",
            "Reason of Selection": "This influential song showcases Doug E. Fresh's unique vocal style and beatboxing skills. It promotes humility, anti-cursing sentiments, and a message of unity and togetherness with the lyrics 'Old school new school no school rule,' emphasizing the importance of unity across different generations.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Humility",
                "#AntiCursing",
                "#Unity",
                "#Togetherness"
            ],
            "Overall Theme": "Humility, Anti-Cursing, Unity",
            "artist": "Doug E. Fresh",
            "Linked Lyrics": "https://genius.com/Doug-e-fresh-aint-no-half-steppin-lyrics"
        },
        {
            "Song": "Play This Only At Night",
            "Reason of Selection": "This song captures the essence of late-night parties and the vibrant energy of the nightlife scene. It also highlights the changing language dynamics in society, reflecting on how individuals may alter their speech patterns and the impact of such changes.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#LateNightParties",
                "#NightlifeScene",
                "#LanguageDynamics"
            ],
            "Overall Theme": "Nightlife and Language Dynamics",
            "artist": "Doug E. Fresh",
            "Linked Lyrics": "https://genius.com/Doug-e-fresh-play-this-only-at-night-lyrics"
        },
        {
            "Song": "Black Mercedes",
            "Reason of Selection": "This song combines smooth production and storytelling, providing a glimpse into the world of luxury and materialism while addressing themes of success and ambition.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Luxury",
                "#Materialism",
                "#Success"
            ],
            "Overall Theme": "Luxury and Ambition",
            "artist": "DJ Quik",
            "Linked Lyrics": "https://genius.com/Dj-quik-black-mercedes-lyrics"
        },
        {
            "Song": "Fandango",
            "Reason of Selection": "This energetic and upbeat track showcases DJ Quik's musical talent and production skills, creating an infectious party atmosphere.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Energetic",
                "#Upbeat",
                "#Party"
            ],
            "Overall Theme": "Party Atmosphere",
            "artist": "DJ Quik",
            "Linked Lyrics": "https://genius.com/Dj-quik-fandango-lyrics"
        },
        {
            "Song": "Nobody",
            "Reason of Selection": "This song delves into personal experiences and challenges faced by the artist, expressing feelings of isolation and the desire to be recognized for one's talent and contributions.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PersonalExperiences",
                "#Isolation",
                "#Recognition"
            ],
            "Overall Theme": "Isolation and Recognition",
            "artist": "DJ Quik",
            "Linked Lyrics": "https://genius.com/Dj-quik-nobody-lyrics"
        },
        {
            "Song": "Nobody Does It Better",
            "Reason of Selection": "This song highlights DJ Quik's skills and talent as a rapper and producer, emphasizing his unique style and ability to create music that stands out from the rest.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Skills",
                "#Talent",
                "#UniqueStyle"
            ],
            "Overall Theme": "Musical Talent and Unique Style",
            "artist": "DJ Quik",
            "Linked Lyrics": "https://genius.com/Dj-quik-nobody-does-it-better-lyrics"
        },
        {
            "Song": "You'z a Ganxta",
            "Reason of Selection": "This song explores the gangsta lifestyle and the challenges faced by individuals involved in street culture, addressing themes of street credibility, loyalty, and the consequences of living a life of crime.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#GangstaLifestyle",
                "#StreetCredibility",
                "#Consequences"
            ],
            "Overall Theme": "Gangsta Lifestyle and Consequences",
            "artist": "DJ Quik",
            "Linked Lyrics": "https://genius.com/Dj-quik-youz-a-ganxta-lyrics"
        },
        {
            "Song": "Deep Space 9mm",
            "Reason of Selection": "Addresses the consequences of gun violence and the impact it has on individuals and society.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "No",
            "Keywords": ["#GunViolence", "#SocialAwareness"],
            "Overall Theme": "Addressing the consequences of gun violence and promoting social awareness.",
            "artist": "El-P",
            "Linked Lyrics": "https://genius.com/El-p-deep-space-9mm-lyrics"
          },
          {
            "Song": "Stepfather Factory",
            "Reason of Selection": "Critiques the dysfunctional nature of certain societal structures and the effects on individuals.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#SocietalCritique", "#FamilyDynamics"],
            "Overall Theme": "Critiquing societal structures and their impact on family dynamics.",
            "artist": "El-P",
            "Linked Lyrics": "https://genius.com/El-p-stepfather-factory-lyrics"
          },
          {
            "Song": "The Full Retard",
            "Reason of Selection": "Analyzes the struggle to maintain individuality and authenticity in a conformist world.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "No",
            "Keywords": ["#Authenticity", "#Nonconformity"],
            "Overall Theme": "Emphasizing the importance of authenticity and nonconformity.",
            "artist": "El-P",
            "Linked Lyrics": "https://genius.com/El-p-the-full-retard-lyrics"
          },
          {
            "Song": "Drones Over BKLYN",
            "Reason of Selection": "Explores the surveillance state and loss of privacy, raising awareness about government intrusion.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#GovernmentSurveillance", "#PrivacyIssues"],
            "Overall Theme": "Raising awareness about government intrusion and surveillance.",
            "artist": "El-P",
            "Linked Lyrics": "https://genius.com/El-p-drones-over-bklyn-lyrics"
          },
          {
            "Song": "Cancer 4 Cure",
            "Reason of Selection": "Reflects on the impact of corporate greed and the dehumanizing effects of consumerism.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#CorporateGreed", "#Consumerism"],
            "Overall Theme": "Critiquing consumerism and promoting conscious choices.",
            "artist": "El-P",
            "Linked Lyrics": "https://genius.com/El-p-cancer-4-cure-lyrics"
          },
          {
            "Song": "Tasmanian Pain Coaster",
            "Reason of Selection": "Critiques the superficiality of modern culture and its role in perpetuating societal issues.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#SuperficialCulture", "#SocietalIssues"],
            "Overall Theme": "Critiquing modern culture and its impact on societal issues.",
            "artist": "El-P",
            "Linked Lyrics": "https://genius.com/El-p-tasmanian-pain-coaster-lyrics"
          },
          {
            "Song": "Lose Yourself",
            "Reason of Selection": "This iconic song is an anthem of determination, self-belief, and overcoming obstacles. It tells the story of a character navigating through challenging circumstances, using vivid imagery like 'his arms,' 'his mom's spaghetti,' and more. It captures the raw emotions and struggles individuals face in pursuit of their dreams.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Determination",
                "#SelfBelief",
                "#OvercomingObstacles",
                "#RawEmotions"
            ],
            "Overall Theme": "Determination, Self-Belief, and Overcoming Struggles",
            "artist": "Eminem",
            "Linked Lyrics": "https://genius.com/Eminem-lose-yourself-lyrics"
        },
        {
            "Song": "Not Afraid",
            "Reason of Selection": "This uplifting and introspective track emphasizes self-empowerment, resilience, and overcoming personal struggles. It encourages listeners to face their fears and rise above adversity.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SelfEmpowerment",
                "#Resilience",
                "#OvercomingStruggles"
            ],
            "Overall Theme": "Self-Empowerment and Resilience",
            "artist": "Eminem",
            "Linked Lyrics": "https://genius.com/Eminem-not-afraid-lyrics"
        },
        {
            "Song": "Stan",
            "Reason of Selection": "This song tells a chilling story of an obsessive fan, highlighting themes of celebrity worship, mental health, and the consequences of obsession. It offers a critique of the dangers of celebrity culture.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#CelebrityWorship",
                "#MentalHealth",
                "#Critique"
            ],
            "Overall Theme": "Celebrity Culture and Mental Health",
            "artist": "Eminem",
            "Linked Lyrics": "https://genius.com/Eminem-stan-lyrics"
        },
        {
            "Song": "Toy Soldier",
            "Reason of Selection": "This song reflects on the harsh realities of war and the emotional toll it takes on soldiers. It addresses themes of sacrifice, loss, and the impact of war on individuals and society.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#War",
                "#Sacrifice",
                "#EmotionalImpact"
            ],
            "Overall Theme": "War and Emotional Impact",
            "artist": "Eminem",
            "Linked Lyrics": "https://genius.com/Eminem-toy-soldier-lyrics"
        },
        {
            "Song": "White America",
            "Reason of Selection": "This politically charged song addresses Eminem's position in the music industry as a white rapper and explores themes of cultural appropriation, racial dynamics, and the influence of media on society.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#CulturalAppropriation",
                "#RacialDynamics",
                "#MediaInfluence"
            ],
            "Overall Theme": "Race and Media Influence",
            "artist": "Eminem",
            "Linked Lyrics": "https://genius.com/Eminem-white-america-lyrics"
        },
        {
            "Song": "Crossover",
            "Reason of Selection": "This song explores the commercialization and mainstream appeal of hip-hop, addressing the shift from the underground to the mainstream. It reflects on the challenges and compromises artists face when crossing over to a broader audience.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Commercialization",
                "#MainstreamAppeal",
                "#Challenges"
            ],
            "Overall Theme": "Commercialization and Mainstream",
            "artist": "EPMD",
            "Linked Lyrics": "https://genius.com/Epmd-crossover-lyrics"
        },
        {
            "Song": "You Gots to Chill",
            "Reason of Selection": "This track showcases EPMD's signature sound and style. Beyond its laid-back and confident demeanor, the song carries a deeper meaning. It serves as a reminder to stay composed and focused amidst the chaos and challenges of life. It emphasizes the importance of maintaining inner peace and not allowing external factors to disturb one's tranquility.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#SignatureSound",
                "#Composure",
                "#InnerPeace"
            ],
            "Overall Theme": "Composure and Inner Peace",
            "artist": "EPMD",
            "Linked Lyrics": "https://genius.com/Epmd-you-gots-to-chill-lyrics"
        },
        {
            "Song": "Don't Sweat the Technique",
            "Reason of Selection": "This song promotes the value of honing one's skills and focusing on the artistry of hip hop. It emphasizes the importance of creativity, originality, and dedication to the craft.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": ["#DontSweatTheTechnique", "#Artistry", "#Originality"],
            "Overall Theme": "Skill development and artistic expression",
            "artist": "Eric B & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-dont-sweat-the-technique-lyrics"
          },
          {
            "Song": "Follow the Leader",
            "Reason of Selection": "This track is a powerful display of Rakim's storytelling abilities and intelligent rhymes. It emphasizes the importance of leadership, knowledge, and setting a positive example.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#FollowTheLeader", "#Knowledge", "#Inspiration", "#war", "#SelfEsteem", "#Imaginational", "#LifeEternal", "#WorthMoreThanASlave"],
            "Overall Theme": "Leadership and knowledge",
            "artist": "Eric B & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-follow-the-leader-lyrics"
          },
          {
            "Song": "In the Ghetto",
            "Reason of Selection": "This song sheds light on the struggles and hardships faced by individuals living in impoverished neighborhoods. It addresses social inequality and calls for empathy and understanding towards those living in underprivileged conditions.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Struggles",
                "#Hardships",
                "#SocialInequality"
            ],
            "Overall Theme": "Poverty and Social Inequality",
            "artist": "Eric B & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-in-the-ghetto-lyrics"
        },
        {
            "Song": "Mahogany",
            "Reason of Selection": "This track showcases Eric B & Rakim's lyrical prowess and storytelling abilities. It tells a narrative of street life and its consequences, highlighting the challenges and dangers associated with that lifestyle.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#StreetLife",
                "#Consequences",
                "#Narrative"
            ],
            "Overall Theme": "Street Life and Consequences",
            "artist": "Eric B & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-mahogany-lyrics"
        },
        {
            "Song": "Microphone Fiend",
            "Reason of Selection": "Microphone Fiend delves into the passion and dedication Rakim has for his craft. It highlights the transformative power of music and the impact it can have on individuals and society.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#MicrophoneFiend", "#Passion", "#Influence"],
            "Overall Theme": "Transformative power of music",
            "artist": "Eric B & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-microphone-fiend-lyrics"
          },
          {
            "Song": "Paid in Full",
            "Reason of Selection": "This song is a hip hop classic that showcases Rakim's lyrical prowess and clever wordplay. It explores themes of economic struggles, materialism, and the pursuit of success.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#PaidInFull", "#Lyricism", "#Success"],
            "Overall Theme": "Economic struggles and the pursuit of success",
            "artist": "Eric B & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-paid-in-full-lyrics"
          },
          {
            "Song": "Teach the Children",
            "Reason of Selection": "This song emphasizes the importance of educating and empowering the younger generation. It encourages listeners to pass on knowledge, wisdom, and positive values to the children, promoting personal growth and social progress.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Education",
                "#Empowerment",
                "#PositiveValues"
            ],
            "Overall Theme": "Education and Empowerment",
            "artist": "Eric B & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-teach-the-children-lyrics"
        },
        {
            "Song": "My Time",
            "Reason of Selection": "This song is an anthem of self-confidence, determination, and success. It encourages listeners to seize the moment and make the most of their time, showcasing Fabolous' ambition and drive.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#SelfConfidence",
                "#Determination",
                "#Success"
            ],
            "Overall Theme": "Self-Confidence and Ambition",
            "artist": "Fabolous",
            "Linked Lyrics": "https://genius.com/Fabolous-my-time-lyrics"
        },
        {
            "Song": "Breathe",
            "Reason of Selection": "This track showcases Fabolous' lyrical skills and wordplay. It delivers a raw and energetic flow, capturing the essence of the competitive nature of hip-hop and asserting Fabolous' prowess as a rapper.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#LyricalSkills",
                "#Wordplay",
                "#CompetitiveNature"
            ],
            "Overall Theme": "Lyrical Skills and Rap Competitiveness",
            "artist": "Fabolous",
            "Linked Lyrics": "https://genius.com/Fabolous-breathe-lyrics"
        },
        {
            "Song": "Life Is So Exciting",
            "Reason of Selection": "This song celebrates the excitement and thrill of living life to the fullest. It conveys a sense of optimism and enjoyment, urging listeners to embrace the exhilarating moments and make the most of every experience.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Excitement",
                "#Optimism",
                "#Enjoyment"
            ],
            "Overall Theme": "Celebration of Life's Excitement",
            "artist": "Fabolous",
            "Linked Lyrics": "https://genius.com/Fabolous-life-is-so-exciting-lyrics"
        },
        {
            "Song": "Big & Beautiful",
            "Reason of Selection": "This song promotes body positivity and self-acceptance. It challenges societal beauty standards and encourages listeners to embrace their uniqueness and feel confident in their own skin.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BodyPositivity",
                "#SelfAcceptance",
                "#Uniqueness"
            ],
            "Overall Theme": "Body Positivity and Self-Confidence",
            "artist": "Fat Boys",
            "Linked Lyrics": "https://genius.com/Fat-boys-big--and--beautiful-lyrics"
        },
        {
            "Song": "Don't Be Stupid",
            "Reason of Selection": "This track delivers a lighthearted and humorous message, urging listeners not to make foolish decisions. It uses playful lyrics and comedic elements to convey a moral lesson in an entertaining way.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Humorous",
                "#MoralLesson",
                "#Entertaining"
            ],
            "Overall Theme": "Lighthearted Entertainment",
            "artist": "Fat Boys",
            "Linked Lyrics": "https://genius.com/Fat-boys-dont-be-stupid-lyrics"
        },
        {
            "Song": "Jailhouse Rap",
            "Reason of Selection": "This song tells a story set in a jailhouse environment, addressing the challenges and experiences of incarcerated individuals. It sheds light on the realities of prison life and offers a glimpse into the struggles faced by those behind bars.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PrisonLife",
                "#Incarceration",
                "#Struggles"
            ],
            "Overall Theme": "Prison Life and Struggles",
            "artist": "Fat Boys",
            "Linked Lyrics": "https://genius.com/Fat-boys-jailhouse-rap-lyrics"
        },
        {
            "Song": "Protect Yourself / My Nuts",
            "Reason of Selection": "This song delivers a humorous message about the importance of practicing safe sex and protecting oneself from the risks of sexually transmitted infections. It uses comedic elements to convey a serious health message.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SafeSex",
                "#SexualHealth",
                "#Humorous"
            ],
            "Overall Theme": "Safe Sex and Sexual Health",
            "artist": "Fat Boys",
            "Linked Lyrics": "https://genius.com/Fat-boys-protect-yourself-/-my-nuts-lyrics"
        },
        {
            "Song": "The Fat Boys at Forty",
            "Reason of Selection": "This track reflects on the group's journey and experiences as they reach the age of forty. It explores themes of aging, wisdom, and the evolution of their music and careers over time.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Aging",
                "#Wisdom",
                "#MusicalEvolution"
            ],
            "Overall Theme": "Reflection on Aging and Music",
            "artist": "Fat Boys",
            "Linked Lyrics": "https://genius.com/Fat-boys-the-fat-boys-at-forty-lyrics"
        },
        {
            "Song": "Problems of the World Today",
            "Reason of Selection": "This song addresses a wide range of pressing social issues, including domestic violence, education, unemployment, adultery, jealousy, child abuse, and kleptomania. It raises awareness about these problems and calls for action and change.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#DomesticViolence",
                "#Education",
                "#Unemployment",
                "#Adultery",
                "#Jealousy",
                "#ChildAbuse",
                "#Kleptomania",
                "#SocialIssues",
                "#Awareness"
            ],
            "Overall Theme": "Pressing Social Issues",
            "artist": "Fearless Four",
            "Linked Lyrics": "https://genius.com/Fearless-four-problems-of-the-world-today-lyrics"
        },
        {
            "Song": "Family Business",
            "Reason of Selection": "This song reflects on the importance of family and the challenges faced within familial relationships. It explores themes of unity, loyalty, and the complexities of family dynamics.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Family",
                "#Unity",
                "#FamilyDynamics"
            ],
            "Overall Theme": "Family and Relationships",
            "artist": "Fugees",
            "Linked Lyrics": "https://genius.com/Fugees-family-business-lyrics"
        },
        {
            "Song": "Fugee-La",
            "Reason of Selection": "This track showcases the Fugees' unique style and their ability to blend different musical genres. It represents the group's fusion of hip-hop, reggae, and soul, capturing their diverse musical influences.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#UniqueStyle",
                "#MusicalFusion",
                "#DiverseInfluences"
            ],
            "Overall Theme": "Musical Fusion and Diversity",
            "artist": "Fugees",
            "Linked Lyrics": "https://genius.com/Fugees-fugee-la-lyrics"
        },
        {
            "Song": "Ghetto Misfortunes Wealth",
            "Reason of Selection": "This song highlights the challenges and struggles faced by individuals growing up in impoverished neighborhoods. It sheds light on the disparities and hardships experienced in ghetto communities, addressing social and economic inequalities.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Poverty",
                "#Inequality",
                "#GhettoStruggles"
            ],
            "Overall Theme": "Poverty and Social Inequality",
            "artist": "Fugees",
            "Linked Lyrics": "https://genius.com/Fugees-ghetto-misfortunes-wealth-lyrics"
        },
        {
            "Song": "Ready or Not",
            "Reason of Selection": "This popular song blends elements of hip-hop, reggae, and R&B. It showcases the Fugees' skillful delivery and incorporates powerful lyrics that touch on themes of resilience, determination, and being prepared for life's challenges.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Resilience",
                "#Determination",
                "#LifeChallenges"
            ],
            "Overall Theme": "Resilience and Determination",
            "artist": "Fugees",
            "Linked Lyrics": "https://genius.com/Fugees-ready-or-not-lyrics"
        },
        {
            "Song": "Temple",
            "Reason of Selection": "This song delves into the concept of the human body as a temple and explores spiritual themes. It encourages listeners to embrace their inner spirituality, seek self-discovery, and find solace and enlightenment within themselves.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Spirituality",
                "#SelfDiscovery",
                "#Enlightenment"
            ],
            "Overall Theme": "Spirituality and Self-Discovery",
            "artist": "Fugees",
            "Linked Lyrics": "https://genius.com/Fugees-temple-lyrics"
        },
        {
            "Song": "The Mask",
            "Reason of Selection": "This song metaphorically discusses the idea of wearing masks and the facades people put on to hide their true selves. It touches on themes of authenticity, self-expression, and the challenges of revealing one's true identity.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Authenticity",
                "#SelfExpression",
                "#Identity"
            ],
            "Overall Theme": "Authenticity and Self-Identity",
            "artist": "Fugees",
            "Linked Lyrics": "https://genius.com/Fugees-the-mask-lyrics"
        },
        {
            "Song": "The Score",
            "Reason of Selection": "This title track from the Fugees' album 'The Score' showcases their artistic prowess and lyrical skills. It represents their collective effort to make a mark in the music industry and achieve success through their unique blend of hip-hop, soul, and reggae.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#ArtisticProwess",
                "#LyricalSkills",
                "#UniqueBlend"
            ],
            "Overall Theme": "Artistry and Musical Success",
            "artist": "Fugees",
            "Linked Lyrics": "https://genius.com/Fugees-the-score-lyrics"
        },
        {
            "Song": "Vocab",
            "Reason of Selection": "This track displays the Fugees' wordplay and lyrical abilities. It serves as a showcase of their verbal dexterity and mastery of language.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Wordplay",
                "#LyricalAbilities",
                "#VerbalDexterity"
            ],
            "Overall Theme": "Wordplay and Verbal Skills",
            "artist": "Fugees",
            "Linked Lyrics": "https://genius.com/Fugees-vocab-lyrics"
        },
        {
            "Song": "Codeine Crazy",
            "Reason of Selection": "Dangers of drug addiction",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#DrugAddiction",
                "#recovery",
                "#hope"
            ],
            "Overall Theme": "Dangers of drug addiction",
            "artist": "Future",
            "Linked Lyrics": "https://genius.com/Future-codeine-crazy-lyrics"
        },
        {
            "Song": "March Madness",
            "Reason of Selection": "Violence in Chicago",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#violence",
                "#Chicago",
                "#GunViolence"
            ],
            "Overall Theme": "Violence in Chicago",
            "artist": "Future",
            "Linked Lyrics": "https://genius.com/Future-march-madness-lyrics"
        },
        {
            "Song": "Feds Watching",
            "Reason of Selection": "Surveillance state",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#surveillance",
                "#GovernmentOverreach"
            ],
            "Overall Theme": "Surveillance state",
            "artist": "Future",
            "Linked Lyrics": "https://genius.com/Future-feds-watching-lyrics"
        },
        {
            "Song": "Life Is Good",
            "Reason of Selection": "Importance of family and friends",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#family",
                "#friends",
                "#hope",
                "#celebration"
            ],
            "Overall Theme": "Importance of family and friends",
            "artist": "Future",
            "Linked Lyrics": "https://genius.com/Future-life-is-good-lyrics"
        },
        {
            "Song": "Mask Off",
            "Reason of Selection": "Pursuit of wealth and success",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#wealth",
                "#success",
                "#hustle",
                "#celebration"
            ],
            "Overall Theme": "Pursuit of wealth and success",
            "artist": "Future",
            "Linked Lyrics": "https://genius.com/Future-mask-off-lyrics"
        },
        {
            "Song": "DWYCK",
            "Reason of Selection": "This song, featuring Gang Starr and Nice & Smooth, encourages listeners to strive for self-improvement and success. The acronym 'DWYCK' stands for 'Do What You Can, Kid,' conveying a message of empowerment and urging the youth to make the most of their abilities and opportunities.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Empowerment",
                "#SelfImprovement",
                "#Youth"
            ],
            "Overall Theme": "Empowerment and Self-Improvement",
            "artist": "Gang Starr",
            "Linked Lyrics": "https://genius.com/Gang-starr-dwyck-lyrics"
        },
        {
            "Song": "Just To Get a Rep",
            "Reason of Selection": "This track addresses the struggles faced by individuals in urban communities, emphasizing the lengths some may go to gain respect and recognition. It sheds light on the challenges of trying to establish a reputation and the consequences that come with it.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#UrbanStruggles",
                "#Reputation",
                "#Consequences"
            ],
            "Overall Theme": "Struggles for Respect",
            "artist": "Gang Starr",
            "Linked Lyrics": "https://genius.com/Gang-starr-just-to-get-a-rep-lyrics"
        },
        {
            "Song": "Mass Appeal",
            "Reason of Selection": "This song delves into the dynamics of the music industry and the pursuit of mainstream success. It comments on the pressures artists face to conform to commercial trends and maintain mass appeal while staying true to their artistic vision.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#MusicIndustry",
                "#MainstreamSuccess",
                "#ArtisticVision"
            ],
            "Overall Theme": "Music Industry and Authenticity",
            "artist": "Gang Starr",
            "Linked Lyrics": "https://genius.com/Gang-starr-mass-appeal-lyrics"
        },
        {
          "Song": "Birthday Party",
          "Reason of Selection": "This track emphasizes the universal joy and celebration of life. It's about bringing people together, regardless of the season or reason, and rejoicing in the gift of existence.",
          "Socially Conscious": "No",
          "Culturally Significant": "Yes",
          "Keywords": [
              "#Celebration",
              "#Joy",
              "#Life"
          ],
          "Overall Theme": "Celebration of Life and Community",
          "artist": "Grand Master Flash and the Furious 5",
          "Linked Lyrics": "https://genius.com/Grand-master-flash-and-the-furious-5-birthday-party-lyrics"
      },
      {
          "Song": "Freedom",
          "Reason of Selection": "This song celebrates unity, diversity, and inclusivity. It speaks to people of all ages and backgrounds, emphasizing that everyone can find joy and connection through music.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
              "#Unity",
              "#Diversity",
              "#Inclusivity"
          ],
          "Overall Theme": "Unity and Celebration of Diversity",
          "artist": "Grand Master Flash and the Furious 5",
          "Linked Lyrics": "https://genius.com/Grand-master-flash-and-the-furious-5-freedom-lyrics"
      },
      {
        "Song": "New York, New York",
        "Reason of Selection": "A poignant and critical look at the disparity between wealth and poverty in New York City. The song captures the struggles of the marginalized and offers a raw glimpse into urban life.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": [
          "#WealthDisparity",
          "#Poverty", 
          "#UrbanStruggles", 
          "#CrimeAndPunishment",
          "#LossOfInnocense",
          "#Hopelessness",
          "#MoralDilemma",
          "#StreetLife",
          "#FamilyStruggles",
          "#YouthCrisis",
          "#IdentityConfusion",
          "#SocialPressures",
          "#Desparation",
          "#Survival",
          "#SocialChallenges",
          "#SelfDiscovery",
          "#DailyGrind",
          "#Aspirations",
          "#SocialInequality"
        ],
        "Overall Theme": "Social Inequities and Urban Hardships",
        "artist": "Grand Master Flash and the Furious 5",
        "Linked Lyrics": "https://genius.com/Grand-master-flash-and-the-furious-5-new-york-new-york-lyrics"
      },
      
        {
            "Song": "The Message",
            "Reason of Selection": "This iconic song is considered one of the pioneers of socially conscious hip-hop. It addresses the harsh realities of urban life, including poverty, violence, and social inequality. The lyrics shed light on the struggles faced by marginalized communities and emphasize the need for change and social justice.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#UrbanLife",
                "#Poverty",
                "#SocialInequality"
            ],
            "Overall Theme": "Social Realities and Injustice",
            "artist": "Grand Master Flash and the Furious 5",
            "Linked Lyrics": "https://genius.com/Grand-master-flash-and-the-furious-5-the-message-lyrics"
        },
        {
            "Song": "White Lines",
            "Reason of Selection": "This song explores the negative effects of drug addiction and the destructive impact it has on individuals and communities. It serves as a cautionary tale and raises awareness about the dangers of substance abuse.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#DrugAddiction",
                "#SubstanceAbuse",
                "#CautionaryTale"
            ],
            "Overall Theme": "Drug Addiction and Consequences",
            "artist": "Grand Master Flash and the Furious 5",
            "Linked Lyrics": "https://genius.com/Grand-master-flash-and-the-furious-5-white-lines-lyrics"
        },
        {
            "Song": "Black Coffee",
            "Reason of Selection": "This song addresses the social issue of colorism within the Black community. It explores the prejudice and discrimination faced by individuals with darker skin tones and promotes self-acceptance and unity among Black people.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Colorism",
                "#Prejudice",
                "#Unity"
            ],
            "Overall Theme": "Colorism and Self-Acceptance",
            "artist": "Heavy D & the Boyz",
            "Linked Lyrics": "https://genius.com/Heavy-d--and--the-boyz-black-coffee-lyrics"
        },
        {
            "Song": "Don't Curse",
            "Reason of Selection": "This track is a collaborative effort featuring various artists, including Heavy D & the Boyz. It advocates against the use of explicit language and promotes the idea of creating music without resorting to profanity. The song emphasizes the importance of artistic expression while maintaining a level of respect and positivity.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#NoProfanity",
                "#ArtisticExpression",
                "#Respect"
            ],
            "Overall Theme": "Positive Artistic Expression",
            "artist": "Heavy D & the Boyz",
            "Linked Lyrics": "https://genius.com/Heavy-d--and--the-boyz-dont-curse-lyrics"
        },
        {
            "Song": "Self-Destruction",
            "Reason of Selection": "This song is a collaborative effort by various artists, including Heavy D & the Boyz. It addresses the issue of violence and encourages unity among communities to combat the self-destructive behaviors and cycles of violence. The track promotes positivity, education, and self-improvement as alternatives to violence.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Violence",
                "#Unity",
                "#Education"
            ],
            "Overall Theme": "Unity and Non-Violence",
            "artist": "Heavy D & the Boyz",
            "Linked Lyrics": "https://genius.com/Heavy-d--and--the-boyz-self-destruction-lyrics"
        },
        {
            "Song": "Black Korea",
            "Reason of Selection": "This controversial song addresses the issue of racial tensions and prejudice experienced by Korean Americans in predominantly Black neighborhoods. It delves into the complexities of racial conflict and raises awareness about the need for understanding and unity among different communities.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#RacialTensions",
                "#Prejudice",
                "#Unity"
            ],
            "Overall Theme": "Racial Conflict and Understanding",
            "artist": "Ice Cube",
            "Linked Lyrics": "https://genius.com/Ice-cube-black-korea-lyrics"
        },
        {
            "Song": "Check Yoself",
            "Reason of Selection": "This track carries a message of self-reflection and accountability. It encourages individuals to evaluate their actions and behavior, emphasizing the consequences that come with engaging in negative or criminal activities. The song promotes self-awareness and personal responsibility.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SelfReflection",
                "#Accountability",
                "#Consequences"
            ],
            "Overall Theme": "Self-Awareness and Personal Responsibility",
            "artist": "Ice Cube",
            "Linked Lyrics": "https://genius.com/Ice-cube-check-yoself-lyrics"
        },
        {
            "Song": "Child Support",
            "Reason of Selection": "This song sheds light on the issue of child support and highlights the responsibilities of fathers in providing financial support for their children. It raises awareness about the impact of absent fathers on families and the importance of fulfilling parental obligations.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#ChildSupport",
                "#ParentalResponsibility",
                "#AbsentFathers"
            ],
            "Overall Theme": "Parental Obligations and Family",
            "artist": "Ice Cube",
            "Linked Lyrics": "https://genius.com/Ice-cube-child-support-lyrics"
        },
        {
            "Song": "F*ck tha Police",
            "Reason of Selection": "This powerful and controversial song confronts police brutality, racial profiling, and systemic racism. It serves as a critique of law enforcement and the unequal treatment of Black communities. The lyrics express frustration and anger while calling for justice and change.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PoliceBrutality",
                "#RacialProfiling",
                "#SystemicRacism"
            ],
            "Overall Theme": "Injustice and Calls for Change",
            "artist": "Ice Cube",
            "Linked Lyrics": "https://genius.com/Nwa-fuck-tha-police-lyrics"
        },
        {
            "Song": "It Was a Good Day",
            "Reason of Selection": "This song paints a vivid picture of a positive and carefree day in Ice Cube's life. It portrays a break from the typical struggles and hardships experienced in the inner city. The lyrics capture a sense of hope, nostalgia, and the desire for moments of joy and peace.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#PositiveDay",
                "#Nostalgia",
                "#Peace"
            ],
            "Overall Theme": "Joy and Nostalgic Moments",
            "artist": "Ice Cube",
            "Linked Lyrics": "https://genius.com/Ice-cube-it-was-a-good-day-lyrics"
        },
        {
            "Song": "It Was a Good Day",
            "Reason of Selection": "This song portrays a day without violence in a time marked by high levels of gang violence in California. It reflects the desire for a peaceful and ordinary day amidst the challenges and dangers of the environment. The lyrics provide a glimpse into the longing for moments of respite and normalcy in a community plagued by violence.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PeacefulDay",
                "#GangViolence",
                "#CommunityChallenges"
            ],
            "Overall Theme": "Seeking Peace in Turbulent Times",
            "artist": "Ice Cube",
            "Linked Lyrics": "https://genius.com/Ice-cube-it-was-a-good-day-lyrics"
        },
        {
            "Song": "6 'N the Mornin'",
            "Reason of Selection": "This influential track is considered one of the pioneering gangsta rap songs. It vividly depicts the realities of street life and the challenges faced in the early morning hours. The lyrics capture the gritty atmosphere and provide a glimpse into the experiences of urban communities.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#StreetLife",
                "#Gritty",
                "#UrbanCommunities"
            ],
            "Overall Theme": "Street Life and Urban Realities",
            "artist": "Ice-T",
            "Linked Lyrics": "https://genius.com/Ice-t-6-n-the-mornin-lyrics"
        },
        {
            "Song": "Colors",
            "Reason of Selection": "This song serves as the theme for the film 'Colors' and explores themes of gang violence, crime, and social issues in inner-city neighborhoods. It offers social commentary on the challenges faced by communities affected by gang culture and the impact of violence on young individuals.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#GangViolence",
                "#Crime",
                "#InnerCity"
            ],
            "Overall Theme": "Gang Culture and Social Issues",
            "artist": "Ice-T",
            "Linked Lyrics": "https://genius.com/Ice-t-colors-lyrics"
        },
        {
            "Song": "Freedom of Speech",
            "Reason of Selection": "This politically charged track criticizes censorship and advocates for freedom of speech. It emphasizes the importance of open dialogue, free expression, and challenging societal norms. The lyrics confront controversial topics and defend the right to express dissenting opinions.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#FreedomOfSpeech",
                "#Censorship",
                "#OpenDialogue"
            ],
            "Overall Theme": "Freedom of Expression and Challenging Norms",
            "artist": "Ice-T",
            "Linked Lyrics": "https://genius.com/Ice-t-freedom-of-speech-lyrics"
        },
        {
            "Song": "I'm Your Pusher",
            "Reason of Selection": "This song metaphorically addresses the issue of drug addiction and the influence of drugs on society. It critiques the societal factors that contribute to drug abuse and promotes awareness of the dangers and consequences associated with substance abuse.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#DrugAddiction",
                "#SubstanceAbuse",
                "#Consequences"
            ],
            "Overall Theme": "Drug Abuse and Societal Influence",
            "artist": "Ice-T",
            "Linked Lyrics": "https://genius.com/Ice-t-im-your-pusher-lyrics"
        },
        {
            "Song": "Lethal Weapon",
            "Reason of Selection": "This track examines the power dynamics and violence prevalent in society. It sheds light on the dangers of weapons and the consequences of their use. The lyrics address the impact of violence on communities and the need for responsible and conscious decision-making.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PowerDynamics",
                "#Violence",
                "#ConsciousDecisionMaking"
            ],
            "Overall Theme": "Violence and Responsible Choices",
            "artist": "Ice-T",
            "Linked Lyrics": "https://genius.com/Ice-t-lethal-weapon-lyrics"
        },
        {
            "Song": "New Jack Hustler",
            "Reason of Selection": "This song from the film 'New Jack City' examines the realities of the hustling lifestyle and the pursuit of success in an environment marked by crime and drug trade. It provides commentary on the challenges faced by individuals in inner-city communities and the allure of fast money.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#HustlingLifestyle",
                "#Crime",
                "#InnerCityCommunities"
            ],
            "Overall Theme": "Hustling and Urban Realities",
            "artist": "Ice-T",
            "Linked Lyrics": "https://genius.com/Ice-t-new-jack-hustler-lyrics"
        },
        {
            "Song": "O.G. Original Gangster",
            "Reason of Selection": "This title track explores the experiences and persona of an original gangster. It delves into the street life, confronts stereotypes, and provides an autobiographical narrative of Ice-T's own journey. The lyrics shed light on the complexities of gang culture and challenge societal perceptions.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#StreetLife",
                "#GangCulture",
                "#Stereotypes"
            ],
            "Overall Theme": "Street Life and Challenging Perceptions",
            "artist": "Ice-T",
            "Linked Lyrics": "https://genius.com/Ice-t-og-original-gangster-lyrics"
        },
        {
            "Song": "99 Problems",
            "Reason of Selection": "This song addresses the challenges and obstacles faced by Jay-Z in his personal and professional life. It reflects on themes of racial profiling, police harassment, and the struggles of being a successful Black man in America. The lyrics provide social commentary and explore issues of identity, justice, and power dynamics.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Challenges",
                "#RacialProfiling",
                "#PowerDynamics"
            ],
            "Overall Theme": "Identity, Justice, and Struggles",
            "artist": "Jay-Z",
            "Linked Lyrics": "https://genius.com/Jay-z-99-problems-lyrics"
        },
        {
            "Song": "Hard Knock Life",
            "Reason of Selection": "This track samples the iconic song 'Hard Knock Life' from the musical 'Annie' and offers a commentary on the struggles and hardships of life in the inner city. It highlights the resilience and determination needed to overcome adversity and achieve success, resonating with listeners who face similar challenges.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Struggles",
                "#Resilience",
                "#InnerCity"
            ],
            "Overall Theme": "Overcoming Adversity and Achieving Success",
            "artist": "Jay-Z",
            "Linked Lyrics": "https://genius.com/Jay-z-hard-knock-life-lyrics"
        },
        {
            "Song": "No Church in the Wild",
            "Reason of Selection": "This collaborative track explores themes of power, rebellion, and social commentary. It challenges traditional institutions and raises questions about faith, identity, and societal norms. The lyrics delve into the complexities of human nature and the impact of social systems on individuals.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Power",
                "#Rebellion",
                "#SocialCommentary"
            ],
            "Overall Theme": "Power, Identity, and Social Systems",
            "artist": "Jay-Z",
            "Linked Lyrics": "https://genius.com/Jay-z-no-church-in-the-wild-lyrics"
        },
        {
            "Song": "The Story of O.J.",
            "Reason of Selection": "This song addresses themes of race, wealth, and the pursuit of financial freedom. It confronts stereotypes, challenges the notion of success, and critiques the influence of materialism. The lyrics provide a historical and cultural commentary on racial identity, wealth disparity, and the importance of financial literacy.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Race",
                "#Wealth",
                "#FinancialFreedom"
            ],
            "Overall Theme": "Race, Wealth, and Materialism",
            "artist": "Jay-Z",
            "Linked Lyrics": "https://genius.com/Jay-z-the-story-of-oj-lyrics"
        },
        {
            "Song": "1985",
            "Reason of Selection": "This song serves as a conversation with younger generations of rappers and addresses the challenges and criticisms faced by artists in the industry. It offers guidance and insight while reflecting on the consequences of fame and success. The lyrics provide social commentary and encourage self-reflection.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Guidance",
                "#Criticism",
                "#SelfReflection"
            ],
            "Overall Theme": "Reflection and Guidance for Young Artists",
            "artist": "J-Cole",
            "Linked Lyrics": "https://genius.com/J-cole-1985-lyrics"
        },
        {
            "Song": "Be Free",
            "Reason of Selection": "This song was written in response to the death of Michael Brown and the subsequent protests in Ferguson. It captures the frustration, pain, and desire for justice in the face of police brutality and racial injustice. The lyrics express a plea for freedom, equality, and an end to systemic oppression.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PoliceBrutality",
                "#RacialInjustice",
                "#Freedom"
            ],
            "Overall Theme": "Protesting Injustice and Seeking Freedom",
            "artist": "J-Cole",
            "Linked Lyrics": "https://genius.com/J-cole-be-free-lyrics"
        },
        {
            "Song": "Climb Back",
            "Reason of Selection": "J-Cole's Climb Back showcases his introspective lyricism and addresses personal growth, self-reflection, and resilience. The song encourages listeners to overcome challenges and keep pushing forward despite adversity, making it both socially conscious and empowering.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "No",
            "Keywords": ["#ClimbBack", "#SelfReflection", "#Resilience"],
            "Overall Theme": "Personal Growth, Resilience",
            "artist": "J-Cole",
            "Linked Lyrics": "https://genius.com/J-cole-climb-back-lyrics"
        },
        {
            "Song": "Crooked Smile",
            "Reason of Selection": "This track promotes self-acceptance, challenging societal standards of beauty, and emphasizing inner confidence. It addresses insecurities and encourages listeners to embrace their imperfections. The lyrics convey a positive message of self-love and empowerment.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SelfAcceptance",
                "#InnerConfidence",
                "#SelfLove"
            ],
            "Overall Theme": "Self-Acceptance and Inner Confidence",
            "artist": "J-Cole",
            "Linked Lyrics": "https://genius.com/J-cole-crooked-smile-lyrics"
        },
        {
            "Song": "Firing Squad",
            "Reason of Selection": "This song critiques the music industry, addressing issues such as commercialization, greed, and the impact on artistic integrity. It confronts the pressures faced by artists and highlights the importance of staying true to oneself. The lyrics offer a reflection on the challenges of success and maintaining authenticity.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#MusicIndustry",
                "#ArtisticIntegrity",
                "#Authenticity"
            ],
            "Overall Theme": "Critiquing the Music Industry and Maintaining Authenticity",
            "artist": "J-Cole",
            "Linked Lyrics": "https://genius.com/J-cole-firing-squad-lyrics"
        },
        {
            "Song": "Lost Ones",
            "Reason of Selection": "This emotional song explores themes of love, relationships, and the consequences of unplanned pregnancies. It presents a realistic and thought-provoking narrative of difficult decisions and the complexities of life. The lyrics capture the emotions and challenges faced by individuals in such situations.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Love",
                "#Relationships",
                "#UnplannedPregnancy"
            ],
            "Overall Theme": "Love, Relationships, and Life's Challenges",
            "artist": "J-Cole",
            "Linked Lyrics": "https://genius.com/J-cole-lost-ones-lyrics"
        },
        {
            "Song": "Middle Child",
            "Reason of Selection": "This song serves as an anthem for those who feel overlooked or caught between generations. It explores themes of identity, belonging, and the pursuit of success. The lyrics reflect on the artist's position in the rap game and his impact on the culture.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Identity",
                "#Belonging",
                "#Success"
            ],
            "Overall Theme": "Identity, Belonging, and Success",
            "artist": "J-Cole",
            "Linked Lyrics": "https://genius.com/J-cole-middle-child-lyrics"
        },
        {
            "Song": "Neighbors",
            "Reason of Selection": "This song tells the story of a raid on J-Cole's studio by his neighbors, who mistakenly assumed he was involved in illegal activities. It sheds light on racial profiling, stereotypes, and the challenges faced by Black artists. The lyrics provide social commentary and shed light on systemic issues.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#RacialProfiling",
                "#Stereotypes",
                "#SystemicIssues"
            ],
            "Overall Theme": "Racial Profiling and Systemic Challenges",
            "artist": "J-Cole",
            "Linked Lyrics": "https://genius.com/J-cole-neighbors-lyrics"
        },
        {
          "Song": "Babylon",
          "Reason of Selection": "Addresses racial injustice and police brutality, urging the need for reform and reflection.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#RacialInjustice", "#PoliceBrutality"],
          "Overall Theme": "Racial injustice and the need for reform",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-babylon-lyrics"
        },
        {
          "Song": "Black Beetles",
          "Reason of Selection": "Examines racial prejudice and stereotypes, promoting individuality and self-empowerment.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#RacialPrejudice", "#SelfEmpowerment"],
          "Overall Theme": "Racial prejudice and self-empowerment",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-black-beetles-lyrics"
        },
        {
          "Song": "Eulogy",
          "Reason of Selection": "A reflection on societal issues, the song emphasizes spreading love and highlighting the struggles in the community.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#Love", "#CommunityStruggles"],
          "Overall Theme": "Spreading love and community awareness",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-eulogy-lyrics"
        },
        {
          "Song": "For My People",
          "Reason of Selection": "An anthem for unity, this song emphasizes solidarity and hope.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#Unity", "#Solidarity"],
          "Overall Theme": "Unity and hope",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-for-my-people-lyrics"
        },
        {
          "Song": "Good Morning Amerikkka",
          "Reason of Selection": "A critical examination of the American Dream and the social and political landscape.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#AmericanDream", "#SocialCritique"],
          "Overall Theme": "Critical examination of America",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-good-morning-amerikkka-lyrics"
        },
        {
          "Song": "Head High",
          "Reason of Selection": "Addresses personal growth and overcoming adversity. A reflection on life's struggles.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#PersonalGrowth", "#Adversity"],
          "Overall Theme": "Growth and overcoming struggles",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-head-high-lyrics"
        },
        {
          "Song": "Land of the Free",
          "Reason of Selection": "A powerful commentary on freedom, equality, and the American Dream.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#Freedom", "#Equality"],
          "Overall Theme": "Freedom and the American Dream",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-land-of-the-free-lyrics"
        },
        {
          "Song": "Righteous Minds",
          "Reason of Selection": "Touches on themes of self-awareness and societal pressures, encouraging conscious thinking.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#SelfAwareness", "#ConsciousThinking"],
          "Overall Theme": "Self-awareness and societal reflection",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-righteous-minds-lyrics"
        },
        {
          "Song": "Temptation",
          "Reason of Selection": "Focuses on racial inequality and personal struggles, calling for change and empowerment.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#RacialInequality", "#Empowerment"],
          "Overall Theme": "Racial inequality and empowerment",
          "artist": "Joey Badass",
          "Linked Lyrics": "https://genius.com/Joey-bada-temptation-lyrics"
        },
        {
            "Song": "Lucid Dreams",
            "Reason of Selection": "This song delves into themes of heartbreak, pain, and the struggles of a broken relationship. It explores the impact of prescription drug use on emotional well-being and touches on the artist's experiences with suicidal thoughts. The lyrics provide a raw and introspective look into the artist's emotions and mental health challenges.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Heartbreak",
                "#PrescriptionDrugs",
                "#SuicidalThoughts"
            ],
            "Overall Theme": "Emotional Turmoil, Prescription Drugs, and Suicidal Thoughts",
            "artist": "Juice Wrld",
            "Linked Lyrics": "https://genius.com/Juice-wrld-lucid-dreams-lyrics"
        },
        {
            "Song": "Legends",
            "Reason of Selection": "This song pays tribute to Juice Wrld and other artists who passed away at a young age, reflecting on the impact of their art and the struggles they faced. It highlights the fragility of life and the need to appreciate artists while they are still alive. The lyrics serve as a reminder of the legacies left behind by talented individuals.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Tribute",
                "#FragilityofLife",
                "#Appreciation"
            ],
            "Overall Theme": "Appreciation for Artists and Reflection on Mortality",
            "artist": "Juice Wrld",
            "Linked Lyrics": "https://genius.com/Juice-wrld-legends-lyrics"
        },
        {
            "Song": "Robbery",
            "Reason of Selection": "This song explores themes of heartbreak, betrayal, and the complexities of love. It portrays a toxic relationship in which the artist feels robbed of his emotions and trust. The lyrics convey the pain and confusion associated with love gone wrong.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Heartbreak",
                "#Betrayal",
                "#ToxicRelationship"
            ],
            "Overall Theme": "Pain and Confusion in Love",
            "artist": "Juice Wrld",
            "Linked Lyrics": "https://genius.com/Juice-wrld-robbery-lyrics"
        },
        {
            "Song": "Wishing Well",
            "Reason of Selection": "This song touches upon themes of mental health struggles, addiction, and the desire for healing. It reflects on the internal battles faced by the artist and the hope for a better future. The lyrics offer a glimpse into the artist's personal experiences and resonate with listeners who have faced similar challenges.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#MentalHealth",
                "#Addiction",
                "#Healing"
            ],
            "Overall Theme": "Mental Health Struggles and Hope for Healing",
            "artist": "Juice Wrld",
            "Linked Lyrics": "https://genius.com/Juice-wrld-wishing-well-lyrics"
        },
        {
            "Song": "Black is Black",
            "Reason of Selection": "This song celebrates Black identity and culture, emphasizing the beauty, strength, and resilience of the Black community. It promotes Black pride and challenges societal perceptions and stereotypes. The lyrics inspire unity and empowerment among Black individuals.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BlackIdentity",
                "#BlackPride",
                "#Unity"
            ],
            "Overall Theme": "Celebrating Black Culture and Identity",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-black-is-black-lyrics"
        },
        {
            "Song": "Black Woman",
            "Reason of Selection": "This song pays tribute to the strength, beauty, and contributions of Black women. It celebrates their power, resilience, and significance in society. The lyrics promote love, respect, and appreciation for Black women.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BlackWomen",
                "#Strength",
                "#Resilience"
            ],
            "Overall Theme": "Honoring Black Women and their Contributions",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-black-woman-lyrics"
        },
        {
            "Song": "Breathe Don't Stop",
            "Reason of Selection": "This upbeat song encourages listeners to let loose, enjoy life, and embrace the joy of dancing. It promotes a carefree and positive attitude, urging people to live in the present moment and have fun.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Dancing",
                "#Joy",
                "#PositiveAttitude"
            ],
            "Overall Theme": "Celebrating the Joy of Dancing and Living in the Moment",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-breathe-dont-stop-lyrics"
        },
        {
            "Song": "Straight Out the Jungle",
            "Reason of Selection": "This song serves as an introduction to the Jungle Brothers' unique style and sound. It showcases their innovative approach to hip-hop and represents the group's origins and connection to nature. The lyrics reflect the group's creativity, originality, and love for hip-hop.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Innovation",
                "#Originality",
                "#HipHop"
            ],
            "Overall Theme": "Introducing the Jungle Brothers' Style and Connection to Nature",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-straight-out-the-jungle-lyrics"
        },
        {
            "Song": "What 'U' Waitin' '4'?",
            "Reason of Selection": "This song encourages listeners to seize opportunities, take action, and pursue their dreams. It emphasizes the importance of self-motivation and determination in achieving success. The lyrics inspire individuals to overcome obstacles and make their aspirations a reality.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Opportunity",
                "#Motivation",
                "#Determination"
            ],
            "Overall Theme": "Encouraging Action and Pursuit of Dreams",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-what-u-waitin-4?-lyrics"
        },
        {
            "Song": "Black is Black",
            "Reason of Selection": "This song celebrates Black identity and culture, emphasizing the beauty, strength, and resilience of the Black community. It promotes Black pride and challenges societal perceptions and stereotypes. The lyrics inspire unity and empowerment among Black individuals.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BlackIdentity",
                "#BlackPride",
                "#Unity"
            ],
            "Overall Theme": "Celebrating Black Culture and Identity",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-black-is-black-lyrics"
        },
        {
            "Song": "Black Woman",
            "Reason of Selection": "This song pays tribute to the strength, beauty, and contributions of Black women. It celebrates their power, resilience, and significance in society. The lyrics promote love, respect, and appreciation for Black women.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BlackWomen",
                "#Strength",
                "#Resilience"
            ],
            "Overall Theme": "Honoring Black Women and their Contributions",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-black-woman-lyrics"
        },
        {
            "Song": "Breathe Don't Stop",
            "Reason of Selection": "This upbeat song encourages listeners to let loose, enjoy life, and embrace the joy of dancing. It promotes a carefree and positive attitude, urging people to live in the present moment and have fun.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Dancing",
                "#Joy",
                "#PositiveAttitude"
            ],
            "Overall Theme": "Celebrating the Joy of Dancing and Living in the Moment",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-breathe-dont-stop-lyrics"
        },
        {
            "Song": "Straight Out the Jungle",
            "Reason of Selection": "This song serves as an introduction to the Jungle Brothers' unique style and sound. It showcases their innovative approach to hip-hop and represents the group's origins and connection to nature. The lyrics reflect the group's creativity, originality, and love for hip-hop.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Innovation",
                "#Originality",
                "#HipHop"
            ],
            "Overall Theme": "Introducing the Jungle Brothers' Style and Connection to Nature",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-straight-out-the-jungle-lyrics"
        },
        {
            "Song": "What 'U' Waitin' '4'?",
            "Reason of Selection": "This song encourages listeners to seize opportunities, take action, and pursue their dreams. It emphasizes the importance of self-motivation and determination in achieving success. The lyrics inspire individuals to overcome obstacles and make their aspirations a reality.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Opportunity",
                "#Motivation",
                "#Determination"
            ],
            "Overall Theme": "Encouraging Action and Pursuit of Dreams",
            "artist": "Jungle Brothers",
            "Linked Lyrics": "https://genius.com/Jungle-brothers-what-u-waitin-4?-lyrics"
        },
        {
            "Song": "Freedom of Speech",
            "Reason of Selection": "This song addresses the importance of freedom of speech and expression. It emphasizes the need for individuals to speak up against injustice, censorship, and oppression. The lyrics promote the power of words in advocating for change and challenging societal norms.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#FreedomOfSpeech",
                "#Expression",
                "#Injustice"
            ],
            "Overall Theme": "Advocacy for Freedom of Speech and Challenging Societal Norms",
            "artist": "Just-Ice",
            "Linked Lyrics": "https://genius.com/Just-ice-freedom-of-speech-lyrics"
        },
        {
            "Song": "Going Way Back",
            "Reason of Selection": "This song pays homage to the early days of hip-hop culture and reflects on the nostalgia and positive memories associated with that era. It highlights the influence and impact of hip-hop pioneers, showcasing Just-Ice's appreciation for the roots of the genre.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#HipHopCulture",
                "#Nostalgia",
                "#Appreciation"
            ],
            "Overall Theme": "Paying Homage to the Early Days of Hip-Hop",
            "artist": "Just-Ice",
            "Linked Lyrics": "https://genius.com/Just-ice-going-way-back-lyrics"
        },
        {
            "Song": "Latoya",
            "Reason of Selection": "This song tells the story of Latoya, a young woman who falls into the pitfalls of drug addiction and prostitution. It sheds light on the struggles faced by individuals in marginalized communities and addresses the social issues surrounding addiction and exploitation.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#DrugAddiction",
                "#Prostitution",
                "#SocialIssues"
            ],
            "Overall Theme": "Addressing Social Issues and Struggles in Marginalized Communities",
            "artist": "Just-Ice",
            "Linked Lyrics": "https://genius.com/Just-ice-latoya-lyrics"
        },
        {
            "Song": "Moshitup",
            "Reason of Selection": "This high-energy song is a call to action, encouraging listeners to let loose, dance, and enjoy themselves. It creates a lively and energetic atmosphere, inspiring individuals to embrace the joy of music and movement.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Energy",
                "#Dancing",
                "#Enjoyment"
            ],
            "Overall Theme": "Creating a Lively and Energetic Atmosphere",
            "artist": "Just-Ice",
            "Linked Lyrics": "https://genius.com/Just-ice-moshitup-lyrics"
        },
        {
            "Song": "All Falls Down",
            "Reason of Selection": "This introspective song addresses the pressure to conform to societal standards and the impact of materialism on individuals. It explores themes of self-reflection, self-acceptance, and the struggles faced in a consumer-driven society.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Materialism",
                "#SelfReflection",
                "#Consumerism"
            ],
            "Overall Theme": "Challenging Societal Standards and Materialism",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-all-falls-down-lyrics"
        },
        {
            "Song": "Diamonds from Sierra Leone",
            "Reason of Selection": "This song sheds light on the issue of blood diamonds and the ethical concerns surrounding their mining and trade. It raises awareness about the human rights violations and conflicts associated with the diamond industry, encouraging listeners to consider the impact of their consumer choices.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BloodDiamonds",
                "#EthicalConcerns",
                "#HumanRights"
            ],
            "Overall Theme": "Addressing Blood Diamonds and Ethical Consumerism",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-diamonds-from-sierra-leone-lyrics"
        },
        {
            "Song": "Heard Em Say",
            "Reason of Selection": "This song reflects on the challenges faced by marginalized communities and the importance of raising one's voice to advocate for change. It encourages listeners to speak out against injustice and use their platforms to make a positive impact.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SocialJustice",
                "#Advocacy",
                "#Injustice"
            ],
            "Overall Theme": "Speaking Out Against Injustice and Advocacy",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-heard-em-say-lyrics"
        },
        {
            "Song": "Hey Mama",
            "Reason of Selection": "This heartfelt song is a tribute to Kanye West's mother and expresses his love, gratitude, and appreciation for her. It showcases the importance of family, maternal love, and the impact of a mother's support on an artist's journey.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Motherhood",
                "#Love",
                "#Gratitude"
            ],
            "Overall Theme": "Tribute to Kanye West's Mother and Maternal Love",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-hey-mama-lyrics"
        },
        {
            "Song": "Jesus is Lord",
            "Reason of Selection": "This religious-themed song reflects Kanye West's spiritual journey and his faith in Jesus Christ. It explores themes of redemption, salvation, and the transformative power of faith.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Faith",
                "#Redemption",
                "#Spirituality"
            ],
            "Overall Theme": "Exploring Faith and Spiritual Transformation",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-jesus-is-lord-lyrics"
        },
        {
            "Song": "Jesus Walks",
            "Reason of Selection": "This song tackles the complexities of faith and the challenges faced by religious individuals in a secular world. It addresses themes of spirituality, social issues, and the struggle to maintain faith in the midst of adversity.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Faith",
                "#Spirituality",
                "#SocialIssues"
            ],
            "Overall Theme": "Exploring Faith and Addressing Social Issues",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-jesus-walks-lyrics"
        },
        {
            "Song": "New Slaves",
            "Reason of Selection": "This song confronts issues of racism, consumerism, and the modern-day enslavement of individuals by societal systems. It criticizes the constraints imposed by the media, capitalism, and institutionalized racism, calling for societal change and personal liberation.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Racism",
                "#Consumerism",
                "#SocialChange"
            ],
            "Overall Theme": "Confronting Racism and Criticizing Consumerism",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-new-slaves-lyrics"
        },
        {
            "Song": "No Church in the Wild",
            "Reason of Selection": "This collaborative song explores themes of power, corruption, and the complexities of faith. It questions traditional religious institutions and challenges societal norms, inviting listeners to question authority and explore spirituality in unconventional ways.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Power",
                "#Corruption",
                "#Spirituality"
            ],
            "Overall Theme": "Challenging Authority and Conventional Spirituality",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-no-church-in-the-wild-lyrics"
        },
        {
            "Song": "Selah",
            "Reason of Selection": "This powerful song references biblical themes and confronts personal struggles and spiritual growth. It reflects on faith, redemption, and the pursuit of inner peace and salvation.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Faith",
                "#Redemption",
                "#SpiritualGrowth"
            ],
            "Overall Theme": "Reflecting on Faith and Spiritual Journey",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-selah-lyrics"
        },
        {
          "Song": "Spaceship",
          "Reason of Selection": "Explores the struggles and challenges faced by artists in the music industry.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#MusicIndustryStruggles", "#ArtisticExpression", "#Ambition", "#Dreams", "#CorporatePressure", "#Consumerism"],
          "Overall Theme": "Music Industry Struggles",
          "artist": "Kanye West",
          "Linked Lyrics": "https://genius.com/Kanye-west-spaceship-lyrics"
        },
        {
            "Song": "Ultralight Beam",
            "Reason of Selection": "This spiritually-charged song showcases Kanye West's introspection and explores themes of faith, hope, and divine connection. It emphasizes the importance of divine grace, and the lyrics offer a glimpse into the artist's spiritual journey.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Faith",
                "#Hope",
                "#DivineConnection"
            ],
            "Overall Theme": "Exploring Faith and Divine Connection",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-ultralight-beam-lyrics"
        },
        {
            "Song": "Water",
            "Reason of Selection": "This song touches on themes of spirituality, baptism, and cleansing. It reflects on personal transformation, renewal, and the metaphorical power of water in washing away sins and starting anew.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Spirituality",
                "#Baptism",
                "#Renewal"
            ],
            "Overall Theme": "Reflection on Transformation and Renewal",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-water-lyrics"
        },
        {
            "Song": "Who Will Survive In America",
            "Reason of Selection": "This song questions the societal constructs and inequalities prevalent in America. It reflects on the challenges faced by marginalized communities and raises awareness about the need for social change and equality.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Inequality",
                "#SocialChange",
                "#MarginalizedCommunities"
            ],
            "Overall Theme": "Questioning Social Constructs and Inequalities in America",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-who-will-survive-in-america-lyrics"
        },
        {
            "Song": "Ye vs. The People",
            "Reason of Selection": "This song presents a dialogue between Kanye West and T.I., where they express opposing views on political and social issues. It highlights the importance of open discussion and the clash of ideas in a society with diverse perspectives.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#PoliticalDiscourse",
                "#DiversePerspectives",
                "#ClashOfIdeas"
            ],
            "Overall Theme": "Exploring Political and Social Discourse",
            "artist": "Kanye West",
            "Linked Lyrics": "https://genius.com/Kanye-west-ye-vs-the-people-lyrics"
        },
        {
            "Song": "Alright",
            "Reason of Selection": "This song became an anthem for the Black Lives Matter movement, addressing racial injustice and police brutality. It offers hope, resilience, and unity in the face of adversity, emphasizing the importance of staying strong and fighting for a better future.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BlackLivesMatter",
                "#RacialInjustice",
                "#Unity"
            ],
            "Overall Theme": "Addressing Racial Injustice and Hope",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-alright-lyrics"
        },
        {
            "Song": "Complexion (A Zulu Love)",
            "Reason of Selection": "This song explores themes of colorism and the beauty of diverse complexions. It challenges societal standards of beauty and promotes self-acceptance, celebrating the diversity within the Black community.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Colorism",
                "#SelfAcceptance",
                "#BeautyStandards"
            ],
            "Overall Theme": "Celebrating Diverse Complexions and Challenging Beauty Standards",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-complexion-(a-zulu-love)-lyrics"
        },
        {
            "Song": "DNA",
            "Reason of Selection": "This song delves into Kendrick Lamar's identity, heritage, and cultural roots. It reflects on the experiences and struggles faced by the Black community, highlighting the importance of staying true to oneself and embracing one's heritage.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Identity",
                "#Heritage",
                "#CulturalRoots"
            ],
            "Overall Theme": "Exploring Identity and Cultural Roots",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-dna-lyrics"
        },
        {
            "Song": "F*ck Your Ethnicity",
            "Reason of Selection": "This song challenges racial stereotypes and addresses the complexities of racial identity. It critiques the notion of being defined solely by one's ethnicity and promotes self-determination and self-expression.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#RacialStereotypes",
                "#SelfExpression",
                "#Identity"
            ],
            "Overall Theme": "Challenging Ethnic Stereotypes and Promoting Self-Determination",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-f*ck-your-ethnicity-lyrics"
        },
        {
            "Song": "FEAR",
            "Reason of Selection": "This introspective song delves into the artist's fears and insecurities, touching on themes of generational trauma, self-doubt, and the complexities of life. It reflects on personal growth and the impact of societal pressures on mental health.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#GenerationalTrauma",
                "#MentalHealth",
                "#SelfDoubt"
            ],
            "Overall Theme": "Reflecting on Fears and Personal Growth",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-fear-lyrics"
        },
        {
            "Song": "HiiiPower",
            "Reason of Selection": "This song serves as a call to action, advocating for unity, self-empowerment, and positive change. It encourages listeners to take control of their destiny and work together to uplift their communities.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Unity",
                "#SelfEmpowerment",
                "#PositiveChange"
            ],
            "Overall Theme": "Advocating Unity and Self-Empowerment",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-hiiipower-lyrics"
        },
        {
            "Song": "How Much a Dollar Cost",
            "Reason of Selection": "This song reflects on the value of compassion and the consequences of turning a blind eye to those in need. It explores themes of empathy, materialism, and the importance of recognizing the humanity in others.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Compassion",
                "#Empathy",
                "#Materialism"
            ],
            "Overall Theme": "Exploring the Value of Compassion",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-how-much-a-dollar-cost-lyrics"
        },
        {
            "Song": "i",
            "Reason of Selection": "This uplifting song promotes self-love, resilience, and self-acceptance. It encourages listeners to embrace their worth, overcome adversity, and find strength within themselves.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SelfLove",
                "#Resilience",
                "#SelfAcceptance"
            ],
            "Overall Theme": "Promoting Self-Love and Resilience",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-i-lyrics"
        },
        {
            "Song": "King Kunta",
            "Reason of Selection": "This song celebrates African heritage, resilience, and self-empowerment. It references historical figures and explores themes of identity, power, and the pursuit of greatness.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#AfricanHeritage",
                "#Resilience",
                "#Identity"
            ],
            "Overall Theme": "Celebrating African Heritage and Empowerment",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-king-kunta-lyrics"
        },
        {
            "Song": "Ronald Reagan Era (His Evils)",
            "Reason of Selection": "This song critically examines the impact of Ronald Reagan's policies on marginalized communities and the negative consequences of political decisions. It sheds light on social issues and systemic inequalities prevalent during that era.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SocialIssues",
                "#SystemicInequalities",
                "#PoliticalDecisions"
            ],
            "Overall Theme": "Critiquing Ronald Reagan's Era and Systemic Inequalities",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-ronald-reagan-era-(his-evils)-lyrics"
        },
        {
            "Song": "The Blacker the Berry",
            "Reason of Selection": "This powerful song confronts racism, self-hate, and the complexities of being Black in America. It addresses systemic racism, cultural identity, and the need for unity and self-love within the Black community.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Racism",
                "#CulturalIdentity",
                "#Unity"
            ],
            "Overall Theme": "Confronting Racism and Promoting Black Unity",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-the-blacker-the-berry-lyrics"
        },
        {
            "Song": "United in Grief",
            "Reason of Selection": "This song reflects on the shared pain, struggles, and grief experienced by marginalized communities. It calls for unity and solidarity in the face of adversity, highlighting the strength that can be found in collective mourning.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SharedPain",
                "#Unity",
                "#Solidarity"
            ],
            "Overall Theme": "Reflecting on Grief and Promoting Unity",
            "artist": "Kendrick Lamar",
            "Linked Lyrics": "https://genius.com/Kendrick-lamar-united-in-grief-lyrics"
        },
        {
            "Song": "Angels Calling",
            "Reason of Selection": "This introspective song delves into themes of mental health, self-reflection, and the artist's inner struggles. It highlights the emotional depth and vulnerability expressed through the lyrics.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#MentalHealth",
                "#SelfReflection",
                "#InnerStruggles"
            ],
            "Overall Theme": "Exploring Mental Health and Self-Reflection",
            "artist": "Kenny Mason",
            "Linked Lyrics": "https://genius.com/Kenny-mason-angels-calling-lyrics"
        },
        {
            "Song": "Handle Me",
            "Reason of Selection": "This empowering song addresses themes of self-worth, personal boundaries, and demanding respect. It emphasizes the importance of self-assertion and valuing oneself in relationships and interactions.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SelfWorth",
                "#PersonalBoundaries",
                "#Respect"
            ],
            "Overall Theme": "Promoting Self-Worth and Boundaries",
            "artist": "Kenny Mason",
            "Linked Lyrics": "https://genius.com/Kenny-mason-handle-me-lyrics"
        },
        {
            "Song": "Hit",
            "Reason of Selection": "This energetic track combines introspective lyrics with a confident delivery, reflecting the artist's drive, ambition, and determination to succeed in the face of obstacles.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#Drive",
                "#Ambition",
                "#Determination"
            ],
            "Overall Theme": "Reflecting on Drive and Ambition",
            "artist": "Kenny Mason",
            "Linked Lyrics": "https://genius.com/Kenny-mason-hit-lyrics"
        },
        {
            "Song": "Metal Wings",
            "Reason of Selection": "This song explores themes of individuality, freedom, and the desire to break free from societal norms. It encourages self-expression and the pursuit of personal growth and authenticity.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Individuality",
                "#Freedom",
                "#SelfExpression"
            ],
            "Overall Theme": "Exploring Individuality and Self-Expression",
            "artist": "Kenny Mason",
            "Linked Lyrics": "https://genius.com/Kenny-mason-metal-wings-lyrics"
        },
        {
            "Song": "PTSD",
            "Reason of Selection": "This introspective song addresses the impact of trauma, mental health struggles, and the challenges of navigating difficult experiences. It sheds light on the artist's personal journey and resilience.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Trauma",
                "#MentalHealthStruggles",
                "#Resilience"
            ],
            "Overall Theme": "Exploring Trauma and Mental Health Struggles",
            "artist": "Kenny Mason",
            "Linked Lyrics": "https://genius.com/Kenny-mason-ptsd-lyrics"
        },
        {
            "Song": "Black is Beautiful",
            "Reason of Selection": "This empowering song celebrates Black beauty and highlights the importance of self-love, pride, and embracing one's heritage. It promotes positive self-image and cultural appreciation.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#BlackBeauty",
                "#SelfLove",
                "#CulturalAppreciation"
            ],
            "Overall Theme": "Celebrating Black Beauty and Cultural Pride",
            "artist": "Kid 'n Play",
            "Linked Lyrics": "https://genius.com/Kid-n-play-black-is-beautiful-lyrics"
        },
        {
            "Song": "Face the Nation",
            "Reason of Selection": "This song addresses social and political issues, encouraging listeners to face the realities of the world and engage in meaningful dialogue and activism. It promotes critical thinking and awareness of societal challenges.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#SocialIssues",
                "#PoliticalAwareness",
                "#Activism"
            ],
            "Overall Theme": "Addressing Social and Political Realities",
            "artist": "Kid 'n Play",
            "Linked Lyrics": "https://genius.com/Kid-n-play-face-the-nation-lyrics"
        },
        {
            "Song": "Slippin'",
            "Reason of Selection": "This introspective song explores personal struggles, vulnerability, and the challenges faced by the artist. It delves into the ups and downs of life and reflects on the importance of resilience and perseverance.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#PersonalStruggles",
                "#Vulnerability",
                "#Resilience"
            ],
            "Overall Theme": "Exploring Personal Struggles and Resilience",
            "artist": "Kid 'n Play",
            "Linked Lyrics": "https://genius.com/Kid-n-play-slippin-lyrics"
        },
        {
            "Song": "Calling My Spirit",
            "Reason of Selection": "This introspective song reflects on the artist's personal journey, struggles, and the search for inner peace and spirituality. It explores themes of self-reflection, redemption, and finding one's true self.",
            "Socially Conscious": "No",
            "Culturally Significant": "No",
            "Keywords": [
                "#SelfReflection",
                "#Redemption",
                "#Spirituality"
            ],
            "Overall Theme": "Exploring Personal Journey and Spirituality",
            "artist": "Kodak Black",
            "Linked Lyrics": "https://genius.com/Kodak-black-calling-my-spirit-lyrics"
        },
        {
            "Song": "Tunnel Vision",
            "Reason of Selection": "This song addresses racial inequality, social injustices, and the artist's perspective on systemic issues. It sheds light on the challenges faced by marginalized communities and emphasizes the need for awareness and change.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#RacialInequality",
                "#SocialInjustices",
                "#SystemicIssues"
            ],
            "Overall Theme": "Addressing Racial Inequality and Social Issues",
            "artist": "Kodak Black",
            "Linked Lyrics": "https://genius.com/Kodak-black-tunnel-vision-lyrics"
        },
        {
            "Song": "2 Sides",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#duality",
                "#perspective"
            ],
            "Overall Theme": "Perspectives",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-2-sides-lyrics"
        },
        {
            "Song": "Anywhere but Here",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#escape",
                "#desire"
            ],
            "Overall Theme": "Escapism",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-anywhere-but-here-lyrics"
        },
        {
            "Song": "Blackboy, Whiteboy",
            "Reason of Selection": "Addresses racial dynamics and challenges",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#race",
                "#identity",
                "#socialjustice"
            ],
            "Overall Theme": "Racial identity",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-blackboy,-whiteboy-lyrics"
        },
        {
            "Song": "Close Your Eyes",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#introspection",
                "#reflection"
            ],
            "Overall Theme": "Self-reflection",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-close-your-eyes-lyrics"
        },
        {
            "Song": "DDFH",
            "Reason of Selection": "Celebrates and pays homage to hip hop culture",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#hiphop",
                "#nostalgia",
                "#dedication"
            ],
            "Overall Theme": "Hip hop culture",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-ddfh-lyrics"
        },
        {
            "Song": "Don't Die",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#caution",
                "#mortality"
            ],
            "Overall Theme": "Mortality",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-dont-die-lyrics"
        },
        {
            "Song": "Don't Let the Devil",
            "Reason of Selection": "",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#temptation",
                "#spirituality"
            ],
            "Overall Theme": "Spiritual struggle",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-dont-let-the-devil-lyrics"
        },
        {
            "Song": "Early",
            "Reason of Selection": "Explores the struggles faced by youth, particularly in marginalized communities, shedding light on social issues affecting them",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#youth",
                "#struggles",
                "#socialissues"
            ],
            "Overall Theme": "Youth struggles",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-early-lyrics"
        },
        {
            "Song": "Exit 9",
            "Reason of Selection": "Addresses the impact of drug use and alcoholism, reflecting on personal growth and overcoming challenges associated with substance abuse",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#DrugUse",
                "#Alcoholism",
                "#PersonalGrowth",
                "#Challenges"
            ],
            "Overall Theme": "Substance abuse and personal growth",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-exit-9-lyrics"
        },
        {
            "Song": "Follow Your Dreams",
            "Reason of Selection": "Encourages listeners to pursue their dreams, promoting self-empowerment and determination",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Dreams",
                "#SelfEmpowerment",
                "#Determination"
            ],
            "Overall Theme": "Pursuing dreams and self-empowerment",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-follow-your-dreams-lyrics"
        },
        {
            "Song": "Ghetto Gospel",
            "Reason of Selection": "Addresses social and political issues with a gospel influence",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#socialissues",
                "#gospel",
                "#activism"
            ],
            "Overall Theme": "Social and political issues",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-ghetto-gospel-lyrics"
        },
        {
            "Song": "Go",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#movement",
                "#energy"
            ],
            "Overall Theme": "Action and momentum",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-go-lyrics"
        },
        {
            "Song": "God in the Building II",
            "Reason of Selection": "Promotes faith and spirituality, highlighting their importance in personal growth and resilience",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Faith",
                "#Spirituality",
                "#PersonalGrowth",
                "#Resilience"
            ],
            "Overall Theme": "Faith and spirituality",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-god-in-the-building-ii-lyrics"
        },
        {
            "Song": "Goddammit",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#frustration",
                "#expression"
            ],
            "Overall Theme": "Frustration",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-goddammit-lyrics"
        },
        {
            "Song": "Grandma's House",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#nostalgia",
                "#family"
            ],
            "Overall Theme": "Nostalgia and family",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-grandmas-house-lyrics"
        },
        {
            "Song": "High and Holy",
            "Reason of Selection": "Addresses racial dynamics, challenges, and the mistreatment of marginalized communities",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#RacialInequality",
                "#Discrimination",
                "#MarginalizedCommunities",
                "#elevation",
                "#spirituality"
            ],
            "Overall Theme": "Racial dynamics and challenges",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-high-and-holy-lyrics"
        },
        {
            "Song": "Ju$t",
            "Reason of Selection": "Addresses racial dynamics, systemic oppression, political corruption, and the influence of money on power dynamics",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#RacialDynamics",
                "#SystemicOppression",
                "#PoliticalCorruption",
                "#PowerDynamics"
            ],
            "Overall Theme": "Racial dynamics, systemic oppression, and the influence of money",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-ju-t-lyrics"
        },
        {
            "Song": "Kill Your Masters",
            "Reason of Selection": "",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#SocialJustice",
                "#PoliticalActivism",
                "#Empowerment"
            ],
            "Overall Theme": "Social and Political Activism",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-kill-your-masters-lyrics"
        },
        {
            "Song": "Lie Cheat Steal",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#deception",
                "#ethics"
            ],
            "Overall Theme": "Deception and ethics",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-lie-cheat-steal-lyrics"
        },
        {
            "Song": "Motherless",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#loss",
                "#identity"
            ],
            "Overall Theme": "Loss and identity",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-motherless-lyrics"
        },
        {
            "Song": "NRICH",
            "Reason of Selection": "Addresses racial identity, systemic oppression, and empowerment",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#RacialIdentity",
                "#SystemicOppression",
                "#Empowerment"
            ],
            "Overall Theme": "Racial identity, systemic oppression, and empowerment",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-nrich-lyrics"
        },
        {
            "Song": "Pl8to",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#materialism",
                "#status"
            ],
            "Overall Theme": "Materialism and status",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-pl8to-lyrics"
        },
        {
            "Song": "Reagan",
            "Reason of Selection": "Critiques the Reagan administration and its impact on marginalized communities",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#politics",
                "#critique",
                "#socialissues"
            ],
            "Overall Theme": "Political critique and social issues",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-reagan-lyrics"
        },
        {
            "Song": "Run",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#movement",
                "#energy"
            ],
            "Overall Theme": "Action and momentum",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-run-lyrics"
        },
        {
            "Song": "Scared Straight",
            "Reason of Selection": "Highlights the consequences and realities of criminal activities and prison life",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#CriminalActivities",
                "#PrisonLife",
                "#Consequences",
                "#fear",
                "#redemption"
            ],
            "Overall Theme": "Consequences of engaging in illegal actions and prison experiences",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-scared-straight-lyrics"
        },
        {
            "Song": "Scientists and Engineers",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#knowledge",
                "#intellect"
            ],
            "Overall Theme": "Knowledge and intellect",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-scientists-and-engineers-lyrics"
        },
        {
            "Song": "Shed Tears",
            "Reason of Selection": "Explores themes of emotions and vulnerability, showcasing a personal and introspective side",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Emotions",
                "#Vulnerability",
                "#SelfReflection"
            ],
            "Overall Theme": "Emotions and vulnerability",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-shed-tears-lyrics"
        },
        {
            "Song": "Slammer",
            "Reason of Selection": "Explores the experiences and consequences of incarceration",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Incarceration",
                "#justice",
                "#PrisonLife",
                "#Consequences"
            ],
            "Overall Theme": "Experiences and consequences of being locked up in jail",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-slammer-lyrics"
        },
        {
            "Song": "Something for Junkies",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#addiction",
                "#struggle"
            ],
            "Overall Theme": "Addiction and struggle",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-something-for-junkies-lyrics"
        },
        {
            "Song": "Spaceship Views",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#imagination",
                "#escape"
            ],
            "Overall Theme": "Imagination and escape",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-spaceship-views-lyrics"
        },
        {
            "Song": "That's Life",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#acceptance",
                "#resilience"
            ],
            "Overall Theme": "Acceptance and resilience",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-thats-life-lyrics"
        },
        {
            "Song": "Walking in the Snow",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#oppression",
                "#activism"
            ],
            "Overall Theme": "Oppression and activism",
            "artist": "Killer Mike",
            "Linked Lyrics": "https://genius.com/Killer-mike-walking-in-the-snow-lyrics"
        },
        {
            "Song": "Calling My Spirit",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#SelfReflection",
                "#PersonalJourney"
            ],
            "Overall Theme": "Personal journey and self-reflection",
            "artist": "Kodak Black",
            "Linked Lyrics": "https://genius.com/Kodak-black-calling-my-spirit-lyrics"
        },
        {
            "Song": "Tunnel Vision",
            "Reason of Selection": "Addresses racial inequality, social injustices, and the artist's perspective on systemic issues. It sheds light on the challenges faced by marginalized communities and emphasizes the need for awareness and change.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#RacialInequality",
                "#SocialInjustices",
                "#SystemicIssues"
            ],
            "Overall Theme": "Addressing racial inequality and social issues",
            "artist": "Kodak Black",
            "Linked Lyrics": "https://genius.com/Kodak-black-tunnel-vision-lyrics"
        },
        {
          "Song": "Erase Racism",
          "Reason of Selection": "This song addresses the important theme of racism and the urgency to combat it.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "No",
          "Keywords": [
            "#Racism", "#Unity", "#Equality"
          ],
          "Overall Theme": "Anti-Racism",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-erase-racism-lyrics"
        },
        {
          "Song": "For da Brothaz",
          "Reason of Selection": "A look at life choices and their consequences, especially for young people.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
            "#Youth", "#Choices", "#Life"
          ],
          "Overall Theme": "Life Choices",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-for-da-brothaz-lyrics"
        },
        {
          "Song": "Ghetto Knows",
          "Reason of Selection": "The song provides an honest insight into the realities of ghetto life.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
            "#Ghetto", "#Survival", "#Reality"
          ],
          "Overall Theme": "Ghetto Life",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-ghetto-knows-lyrics"
        },
        {
          "Song": "Good Die Young",
          "Reason of Selection": "Reflects on morality and the paradox that good people often suffer.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "No",
          "Keywords": [
            "#Morality", "#Suffering", "#Virtue"
          ],
          "Overall Theme": "Moral Reflection",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-good-die-young-lyrics"
        },
        {
          "Song": "Ill Street Blues",
          "Reason of Selection": "A raw depiction of street life, shedding light on violence, drugs, and hardships.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
            "#StreetLife", "#Violence", "#Hardships"
          ],
          "Overall Theme": "Street Realities",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-ill-street-blues-lyrics"
        },
        {
          "Song": "My Life",
          "Reason of Selection": "An uplifting song that emphasizes the importance of staying true to oneself.",
          "Socially Conscious": "No",
          "Culturally Significant": "Yes",
          "Keywords": [
            "#SelfLove", "#Positivity", "#Empowerment"
          ],
          "Overall Theme": "Personal Growth",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-my-life-lyrics"
        },
        {
          "Song": "On the Run",
          "Reason of Selection": "Depicts the chase and struggle of living outside the law, providing a view into a criminal's mind.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "No",
          "Keywords": [
            "#Crime", "#Struggle", "#Survival"
          ],
          "Overall Theme": "Criminal Life",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-on-the-run-lyrics"
        },
        {
          "Song": "Riker's Island",
          "Reason of Selection": "A stark portrayal of prison life and the violent, unforgiving reality of Riker's Island. It serves as a cautionary tale about crime and punishment.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
            "#PrisonLife", "#Crime", "#Punishment", "#CautionaryTale"
          ],
          "Overall Theme": "Consequences of Crime",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-and-dj-polo-rikers-island-lyrics"
        },
        {
          "Song": "Road to the Riches",
          "Reason of Selection": "A classic that addresses the pursuit of wealth, poverty, and the gritty reality of urban life.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
            "#Wealth", "#Poverty", "#UrbanLife"
          ],
          "Overall Theme": "Pursuit of Wealth",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-road-to-the-riches-lyrics"
        },
        {
          "Song": "Sad",
          "Reason of Selection": "Emotionally resonant song detailing loss, grief, and the inescapable pain of reality.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "No",
          "Keywords": [
            "#Loss", "#Grief", "#Reality"
          ],
          "Overall Theme": "Emotional Struggles",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-sad-lyrics"
        },
        {
          "Song": "Streets of New York",
          "Reason of Selection": "A vivid narrative of the New York streets, highlighting the culture, struggles, and hopes of its inhabitants.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
            "#Desperation", 
            "#Crime",
            "#DrugDealing",
            "#DrugWars",
            "#LossOfInnocense",
            "#MentalEnslavement",
            "#Survival",
            "#Corruption",
            "#BrokenDreams",
            "#Violence",
            "#Loss",
            "#StreetWisdom",
            "#Abuse",
            "#Culture", 
            "#UrbanStruggles",
            "#FamilyStruggles",
            "#SocietyIssues",
            "#MoralDilemmas",
            "#Poverty",
            "#StreetLife",
            "#Addiction",
          ],
          "Overall Theme": "New York Culture",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-streets-of-new-york-lyrics"
        },
        {
          "Song": "The Streets",
          "Reason of Selection": "A realistic look at urban streets, including the violence, addiction, and societal issues faced by the residents.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
            "#Urban", "#Violence", "#Society"
          ],
          "Overall Theme": "Urban Challenges",
          "artist": "Kool G Rap",
          "Linked Lyrics": "https://genius.com/Kool-g-rap-the-streets-lyrics"
        },
        {
            "Song": "Go See the Doctor",
            "Reason of Selection": "Addresses the importance of seeking medical help and highlights health issues in the community",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#HealthCare",
                "#CommunityWellness",
                "#HealthAwareness"
            ],
            "Overall Theme": "Promoting health awareness and seeking medical assistance",
            "artist": "Kool Moe Dee",
            "Linked Lyrics": "https://genius.com/Kool-moe-dee-go-see-the-doctor-lyrics"
        },
        {
            "Song": "Rise 'N' Shine",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#Motivation",
                "#PositiveVibes"
            ],
            "Overall Theme": "Motivation and positivity",
            "artist": "Kool Moe Dee",
            "Linked Lyrics": "https://genius.com/Kool-moe-dee-rise-n-shine-lyrics"
        },
        {
            "Song": "Self-Destruction",
            "Reason of Selection": "Addresses the issue of violence and promotes unity and self-improvement within the community",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#ViolencePrevention",
                "#Unity",
                "#SelfImprovement"
            ],
            "Overall Theme": "Promoting unity and self-improvement while addressing violence",
            "artist": "Kool Moe Dee",
            "Linked Lyrics": "https://genius.com/Kool-moe-dee-self-destruction-lyrics"
        },
        {
            "Song": "Wild Wild West",
            "Reason of Selection": "Addresses the challenges and struggles faced in urban environments, providing social commentary on the conditions of these neighborhoods",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#UrbanChallenges",
                "#SocialCommentary",
                "#StreetLife"
            ],
            "Overall Theme": "Portraying urban environments as the Wild Wild West",
            "artist": "Kool Moe Dee",
            "Linked Lyrics": "https://genius.com/Kool-moe-dee-wild-wild-west-lyrics"
        },
        {
            "Song": "Black and Proud",
            "Reason of Selection": "Celebrates black pride and promotes a positive self-image for the black community",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#BlackPride",
                "#PositiveIdentity",
                "#Empowerment"
            ],
            "Overall Theme": "Promoting black pride and a positive self-image",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-black-and-proud-lyrics"
        },
        {
            "Song": "Black Cop",
            "Reason of Selection": "Addresses the complexities of being a black police officer and explores issues of racial profiling and police brutality",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#RacialProfiling",
                "#PoliceBrutality",
                "#IdentityStruggles"
            ],
            "Overall Theme": "Exploring the experiences of black police officers and racial injustice",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-black-cop-lyrics"
        },
        {
            "Song": "Edutainment",
            "Reason of Selection": "Emphasizes the importance of education and entertainment as tools for empowerment and social change",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Education",
                "#Entertainment",
                "#Empowerment"
            ],
            "Overall Theme": "Promoting education and entertainment as means of empowerment",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-edutainment-lyrics"
        },
        {
            "Song": "Elementary",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#RapSkills",
                "#Lyricism"
            ],
            "Overall Theme": "Rap skills and lyricism",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-elementary-lyrics"
        },
        {
            "Song": "Ghetto Music",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#Ghetto",
                "#Music"
            ],
            "Overall Theme": "Ghetto life and music",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-ghetto-music-lyrics"
        },
        {
            "Song": "House Niggas",
            "Reason of Selection": "Addresses the issue of internalized racism within the black community and critiques those who align with oppressive systems",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#InternalizedRacism",
                "#OppressiveSystems",
                "#BlackIdentity"
            ],
            "Overall Theme": "Critiquing internalized racism and aligning with oppressive systems",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-house-niggas-lyrics"
        },
        {
            "Song": "Illegal Business",
            "Reason of Selection": "Addresses the power structure and corruption surrounding illegal drug operations in America",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#DrugTrade",
                "#Corruption",
                "#PowerStructure"
            ],
            "Overall Theme": "Exploring the power structure and corruption in the illegal drug trade",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-illegal-business-lyrics"
        },
        {
            "Song": "Jah Rulez",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#ReggaeInfluence",
                "#Spirituality"
            ],
            "Overall Theme": "Reggae influence and spirituality",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-jah-rulez-lyrics"
        },
        {
            "Song": "Loves Gonna Getcha",
            "Reason of Selection": "Explores the consequences of engaging in criminal activities and highlights the need for personal responsibility",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Consequences",
                "#PersonalResponsibility",
                "#SelfReflection"
            ],
            "Overall Theme": "Addressing the consequences of criminal activities and personal responsibility",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-loves-gonna-getcha-lyrics"
        },
        {
            "Song": "My Philosophy",
            "Reason of Selection": "Explores philosophical and introspective themes, emphasizing the power of knowledge and self-awareness",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Philosophy",
                "#Knowledge",
                "#SelfAwareness"
            ],
            "Overall Theme": "Promoting knowledge, self-awareness, and philosophical introspection",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-my-philosophy-lyrics"
        },
        {
            "Song": "Nervous",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#Anxiety",
                "#Emotions"
            ],
            "Overall Theme": "Anxiety and emotions",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-nervous-lyrics"
        },
        {
            "Song": "Racist",
            "Reason of Selection": "Confronts the issue of racism and challenges racial prejudices and stereotypes",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Racism",
                "#Prejudices",
                "#Stereotypes"
            ],
            "Overall Theme": "Confronting racism and challenging racial prejudices",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-racist-lyrics"
        },
        {
            "Song": "Self-Destruction",
            "Reason of Selection": "Addresses the issue of violence and self-destruction in the black community, advocating for unity, peace, and positive change",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Violence",
                "#Unity",
                "#PositiveChange"
            ],
            "Overall Theme": "Promoting unity, peace, and positive change in the black community",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-self-destruction-lyrics"
        },
        {
            "Song": "Sex and Violence",
            "Reason of Selection": "Explores the themes of sex and violence and their impact on society, reflecting on their prevalence in media and advocating for a shift towards more positive content",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Sex",
                "#Violence",
                "#MediaInfluence"
            ],
            "Overall Theme": "Reflecting on the themes of sex and violence in media and advocating for positive content",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-sex-and-violence-lyrics"
        },
        {
            "Song": "Sound of Da Police",
            "Reason of Selection": "Addresses issues of police brutality, racial profiling, and systemic injustice, calling for accountability and change within law enforcement",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#PoliceBrutality",
                "#RacialProfiling",
                "#SystemicInjustice"
            ],
            "Overall Theme": "Addressing police brutality, racial profiling, and systemic injustice",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-sound-of-da-police-lyrics"
        },
        {
            "Song": "Stop the Violence",
            "Reason of Selection": "Advocates for an end to violence and promotes peace, unity, and community empowerment",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#StopTheViolence",
                "#Peace",
                "#CommunityEmpowerment"
            ],
            "Overall Theme": "Promoting peace, unity, and community empowerment to stop violence",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-stop-the-violence-lyrics"
        },
        {
            "Song": "T'Cha",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#RapSkills",
                "#Lyricism"
            ],
            "Overall Theme": "Rap skills and lyricism",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-tcha-lyrics"
        },
        {
            "Song": "The Eye Opener",
            "Reason of Selection": "Explores social issues, challenges conventional thinking, and encourages listeners to critically examine the world around them",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#SocialIssues",
                "#CriticalThinking",
                "#Awareness"
            ],
            "Overall Theme": "Challenging conventional thinking and promoting critical examination of social issues",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-the-eye-opener-lyrics"
        },
        {
            "Song": "Who Protects Us From You",
            "Reason of Selection": "Raises questions about the role of law enforcement in protecting communities and critiques instances of police misconduct",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#LawEnforcement",
                "#PoliceMisconduct",
                "#Accountability"
            ],
            "Overall Theme": "Questioning the role of law enforcement and addressing police misconduct",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-who-protects-us-from-you-lyrics"
        },
        {
            "Song": "Why Is That?",
            "Reason of Selection": "Explores societal issues, encourages critical thinking, and questions the status quo",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#SocietalIssues",
                "#CriticalThinking",
                "#Questioning"
            ],
            "Overall Theme": "Encouraging critical thinking and questioning societal norms",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-why-is-that?-lyrics"
        },
        {
            "Song": "You Must Learn",
            "Reason of Selection": "Emphasizes the importance of education, knowledge of history, and cultural awareness to combat ignorance and promote positive change",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Education",
                "#Knowledge",
                "#CulturalAwareness"
            ],
            "Overall Theme": "Promoting education, historical knowledge, and cultural awareness for positive change",
            "artist": "KRS-One",
            "Linked Lyrics": "https://genius.com/Krs-one-you-must-learn-lyrics"
        },
        {
            "Song": "America",
            "Reason of Selection": "Reflects on the state of America and addresses social issues",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#America",
                "#SocialIssues",
                "#Reflection"
            ],
            "Overall Theme": "Commentary on America and its social challenges",
            "artist": "Kurtis Blow",
            "Linked Lyrics": "https://genius.com/Kurtis-blow-america-lyrics"
        },
        {
            "Song": "Basketball",
            "Reason of Selection": "Celebrates the sport of basketball and its cultural impact",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#Basketball",
                "#Sports",
                "#Celebration"
            ],
            "Overall Theme": "Love for the game of basketball",
            "artist": "Kurtis Blow",
            "Linked Lyrics": "https://genius.com/Kurtis-blow-basketball-lyrics"
        },
        {
            "Song": "If I Ruled the World",
            "Reason of Selection": "Expresses ideas and dreams of a utopian world, highlighting societal issues and aspirations",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Utopia",
                "#Dreams",
                "#SocialIssues"
            ],
            "Overall Theme": "Imagining a better world and addressing social challenges",
            "artist": "Kurtis Blow",
            "Linked Lyrics": "https://genius.com/Kurtis-blow-if-i-ruled-the-world-lyrics"
        },
        {
            "Song": "The Breaks",
            "Reason of Selection": "One of the first commercially successful rap songs, contributing to the development of hip hop culture",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#HipHopCulture",
                "#Breaks"
            ],
            "Overall Theme": "Celebration of hip hop culture",
            "artist": "Kurtis Blow",
            "Linked Lyrics": "https://genius.com/Kurtis-blow-the-breaks-lyrics"
        },
        {
            "Song": "Doo Wop (That Thing)",
            "Reason of Selection": "Addresses gender dynamics, self-respect, and the challenges faced by young people",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#GenderDynamics",
                "#SelfRespect",
                "#YouthStruggles"
            ],
            "Overall Theme": "Reflections on relationships and societal expectations",
            "artist": "Lauryn Hill",
            "Linked Lyrics": "https://genius.com/Lauryn-hill-doo-wop-(that-thing)-lyrics"
        },
        {
            "Song": "Every Ghetto, Every City",
            "Reason of Selection": "Explores the realities and experiences of growing up in the ghetto, highlighting the resilience and strength of the community",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#GhettoLife",
                "#CommunityStrength",
                "#Resilience"
            ],
            "Overall Theme": "Celebrating and shedding light on the experiences of inner-city life",
            "artist": "Lauryn Hill",
            "Linked Lyrics": "https://genius.com/Lauryn-hill-every-ghetto,-every-city-lyrics"
        },
        {
            "Song": "Everything is Everything",
            "Reason of Selection": "Expresses the interconnectedness of life, emphasizing the need for self-reflection, growth, and positive change",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Interconnectedness",
                "#SelfReflection",
                "#PositiveChange"
            ],
            "Overall Theme": "Seeking personal and collective transformation",
            "artist": "Lauryn Hill",
            "Linked Lyrics": "https://genius.com/Lauryn-hill-everything-is-everything-lyrics"
        },
        {
            "Song": "Final Hour",
            "Reason of Selection": "Addresses the state of the world and the urgency for change, emphasizing the power of collective action",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#GlobalIssues",
                "#UrgencyForChange",
                "#CollectiveAction"
            ],
            "Overall Theme": "Examining the world's challenges and calling for action",
            "artist": "Lauryn Hill",
            "Linked Lyrics": "https://genius.com/Lauryn-hill-final-hour-lyrics"
        },
        {
            "Song": "Forgive Them Father",
            "Reason of Selection": "Explores themes of forgiveness, redemption, and the struggle to overcome societal pressures and personal mistakes",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Forgiveness",
                "#Redemption",
                "#SocietalPressures"
            ],
            "Overall Theme": "Addressing personal growth and societal expectations",
            "artist": "Lauryn Hill",
            "Linked Lyrics": "https://genius.com/Lauryn-hill-forgive-them-father-lyrics"
        },
        {
            "Song": "To Zion",
            "Reason of Selection": "Shares a personal story of choosing motherhood over career, challenging traditional notions of success and fulfillment",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Motherhood",
                "#ChallengingNorms",
                "#PersonalChoices"
            ],
            "Overall Theme": "Celebrating the power of personal choices and redefining success",
            "artist": "Lauryn Hill",
            "Linked Lyrics": "https://genius.com/Lauryn-hill-to-zion-lyrics"
        },
        {
            "Song": "Better Days",
            "Reason of Selection": "Importance of staying positive in the face of adversity",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#adversity",
                "#StayingPositive",
                "#hope"
            ],
            "Overall Theme": "Importance of staying positive in the face of adversity",
            "artist": "Lil Boosie",
            "Linked Lyrics": "https://genius.com/Lil-boosie-better-days-lyrics"
        },
        {
            "Song": "Dead Man Walking",
            "Reason of Selection": "Death penalty and the importance of due process",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#DeathPenalty",
                "#DueProcess",
                "#justice"
            ],
            "Overall Theme": "Death penalty and the importance of due process",
            "artist": "Lil Boosie",
            "Linked Lyrics": "https://genius.com/Lil-boosie-dead-man-walking-lyrics"
        },
        {
            "Song": "Free Boosie",
            "Reason of Selection": "Lil Boosie's experience being incarcerated",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#incarceration",
                "#hope"
            ],
            "Overall Theme": "Lil Boosie's experience being incarcerated",
            "artist": "Lil Boosie",
            "Linked Lyrics": "https://genius.com/Lil-boosie-free-boosie-lyrics"
        },
        {
            "Song": "Freedom",
            "Reason of Selection": "Lil Boosie's experience being released from prison",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#incarceration",
                "#hope"
            ],
            "Overall Theme": "Lil Boosie's experience being released from prison",
            "artist": "Lil Boosie",
            "Linked Lyrics": "https://genius.com/Lil-boosie-freedom-lyrics"
        },
        {
            "Song": "True Soldier",
            "Reason of Selection": "Resilience of Black people in the face of adversity",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#BlackPeople",
                "#adversity",
                "#resilience"
            ],
            "Overall Theme": "Resilience of Black people",
            "artist": "Lil Boosie",
            "Linked Lyrics": "https://genius.com/Lil-boosie-true-soldier-lyrics"
        },
        {
            "Song": "Letter to My Son",
            "Reason of Selection": "Lil Boosie's letter to his son, urging him to stay out of trouble and make something of himself",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#fatherhood",
                "#advice",
                "#hope"
            ],
            "Overall Theme": "#fatherhood",
            "artist": "Lil Boosie",
            "Linked Lyrics": "https://genius.com/Lil-boosie-letter-to-my-son-lyrics"
        },
        {
            "Song": "My Block",
            "Reason of Selection": "Poverty and violence in inner-city neighborhoods",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#poverty",
                "#violence",
                "#inner-city neighborhoods"
            ],
            "Overall Theme": "Poverty and violence in inner-city neighborhoods",
            "artist": "Lil Boosie",
            "Linked Lyrics": "https://genius.com/Lil-boosie-my-block-lyrics"
        },
        {
            "Song": "Hard Times",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Lil Jon",
            "Linked Lyrics": "https://genius.com/Lil-jon-hard-times-lyrics"
        },
        {
            "Song": "I Am American",
            "Reason of Selection": "Expresses patriotic sentiments and pride in being American, highlighting the diverse aspects of American identity.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Patriotism",
                "#AmericanIdentity"
            ],
            "Overall Theme": "Celebrating American identity and diversity.",
            "artist": "Lil John",
            "Linked Lyrics": "https://genius.com/Lil-john-i-am-american-lyrics"
        },
        {
            "Song": "Put Your Hood Up",
            "Reason of Selection": "A high-energy anthem celebrating neighborhood pride and unity, urging listeners to represent their communities.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#NeighborhoodPride",
                "#Unity",
                "#Energy"
            ],
            "Overall Theme": "Embracing and representing one's neighborhood, fostering unity and pride.",
            "artist": "Lil John",
            "Linked Lyrics": "https://genius.com/Lil-john-put-your-hood-up-lyrics"
        },
        {
            "Song": "Read a Book",
            "Reason of Selection": "A satirical and humorous take on promoting literacy and education by emphasizing the importance of reading.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#Satire",
                "#Literacy",
                "#Education"
            ],
            "Overall Theme": "Promoting literacy and education in a playful and entertaining manner.",
            "artist": "Lil John",
            "Linked Lyrics": "https://genius.com/Lil-john-read-a-book-lyrics"
        },
        {
            "Song": "Rep Yo City",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Lil John",
            "Linked Lyrics": "https://genius.com/Lil-john-rep-yo-city-lyrics"
        },
        {
            "Song": "Dark Queen",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Lil Uzi Vert",
            "Linked Lyrics": "https://genius.com/Lil-uzi-vert-dark-queen-lyrics"
        },
        {
            "Song": "Money Longer",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Lil Uzi Vert",
            "Linked Lyrics": "https://genius.com/Lil-uzi-vert-money-longer-lyrics"
        },
        {
            "Song": "The Way Life Goes",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Lil Uzi Vert",
            "Linked Lyrics": "https://genius.com/Lil-uzi-vert-the-way-life-goes-lyrics"
        },
        {
            "Song": "XO Tour Lif3",
            "Reason of Selection": "Reflects on themes of depression, mental health struggles, and the darker side of fame and success.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#Depression",
                "#MentalHealth",
                "#Fame"
            ],
            "Overall Theme": "Depression and the Dark Side of Fame",
            "artist": "Lil Uzi Vert",
            "Linked Lyrics": "https://genius.com/Lil-uzi-vert-xo-tour-lif3-lyrics"
        },
        {
            "Song": "Georgia Bush",
            "Reason of Selection": "This song provides a critical perspective on social and political issues.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#politics",
                "#socialissues"
            ],
            "Overall Theme": "Political",
            "artist": "Lil Wayne",
            "Linked Lyrics": "https://genius.com/Lil-wayne-georgia-bush-lyrics"
        },
        {
            "Song": "London Roads",
            "Reason of Selection": "This song reflects on personal struggles and experiences.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#personalstruggles",
                "#reflection"
            ],
            "Overall Theme": "Personal",
            "artist": "Lil Wayne",
            "Linked Lyrics": "https://genius.com/Lil-wayne-london-roads-lyrics"
        },
        {
            "Song": "Misunderstood",
            "Reason of Selection": "This song explores themes of self-identity and societal pressures.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#selfidentity",
                "#societypressures"
            ],
            "Overall Theme": "Individuality",
            "artist": "Lil Wayne",
            "Linked Lyrics": "https://genius.com/Lil-wayne-misunderstood-lyrics"
        },
        {
            "Song": "Open Letter",
            "Reason of Selection": "This song addresses social and political issues, making it culturally significant.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#activism",
                "#socialjustice",
                "#currentevents"
            ],
            "Overall Theme": "Social Commentary",
            "artist": "Lil Wayne",
            "Linked Lyrics": "https://genius.com/Lil-wayne-open-letter-lyrics"
        },
        {
            "Song": "Tie My Hands",
            "Reason of Selection": "This song highlights social issues and resilience in the face of adversity.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#socialissues",
                "#resilience",
                "#communitystruggles"
            ],
            "Overall Theme": "Adversity",
            "artist": "Lil Wayne",
            "Linked Lyrics": "https://genius.com/Lil-wayne-tie-my-hands-lyrics"
        },
        {
            "Song": "Black Radio",
            "Reason of Selection": "This song addresses systemic racism and the representation of Black voices in media.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#systemicracism",
                "#representation",
                "#media"
            ],
            "Overall Theme": "Social Justice",
            "artist": "LL Cool J",
            "Linked Lyrics": "https://genius.com/Ll-cool-j-black-radio-lyrics"
        },
        {
            "Song": "Dope Money",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "The Lox",
            "Linked Lyrics": "https://genius.com/The-lox-dope-money-lyrics"
        },
        {
            "Song": "Why",
            "Reason of Selection": "This song raises questions about social issues and the state of the world.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#socialissues",
                "#questioning"
            ],
            "Overall Theme": "Inquiry",
            "artist": "The Lox",
            "Linked Lyrics": "https://genius.com/The-lox-why-lyrics"
        },
        {
            "Song": "Thizzle Dance",
            "Reason of Selection": "This song showcases Mac Dre's unique style and influence on the hyphy movement.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#hyphy",
                "#party"
            ],
            "Overall Theme": "Celebration",
            "artist": "Mac Dre",
            "Linked Lyrics": "https://genius.com/Mac-dre-thizzle-dance-lyrics"
        },
        {
            "Song": "Feelin' Myself",
            "Reason of Selection": "This song promotes self-confidence and a positive self-image.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#selfconfidence",
                "#empowerment"
            ],
            "Overall Theme": "Self-assurance",
            "artist": "Mac Dre",
            "Linked Lyrics": "https://genius.com/Mac-dre-feelin-myself-lyrics"
        },
        {
            "Song": "Thizzle Washington",
            "Reason of Selection": "This song pays homage to Mac Dre's hometown and represents his artistic identity.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#hometownpride",
                "#artisticexpression"
            ],
            "Overall Theme": "Identity",
            "artist": "Mac Dre",
            "Linked Lyrics": "https://genius.com/Mac-dre-thizzle-washington-lyrics"
        },
        {
            "Song": "Punk Police",
            "Reason of Selection": "This song criticizes law enforcement and addresses the relationship between the police and the community.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#policebrutality",
                "#communityrelations"
            ],
            "Overall Theme": "Social critique",
            "artist": "Mac Dre",
            "Linked Lyrics": "https://genius.com/Mac-dre-punk-police-lyrics"
        },
        {
            "Song": "Genie of the Lamp",
            "Reason of Selection": "This song reflects on Mac Dre's success and the rewards of his hard work.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#success",
                "#hardwork"
            ],
            "Overall Theme": "Achievements",
            "artist": "Mac Dre",
            "Linked Lyrics": "https://genius.com/Mac-dre-genie-of-the-lamp-lyrics"
        },
        {
            "Song": "Dreganomics",
            "Reason of Selection": "This song highlights Mac Dre's entrepreneurial mindset and the economic side of his hustling.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#entrepreneurship",
                "#economics"
            ],
            "Overall Theme": "Business",
            "artist": "Mac Dre",
            "Linked Lyrics": "https://genius.com/Mac-dre-dreganomics-lyrics"
        },
        {
            "Song": "Just Hangin' Out",
            "Reason of Selection": "This track addresses the importance of unity and solidarity within the community. It encourages people to come together, support one another, and uplift their surroundings. With its positive message and inclusive themes, it's both socially conscious and culturally relevant.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#Unity",
                "#Community"
            ],
            "artist": "Main Source",
            "Linked Lyrics": "https://genius.com/Main-source-just-hangin-out-lyrics"
        },
        {
            "Song": "Live at the BBQ",
            "Reason of Selection": "This iconic track features powerful lyrics, including thought-provoking lines like 'At 12 I went to hell for snuffing Jesus' and 'Kidnapped the president's wife without a plan.' These lines from Nas showcase the raw and provocative nature of the era while reflecting the social consciousness prevalent in hip hop during that time. The song's cultural significance and impact make it both socially conscious and culturally relevant.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": [
                "#HipHop",
                "#Anthem",
                "#ThoughtProvoking"
            ],
            "artist": "Main Source",
            "Linked Lyrics": "https://genius.com/Main-source-live-at-the-bbq-lyrics"
        },
        {
          "Song": "Cocaine",
          "Reason of Selection": "Reflects on the impact of cocaine on the artist's life",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#CulturalImpact", "#PersonalReflection"],
          "Overall Theme": "Impact of Cocaine",
          "artist": "MC Shan",
          "Linked Lyrics": "https://genius.com/MC-shan-cocaine-lyrics"
        },
        {
          "Song": "I Pioneered This",
          "Reason of Selection": "Highlights his contributions to hip-hop",
          "Socially Conscious": "No",
          "Culturally Significant": "Yes",
          "Keywords": ["#HipHopPioneer", "#Contributions"],
          "Overall Theme": "Hip-Hop Pioneer",
          "artist": "MC Shan",
          "Linked Lyrics": "https://genius.com/MC-shan-i-pioneered-this-lyrics"
        },
        {
          "Song": "Juice Crew Law",
          "Reason of Selection": "Addresses unity and support within the Juice Crew",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#Unity", "#JuiceCrew"],
          "Overall Theme": "Unity and Support",
          "artist": "MC Shan",
          "Linked Lyrics": "https://genius.com/MC-shan-juice-crew-law-lyrics"
        },
        {
          "Song": "Kill That Noise",
          "Reason of Selection": "Speaks out against violence and gun culture",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#AntiViolence", "#GunCulture"],
          "Overall Theme": "Anti-Violence",
          "artist": "MC Shan",
          "Linked Lyrics": "https://genius.com/MC-shan-kill-that-noise-lyrics"
        },
        {
          "Song": "Project 'Ho",
          "Reason of Selection": "Explores issues faced by women in the projects",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#WomenInProjects", "#SocialIssues"],
          "Overall Theme": "Women in the Projects",
          "artist": "MC Shan",
          "Linked Lyrics": "https://genius.com/MC-shan-project-ho-lyrics"
        },
        {
          "Song": "The Bridge",
          "Reason of Selection": "Celebrates hip-hop culture and its origins",
          "Socially Conscious": "No",
          "Culturally Significant": "Yes",
          "Keywords": ["#HipHopCulture", "#Origins",   "#chasedreams", "#reachyourgoals", "#followyourheart", "#listentoyourself",  "#inspiration", "#motivation",  "#reachforyourgoals", "#vision", "#purpose", "#focus", "#persistence", "#overcomeobstacles",  "#heavychains"],
          "Overall Theme": "Hip-Hop Culture",
          "artist": "MC Shan",
          "Linked Lyrics": "https://genius.com/MC-shan-the-bridge-lyrics"
        },
        {
            "Song": "Doomsday",
            "Reason of Selection": "This song showcases MF DOOM's unique style and introduces his alter ego and persona.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#hiphop",
                "#persona"
            ],
            "Overall Theme": "Introduction",
            "artist": "MF DOOM",
            "Linked Lyrics": "https://genius.com/Mf-doom-doomsday-lyrics"
        },
        {
            "Song": "Accordion",
            "Reason of Selection": "This song highlights MF DOOM's lyrical skill and intricate wordplay.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#lyrics",
                "#wordplay"
            ],
            "Overall Theme": "Musicality",
            "artist": "MF DOOM",
            "Linked Lyrics": "https://genius.com/Mf-doom-accordion-lyrics"
        },
        {
            "Song": "Rapp Snitch Knishes",
            "Reason of Selection": "This song critiques the negative influence of snitches and informants in the hip-hop community.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#snitches",
                "#hiphopculture"
            ],
            "Overall Theme": "Community",
            "artist": "MF DOOM",
            "Linked Lyrics": "https://genius.com/Mf-doom-rapp-snitch-knishes-lyrics"
        },
        {
            "Song": "All Caps",
            "Reason of Selection": "This song showcases MF DOOM's signature flow and wordplay.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#flow",
                "#wordplay"
            ],
            "Overall Theme": "Style",
            "artist": "MF DOOM",
            "Linked Lyrics": "https://genius.com/Mf-doom-all-caps-lyrics"
        },
        {
            "Song": "Rhymes Like Dimes",
            "Reason of Selection": "This song demonstrates MF DOOM's skill in crafting rhymes and clever wordplay.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#rhymes",
                "#wordplay"
            ],
            "Overall Theme": "Artistry",
            "artist": "MF DOOM",
            "Linked Lyrics": "https://genius.com/Mf-doom-rhymes-like-dimes-lyrics"
        },
        {
            "Song": "One Beer",
            "Reason of Selection": "This song showcases MF DOOM's storytelling abilities and narrative style.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#storytelling",
                "#narrative"
            ],
            "Overall Theme": "Storytelling",
            "artist": "MF DOOM",
            "Linked Lyrics": "https://genius.com/Mf-doom-one-beer-lyrics"
        },
        {
            "Song": "Gazzillion Ear",
            "Reason of Selection": "This song explores themes of power, control, and the manipulation of media.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#power",
                "#media",
                "#manipulation"
            ],
            "Overall Theme": "Influence",
            "artist": "MF DOOM",
            "Linked Lyrics": "https://genius.com/Mf-doom-gazzillion-ear-lyrics"
        },
        {
            "Song": "Pass That Dutch",
            "Reason of Selection": "This song promotes a carefree and energetic atmosphere, encouraging listeners to enjoy and let loose.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#party",
                "#energetic"
            ],
            "Overall Theme": "Fun",
            "artist": "Missy Elliott",
            "Linked Lyrics": "https://genius.com/Missy-elliott-pass-that-dutch-lyrics"
        },
        {
            "Song": "Drink Away the Pain (Situations)",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-drink-away-the-pain-(situations)-lyrics"
        },
        {
            "Song": "G.O.D. Pt. III",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-god-pt-iii-lyrics"
        },
        {
            "Song": "Give Up the Goods (Just Step)",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-give-up-the-goods-(just-step)-lyrics"
        },
        {
            "Song": "Hell on Earth",
            "Reason of Selection": "This song depicts the harsh realities of street life and the struggles of living in a violent environment.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#streetlife",
                "#violence"
            ],
            "Overall Theme": "Street Realities",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-hell-on-earth-lyrics"
        },
        {
            "Song": "Quiet Storm",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-quiet-storm-lyrics"
        },
        {
            "Song": "Shook Ones Pt. II",
            "Reason of Selection": "This song is considered a classic in hip-hop and showcases Mobb Deep's gritty lyricism and depiction of street life.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#hiphopclassic",
                "#lyricism",
                "#streetlife"
            ],
            "Overall Theme": "Gritty Realism",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-shook-ones-pt-ii-lyrics"
        },
        {
            "Song": "Survival of the Fittest",
            "Reason of Selection": "This song explores themes of resilience and survival in challenging circumstances.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#resilience",
                "#survival"
            ],
            "Overall Theme": "Endurance",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-survival-of-the-fittest-lyrics"
        },
        {
            "Song": "Temperature's Rising",
            "Reason of Selection": "This song delves into personal struggles, including relationship issues and the pressures of life.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#relationships",
                "#lifechallenges"
            ],
            "Overall Theme": "Personal Struggles",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-temperatures-rising-lyrics"
        },
        {
            "Song": "The Start of Your Ending (41st Side)",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-the-start-of-your-ending-(41st-side)-lyrics"
        },
        {
            "Song": "Trife Life",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Mobb Deep",
            "Linked Lyrics": "https://genius.com/Mobb-deep-trife-life-lyrics"
        },
        {
            "Song": "Black Heart",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Moneybagg Yo",
            "Linked Lyrics": "https://genius.com/Moneybagg-yo-black-heart-lyrics"
        },
        {
            "Song": "Fed Baby's",
            "Reason of Selection": "This song explores the struggles and experiences of growing up in poverty.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#poverty",
                "#struggles"
            ],
            "Overall Theme": "Adversity",
            "artist": "Moneybagg Yo",
            "Linked Lyrics": "https://genius.com/Moneybagg-yo-fed-babys-lyrics"
        },
        {
            "Song": "Reset",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Moneybagg Yo",
            "Linked Lyrics": "https://genius.com/Moneybagg-yo-reset-lyrics"
        },
        {
            "Song": "Say Na",
            "Reason of Selection": "This song portrays a lavish and extravagant lifestyle, showcasing the artist's success and wealth.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#luxury",
                "#success"
            ],
            "Overall Theme": "Extravagance",
            "artist": "Moneybagg Yo",
            "Linked Lyrics": "https://genius.com/Moneybagg-yo-say-na-lyrics"
        },
        {
            "Song": "Black Radio",
            "Reason of Selection": "This song addresses systemic racism and the representation of Black voices in media.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#systemicracism",
                "#representation",
                "#media"
            ],
            "Overall Theme": "Social Justice",
            "artist": "Mos Def",
            "Linked Lyrics": "https://genius.com/Mos-def-black-radio-lyrics"
        },
        {
            "Song": "Casa Bey",
            "Reason of Selection": "This song explores themes of self-reflection, personal growth, and cultural identity.",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [
                "#selfreflection",
                "#culturalidentity"
            ],
            "Overall Theme": "Identity",
            "artist": "Mos Def",
            "Linked Lyrics": "https://genius.com/Mos-def-casa-bey-lyrics"
        },
        {
            "Song": "Fear Not of Man",
            "Reason of Selection": "This song encourages listeners to have courage, stand up against oppression, and speak their minds.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#courage",
                "#oppression",
                "#activism"
            ],
            "Overall Theme": "Empowerment",
            "artist": "Mos Def",
            "Linked Lyrics": "https://genius.com/Mos-def-fear-not-of-man-lyrics"
        },
        {
            "Song": "Mathematics",
            "Reason of Selection": "This song delves into the socio-political issues affecting society and highlights the importance of critical thinking.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#sociopolitical",
                "#criticalthinking"
            ],
            "Overall Theme": "Social Commentary",
            "artist": "Mos Def",
            "Linked Lyrics": "https://genius.com/Mos-def-mathematics-lyrics"
        },
        {
            "Song": "Mr. Nigga",
            "Reason of Selection": "This song confronts racial stereotypes and challenges societal norms through thought-provoking lyrics.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#racialstereotypes",
                "#challengingsocietynorms"
            ],
            "Overall Theme": "Identity",
            "artist": "Mos Def",
            "Linked Lyrics": "https://genius.com/Mos-def-mr-nigga-lyrics"
        },
        {
            "Song": "Umi Says",
            "Reason of Selection": "This song promotes self-love, cultural pride, and positive transformation.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#selflove",
                "#culturalpride",
                "#transformation"
            ],
            "Overall Theme": "Empowerment",
            "artist": "Mos Def",
            "Linked Lyrics": "https://genius.com/Mos-def-umi-says-lyrics"
        },
        {
            "Song": "Express Yourself",
            "Reason of Selection": "This song promotes self-expression, encourages individuality, and advocates for freedom of speech.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#selfexpression",
                "#individuality",
                "#freedomofspeech"
            ],
            "Overall Theme": "Empowerment",
            "artist": "N.W.A.",
            "Linked Lyrics": "https://genius.com/Nwa-express-yourself-lyrics"
        },
        {
            "Song": "F*ck da Police",
            "Reason of Selection": "This song serves as a powerful critique of police brutality and systemic racism in law enforcement.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#policebrutality",
                "#systemicracism"
            ],
            "Overall Theme": "Social Justice",
            "artist": "N.W.A.",
            "Linked Lyrics": "https://genius.com/Nwa-fuck-tha-police-lyrics"
        },
        {
            "Song": "The Message",
            "Reason of Selection": "This song sheds light on the struggles and challenges faced by marginalized communities, particularly in inner-city environments.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#struggles",
                "#marginalizedcommunities",
                "#innercity"
            ],
            "Overall Theme": "Community",
            "artist": "N.W.A.",
            "Linked Lyrics": "https://genius.com/Nwa-the-message-lyrics"
        },
        {
            "Song": "Black Republican",
            "Reason of Selection": "This song addresses themes of political power, racial identity, and representation.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#politicalpower",
                "#racialidentity",
                "#representation"
            ],
            "Overall Theme": "Empowerment",
            "artist": "Nas",
            "Linked Lyrics": "https://genius.com/Nas-black-republican-lyrics"
        },
        {
            "Song": "Daughters",
            "Reason of Selection": "This song reflects on fatherhood, parenthood, and the challenges faced in raising children, highlighting the importance of responsible parenting and the impact on the next generation.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#fatherhood",
                "#parenthood",
                "#responsibleparenting"
            ],
            "Overall Theme": "Family",
            "artist": "Nas",
            "Linked Lyrics": "https://genius.com/Nas-daughters-lyrics"
        },
        {
            "Song": "I Can",
            "Reason of Selection": "This song delivers a message of empowerment, encouraging listeners, particularly young people, to strive for success and pursue their dreams.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#empowerment",
                "#success",
                "#dreams"
            ],
            "Overall Theme": "Motivation",
            "artist": "Nas",
            "Linked Lyrics": "https://genius.com/Nas-i-can-lyrics"
        },
        {
            "Song": "I Gave You Power",
            "Reason of Selection": "This song uses a unique perspective, portraying a gun as the narrator, to shed light on the consequences and impact of violence.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#violence",
                "#consequences",
                "#perspective"
            ],
            "Overall Theme": "Social Commentary",
            "artist": "Nas",
            "Linked Lyrics": "https://genius.com/Nas-i-gave-you-power-lyrics"
        },
        {
            "Song": "If I Ruled The World",
            "Reason of Selection": "This song explores the artist's vision for a better world, highlighting social and political aspirations.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#vision",
                "#socialaspirations",
                "#politicalaspirations"
            ],
            "Overall Theme": "Utopia",
            "artist": "Nas",
            "Linked Lyrics": "https://genius.com/Nas-if-i-ruled-the-world-lyrics"
        },
        {
            "Song": "One Love",
            "Reason of Selection": "This song depicts the realities of life in urban environments and addresses social issues faced by communities.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#urbanlife",
                "#socialissues"
            ],
            "Overall Theme": "Community",
            "artist": "Nas",
            "Linked Lyrics": "https://genius.com/Nas-one-love-lyrics"
        },
        {
            "Song": "The World Is Yours",
            "Reason of Selection": "This song conveys a sense of empowerment and resilience, inspiring listeners to overcome obstacles and seize opportunities.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#empowerment",
                "#resilience",
                "#opportunities"
            ],
            "Overall Theme": "Ambition",
            "artist": "Nas",
            "Linked Lyrics": "https://genius.com/Nas-the-world-is-yours-lyrics"
        },
        {
            "Song": "Mourn You Til I Join You",
            "Reason of Selection": "This song serves as a heartfelt tribute to those who have passed away, expressing the artist's emotions and paying homage to lost lives.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#tribute",
                "#homage",
                "#lostlives"
            ],
            "Overall Theme": "Remembrance",
            "artist": "Naughty By Nature",
            "Linked Lyrics": "https://genius.com/Naughty-by-nature-mourn-you-til-i-join-you-lyrics"
        },
        {
            "Song": "I Am Who They Say I Am",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "NBA Youngboy",
            "Linked Lyrics": "https://genius.com/Nba-youngboy-i-am-who-they-say-i-am-lyrics"
        },
        {
            "Song": "Untouchable",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "NBA Youngboy",
            "Linked Lyrics": "https://genius.com/Nba-youngboy-untouchable-lyrics"
        },
        {
            "Song": "No Smoke",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "NBA Youngboy",
            "Linked Lyrics": "https://genius.com/Nba-youngboy-no-smoke-lyrics"
        },
        {
            "Song": "Genie",
            "Reason of Selection": "This song portrays themes of personal struggles, growth, and determination to overcome challenges.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#struggles",
                "#growth",
                "#determination"
            ],
            "Overall Theme": "Personal Journey",
            "artist": "NBA Youngboy",
            "Linked Lyrics": "https://genius.com/Nba-youngboy-genie-lyrics"
        },
        {
            "Song": "Akbar",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "NBA Youngboy",
            "Linked Lyrics": "https://genius.com/Nba-youngboy-akbar-lyrics"
        },
        {
            "Song": "Outside Today",
            "Reason of Selection": "This song depicts the artist's experiences and challenges growing up in a difficult environment.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#experiences",
                "#challenges",
                "#difficultenvironment"
            ],
            "Overall Theme": "Adversity",
            "artist": "NBA Youngboy",
            "Linked Lyrics": "https://genius.com/Nba-youngboy-outside-today-lyrics"
        },
        {
            "Song": "Breakdown",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nice & Smooth",
            "Linked Lyrics": "https://genius.com/Nice--and--smooth-breakdown-lyrics"
        },
        {
            "Song": "Do Whatcha Gotta",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nice & Smooth",
            "Linked Lyrics": "https://genius.com/Nice--and--smooth-do-whatcha-gotta-lyrics"
        },
        {
            "Song": "DWYCK",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nice & Smooth",
            "Linked Lyrics": "https://genius.com/Nice--and--smooth-dwyck-lyrics"
        },
        {
            "Song": "Ghetoo Freaks",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nice & Smooth",
            "Linked Lyrics": "https://genius.com/Nice--and--smooth-ghetoo-freaks-lyrics"
        },
        {
            "Song": "Ooh Child",
            "Reason of Selection": "This song delivers a message of hope and encouragement, reminding listeners that better days are ahead.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#hope",
                "#encouragement"
            ],
            "Overall Theme": "Optimism",
            "artist": "Nice & Smooth",
            "Linked Lyrics": "https://genius.com/Nice--and--smooth-ooh-child-lyrics"
        },
        {
            "Song": "Sometimes I Rhyme Slow",
            "Reason of Selection": "This song explores personal reflections and the challenges faced by individuals in their lives.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#personalreflections",
                "#challenges"
            ],
            "Overall Theme": "Self-Reflection",
            "artist": "Nice & Smooth",
            "Linked Lyrics": "https://genius.com/Nice--and--smooth-sometimes-i-rhyme-slow-lyrics"
        },
        {
            "Song": "Blue Laces 2",
            "Reason of Selection": "This song reflects on Nipsey Hussle's personal journey, addressing themes of perseverance, growth, and success.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#perseverance",
                "#growth",
                "#success"
            ],
            "Overall Theme": "Personal Journey",
            "artist": "Nipsey Hussle",
            "Linked Lyrics": "https://genius.com/Nipsey-hussle-blue-laces-2-lyrics"
        },
        {
            "Song": "Blue Laces",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nipsey Hussle",
            "Linked Lyrics": "https://genius.com/Nipsey-hussle-blue-laces-lyrics"
        },
        {
            "Song": "Dedication",
            "Reason of Selection": "This song pays tribute to Nipsey Hussle's commitment and dedication to his craft, his community, and his goals.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#tribute",
                "#commitment",
                "#dedication"
            ],
            "Overall Theme": "Commitment",
            "artist": "Nipsey Hussle",
            "Linked Lyrics": "https://genius.com/Nipsey-hussle-dedication-lyrics"
        },
        {
            "Song": "Don't Take Days Off",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nipsey Hussle",
            "Linked Lyrics": "https://genius.com/Nipsey-hussle-dont-take-days-off-lyrics"
        },
        {
            "Song": "Loaded Bases",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nipsey Hussle",
            "Linked Lyrics": "https://genius.com/Nipsey-hussle-loaded-bases-lyrics"
        },
        {
            "Song": "Ocean Views",
            "Reason of Selection": "This song reflects on Nipsey Hussle's experiences, providing insight into life in his neighborhood and highlighting social issues.",
            "Culturally Significant": "No",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#experiences",
                "#neighborhood",
                "#socialissues"
            ],
            "Overall Theme": "Reflection",
            "artist": "Nipsey Hussle",
            "Linked Lyrics": "https://genius.com/Nipsey-hussle-ocean-views-lyrics"
        },
        {
            "Song": "Racks in the Middle",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nipsey Hussle",
            "Linked Lyrics": "https://genius.com/Nipsey-hussle-racks-in-the-middle-lyrics"
        },
        {
            "Song": "Roll The Windows Up",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Nipsey Hussle",
            "Linked Lyrics": "https://genius.com/Nipsey-hussle-roll-the-windows-up-lyrics"
        },
        {
            "Song": "Sky's the Limit",
            "Reason of Selection": "This song embodies a culturally significant message of hope, ambition, and the pursuit of success, inspiring individuals from diverse backgrounds to strive for greatness.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "No",
            "Keywords": [
                "#hope",
                "#ambition",
                "#success",
                "#culturalinspiration"
            ],
            "Overall Theme": "Aspiration",
            "artist": "Notorious B.I.G.",
            "Linked Lyrics": "https://genius.com/Notorious-big-skys-the-limit-lyrics"
        },
        {
          "Song": "All We Got is Us",
          "Reason of Selection": "This song is a powerful ode to unity and solidarity, emphasizing the strength of the collective over individual pursuits. It promotes a sense of community and self-reliance, making it a socially conscious track that resonates with many.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#AllWeGotIsUs", "#Unity", "#Solidarity"],
          "Overall Theme": "Unity, Solidarity, Community",
          "artist": "Onyx",
          "Linked Lyrics": "https://genius.com/Onyx-all-we-got-is-us-lyrics"
        },
        {
          "Song": "Black Hoodie",
          "Reason of Selection": "This powerful track addresses police brutality and racial profiling, shedding light on the injustices faced by Black communities. Onyx reflects on the deaths of young Black men like Trayvon Martin, making it a socially conscious and thought-provoking song.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#BlackHoodie", "#PoliceBrutality"],
          "Overall Theme": "Police Brutality, Racial Profiling",
          "artist": "Onyx",
          "Linked Lyrics": "https://genius.com/Onyx-black-hoodie-lyrics"
        },
        {
          "Song": "Evil Streets (Remix)",
          "Reason of Selection": "In this song, Onyx vividly depicts the harsh realities of life in the streets, highlighting the struggles and temptations faced by young individuals trying to survive in tough neighborhoods. The remix version emphasizes the group's concern for the youth and their aspiration for positive change.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#EvilStreets", "#YouthEmpowerment"],
          "Overall Theme": "Life in the Streets, Youth Empowerment",
          "artist": "Onyx",
          "Linked Lyrics": "https://genius.com/Onyx-evil-streets-remix-lyrics"
        },
        {
          "Song": "Last Dayz",
          "Reason of Selection": "This song delves into the struggles faced in inner-city communities, addressing issues like poverty, violence, and the consequences of street life. Onyx's raw delivery captures the harsh realities of urban environments, making it a culturally relevant track that provides insight into the challenges many face.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#LastDayz", "#UrbanStruggles"],
          "Overall Theme": "Inner-City Struggles, Poverty, Violence",
          "artist": "Onyx",
          "Linked Lyrics": "https://genius.com/Onyx-last-dayz-lyrics"
        },
        {
          "Song": "Slam",
          "Reason of Selection": "\"Slam\" became a massive hit in the 1990s and is an anthem for hip-hop fans worldwide. The song's high-energy delivery and aggressive lyrics showcase the group's signature style. While primarily a braggadocious track, it promotes self-empowerment and using music as a positive outlet for frustration and anger.",
          "Socially Conscious": "No",
          "Culturally Significant": "Yes",
          "Keywords": ["#Slam", "#Anthem", "#Empowerment"],
          "Overall Theme": "High-Energy Anthem, Self-Empowerment",
          "artist": "Onyx",
          "Linked Lyrics": "https://genius.com/Onyx-slam-lyrics"
        },
        {
          "Song": "Throw Ya Gunz",
          "Reason of Selection": "While mainly known for its hardcore nature, the song briefly touches on the prevalence of gun violence in society. The gun imagery is used metaphorically, urging listeners to \"throw away\" their destructive tendencies and use music as a weapon to fight oppression.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#ThrowYaGunz", "#FightOppression"],
          "Overall Theme": "Metaphorical Gun Imagery, Fighting Oppression",
          "artist": "Onyx",
          "Linked Lyrics": "https://genius.com/Onyx-throw-ya-gunz-lyrics"
        },
        {
            "Song": "Bombs Over Baghdad",
            "Reason of Selection": "This song addresses political and social issues, reflecting on the impact of war and the chaotic state of the world.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#politicalissues",
                "#socialissues",
                "#war",
                "#chaos"
            ],
            "Overall Theme": "Turmoil",
            "artist": "Outkast",
            "Linked Lyrics": "https://genius.com/Outkast-bombs-over-baghdad-lyrics"
        },
        {
            "Song": "Rosa Parks",
            "Reason of Selection": "This song pays tribute to Rosa Parks, an iconic figure in the civil rights movement, highlighting her bravery and impact on society.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#RosaParks",
                "#civilrightsmovement",
                "#bravery"
            ],
            "Overall Theme": "Civil Rights",
            "artist": "Outkast",
            "Linked Lyrics": "https://genius.com/Outkast-rosa-parks-lyrics"
        },
        {
            "Song": "911 is a Joke",
            "Reason of Selection": "This song addresses the racial disparities and inequalities in emergency services, shedding light on systemic issues and social injustice.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#racialdisparities",
                "#inequalities",
                "#systemicissues",
                "#socialinjustice"
            ],
            "Overall Theme": "Social Injustice",
            "artist": "Public Enemy",
            "Linked Lyrics": "https://genius.com/Public-enemy-911-is-a-joke-lyrics"
        },
        {
            "Song": "Fight The Power",
            "Reason of Selection": "This iconic song is a powerful anthem against oppression and calls for social change, inspiring individuals to stand up against injustice.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#oppression",
                "#socialchange",
                "#injustice",
                "#anthem"
            ],
            "Overall Theme": "Resistance",
            "artist": "Public Enemy",
            "Linked Lyrics": "https://genius.com/Public-enemy-fight-the-power-lyrics"
        },
        {
            "Song": "Don't Believe The Hype",
            "Reason of Selection": "This song challenges media narratives and encourages critical thinking, urging listeners not to blindly accept manipulated information.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#medianarratives",
                "#criticalthinking",
                "#informationmanipulation"
            ],
            "Overall Theme": "Media Awareness",
            "artist": "Public Enemy",
            "Linked Lyrics": "https://genius.com/Public-enemy-dont-believe-the-hype-lyrics"
        },
        {
            "Song": "Black Steel in the Hour of Chaos",
            "Reason of Selection": "This song delves into the experiences of incarceration, racism, and resistance, offering a powerful critique of the prison-industrial complex.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#incarceration",
                "#racism",
                "#resistance",
                "#prisonindustrialcomplex"
            ],
            "Overall Theme": "Incarceration",
            "artist": "Public Enemy",
            "Linked Lyrics": "https://genius.com/Public-enemy-black-steel-in-the-hour-of-chaos-lyrics"
        },
        {
            "Song": "Bring the Noise",
            "Reason of Selection": "This song addresses social and political issues, emphasizing the power of music as a means of resistance and expression.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#socialissues",
                "#politicalissues",
                "#musicresistance",
                "#expression"
            ],
            "Overall Theme": "Power of Music",
            "artist": "Public Enemy",
            "Linked Lyrics": "https://genius.com/Public-enemy-bring-the-noise-lyrics"
        },
        {
            "Song": "Can't Truss It",
            "Reason of Selection": "This song tackles racial inequality, systemic racism, and political corruption, advocating for awareness and change.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#racialinequality",
                "#systemicracism",
                "#politicalcorruption",
                "#awareness"
            ],
            "Overall Theme": "Social Change",
            "artist": "Public Enemy",
            "Linked Lyrics": "https://genius.com/Public-enemy-cant-truss-it-lyrics"
        },
        {
            "Song": "Shut Em Down",
            "Reason of Selection": "This song confronts societal issues and systemic oppression, encouraging resistance and empowerment.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#societalissues",
                "#systemicoppression",
                "#resistance",
                "#empowerment"
            ],
            "Overall Theme": "Empowerment",
            "artist": "Public Enemy",
            "Linked Lyrics": "https://genius.com/Public-enemy-shut-em-down-lyrics"
        },
        {
            "Song": "Welcome to the Terrordome",
            "Reason of Selection": "This song captures the experiences of being black in America, addressing racial discrimination, inequality, and the fight for justice.",
            "Culturally Significant": "Yes",
            "Socially Conscious": "Yes",
            "Keywords": [
                "#blackexperience",
                "#racialdiscrimination",
                "#inequality",
                "#justice"
            ],
            "Overall Theme": "Black Experience",
            "artist": "Public Enemy",
            "Linked Lyrics": "https://genius.com/Public-enemy-welcome-to-the-terrordome-lyrics"
        },
        {
            "Song": "Don't Sweat the Technique",
            "Reason of Selection": "This song promotes the value of honing one's skills and focusing on the artistry of hip hop. It emphasizes the importance of creativity, originality, and dedication to the craft.",
            "Socially Conscious": "No",
            "Culturally Significant": "Yes",
            "Keywords": ["#DontSweatTheTechnique", "#Artistry", "#Originality"],
            "Overall Theme": "Skill development and artistic expression",
            "artist": "Eric B. & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-dont-sweat-the-technique-lyrics"
          },
          {
            "Song": "Follow the Leader",
            "Reason of Selection": "This track is a powerful display of Rakim's storytelling abilities and intelligent rhymes. It emphasizes the importance of leadership, knowledge, and setting a positive example.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#FollowTheLeader", "#Knowledge", "#Inspiration"],
            "Overall Theme": "Leadership and knowledge",
            "artist": "Eric B. & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-follow-the-leader-lyrics"
          },
          {
            "Song": "In the Ghetto",
            "Reason of Selection": "This song sheds light on the struggles faced by individuals in inner-city neighborhoods. It addresses social issues, poverty, and the cycle of violence that can exist in marginalized communities.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#InTheGhetto", "#SocialIssues", "#MarginalizedCommunities"],
            "Overall Theme": "Struggles in inner-city neighborhoods",
            "artist": "Eric B. & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-in-the-ghetto-lyrics"
          },
          {
            "Song": "Microphone Fiend",
            "Reason of Selection": "Microphone Fiend delves into the passion and dedication Rakim has for his craft. It highlights the transformative power of music and the impact it can have on individuals and society.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#MicrophoneFiend", "#Passion", "#Influence"],
            "Overall Theme": "Transformative power of music",
            "artist": "Eric B. & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-microphone-fiend-lyrics"
          },
          {
            "Song": "Paid in Full",
            "Reason of Selection": "This song is a hip hop classic that showcases Rakim's lyrical prowess and clever wordplay. It explores themes of economic struggles, materialism, and the pursuit of success.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#PaidInFull", "#Lyricism", "#Success"],
            "Overall Theme": "Economic struggles and the pursuit of success",
            "artist": "Eric B. & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-paid-in-full-lyrics"
          },
          {
            "Song": "Teach the Children",
            "Reason of Selection": "This song emphasizes the importance of education and knowledge as a means of empowerment for the younger generation. It encourages teaching and guiding children towards a better future.",
            "Socially Conscious": "Yes",
            "Culturally Significant": "Yes",
            "Keywords": ["#TeachTheChildren", "#Education", "#Empowerment"],
            "Overall Theme": "Importance of education and empowering the younger generation",
            "artist": "Eric B. & Rakim",
            "Linked Lyrics": "https://genius.com/Eric-b-and-rakim-teach-the-children-lyrics"
          },
          {
            "Song": "Can't Wait",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Redman",
            "Linked Lyrics": "https://genius.com/Redman-cant-wait-lyrics"
        },
        {
            "Song": "Dare Iz a Darkside",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Redman",
            "Linked Lyrics": "https://genius.com/Redman-dare-iz-a-darkside-lyrics"
        },
        {
            "Song": "Sooperman Luva II",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Redman",
            "Linked Lyrics": "https://genius.com/Redman-sooperman-luva-ii-lyrics"
        },
        {
            "Song": "Whateva Man",
            "Reason of Selection": "",
            "Culturally Significant": "No",
            "Socially Conscious": "No",
            "Keywords": [],
            "Overall Theme": "",
            "artist": "Redman",
            "Linked Lyrics": "https://genius.com/Redman-whateva-man-lyrics"
        },
        {
          "Song": "Free Mason",
          "Reason of Selection": "Addresses conspiracy theories and societal control.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#Conspiracy"],
          "Overall Theme": "Conspiracy theories and societal control",
          "artist": "Rick Ross",
          "Linked Lyrics": "https://genius.com/Rick-ross-free-mason-lyrics"
        },
        {
          "Song": "Pirates",
          "Reason of Selection": "Examines the challenges faced by Black communities.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#BlackEmpowerment"],
          "Overall Theme": "Challenges faced by Black communities",
          "artist": "Rick Ross",
          "Linked Lyrics": "https://genius.com/Rick-ross-pirates-lyrics"
        },
        {
          "Song": "Rich Forever",
          "Reason of Selection": "Critiques materialism and the pursuit of wealth.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#Materialism"],
          "Overall Theme": "Critique of materialism and the pursuit of wealth",
          "artist": "Rick Ross",
          "Linked Lyrics": "https://genius.com/Rick-ross-rich-forever-lyrics"
        },                        
        {
          "Song": "Usual Suspects",
          "Reason of Selection": "Highlights the struggles of marginalized communities.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#SocialJustice"],
          "Overall Theme": "Struggles of marginalized communities",
          "artist": "Rick Ross",
          "Linked Lyrics": "https://genius.com/Rick-ross-usual-suspects-lyrics"
        },
        {
          "Song": "Valley of Death",
          "Reason of Selection": "Explores the harsh realities of street life.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": ["#StreetLife"],
          "Overall Theme": "Harsh realities of street life",
          "artist": "Rick Ross",
          "Linked Lyrics": "https://genius.com/Rick-ross-valley-of-death-lyrics"
        },
        {
          "Song": "Go On Girl",
          "Reason of Selection": "This song promotes self-confidence, resilience, and empowerment among women, encouraging them to pursue their goals and dreams.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#selfconfidence",
              "#resilience",
              "#empowerment",
              "#womensupport"
          ],
          "Overall Theme": "Women Empowerment",
          "artist": "Roxanne Shante",
          "Linked Lyrics": "https://genius.com/Roxanne-shante-go-on-girl-lyrics"
      },
      {
          "Song": "Have a Nice Day",
          "Reason of Selection": "This song celebrates individuality, encouraging people, especially women, to embrace their uniqueness and live life on their own terms.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#individuality",
              "#uniqueness",
              "#selfexpression",
              "#empowerment"
          ],
          "Overall Theme": "Self-acceptance",
          "artist": "Roxanne Shante",
          "Linked Lyrics": "https://genius.com/Roxanne-shante-have-a-nice-day-lyrics"
      },
      {
          "Song": "Independent Woman",
          "Reason of Selection": "This song highlights the strength, resilience, and self-sufficiency of independent women, promoting a sense of empowerment and self-reliance.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#independentwomen",
              "#strength",
              "#resilience",
              "#empowerment"
          ],
          "Overall Theme": "Female Independence",
          "artist": "Roxanne Shante",
          "Linked Lyrics": "https://genius.com/Roxanne-shante-independent-woman-lyrics"
      },
      {
          "Song": "Runaway",
          "Reason of Selection": "This song encourages women to break free from restrictive norms and expectations, advocating for their freedom of expression and self-discovery.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#freedom",
              "#expression",
              "#selfdiscovery",
              "#emancipation"
          ],
          "Overall Theme": "Freedom of Women",
          "artist": "Roxanne Shante",
          "Linked Lyrics": "https://genius.com/Roxanne-shante-runaway-lyrics"
      },
      {
          "Song": "30 Days",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Run DMC",
          "Linked Lyrics": "https://genius.com/Run-dmc-30-days-lyrics"
      },
      {
          "Song": "Hard Times",
          "Reason of Selection": "This song addresses the struggles and hardships faced by individuals and communities, shedding light on social and economic inequalities.",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#struggles",
              "#hardships",
              "#inequalities"
          ],
          "Overall Theme": "Socioeconomic Challenges",
          "artist": "Run DMC",
          "Linked Lyrics": "https://genius.com/Run-dmc-hard-times-lyrics"
      },
      {
          "Song": "It's Like That",
          "Reason of Selection": "This song addresses a wide range of social issues including unemployment, struggles to make ends meet, economic challenges, education, prejudice, and the search for meaning in life.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#unemployment",
              "#struggles",
              "#economicchallenges",
              "#education",
              "#prejudice",
              "#meaningoflife",
              "#socialissues",
              "#workinghard",
              "#competition",
              "#risingbills",
              "#war",
              "#elderly",
              "#poverty",
              "#educationmatters",
              "#racialharmony"
          ],
          "Overall Theme": "Social Commentary",
          "artist": "Run DMC",
          "Linked Lyrics": "https://genius.com/Run-dmc-its-like-that-lyrics"
      },
      {
          "Song": "Pause",
          "Reason of Selection": "This song provides a powerful message against drug use and abuse, emphasizing personal responsibility and the importance of making positive life choices.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#antidrug",
              "#personalresponsibility",
              "#positivechoices",
              "#misleading",
              "#mind",
              "#lifechoices",
              "#substanceabuse"
          ],
          "Overall Theme": "Anti-Drug Awareness",
          "artist": "Run DMC",
          "Linked Lyrics": "https://genius.com/Run-dmc-pause-lyrics"
      },
      {
          "Song": "Proud to be Black",
          "Reason of Selection": "This song celebrates black pride, emphasizing the cultural significance and empowerment of the black community.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#blackpride",
              "#culturalsignificance",
              "#empowerment"
          ],
          "Overall Theme": "Black Pride",
          "artist": "Run DMC",
          "Linked Lyrics": "https://genius.com/Run-dmc-proud-to-be-black-lyrics"
      },
      {
          "Song": "Wake Up",
          "Reason of Selection": "This song promotes social awakening and consciousness, addressing political issues and encouraging positive change.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#socialawakening",
              "#consciousness",
              "#politicalissues",
              "#positivechange"
          ],
          "Overall Theme": "Social Awakening",
          "artist": "Run DMC",
          "Linked Lyrics": "https://genius.com/Run-dmc-wake-up-lyrics"
      },
      {
          "Song": "Expression",
          "Reason of Selection": "This song critiques the tendency of individuals to imitate others and conform to societal expectations, highlighting the importance of self-expression and authenticity.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#individuality",
              "#selfexpression",
              "#authenticity",
              "#critiqueofsociety",
              "#conformity"
          ],
          "Overall Theme": "Individuality and Authenticity",
          "artist": "Salt-N-Pepa",
          "Linked Lyrics": "https://genius.com/Salt-n-pepa-expression-lyrics"
      },
      {
          "Song": "Let's Talk About Sex",
          "Reason of Selection": "This song addresses the importance of open communication and education about sex, promoting sexual health and challenging societal taboos.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#sexualhealth",
              "#communication",
              "#taboos",
              "#sexuality",
              "#education"
          ],
          "Overall Theme": "Sexual Empowerment",
          "artist": "Salt-N-Pepa",
          "Linked Lyrics": "https://genius.com/Salt-n-pepa-lets-talk-about-sex-lyrics"
      },
      {
          "Song": "None of Your Business",
          "Reason of Selection": "This song challenges societal norms and promotes individual autonomy, asserting the right to privacy and self-determination.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#individualautonomy",
              "#privacy",
              "#selfdetermination",
              "#challengingnorms"
          ],
          "Overall Theme": "Individual Empowerment",
          "artist": "Salt-N-Pepa",
          "Linked Lyrics": "https://genius.com/Salt-n-pepa-none-of-your-business-lyrics"
      },
      {
          "Song": "Whatta Man",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Salt-N-Pepa",
          "Linked Lyrics": "https://genius.com/Salt-n-pepa-whatta-man-lyrics"
      },
      {
          "Song": "Faith",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-faith-lyrics"
      },
      {
          "Song": "Goin Down",
          "Reason of Selection": "This song portrays the struggles and challenges faced by individuals in their daily lives, highlighting social issues and personal experiences.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#struggles",
              "#challenges",
              "#socialissues",
              "#personaljourney"
          ],
          "Overall Theme": "Life's Difficulties",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-goin-down-lyrics"
      },
      {
          "Song": "Guess Who's Back",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-guess-whos-back-lyrics"
      },
      {
          "Song": "Hand on a Dead Body",
          "Reason of Selection": "This song addresses social issues such as racial stereotypes, the blame game, and the portrayal of violence in media. It sheds light on the challenges faced by the African American community and challenges the mainstream narrative.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#socialissues",
              "#racialstereotypes",
              "#violenceinmedia",
              "#communitychallenges",
              "#challengingthenarrative"
          ],
          "Overall Theme": "Social Issues and Challenging Stereotypes",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-hand-on-a-dead-body-lyrics"
      },
      {
          "Song": "High Note",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-high-note-lyrics"
      },
      {
          "Song": "I Seen a Man Die",
          "Reason of Selection": "This song offers a poignant reflection on the consequences and realities of violence, providing social commentary on the impact of death and loss in communities.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#violence",
              "#death",
              "#loss",
              "#community",
              "#socialcommentary"
          ],
          "Overall Theme": "Violence and its Consequences",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-i-seen-a-man-die-lyrics"
      },
      {
          "Song": "In Between Us",
          "Reason of Selection": "This song explores the complexities and struggles of personal relationships, delving into themes of love, loyalty, and trust.",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#relationships",
              "#love",
              "#loyalty",
              "#trust"
          ],
          "Overall Theme": "Interpersonal Connections",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-in-between-us-lyrics"
      },
      {
          "Song": "Jesse James",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-jesse-james-lyrics"
      },
      {
          "Song": "Look Me in My Eyes",
          "Reason of Selection": "This song addresses the systemic targeting and surveillance of black individuals by law enforcement agencies. It sheds light on the challenges faced by those trying to leave street life and pursue a career in music, highlighting the unfair treatment and false accusations they may encounter.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#systemictargeting",
              "#surveillance",
              "#challenges",
              "#unfairtreatment",
              "#falseaccusations"
          ],
          "Overall Theme": "Systemic Targeting and Pursuit of Music",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-look-me-in-my-eyes-lyrics"
      },
      {
          "Song": "Mind Playin' Tricks",
          "Reason of Selection": "This song delves into the mental and psychological struggles individuals face, exploring themes of paranoia, anxiety, and the impact of inner demons.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#mentalhealth",
              "#paranoia",
              "#anxiety",
              "#innerdemons",
              "#psychologicalstruggles"
          ],
          "Overall Theme": "Mental and Psychological Struggles",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-mind-playin-tricks-lyrics"
      },
      {
          "Song": "My Block",
          "Reason of Selection": "This song provides a vivid depiction of life in inner-city neighborhoods, shedding light on the challenges, struggles, and resilience of communities.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#innercitylife",
              "#challenges",
              "#struggles",
              "#resilience",
              "#community"
          ],
          "Overall Theme": "Inner-City Life",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-my-block-lyrics"
      },
      {
          "Song": "Never Seen a Man Cry",
          "Reason of Selection": "This song explores the challenges and experiences faced by a young black man trying to rebuild his life after being incarcerated. It addresses themes of redemption, overcoming societal obstacles, and striving for a better future.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#redemption",
              "#societalobstacles",
              "#struggles",
              "#hope",
              "#betterfuture"
          ],
          "Overall Theme": "Challenges of Rebuilding and Hope",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-never-seen-a-man-cry-lyrics"
      },
      {
          "Song": "No Tears",
          "Reason of Selection": "This song reflects on the harsh realities and pain experienced in life, discussing personal struggles and societal issues with emotional depth.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#pain",
              "#struggles",
              "#societalissues",
              "#emotionaldepth"
          ],
          "Overall Theme": "Life's Challenges and Emotions",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-no-tears-lyrics"
      },
      {
          "Song": "Never Seen a Man Cry",
          "Reason of Selection": "This song explores the challenges and experiences faced by a young black man trying to rebuild his life after being incarcerated. It addresses themes of redemption, overcoming societal obstacles, and striving for a better future.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#redemption",
              "#societalobstacles",
              "#struggles",
              "#hope",
              "#betterfuture"
          ],
          "Overall Theme": "Challenges of Rebuilding and Hope",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-never-seen-a-man-cry-lyrics"
      },
      {
          "Song": "Smartz",
          "Reason of Selection": "This song addresses the systemic racism and injustices faced by the black community. It criticizes the unfair treatment and stereotypes imposed by society, highlighting the need for self-education and awareness to combat these challenges.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#systemicracism",
              "#injustices",
              "#unfairtreatment",
              "#stereotypes",
              "#selfeducation",
              "#awareness"
          ],
          "Overall Theme": "Systemic Racism and Self-Education",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-smartz-lyrics"
      },
      {
          "Song": "Smile",
          "Reason of Selection": "This song acknowledges the hardships and challenges faced in life, particularly in the context of the black community. It emphasizes the importance of maintaining a sense of humor and resilience in the face of adversity, while reflecting on themes of struggle, perseverance, and finding joy amidst difficult circumstances.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#hardships",
              "#challenges",
              "#resilience",
              "#struggle",
              "#perseverance",
              "#joy"
          ],
          "Overall Theme": "Adversity and Finding Joy",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-smile-lyrics"
      },
      {
          "Song": "The Diary",
          "Reason of Selection": "This song delves into personal experiences, reflecting on the challenges, triumphs, and reflections of life, offering introspection and self-reflection.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#personaljourney",
              "#challenges",
              "#triumphs",
              "#reflections",
              "#introspection"
          ],
          "Overall Theme": "Life's Reflections",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-the-diary-lyrics"
      },
      {
          "Song": "The White Sheet",
          "Reason of Selection": "This song addresses the harsh realities of street violence and its impact on communities, shedding light on the consequences and aftermath of such incidents.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#streetviolence",
              "#consequences",
              "#community",
              "#socialcommentary"
          ],
          "Overall Theme": "Street Violence and its Impact",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-the-white-sheet-lyrics"
      },
      {
          "Song": "What Can I Do",
          "Reason of Selection": "This song reflects on the complexities of life, acknowledging both the beauty and pain that coexist. It touches upon themes of gratitude, the transient nature of existence, and the need for compassion and empathy towards others who are suffering.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#life",
              "#beauty",
              "#pain",
              "#gratitude",
              "#existence",
              "#compassion",
              "#empathy"
          ],
          "Overall Theme": "Complexities of Life and Compassion",
          "artist": "Scarface",
          "Linked Lyrics": "https://genius.com/Scarface-what-can-i-do-lyrics"
      },
      {
          "Song": "Am I Black Enough For You",
          "Reason of Selection": "This song challenges societal perceptions of black identity and explores themes of racial authenticity and self-acceptance. It addresses the complexities and pressures faced by black individuals in society, questioning whether one's identity is defined by external validation or personal conviction.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#blackidentity",
              "#racialauthenticity",
              "#selfacceptance",
              "#societalperceptions",
              "#complexities",
              "#pressures"
          ],
          "Overall Theme": "Black Identity and Self-Acceptance",
          "artist": "Schoolly D",
          "Linked Lyrics": "https://genius.com/Schoolly-d-am-i-black-enough-for-you-lyrics"
      },
      {
          "Song": "One Time's Got No Case",
          "Reason of Selection": "This song criticizes police misconduct and abuses of power, highlighting the injustices faced by individuals in marginalized communities. It sheds light on the negative experiences and encounters with law enforcement, challenging the notion of fair and impartial policing.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#policemisconduct",
              "#abusesofpower",
              "#injustices",
              "#marginalizedcommunities",
              "#lawenforcement"
          ],
          "Overall Theme": "Police Misconduct and Injustices",
          "artist": "Sir Mix-a-Lot",
          "Linked Lyrics": "https://genius.com/Sir-mix-a-lot-one-times-got-no-case-lyrics"
      },
      {
          "Song": "Swap Meet Louie",
          "Reason of Selection": "This song satirizes the experiences and lifestyle associated with swap meets, highlighting the economic struggles and unconventional means of acquiring goods in low-income communities. It sheds light on the ingenuity and resourcefulness of individuals navigating limited financial resources.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#swapmeets",
              "#economicstruggles",
              "#resourcefulness",
              "#lowincomecommunities"
          ],
          "Overall Theme": "Economic Struggles and Ingenuity",
          "artist": "Sir Mix-a-Lot",
          "Linked Lyrics": "https://genius.com/Sir-mix-a-lot-swap-meet-louie-lyrics"
      },
      {
          "Song": "A Letter",
          "Reason of Selection": "This song tells a story of a man expressing his remorse and regret through a letter. It explores themes of reflection, redemption, and personal growth, highlighting the power of written words to convey emotions and seek forgiveness.",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "#remorse",
              "#regret",
              "#reflection",
              "#redemption",
              "#personalgrowth"
          ],
          "Overall Theme": "Reflection and Redemption",
          "artist": "Slick Rick",
          "Linked Lyrics": "https://genius.com/Slick-rick-a-letter-lyrics"
      },
      {
          "Song": "Children's Story",
          "Reason of Selection": "This song uses storytelling to depict the consequences of criminal activities and the importance of making wise choices. It carries a cautionary message for young listeners, highlighting the impact of actions and the potential consequences that can arise from them.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#criminalactivities",
              "#wisechoices",
              "#cautionarymessage",
              "#consequences"
          ],
          "Overall Theme": "Choices and Consequences",
          "artist": "Slick Rick",
          "Linked Lyrics": "https://genius.com/Slick-rick-childrens-story-lyrics"
      },
      {
          "Song": "Hey Young World",
          "Reason of Selection": "This song addresses the youth, delivering messages of encouragement, empowerment, and guidance. It emphasizes the importance of education, self-worth, and making positive choices. The lyrics inspire young listeners to overcome challenges and strive for a better future.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#youth",
              "#encouragement",
              "#empowerment",
              "#education",
              "#selfworth",
              "#positivechoices"
          ],
          "Overall Theme": "Youth Empowerment and Guidance",
          "artist": "Slick Rick",
          "Linked Lyrics": "https://genius.com/Slick-rick-hey-young-world-lyrics"
      },
      {
          "Song": "Street Talkin",
          "Reason of Selection": "This song delves into the realities of street life, addressing the struggles, dangers, and dynamics of urban environments. It sheds light on the experiences and perspectives of individuals navigating these settings, exploring themes of survival, resilience, and street wisdom.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#streetlife",
              "#struggles",
              "#dangers",
              "#urbanenvironments",
              "#survival",
              "#resilience",
              "#streetwisdom"
          ],
          "Overall Theme": "Street Life and Survival",
          "artist": "Slick Rick",
          "Linked Lyrics": "https://genius.com/Slick-rick-street-talkin-lyrics"
      },
      {
          "Song": "Teenage Love",
          "Reason of Selection": "This song depicts the complexities and emotions associated with teenage romance. It explores themes of young love, heartbreak, and the challenges faced in navigating relationships during adolescence. The lyrics capture the essence of youthful experiences and emotions.",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "#teenageromance",
              "#younglove",
              "#heartbreak",
              "#adolescence",
              "#relationships",
              "#emotions"
          ],
          "Overall Theme": "Teenage Romance and Emotions",
          "artist": "Slick Rick",
          "Linked Lyrics": "https://genius.com/Slick-rick-teenage-love-lyrics"
      },
      {
          "Song": "Murder Was the Case",
          "Reason of Selection": "Consequences of choices, violence.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#crime",
              "#violence",
              "#Morality",
              "#lifechoices"
          ],
          "Overall Theme": "Crime and Consequences",
          "artist": "Snoop Dogg",
          "Linked Lyrics": "https://genius.com/Snoop-dogg-murder-was-the-case-lyrics"
      },
      {
          "Song": "No Guns Allowed",
          "Reason of Selection": "Promoting peace, against gun violence.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#gunviolence",
              "GunControl",
              "#peace",
              "#nonviolence",
              "#community"
          ],
          "Overall Theme": "Anti-Gun Violence and Peace",
          "artist": "Snoop Dogg",
          "Linked Lyrics": "https://genius.com/Snoop-dogg-no-guns-allowed-lyrics"
      },
      {
        "Song": "One Blood, One Cuzz",
        "Reason of Selection": "Unity between gangs in Los Angeles.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#Unity", "#GangPeace"],
        "Overall Theme": "Unity and Reconciliation",
        "artist": "Snoop Dogg",
        "Linked Lyrics": "https://genius.com/Snoop-dogg-one-blood-one-cuzz-lyrics"
      },
      {
          "Song": "Police",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#policebrutality",
              "#socialjustice",
              "#racialjustice"
          ],
          "Overall Theme": "Police Brutality and Social Justice",
          "artist": "Snoop Dogg",
          "Linked Lyrics": "https://genius.com/Snoop-dogg-the-police-lyrics"
      },
      {
          "Song": "This City",
          "Reason of Selection": "Culture, struggles, and triumphs of urban life.",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#urbanlife",
              "#community",
              "#Culture",
              "#challenges",
              "#resilience"
          ],
          "Overall Theme": "Urban Life and Resilience",
          "artist": "Snoop Dogg",
          "Linked Lyrics": "https://genius.com/Snoop-dogg-this-city-lyrics"
      },
      {
        "Song": "Vato",
        "Reason of Selection": "Unity, against racial profiling.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#Unity", "#AgainstRacialProfiling"],
        "Overall Theme": "Unity and Equality",
        "artist": "Snoop Dogg",
        "Linked Lyrics": "https://genius.com/Snoop-dogg-vato-lyrics"
      },
      {
          "Song": "The Mission",
          "Reason of Selection": "This song delves into the challenges faced by individuals living in marginalized communities and explores the perseverance and determination required to overcome those obstacles. It addresses social issues such as poverty, violence, and limited opportunities, shedding light on the struggles and experiences of those who strive for a better life.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#marginalizedcommunities",
              "#perseverance",
              "#determination",
              "#poverty",
              "#violence",
              "#opportunities"
          ],
          "Overall Theme": "Challenges of Marginalized Communities",
          "artist": "Special Ed",
          "Linked Lyrics": "https://genius.com/Special-ed-the-mission-lyrics"
      },
      {
          "Song": "A.F.R.I.C.A.",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Africanpride",
              "#Blackidentity",
              "#PanAfricanism",
              "#Culturalheritage"
          ],
          "Overall Theme": "African Pride and Cultural Identity",
          "artist": "Stetsosonic",
          "Linked Lyrics": "https://genius.com/Stetsosonic-africa-lyrics"
      },
      {
          "Song": "Freedom or Death",
          "Reason of Selection": "Addressing the struggle for freedom and the importance of standing up against oppression",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Freedom",
              "#Resistance",
              "#Oppression",
              "#Struggle",
              "#Empowerment",
              "#SocialJustice"
          ],
          "Overall Theme": "Fight for Freedom and Resistance Against Oppression",
          "artist": "Stetsosonic",
          "Linked Lyrics": "https://genius.com/Stetsosonic-freedom-or-death-lyrics"
      },
      {
          "Song": "In Full Gear",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Stetsosonic",
          "Linked Lyrics": "https://genius.com/Stetsosonic-in-full-gear-lyrics"
      },
      {
          "Song": "Sally",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Stetsosonic",
          "Linked Lyrics": "https://genius.com/Stetsosonic-sally-lyrics"
      },
      {
          "Song": "Talkin' All That Jazz",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Jazzmusic",
              "#Culturalappreciation",
              "#Artisticexpression"
          ],
          "Overall Theme": "Jazz Music and Cultural Appreciation",
          "artist": "Stetsosonic",
          "Linked Lyrics": "https://genius.com/Stetsosonic-talkin-all-that-jazz-lyrics"
      },
      {
          "Song": "Dead and Gone",
          "Reason of Selection": "Addressing the consequences of violence and the importance of personal growth and reflection",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Consequences",
              "#PersonalGrowth",
              "#Reflection",
              "#Violence",
              "#Family",
              "#SelfAwareness",
              "#Survival",
              "#Regret"
          ],
          "Overall Theme": "Consequences of Violence and Personal Growth",
          "artist": "T.I.",
          "Linked Lyrics": "https://genius.com/Ti-dead-and-gone-lyrics"
      },
      {
          "Song": "Live Your Life",
          "Reason of Selection": "Encouraging gratitude for life and promoting self-empowerment",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Gratitude",
              "#SelfEmpowerment",
              "#SelfAcceptance",
              "#PositiveOutlook"
          ],
          "Overall Theme": "Gratitude for Life and Self-Empowerment",
          "artist": "T.I.",
          "Linked Lyrics": "https://genius.com/Ti-live-your-life-lyrics"
      },
      {
          "Song": "New National Anthem",
          "Reason of Selection": "Addressing systemic issues, violence, and social commentary on America",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#SystemicIssues",
              "#Violence",
              "#SocialCommentary",
              "#AmericanSociety",
              "#Inequality",
              "#UrbanStruggles",
              "#NationalIdentity"
          ],
          "Overall Theme": "Systemic Issues, Violence, and Social Commentary",
          "artist": "T.I.",
          "Linked Lyrics": "https://genius.com/Ti-new-national-anthem-lyrics"
      },
      {
          "Song": "No Mediocre",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "T.I.",
          "Linked Lyrics": "https://genius.com/Ti-no-mediocre-lyrics"
      },
      {
          "Song": "Black Star",
          "Reason of Selection": "Celebrating black identity and empowerment",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#BlackIdentity",
              "#Empowerment",
              "#SocialJustice",
              "#BlackLivesMatter",
              "#HipHopCulture"
          ],
          "Overall Theme": "Black Identity and Empowerment",
          "artist": "Talib Kweli",
          "Linked Lyrics": "https://genius.com/Talib-kweli-black-star-lyrics"
      },
      {
          "Song": "Get By",
          "Reason of Selection": "Inspiration and resilience in the face of adversity",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Inspiration",
              "#Resilience",
              "#Adversity",
              "#SocialJustice",
              "#InnerStrength"
          ],
          "Overall Theme": "Inspiration and Resilience",
          "artist": "Talib Kweli",
          "Linked Lyrics": "https://genius.com/Talib-kweli-get-by-lyrics"
      },
      {
          "Song": "The Blast",
          "Reason of Selection": "Expression of artistic craft and love for hip-hop",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#ArtisticCraft",
              "#HipHopLove",
              "#Expression",
              "#MusicCulture"
          ],
          "Overall Theme": "Artistic Expression and Hip-Hop Love",
          "artist": "Talib Kweli",
          "Linked Lyrics": "https://genius.com/Talib-kweli-the-blast-lyrics"
      },
      {
          "Song": "The Proud",
          "Reason of Selection": "Promoting self-pride, unity, and cultural heritage",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#SelfPride",
              "#Unity",
              "#CulturalHeritage",
              "#Empowerment",
              "#Community"
          ],
          "Overall Theme": "Self-Pride and Cultural Heritage",
          "artist": "Talib Kweli",
          "Linked Lyrics": "https://genius.com/Talib-kweli-the-proud-lyrics"
      },
      {
          "Song": "Thought @ Work",
          "Reason of Selection": "Exploring the complexities of thought and creativity",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#ThoughtProcess",
              "#Creativity",
              "#SelfExpression",
              "#Intellectual",
              "#Introspection"
          ],
          "Overall Theme": "Thought and Creativity",
          "artist": "The Roots",
          "Linked Lyrics": "https://genius.com/The-roots-thought-@-work-lyrics"
      },
      {
          "Song": "What They Do",
          "Reason of Selection": "Critiquing the commercialization and superficiality in the music industry",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#MusicIndustry",
              "#Commercialization",
              "#Authenticity",
              "#HipHopCulture",
              "#ArtisticIntegrity"
          ],
          "Overall Theme": "Critique of Music Industry",
          "artist": "The Roots",
          "Linked Lyrics": "https://genius.com/The-roots-what-they-do-lyrics"
      },
      {
          "Song": "Don't Say Nuthin'",
          "Reason of Selection": "Celebrating the essence of hip-hop and artistic self-expression",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#HipHopEssence",
              "#ArtisticExpression",
              "#Musicality",
              "#Vibe",
              "#Energy"
          ],
          "Overall Theme": "Hip-Hop Essence and Self-Expression",
          "artist": "The Roots",
          "Linked Lyrics": "https://genius.com/The-roots-dont-say-nuthin-lyrics"
      },
      {
          "Song": "All Through the Night",
          "Reason of Selection": "Embracing the joy of nightlife and party culture",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "#Nightlife",
              "#PartyCulture",
              "#Celebration",
              "#FunVibes",
              "#Dance"
          ],
          "Overall Theme": "Nightlife and Party",
          "artist": "Tone Loc",
          "Linked Lyrics": "https://genius.com/Tone-loc-all-through-the-night-lyrics"
      },
      {
          "Song": "Cheeba Cheeba",
          "Reason of Selection": "Celebrating marijuana culture and its influence on music",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "#MarijuanaCulture",
              "#Weed",
              "#Relaxation",
              "#ChillVibes",
              "#MusicInfluence"
          ],
          "Overall Theme": "Marijuana Culture and Music",
          "artist": "Tone Loc",
          "Linked Lyrics": "https://genius.com/Tone-loc-cheeba-cheeba-lyrics"
      },
      {
          "Song": "90210",
          "Reason of Selection": "Portraying the story of a girl involved in prostitution and shedding light on the dark side of fame and the consequences of societal pressures",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#Prostitution",
              "#Struggles",
              "#Exploitation",
              "#Vulnerability",
              "#Fame",
              "#SocietalPressures"
          ],
          "Overall Theme": "Exploring the dark side of fame and the consequences of societal pressures",
          "artist": "Travis Scott",
          "Linked Lyrics": "https://genius.com/Travis-scott-90210-lyrics"
      },
      {
          "Song": "Stop trying to be God",
          "Reason of Selection": "Critiquing societal pressures and the pursuit of individuality amidst challenges",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "#SocietalPressures",
              "#Individuality",
              "#SelfExpression",
              "#Challenges"
          ],
          "Overall Theme": "Societal Pressures and Individuality",
          "artist": "Travis Scott",
          "Linked Lyrics": "https://genius.com/Travis-scott-stop-trying-to-be-god-lyrics"
      },
      {
          "Song": "We The People...",
          "Reason of Selection": "The song addresses social and political issues in American society, particularly focusing on themes of division, discrimination, and the struggle for equality. It reflects the cultural and social significance of Tribe Called Quest's music, as well as their conscious approach to addressing important issues through their lyrics.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#SocialJustice",
              "#PoliticalAwareness",
              "#Unity",
              "#Inclusion",
              "#RacialEquality"
          ],
          "Overall Theme": "Social and political issues, unity, equality",
          "artist": "Tribe Called Quest",
          "Linked Lyrics": "https://genius.com/Tribe-called-quest-we-the-people-lyrics"
      },
      {
        "Song": "Brenda's Got a Baby",
        "Reason of Selection": "The song tells a poignant story about a young girl named Brenda who falls into poverty and becomes a victim of abuse and neglect. It sheds light on the harsh realities faced by disadvantaged individuals and the need for compassion and support.",
        "Culturally Significant": "Yes",
        "Socially Conscious": "Yes",
        "Keywords": [
            "#Poverty",
            "#Abuse",
            "#Neglect",
            "#Empathy",
            "#SocialIssues"
        ],
        "Overall Theme": "Social injustice, youth struggles, empathy",
        "artist": "Tupac Shakur",
        "Linked Lyrics": "https://genius.com/2pac-brendas-got-a-baby-lyrics"
    },
    {
          "Song": "Changes",
          "Reason of Selection": "The song addresses social and racial issues in society, discussing the need for positive change and highlighting the struggles faced by marginalized communities. It has become an anthem for activism and has resonated with audiences around the world.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#SocialJustice",
              "#RacialEquality",
              "#SystemicInjustice",
              "#Activism",
              "#CommunityStruggles"
          ],
          "Overall Theme": "Social and racial inequality, activism, empowerment",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-changes-lyrics"
      },
      {
          "Song": "Dear Mama",
          "Reason of Selection": "This heartfelt tribute to Tupac's mother celebrates the love, strength, and sacrifices of single mothers everywhere. It resonates with listeners who can relate to the challenges faced by mothers in raising their children and showcases the importance of appreciation and gratitude.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Motherhood",
              "#Love",
              "#Gratitude",
              "#SingleMothers",
              "#Family"
          ],
          "Overall Theme": "Mother's love, resilience, gratitude",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-dear-mama-lyrics"
      },
      {
          "Song": "Ghetto Gospel",
          "Reason of Selection": "The song blends religious imagery and social commentary, expressing Tupac's desire for positive change and a 'ghetto gospel' that addresses the issues faced by marginalized communities. It calls for unity, love, and empowerment.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#SocialChange",
              "#Unity",
              "#Love",
              "#Empowerment",
              "#ReligiousReferences"
          ],
          "Overall Theme": "Social change, unity, love, empowerment",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-ghetto-gospel-lyrics"
      },
      {
          "Song": "Holler If Ya Hear Me",
          "Reason of Selection": "The song serves as a call to action, urging listeners to raise their voices against injustice and social inequality. It addresses the need for unity, resistance, and speaking out against the issues plaguing communities.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Activism",
              "#Resistance",
              "#Community",
              "#Solidarity",
              "#RaiseYourVoice"
          ],
          "Overall Theme": "Activism, unity, social awareness",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-holler-if-ya-hear-me-lyrics"
      },
      {
          "Song": "I Wonder If Heaven Got a Ghetto",
          "Reason of Selection": "The song reflects on the hardships faced by marginalized communities and questions the existence of justice and equality in society. It highlights the struggles of inner-city life and the desire for a better world.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Inequality",
              "#Justice",
              "#Hope",
              "#InnerCity",
              "#DesireForChange"
          ],
          "Overall Theme": "Socioeconomic struggles, hope, longing for equality",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-i-wonder-if-heaven-got-a-ghetto-lyrics"
      },
      {
          "Song": "Keep Ya Head Up",
          "Reason of Selection": "The song promotes self-respect, empowerment, and unity among women, particularly Black women. It addresses social issues such as sexism, misogyny, and the need for uplifting messages and support in a challenging world.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Empowerment",
              "#SelfRespect",
              "#GenderEquality",
              "#Unity",
              "#PositiveMessages"
          ],
          "Overall Theme": "Women empowerment, self-love, social issues",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-keep-ya-head-up-lyrics"
      },
      {
          "Song": "Pain",
          "Reason of Selection": "The song explores the hardships and struggles of life, including poverty, crime, addiction, and systemic oppression. Tupac reflects on the difficulty of growing up in a rough environment, conveying a sense of hopelessness while also asserting his resilience and determination.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Struggle",
              "#Resilience",
              "#Hardship",
              "#Crime",
              "#Addiction",
              "#StreetLife",
              "#ThugLife",
              "#Rebellion",
              "#Survival",
              "#Family",
              "#InnerPain"
          ],
          "Overall Theme": "Life's challenges",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-pain-lyrics"
      },
      {
          "Song": "Trapped",
          "Reason of Selection": "The song delves into the struggles of individuals trapped in a cycle of poverty, crime, and systemic oppression. It sheds light on the lack of opportunities and the hardships faced by those living in marginalized communities.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Poverty",
              "#Inequality",
              "#Oppression",
              "#Crime",
              "#SystemicIssues"
          ],
          "Overall Theme": "Socioeconomic struggles, systemic oppression",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-trapped-lyrics"
      },
      {
          "Song": "White Man'z World",
          "Reason of Selection": "The song critiques systemic racism and the struggles faced by people of color in a predominantly white society. It delves into the complexities of racial inequality and highlights the need for unity, understanding, and dismantling oppressive structures.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#RacialInequality",
              "#SystemicRacism",
              "#Unity",
              "#OppressiveStructures",
              "#SocialCritique"
          ],
          "Overall Theme": "Racial injustice, unity, social critique",
          "artist": "Tupac Shakur",
          "Linked Lyrics": "https://genius.com/2pac-white-manz-world-lyrics"
      },
      {
        "Song": "Free TC",
        "Reason of Selection": "The song raises awareness about the justice system and speaks about his brother's wrongful incarceration.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#Justice", "#Incarceration"],
        "Overall Theme": "Injustice in the legal system",
        "artist": "Ty Dolla $ign",
        "Linked Lyrics": "https://genius.com/Ty-dolla-sign-free-tc-lyrics"
      },
      {
        "Song": "No Justice",
        "Reason of Selection": "This song deals with the problem of systemic racism and injustice, featuring the voice of his incarcerated brother.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#Racism", "#Injustice"],
        "Overall Theme": "Systemic racism and injustice",
        "artist": "Ty Dolla $ign",
        "Linked Lyrics": "https://genius.com/Ty-dolla-sign-no-justice-lyrics"
      },
      {
        "Song": "Stand For",
        "Reason of Selection": "The song promotes standing up for one's beliefs and values. It's a call to action for social justice causes.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#SocialJustice", "#Values"],
        "Overall Theme": "Standing up for beliefs",
        "artist": "Ty Dolla $ign",
        "Linked Lyrics": "https://genius.com/Ty-dolla-sign-stand-for-lyrics"
      },
      {
        "Song": "Miracle",
        "Reason of Selection": "This song talks about the struggles of growing up in a dangerous neighborhood and overcoming adversity.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#Adversity", "#Overcoming"],
        "Overall Theme": "Overcoming adversity",
        "artist": "Ty Dolla $ign",
        "Linked Lyrics": "https://genius.com/Ty-dolla-sign-miracle-lyrics"
      },
      {
          "Song": "Int'l Players Anthem (I Choose You)",
          "Reason of Selection": "'Int'l Players Anthem' is a collaboration with OutKast that explores the complexities of relationships, commitment, and love. It highlights the importance of respect and loyalty, making it socially conscious in its portrayal of healthy partnerships. It became a cultural anthem, resonating with listeners across different backgrounds.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "No",
          "Keywords": [
              "#IntlPlayersAnthem",
              "#StreetLife",
              "#Prostitution",
              "#Pimping"
          ],
          "Overall Theme": "Healthy relationships and loyalty",
          "artist": "UGK",
          "Linked Lyrics": "https://genius.com/Ugk-intl-players-anthem-(i-choose-you)-lyrics"
      },
      {
          "Song": "One Day",
          "Reason of Selection": "One Day' is a powerful reflection on the struggles of life in the ghetto, addressing poverty, violence, and the pursuit of a better future. It serves as a reminder of the harsh realities faced by marginalized communities and promotes empathy and understanding.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
              "#Struggles",
              "#Communities",
              "#Reflection"
          ],
          "Overall Theme": "Struggles and aspirations in marginalized communities",
          "artist": "UGK",
          "Linked Lyrics": "https://genius.com/Ugk-one-day-lyrics"
      },
      {
          "Song": "Pocket Full of Stones",
          "Reason of Selection": "'Pocket Full of Stones' addresses the consequences of the drug trade and its impact on individuals and communities. It sheds light on the socioeconomic factors that contribute to the cycle of drug addiction and offers a critical perspective on the systemic issues at play.",
          "Socially Conscious": "Yes",
          "Culturally Significant": "Yes",
          "Keywords": [
              "#PocketFullOfStones",
              "#Drugs",
              "#Socioeconomic"
          ],
          "Overall Theme": "Consequences of the drug trade and socioeconomic factors",
          "artist": "UGK",
          "Linked Lyrics": "https://genius.com/Ugk-pocket-full-of-stones-lyrics"
      },
      {
          "Song": "A Chorus Line",
          "Reason of Selection": "Catchy chorus and energetic production",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Catchy",
              "Energetic"
          ],
          "Overall Theme": "Entertainment",
          "artist": "Ultramagnetic MCs",
          "Linked Lyrics": "https://genius.com/Ultramagnetic-mcs-a-chorus-line-lyrics"
      },
      {
          "Song": "Ego Trippin",
          "Reason of Selection": "Unique and experimental sound",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Unique",
              "Experimental"
          ],
          "Overall Theme": "Self-confidence",
          "artist": "Ultramagnetic MCs",
          "Linked Lyrics": "https://genius.com/Ultramagnetic-mcs-ego-trippin-lyrics"
      },
      {
          "Song": "One Two One Two",
          "Reason of Selection": "Engaging lyrics and dynamic flow",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Engaging",
              "Dynamic"
          ],
          "Overall Theme": "Rap skills",
          "artist": "Ultramagnetic MCs",
          "Linked Lyrics": "https://genius.com/Ultramagnetic-mcs-one-two-one-two-lyrics"
      },
      {
          "Song": "Poppa Large",
          "Reason of Selection": "Catchy hooks and playful wordplay",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Catchy",
              "Playful"
          ],
          "Overall Theme": "Boasting",
          "artist": "Ultramagnetic MCs",
          "Linked Lyrics": "https://genius.com/Ultramagnetic-mcs-poppa-large-lyrics"
      },
      {
          "Song": "Raise It Up",
          "Reason of Selection": "Energetic production and confident delivery",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Energetic",
              "Confident"
          ],
          "Overall Theme": "Empowerment",
          "artist": "Ultramagnetic MCs",
          "Linked Lyrics": "https://genius.com/Ultramagnetic-mcs-raise-it-up-lyrics"
      },
      {
          "Song": "Bad Luck Barry",
          "Reason of Selection": "Narrative about an individual facing hardships",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "Hardships",
              "Challenges",
              "Struggles",
              "Life narrative"
          ],
          "Overall Theme": "Facing adversity, overcoming challenges",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-bad-luck-barry-lyrics"
      },
      {
          "Song": "Lethal",
          "Reason of Selection": "Aggressive and energetic delivery",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Aggressive",
              "Energetic"
          ],
          "Overall Theme": "Bravado",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-lethal-lyrics"
      },
      {
          "Song": "Nothing Cold Will Ever Last",
          "Reason of Selection": "Reflective lyrics and emotional depth",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Reflective",
              "Emotional"
          ],
          "Overall Theme": "Perseverance",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-nothing-cold-will-ever-last-lyrics"
      },
      {
          "Song": "Skeezer",
          "Reason of Selection": "Playful and humorous lyrics",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Playful",
              "Humorous"
          ],
          "Overall Theme": "Flirting",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-skeezer-lyrics"
      },
      {
          "Song": "Split Personality",
          "Reason of Selection": "Exploration of dual identities and mental disability",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Dualidentities",
              "#Self-exploration",
              "#Mentaldisability"
          ],
          "Overall Theme": "Identity, mental health",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-split-personality-lyrics"
      },
      {
          "Song": "Split Personality II",
          "Reason of Selection": "Exploration of dual identities and mental health continuation from 'Split Personality'",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "Dual identities",
              "Self-exploration",
              "Mental health"
          ],
          "Overall Theme": "Identity, mental health",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-split-personality-ii-lyrics"
      },
      {
          "Song": "Take a Chance",
          "Reason of Selection": "Encouragement to believe in oneself and take risks",
          "Culturally Significant": "No",
          "Socially Conscious": "Yes",
          "Keywords": [
              "Belief in oneself",
              "Risk-taking",
              "Self-improvement"
          ],
          "Overall Theme": "Self-belief, taking chances",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-take-a-chance-lyrics"
      },
      {
          "Song": "The Ride",
          "Reason of Selection": "Adventurous and dynamic storytelling",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Adventurous",
              "Storytelling"
          ],
          "Overall Theme": "Journey",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-the-ride-lyrics"
      },
      {
          "Song": "We're All in the Same Gang",
          "Reason of Selection": "Collaborative effort promoting unity",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "Unity",
              "Social awareness"
          ],
          "Overall Theme": "Community",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-were-all-in-the-same-gang-lyrics"
      },
      {
          "Song": "Ya Shoulda Listened",
          "Reason of Selection": "Warning and advice-based lyrics",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [
              "Warning",
              "Advice"
          ],
          "Overall Theme": "Regret",
          "artist": "UTFO",
          "Linked Lyrics": "https://genius.com/Utfo-ya-shoulda-listened-lyrics"
      },
      {
          "Song": "Be Yourself",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Whodini",
          "Linked Lyrics": "https://genius.com/Whodini-be-yourself-lyrics"
      },
      {
          "Song": "Friends",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Friendship",
              "#Community"
          ],
          "Overall Theme": "Friendship and Unity",
          "artist": "Whodini",
          "Linked Lyrics": "https://genius.com/Whodini-friends-lyrics"
      },
      {
          "Song": "One Love",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#Love",
              "#Unity"
          ],
          "Overall Theme": "Love and Relationships",
          "artist": "Whodini",
          "Linked Lyrics": "https://genius.com/Whodini-one-love-lyrics"
      },
      {
        "Song": "World's Famous",
        "Reason of Selection": "This track serves as a self-introduction of the World Famous Supreme Team Show, showcasing their unique and innovative approach to hip-hop radio. It also emphasizes the idea of being \"world-famous\" and the global reach of hip-hop culture.",
        "Socially Conscious": "No",
        "Culturally Significant": "Yes",
        "Keywords": ["#WorldPeace", "#SelfPerservation"],
        "Overall Theme": "Introduction and Global Reach",
        "artist": "World Famous Supreme Team",
        "Linked Lyrics": "https://genius.com/Malcolm-mclaren-worlds-famous-radio-id-lyrics"
      },
      {
          "Song": "A Better Tomorrow",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Hope",
              "#Unity",
              "#SocialChange"
          ],
          "Overall Theme": "Hope for a Better Future",
          "artist": "Wu-Tang Clan",
          "Linked Lyrics": "https://genius.com/Wu-tang-clan-a-better-tomorrow-lyrics"
      },
      {
          "Song": "C.R.E.A.M.",
          "Reason of Selection": "(Cash Rules Everything Around Me) is a compelling portrayal of the harsh realities faced by individuals living in poverty-stricken neighborhoods. The song delves deep into the struggles, ambition, and resilience of those trapped in the relentless cycle of ghetto life. Wu-Tang Clan's powerful lyrics shed light on themes of poverty, separation, injustice, and survival. By highlighting the challenges of drug dealing, crime, and the eluding grasp of the law, the song offers a raw and thought-provoking commentary on the social and economic disparities that plague our world. Through their music, Wu-Tang Clan emphasizes the importance of hard work, partner wisdom, and the need to teach the younger generation about these issues. 'C.R.E.A.M.' stands as an anthem that exposes the corrupt systems and inspires listeners to strive for a better future amidst adversity.",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Poverty",
              "#Struggle",
              "#Ambition",
              "#GhettoStruggles",
              "#HandMeDowns",
              "#Separation",
              "#DrugDealing",
              "#crime",
              "#Robbery",
              "#Survival",
              "#Injustice",
              "#WorldAsPrison",
              "#EludingPolice",
              "#Depression",
              "#PartnerWisdom",
              "#HardWork",
              "#StickUpKids",
              "#CorruptCops",
              "#drugs",
              "#TeachTheChildren"
          ],
          "Overall Theme": "Struggle and Ambition",
          "artist": "Wu-Tang Clan",
          "Linked Lyrics": "https://www.azlyrics.com/lyrics/wutangclan/cream.html"
      },
      {
          "Song": "Can It Be That It Was All So Simple Then",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#Nostalgia",
              "#Reflection"
          ],
          "Overall Theme": "Nostalgia and Reflection",
          "artist": "Wu-Tang Clan",
          "Linked Lyrics": "https://genius.com/Wu-tang-clan-can-it-be-that-it-was-all-so-simple-then-lyrics"
      },
      {
          "Song": "Protect Ya Neck",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#Strength",
              "#Empowerment"
          ],
          "Overall Theme": "Strength and Empowerment",
          "artist": "Wu-Tang Clan",
          "Linked Lyrics": "https://genius.com/Wu-tang-clan-protect-ya-neck-lyrics"
      },
      {
          "Song": "Triumph",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Resilience",
              "#Unity",
              "#SocialCommentary"
          ],
          "Overall Theme": "Resilience and Unity",
          "artist": "Wu-Tang Clan",
          "Linked Lyrics": "https://genius.com/Wu-tang-clan-triumph-lyrics"
      },
      {
          "Song": "Changes",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#SocialJustice",
              "#RacialEquality",
              "#Empowerment"
          ],
          "Overall Theme": "Social Change and Empowerment",
          "artist": "XXXTentacion",
          "Linked Lyrics": "https://genius.com/Xxxtentacion-changes-lyrics"
      },
      {
          "Song": "Hope",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#Hope",
              "#MentalHealth",
              "#Inspiration"
          ],
          "Overall Theme": "Hope and Mental Health",
          "artist": "XXXTentacion",
          "Linked Lyrics": "https://genius.com/Xxxtentacion-hope-lyrics"
      },
      {
          "Song": "Jocelyn Flores",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#MentalHealth",
              "#Emotional"
          ],
          "Overall Theme": "Mental Health and Emotional Struggles",
          "artist": "XXXTentacion",
          "Linked Lyrics": "https://genius.com/Xxxtentacion-jocelyn-flores-lyrics"
      },
      {
          "Song": "Sad",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "No",
          "Keywords": [
              "#Emotions",
              "#SelfReflection"
          ],
          "Overall Theme": "Emotions and Self-Reflection",
          "artist": "XXXTentacion",
          "Linked Lyrics": "https://genius.com/Xxxtentacion-sad-lyrics"
      },
      {
          "Song": "Death Row",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Young Dolph",
          "Linked Lyrics": "https://genius.com/Young-dolph-death-row-lyrics"
      },
      {
          "Song": "Rich Slave",
          "Reason of Selection": "",
          "Culturally Significant": "Yes",
          "Socially Conscious": "Yes",
          "Keywords": [
              "#WealthInequality",
              "#SystemicRacism",
              "#EconomicEmpowerment"
          ],
          "Overall Theme": "Wealth Inequality and Economic Empowerment",
          "artist": "Young Dolph",
          "Linked Lyrics": "https://genius.com/Young-dolph-rich-slave-lyrics"
      },
      {
          "Song": "The Land",
          "Reason of Selection": "",
          "Culturally Significant": "No",
          "Socially Conscious": "No",
          "Keywords": [],
          "Overall Theme": "",
          "artist": "Young Dolph",
          "Linked Lyrics": "https://genius.com/Young-dolph-the-land-lyrics"
      },
      {
        "Song": "Check",
        "Reason of Selection": "\"Check\" addresses the struggles of poverty and the desire for financial stability. Young Thug reflects on his journey from humble beginnings to success, highlighting the importance of hard work and perseverance. The song promotes financial responsibility and serves as a motivating anthem for those striving to improve their circumstances.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#FinancialStruggles", "#Success", "#Motivation"],
        "Overall Theme": "Overcoming Adversity",
        "artist": "Young Thug",
        "Linked Lyrics": "https://genius.com/Young-thug-check-lyrics"
      },
      {
        "Song": "For Ya'll (featuring Jacquees)",
        "Reason of Selection": "\"For Ya'll\" celebrates the importance of family and community. Young Thug expresses love and loyalty to his loved ones, emphasizing the significance of staying connected and supporting each other through life's challenges. The song's positive message resonates with listeners, promoting unity and familial bonds.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#Family", "#Love", "#Loyalty"],
        "Overall Theme": "Family and Unity",
        "artist": "Young Thug",
        "Linked Lyrics": "https://genius.com/Young-thug-for-yall-lyrics"
      },
      {
        "Song": "Tomorrow Til Infinity",
        "Reason of Selection": "\"Tomorrow Til Infinity\" touches on the struggles of fame and success, revealing the pressure and challenges that come with being in the spotlight. Young Thug reflects on the importance of staying true to oneself and not succumbing to the negative aspects of fame. The song's introspective nature makes it culturally relevant in an era of celebrity culture.",
        "Socially Conscious": "Yes",
        "Culturally Significant": "Yes",
        "Keywords": ["#Fame", "#Identity", "#Authenticity"],
        "Overall Theme": "Staying True to Oneself",
        "artist": "Young Thug",
        "Linked Lyrics": "https://genius.com/Young-thug-tomorrow-til-infinity-lyrics"
      }
    ]
  };


  data = {
    "sam_cooks": [
      {
        "Artist": "21 Savage",
        "songs": [
          "A Lot",
          "Letter 2 My Momma",
          "Nothing New"
        ],
        "count": 3
      },
      {
        "Artist": "3rd Bass",
        "songs": [
          "Derilicts of Dialect",
          "No Master Plan No Master Race",
          "No Static at All",
          "Oval Office",
          "Pop Goes the Weasel",
          "Problem Child",
          "Product of the Environment",
          "The Gas Face"
        ],
        "count": 8
      },
      {
        "Artist": "50 Cent",
        "songs": [
          "Hate It Or Love It"
        ],
        "count": 1
      },
      {
        "Artist": "Akinyele",
        "songs": [
          "30 Days", 
          "Pussy Makes the World Go Round", 
          "Exercise"
        ],
        "count": 3
      },
      {
        "Artist": "Beastie Boys",
        "songs": [
          "Fight for Your Right (To Party!)",
          "Sabotage"
        ],
        "count": 2
      },
      {
        "Artist": "Big Daddy Kane",
        "songs": [
          "Word to the Mother",
          "Young, Gifted and Black"
        ],
        "count": 2
      },
      {
        "Artist": "Big Pun",
        "songs": [
          "100%",
          "Beware",
          "Twinz (Deep Cover'98)",
          "You Ain't a Killer"
        ],
        "count": 4
      },
      {
        "Artist": "Biz Markie",
        "songs": [
          "Busy Doin Nothin",
          "Hooker Got a Boyfriend",
          "vapors"
        ],
        "count": 3
      },
      {
        "Artist": "Black Eyed Peas",
        "songs": [
          "Just Can't Get Enough",
          "Where is the Love"
        ],
        "count": 2
      },
      {
        "Artist": "Bone Thugs-N-Harmony",
        "songs": [
          "1st of the Month",
          "Change the World",
          "Tha Crossroads"
        ],
        "count": 3
      },
      {
        "Artist": "Busta Rhymes",
        "songs": [
          "One",
          "When Disaster Strikes"
        ],
        "count": 2
      },
      {
        "Artist": "Canibus",
        "songs": [
          "Channel Zero",
          "Nigganometry"
        ],
        "count": 2
      },
      {
        "Artist": "Cardi B",
        "songs": [
          ""
        ],
        "count": 0
      },
      {
        "Artist": "Chance the Rapper",
        "songs": [
          "Yah Know", 
          "Blessings", 
          "Cocoa Butter Kisses", 
          "Angels", 
          "Same Drugs", 
          "How Great Is Our God"
        ],
        "count": 6
      },
      {
        "Artist": "Childish Gambino",
        "songs": [
          "3005",
          "53.49",
          "Earth: The Oldest Computer (The Last Night)",
          "Feels Like Summer",
          "Life: The Biggest Troll (Andrew Auernheimer)",
          "Redbone",
          "Sweatpants",
          "That Power",
          "This Is America"
        ],
        "count": 9
      },
      {
        "Artist": "Common",
        "songs": [
          "A Song for Assata",
          "Be",
          "Black America Again",
          "Faithful",
          "Glory",
          "I Used to Love H.E.R.",
          "Letter to the Free",
          "Retrospect for Life",
          "Testify",
          "The 6th Sense",
          "The Believer",
          "The Corner",
          "The Dreamer",
          "The Food",
          "The People",
          "U, Black Maybe"
        ],
        "Count": 16
      },
      {
        "Artist": "Cypress Hill",
        "songs": [
          "Hand On the Pump",
          "How I Could Just Kill a Man",
          "Insane in the Brain",
          "Pigs",
          "Rise Up",
          "Tequila Sunrise"
        ],
        "count": 6
      },
      {
        "Artist": "De La Soul",
        "songs": [
          "Ghetoo Thang",
          "Itsoweezee (HOT)",
          "Me, Myself, and I",
          "My Brother's a Basehead",
          "Say No Go",
          "Stakes is High",
          "Who Do You Worship"
        ],
        "count": 7
      },
      {
        "Artist": "Digital Underground",
        "songs": [
          "No Nose Job",
          "Same Song",
          "Tie the Knot"
        ],
        "count": 3
      },
      {
        "Artist": "DJ Jazzy Jeff & The Fresh Prince",
        "songs": [
          "Parents Just Don't Understand"
        ],
        "count": 1
      },
      {
        "Artist": "Denzel Curry",
        "songs": [
          "BLACK BALLOONS",
          "Clout Cobain",
          "P.A.T.",
          "SIRENS",
          "Speedboat",
          "Ultimate"
        ],
        "count": 6
      },
      {
        "Artist": "DMX",
        "songs": [
            "Slippin'", 
            "Who We Be", 
            "Where the Hood At", 
            "Stop Being Greedy", 
            "The Omen"
        ],
        "count": 5
      },
      {
        "Artist": "Don Trip",
        "songs": [
          "Hold Back Tears",
          "Letter to My Son",
          "Letter to My Son Part 2",
          "Prolly",
          "The Life"
        ],
        "count": 5
      },
      {
        "Artist": "Doug E. Fresh",
        "songs": [
          "Ain't No Half-Steppin",
          "Play This Only At Night"
        ],
        "count": 2
      },
      {
        "Artist": "DJ Quik",
        "songs": [
          "Black Mercedes",
          "Fandango",
          "Nobody",
          "Nobody Does It Better",
          "You'z a Ganxta"
        ],
        "count": 5
      },
      {
        "Artist": "Drake",
        "songs": [
          ""
        ],
        "count": 0
      },
      {
        "Artist": "El-P",
        "songs": [
          "Deep Space 9mm",
           "Stepfather Factory",
           "The Full Retard",
           "Drones Over BKLYN",
           "Cancer 4 Cure",
           "Tasmanian Pain Coaster"
           ],
           "count": 6
        },
        {
        "Artist": "Eminem",
        "songs": [
          "Lose Yourself",
          "Not Afraid",
          "Stan",
          "Toy Soldier",
          "White America"
        ],
        "count": 5
      },
      {
        "Artist": "EPMD",
        "songs": [
          "Crossover",
          "You Gots to Chill"
        ],
        "count": 2
      },
      {
        "Artist": "Eric B & Rakim",
        "songs": [
          "Don't Sweat the Technique",
          "Follow the Leader",
          "In the Ghetto",
          "Mahogany",
          "Microphone Fiend",
          "Paid in Full",
          "Teach the Children"
        ],
        "count": 7
      },
      {
        "Artist": "Fabolous",
        "songs": [
          "My Time",
          "Breathe",
          "Life Is So Exciting"
        ],
        "count": 3
      },
      {
        "Artist": "Fat Boys",
        "songs": [
          "Big & Beautiful",
          "Don't Be Stupid",
          "Jailhouse Rap",
          "Protect Yourself \/ My Nuts",
          "The Fat Boys at Forty"
        ],
        "count": 5
      },
      {
        "Artist": "Fearless Four",
        "songs": [
          "Problems of the World Today"
        ],
        "count": 1
      },
      {
        "Artist": "Fugees",
        "songs": [
          "Family Business",
          "Fugee-La",
          "Ghetto Misfortunes Wealth",
          "Ready or Not",
          "Temple",
          "The Mask",
          "The Score",
          "Vocab"
        ],
        "count": 8
      },
      {
        "Artist": "Future",
        "songs": [
          "Codeine Crazy",
          "March Madness",
          "Feds Watching",
          "Life Is Good",
          "Mask Off"
        ],
        "count": 5
      },
      {
        "Artist": "Gang Starr",
        "songs": [
          "DWYCK",
          "Just To Get a Rep",
          "Mass Appeal"
        ],
        "count": 3
      },
      {
        "Artist": "Grand Master Flash and the Furious 5",
        "songs": [
          "The Message",
          "White Lines"
        ],
        "count": 2
      },
      {
        "Artist": "Gunna",
        "songs": [
          ""
        ],
        "count": 0
      },
      {
        "Artist": "Heavy D & the Boyz",
        "songs": [
          "Black Coffee",
          "Don't Curse",
          "Self-Destruction"
        ],
        "count": 3
      },
      {
        "Artist": "Ice Cube",
        "songs": [
          "Black Korea",
          "Check Yoself",
          "Child Support",
          "F*ck tha Police",
          "It Was a Good Day"
        ],
        "count": 5
      },
      {
        "Artist": "Ice-T",
        "songs": [
          "6 'N the Mornin'",
          "Colors",
          "Freedom of Speech",
          "I'm Your Pusher",
          "Lethal Weapon",
          "New Jack Hustler",
          "O.G. Original Gangster"
        ],
        "count": 7
      },
      {
        "Artist": "Jay-Z",
        "songs": [
          "99 Problems",
          "Hard Knock Life",
          "No Church in the Wild",
          "The Story of O.J."
        ],
        "count": 4
      },
      {
        "Artist": "J-Cole",
        "songs": [
          "1985",
          "Be Free",
          "Crooked Smile",
          "Firing Squad",
          "Lost Ones",
          "Middle Child",
          "Neighbors"
        ],
        "count": 6
      },
      {
        "Artist": "Joyner Lucas",
        "songs": [
          "I'm Not Racist",
          "Devil's Work",
          "ISIS (featuring Logic)",
          "Frozen",
          "I Love"
        ],
        "count": 5
      },
      {
        "Artist": "Juice Wrld",
        "songs": [
          "Lucid Dreams",
          "Legends",
          "Robbery",
          "Wishing Well"
        ],
        "count": 4
      },
      {
        "Artist": "Jungle Brothers",
        "songs": [
          "Black is Black",
          "Black Woman",
          "Breathe Don't Stop",
          "Straight Out the Jungle",
          "What 'U' Waitin' '4'?"
        ],
        "count": 5
      },
      {
        "Artist": "Just-Ice",
        "songs": [
          "Freedom of Speech",
          "Going Way Back",
          "Latoya",
          "Moshitup"
        ],
        "count": 4
      },
      {
        "Artist": "Kanye West",
        "songs": [
          "All Falls Down",
          "Diamonds from Sierra Leone",
          "Heard Em Say",
          "Hey Mama",
          "Jesus is Lord",
          "Jesus Walks",
          "New Slaves",
          "No Church in the Wild",
          "Selah",
          "Spaceship",
          "Ultralight Beam",
          "Water",
          "Who Will Survive In America",
          "Ye vs. The People"
        ],
        "count": 14
      },
      {
        "Artist": "Kendrick Lamar",
        "songs": [
          "Alright",
          "Complexion (A Zulu Love)",
          "DNA",
          "F*ck Your Ethnicity",
          "FEAR",
          "HiiiPower",
          "How Much a Dollar Cost",
          "i",
          "King Kunta",
          "Ronald Reagan Era (His Evils)",
          "The Blacker the Berry",
          "United in Grief"
        ],
        "count": 12
      },
      {
        "Artist": "Kenny Mason",
        "songs": [
          "Angels Calling",
          "Handle Me",
          "Hit",
          "Metal Wings",
          "PTSD"
        ],
        "count": 5
      },
      {
        "Artist": "Kid 'n Play",
        "songs": [
          "Black is Beautiful",
          "Face the Nation",
          "Slippin'"
        ],
        "count": 3
      },
      {
        "Artist": "Killer Mike",
        "songs": [
          "2 Sides",
          "Anywhere but Here",
          "Blackboy, Whiteboy",
          "Close Your Eyes",
          "DDFH",
          "Don't Die",
          "Don't Let the Devil",
          "Early",
          "Exit 9",
          "Follow Your Dreams",
          "Ghetto Gospel",
          "Go",
          "God in the Building II",
          "Goddammit",
          "Grandma's House",
          "High and Holy",
          "Ju$t",
          "Kill Your Masters",
          "Lie Cheat Steal",
          "Motherless",
          "NRICH",
          "Pl8to",
          "Reagan",
          "Run",
          "Scared Straight",
          "Scientists and Engineers",
          "Shed Tears",
          "Slammer",
          "Something for Junkies",
          "Spaceship Views",
          "That's Life",
          "Walking in the Snow"
        ],
        "count": 31
      },
      {
        "Artist": "Kodak Black",
        "songs": [
          "Calling My Spirit",
          "Tunnel Vision"
        ],
        "count": 2
      },
      {
        "Artist": "Kool Moe Dee",
        "songs": [
          "Go See the Doctor",
          "Rise 'N' Shine",
          "Self-Destruction",
          "Wild Wild West"
        ],
        "count": 4
      },
      {
        "Artist": "KRS-One",
        "songs": [
          "Black and Proud",
          "Black Cop",
          "Edutainment",
          "Elementary",
          "Ghetto Music",
          "House Niggas",
          "Illegal Business",
          "Jah Rulez",
          "Loves Gonna Getcha",
          "My Philosophy",
          "Nervous",
          "Racist",
          "Self-Destruction",
          "Sex and Violence",
          "Soud of Da Police",
          "Stop the Violence",
          "T'Cha",
          "The Eye Opener",
          "Who Protects Us From You",
          "Why Is That?",
          "You Must Learn"
        ],
        "count": 19
      },
      {
        "Artist": "Kurtis Blow",
        "songs": [
          "America",
          "Basketball",
          "If I Ruled the World",
          "The Breaks"
        ],
        "count": 3
      },
      {
        "Artist": "Lauryn Hill",
        "songs": [
          "Doo Wop (That Thing)",
          "Every Ghetto, Every City",
          "Everything is Everything",
          "Final Hour",
          "Forgive Them Father",
          "To Zion"
        ],
        "count": 6
      },
      {
        "Artist": "Lil Boosie",
        "songs": [
          "True Soldier",
          "My Block",
          "Free Boosie",
          "Better Days",
          "Dead Man Walking",
          "Letter to My Son",
          "Freedom"
        ],
        "count": 7
      },
      {
        "Artist": "Lil Jon",
        "songs": [
          "Hard Times",
          "I Am American",
          "Put Your Hood Up",
          "Read a Book",
          "Rep Yo City"
        ],
        "count": 5
      },
      {
        "Artist": "Lil Uzi Vert",
        "songs": [
          "Dark Queen",
          "Money Longer",
          "The Way Life Goes",
          "XO Tour Lif3"
        ],
        "count": 4
      },
      {
        "Artist": "Lil Wayne",
        "songs": [
          "Georgia Bush",
          "London Roads",
          "Misunderstood",
          "Open Letter",
          "Tie My Hands"
        ],
        "count": 5
      },
      {
        "Artist": "LL Cool J",
        "songs": [
          "Black Radio"
        ],
        "count": 1
      },
      {
        "Artist": "The Lox",
        "songs": [
          "Dope Money",
          "Why"
        ],
        "count": 2
      },
      {
        "Artist": "Mac Dre",
        "songs": [
          "Thizzle Dance",
          "Feelin' Myself",
          "Thizzle Washington",
          "Punk Police",
          "Genie of the Lamp",
          "Dreganomics"
        ],
        "count": 6
      },
      {
        "Artist": "Main Source",
        "songs": [
          "Just Hangin' Out",
          "Live at the BBQ"
        ],
        "count": 2
      },
      {
        "Artist": "MC Shan",
        "songs": [
          "The Bridge",
          "Juice Crew Law",
          "I Pioneered This",
          "Project 'Ho",
          "Kill That Noise",
          "Cocaine"
        ],
        "count": 6
      },
      {
        "Artist": "MF DOOM",
        "songs": [
          "Doomsday",
          "Accordion",
          "Rapp Snitch Knishes",
          "All Caps",
          "Rhymes Like Dimes",
          "One Beer",
          "Gazzillion Ear"
        ],
        "count": 7
      },
      {
        "Artist": "Missy Elliott",
        "songs": [
          "Pass That Dutch"
        ],
        "count": 1
      },
      {
        "Artist": "Mobb Deep",
        "songs": [
          "Drink Away the Pain (Situations)",
          "G.O.D. Pt. III",
          "Give Up the Goods (Just Step)",
          "Hell on Earth",
          "Quiet Storm",
          "Shook Ones Pt. II",
          "Survival of the Fittest",
          "Temperature's Rising",
          "The Start of Your Ending (41st Side)",
          "Trife Life"
        ],
        "count": 10
      },
      {
        "Artist": "Moneybagg Yo",
        "songs": [
        "Black Heart",
        "Fed Baby's",
        "Reset",
        "Say Na"
        ],
        "count": 4
      },
      {
        "Artist": "Mos Def",
        "songs": [
          "Black Radio",
          "Casa Bey",
          "Fear Not of Man",
          "Mathematics",
          "Mr. Nigga",
          "Umi Says"
        ],
        "count": 6
      },
      {
        "Artist": "N.W.A.",
        "songs": [
          "Express Yourself",
          "F*ck da Police",
          "The Message"
        ],
        "count": 3
      },
      {
        "Artist": "Nas",
        "songs": [
          "Black Republican",
          "Daughters",
          "I Can",
          "I Gave You Power",
          "If I Ruled The World",
          "One Love",
          "The World Is Yours"
        ],
        "count": 7
      },
      {
        "Artist": "Naughty By Nature",
        "songs": [
          "Everything's Gonna Be Alright",
          "Mourn You Til I Join You"
        ],
        "count": 2
      },
      {
        "Artist": "NBA Youngboy",
        "songs": [
          "I Am Who They Say I Am",
          "Untouchable",
          "No Smoke",
          "Genie",
          "Akbar",
          "Outside Today"
        ],
        "count": 6
      },
      {
        "Artist": "Nice & Smooth",
        "songs": [
          "Breakdown",
          "Do Whatcha Gotta",
          "DWYCK",
          "Ghetoo Freaks",
          "Ooh Child",
          "Sometimes I Rhyme Slow"
        ],
        "count": 6
      },
      {
        "Artist": "Nicki Minaj",
        "songs": [
          ""
        ],
        "count": 0
      },
      {
        "Artist": "Nipsey Hussle",
        "songs": [
          "Blue Laces 2",
          "Blue Laces",
          "Dedication",
          "Don't Take Days Off",
          "Loaded Bases",
          "Ocean Views",
          "Racks in the Middle",
          "Roll The Windows Up"
        ],
        "count": 8
      },
      {
        "Artist": "Notorious B.I.G.",
        "songs": [
          "Sky's the Limit"
        ],
        "count": 1
      },
      {
        "Artist": "Onyx",
        "songs": [
          "All We Got is Us",
          "Last Dayz"
        ],
        "count": 2
      },
      {
        "Artist": "Outkast",
        "songs": [
          "Bombs Over Baghdad",
          "Rosa Parks"
        ],
        "count": 2
      },
      {
        "Artist": "Public Enemy",
        "songs": [
          "911 is a Joke",
          "Fight The Power",
          "Don't Believe The Hype",
          "Black Steel in the Hour of Chaos",
          "Bring the Noise",
          "Can't Truss It",
          "Shut Em Down",
          "Welcome to the Terrordome"
        ],
        "count": 8
      },
      {
        "Artist": "Redman",
        "songs": [
          "Can't Wait",
          "Dare Iz a Darkside",
          "Sooperman Luva II",
          "Whateva Man"
        ],
        "count": 4
      },
      {
        "Artist": "Rick Ross",
        "songs": [
          "Free Mason",
          "Pirates",
          "Rich Forever",
          "Usual Suspects",
          "Valley of Death"
        ],
        "count": 5
      },      
      {
        "Artist": "Roxanne Shante",
        "songs": [
          "Go On Girl",
          "Have a Nice Day",
          "Independent Woman",
          "Runaway"
        ],
        "count": 4
      },
      {
        "Artist": "Run DMC",
        "songs": [
          "30 Days",
          "Hard Times",
          "It's Like That",
          "Proud to be Black",
          "Wake Up"
        ],
        "count": 5
      },
      {
        "Artist": "Salt-N-Pepa",
        "songs": [
          "Expression",
          "Let's Talk About Sex",
          "None of Your Business",
          "Whatta Man"
        ],
        "count": 4
      },
      {
        "Artist": "Scarface",
        "songs": [
          "Faith",
          "Goin Down",
          "Guess Who's Back",
          "Hand of the Dead Body",
          "High Note",
          "I Seen a Man Die",
          "In Between Us",
          "Jesse James",
          "Look Me in My Eyes",
          "Mind Playin' Tricks",
          "My Block",
          "Never Seen a Man Cry",
          "No Tears",
          "Now I Feel Ya",
          "Smartz",
          "Smile",
          "The Diary",
          "The White Sheet",
          "What Can I Do"
        ],
        "count": 19
      },
        {
          "Artist": "Schoolly D",
          "songs": [
            "Am I Black Enough For You"
          ],
          "count": 1
        },
      {
        "Artist": "Sir Mix-a-Lot",
        "songs": [
          "One Time's Got No Case",
          "Swap Meet Louie"
        ],
        "count": 2
      },
      {
        "Artist": "Slick Rick",
        "songs": [
          "A Letter",
          "Children's Story",
          "Hey Young World",
          "Street Talkin",
          "Teenage Love"
        ],
        "count": 5
      },
      {
        "Artist": "Snoop Dogg",
        "songs": [
          "Murder Was the Case",
          "No Guns Allowed",
          "One Blood, One Cuzz",
          "The Police",
          "This City",
          "Vato"
        ],
        "count": 6
      },
      {
        "Artist": "Special Ed",
        "songs": [
          "The Mission"
        ],
        "count": 1
      },
      {
        "Artist": "Stetsosonic",
        "songs": [
          "A.F.R.I.C.A.",
          "Freedom or Death",
          "In Full Gear",
          "Sally",
          "Talkin' All That Jazz"
        ],
        "count": 5
      },
      {
        "Artist": "Sugar Hill Gang",
        "songs": [
          ""
        ],
        "count": 0
      },
      {
        "Artist": "T.I.",
        "songs": [
          "Dead and Gone",
          "Live Your Life",
          "New National Anthem",
          "No Mediocre"
        ],
        "count": 4
      },
      {
        "Artist": "Talib Kweli",
        "songs": [
          "Black Star",
          "Get By",
          "The Blast",
          "The Proud"
        ],
        "count": 4
      },
      {
        "Artist": "The D.O.C.",
        "songs": [
          ""
        ],
        "count": 0
      },
      {
        "Artist": "The Roots",
        "songs": [
          "Thought @ Work", 
          "What They Do", 
          "Don't Say Nuthin'"
        ],
        "count": 3
      },
      {
        "Artist": "Tone Loc",
        "songs": [
          "All Through the Night",
          "Cheeba Cheeba"
        ],
        "count": 2
      },
      {
        "Artist": "Travis Scott",
        "songs": [
          "90210",
          "Stop trying to be God"
        ],
        "count": 2
      },
      {
        "Artist": "Tribe Called Quest",
        "songs": [
          "We The People..."
        ],
        "count": 1
      },
      {
        "Artist": "Tupac Shakur",
        "songs": [
          "Brenda's Got a Baby",          
          "Changes",
          "Dear Mama",
          "Ghetto Gospel",
          "Holler If Ya Hear Me",
          "I Wonder If Heaven Got a Ghetto",                    
          "Keep Ya Head Up",
          "Pain",
          "Trapped",
          "White Man'z World"
        ],
        "count": 10
      },
      {
        "Artist": "Ty Dolla $ign",
        "songs": [
          "Free TC",
          "No Justice",
          "Stand For",
          "Miracle"
        ],
        "count": 4
      },
      {
        "Artist": "UGK",
        "songs": [
          "One Day", 
          "Int'l Players Anthem (I Choose You)", 
          "Pocket Full of Stones"
        ],
        "count": 3
      },
      {
        "Artist": "Ultramagnetic MCs",
        "songs": [
          "A Chorus Line",
          "Ego Trippin",
          "One Two One Two",
          "Poppa Large",
          "Raise It Up"
        ],
        "count": 5
      },
      {
        "Artist": "UTFO",
        "songs": [
          "Bad Luck Barry",
          "Lethal",
          "Nothing Cold Will Ever Last",
          "Skeezer",
          "Split Personality",
          "Split Personality II",
          "Take a Chance",
          "The Ride",
          "We're All in the Same Gang",
          "Ya Shoulda Listened"
        ],
        "count": 10
      },
      {
        "Artist": "Whistle",
        "songs": [
          ""
        ],
        "count": 0
      },
      {
        "Artist": "Whodini",
        "songs": [
          "Be Yourself",
          "Friends",
          "One Love"
        ],
        "count": 3
      },
      {
        "Artist": "World Famous Supreme Team",
        "songs": [
          "Hey DJ",
          "World Famous"
        ],
        "count": 4
      },
      {
        "Artist": "Wu-Tang Clan",
        "songs": [
          "A Better Tomorrow",
          "C.R.E.A.M.",
          "Can It Be That It Was All So Simple Then",
          "Protect Ya Neck",
          "Triumph"
        ],
        "count": 5
      },
      {
        "Artist": "XXXTencantion",
        "songs": [
          "Changes",
          "Hope",
          "Jocelyn Flores",
          "Sad"
        ],
        "count": 4
      },
      {
        "Artist": "Young Dolph",
        "songs": [
          "Death Row",
          "Rich Slave",
          "The Land"
        ],
        "count": 3
      }
    ]
  };
  
 
  by_decade_debut = {
    "era_artist": {
      "1980s": [
        "3rd Bass",
        "Beastie Boys",
        "Big Daddy Kane",
        "Biz Markie",
        "DJ Jazzy Jeff & The Fresh Prince",
        "De La Soul",
        "Digital Underground",
        "Doug E. Fresh",
        "EPMD",
        "Eric B & Rakim",
        "Fat Boys",
        "Fearless Four",
        "Grand Master Flash and the Furious 5",
        "Heavy D & the Boyz",
        "Ice Cube",
        "Ice-T",
        "Jungle Brothers",
        "Just-Ice",
        "KRS-One",
        "Kool Moe Dee",
        "Kurtis Blow",
        "LL Cool J",
        "MC Shan",
        "Naughty By Nature",
        "Nice & Smooth",
        "N.W.A.",
        "Roxanne Shante",
        "Run DMC",
        "Salt-N-Pepa",
        "Schoolly D",
        "Sir Mix-a-Lot",
        "Slick Rick",
        "Special Ed",
        "Stetsosonic",
        "Sugar Hill Gang",
        "Tone Loc",
        "UTFO",
        "Ultramagnetic MCs",
        "Whistle",
        "Whodini",
        "World Famous Supreme Team"
      ],
      "1990s": [
        "Big Pun",
        "Black Eyed Peas",
        "Bone Thugs-N-Harmony",
        "Busta Rhymes",
        "Canibus",
        "Common",
        "Cypress Hill",
        "DJ Quik",
        "DMX",
        "El-P",
        "Eminem",
        "Fabolous",
        "Fugees",
        "Gang Starr",
        "Jay-Z",
        "Kool Moe Dee",
        "Lauryn Hill",
        "Lil Wayne",
        "MF DOOM",
        "Mac Dre",
        "Main Source",
        "Missy Elliott",
        "Mobb Deep",
        "Mos Def",
        "Nas",
        "Notorious B.I.G.",
        "Onyx",
        "Outkast",
        "Redman",
        "Scarface",
        "The Lox",
        "The Roots",
        "Tupac Shakur",
        "Talib Kweli",
        "Wu-Tang Clan"
      ],
      "2000s": [
        "50 Cent",
        "Cardi B",
        "Drake",
        "J-Cole",
        "Kanye West",
        "Lil Boosie",
        "Lil Jon",
        "Nipsey Hussle",
        "Nicki Minaj",
        "T.I.",
        "Young Dolph"
      ],
      "2010s+": [
        "21 Savage",
        "Cardi B",
        "Chance the Rapper",
        "Childish Gambino",
        "Denzel Curry",
        "Don Trip",
        "Gunna",
        "Joyner Lucas",
        "Juice Wrld",
        "Kendrick Lamar",
        "Kenny Mason",
        "Killer Mike",
        "Kodak Black",
        "Moneybagg Yo",
        "Travis Scott",
        "Ty Dolla $ign",
        "XXXTencantion"
      ]
    }
    
  }


  era = {
    "artist_era": [
      {
        "Artist": "21 Savage",
        "era": "2010+"
      },
      {
        "Artist": "3rd Bass",
        "era": "1980s"
      },
      {
        "Artist": "50 Cent",
        "era": "2000s"
      },
      {
        "Artist": "Akinyele",
        "era": "1990s"
      },
      {
        "Artist": "Beastie Boys",
        "era": "1980s"
      },
      {
        "Artist": "Big Daddy Kane",
        "era": "1980s"
      },
      {
        "Artist": "Big Pun",
        "era": "1990s"
      },
      {
        "Artist": "Biz Markie",
        "era": "1980s"
      },
      {
        "Artist": "Black Eyed Peas",
        "era": "1990s"
      },
      {
        "Artist": "Bone Thugs-N-Harmony",
        "era": "1990s"
      },
      {
        "Artist": "Busta Rhymes",
        "era": "1990s"
      },
      {
        "Artist": "Canibus",
        "era": "1990s"
      },
      {
        "Artist": "Cardi B",
        "era": "2010+"
      },
      {
        "Artist": "Chance the Rapper",
        "era": "2010+"
      },
      {
        "Artist": "Childish Gambino",
        "era": "2010+"
      },
      {
        "Artist": "Common",
        "era": "1990s"
      },
      {
        "Artist": "Cypress Hill",
        "era": "1990s"
      },
      {
        "Artist": "DJ Jazzy Jeff & The Fresh Prince",
        "era": "1980s"
      },
      {
        "Artist": "DJ Quik",
        "era": "1990s"
      },
      {
        "Artist": "De La Soul",
        "era": "1980s"
      },
      {
        "Artist": "Denzel Curry",
        "era": "2010+"
      },
      {
        "Artist": "Digital Underground",
        "era": "1980s"
      },
      {
        "Artist": "DMX",
        "era": "1990s"
      },
      {
        "Artist": "Don Trip",
        "era": "2010+"
      },
      {
        "Artist": "Doug E. Fresh",
        "era": "1980s"
      },
      {
        "Artist": "Drake",
        "era": "2000s"
      },
      {
        "Artist": "EPMD",
        "era": "1980s"
      },
      {
        "Artist": "DMX",
        "era": "1990s"
      },
      {
        "Artist": "El-P",
        "era": "2000s"
      },
      {
        "Artist": "Eminem",
        "era": "1990s"
      },
      {
        "Artist": "Eric B & Rakim",
        "era": "1980s"
      },
      {
        "Artist": "Fabolous",
        "era": "2000s"
      },
      {
        "Artist": "Fat Boys",
        "era": "1980s"
      },
      {
        "Artist": "Fearless Four",
        "era": "1980s"
      },
      {
        "Artist": "Fugees",
        "era": "1990s"
      },
      {
        "Artist": "Future",
        "era": "2010+"
      },
      {
        "Artist": "Gang Starr",
        "era": "1990s"
      },
      {
        "Artist": "Grand Master Flash and the Furious 5",
        "era": "1980s"
      },
      {
        "Artist": "Gunna",
        "era": "2010+"
      },
      {
        "Artist": "Heavy D & the Boyz",
        "era": "1980s"
      },
      {
        "Artist": "Ice Cube",
        "era": "1980s"
      },
      {
        "Artist": "Ice-T",
        "era": "1980s"
      },
      {
        "Artist": "J-Cole",
        "era": "2000s"
      },
      {
        "Artist": "Jay-Z",
        "era": "1990s"
      },
      {
        "Artist": "Joyner Lucas",
        "era": "2010+"
      },
      {
        "Artist": "Juice Wrld",
        "era": "2010+"
      },
      {
        "Artist": "Jungle Brothers",
        "era": "1980s"
      },
      {
        "Artist": "Just-Ice",
        "era": "1980s"
      },
      {
        "Artist": "KRS-One",
        "era": "1980s"
      },
      {
        "Artist": "Kanye West",
        "era": "2000s"
      },
      {
        "Artist": "Kendrick Lamar",
        "era": "2010+"
      },
      {
        "Artist": "Kenny Mason",
        "era": "2010+"
      },
      {
        "Artist": "Kid 'n Play",
        "era": "1980s"
      },
      {
        "Artist": "Killer Mike",
        "era": "2000s"
      },
      {
        "Artist": "Kodak Black",
        "era": "2010+"
      },
      {
        "Artist": "Kool Moe Dee",
        "era": "1980s"
      },
      {
        "Artist": "Kurtis Blow",
        "era": "1980s"
      },
      {
        "Artist": "LL Cool J",
        "era": "1980s"
      },
      {
        "Artist": "Lauryn Hill",
        "era": "1990s"
      },
      {
        "Artist": "Lil Boosie",
        "era": "2000s"
      },
      {
        "Artist": "Lil Jon",
        "era": "2000s"
      },
      {
        "Artist": "Lil Uzi Vert",
        "era": "2010+"
      },
      {
        "Artist": "Lil Wayne",
        "era": "1990s"
      },
      {
        "Artist": "MC Shan",
        "era": "1980s"
      },
      {
        "Artist": "MF DOOM",
        "era": "1990s"
      },
      {
        "Artist": "Mac Dre",
        "era": "1990s"
      },
      {
        "Artist": "Main Source",
        "era": "1990s"
      },
      {
        "Artist": "Missy Elliott",
        "era": "1990s"
      },
      {
        "Artist": "Mobb Deep",
        "era": "1990s"
      },
      {
        "Artist": "Moneybagg Yo",
        "era": "2010+"
      },
      {
        "Artist": "Mos Def",
        "era": "1990s"
      },
      {
        "Artist": "N.W.A.",
        "era": "1980s"
      },
      {
        "Artist": "NBA Youngboy",
        "era": "2010+"
      },
      {
        "Artist": "Nas",
        "era": "1990s"
      },
      {
        "Artist": "Naughty By Nature",
        "era": "1990s"
      },
      {
        "Artist": "Nice & Smooth",
        "era": "1980s"
      },
      {
        "Artist": "Nicki Minaj",
        "era": "2000s"
      },
      {
        "Artist": "Nipsey Hussle",
        "era": "2000s"
      },
      {
        "Artist": "Notorious B.I.G.",
        "era": "1990s"
      },
      {
        "Artist": "Onyx",
        "era": "1990s"
      },
      {
        "Artist": "Outkast",
        "era": "1990s"
      },
      {
        "Artist": "Public Enemy",
        "era": "1980s"
      },
      {
        "Artist": "Redman",
        "era": "1990s"
      },
      {
        "Artist": "Rick Ross",
        "era": "2010+"
      },
      {
        "Artist": "Roxanne Shante",
        "era": "1980s"
      },
      {
        "Artist": "Run DMC",
        "era": "1980s"
      },
      {
        "Artist": "Salt-N-Pepa",
        "era": "1980s"
      },
      {
        "Artist": "Scarface",
        "era": "1980s"
      },
      {
        "Artist": "Schoolly D",
        "era": "1980s"
      },
      {
        "Artist": "Sir Mix-a-Lot",
        "era": "1980s"
      },
      {
        "Artist": "Slick Rick",
        "era": "1980s"
      },
      {
        "Artist": "Snoop Dogg",
        "era": "1990s"
      },
      {
        "Artist": "Special Ed",
        "era": "1980s"
      },
      {
        "Artist": "Stetsosonic",
        "era": "1980s"
      },
      {
        "Artist": "Sugar Hill Gang",
        "era": "1980s"
      },
      {
        "Artist": "T.I.",
        "era": "2000s"
      },
      {
        "Artist": "Talib Kweli",
        "era": "1990s"
      },
      {
        "Artist": "The D.O.C.",
        "era": "1980s"
      },
      {
        "Artist": "The Lox",
        "era": "1990s"
      },
      {
        "Artist": "The Roots",
        "era": "1990s"
      },
      {
        "Artist": "Tone Loc",
        "era": "1980s"
      },
      {
        "Artist": "Travis Scott",
        "era": "2010+"
      },
      {
        "Artist": "Tribe Called Quest",
        "era": "1990s"
      },
      {
        "Artist": "Tupac Shakur",
        "era": "1990s"
      },
      {
        "Artist": "Ty Dolla $ign",
        "era": "2010+"
      },
      {
        "Artist": "UGK",
        "era": "1980s"
      },
      {
        "Artist": "UTFO",
        "era": "1980s"
      },
      {
        "Artist": "Ultramagnetic MCs",
        "era": "1980s"
      },
      {
        "Artist": "Whistle",
        "era": "1980s"
      },
      {
        "Artist": "Whodini",
        "era": "1980s"
      },
      {
        "Artist": "World Famous Supreme Team",
        "era": "1980s"
      },
      {
        "Artist": "Wu-Tang Clan",
        "era": "1990s"
      },
      {
        "Artist": "XXXTencantion",
        "era": "2010+"
      },
      {
        "Artist": "Young Dolph",
        "era": "2010+"
      }
    ]
    
  }

  artist_regions = {
    "Artist_region": [
      { "Artist": "21 Savage", "region": "South" },
      { "Artist": "3rd Bass", "region": "North" },
      { "Artist": "50 Cent", "region": "North" },
      { "Artist": "Akinyele", "region": "East" },
      { "Artist": "Beastie Boys", "region": "North" },
      { "Artist": "Big Daddy Kane", "region": "East" },
      { "Artist": "Big Pun", "region": "East" },
      { "Artist": "Biz Markie", "region": "East" },
      { "Artist": "Black Eyed Peas", "region": "West" },
      { "Artist": "Bone Thugs-N-Harmony", "region": "West" },
      { "Artist": "Busta Rhymes", "region": "East" },
      { "Artist": "Canibus", "region": "East" },
      { "Artist": "Cardi B", "region": "East" },
      { "Artist": "Chance the Rapper", "region": "North" },
      { "Artist": "Childish Gambino", "region": "East" },
      { "Artist": "Common", "region": "North" },
      { "Artist": "Cypress Hill", "region": "West" },
      { "Artist": "DJ Jazzy Jeff & The Fresh Prince", "region": "East" },
      { "Artist": "DJ Quik", "region": "West" },
      { "Artist": "De La Soul", "region": "East" },
      { "Artist": "Denzel Curry", "region": "South" },
      { "Artist": "Digital Underground", "region": "West" },
      { "Artist": "DMX", "region": "East" },
      { "Artist": "Don Trip", "region": "South" },
      { "Artist": "Doug E. Fresh", "region": "East" },
      { "Artist": "Drake", "region": "North" },
      { "Artist": "EPMD", "region": "East" },
      { "Artist": "El-P", "region": "East" },
      { "Artist": "Eminem", "region": "North" },
      { "Artist": "Eric B & Rakim", "region": "East" },
      { "Artist": "Fabolous", "region": "East" },
      { "Artist": "Fat Boys", "region": "East" },
      { "Artist": "Fearless Four", "region": "East" },
      { "Artist": "Fugees", "region": "East" },
      { "Artist": "Future", "region": "South" },
      { "Artist": "Gang Starr", "region": "East" },
      { "Artist": "Grand Master Flash and the Furious 5", "region": "East" },
      { "Artist": "Gunna", "region": "South" },
      { "Artist": "Heavy D & the Boyz", "region": "East" },
      { "Artist": "Ice Cube", "region": "West" },
      { "Artist": "Ice-T", "region": "West" },
      { "Artist": "J-Cole", "region": "South" },
      { "Artist": "Jay-Z", "region": "East" },
      { "Artist": "Joyner Lucas", "region": "East" },
      { "Artist": "Juice Wrld", "region": "North" },
      { "Artist": "Jungle Brothers", "region": "East" },
      { "Artist": "Just-Ice", "region": "East" },
      { "Artist": "KRS One", "region": "East" },
      { "Artist": "Kanye West", "region": "North" },
      { "Artist": "Kendrick Lamar", "region": "West" },
      { "Artist": "Kenny Mason", "region": "South" },
      { "Artist": "Kid 'n Play", "region": "East" },
      { "Artist": "Killer Mike", "region": "South" },
      { "Artist": "Kodak Black", "region": "South" },
      { "Artist": "Kool Moe Dee", "region": "East" },
      { "Artist": "Kurtis Blow", "region": "East" },
      { "Artist": "LL Cool J", "region": "East" },
      { "Artist": "Lauryn Hill", "region": "East" },
      { "Artist": "Lil Boosie", "region": "South" },
      { "Artist": "Lil Jon", "region": "South" },
      { "Artist": "Lil Uzi Vert", "region": "East" },
      { "Artist": "Lil Wayne", "region": "South" },
      { "Artist": "MF DOOM", "region": "East" },
      { "Artist": "Mac Dre", "region": "West" },
      { "Artist": "Main Source", "region": "East" },
      { "Artist": "MC Shan", "region": "East" },
      { "Artist": "Missy Elliott", "region": "East" },
      { "Artist": "Mobb Deep", "region": "East" },
      { "Artist": "Moneybagg Yo", "region": "South" },
      { "Artist": "Mos Def", "region": "East" },
      { "Artist": "N.W.A.", "region": "West" },
      { "Artist": "NBA Youngboy", "region": "South" },
      { "Artist": "Nas", "region": "East" },
      { "Artist": "Naughty By Nature", "region": "East" },
      { "Artist": "Nice & Smooth", "region": "East" },
      { "Artist": "Nicki Minaj", "region": "East" },
      { "Artist": "Nipsey Hussle", "region": "West" },
      { "Artist": "Notorious B.I.G.", "region": "East" },
      { "Artist": "Onyx", "region": "East" },
      { "Artist": "Outkast", "region": "South" },
      { "Artist": "Public Enemy", "region": "East" },
      { "Artist": "Redman", "region": "East" },
      { "Artist": "Rick Ross", "region": "South" },
      { "Artist": "Roxanne Shante", "region": "East" },
      { "Artist": "Run DMC", "region": "East" },
      { "Artist": "Salt-N-Pepa", "region": "East" },
      { "Artist": "Scarface", "region": "South" },
      { "Artist": "Schoolly D", "region": "East" },
      { "Artist": "Sir Mix-a-Lot", "region": "West" },
      { "Artist": "Slick Rick", "region": "East" },
      { "Artist": "Snoop Dogg", "region": "West" },
      { "Artist": "Special Ed", "region": "East" },
      { "Artist": "Stetsosonic", "region": "East" },
      { "Artist": "Sugar Hill Gang", "region": "East" },
      { "Artist": "T.I.", "region": "South" },
      { "Artist": "Talib Kweli", "region": "East" },
      { "Artist": "The D.O.C.", "region": "South" },
      { "Artist": "The Lox", "region": "East" },
      { "Artist": "The Roots", "region": "East" },
      { "Artist": "Tone Loc", "region": "West" },
      { "Artist": "Travis Scott", "region": "South" },
      { "Artist": "Tribe Called Quest", "region": "East" },
      { "Artist": "Tupac Shakur", "region": "West" },
      { "Artist": "Ty Dolla $ign", "region": "West" },
      { "Artist": "UGK", "region": "South" },
      { "Artist": "UTFO", "region": "East" },
      { "Artist": "Ultramagnetic MCs", "region": "East" },
      { "Artist": "Whistle", "region": "East" },
      { "Artist": "Whodini", "region": "East" },
      { "Artist": "World Famous Supreme Team", "region": "East" },
      { "Artist": "Wu-Tang Clan", "region": "East" },
      { "Artist": "XXXTencantion", "region": "South" },
      { "Artist": "Young Dolph", "region": "South" }
    ]
  }
  

  catties = {
    "cat_hash" : [
        {
            "Category": "activism",
            "hashtags": [
                "#abusesofpower",
                "#Activism",
                "#AntiRacism",
                "#BlackLivesMatter",
                "#CivilRights",
                "#civilrightsmovement",
                "#CollectiveAction",
                "#Crime",
                "#CriminalJusticeReform",
                "#critiqueofsociety",
                "#currentevents",
                "#FreedomOfSpeech",
                "#GlobalIssues",
                "#GovernmentOverreach",
                "#HumanRights",
                "#Injustice",
                "#injustice",
                "#OppressiveStructures",
                "#OppressiveSystems",
                "#policebrutality",
                "#PoliticalActivism",
                "#PoliticalAwareness",
                "#politicalcorruption",
                "#PoliticalDecisions",
                "#politicalissues",
                "#politicalpower",
                "#politics",
                "#PositiveChange",
                "#racialauthenticity",
                "#RacialEquality",
                "#racialharmony",
                "#racialjustice",
                "#racialstereotypes",
                "#RaiseYourVoice",
                "#representation",
                "#sociopolitical",
                "#StopTheViolence",
                "#SystemicProblems",
                "#systemictargeting",
                "#War",
            ]
            },
            {
            "Category": "Art",
            "hashtags": [
                "#ArtisticCraft",
                "#ArtisticCraft",
                "#ArtisticExpression",
                "#ArtisticIntegrity",
                "#ArtisticProwess",
                "#ArtisticVision",
                "#CulturalCritique",
                "#culturalsignificance",
                "#DiverseInfluences",
                "#DynamicProduction",
                "#Entertaining",
                "#Experimental",
                "#expression",
                "#hiphopculture",
                "#HipHopLove",
                "#homage",
                "#Humorous",
                "#imagination",
                "#Jazzmusic",
                "#Knowledge",
                "#LyricalAbilities",
                "#MediaCritique",
                "#Metaphor",
                "#MusicIndustry",
                "#Originality",
                "#Playful",
                "#PopGoesTheWeasel",
                "#PowerfulDelivery",
                "#RapSkills",
                "#reflections",
                "#ReligiousReferences",
                "#rhymes",
                "#Satire",
                "#Soulful",
                "#Storytelling",
                "#Style",
                "#Tribute",
                "#Visionaries"
            ]
            },
            {
            "Category": "awareness",
            "hashtags": [
                "#Awareness",
                "#Colorism",
                "#Compassion",
                "#CorruptMusicIndustry",
                "#CriticalThinking",
                "#CulturalCritique",
                "#difficultenvironment",
                "#EthicalConcerns",
                "#HealthAwareness",
                "#HealthyChoices",
                "#Inclusion",
                "#IntlPlayersAnthem",
                "#knowledge",
                "#MediaInfluence",
                "#MediaManipulation",
                "#MoralLesson",
                "#OpenDialogue",
                "#PoliticalCritique",
                "#ProblemChild",
                "#questioning",
                "#racialauthenticity",
                "#RacialProfiling",
                "#risingbills",
                "#socialcommentary",
                "#SocialEngineering",
                "#SocietalIssues",
                "#StateOfTheWorld",
                "#Stereotypes",
                "#StickUpKids",
                "#Superficiality",
                "#surveillance",
                "#swapmeets",
                "#SystematicRacism",
                "#SystemicIssues",
                "#Truth",
                "#violenceinmedia",
                "#Warning"
            ]
            },
            {
            "Category": "community",
            "hashtags": [
                "#Accountability",
                "#Basketball",
                "#celebration",
                "#CelebrityWorship",
                "#CollectiveAction",
                "#Communities",
                "#Community",
                "#CommunityChallenges",
                "#CommunityEmpowerment",
                "#communityrelations",
                "#CommunityStrength",
                "#CommunityStruggles",
                "#CommunityWellness",
                "#GovernmentAssistance",
                "#hometownpride",
                "#InnerCityCommunities",
                "#lowincomecommunities",
                "#Loyalty",
                "#marginalizedcommunities",
                "#NightlifeScene",
                "#ParentalResponsibility",
                "#PartnerWisdom",
                "#PocketFullOfStones",
                "#positivechoices",
                "#PositiveEnvironment",
                "#Sacrifices",
                "#SingleMothers",
                "#TeachTheChildren",
                "#trust",
                "#Unity",
                "#urbanenvironments",
                "#Values"
            ]
            },
            {
            "Category": "crime",
            "hashtags": [
                "#snitches",
                    "#Abuse",
                    "#CautionaryTale",
                    "#ChildAbuse",
                    "#CorruptCops",
                    "#Crime",
                    "#criminalactivities",
                    "#CriminalJusticeSystem",
                    "#DeathPenalty",
                    "#Deception",
                    "#DomesticViolence",
                    "#DrugDealing",
                    "#DrugTrade",
                    "#DrugUse",
                    "#EludingPolice",
                    "#GangCulture",
                    "#GangViolence",
                    "#GunViolence",
                    "#Incarceration",
                    "#innercitylife",
                    "#Kleptomania",
                    "#lawenforcement",
                    "#MassIncarceration",
                    "#Pimping",
                    "#PrisonLife",
                    "#RacialProfiling",
                    "#Robbery",
                    "#StickUpKids",
                    "#StropCrime",
                    "#war"
            ]
            },
            {
            "Category": "Culture",
            "hashtags": [
                "#Vibe",
                    "#AfricanHeritage",
                    "#Africanpride",
                    "#AmericanSociety",
                    "#authenticity",
                    "#beautyoflife",
                    "#BlackCulture",
                    "#BlackEmpowerment",
                    "#blackexperience",
                    "#blackidentity",
                    "#BlackIdentity",
                    "#BlackPeople",
                    "#BlackPride",
                    "#blackpride",
                    "#BlackWomen",
                    "#Consumerism",
                    "#Culturalappreciation",
                    "#CulturalAppropriation",
                    "#CulturalAwareness",
                    "#CulturalCritique",
                    "#Culturalheritage",
                    "#CulturalIdentity",
                    "#culturalinspiration",
                    "#CulturalPride",
                    "#CulturalRoots",
                    "#CulturalRoots",
                    "#culturalsignificance",
                    "#CulturalUnderstanding",
                    "#Culture",
                    "#GenerationGap",
                    "#GhettoLife",
                    "#hiphopculture",
                    "#LatinInfluences",
                    "#MarijuanaCulture",
                    "#PanAfricanism",
                    "#PersonalBoundaries",
                    "#racialauthenticity",
                    "#RacialDynamics",
                    "#racialharmony",
                    "#racialstereotypes",
                    "#RacialStereotypes",
                    "#representation",
                    "#societalobstacles",
                    "#stereotypes",
                    "#Stereotyping",
                    "#Storytelling",
                    "#StreetCredibility",
                    "#UrbanLife"
            ]
            },
            {
                "Category": "dark forces",
                "hashtags": [
                    "#DarkForces", 
                    "#SelfReflection"
                ]
            },
            {
            "Category": "education",
            "hashtags": [
                "#Education",
                "#educationmatters",
                "#Empowerment",
                "#Knowledge",
                "#Literacy",
                "#SchoolDropOut",
                "#TeachTheChildren"
            ]
            },
            {
            "Category": "Emotions",
            "hashtags": [
                "#Anger",
                "#chaos",
                "#Composure",
                "#EmotionalConnection",
                "#emotionaldepth",
                "#Emotions",
                "#empathy",
                "#Envy",
                "#fear",
                "#FragilityofLife",
                "#Frustration",
                "#Gratitude",
                "#gratitude",
                "#Grief",
                "#heartbreak",
                "#Humility",
                "#InnerPeace",
                "#InnerStrength",
                "#Inspiration",
                "#Jealousy",
                "#Joy",
                "#Nostalgia",
                "#NoStaticatAll",
                "#Optimism",
                "#pain",
                "#Perseverance",
                "#RawEmotions",
                "#remorse",
                "#SelfLove",
                "#StayingPositive",
                "#Strength",
                "#Trauma",
                "#Vulnerability",
                "#Wisdom"
            ]
            },
            {
            "Category": "empowerment",
            "hashtags": [
                "#Acceptance",
                "#Accountability",
                "#Belief in oneself",
                "#bravery",
                "#Commitment",
                "#CommunityEmpowerment",
                "#confidence",
                "#Confident",
                "#ConsciousDecisionMaking",
                "#consciousness",
                "#criticalthinking",
                "#dedication",
                "#DesireForChange",
                "#Determination",
                "#Drive",
                "#EconomicEmpowerment",
                "#elevation",
                "#Empowerment",
                "#existence",
                "#FinancialFreedom",
                "#hardwork",
                "#individualautonomy",
                "#individuality",
                "#Influence",
                "#InnerStrength",
                "#Introspective",
                "#motivation",
                "#Opportunity",
                "#OvercomingObstacles",
                "#OvercomingStruggles",
                "#perseverance",
                "#PersonalChoices",
                "#personalreflections",
                "#PositiveIdentity",
                "#PositiveImpact",
                "#PositiveOutlook",
                "#redemption",
                "#resilience",
                "#Responsibility",
                "#responsibleparenting",
                "#Risk-taking",
                "#Sacrifice",
                "#Sacrifices",
                "#Self-exploration",
                "#SelfBelief",
                "#SelfConfidence",
                "#selfdetermination",
                "#SelfEmpowerment",
                "#selflove",
                "#SelfRespect",
                "#StickUpKids",
                "#Strength",
                "#unity",
                "#wisechoices",
                "#workinghard"
            ]
            },
            {
            "Category": "family",
            "hashtags": [
                "#AbsentFathers",
                "#childhood",
                "#elderly",
                "#family",
                "#FamilyDynamics",
                "#fatherhood",
                "#growing up",
                "#HandMeDowns",
                "#Motherhood",
                "#NoFathering",
                "#ParentalResponsibility",
                "#parenthood",
                "#PersonalResponsibility",
                "#responsibleparenting",
                "#Sacrifices",
                "#SingleMothers",
                "#wisechoices"
            ]
            },
            {
            "Category": "growth",
            "hashtags": [
                "#Adulthood",
                "#adversity",
                "#advice",
                "#Ambition",
                "#Belonging",
                "#betterfuture",
                "#challenges",
                "#Commitment",
                "#Consequences",
                "#Dreams",
                "#Enlightenment",
                "#experiences",
                "#growth",
                "#Guidance",
                "#hardships",
                "#IdentityStruggles",
                "#Introspection",
                "#Journey",
                "#knowledge",
                "#LifeOverWealthOrDeath",
                "#perseverance",
                "#PersonalExperiences",
                "#PersonalGrowth",
                "#PersonalJourney",
                "#personalreflections",
                "#PersonalStruggles",
                "#perspective",
                "#Questioning",
                "#reflection",
                "#reflections",
                "#Resilience",
                "#SelfBelief",
                "#selfeducation",
                "#SelfImprovement",
                "#SpiritualGrowth",
                "#triumphs"
            ]
            },
            {
            "Category": "hardship",
            "hashtags": [
                "#chaos",
                "#Corruption",
                "#difficultenvironment",
                "#DrugAddiction",
                "#economicchallenges",
                "#economicstruggles",
                "#Gritty",
                "#hardships",
                "#innerdemons",
                "#perseverance",
                "#Resilience",
                "#risingbills",
                "#Sacrifices",
                "#streetlife"
            ]
            },
            {
            "Category": "Health",
            "hashtags": [
                "#Alcoholism",
                "#BodyPositivity",
                "#Depression",
                "#HealthAwareness",
                "#HealthCare",
                "#HealthyChoices",
                "#MentalHealth",
                "#MentalHealthStruggles",
                "#MentalInstability",
                "#PrescriptionDrugs",
                "#psychologicalstruggles",
                "#Relaxation",
                "#SafeSex",
                "#Sex",
                "#sexualhealth",
                "#SexualHealth"
            ]
            },
            {
            "Category": "hope",
            "hashtags": [
                "#Appreciation",
                "#DesireForChange",
                "#Dreamers",
                "#Dreams",
                "#encouragement",
                "#faith",
                "#Gratitude",
                "#gratitude",
                "#Hope",
                "#Motivation",
                "#opportunities",
                "#PeacefulDay",
                "#PositiveDay",
                "#PositiveVibes",
                "#Redemption",
                "#StayingPositive",
                "#Strength",
                "#Utopia",
                "#Vulnerability"
            ]
            },
            {
            "Category": "identity",
            "hashtags": [
                "#AfricanHeritage",
                "#AmericanIdentity",
                "#authenticity",
                "#BlackBeauty",
                "#BlackCulture",
                "#BlackIdentity",
                "#BlackPeople",
                "#BlackPride",
                "#BlackWomen",
                "#BodyImage",
                "#Dualidentities",
                "#existence",
                "#GenderEquality",
                "#Heritage",
                "#Identity",
                "#identity",
                "#individuality",
                "#innerdemons",
                "#Interconnectedness",
                "#Race",
                "#race",
                "#racialauthenticity",
                "#RacialDynamics",
                "#racialharmony",
                "#RacialIdentity",
                "#selflove",
                "#uniqueness"
            ]
            },
            {
            "Category": "Issues",
            "hashtags": [
                "#Abuse",
                "#abusesofpower",
                "#Censorship",
                "#ChildAbuse",
                "#conspiracy",
                "#Corruption",
                "#CriminalJusticeReform",
                "#CriminalJusticeSystem",
                "#CriticalThinking",
                "#Criticism",
                "#Discrimination",
                "#DueProcess",
                "#EthicalConcerns",
                "#informationmanipulation",
                "#Injustice",
                "#injustices",
                "#PoliticalCritique",
                "#racialjustice",
                "#Racism",
                "#SocietalIssues",
                "#societalobstacles",
                "#SystemicIssues",
                "#SystemicProblems",
                "#systemictargeting"
            ]
            },
            {
            "Category": "life challenges",
            "hashtags": [
                "#Adulthood",
                "#adversity",
                "#challenges",
                "#chaos",
                "#Consequences",
                "#difficultenvironment",
                "#Dreams",
                "#encouragement",
                "#Journey",
                "#Life narrative",
                "#lifechallenges",
                "#lifechoices",
                "#perseverance",
                "#poverty",
                "#Prejudices",
                "#pressures",
                "#PrisonLife",
                "#reflection",
                "#Resilience",
                "#risingbills",
                "#SharedPain"
            ]
            },
            {
            "Category": "Life",
            "hashtags": [
                "#Adulthood",
                "#aging",
                "#beautyoflife",
                "#chaos",
                "#Dreams",
                "#FragilityofLife",
                "#FragilityofLife",
                "#LifeInPrison",
                "#LifeOverWealthOrDeath",
                "#Mortality",
                "#mortality",
                "#PeacefulDay",
                "#perseverance",
                "#Personal Journey",
                "#PhysicalAppearance",
                "#PositiveMessages",
                "#RawEmotions",
                "#reflection",
                "#reflections",
                "#Resilience",
                "#SelfDoubt",
                "#SelfReflection",
                "#selfworth",
                "#simplepleasures",
                "#Tribute",
                "#Utopia"
            ]
            },
            {
                "Category": "materialism",
                "hashtags": [
                    "#Materialism", 
                    "#priorities"
                ]
            },
            {
            "Category": "mental health",
            "hashtags": [
                "#Anxiety",
                "#Depression",
                "#emotionaldepth",
                "#empathy",
                "#fear",
                "#Grief",
                "#InnerPeace",
                "#InnerStrength",
                "#introspective",
                "#Mentaldisability",
                "#MentalHealthStruggles",
                "#MentalInstability",
                "#mortality",
                "#perseverance",
                "#psychologicalstruggles",
                "#RawEmotions",
                "#remorse",
                "#SelfConfidence",
                "#SelfLove",
                "#Trauma"
            ]
            },
            {
            "Category": "Music",
            "hashtags": [
                "#Anthem",
                "#catchymelodies",
                "#cautionarymessage",
                "#CloutChasing",
                "#Commercialization",
                "#CulturalCritique",
                "#Dance",
                "#Dancing",
                "#DerelictsofDialect",
                "#Experimental",
                "#hiphop",
                "#HipHopClassic",
                "#hiphopculture",
                "#HipHopEssence",
                "#hyphy",
                "#Jazzmusic",
                "#Luxury",
                "#LyricalAbilities",
                "#LyricalProwess",
                "#LyricalSkills",
                "#lyricism",
                "#lyrics",
                "#MusicalEvolution",
                "#MusicalFusion",
                "#MusicalProwess",
                "#MusicCulture",
                "#MusicIndustry",
                "#MusicIndustry",
                "#MusicInfluence",
                "#musicresistance",
                "#NoStaticatAll",
                "#PartyAnthem",
                "#PopGoesTheWeasel",
                "#PowerfulDelivery",
                "#RapSkills",
                "#reggaeinfluence",
                "#rhymes",
                "#Soulful"
            ]
            },
            {
            "Category": "oppression",
            "hashtags": [
                "#Abuse",
                "#abusesofpower",
                "#AntiRacism",
                "#oppression",
                "#oppression",
                "#PanAfricanism",
                "#RacialDynamics",
                "#RacialEquality",
                "#racialjustice",
                "#RacialProfiling",
                "#racialstereotypes",
                "#SystematicRacism",
                "#SystemicIssues",
                "#SystemicProblems",
                "#systemictargeting"
            ]
            },
            {
            "Category": "Personality",
            "hashtags": [
                "#Aggressive",
                "#bravery",
                "#Censorship",
                "#CompetitiveNature",
                "#Composure",
                "#Composure",
                "#Confident",
                "#Conformity",
                "#consciousness",
                "#Critique",
                "#difficultenvironment",
                "#Humor",
                "#individuality",
                "#innerdemons",
                "#intellect",
                "#Intellectual",
                "#Jealousy",
                "#Manipulation",
                "#PersonalBoundaries",
                "#Personality",
                "#PositiveAttitude ",
                "#PositiveAttitude",
                "#Risk-taking",
                "#SelfConfidence",
                "#selfconfidence",
                "#SelfRespect",
                "#VerbalDexterity"
            ]
            },
            {
            "Category": "police brutality",
            "hashtags": [
                "#abusesofpower",
                "#CorruptCops",
                "#EludingPolice",
                "#lawenforcement",
                "#LegalSystem",
                "#PoliceBrutality",
                "#policemisconduct",
                "#RacialProfiling",
                "#StopTheViolence"
            ]
            },
            {
            "Category": "relationships",
            "hashtags": [
                "#Adultery",
                "#Communication",
                "#Friendship",
                "#PartnerWisdom",
                "#Relationships",
                "#ToxicRelationship",
                "#trust",
                "#trust",
                "#younglove"
            ]
            },
            {
            "Category": "Self",
            "hashtags": [
                "#Belief in oneself",
                "#Belief in oneself",
                "#Commitment",
                "#confidence",
                "#Conformity",
                "#Courage",
                "#existence",
                "#InnerConfidence",
                "#innerdemons",
                "#InnerStrength",
                "#InnerStruggles",
                "#introspective",
                "#perseverance",
                "#PersonalBoundaries",
                "#PersonalChoices",
                "#reflection",
                "#Reflective",
                "#Self-exploration",
                "#SelfAcceptance",
                "#SelfAwareness",
                "#SelfBelief",
                "#SelfBelief",
                "#SelfConfidence",
                "#SelfDefense",
                "#selfdetermination",
                "#SelfDiscovery",
                "#SelfEmpowerment",
                "#selfidentity",
                "#SelfImprovement",
                "#SelfLove",
                "#SelfPride",
                "#SelfReflection",
                "#SelfRespect",
                "#StayingPositive"
            ]
            },
            {
            "Category": "social issues",
            "hashtags": [
                "#Abuse",
                "#abusesofpower",
                "#Acceptance",
                "#Action",
                "#activism",
                "#Addiction",
                "#Advocacy",
                "#Awareness",
                "#Censorship",
                "#challengingsocietynorms",
                "#challengingthenarrative",
                "#Chicago",
                "#civilrightsmovement",
                "#Colorism",
                "#Communities",
                "#Community",
                "#CommunityChallenges",
                "#CommunityStruggles",
                "#Conformity",
                "#Corruption",
                "#CorruptMusicIndustry",
                "#CriminalJusticeReform",
                "#criticalthinking",
                "#critiqueofsociety",
                "#CulturalCritique",
                "#Culture",
                "#currentevents",
                "#Discrimination",
                "#economicchallenges",
                "#EconomicEmpowerment",
                "#economicstruggles",
                "#EmotionalImpact",
                "#Emotions",
                "#Empowerment",
                "#EthicalConcerns",
                "#GovernmentAssistance",
                "#HumanRights",
                "#Inclusion",
                "#LegalSystem",
                "#MediaManipulation",
                "#PoliticalCritique",
                "#poverty",
                "#Prejudices",
                "#pressures",
                "#ProblemChild",
                "#racialauthenticity",
                "#RacialEquality",
                "#racialharmony",
                "#racialharmony",
                "#RacialProfiling",
                "#racialstereotypes",
                "#RacialStereotypes",
                "#representation",
                "#SharedPain",
                "#SocialChallenges",
                "#socialchange",
                "#SocialCommentary",
                "#SocialConsciousness",
                "#SocialCritique",
                "#SocialEngineering",
                "#SocialInequality",
                "#socialinjustice",
                "#SocialInjustices",
                "#SocialIssues",
                "#SocialJustice",
                "#SocialMedia",
                "#SocietalIssues",
                "#societalobstacles",
                "#SocietalPressures",
                "#societypressures",
                "#SocioEconomicChallenges",
                "#sociopolitical",
                "#solidarity",
                "#StopTheViolence",
                "#StreetCredibility",
                "#SystematicRacism",
                "#SystemicInequalities",
                "#SystemicInjustice",
                "#systemicissues",
                "#SystemicOppression",
                "#SystemicProblems",
                "#SystemicRacism",
                "#systemictargeting",
                "#taboos",
                "#UrbanChallenges",
                "#UrbanCommunities",
                "#UrbanStruggles",
                "#UrgencyForChange",
                "#violenceinmedia",
                "#ViolencePrevention",
                "#WealthInequality",
                "#YouthEmpowerment",
                "#YouthStruggles"
            ]
            },
            {
            "Category": "Society",
            "hashtags": [
                "#abusesofpower",
                "#activism",
                "#AmericanSociety",
                "#Awareness",
                "#challengingthenarrative",
                "#Communities",
                "#Community",
                "#CommunityChallenges",
                "#CommunityEmpowerment",
                "#communityrelations",
                "#CommunityStrength",
                "#CommunityStruggles",
                "#CommunityWellness",
                "#Conformity",
                "#Corruption",
                "#Critique",
                "#CulturalAwareness",
                "#Culturalheritage",
                "#CulturalIdentity",
                "#CulturalPride",
                "#CulturalRoots",
                "#CulturalUnderstanding",
                "#Culture",
                "#Discrimination",
                "#economicchallenges",
                "#EconomicEmpowerment",
                "#economicstruggles",
                "#EmotionalImpact",
                "#Emotions",
                "#Empowerment",
                "#EqualOpportunity",
                "#EthicalConcerns",
                "#LegalSystem",
                "#NoMasterPlanNoMasterRace",
                "#PoliticalCritique",
                "#poverty",
                "#PowerStructure",
                "#Prejudices",
                "#pressures",
                "#racialauthenticity",
                "#RacialEquality",
                "#racialharmony",
                "#SharedPain",
                "#SocialChallenges",
                "#socialchange",
                "#SocialConsciousness",
                "#SocialCritique",
                "#SocialInequality",
                "#socialinjustice",
                "#SocialInjustices",
                "#SocialIssues",
                "#SocialJustice",
                "#SocialMedia",
                "#SocietalIssues",
                "#SocietalPressures",
                "#societypressures",
                "#SocioEconomicChallenges",
                "#solidarity",
                "#SystematicRacism",
                "#SystemicInequalities",
                "#SystemicInjustice",
                "#SystemicIssues",
                "#systemicoppression",
                "#SystemicOppression",
                "#SystemicProblems",
                "#SystemicRacism",
                "#systemictargeting",
                "#taboos",
                "#UrbanChallenges",
                "#UrbanCommunities",
                "#UrbanStruggles",
                "#UrgencyForChange",
                "#ViolencePrevention",
                "#WealthInequality",
                "#YouthEmpowerment",
                "#YouthStruggles"
            ]
        }
    ]
  }


window.addEventListener('DOMContentLoaded', function () {

  //processPortfolio("Run DMC");


  const input = document.querySelector(".cardibinput[data-id='artist1']");


  // Inside script.js
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('search').addEventListener('input', function(e) {
      var searchTerm = e.target.value.toLowerCase();
      var blogCards = document.querySelectorAll('.blog-card');

      blogCards.forEach(function(card) {
          var title = card.querySelector('.title').innerText.toLowerCase();

          if (title.includes(searchTerm)) {
              card.style.display = 'block';
          } else {
              card.style.display = 'none';
          }
      });
  });
});



  
  



  
  const artists = data.sam_cooks.length; // Get the number of artists
  const bartists = cons_sams_artista.sam_artists.length; // Get the number of
  const artistsdb = document.getElementById("artistsdatabased");
  artistsdb.textContent = bartists; // Set the number of artists as the content of the h1 element

  const noofsongs = song_data.sam_songs.length;

  const songscatted = document.getElementById("songscatalogued");
  songscatted.textContent = noofsongs;

  let totalCount = 0;

  // Iterate over each song in the song_data object
  song_data.sam_songs.forEach(song => {
    totalCount += song.Keywords.length; // Add the length of keywords array to totalCount
  });

  const generatedKeywords = document.getElementById("generatedkeywords");
  generatedKeywords.textContent = totalCount; // Set the total count as the text content of the h1 element

  let eastartists = 0;
  let westartists = 0;
  let northartists = 0;
  let southartists = 0;

  artist_regions.Artist_region.forEach(artist => {
    if (artist.region === "East") {
      eastartists++;
    } else if (artist.region === "West") {
      westartists++;
    } else if (artist.region === "North") {
      northartists++;
    } else if (artist.region === "South") {
      southartists++;
    }
  });

  const ewns = document.getElementById("ewns");
  ewns.innerHTML = "e w n s"; // Set the column headers

  const eastwestnorthsouth = document.getElementById("eastwestnorthsouth");
  eastwestnorthsouth.innerHTML = `
    <table>
      <tr>
        <td><span style="padding-right: 25px">${eastartists}</span></td>
        <td><span style="padding-right: 25px">${westartists}</span></td>
        <td><span style="padding-right: 20px">${northartists}</span></td>
        <td>${southartists}</td>
      </tr>
    </table>
    <br>Artists by region
  `;


  // CREATES keys_keys JSON object: {"Artist": "name of artist", "keycounts": {#}}
  function createJsonObjects() {
    var who_got_the_keys = {
      "keys_keys": []
    };
  
    // data.sam_cooks
    for (var i = 0; i < cons_sams_artista.sam_artists.length; i++) {
      // var artist = data.sam_cooks[i].Artist;
      var artist = cons_sams_artista.sam_artists[i].Artist; // changed 20230721
      var count = 0;
  
      for (var j = 0; j < song_data.sam_songs.length; j++) {
        if (song_data.sam_songs[j].artist === artist) {
          count += song_data.sam_songs[j].Keywords.length;
        }
      }
  
      who_got_the_keys.keys_keys.push({
        "Artist": artist,
        "keycounts": count
      });
    }
  
  
    console.log("WHO GOT THE MF'N KEYS??");
    console.log(who_got_the_keys);
  
    return who_got_the_keys;
  }
  
  var result = createJsonObjects();


  
  
  const artistSelect = document.getElementById('artist');
  
  // Populate the dropdown list with artists
  // data.sam_cooks.forEach(artist => {
  cons_sams_artista.sam_artists.forEach(artist => {
    //console.log(artist.Artist);
    const option = document.createElement('option');
    option.value = artist.Artist;
    option.text = artist.Artist;
    artistSelect.appendChild(option);
  });



  // WHERE CHART GENERATION WAS


  });
  
  //what the fuck is this?
  // end of DOMContentLoaded


  function createJsonObjects() {
    return {
      "keys_keys": cons_sams_artista.sam_artists.map(cook => {
      //"keys_keys": data.sam_cooks.map(cook => {
        const count = song_data.sam_songs
          .filter(song => song.artist === cook.Artist)
          .reduce((sum, song) => sum + song.Keywords.length, 0);
  
        return {
          "Artist": cook.Artist,
          "keycounts": count
        };
      })
    };
  }
  


// Helper function to find the biography of an artist
function findBiography(artistName) {
  return bio_data.biogs.find(artist => artist.Artist === artistName);
}

function findBiographyByArtist(artistName) {
  return cons_sams_artista.sam_artists.find(artist => artist.Artist === artistName);
}



// Populate the biography section
function populateBiography(artistName) {
  const biography = findBiography(artistName);
  const biographyByArtist = findBiographyByArtist(artistName);
  const biodataElement = document.getElementById('biodata');
  biodataElement.innerHTML = '';

  // changing biography to BiographyByArtist
  if (biographyByArtist) {
    const tableRow = document.createElement('tr');
    const tableHeaderb = document.createElement('th');
    tableHeaderb.style.borderRight = "1px solid black";
    tableHeaderb.style.paddingRight = "8px";
    const tableData = document.createElement('td');
    tableData.style.paddingRight = "10px";
    tableData.style.paddingLeft = "10px";
    tableHeaderb.textContent = artistName;
    tableData.innerHTML = biographyByArtist.bio;
    tableRow.classList.add('trbio');
    tableHeaderb.classList.add('thbio');
    tableData.classList.add('tdbio');
    tableRow.appendChild(tableHeaderb);
    tableRow.appendChild(tableData);
    biodataElement.appendChild(tableRow);
  }

}
// end of populate biography 





// select an artist
function displaySongs() {


  const artistSelect = document.getElementById('artist');
  const selectedArtist = artistSelect.value;

  const songList = document.getElementById('songList');
  const biodataElement = document.getElementById('biodata');
  biodataElement.innerHTML = '';
  songList.innerHTML = '';

  const lyricsULData = document.getElementById('lyricsSongList');
  lyricsULData.innerHTML = ''; 
  document.getElementById('search').value = '';

  var selectedArtistElement = document.getElementById("selectedArtist");

  // Set the text content of the element to the selected artist
  selectedArtistElement.textContent = selectedArtist;
  

  // Find the selected artist in the JSON data
  //const artist = data.sam_cooks.find(a => a.Artist === selectedArtist);
  const artist = cons_sams_artista.sam_artists.find(a => a.Artist === selectedArtist); // changed 20230721



  

  if (artist && artist.songs) {

    artist.songs.forEach(song => {
      const li = document.createElement('li');
      li.textContent = song;
      songList.appendChild(li);
      // setRandomBackgroundImage();
  
    });


    var bsongList = document.getElementById("songList");
    var liTags = bsongList.getElementsByTagName("li");
  
    var resultElement = document.getElementById("result");
  
    if (liTags.length === 1 && liTags[0].textContent.trim() === "") {
      // Only one li tag and it's blank
      liTags[0].textContent = "This artist does not have any Sam Cooks yet.";
      // we should also destroy the song table. maybe no need to destroy it here
      const destTable = document.getElementById('songtable');
      destTable.innerHTML = '';
    } else {
      // resultElement.textContent = "This artist has " + artist.count + " Sam Cooks.";
    }
  
    if (liTags.length > 0) {
      createSongList(artist);
    } else {
      resultElement.textContent = "This artist does not have any Sam Cooks yet.";
    }


    const artistName = selectedArtist;
    //const sArtist = data.sam_cooks.find(a => a.Artist === artistName);
    // var eightemcees = {"artist": sArtist, (sArtist.length > 0) ? sArtist.length : 0;};
    const sArtist = cons_sams_artista.sam_artists.find(a => a.Artist === artistName);  // added 20230721



    // update MCone
    let k = keywordCountByArtist(song_data, artistName)
    eight_dict[1] = {"artist": sArtist.Artist,"songs":sArtist.count,"keywords":k}
    
    //changeMCOne(sArtist.Artist);
    changeMCOne(sArtist);

    

    // buildCooksChart(sArtist.Artist);

    /*
          INSTRUCTIONS:
          You can create an empty JavaScript data object with the keys "Artist" 
          and "count" using an object literal notation. Here's an example:
          (a)
          (it needed to be turned into an array). 
          (b)
          I add the selected artist to the 0 position of the array 
          (c)
          get 7 other random artists from data.sam_cooks none of which can be the 
          selected artists. To get those seven artists it reads random entries of 
          data.sam_cooks. Get the "Artist" value and the count value and append 
          to eightemcees.
          (d)
          got an error because I di not have getRandomElements in so I put it
          above (a).
          (c3) 
          Here is where we get the random list of 7 artists: randomArtists.
          (e)
          I merged the two arrays instead of doing a loop push.
          (f)
          Test a simple bar chart. I need to attach a d3js bar chart to the 
          div with id chartcooks.
          The test worked now (f) is converting the json object into csv format.
          (g)
          
         





    */
   //testChart(selectedArtist);

    // (d) 
    function getRandomElements(array, count) {
      var shuffled = array.slice(); // Create a copy of the array
      var selected = [];
    
      var i = array.length;
      var min = i - count;
      var temp;
      var index;
    
      while (i-- > min) {
        index = Math.floor((i + 1) * Math.random()); // Random index from 0 to i
        temp = shuffled[index]; // Swap elements
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
        selected.push(temp);
      }
    
      return selected;
    }


    // (a)
    const eightemcees = [{
      Artist: "",
      count: 0
    }];

  // (b)
  eightemcees[0].Artist = artistName;
  
  eightemcees[0].count = sArtist.count;
  eightemcees[0].songs = sArtist.songs;
  console.log("FIRST 8EMCEES: ==> ");
  console.log(eightemcees);


  //buildCharts(eight_dict);




  //buildCharts(eight_dict);


  // Call the function with the desired artist name
  createSongList(artistName);

  // (c)
  // var selectedArtist = "John Doe"; // Replace with the name of the selected artist
  // var eightemcees = [];

  // Filter out the selected artist from the data
  // var filteredData = data.sam_cooks.filter(function(artist) {
  //   return artist.Artist !== artistName;
  // });

  var filteredData = cons_sams_artista.sam_artists.filter(function(artist) {
    return artist.Artist !== artistName;
  });  // switched 20230721

// (c2)
// Get a random sample of seven artists
var randomArtists = getRandomElements(filteredData, 7);
console.log("RANDOM ARTISTS: ===================> ");
console.log(randomArtists);


// (e)
const mergeResults = [...eightemcees, ...randomArtists];
console.log("MERRGE RESULTS: ===================> ");
console.log(mergeResults);




for (let i = 0; i < mergeResults.length; i++) {
  let artistName = mergeResults[i].Artist;

    // Get the input element with id "artist" concatenated with (i+1)
    let inputElement = document.getElementById("artist" + (i + 1));
    // Update the value of the input field with the artist's name
    if (inputElement) {
        inputElement.value = artistName;
    }
  // Increment i by 1 since you want numbers from 1 to 8 instead of 0 to 7
  changeMC2(artistName, i + 1);
}



// (f)
// Extract headers from the first object
const headers = Object.keys(mergeResults[0]);

// Convert JSON to CSV string
// let csv = headers.join(",") + "\n";
// mergeResults.forEach((item) => {
//   const row = headers.map((header) => {
//       const value = Array.isArray(item[header]) ? `"${item[header].join(",")}"` : item[header];
//       return value !== undefined ? value : "";
//   });
//   csv += row.join(",") + "\n";
// });



// Convert JSON to CSV string
let csvHeaders = ["Artist","count"]
let csva = csvHeaders.join(",") + "\n";
mergeResults.forEach((item) => {
    const row = [
    item.Artist,
    item.count
    ]
    csva += row.join(",") + "\n";
});

console.log("csv =======================> ");
console.log(csva);


// watch for closing doors
// Convert the object to a CSV string
// const bcsvHeaders = "artist,songs,keywords,keysandsongs\n";
// const csvRows = Object.values(mergeResults)
//   .map(({ artist, songs, keywords, keysandsongs }) => `${artist},${songs},${keywords},${keysandsongs}`)
//   .join("\n");

// const csv_eightmcs = bcsvHeaders + csvRows;
// console.log(csv_eightmcs);
// Convert JSON to CSV string





// let contain_eight = [];
// contain_eight.push(eight_dict);
// let bcsvHeaders = ["Artist","songs","keywords","keysandsongs\n"];
// let bcsva = bcsvHeaders.join(",") + "\n";
// contain_eight[0].forEach((item) => {
//     const row = [
//     item.Artist,
//     item.songs,
//     item.keywords,
//     item.keysandsongs
//     ]
//     bcsva += row.join(",") + "\n";
// });

// console.log("bcsv =======================> ");
// console.log(bcsva);





// Convert the object to a CSV string
const ccsvHeaders = "artist,songs,keywords,keysandsongs\n";
const ccsvRows = Object.values(eight_dict)
.map(({ artist, songs, keywords, keysandsongs }) => `${artist},${songs},${keywords}`)
.join("\n");

const ccsvData = ccsvHeaders + ccsvRows;

console.log(ccsvData); // The CSV data is stored in the csvData variable


buildCharts(ccsvData);









// THE OUTPUT HAS A HEADER of Artist, count
// with 8 data rows 
// Create a d3js colorful and zoomable bar chart using the csv data.
// the artist's names should be in a way that they do not overlap possibly putting the names at 45 degree angle.
// the d3js chart should go inside <div id="chartcooks">


// var csv = csva; 
// var data = d3.csvParse(csv); 

// var margin = {
// 		top: 20, right: 20, bottom: 100, left: 100
// 		}, 
// 		width = 800 - margin.left - margin.right, height = 600 - margin.top - margin.bottom; // Set the ranges 

// var x = d3.scaleBand() 
// 	.rangeRound([0, width]) 
// 	.padding(0.1); 
	
// var y = d3.scaleLinear() 
// 	.rangeRound([height, 0]); // Define the axis 

// var xAxis = d3.axisBottom(x) 
// 	.tickSize(0); 

// var yAxis = d3.axisLeft(y); // Add the [SVG canvas](poe://www.poe.com/_api/key_phrase?phrase=SVG%20canvas&prompt=Tell%20me%20more%20about%20SVG%20canvas.) 

// var svg = d3.select("#chartcooks") 
// 	.append("svg") 
// 	.attr("width", width + margin.left + margin.right) 
// 	.attr("height", height + margin.top + margin.bottom) 
// 	.append("g") 
// 	.attr("transform", "translate(" + margin.left + "," + margin.top + ")"); // Scale the range of the data 
// 	x.domain(data.map(function(d) { return d.Artist; })); 
// 	y.domain([0, d3.max(data, function(d) { return +d.count; })]); // Add [axis](poe://www.poe.com/_api/key_phrase?phrase=axis&prompt=Tell%20me%20more%20about%20axis.) 
	
// svg.append("g") 
// 	.attr("class", "x axis") 
// 	.attr("transform", "translate(0," + height + ")") 
// 	.call(xAxis) 
// 	.selectAll("text") 
// 	.style("text-anchor", "end") 
// 	.attr("dx", "-.8em") 
// 	.attr("dy", "-.55em") 
// 	.attr("transform", "rotate(-45)" ); 
	
// svg.append("g") 
// 	.attr("class", "y axis") 
// 	.call(yAxis) .append("text") 
// 	.attr("transform", "rotate(-90)") 
// 	.attr("y", 6) .attr("dy", ".71em") 
// 	.style("text-anchor", "end") 
// 	.text("Count"); // Add bar chart 
	
// svg.selectAll("bar") 
// 	.data(data) 
// 	.enter().append("rect") 
// 	.attr("x", function(d) { return x(d.Artist); }) 
// 	.attr("y", function(d) { return y(d.count); }) 
// 	.attr("width", 30 ) 
// 	.attr("height", function(d) { return height - y(d.count); }); 


// (g)








// const chartDiv = document.getElementById('chartcooks');
// chartDiv.innerHTML = '';

// const counts = mergeResults.map(artist => artist.count);


// const svg = d3.select(chartDiv)
//   .append('svg')
//   .attr('width', 400)
//   .attr('height', 200);


// const xScale = d3.scaleBand()
//   .domain(mergeResults.map(artist => artist.Artist))
//   .range([0, 400])
//   .padding(0.1);

// const yScale = d3.scaleLinear()
//   .domain([0, d3.max(counts)])
//   .range([200, 0]);


// svg.selectAll('rect')
//   .data(mergeResults)
//   .enter()
//   .append('rect')
//   .attr('x', artist => xScale(artist.Artist))
//   .attr('y', artist => yScale(artist.count))
//   .attr('width', xScale.bandwidth())
//   .attr('height', artist => 200 - yScale(artist.count))
//   .attr('fill', 'steelblue');

// const xAxis = d3.axisBottom(xScale);
// const yAxis = d3.axisLeft(yScale);

// svg.append('g')
//   .attr('transform', 'translate(0, 200)')
//   .call(xAxis);

// svg.append('g')
//   .call(yAxis);
  




    

























    

    if (sArtist){
      const songCount = sArtist.count;
      console.log(`The count of songs by ${artistName} is ${songCount}`);
    } else {
      console.log(`Artist ${artistName} not found.`);
    }

    populateBiography(selectedArtist);






    

    



    // NEEDS GET RANDOM ARTIST
    function getRandomArtists(artists, count) {
      const randomArtists = [];
      const selectedIndices = new Set();
    
      while (selectedIndices.size < count) {
        const randomIndex = Math.floor(Math.random() * artists.length);
    
        if (!selectedIndices.has(randomIndex)) {
          selectedIndices.add(randomIndex);
          randomArtists.push(artists[randomIndex]);
        }
      }
    
      return randomArtists;
    }






  //   // CHART GENERATION NOW
  //     // first delete old charts
  

  // // Call the createJsonObjects function and store the result
  var who_got_the_keys = createJsonObjects();

  // // Get the data for chartcooks
  // const chartcooksData = [data.sam_cooks[0], ...getRandomArtists(data.sam_cooks, 7)];    

  // // Generate chartcooks bar chart
  // createBarChart(chartcooksData, "chartcooks");

  // // Generate chartkeys bar chart
  // createBarChart(who_got_the_keys.keys_keys, "chartkeys");

  // // Generate chartcooksandkeys stacked bar chart
  // createStackedBarChart(chartcooksData, who_got_the_keys.keys_keys, "chartcooksandkeys");


  
  
    console.log("fuck you, pay me");

    // END OF CHART GENERATION


// THIS IS WHERE SONG_DATA WAS


// destroy table before building it
const destTable = document.getElementById('songtable');
destTable.innerHTML = '';


if (liTags.length === 1 && liTags[0].textContent.trim() === "This artist does not have any Sam Cooks yet.") {
  // do nothing table is already destroyed
} else {

    const main = document.getElementById("songtable");

    // Create the table element
    const table = document.createElement('table');
    table.className = "sttable";
    table.className = "table table-bordered sttable";

    // Create the header row
    const headerRow = document.createElement('tr');
    headerRow.style.textAlign = "center";
    headerRow.className = "sttr";

    // Add header cells
    const headers = ["Song", "Reason of Selection", "Socially Conscious", "Culturally Significant", "Keywords", "Overall Theme"];
    headers.forEach(headerText => {
      const headerCell = document.createElement('th');
      headerCell.className = "stth";
      headerCell.textContent = headerText;
      headerRow.appendChild(headerCell);
    });

    // Append the header row to the table
    const tableHeader = document.createElement('thead');
    
    tableHeader.appendChild(headerRow);
    table.appendChild(tableHeader);

    // Append the table to the main element
    main.appendChild(table);

    // Populate the table with song data
    song_data.sam_songs.forEach(song => {
      if (song.artist === artistName) {
      const row = table.insertRow();
      row.className = "sttr";

      const relevantValues = [
        song.Song,
        song["Reason of Selection"],
        song["Socially Conscious"],
        song["Culturally Significant"],
        song.Keywords.join(", "),
        song["Overall Theme"]
      ]

      // relevantValues.forEach(value => {
      //   const cell = row.insertCell();
      //   cell.className = "sttd";
      //   cell.textContent = value;
      // });

      relevantValues.forEach((value, index) => {
        const cell = row.insertCell();
        cell.className = "sttd";
        cell.textContent = value;
        if (index === 2 || index === 3) {
          cell.style.textAlign = "center"; // Center the content in the 3rd and 4th columns
        }
      });

}
});


  } // end of else
}  

} // end of displaySongs

// end of displaySongs







// search songs
function filterSongs() {
  const searchInput = document.getElementById('search');
  const searchTerm = searchInput.value.toLowerCase();
  const artistSelect = document.getElementById('artist');
  const songList = document.getElementById('songList');
  const selectedArtist = document.getElementById('selectedArtist');
  const biodataElement = document.getElementById('biodata');

  // clear the select artist input
  document.getElementById("artist").value = "";

  // destroy table before building it
  const destTable = document.getElementById('songtable');
  destTable.innerHTML = '';

  // remove links in lyrics card section
  const lyricsCard = document.getElementById('lyricsSongList');
  lyricsCard.innerHTML = '';


  // Reset the artist input to the default option
  artistSelect.selectedIndex = 0;

  // Clear the song list
  songList.innerHTML = '';
  selectedArtist.innerHTML = '';

  // Clear the biodata content
  biodataElement.innerHTML = '';

  // Split the search term into individual words
  const searchWords = searchTerm.split(' ');

  // to store the artist and song
  const lyricallinks = [];

  // Filter and display the songs based on the search term
  // data.sam_cooks.forEach(artist => {
  cons_sams_artista.sam_artists.forEach(artist => {
    artist.songs.forEach(song => {
      const songName = song.toLowerCase();
      const match = searchWords.some(word => songName.includes(word));
      if (match) {
        const songObj = {
          song: songName,
          artist: artist.Artist
        };
        lyricallinks.push(songObj); //
        const li = document.createElement('li');
        li.textContent = `${song} -- ${artist.Artist}`;
        // lyricallinks.push({"song": songName, "artist": artist.Artist});
        songList.appendChild(li);
      }
    });
  });

  // (h)


  /*
        in position (h) above:

        loop through lyricallinks and get find the "Linked Lyrics" value in 
        song_data json object. I need it to build a list of <a> links to ul 
        with id lyricsSongList. The links need to have target="_blank". The 
        a link's text needs to be the song name.
  */

  lyricallinks.forEach(songObj => {
    const matchingSong = song_data.sam_songs.find(
      song => song.Song.toLowerCase() === songObj.song && song.artist === songObj.artist
    );
  
    if (matchingSong && matchingSong['Linked Lyrics']) {
      const link = document.createElement('a');
      link.href = matchingSong['Linked Lyrics'];
      link.target = '_blank';
      link.textContent = songObj.song;
  
      const li = document.createElement('li');
      li.appendChild(link);
      lyricsSongList.appendChild(li);
    }
  });
        


  // now I want to populate the lyrics card with lyrics links



}
// end of search songs filter songs






function filterKeywords() {
  const keywordInput = document.getElementById('keysearch');
  const keyword = keywordInput.value.toLowerCase();
  const kwssongList = document.getElementById('kwssongList');
  const kwsmainSongList = document.getElementById('kwsmainSongList');
  const kwssongTable = document.getElementById('kwssongtable');

  // Clear the song list and song table
  kwssongList.innerHTML = '';
  kwssongTable.innerHTML = '';





  kwsmainSongList.className = "table table-bordered";
  kwssongTable.className = "table table-bordered";

  // Sort the songs alphabetically by the song title
  const sortedSongs = song_data.sam_songs.sort((a, b) => a.Song.localeCompare(b.Song));

  // Filter the songs based on the keyword search
  sortedSongs.forEach(song => {
    if (song.Keywords && Array.isArray(song.Keywords)) {
      const keywords = song.Keywords.map(keyword => keyword.toLowerCase());
      if (keywords.includes(keyword)) {
        // Rest of your code for creating list items and populating the table
        const li = document.createElement('li');
        const songLine = document.createElement('span');
        const songLink = document.createElement('a');
        songLink.href = song['Linked Lyrics'];
        songLink.target = '_blank';
        songLink.textContent = song.Song;
        songLine.innerHTML = `<strong>${songLink.outerHTML}</strong> -- <strong>${song.artist}</strong><br>`;
        li.appendChild(songLine);
        const keywordsLine = document.createElement('span');
        keywordsLine.innerHTML = song.Keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join(' ');
        li.appendChild(keywordsLine);
        const themeLine = document.createElement('span');
        themeLine.innerHTML = `<span class="theme">${song['Overall Theme']}</span>`;
        li.appendChild(themeLine);
        kwssongList.appendChild(li);




        // Create the header row
        const headerRow = document.createElement('tr');
        const headers = ["Song", "Reason of Selection", "Socially Conscious", "Culturally Significant", "artist"];
        headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
        });
        kwssongTable.appendChild(headerRow);

        // Populate the data rows
        const dataRow = document.createElement('tr');
        headers.forEach(header => {
        const td = document.createElement('td');
        td.textContent = song[header];
        dataRow.appendChild(td);
        });
        kwssongTable.appendChild(dataRow);




      } // where am i?      
    }
  });

  // Show the main song list and song table
  kwsmainSongList.style.display = 'block';
  kwssongTable.style.display = 'block';

  // Populate the biography section
  populateBiography(sortedSongs[0].artist);
}





// end of filter key words 






// Function to generate table rows based on song data
function generateTableRows(data) {
  var rows = '';

  data.forEach(function(song) {
    var linkedLyrics = song['Linked Lyrics'] ? '<a href="' + song['Linked Lyrics'] + '" target="_blank">Lyrics</a>' : 'N/A';

    rows += '<tr>' +
      '<td>' + song.artist + '</td>' +
      '<td>' + song.Song + '</td>' +
      '<td>' + song['Reason of Selection'] + '</td>' +
      '<td>' + song['Socially Conscious'] + '</td>' +
      '<td>' + song['Culturally Significant'] + '</td>' +
      '<td>' + song.Keywords.join(', ') + '</td>' +
      '<td>' + song['Overall Theme'] + '</td>' +
      '<td>' + linkedLyrics + '</td>' +
      '</tr>';
  });

  return rows;
}

// Function to populate the table with song data
function populateTable() {
  var songTableBody = document.getElementById('songTableBody');
  songTableBody.innerHTML = ''; // Clear existing table rows

  var sortedData = song_data.sam_songs; // Retrieve data from the global variable

  // Generate table rows
  var rows = generateTableRows(sortedData);
  songTableBody.innerHTML = rows;
}






function createSongList(artistName) {
  var songList = document.getElementById("lyricsSongList");

  for (var i = 0; i < song_data.sam_songs.length; i++) {
    var song = song_data.sam_songs[i];

    if (song.artist === artistName) {
      var linkedLyrics = song["Linked Lyrics"];
      var songName = song.Song;

      if (linkedLyrics && linkedLyrics.startsWith("http")) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = linkedLyrics;
        link.target = "_blank";
        link.textContent = songName;

        listItem.appendChild(link);
        songList.appendChild(listItem);
      }
    }
  }
}







function testChart(selectedArtist) {
    var canvas = document.getElementById("goodCanvas1");
    var ctx = canvas.getContext("2d");
    ctx.font= "30px Comic Sans MS";
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,400,100);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Hello ARIA World" + selectedArtist, canvas.width/2, canvas.height/2);
};



// change artist1 
function changeMCOne(selectedArtist) {
  let input = document.getElementById("artist1");
  input.ariaDisabled = false;
  input.value = selectedArtist.Artist;
  //input.ariaDisabled = false;

}



function keywordCountByArtist(songData, artistName) {
  let totalKeywords = 0;
  songData.sam_songs.forEach((song) => {
      if (song.artist === artistName) {
          totalKeywords += song.Keywords.length;
      }
  });
  return totalKeywords;
}


function changeMC2(artistName, cnt) {
  //let songData = song_data;
  //console.log(artistName);
  // let input = document.getElementById("artist" + cnt.toString());
  // input.ariaDisabled = false;

  

  // var inputs=document.getElementsByClassName('cardibinput');
  // for(i=0;i<8;i++){
  //     if (i > 0) {
  //       inputs[i].disabled=false;
  //     }
  // }

  // document.getElementById('artist5').disabled=false;

  let k2 = keywordCountByArtist(song_data, artistName)
  
  let artistCount;
  for (let i = 0; i < cons_sams_artista.sam_artists.length; i++) {
      if (cons_sams_artista.sam_artists[i].Artist === artistName) {
          artistCount = cons_sams_artista.sam_artists[i].count;
          break;
      }
  }
  if(artistCount !== undefined) {
      eight_dict[cnt] = {"artist": artistName,"songs":artistCount,"keywords":k2}
  } else {
      console.log(`Artist ${artistName} not found.`);
  }


  createCharts();
  
}




// const datab = {
//   "1": { "artist": "Snoop Dogg", "songs": 8, "keywords": 19, "keysandsongs": 27 },
//   "2": { "artist": "Childish Gambino", "songs": 9, "keywords": 27, "keysandsongs": 36 },
//   "3": { "artist": "Kendrick Lamar", "songs": 12, "keywords": 36, "keysandsongs": 48 },
//   "4": { "artist": "DJ Jazzy Jeff & The Fresh Prince", "songs": 1, "keywords": 3, "keysandsongs": 4 },
//   "5": { "artist": "Cypress Hill", "songs": 6, "keywords": 18, "keysandsongs": 24 },
//   "6": { "artist": "Redman", "songs": 4, "keywords": 0, "keysandsongs": 4 },
//   "7": { "artist": "Kodak Black", "songs": 2, "keywords": 11, "keysandsongs": 13 },
//   "8": { "artist": "Lil Jon", "songs": 5, "keywords": 0, "keysandsongs": 5 },
// };

// buildCharts(datab);


function buildCharts(ccsvData) {
  // Extract the data from ccsvData
  const artists = Object.values(ccsvData).map((item) => item.artist);
  const songs = Object.values(ccsvData).map((item) => item.songs);
  const keywords = Object.values(ccsvData).map((item) => item.keywords);


  // Define the colors for the bars
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  // Chart for canvascooks
  // const canvascooksChart = d3.select("#canvascooks")
  //   .append("svg")
  //   .attr("width", 500)
  //   .attr("height", 500);

  // const canvascooksBars = canvascooksChart.selectAll("rect")
  //   .data(songs)
  //   .enter()
  //   .append("rect")
  //   .attr("x", (d, i) => i * 60)
  //   .attr("y", (d) => 500 - d * 20)
  //   .attr("width", 50)
  //   .attr("height", (d) => d * 20)
  //   .attr("fill", (_, i) => colors(i))
  //   // .on("click", (_, i) => showArtistSongs(artists[i]));
  //   .on("click", function showArtistSongs(artistName) {
  //     const artist = cons_sams_artista.sam_artists.find((art) => art.Artist === artistName);
  //     if (artist) {
  //       const pTag = document.getElementById("pshowsonginfo");
  //       pTag.innerHTML = artist.songs.join('<br>'); // Join the songs with line breaks
  //     }
  //   });

  // Chart for canvascooksandkeys (stacked bar chart)
  const canvascooksandkeysChart = d3.select("#canvascooksandkeys")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200);

  const canvascooksandkeysBars = canvascooksandkeysChart.selectAll("g")
    .data(ccsvData)
    .enter()
    .append("g")
    .attr("transform", (_, i) => `translate(0, ${i * 30})`);
    

  canvascooksandkeysBars.selectAll("rect")
    .data((d) => [d.songs, d.keywords - d.songs])
    .enter()
    .append("rect")
    .attr("x", (_, i) => i * 60)
    .attr("width", 50)
    .attr("height", (d) => d * 20)
    .attr("fill", (_, i) => colors(i))
    .on("click", alert("say whaaaaa"));


  // Chart for canvaskeys
  // const canvaskeysChart = d3.select("#canvaskeys")
  //   .append("svg")
  //   .attr("width", 200)
  //   .attr("height", 200);

  // const canvaskeysBars = canvaskeysChart.selectAll("rect")
  //   .data(keywords)
  //   .enter()
  //   .append("rect")
  //   .attr("x", (d, i) => i * 60)
  //   .attr("y", (d) => 200 - d * 10)
  //   .attr("width", 50)
  //   .attr("height", (d) => d * 10)
  //   .attr("fill", (_, i) => colors(i));
}


// function showArtistSongs(artistName) {
//   const artist = cons_sams_artista.sam_artists.find((art) => art.Artist === artistName);
//   if (artist) {
//     const pTag = document.getElementById("pshowsonginfo");
//     pTag.innerHTML = artist.songs.join('<br>'); // Join the songs with line breaks
//   }
// }

// Rest of your buildCharts function and other code remains the same




function buildCharts(ccsvData) {
  // Parse the CSV string and convert it into an array of objects
  const parsedData = d3.csvParse(ccsvData);

  // Extract the data from the parsedData
  const artists = parsedData.map((item) => item.artist);
  const songs = parsedData.map((item) => +item.songs);
  const keywords = parsedData.map((item) => +item.keywords);

  // Define the colors for the bars
  const colors = d3.scaleOrdinal(d3.schemeCategory10);

  // Chart for canvascooks
  // const canvascooksChart = d3.select("#canvascooks")
  //   .append("svg")
  //   .attr("width", 500)
  //   .attr("height", 500);

  // const canvascooksBars = canvascooksChart.selectAll("rect")
  //   .data(songs)
  //   .enter()
  //   .append("rect")
  //   .attr("x", (d, i) => i * 60)
  //   .attr("y", (d) => 500 - d * 20)
  //   .attr("width", 50)
  //   .attr("height", (d) => d * 20)
  //   .attr("fill", (_, i) => colors(i))
  //   // .on("click", (_, i) => showArtistSongs(artists[i]))
  //   .on("click", function showArtistSongs(artistName) {
  //     const artist = cons_sams_artista.sam_artists.find((art) => art.Artist === artistName);
  //     if (artist) {
  //       const pTag = document.getElementById("pshowsonginfo");
  //       pTag.innerHTML = artist.songs.join('<br>'); // Join the songs with line breaks
  //     }
  //   });

  // Chart for canvascooksandkeys (stacked bar chart)
  const canvascooksandkeysChart = d3.select("#canvascooksandkeys")
    .append("svg")
    .attr("width", 200)
    .attr("height", 200);

  const canvascooksandkeysBars = canvascooksandkeysChart.selectAll("g")
    .data(parsedData)
    .enter()
    .append("g")
    .attr("transform", (_, i) => `translate(0, ${i * 30})`);

  canvascooksandkeysBars.selectAll("rect")
    .data((d) => [d.songs, d.keywords - d.songs])
    .enter()
    .append("rect")
    .attr("x", (_, i) => i * 60)
    .attr("width", 50)
    .attr("height", (d) => d * 20)
    .attr("fill", (_, i) => colors(i));

  // Chart for canvaskeys
  // const canvaskeysChart = d3.select("#canvaskeys")
  //   .append("svg")
  //   .attr("width", 200)
  //   .attr("height", 200);

  // const canvaskeysBars = canvaskeysChart.selectAll("rect")
  //   .data(keywords)
  //   .enter()
  //   .append("rect")
  //   .attr("x", (d, i) => i * 60)
  //   .attr("y", (d) => 200 - d * 10)
  //   .attr("width", 50)
  //   .attr("height", (d) => d * 10)
  //   .attr("fill", (_, i) => colors(i));
}

// Sample data for demonstration
// const ccsvData = `"artist,songs,keywords,keysandsongs
// Akinyele,3,6,9
// Fat Boys,5,15,20
// EPMD,2,6,8
// Salt-N-Pepa,4,14,18
// Doug E. Fresh,2,7,9
// Scarface,19,75,94
// Grand Master Flash and the Furious 5,2,6,8
// XXXTencantion,4,0,4"`;

// Call the function to build the charts
// buildCharts(ccsvData);



function createCharts() {
  // Destroy existing charts
  if (window.chart3) { 
      window.chart3.destroy(); 
  }

  // Prepare data for new charts
  // Assuming eight_dict and cons_sams_artista have been previously defined
  var chart3Data = Object.values(eight_dict).map(obj => ([obj.songs, obj.keywords, obj.artist]));


  var ctx3 = document.getElementById('canvascooksandkeys').getContext('2d');
  window.chart3 = new Chart(ctx3, {
      type: 'bar',
      data: {
          datasets: [{
              data: chart3Data.map(item => item[0]),
              label: 'Songs',
              backgroundColor: 'rgba(0, 123, 255, 0.5)'
          }, {
              data: chart3Data.map(item => item[1]),
              label: 'Keys',
              backgroundColor: 'rgba(255, 193, 7, 0.5)'
          }],
          labels: chart3Data.map(item => item[2])
      },
      options: {
          title: {
              display: true,
              text: 'Stacked bar chart of songs and keys'
          },
          scales: {
              xAxes: [{
                  display: true,
                  scaleLabel: { display: true, labelString: 'Values' },
                  stacked: true
              }],
              yAxes: [{
                  display: true,
                  scaleLabel: { display: true, labelString: 'Artist' },
                  stacked: true
              }],
          }
      }
  });
}
// CREATE CHARTS 20230805

