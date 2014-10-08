Accounts.onCreateUser(function(options, user) {
    user.fullName = options.profile.fullName ? options.profile.fullName : '';
    user.picture =  options.profile.picture ? options.profile.picture : '';
    user.company = options.profile.company ? options.profile.company : '';
    user.position = options.profile.position ? options.profile.position : '';
    user.profile = {};
    user.profile.title =  options.profile.title ? options.profile.title : '';
    user.profile.fullName = options.profile.fullName ? options.profile.fullName : '';
    user.profile.first_name = options.profile.first_name ? options.profile.first_name : ''; ;
    user.profile.last_name = options.profile.last_name ? options.profile.last_name : ''; ;
    // user.profile.picture =  options.profile.picture ? options.profile.picture : '';
    // user.profile.email = options.profile.email;
    user.profile.company = options.profile.company ? options.profile.company : '';
    user.profile.about = options.profile.about ? options.profile.about : '';
    user.profile.links= [];
    user.profile.gender = "";
    user.profile.support = false;
    user.profile.moderator = false;
    user.profile.admin = false;
    user.profile.socialLinks = [];
    user.profile.personalFiles = [];

    if (options.profile.facebook)
      user.profile.socialLinks = [{
        linkName: 'Facebook',
        linkUrl: options.profile.facebook}]
    if (options.profile.twitter)
      user.profile.socialLinks = [{
        linkName: 'Twitter',
        linkUrl: options.profile.twitter}]
    if (options.profile.google)
      user.profile.socialLinks = [{
        linkName: 'Google',
        linkUrl: options.profile.google}]
    if (options.profile.github)
      user.profile.socialLinks = [{
        linkName: 'GitHub',
        linkUrl: options.profile.github}]
    if (options.profile.linkedin)
      user.profile.socialLinks = [{
        linkName: 'LinkedIn',
        linkUrl: options.profile.linkedin}]
    user.roles = {};
    user.emailSent = false;
    user.roles.speaker = true;
    user.roles.exhibitor = false;
    user.roles.admin = false;
    user.roles.moderator = false;
    user.roles.support = true;

    user.attendee = false;
    user.speaker = true;
    user.label = ['speaker'];
    user.track = [];
    user.list = ['speaker'];
    user.management = true;
    user.isVisible = true;
    user.allowContact = true;
    user.welcome = false;
    user.type = 8;
    user.addedTo = options.profile.addedTo ? options.profile.addedTo : [];
    user.favoritedBy = [];
    user.group = '',
    user.createdAt = new Date();
    user.paginated = true;

  return user;
})

