const copy = {
    de: {
        eyebrow: 'Software Developer · Wien',
        tagline: 'Backend-minded engineer, der zuverlässige digitale Systeme entwickelt.',
        intro: 'Masterstudent für Software Engineering an der TU Wien. Ich entwickle skalierbare Webanwendungen, cloud-native Architekturen und Produkte, die komplexe Dinge einfach machen.',
        explore: 'Entdecken',
        profileTitle: 'Profil',
        experienceTitle: 'Erfahrung',
        projectsTitle: 'Ausgewählte Projekte',
        educationTitle: 'Ausbildung',
        skillsTitle: 'Technische Fähigkeiten',
        languagesTitle: 'Sprachen & Interessen',
        interestsTitle: 'Interessen',
        contactTitle: 'Kontakt',
        german: 'Muttersprache (C2)',
        footer: 'Software Developer · Wien / Österreich',
        profile: 'Masterstudent an der Software Engineering an der TU Wien mit Schwerpunkt auf Backend-Entwicklung, Softwarearchitektur und Web-Technologien. Erfahrung in der Konzeption und Umsetzung moderner Microservice- und serverloser Architekturen sowie in der Entwicklung skalierbarer Webanwendungen mit Java, Spring Boot und AWS.'
    },
    en: {
        eyebrow: 'Software Developer · Vienna',
        tagline: 'Backend-minded engineer crafting reliable digital systems.',
        intro: 'Master’s student in Software Engineering at TU Wien. I build scalable web applications, cloud-native architectures and products that make complex things feel simple.',
        explore: 'Explore',
        profileTitle: 'Profile',
        experienceTitle: 'Experience',
        projectsTitle: 'Selected projects',
        educationTitle: 'Education',
        skillsTitle: 'Technical skills',
        languagesTitle: 'Languages & interests',
        interestsTitle: 'Interests',
        contactTitle: 'Contact',
        german: 'Native (C2)',
        footer: 'Software Developer · Vienna / Austria',
        profile: 'Master’s student in Software Engineering at TU Wien, focused on backend development, software architecture and web technologies. Experienced in designing modern microservice and serverless architectures, as well as building scalable web applications with Java, Spring Boot and AWS.'
    }
};
const data = {
    experience: [{
        date: '09/2023 — 09/2024',
        role: {de: 'Frontend Entwickler (Geringfügig)', en: 'Frontend Developer (Part-time)'},
        company: 'hs2n Informationstechnologie GmbH',
        place: {de: 'Villach', en: 'Villach'},
        items: {
            de: ['Design und Entwicklung neuer Features im Frontend mit AngularJS', 'Testen und Bugfixing der Webanwendung'],
            en: ['Designed and developed new frontend features with AngularJS', 'Tested and debugged the web application']
        }
    }, {
        date: '07/2018 — 08/2018',
        role: {de: 'Software Entwicklung — Sommerpraktikum', en: 'Software Development — Summer Internship'},
        company: 'Uniquare Software Development GmbH',
        place: {de: 'Krumpendorf', en: 'Krumpendorf'},
        items: {
            de: ['Kleine Programmieraufgaben und Codeverbesserungen', 'Fehlerkorrekturen an Java-Code mit Eclipse und PMD'],
            en: ['Implemented small programming tasks and code improvements', 'Fixed Java code issues using Eclipse and PMD']
        }
    }],
    projects: [{
        name: 'Dormlife',
        description: {
            de: 'Community- und Verwaltungsplattform für Studierendenwohnheime',
            en: 'Community and administration platform for student residences'
        },
        date: '2025',
        items: {
            de: ['Entwicklung des Backends einer plattformübergreifenden Community- und Verwaltungsplattform für iOS, Android und Web.', 'Konzeption und Implementierung einer Microservice-Architektur mit Java, Spring Boot und Spring Cloud Gateway.', 'Entwicklung sicherer REST-Schnittstellen für Benutzerverwaltung, Veranstaltungen und Ressourcenreservierungen.', 'Betrieb der Container- und Orchestrierungsinfrastruktur mit Docker und Kubernetes.'],
            en: ['Built the backend for a cross-platform community and administration platform for iOS, Android and web.', 'Designed and implemented a microservice architecture with Java, Spring Boot and Spring Cloud Gateway.', 'Developed secure REST APIs for users, events and resource reservations.', 'Operated container and orchestration infrastructure with Docker and Kubernetes.']
        },
        tags: ['Java', 'Spring Boot', 'Spring Cloud Gateway', 'Docker', 'Kubernetes', 'PostgreSQL', 'REST APIs']
    }, {
        name: 'Site-Lapse',
        description: {
            de: 'Cloud-native Plattform zur automatisierten Videoerstellung',
            en: 'Cloud-native platform for automated video creation'
        },
        date: '2024',
        items: {
            de: ['Entwicklung einer serverlosen Cloud-Anwendung zur Erstellung von Zeitraffer- und Fortschrittsvideos aus Bildern.', 'Ereignisgesteuerte Architektur mit AWS Lambda und Amazon S3.', 'Backend-Logik in TypeScript und Infrastructure as Code mit SST.'],
            en: ['Built a serverless cloud application for creating time-lapse and progress videos from images.', 'Designed an event-driven architecture with AWS Lambda and Amazon S3.', 'Implemented TypeScript backend logic and infrastructure as code with SST.']
        },
        tags: ['TypeScript', 'AWS', 'AWS Lambda', 'Amazon S3', 'SST', 'Serverless', 'Cloud Native']
    }, {
        name: {de: 'Plattform zur industriellen Pumpenprüfung', en: 'Industrial pump testing platform'},
        description: {de: 'Vergütetes Industrieprojekt', en: 'Paid industry project'},
        date: '2024',
        items: {
            de: ['Konzeption und Umsetzung einer webbasierten Plattform zur Dokumentation industrieller Pumpenprüfungen.', 'Microservice-Architektur mit Java, Spring Boot, RabbitMQ, PostgreSQL, Redis und Keycloak.', 'Design und Entwicklung des Frontends mit Angular sowie Containerisierung mit Docker.'],
            en: ['Designed and built a web platform for documenting industrial pump testing.', 'Developed a microservice architecture with Java, Spring Boot, RabbitMQ, PostgreSQL, Redis and Keycloak.', 'Owned frontend design and development with Angular and containerization with Docker.']
        },
        tags: ['Java', 'Spring Boot', 'Angular', 'RabbitMQ', 'PostgreSQL', 'Redis', 'Keycloak', 'Docker', 'Microservices']
    }],
    education: [{
        date: '02/2025 — now',
        role: {de: 'Masterstudium Software Engineering', en: 'Master’s in Software Engineering'},
        company: 'Technische Universität Wien',
        place: {de: 'Wien', en: 'Vienna'},
        text: {
            de: 'Voraussichtlicher Abschluss: 2027 · Auslandssemester: Radboud Universität, Niederlande (01/2026 — 07/2026)\nSchwerpunkte: Softwarearchitektur, Verteilte Systeme, Cloud Computing, Softwaretest, Requirements Engineering, Machine Learning und Artificial Intelligence.',
            en: 'Expected graduation: 2027 · Exchange semester: Radboud University, Netherlands (01/2026 — 07/2026)\nFocus: Software architecture, distributed systems, cloud computing, software testing, requirements engineering, machine learning and artificial intelligence.'
        }
    }, {
        date: '10/2020 — 02/2025',
        role: {
            de: 'Bachelorstudium Software & Information Engineering',
            en: 'Bachelor’s in Software & Information Engineering'
        },
        company: 'Technische Universität Wien',
        place: {de: 'Wien', en: 'Vienna'},
        text: {
            de: 'Abschluss: Bachelor of Science (BSc) · Note: 2.4\nAbschlussarbeit: Web-based IEC 61499 Application Modelling Tool (Note: 1,0)\nSchwerpunkte: Software Engineering, Algorithmen und Datenstrukturen, Datenbanken, Betriebssysteme, Verteilte Systeme.',
            en: 'Degree: Bachelor of Science (BSc) · Grade: 2.4\nThesis: Web-based IEC 61499 Application Modelling Tool (Grade: 1.0)\nFocus: software engineering, algorithms and data structures, databases, operating systems and distributed systems.'
        }
    }, {
        date: '09/2015 — 07/2020',
        role: {de: 'Höhere Technische Lehranstalt Villach', en: 'Higher Technical College Villach'},
        company: {de: 'Ausbildungsschwerpunkt Informatik', en: 'Specialization in Computer Science'},
        place: {de: 'Villach', en: 'Villach'},
        text: {
            de: 'Abschluss: Reife- und Diplomprüfung (Matura) · Note: 2,0\nAbschlussprojekt: eStorage (Note: 1.0)\nSchwerpunkte: Softwareentwicklung, objektorientierte Programmierung, Datenbanken, Netzwerktechnik, Betriebssysteme und Projektmanagement.',
            en: 'Degree: Reife- und Diplomprüfung (Matura) · Grade: 2.0\nFinal project: eStorage (Grade: 1.0)\nFocus: software development, object-oriented programming, databases, networking, operating systems and project management.'
        }
    }],
    skills: [['Programmiersprachen|Programming languages', ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL']], ['Frameworks|Frameworks', ['Spring Boot', 'Spring Cloud Gateway', 'Angular', 'React', 'JavaFX', 'Ionic', 'Node.js']], ['Cloud & DevOps|Cloud & DevOps', ['AWS', 'Amazon S3', 'Docker', 'Kubernetes', 'GitHub Actions', 'SST']], ['Datenbanken|Databases', ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Oracle Database']], ['API & Datenformate|APIs & data formats', ['REST APIs', 'GraphQL', 'SPARQL']], ['Build-Tools & Umgebungen|Build tools & environments', ['Git', 'Maven', 'Gradle', 'Linux', 'IntelliJ IDEA', 'VS Code', 'Eclipse']], ['Software Engineering|Software engineering', ['Microservices', 'Cloud Native', 'CI/CD', 'Design Patterns', 'Agile Scrum', 'Software Testing']]],
    interests: {
        de: ['Software Architektur', 'Verteilte Systeme', 'Cloud Computing', 'Artificial Intelligence', 'Neue Technologien'],
        en: ['Software architecture', 'Distributed systems', 'Cloud computing', 'Artificial intelligence', 'New technologies']
    }
};
let lang = 'de';
const t = (v) => typeof v === 'string' ? v : (v?.[lang] || '');

