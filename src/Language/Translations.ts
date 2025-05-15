export type Language = 'en' | 'da'; // Angiver de mulige sprog

export const translations: Record<Language, Record<string, string>> = {
  en: {
    /*Header / Navbar */
    contact: "Contact",
    home: "Home",

    /* Main Page */
    introductionTitle: "Introduction - a little about me",
    introductionText: "I am a creative and curious person with many interests. In my spare time, I work with graphic design and have made logos, banners and simple "
    +"animations as a freelancer. I am also interested in music production and spend time experimenting with beats and sound. In addition, I spend my time on "
    +"strength training and logical puzzle games to keep my body and brain sharp. I'm also learning Spanish because I like to challenge myself and expand my horizons.",
    workTitle: "Work Experience",
    work3Title: "DATA TECHNICIAN INTERN",
    work3Place: "TEC INTERNSHIP CENTER",
    work3Date: "October 2022 - April 2025",
    work2Title: "SERVICE EMPLOYEE",
    work2Place: "KVICKLY",
    work2Date: "February 2020 - March 2020",
    work1Title: "PAPERBOY",
    work1Place: "FK DISTRIBUTION",
    work1Date: "December 2017 - July 2019",

    tasksTitle: "Tasks",
    work3Tasks: "Participating in the development of an OSH app in Microsoft PowerApps as part of an internal project. The tasks included design, development, "
    +"testing and documentation. In addition, I have worked with C#, .NET, databases, Git and general software development. Focus on using object-oriented "
    +"programming and building solutions similar to those encountered in the business world.",
    work2Tasks: "Serving customers at the checkout, trimming and replenishing goods on the shelves, as well as working in "+
    "the bakery department with preparation, packing and customer service.",
    work1Tasks: "Distributing newspapers and advertisements in the local area, planning the route, managing deadlines and taking responsibility for correct delivery",

    skillsTitle: "What I became particularly good at",
    work3Skills: "Working project-oriented, collaborating in a development team, finding technical solutions and structuring tasks from idea to finished solution",
    work2Skills: "To work in a structured and efficient manner, provide good customer service, keep an overview during busy periods and collaborate with colleagues across departments.",
    work1Skills: "Work independently and structured, meet deadlines and take responsibility for the task from start to finish.",
  },
  da: {
    /*Header / Navbar */
    contact: "Kontakt",
    home: "Hjem",

    /* Main Page */
    introductionTitle: "Introduktion - lidt om mig",
    introductionText: "Jeg er en kreativ og nysgerrig person med mange interesser. I min fritid arbejder jeg med grafisk design og har lavet logoer, bannere "
    +"og simple animationer som freelancer. Jeg interesserer mig også for musikproduktion og bruger tid på at eksperimentere med beats og lyd. "
    +"Derudover bruger jeg min tid på styrketræning og logiske puzzlespil for at holde krop og hjernen skarp. Jeg er også i gang med at lære spansk, "
    +"fordi jeg godt kan lide at udfordre mig selv og udvide mine horisonter.",

    workTitle: "Arbejdserfaring",
    work3Title: "DATATEKNIKERELEV",
    work3Place: "TEC PRAKTIKCENTER",
    work3Date: "Oktober 2022 - April 2025",
    work2Title: "SERVICEMEDARBEJDER",
    work2Place: "KVICKLY",
    work2Date: "Februar 2020 - Marts 2020",
    work1Title: "AVISBUD",
    work1Place: "FK DISTRIBUTION",
    work1Date: "December 2017 - Juli 2019",

    tasksTitle: "Arbejdsopgaver",
    work3Tasks: "Deltagelse i udviklingen af en arbejdsmiljø-app i Microsoft PowerApps som del af et internt projekt. "
    +"Opgaverne omfattede både design, udvikling, test og dokumentation. Derudover har jeg arbejdet med C#, .NET, databaser, Git og generel softwareudvikling. "
    +"Fokus på at anvende objektorienteret programmering og opbygning af løsninger, der ligner dem man møder i erhvervslivet.",
    work2Tasks: "Betjening af kunder i kassen, trimning og opfyldning af varer på hylderne, samt arbejde i bagerafdelingen med klargøring, pakning og kundebetjening.",
    work1Tasks: "Uddeling af aviser og reklamer i lokalområdet, planlægning af rute, håndtering af tidsfrister og ansvar for korrekt levering.",

    skillsTitle: "Det blev jeg særlig god til",
    work3Skills: "At arbejde projektorienteret, samarbejde i et udviklingsteam, finde tekniske løsninger og strukturere opgaver fra idé til færdig løsning.",
    work2Skills: "At arbejde struktureret og effektivt, yde god kundeservice, holde overblik i travle perioder og samarbejde med kolleger på tværs af afdelinger.",
    work1Skills: "Uddeling af aviser og reklamer i lokalområdet, planlægning af rute, håndtering af tidsfrister og ansvar for korrekt levering.",

  }
};