Meteor.methods({
  createDemoData: function () {

           if (Meteor.users.find({speaker: true}).count() === 0) {

          var profile = {
            fullName : "Kitty Wright",
            title : "Dr",
            company : "BBC films",
            position : "Chief Producer",
            about: "Dr Kitty Wright won the BBC's Dennis Potter Award for his BBC film, Indian Dream. In 2006, he was nominated for a BAFTA for his short film Lucky, which was also short-listed for an Oscar in 2007. His first feature film Mad, Sad and Bad was released in cinemas in 2009. His second feature length film, Lucky (2012) won 8 international film festival awards and will be released in Spring 2013.",
            picture: "http://api.randomuser.me/0.3.2/portraits/women/3.jpg",
            addedTo : ['agenTime001'],
            speaker: true,
            label: ['speaker']

          }
          var options = {
            username : Random.id(),
            profile : profile
          }
          Accounts.createUser(options);


        var profile = {
          fullName : "Juan Murray",
          title : "Mr",
          company : "LUKOIL Lubricants Company",
          position : "Head of Base Oils and Wax Export Department",
          about: "Juan Murray graduated from Perm State University (Russia) with a degree in International Business and Manchester Metropolitan University in Business Studies (UK). He was then employed at LUKOIL Lubricants Company. Spending 6 years on various positions in the company he is now the Head of base oils and wax export Department. As a leader of the base oils trading team, the companys top tier, he is distributing the product to numerous destinations across Asia, Europe, Africa and Americas. ",
          picture:  "http://api.randomuser.me/0.3.2/portraits/men/39.jpg",
          addedTo: ['agenTime002', 'agenTime004', ],
          speaker: true,
        }
        var options = {
          username : Random.id(),
          profile : profile
        }
       var newUser = Accounts.createUser(options);

       console.log('%c newUser   ',  'background: #B3CC57; color: white; padding: 1px 15px 1px 5px;', newUser);
       console.log('%c END newUser   ',  'background: #B3CC57; color: white; padding: 1px 35px 1px 5px;');



        var profile = {
          fullName : "Leah Ryan",
          title : "Ms",
          company : "SIP Ltd.",
          position : "Development & Quality Assurance Manager, Technical Development & Support Department",
          about: "Leah has been in the oil and petroleum additive industry for over 40 years. She began in R & D at BP and then spent 25 years with Afton Chemical, in a variety of technical and marketing roles. Leah Ryan has now been with SIP for over 12 years and is responsible for the development of fluids for premium automotive and industrial lubricants. She also manages the ISO Quality System.",
          picture:  "http://api.randomuser.me/0.3.2/portraits/women/2.jpg",
          addedTo: ['agenTime003'],
          speaker: true,
        }
        var options = {
          username : Random.id(),
          profile : profile
        }
        var newUser = Accounts.createUser(options);



      var profile = {
        fullName : "Jakc Harper",
        title : "Mr",
        company : "Institute of Psychiatry",
        position : "Lecturer",
        about: "Jakc Harper is a lecturer in Child and Adolescent Psychiatry at the Institute of Psychiatry in London. He trained and worked at the University of Edinburgh and has also worked in the University of Malawi. His main interests are Liaison psychiatry, Psychoimmunology and Global mental health. He has a longstanding interest in undergraduate education and had the privilege of teaching so many excellent students in both Edinburgh and London.",
        picture:  "http://api.randomuser.me/0.3.2/portraits/men/8.jpg",
        addedTo: ['agenTime004'],
        speaker: true,
      }
      var options = {
        username : Random.id(),
        profile : profile
      }
      Accounts.createUser(options);




    var profile = {
      fullName : "Rodney Simmmons",
      title : "Mr",
      company : "SK Lubricants Limited",
      position : "Sales Manager",
      about: "Rodney Simmmons is Sales Manager for SK Lubricants Europe. He has previously worked as European Business Manager for Lubrizol (commercial vehicle additives) and Sales Manager for Ciba Lubricant Additives in Benelux. Following a PhD in Chemistry at Liverpool University, Paul has worked in the oil and chemical industry for the past 20 years, starting as Research Team Leader with Ciba, before moving directly into sales in 1998.",
      picture:  "http://api.randomuser.me/0.3.2/portraits/men/41.jpg",
      addedTo: ['agenTime005','agenTime007'],
      speaker: true,
    }
    var options = {
      username : Random.id(),
      profile : profile
    }
    Accounts.createUser(options);

    var profile = {
      fullName : "Owen Brown",
      title : "",
      company : "ExxonMobil Chemical Company Ltd",
      position : "Marketing Technical Support Engineer",
      about: "Owen Brown is a Marketing Technical Support Engineer for ExxonMobil Chemicalâ€™s Synthetics business. He has worked with the lubricants industry in a variety of areas for more than 18 years.\nA native of Edinburgh, Scotland, he served for eight years as a marine engineer officer with the Royal Fleet Auxiliary before going on to earn an honours degree in Mechanical Engineering from Edinburgh University. He then joined Mobil Oil Company at Coryton Refinery in the UK working as a Project Engineer, Maintenance Controller and Reliability Engineer. He began acquiring his expertise in the lubricants area in 1995 in Lubricants Marketing, where he worked with original equipment builders to obtain lubricant approvals. In 1998, he moved to the Mobil Research Centre at Gravenchon, France, working on marine and gas engine oil development. Following the merger of Exxon and Mobil, he remained at the centre, providing technical support to the lubricants business. He returned to the UK in 2006 and joined the Synthetics business the following year. \nIn his current assignment, he draws on his extensive knowledge of lubricants to help customers use synthetic base stocks to develop innovative applications that can meet their performance requirements.",
      picture:  "http://api.randomuser.me/0.3.2/portraits/men/43.jpg",
      addedTo: ['agenTime012'],
      speaker: true,
    }
    var options = {
      username : Random.id(),
      profile : profile
    }
    Accounts.createUser(options);

      var profile = {
        fullName : "Erin Bell",
        title : "Dr",
        company : "Kline Management Consulting",
        position : "Senior Vice President, Energy",
        about: "Erin Bell directs the activities for Klines Energy Practice and is based in the firmâ€™s headquarters in Parsippany, NJ. \n\nGeeta has 18 + years experience serving clients in in the global base stocks, finished lubricants, lubricant and fuel additives, waxes, asphalt, process oils, and other related downstream petroleum specialty markets. She has specific expertise in strategy and market development, technology and economic feasibility analysis, benchmarking analysis, customer satisfaction and image analysis, mergers and acquisitions support, and other business analyses.\n\nGeeta is a member of STLE. She is a sought-after speaker in various industry forums in Asia, Europe, the Middle East, and Latin America. She has been a moderator and speaker at various ICIS, NPRA, STLE, Argus, ACI F&L and ILMA conferences, and has authored articles for various industry and trade journals,\nincluding Lubes N Greases, LubeReport, F&L Asia, ICIS Chemical Business, Tribology & Lubrication Technology, and Compounding.\n\nPrior to joining Kline, Geeta worked for KPMG in its Management Consulting division, PTC International in the Retailing division, and Bharat International in its Lubricants Marketing division. \n\nShe earned a B.S. from the University of Pune, India and an MBA from the Symbiosis Institute of Business Management, a top ten business school in India. She also holds an MBA from Loyola College in Baltimore, MD.",
        picture:  "http://api.randomuser.me/0.3.2/portraits/women/24.jpg",
        addedTo: ['agenTime007', 'agenTime013'],
        speaker: true,
      }
      var options = {
        username : Random.id(),
        profile : profile
      }
      Accounts.createUser(options);

    var profile = {
      fullName : "Salvador Henderson",
      title : "",
      company : "NYNAS AB",
      position : "Market Manager LUB",
      about: "Salvador Henderson received my masterÂ´s degree in chemical engineering from the Graz University of Technology, the masterÂ´s thesis is on cleaning of metalworking fluids, after that he did a PhD study on analytical methods of speciation on the same university. He received his PhD in 2004.\n\nLeaving academia he joined Lenzing, an Austrian cellulosic fibers company, joining in the innovations department of Lenzing, he was responsible for several R&D projects of the company.\nIn 2006 he moved on to Nynas, being responsible for sales into Central Europe (Austria/Hungary/Romania/Bulgaria) and here for sales into the tire, chemical, electrical & lubes industry in the region.\nBeside that he joined industry and standardization bodies such as the OVE, the Austrian sub-committee of the IEC.\nAfter several years spent with heavy travelling Central & Eastern Europe he was promoted to become a global account manager within Nynas, taking global responsibility for some of NynasÂ´ biggest partners in the electrical, tire and base oil industry.\nAs of last December has been promoted to become NynasÂ´ Market Manager for the LUB segment within Nynas.",
      picture:  "http://api.randomuser.me/0.3.2/portraits/men/34.jpg",
      addedTo: ['agenTime001'],
      speaker: true,
    }
    var options = {
      username : Random.id(),
      profile : profile
    }
    Accounts.createUser(options);


    var profile = {
      fullName : "Dean Nelson",
      title : "",
      company : "ATIEL ",
      position : "Chairman, REACH Working Group",
      about: "Dean Nelson has been involved with the European Chemical Regulation â€œREACHâ€ since its original development and implementation. He currently chairs the REACH working group of the technical association of the European Lubricants Industry, ATIEL. The focus of the group has been to simplify and\nstandardise approaches for the Lubricants sector to aid implementing REACH. The recent completion and launch of the generic exposure scenarios is a significant step towards this.",
      picture:  "http://api.randomuser.me/0.3.2/portraits/men/3.jpg",
      addedTo: ['agenTime007','agenTime009'],
      speaker: true,
    }
    var options = {
      username : Random.id(),
      profile : profile
    }
    var newUser = Accounts.createUser(options);



    var profile = {
      fullName : "Ian Appleton",
      title : "",
      company : "Kerax Limited",
      position : "Managing Director",
      about: "Comprising over 25 years in the Base Oil, Wax & Lubricants Industry, lan's expertise is based on solid practical and managerial experience with three major oil companies in domestic and global international markets.\n\nBy providing total commitment and dedication to the high standards required in business Ian progressed through a range of roles at Mobil, BP, Castrol brand and H&R Wasag. After finishing his training and experience in Mechanical & Production Engineering, Ian went on to start his sales and marketing career with Mobil selling lubricants to industry. This quickly moved on to Motor Oils,\nAgriculture, Base Oils and then Wax with responsibility for direct sales and sales through Distribution.These roles grew to include Global Strategic Marketing and International Business Development. During this time lan also has been experienced in M&A for key purchases and asset sales for the businesses he\nhas worked for.\n\nIn 2006 Ian saw the opportunity and took the challenge in purchasing his own business with a Management Buy Out; realising a lifelong dream in buying a UK wax blend plant (Kerax Limited) from his employer then going on to establish the lubricants business - Euro Oils Ltd - in early 2009 bringing together the full range of lan's skills.\n\nKerax is the only large scales, dedicated wax plant in the UK, serving business and industry worldwide.",
      picture:  "http://i.imgur.com/QnEbcYT.jpg",
      addedTo: ['agenTime009'],
      speaker: true,
    }
    var options = {
      username : Random.id(),
      profile : profile
    }
    var newUser = Accounts.createUser(options);



    var profile = {
      fullName : "David Whitby",
      title : "",
      company : "Pathmaster Marketing",
      position : "Chief Executive",
      about: "David Whitby is Chief Executive of Pathmaster Marketing Ltd, a business development consultancy for the international downstream oil, gas and energy industries, which he founded in 1992. Pathmaster Marketing advises clients throughout the world on business planning, business strategy, market\ndevelopment and technology commercialisation for lubricants, fuels and novel energies.\n\nAn Australian by birth, David began his career with British Petroleum, as a process chemist at the Kwinana refinery in Western Australia. He worked for BP for 22 years in a number of management positions, including Marketing and Business Development Manager at Kalsep (an advanced separations\ncompany), Business Manager at BP Ventures, Project Leader for Industrial Lubricants at BP Research and Marketing Services Officer at Duckhams Oils.\n\nDavid is also Programme Director for Lubricants Courses at the Oxford Princeton Programmeâ€™s College of Petroleum and Energy Studies in Oxford, where he is responsible for planning the overall lubricants course programme and for the content and marketing of all the courses. He also writes the bi-monthly â€œWorldwideâ€ column for â€œTribology and Lubrication Technologyâ€ and is a regular contributor to â€œLubes â€˜nâ€™ Greasesâ€.",
      picture:  "http://i.imgur.com/X1JlRFQ.jpg",
      addedTo: ['agenTime009'],
      speaker: true,
    }
    var options = {
      username : Random.id(),
      profile : profile
    }
    Accounts.createUser(options);


          }


    if (Agenda.find().count() === 0 && AgendaTimes.find().count() === 0) {
             var agendaId = Agenda.insert({
                   "_id" : 'Agen001',
                 "sesionname" :'Registration - tea + coffee',
                 "location" : 'PaRT001',
                 // "agendaspeakers" : ['Speak001'],
                 "description" : "Coffe, tea and bisquits",
                 "links": ["http://google.com"],
                 "documents": ["http://documentlink.com"],
                 "attendance": false,
                 "catId" : "CaT113",
                 "feedback" : true,
                 'feedbackset' : true,
                 "catname" : 'BREAK',
                 paginated: true,
                 "catcolor" : 'colorB',
                 "createdAt": new Date(),
                 "map" : 'MaP0001',
                 // "favoritedBy": [],
                 type:1});
             var agendaTimeID = AgendaTimes.insert({
                "_id": 'agenTime001',
                "starttime" : moment().subtract(150, 'm').toDate(),
                "endtime" : moment().subtract(120, 'm').toDate(),
               "day": moment().format("YYYY-MM-DD"),
               "location": 'PaRT002',
               "groupEnabled": false,
               "groups":[],
               "agendaId": agendaId,
               paginated: true,
               "attendedEnabled": false,
               "trackEnabled": false,
               // "feedbackset": true,
               "map" : 'MaP0001',
               "attendedBy": [],
               "createdAt": new Date(),
             })

                  agendaId = Agenda.insert({
                   "_id" : 'Agen002',
                     "sesionname" :'Welcome - Charlotte Wilson Jones',

                     //
                     "description" : "Welcome - Charlotte Wilson Jones. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",

                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT111",
                     "feedback" : true,
                     "catname" : 'LECTURE',
                     "catcolor" : 'colorC',
                     'feedbackset' : true,
                     paginated: true,
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     // "favoritedBy": [],
                     type:1});
       agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime002',
        "starttime" : moment().subtract(120, 'm').toDate(),
        "endtime" : moment().subtract(90, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "location": 'PaRT002',
        "groupEnabled": false,
        "groups":[],
        "agendaspeakers" : ['Speak002'],
        "agendaId": agendaId,
        "attendedEnabled": false,
        "trackEnabled": false,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        paginated: true,
        "createdAt": new Date(),
      })


                  agendaId = Agenda.insert({
                  "_id" : 'Agen003',
                     "sesionname" :'Psychiatry under fire',


                     "description" : "Sir Simon Wessely - Psychiatry under fire. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT111",
                     "feedback" : true,
                     paginated: true,
                     "catname" : 'LECTURE',
                     "catcolor" : 'colorC',
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     // "favoritedBy": [],
                     type:1});
       agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime003',
        "starttime" : moment().subtract(90, 'm').toDate(),
        "endtime" : moment().subtract(60, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "location": 'PaRT002',
        "groupEnabled": false,
        "groups":[],
        "agendaId": agendaId,
        "attendedEnabled": false,
        "trackEnabled": false,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        paginated: true,
        "agendaspeakers" : ['Speak003', 'Speak001'],
        "createdAt": new Date(),
      })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen004',
                     "sesionname" :'A Career in Military Psychiatry',

                     "description" : "Professor Neil Greenberg - A Career in Military Psychiatry. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT111",
                     "feedback" : true,
                     "catname" : 'LECTURE',
                     paginated: true,
                     "catcolor" : 'colorC',
                     'feedbackset' : true,
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
       agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime004',
       "favoritedBy": [],
        "starttime" : moment().subtract(60, 'm').toDate(),
        "endtime" : moment().subtract(30, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "location": 'PaRT002',
        "groupEnabled": false,
        "groups":[],
        "agendaId": agendaId,
        paginated: true,
        "attendedEnabled": false,
        "trackEnabled": false,
        // "feedbackset": true,
        "agendaspeakers" : ['Speak004', 'Speak002'],
        "map" : 'MaP0001',
        "attendedBy": [],
        "createdAt": new Date(),
      })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen005',
                     "sesionname" :'Poetry Reading',
                                    "description" : "Poetry Reading. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     paginated: true,
                     "catId" : "CaT114",
                     "feedback" : true,
                     // 'feedbackset' : false,
                     "catname" : 'CONTEST',
                     "catcolor" : 'colorL',
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
      agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime005',
       "favoritedBy": [],
        "starttime" : moment().toDate(),
        "agendaspeakers" : ['Speak005'],
        "endtime" : moment().add(30, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "location": 'PaRT005',
        "groupEnabled": false,
        "groups":[],
        "agendaId": agendaId,
        "attendedEnabled": false,
        paginated: true,
        "trackEnabled": false,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        "createdAt": new Date(),
      })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen006',
                     "sesionname" :'Coffee break',
                     "agendaspeakers" : [],
                     "description" : "Coffee break",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT113",
                     "feedback" : true,
                     // 'feedbackset' : false,
                     "catname" : 'BREAK',
                     paginated: true,
                     "catcolor" : 'colorB',
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
                  agendaTimeID = AgendaTimes.insert({
                    "_id": 'agenTime006',
                     "favoritedBy": [],
                    "starttime" : moment().add(30, 'm').toDate(),
                    "endtime" : moment().add(60, 'm').toDate(),
                    "day": moment().format("YYYY-MM-DD"),
                    "location": 'PaRT007',
                    "groupEnabled": false,
                    "groups":[],
                    "agendaId": agendaId,
                    "attendedEnabled": false,
                    "trackEnabled": false,
                    // "feedbackset": true,
                    paginated: true,
                    "map" : 'MaP0001',
                    "attendedBy": [],
                    "createdAt": new Date(),
                  })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen007',
                     "sesionname" :'Workshop 1',

                    "description" : "Workshop 1. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": true,
                     "catId" : "CaT112",
                     "feedback" : true,
                     paginated: true,
                     // 'feedbackset' : false,
                     "catname" : 'WORKSHOP',
                     "catcolor" : 'colorF',
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
      agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime007',
       "favoritedBy": [],
       "agendaspeakers" : ['Speak007','Speak005','Speak009'],
        "starttime" : moment().add(60, 'm').toDate(),
        "endtime" : moment().add(90, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "location": 'PaRT003',
        "groupEnabled": false,
        "groups":[],
        "agendaId": agendaId,
        "attendedEnabled": true,
        "trackEnabled": false,
        paginated: true,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        "createdAt": new Date(),
      })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen008',
                     "sesionname" :'Lunch',
                     "description" : "Lunch",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT113",
                     paginated: true,
                     "feedback" : true,
                     // 'feedbackset' : false,
                     "catname" : 'BREAK',
                     "catcolor" : 'colorB',
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
                  agendaTimeID = AgendaTimes.insert({
                    "_id": 'agenTime008',
                    "starttime" : moment().add(90, 'm').toDate(),
                     "agendaspeakers" : [],
                     "favoritedBy": [],
                    "endtime" : moment().add(120, 'm').toDate(),
                    "day": moment().format("YYYY-MM-DD"),
                    "location": 'PaRT006',
                    "groupEnabled": false,
                    "groups":[],
                    "agendaId": agendaId,
                    "attendedEnabled": false,
                    "trackEnabled": false,
                    // "feedbackset": true,
                    "map" : 'MaP0001',
                    paginated: true,
                    "attendedBy": [],
                    "createdAt": new Date(),
                  })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen009',
                     "sesionname" :'Sub-Specialities Forum',

                     "description" : "Sub-Specialities Forum. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": true,
                     "catId" : "CaT112",
                     paginated: true,
                     "feedback" : true,
                     // 'feedbackset' : false,
                     "createdAt": new Date(),
                     "catname" : 'WORKSHOP',
                     "catcolor" : 'colorF',
                     "map" : 'MaP0001',
                     type:1});
      agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime009',
       "favoritedBy": [],
       "agendaspeakers" : ['Speak010','Speak009','Speak011'],
        "starttime" : moment().add(120, 'm').toDate(),
        "endtime" : moment().add(150, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "location": 'PaRT004',
        "groupEnabled": false,
        "groups":[],
        "agendaId": agendaId,
        paginated: true,
        "attendedEnabled": true,
        "trackEnabled": false,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        "createdAt": new Date(),
      })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen010',
                     "sesionname" :'Coffee break',
                     "description" : "Coffee break",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT113",
                     "feedback" : true,
                     // 'feedbackset' : false,
                     "catname" : 'BREAK',
                     "catcolor" : 'colorB',
                     paginated: true,
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
                  agendaTimeID = AgendaTimes.insert({
                    "_id": 'agenTime010',
                    "starttime" : moment().add(150, 'm').toDate(),
                    "endtime" : moment().add(180, 'm').toDate(),
                    "day": moment().format("YYYY-MM-DD"),
                     "favoritedBy": [],
                    "location": 'PaRT004',
                    "groupEnabled": false,
                     "agendaspeakers" : [],
                    "groups":[],
                    paginated: true,
                    "agendaId": agendaId,
                    "attendedEnabled": false,
                    "trackEnabled": false,
                    // "feedbackset": true,
                    "map" : 'MaP0001',
                    "attendedBy": [],
                    "createdAt": new Date(),
                  })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen011',
                     "sesionname" :'How can we make therapeutic progress in psychiatry?',

                     "description" : "Professor Ed Bullmore - How can we make therapeutic progress in psychiatry? Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT111",
                     paginated: true,
                     "feedback" : true,
                     // 'feedbackset' : false,
                     "catname" : 'LECTURE',
                     "catcolor" : 'colorC',
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
      agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime011',
        "starttime" : moment().add(180, 'm').toDate(),
       "favoritedBy": [],
        "endtime" : moment().add(210, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "location": 'PaRT002',
        "groupEnabled": false,
        "groups":[],
        "agendaspeakers" : ['Speak008'],
        "agendaId": agendaId,
        paginated: true,
        "attendedEnabled": false,
        "trackEnabled": false,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        "createdAt": new Date(),
      })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen012',
                     "sesionname" :'AfterBrain Imaging in Psychiatry',

                     "description" : "Professor Steve Williams - â€œBrain Imaging in Psychiatryâ€. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT111",
                     "feedback" : true,
                     paginated: true,
                     // 'feedbackset' : false,
                     "catname" : 'LECTURE',
                     "catcolor" : 'colorC',
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
      agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime012',
        "agendaspeakers" : ['Speak006'],
         "favoritedBy": [],
        "starttime" : moment().add(210, 'm').toDate(),
         "endtime" : moment().add(240, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "location": 'PaRT002',
        "groupEnabled": false,
        "groups":[],
        "agendaId": agendaId,
        "attendedEnabled": false,
        paginated: true,
        "trackEnabled": false,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        "createdAt": new Date(),
      })

                  agendaId = Agenda.insert({
                   "_id" : 'Agen013',
                     "sesionname" :'Cigarettes and maltesers: Why I Chose Psychiatry',
                     "location" : 'PaRT002',

                     "description" : "Dr Max Pemberton - Cigarettes and maltesers: Why I Chose Psychiatry. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": false,
                     "catId" : "CaT111",
                     "feedback" : true,
                     // 'feedbackset' : false,
                     "catname" : 'LECTURE',
                     "catcolor" : 'colorC',
                     paginated: true,
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
      agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime013',
        "starttime" :  moment().add(240, 'm').toDate(),
                     "favoritedBy": [],
        "endtime" :  moment().add(270, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
        "agendaspeakers" : ['Speak007'],
        "location": 'PaRT002',
        "groupEnabled": false,
        "groups":[],
        "agendaId": agendaId,
        "attendedEnabled": false,
        paginated: true,
        "trackEnabled": false,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        "createdAt": new Date(),
      })

                  agendaId = Agenda.insert({
                  "_id" : 'Agen014',
                     "sesionname" :'SOCIAL: MedFest Music Festival and Dinner',
                     "description" : "SOCIAL: MedFest Music Festival and Dinner. Dry heat upon my brow? Oh! time was, when as the sunrise nobly spurred me, so the sunset soothed. No more. This lovely light, it lights not me; all loveliness is anguish to me, since I can ne'er enjoy. Gifted with the high perception, I lack the low, enjoying power; damned, most subtly and most malignantly! damned in the midst of Paradise! Good night&mdash;good night! (WAVING HIS HAND, HE MOVES FROM THE WINDOW.)",
                     "links": ["http://google.com"],
                     "documents": ["http://documentlink.com"],
                     "attendance": true,
                     "catId" : "CaT114",
                     "feedback" : false,
                     paginated: true,
                     // 'feedbackset' : false,
                     "catname" : 'CONTEST',
                     "catcolor" : 'colorL',
                     "createdAt": new Date(),
                     "map" : 'MaP0001',
                     type:1});
      agendaTimeID = AgendaTimes.insert({
        "_id": 'agenTime014',
        "starttime" : moment().add(300, 'm').toDate(),
        "endtime" : moment().add(400, 'm').toDate(),
        "day": moment().format("YYYY-MM-DD"),
       "favoritedBy": [],
        "location": 'PaRT006',
        "groupEnabled": false,
       "agendaspeakers" : [],
        "groups":[],
        "agendaId": agendaId,
        "attendedEnabled": false,
        "trackEnabled": false,
        paginated: true,
        // "feedbackset": true,
        "map" : 'MaP0001',
        "attendedBy": [],
        "createdAt": new Date(),
      })
  }
  }
})