function list(items, klass = '') {
    return `<ul class="${klass}">${items.map(x => `<li>${x}</li>`).join('')}</ul>`;
}

function render() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => el.textContent = copy[lang][el.dataset.i18n]);
    document.getElementById('experienceList').innerHTML = data.experience.map(e => `<article class="entry"><div class="date">${e.date}</div><div><h3>${t(e.role)}</h3><div class="company">${e.company} <span class="place">· ${t(e.place)}</span></div>${list(e.items[lang])}</div></article>`).join('');
    document.getElementById('projectList').innerHTML = data.projects.map(p => `<article class="entry"><div class="date">${p.date}</div><div><h3>${t(p.name)}</h3><div class="company">${t(p.description)}</div>${list(p.items[lang])}<div class="tags">${p.tags.map(x => `<span class="tag">${x}</span>`).join('')}</div></div></article>`).join('');
    document.getElementById('educationList').innerHTML = data.education.map(e => `<article class="entry"><div class="date">${e.date}</div><div><h3>${t(e.role)}</h3><div class="company">${t(e.company)} <span class="place">· ${t(e.place)}</span></div><p>${t(e.text).replaceAll('\n', '<br>')}</p></div></article>`).join('');
    document.getElementById('skillsList').innerHTML = data.skills.map(([title, tags]) => `<div class="fact"><h3>${title.split('|')[lang === 'de' ? 0 : 1]}</h3><div class="tags">${tags.map(x => `<span class="tag">${x}</span>`).join('')}</div></div>`).join('');
    document.getElementById('interestList').innerHTML = data.interests[lang].map(x => `<span class="tag">${x}</span>`).join('');
}

document.getElementById('langToggle').onclick = () => {
    lang = lang === 'de' ? 'en' : 'de';
    render();
};
document.getElementById('themeToggle').onclick = () => {
    const dark = document.body.dataset.theme === 'dark';
    document.body.dataset.theme = dark ? 'light' : 'dark';
    document.getElementById('themeToggle').textContent = dark ? '☾' : '☀';
};
render();

