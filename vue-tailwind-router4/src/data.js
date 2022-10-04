const menuItems = [
  {
    name: 'VIEW EVENTS',
    path: '/events'
  },
  {
    name: 'BY DATE',
    path: '#dates'
  },
  {
    name: 'BY ARTIST',
    path: '#artists'
  },
  {
    name: 'BY VENUE',
    path: '#venues'
  },
  {
    name: 'GALLERY',
    path: '/photogallery'
  },
  {
    name: 'ARCHIVE',
    path: '/'
  },
  {
    name: 'HOTELS',
    path: 'https://lasvegas.electricdaisycarnival.com/travel/hotels/'
  },
  {
    name: 'EDC LAS VEGAS',
    path: 'https://lasvegas.electricdaisycarnival.com/'
  }
];

const data = [
  {
    artist: 'above & beyond',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'tao beach',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01052925/220519_TBDC_ABOVE-BEYOND_1080x1350-640x800.jpg'
  },
  {
    artist: 'aerial grey',
    date: 'thursday, may 19',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094009/edc-THU-1350-1-640x800.jpg'
  },
  {
    artist: 'alan walker',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'marquee nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01024651/220519_MNC_AlanWalker_EDC_1080x1350-640x800.jpg'
  },
  {
    artist: 'alesso',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'hakkasan',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30110553/220519_HKLV_EDC_Alesso_1080x1350-640x800.jpg'
  },
  {
    artist: 'ann clue',
    date: 'thursday, may 19',
    time: '09:00 pm',
    venue: 'downtown las vegas event center',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31113031/f93_edcwr_2022_de_ka_1080x1350_r03-640x800.png'
  },
  {
    artist: 'armin van buuren',
    date: 'saturday, may 21',
    time: '10:00 pm',
    venue: 'omnia',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'artbat',
    date: 'friday, may 20',
    time: '11:00 am',
    venue: 'encore beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/04/21091426/052022_EBC_WynnMusicWeek_ARTBAT_Social_1080x1350-640x800.jpg'
  },
  {
    artist: 'atliens',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'daylight beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/25100942/br_pp_2022_de_ka_1080x1350_r02-640x800.jpg'
  },
  {
    artist: 'bad beat',
    date: 'tuesday, may 24',
    time: '10:00 pm',
    venue: 'lucky day',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094958/2022-5-24-Lucky-Day-TTT-INIGO-VONTIER-1080x1350-1-640x800.jpg'
  },
  {
    artist: 'bart skils',
    date: 'thursday, may 19',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094009/edc-THU-1350-1-640x800.jpg'
  },
  {
    artist: 'basscon pool party',
    date: 'thursday, may 19',
    time: '12:00 pm',
    venue: 'citrus grand pool deck',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/06072351/basscon_pool_party_2022_de_ka_1080x1350_r01-640x800.jpg'
  },
  {
    artist: 'bassrush pool party',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'daylight beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/25100942/br_pp_2022_de_ka_1080x1350_r02-640x800.jpg'
  },
  {
    artist: 'ben finx',
    date: 'thursday, may 19',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094009/edc-THU-1350-1-640x800.jpg'
  },
  {
    artist: 'blunts & blondes',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'daylight beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/25100942/br_pp_2022_de_ka_1080x1350_r02-640x800.jpg'
  },
  {
    artist: 'boris brejcha',
    date: 'thursday, may 19',
    time: '09:00 pm',
    venue: 'downtown las vegas event center',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31113031/f93_edcwr_2022_de_ka_1080x1350_r03-640x800.png'
  },
  {
    artist: 'brett rubin',
    date: 'saturday, may 21',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094128/edc-sat-1350-1-640x800.jpg'
  },
  {
    artist: 'cash cash',
    date: 'sunday, may 22',
    time: '11:00 am',
    venue: 'ayu dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30102303/05-22-22_Ayu_CashCash_1080x1350_feed-640x800.jpg'
  },
  {
    artist: 'the chainsmokers',
    date: 'friday, may 20',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/04/21091756/052022_XS_WynnMusicWeek_TheChainsmokers_Social_1080x1350-640x800.jpg'
  },
  {
    artist: 'charly jordan',
    date: 'friday, may 20',
    time: '11:00 am',
    venue: 'ayu dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30101628/05-20-22_Ayu_DJSnake_1080x1350_SOCIAL-640x800.jpg'
  },
  {
    artist: 'cheyenne giles',
    date: 'saturday, may 21',
    time: '10:00 pm',
    venue: 'hakkasan',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31044532/220521_HKLV_EDC_Loud-Luxury-CG_1080x1350-640x800.jpg'
  },
  {
    artist: 'chris garcia',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045300/lasvegas_lineup_bowsque_1080x1350-642x800.jpg'
  },
  {
    artist: 'chris lake',
    date: 'saturday, may 21',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01025316/220521_MDC_FullBloom_ChrisLake_1080x1350-640x800.jpg'
  },
  {
    artist: 'christopher james',
    date: 'friday, may 20',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30095806/edc-fri-1350-640x800.jpg'
  },
  {
    artist: 'claptone',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045300/lasvegas_lineup_bowsque_1080x1350-642x800.jpg'
  },
  {
    artist: 'cloonnee',
    date: 'wednesday, may 18',
    time: '10:00 pm',
    venue: 'marquee nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11030824/220518_MNC_Cloonee_Lowkey_EDC_1080x1350-640x800.jpg'
  },
  {
    artist: 'code black',
    date: 'thursday, may 19',
    time: '12:00 pm',
    venue: 'citrus grand pool deck',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/06072351/basscon_pool_party_2022_de_ka_1080x1350_r01-640x800.jpg'
  },
  {
    artist: 'crespo ',
    date: 'sunday, may 22',
    time: '10:00 pm',
    venue: 'marquee nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01025105/220522_MNC_Drenched_Crespo_EDC_1080x1350-640x800.jpg'
  },
  {
    artist: 'deadmau5',
    date: 'friday, may 20',
    time: '10:30 pm',
    venue: 'zouk nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30101243/05-20-22_ZOUK_deadmau5_1080x1350_FEED-640x800.jpg'
  },
  {
    artist: 'delta heavy',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'daylight beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/25100942/br_pp_2022_de_ka_1080x1350_r02-640x800.jpg'
  },
  {
    artist: 'deorro',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11031156/220519-MDC-EDC_Timmy-TrumpetDeorro_1080x1350-640x800.jpg'
  },
  {
    artist: 'deux twins',
    date: 'friday, may 20',
    time: '10:00 pm',
    venue: 'encore beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045031/052022_EBCaN_WynnMusicWeek_DeuxTwins_Social_1080x1350-640x800.jpg'
  },
  {
    artist: 'diplo',
    date: 'sunday, may 22',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045210/XS_WynnMusicWeek_Diplo_Social_GeneralWebsiteEventPage_1080x1350-1-640x800.jpg'
  },
  {
    artist: 'dj pauly d',
    date: 'saturday, may 21',
    time: '10:00 pm',
    venue: 'marquee nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01025012/220521_MNC_EDC_DJ-PAULY-D_1080x1350-640x800.jpg'
  },
  {
    artist: 'dj snake',
    date: 'friday, may 20',
    time: '11:00 am',
    venue: 'ayu dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30101628/05-20-22_Ayu_DJSnake_1080x1350_SOCIAL-640x800.jpg'
  },
  {
    artist: 'dom dolla',
    date: 'wednesday, may 18',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11030439/220518-MDC-EDC_Dom-Dolla-John-Summit1080x1350-640x800.jpg'
  },
  {
    artist: 'dombresky',
    date: 'wednesday, may 18',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11030439/220518-MDC-EDC_Dom-Dolla-John-Summit1080x1350-640x800.jpg'
  },
  {
    artist: 'dr phunk',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045300/lasvegas_lineup_bowsque_1080x1350-642x800.jpg'
  },
  {
    artist: 'edc week after hours',
    date: 'thursday, may 19',
    time: '12:00 pm',
    venue: 'citrus grand pool deck',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/06072351/basscon_pool_party_2022_de_ka_1080x1350_r01-640x800.jpg'
  },
  {
    artist: 'elrow',
    date: 'thursday, may 19',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094009/edc-THU-1350-1-640x800.jpg'
  },
  {
    artist: 'eric d-lux',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045300/lasvegas_lineup_bowsque_1080x1350-642x800.jpg'
  },
  {
    artist: 'factory 93',
    date: 'friday, may 20',
    time: '10:00 pm',
    venue: 'marquee nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01024836/220520_MNC_EDC_Eric-Dlux_1080x1350-640x800.jpg'
  },
  {
    artist: 'fisher',
    date: 'friday, may 20',
    time: '11:00 am',
    venue: 'tao beach',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01024158/220520_TBDC_Fisher_1080x1350-640x800.jpg'
  },
  {
    artist: 'flosstradamus',
    date: 'saturday, may 21',
    time: '11:00 am',
    venue: 'elia beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'franklyn watts',
    date: 'wednesday, may 18',
    time: '10:00 pm',
    venue: 'marquee nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11030824/220518_MNC_Cloonee_Lowkey_EDC_1080x1350-640x800.jpg'
  },
  {
    artist: 'g-eazy',
    date: 'saturday, may 21',
    time: '10:30 pm',
    venue: 'zouk nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/04/15071800/05-21-22_Zouk_G-Eazy_1080x1350_SOCIAL-640x800.jpg'
  },
  {
    artist: 'gta',
    date: 'saturday, may 21',
    time: '11:00 am',
    venue: 'elia beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'harry romero',
    date: 'saturday, may 21',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094128/edc-sat-1350-1-640x800.jpg'
  },
  {
    artist: 'honeyluv',
    date: 'wednesday, may 18',
    time: '10:00 pm',
    venue: 'marquee nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11030824/220518_MNC_Cloonee_Lowkey_EDC_1080x1350-640x800.jpg'
  },
  {
    artist: 'illenium',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'omnia',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31045359/220519_OMLV_EDC_Illenium_1080x1350-645x800.jpg'
  },
  {
    artist: 'imanu',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'daylight beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/25100942/br_pp_2022_de_ka_1080x1350_r02-640x800.jpg'
  },
  {
    artist: 'inigo vontier',
    date: 'tuesday, may 24',
    time: '10:00 pm',
    venue: 'lucky day',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094958/2022-5-24-Lucky-Day-TTT-INIGO-VONTIER-1080x1350-1-640x800.jpg'
  },
  {
    artist: 'jauz',
    date: 'friday, may 20',
    time: '11:00 am',
    venue: 'elia beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'jessica audiffred',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'daylight beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/25100942/br_pp_2022_de_ka_1080x1350_r02-640x800.jpg'
  },
  {
    artist: 'john summit',
    date: 'wednesday, may 18',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11030439/220518-MDC-EDC_Dom-Dolla-John-Summit1080x1350-640x800.jpg'
  },
  {
    artist: 'joshwa',
    date: 'wednesday, may 18',
    time: '10:00 pm',
    venue: 'marquee nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11030824/220518_MNC_Cloonee_Lowkey_EDC_1080x1350-640x800.jpg'
  },
  {
    artist: 'justin credible',
    date: 'friday, may 20',
    time: '10:00 pm',
    venue: 'jewel',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'justin mylo',
    date: 'friday, may 20',
    time: '10:00 pm',
    venue: 'omnia',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31045735/220520_OMLV_EDC_Martin-Garrix_1080x1350-645x800.jpg'
  },
  {
    artist: 'kaskade',
    date: 'friday, may 20',
    time: '11:00 am',
    venue: 'wet republic',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31050806/220520_WET_EDC_KASKADE_1080x1350-640x800.jpg'
  },
  {
    artist: 'kreation',
    date: 'thursday, may 19',
    time: '12:00 pm',
    venue: 'citrus grand pool deck',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/06072351/basscon_pool_party_2022_de_ka_1080x1350_r01-640x800.jpg'
  },
  {
    artist: 'lny tnz',
    date: 'thursday, may 19',
    time: '12:00 pm',
    venue: 'citrus grand pool deck',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/06072351/basscon_pool_party_2022_de_ka_1080x1350_r01-640x800.jpg'
  },
  {
    artist: 'loud luxury',
    date: 'saturday, may 21',
    time: '10:00 pm',
    venue: 'hakkasan',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31044532/220521_HKLV_EDC_Loud-Luxury-CG_1080x1350-640x800.jpg'
  },
  {
    artist: 'lucky lou',
    date: 'sunday, may 22',
    time: '11:00 am',
    venue: 'liquid pool',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'mad dog',
    date: 'thursday, may 19',
    time: '12:00 pm',
    venue: 'citrus grand pool deck',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/06072351/basscon_pool_party_2022_de_ka_1080x1350_r01-640x800.jpg'
  },
  {
    artist: 'marshmello',
    date: 'saturday, may 21',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/04/21092049/052122_XS_WynnMusicWeek_Marshmello_Social_1080x1350-640x800.jpg'
  },
  {
    artist: 'martin garrix',
    date: 'friday, may 20',
    time: '10:00 pm',
    venue: 'omnia',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31045735/220520_OMLV_EDC_Martin-Garrix_1080x1350-645x800.jpg'
  },
  {
    artist: 'meduza',
    date: 'saturday, may 21',
    time: '10:00 pm',
    venue: 'encore beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045125/052122_EBCaN_WynnMusicWeek_Meduza_Social_1080x1350-640x800.jpg'
  },
  {
    artist: 'moritz hofbauer (live)',
    date: 'thursday, may 19',
    time: '09:00 pm',
    venue: 'downtown las vegas event center',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31113031/f93_edcwr_2022_de_ka_1080x1350_r03-640x800.png'
  },
  {
    artist: 'murda beatz',
    date: 'saturday, may 21',
    time: '10:00 pm',
    venue: 'jewel',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'nghtmare',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'liquid pool',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/15074352/220519_LQD_EDC_NGHTMRE_1080x1920-450x800.jpg'
  },
  {
    artist: 'nick warren',
    date: 'friday, may 20',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30095806/edc-fri-1350-640x800.jpg'
  },
  {
    artist: 'nightstalker',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'daylight beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/25100942/br_pp_2022_de_ka_1080x1350_r02-640x800.jpg'
  },
  {
    artist: 'nora en pure',
    date: 'sunday, may 22',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01025500/220522_MDC_FullBloom_NoraEnPure_1080x1350-640x800.jpg'
  },
  {
    artist: 'partiboi69',
    date: 'wednesday, may 18',
    time: '10:00 pm',
    venue: 'discopussy',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30093400/2022-5-18-DP-Partiboi69-1080x1350-1-640x800.jpg'
  },
  {
    artist: 'porter robinson',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'wet republic',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31050444/220519_WET_EDC_Porter-Robinson_1080x1350-640x800.jpg'
  },
  {
    artist: 'rated r',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'daylight beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/25100942/br_pp_2022_de_ka_1080x1350_r02-640x800.jpg'
  },
  {
    artist: 'riley bee',
    date: 'friday, may 20',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30095806/edc-fri-1350-640x800.jpg'
  },
  {
    artist: 'scooter and lavelle',
    date: 'saturday, may 21',
    time: '11:00 am',
    venue: 'liquid pool',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/15074719/220521_LQD_EDC_ScooterLavelle_1080x1920-450x800.jpg'
  },
  {
    artist: 'scotty boy',
    date: 'friday, may 20',
    time: '11:00 am',
    venue: 'liquid pool',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'sidepiece',
    date: 'monday, may 23',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01025611/220521-MDC-EDC_SIDEPIECE_1080x1350-640x800.jpg'
  },
  {
    artist: 'steve aoki',
    date: 'sunday, may 22',
    time: '11:00 am',
    venue: 'wet republic',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31051411/220522_WET_EDC_Steve-Aoki_1080x1350-640x800.jpg'
  },
  {
    artist: 'steve walker',
    date: 'saturday, may 21',
    time: '02:00 am',
    venue: 'terrace afterhours',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094128/edc-sat-1350-1-640x800.jpg'
  },
  {
    artist: 'suae',
    date: 'thursday, may 19',
    time: '12:00 pm',
    venue: 'citrus grand pool deck',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/06072351/basscon_pool_party_2022_de_ka_1080x1350_r01-640x800.jpg'
  },
  {
    artist: 'tchami',
    date: 'sunday, may 22',
    time: '11:00 am',
    venue: 'elia beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'techno taco tuesday',
    date: 'tuesday, may 24',
    time: '10:00 pm',
    venue: 'lucky day',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094958/2022-5-24-Lucky-Day-TTT-INIGO-VONTIER-1080x1350-1-640x800.jpg'
  },
  {
    artist: 'tiesto',
    date: 'thursday, may 19',
    time: '10:30 pm',
    venue: 'zouk nightclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30100621/05-19-22_Zouk_Tiesto_1080x1350_SOCIAL-640x800.jpg'
  },
  {
    artist: 'timmy trumpet',
    date: 'thursday, may 19',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/11031156/220519-MDC-EDC_Timmy-TrumpetDeorro_1080x1350-640x800.jpg'
  },
  {
    artist: 'tini gessler',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045300/lasvegas_lineup_bowsque_1080x1350-642x800.jpg'
  },
  {
    artist: 'tinlicker',
    date: 'sunday, may 22',
    time: '11:00 am',
    venue: 'elia beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'tnt',
    date: 'thursday, may 19',
    time: '12:00 pm',
    venue: 'citrus grand pool deck',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/06072351/basscon_pool_party_2022_de_ka_1080x1350_r01-640x800.jpg'
  },
  {
    artist: 'tris tiffany',
    date: 'tuesday, may 24',
    time: '10:00 pm',
    venue: 'lucky day',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/19094958/2022-5-24-Lucky-Day-TTT-INIGO-VONTIER-1080x1350-1-640x800.jpg'
  },
  {
    artist: 'troyboi',
    date: 'saturday, may 21',
    time: '11:00 am',
    venue: 'elia beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'tyga',
    date: 'friday, may 20',
    time: '10:00 pm',
    venue: 'hakkasan',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  },
  {
    artist: 'vintage culture',
    date: 'friday, may 20',
    time: '11:00 am',
    venue: 'marquee dayclub',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/01025202/220520-MDC-EDC_Vintage-Culture_1080x1350-640x800.jpg'
  },
  {
    artist: 'william black',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'omnia',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/31045359/220519_OMLV_EDC_Illenium_1080x1350-645x800.jpg'
  },
  {
    artist: 'xenaa',
    date: 'thursday, may 19',
    time: '10:00 pm',
    venue: 'xs',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/20045300/lasvegas_lineup_bowsque_1080x1350-642x800.jpg'
  },
  {
    artist: 'yellow claw',
    date: 'saturday, may 21',
    time: '11:00 am',
    venue: 'elia beach club',
    image:
      'https://dm3381rcqf07k.cloudfront.net/multisite.insomniac.com/wp-content/uploads/sites/56/2022/03/30094316/edcwk_2022_de_ka_1080x1350_r03-640x800.jpg'
  }
];

const eventDays = [...new Set(data.map(item => item.date))];

export { menuItems, data, eventDays };
