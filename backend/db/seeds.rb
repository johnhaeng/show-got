# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


city1=City.create(name:"London", img:"https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1150/5/1155709.jpg" )
city2=City.create(name:"Paris", img:"https://adamkatzsinding.com/wp-content/uploads/2017/02/Le-21eme-Adam-Katz-Sinding-Backstage-Y-Project-Paris-Fashion-Week-Mens-Fall-Winter-2017-2018_AKS5016.jpg" )
city3=City.create(name:"Milano", img:"https://anothermanimg-dazedgroup.netdna-ssl.com/1600/azure/anotherman-prod/360/8/368728.jpg" )
city4=City.create(name:"New York" , img:"https://media.gq.com/photos/5b46185d5a2c720ba597dd4c/16:9/w_1600%2Cc_limit/180710_NYFWMSS19_DR17-8993.jpg" )
city5=City.create(name:"Seoul" , img:"https://image.ytn.co.kr/general/jpg/2015/1028/201510281402548932_d.jpg" )
city6=City.create(name:"Tokyo" , img:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F03%2Fambush-fall-winter-2018-runway-show-backstage-10.jpg?q=90&w=2800&cbr=1&fit=max" )

designer1=Designer.create!(name:"A-COLD-WALL*", city_id:"1", img:"https://cdn.shopify.com/s/files/1/1417/5782/files/a-cold-wall-spring-summer-2019-runway-lfw-1_1024x1024.jpg?v=1528999353")
designer2=Designer.create!(name:"A.F.VANDEVORST", city_id:"2", img:"http://www3.pictures.livingly.com/it/A.F.+Vandevorst+Spring+2019+Details+qublAas1latl.jpg")
designer3=Designer.create!(name:"ACNE STUDIOS", city_id:"2", img:"https://i.mdel.net/i/db/2018/9/980379/980379-800w.jpg")
designer4=Designer.create!(name:"ALEXANDER MCQUEEN", city_id:"2", img:"https://i.pinimg.com/originals/73/24/a7/7324a7bf28057140e40e1d2ff433be7d.jpg")
designer5=Designer.create!(name:"AMI ALEXANDRE MATTIUSSI", city_id:"2", img:"http://fuckingyoung.es/wp-content/uploads/2017/10/AMI-Alexandre-Mattiussi-FW17-Campaign_fy1.jpg")
designer6=Designer.create!(name:"ANN DEMEULEMEESTER", city_id:"2", img:"https://i.pinimg.com/236x/19/d6/6e/19d66e0eb35521f086e6cb5ce2842694--ann-demeulemeester-black-magic.jpg")
designer7=Designer.create!(name:"ASTRID ANDERSEN", city_id:"1", img:"https://pmcwwd.files.wordpress.com/2018/01/astrid-andersen-men-fall-2018-london-fashion-week-28.jpg?w=1024")
designer8=Designer.create!(name:"AURALEE", city_id:"6", img:"http://static1.squarespace.com/static/58d6f8f646c3c4bebcacf90e/58d70b5cf7e0ab027a0aae29/5a4efbb40d9297d3c324cf19/1515127235160/AURALEE2018SS007-2-980x643.jpg?format=1500w")
designer9=Designer.create!(name:"BALENCIAGA", city_id:"2", img:"https://i.pinimg.com/originals/03/a6/29/03a62962ed9231cb736a1bf778257ac2.jpg")
designer10=Designer.create!(name:"BALMAIN", city_id:"2", img:"https://pbs.twimg.com/media/DUEaO8mX0AANkRX.jpg")
designer11=Designer.create!(name:"BAND OF OUTSIDERS", city_id:"1", img:"https://www.thefashionisto.com/wp-content/uploads/2019/02/Band-of-Outsiders-Fall-Winter-2019-Collection-Lookbook-007-450x700.jpg")
designer12=Designer.create!(name:"BARBOUR", city_id:"1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkh9s5MrX9uZ58l-62SlGNPZvh5QNKWlmcS7Y51fDUXrCBFHWb")
designer13=Designer.create!(name:"BED J.W. FORD", city_id:"3", img:"https://static1.squarespace.com/static/54faf78ce4b04da0abdfbde8/t/5c3c7d504fa51afb62db44c6/1547468118451/")
designer14=Designer.create!(name:"BELSTAFF", city_id:"1", img:"https://static1.fashionbeans.com/wp-content/uploads/2018/09/STAFFLFALL.jpg")
designer15=Designer.create!(name:"BERLUTI", city_id:"2", img:"https://i.pinimg.com/originals/1a/fb/be/1afbbe8eb872984d74ff10ef3e9e36f2.jpg")
designer16=Designer.create!(name:"BIANCA SAUNDERS", city_id:"1", img:"https://paper-journal.com/wp-content/uploads/2019/01/70A7291.jpg")
designer17=Designer.create!(name:"BORIS BIDJAN SABERI", city_id:"2", img:"https://adamkatzsinding.com/wp-content/uploads/2017/07/Le-21eme-Adam-Katz-Sinding-Backstage-Boris-Bidjan-Saberi-Paris-Fashion-Week-Mens-Spring-Summer-2018_AKS7056.jpg")
designer18=Designer.create!(name:"BOTTEGA VENETA", city_id:"3", img:"https://d1otfi4uhdq3fm.cloudfront.net/content/uploads/2018/02/01021443/Bottega-Veneta-Cover-Photo-1200x800.jpg")
designer19=Designer.create!(name:"BRIONI", city_id:"3", img:"http://www.crash.fr/wp-content/uploads/2016/01/WA6A5357.jpg")
designer20=Designer.create!(name:"BURBERRY", city_id:"1", img:"https://mpbatera.wpengine.com/wp-content/uploads/2015/01/burberry-prorsum-2014-fallwinter-show-recap-01.jpg")
designer21=Designer.create!(name:"CARVEN", city_id:"2", img:"https://pbs.twimg.com/media/DDCOlIQXYAEfixr.jpg")
designer22=Designer.create!(name:"CELINE", city_id:"2", img:"https://pmcwwd.files.wordpress.com/2019/03/rexfeatures_10123891bh.jpg?w=1024")
designer23=Designer.create!(name:"CERRUTI 1881", city_id:"2", img:"https://cdn.wallpaper.com/main/2019/01/cerrutilandy_0.jpg")
designer24=Designer.create!(name:"CHARLES JEFFREY LOVERBOY", city_id:"1", img:"http://hero-live.s3.amazonaws.com/wp-content/uploads/2018/06/12094204/CHARLES-JEFFREY-SS19-HERO-381-1132x620.jpg")
designer25=Designer.create!(name:"CHILDREN OF THE DISCORDANCE", city_id:"6", img:"https://pen-online.com/fr/wp-content/uploads/2018/06/08091503/0324_1295-1024x683.jpg")
designer26=Designer.create!(name:"COMME DES GARÇONS", city_id:"2", img:"http://hero-live.s3.amazonaws.com/wp-content/uploads/2017/06/24115517/comme-de-garcons-homme-plus-2018-men-collections-paris-fashion-week-pfw-0335.jpg")
designer27=Designer.create!(name:"COTTWEILER", city_id:"1", img:"http://hero-live.s3.amazonaws.com/wp-content/uploads/2019/01/07132005/COTTWEILER-FW19-HERO-101-1000x667.jpg")
designer28=Designer.create!(name:"CRAIG GREEN", city_id:"1", img:"https://dynaimage.cdn.cnn.com/cnn/q_auto,w_380,c_fit/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F180404114105-craig-green-ss18.jpg")
designer29=Designer.create!(name:"D.GNAK", city_id:"5", img:"http://fuckingyoung.es/wp-content/uploads/2017/06/D.Gnak-SS18-Backstage_fy16.jpg")
designer30=Designer.create!(name:"DIOR", city_id:"2", img:"https://www.dior.com/couture/var/dior/storage/images/horizon/man/collections-shows/pre-fall-2019-men%E2%80%99s-show/backstage/15673787-15-fre-FR/backstage_width_920.jpg")
designer31=Designer.create!(name:"DRIES VAN NOTEN", city_id:"2", img:"http://vman.com/wp-content/uploads/sites/2/2018/06/01_DvNm_SS19_Schohaja_2H3A7447_lo-7.jpg")
designer32=Designer.create!(name:"DSQUARED2", city_id:"3", img:"https://www.fashionotography.com/wp-content/uploads/2019/02/Dsquared2-Spring-Summer-2019-Campaign-1.jpg")
designer33=Designer.create!(name:"EDWARD CUMING", city_id:"1", img:"http://fuckingyoung.es/wp-content/uploads/2015/07/Colour-Me-In_fy13.jpg")
designer34=Designer.create!(name:"ERMENEZILDO ZEGNA", city_id:"3", img:"https://www.telegraph.co.uk/content/dam/luxury/2018/08/29/Shot-01_134-print_trans_NvBQzQNjv4BqSIU7B0YMgRG17hW50Jwm7ZKK_Qg-t6xd77YfUorNv1k.jpg?imwidth=450")
designer35=Designer.create!(name:"FENDI", city_id:"3", img:"https://www.gqmiddleeast.com/sites/default/files/gqme/styles/766_431_landscape/public/images/2019/01/16/Finale.JPG?itok=r5L4U57R")
designer36=Designer.create!(name:"GIORGIO ARMANI", city_id:"3", img:"https://www.armani.com/cloud/armanif31wp/uploads/2018/02/3TST_GA_W_FashioShow_FW1819_Banner_FW_Uomo.jpg")
designer37=Designer.create!(name:"GIVENCHY", city_id:"2", img:"https://nssdata.s3.amazonaws.com/images/galleries/2984/20111219060311memo-givenchy.jpeg")
designer38=Designer.create!(name:"HAIDER ACKERMAN", city_id:"2", img:"https://pmcwwd.files.wordpress.com/2016/06/backstage-at-haider-ackermann-mens-spring-2017-21.jpg")
designer39=Designer.create!(name:"HENRIK VIBSKOV", city_id:"2", img:"https://www.farfetch.com/PortalContent/static/images/_editorial/henrik-vibskov-blog-press-henrik-vibskov-ss13-mens-fashion-show-paris-backstage-by-sonny-vandevelde-/hv%204%20sized.jpg")
designer40=Designer.create!(name:"HERMÈS", city_id:"2", img:"https://www.thefashionisto.com/wp-content/uploads/2018/08/Hermes-Fall-Winter-2018-Mens-Campaign-001.jpg")
designer41=Designer.create!(name:"HYKE", city_id:"6", img:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F03%2Fhyke-backstage-fall-winter-2019-32.jpeg?q=75&w=800&cbr=1&fit=max")
designer42=Designer.create!(name:"ISABLE MARANT", city_id:"2", img:"https://www.thefashionisto.com/wp-content/uploads/2018/10/Isabel-Marant-Fall-Winter-2018-Mens-Campaign-003.jpg")
designer43=Designer.create!(name:"ISSEY MIYAKE", city_id:"2", img:"http://stylecartel.com/wp-content/uploads/2019/01/imi_men_fw19_WEB_41.jpg")
designer44=Designer.create!(name:"JIEDA", city_id:"6", img:"https://i.pinimg.com/originals/bf/79/3a/bf793adcb84d503753dc05e53a5e7369.jpg")
designer45=Designer.create!(name:"JIL SANDER", city_id:"1", img:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jil-sander-89a1181-1506373535.jpg")
designer46=Designer.create!(name:"JOHN LAWRENCE SULLIVAN", city_id:"1", img:"https://i0.wp.com/www.thehedonistmagazine.com/wp-content/uploads/2017/06/John-Lawrence-Sullivan-SS18-FOH-Eeva-Rinne-British-Fashion-Council-HiRes38.jpg?resize=1263%2C560&ssl=1")
designer47=Designer.create!(name:"JORDANLUCA", city_id:"1", img:"http://www.danskmagazine.com/wp-content/uploads/2018/07/1_preview.jpeg")
designer48=Designer.create!(name:"JUUN.J", city_id:"2", img:"https://www.numero.com/sites/default/files/images/article_new/slides/juun_j_show_automne_hiver_2017_fall_winter_1_2.jpg")
designer49=Designer.create!(name:"KENZO", city_id:"2", img:"https://cdn-images-1.medium.com/max/1600/1*j-By1oqhuCSgJAB5UZDZfQ.jpeg")
designer50=Designer.create!(name:"KIKO KOSTADINOV", city_id:"1", img:"https://i0.wp.com/cultedge.com/wp-content/uploads/2018/02/Kiko-Kostadinov-001.jpg?resize=1000%2C500&ssl=1")
designer51=Designer.create!(name:"KYE", city_id:"5", img:"https://i.pinimg.com/736x/6a/fd/28/6afd28d91679eb4aece88fb65f7d6711.jpg")
designer52=Designer.create!(name:"LANDLORD", city_id:"4", img:"https://1.bp.blogspot.com/-it6cnxqbOto/Wn1VSseVNDI/AAAAAAADM1w/N0d_8vjOlFMU5jA77R5kfe5XXXrXLeGBQCLcBGAs/s1600/leila-jacue-landlord-backstage-36.jpg")
designer53=Designer.create!(name:"LANVIN", city_id:"2", img:"http://hero-live.s3.amazonaws.com/wp-content/uploads/2018/06/24124629/Lanvin-SS19-HERO-7-1132x620-1529844732.jpg")
designer54=Designer.create!(name:"LEMAIRE", city_id:"2", img:"https://pmcwwd.files.wordpress.com/2018/01/lemaire-mens-fall-2018-paris-fashion-week-4235.jpg?w=640&h=415&crop=1")
designer55=Designer.create!(name:"LES HOMMES", city_id:"3", img:"https://pmcwwd.files.wordpress.com/2018/01/dav_0981.jpg?w=1024")
designer56=Designer.create!(name:"LIAM HODGES", city_id:"1", img:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2019%2F02%2Fliam-hodges-slick-trash-spring-summer-2019-2.jpg?q=75&w=800&cbr=1&fit=max")
designer57=Designer.create!(name:"LOEWE", city_id:"2", img:"https://www.theskinnybeep.com/wp-content/uploads/2019/02/2019-Backstage-Loewe-Models.jpg")
designer58=Designer.create!(name:"LOUIS VUITTON", city_id:"2", img:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2018%2F06%2Fvirgil-abloh-louis-vuitton-mens-paris-fashion-week-spring-summer-2019-backstage-123.jpg?q=75&w=1000&cbr=1&fit=max")
designer59=Designer.create!(name:"MAISON MARGIELA", city_id:"2", img:"https://www.backstagetales.com/wp-content/uploads/2017/07/0.jpg")
designer60=Designer.create!(name:"MAISON MIHARA YASUHIRO", city_id:"2", img:"http://fuckingyoung.es/wp-content/uploads/2017/06/Maison-Mihara-Yasuhiro-SS18-Backstage_fy20.jpg")
designer61=Designer.create!(name:"MARCELO BURLON COUTY OF MILAN", city_id:"3", img:"https://images.businessoffashion.com/boards/marcelo-burlon-county-of-milan/menswear-autumn-2018/milan-fashion-week/men/aa33740c70e29ed46ac311a16fe9fc8c-5a5a75e7a2ce3.jpeg?auto=format%2Ccompress&crop=top&fit=crop&h=687&w=458")
designer62=Designer.create!(name:"MARNI", city_id:"3", img:"https://i.pinimg.com/originals/a2/00/24/a200244fe520f2a99d42957ca127f393.jpg")
designer63=Designer.create!(name:"MISSONI", city_id:"3", img:"https://adamkatzsinding.com/wp-content/uploads/2017/11/Le-21eme-Adam-Katz-Sinding-Backstage-Missoni-Milan-Fashion-Week-Mens-Fall-Winter-2017-2018_AKS0872-900x600.jpg")
designer64=Designer.create!(name:"MOSCHINO", city_id:"3", img:"https://i.pinimg.com/originals/f1/d7/84/f1d78470903169482d147623e79c6036.jpg")
designer65=Designer.create!(name:"MSGM", city_id:"3", img:"https://dazedimg-dazedgroup.netdna-ssl.com/786/azure/dazed-prod/1240/3/1243043.jpg")
designer66=Designer.create!(name:"MUNSOO KWON", city_id:"5", img:"https://i2.wp.com/ignitemodelsblog.com/wp-content/uploads/2017/06/Ricky_MunsooKwon2.png")
designer67=Designer.create!(name:"N.HOLLYWOOD", city_id:"4", img:"https://adamkatzsinding.com/wp-content/uploads/2018/12/Adam-Katz-Sinding-Backstage-N-Hoolywood-New-York-Fashion-Week-Mens-Spring-Summer-2019_AKS4775-900x1350.jpg")
designer68=Designer.create!(name:"NEIL BARRETT", city_id:"3", img:"http://www1.pictures.zimbio.com/gi/Neil+Barrett+Backstage+Milan+Men+Fashion+Week+VQpiChlD70Ul.jpg")
designer69=Designer.create!(name:"OAMC", city_id:"2", img:"https://static1.squarespace.com/static/568cc44857eb8d622b8e99b6/58abb70d20099e0b12533879/58abb70edb29d6ca0cec6676/1487648529375/oamc-2017-fall-winter-backstage-102.jpg?format=1500w")
designer70=Designer.create!(name:"OLIVER SPENCER", city_id:"1", img:"https://static2.fashionbeans.com/wp-content/uploads/2016/02/spencerrankin12.jpg")
designer71=Designer.create!(name:"OVERCOAT", city_id:"4", img:"https://overcoatnyc.com/smedia/ocoat/cached/dscf8041-jpg/dscf8041-jpg-960x0-R-100.jpeg")
designer72=Designer.create!(name:"PAUL SMITH", city_id:"2", img:"https://media.paulsmith.com/media/displays/image/s/s/ss18-stories-paul-smith-show-backstage-sonny-8.jpg")
designer73=Designer.create!(name:"PHOEBE ENGLISH", city_id:"1", img:"https://s.yimg.com/ny/api/res/1.2/SovfRJfJjuBug7Lp.tLr.w--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/https://media.zenfs.com/en/wwd_409/2e935814af726dae6fd0d41941903f0a")
designer74=Designer.create!(name:"PRADA", city_id:"3", img:"http://graphics8.nytimes.com/images/2013/06/24/t-magazine/24scene-prada-slide-W6HA/24scene-prada-slide-W6HA-jumbo.jpg")
designer75=Designer.create!(name:"QASIMI", city_id:"1", img:"https://i.pinimg.com/originals/34/2f/bc/342fbcf88b3aa0fd9677901a506f2308.jpg")
designer76=Designer.create!(name:"RÆBURN", city_id:"1", img:"http://cdn.purple.fr/c0d0bc62635055bf9058969b97ec6c87/static.purple.fr/2018/06/SDG7257-copie-820x550.jpg/820x550/SDG7257-copie-820x550.jpg")
designer77=Designer.create!(name:"RICK OWENS", city_id:"2", img:"https://callvalerio.com/wp-content/uploads/Rick-Owens-RTW-SS18-Paris-4222-1024x683.jpg")
designer78=Designer.create!(name:"ROBERT GELLER", city_id:"4", img:"https://adamkatzsinding.com/wp-content/uploads/2016/02/Le-21eme-Adam-Katz-Sinding-Backstage-Robert-Geller-New-York-Fashion-Week-Mens-Fall-Winter-2016-2017_AKS1388.jpg")
designer79=Designer.create!(name:"ROBERTO CAVALLI", city_id:"3", img:"https://assets.vogue.com/photos/55c650c108298d8be21590d4/master/pass/roberto-cavalli-001-1366.jpg")
designer80=Designer.create!(name:"SACAI", city_id:"2", img:"https://pmcwwd.files.wordpress.com/2016/01/bkstg-sacai-men-rtw-fall-s16-da-0012.jpg")
designer81=Designer.create!(name:"SAINT LAURENT", city_id:"2", img:"https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/SAINT_LAURENT_TRAVIS_PORTRAIT_01_xxh8lg/travis-scott-saint-laurent-mens-2019-ss-campaign.jpg")
designer82=Designer.create!(name:"SALVATORE FERRAGAMO", city_id:"3", img:"https://www.thefashionisto.com/wp-content/uploads/2014/12/Salvatore-Ferragamo-Spring-Summer-2015-Campaign-Arthur-Gosse-002.jpg")
designer83=Designer.create!(name:"SAUL NASH", city_id:"1", img:"https://fgukmagazine.com/wp-content/uploads/2019/01/SAUL-NASH-LFWM_-5-of-5.jpg")
designer84=Designer.create!(name:"SUNDAE SCHOOL", city_id:"4", img:"http://fuckingyoung.es/wp-content/uploads/2018/07/Sundae-School-SS19-Backstage_fy9.jpg")
designer85=Designer.create!(name:"THOM BROWNE", city_id:"2", img:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/02/13/14/5793394.jpg?w968h681")
designer86=Designer.create!(name:"TOD\'S", city_id:"3", img:"https://i.pinimg.com/originals/f8/3a/95/f83a9515b373b4667a225cb2ea79c289.jpg")
designer87=Designer.create!(name:"TODD SNYDER", city_id:"4", img:"http://static1.squarespace.com/static/5b857714620b854721b8e6da/5b8d76cf758d467f377cadd9/5c6599826e9a7f62fdfee402/1551495100093/20190204_TODD_SYNDER-2024.JPG?format=1500w")
designer88=Designer.create!(name:"TOM FORD", city_id:"4", img:"https://adamkatzsinding.com/wp-content/uploads/2018/04/Le-21eme-Adam-Katz-Sinding-Backstage-Tom-Ford-New-York-Fashion-Week-Mens-Fall-Winter-2018-2019_AKS7520-900x1350.jpg")
designer89=Designer.create!(name:"VALENTINO", city_id:"2", img:"https://valentino-cdn.thron.com/delivery/public/image/valentino/f95a90c8-2607-4a70-aed6-ea01f11957f1/VA14I6D/std/1280x0/progetto_dcatalogue_uomoss2018_01_03.jpg?quality=80&format=webp")
designer90=Designer.create!(name:"VIVIENNE WESTWOOD", city_id:"2", img:"http://www.crash.fr/wp-content/uploads/2015/06/MG_7169-1024x683.jpg")
designer91=Designer.create!(name:"WALES BONNER", city_id:"1", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCSkEkuUV4eu5n1bjsQ5ZF-l71vaXl4LuIpTe-Y4dSqjIOOxne")
designer92=Designer.create!(name:"WOOD WOOD", city_id:"1", img:"https://pmcwwd.files.wordpress.com/2019/01/wood-wood-mens-fall-2019-london-fashion-week-01.jpg")
designer93=Designer.create!(name:"WOOLRICH", city_id:"3", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWN6JoPt_gE7TNIFRbvrnEgg8MMrajnCX6atBXomPs0B3Tn3_c")
designer94=Designer.create!(name:"WOOYOUNGMI", city_id:"2", img:"https://theimpression.com/wp-content/uploads/2018/06/wooyoungmi-m-bks-g-rs19-9296.jpg")
designer95=Designer.create!(name:"YANG LI", city_id:"2", img:"https://assets.vogue.com/photos/5b2d2c3e7e0ad8413011aad8/master/pass/00021-yang-li-mens-SS19-Vogue-2019-pr.jpg")
designer96=Designer.create!(name:"YOHJI YAMAMOTO", city_id:"2", img:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2017%2F01%2Fbackstage-adidas-y-3-yohji-yamamoto-paris-fashion-week-1.jpg?q=75&w=1000&cbr=1&fit=max")
