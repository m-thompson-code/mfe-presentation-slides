export type Slide = {
    page: string;
    confidence: 1 | 2 | 3 | 4 | 5;
    notes?: string;
    presenter: 'mark' | 'david' | 'skip'
};

/*

domain driven design - architecture should mirror your corporate structure

A software development philosophy that focuses on understanding and modeling the business domain of a software application

*/

export const slides: Slide[] = [
    {
        page: "00-title",
        confidence: 5,
        presenter: 'david'
    },
    {
        page: "00-what-we-will-build",
        confidence: 3,
        presenter: 'david'
    },
    {
        page: "00-who-am-i",
        confidence: 5,
        presenter: 'david'
    },
    {
        page: "00-who-am-i-2",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "00-goals",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "00-roadmap",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "02-micro-frontends",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "02-what-are-micro-frontends",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "02-mfe-philosophies",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "02-mfe-pros",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "02-mfe-cons",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "02-when-you-should-choose-mfes",
        confidence: 3,
        presenter: 'mark'
    },
    {
        page: "02-introduction-to-the-four-pillars",
        confidence: 1,
        notes: 'I need to read https://lucamezzalira.com/2019/12/22/micro-frontends-decisions-framework/',
        presenter: 'mark'
    },
    {
        page: "03-defining-micro-frontends",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "03-vertical-and-horizontal-splits",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "03-vertical-split",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "03-horizontal-split",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "03-what-are-we-doing",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "03-set-up-time",
        confidence: 5,
        presenter: 'mark'
    },
    {
        page: "04-micro-frontend-composition",
        confidence: 5,
        presenter: 'david'
    },
    {
        page: "04-the-three-locations",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-micro-frontend-composition",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-server-side-composition",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-server-side-includes",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-nginx-ssi",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-nginx-ssi-breakdown",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-alternative-solutions",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-edge-side-composition",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-edge-side-includes",
        confidence: 1,
        presenter: 'david'
    },
    {
        page: "04-client-side-composition",
        confidence: 2,
        presenter: 'david'
    },
    {
        page: "04-the-shell-application",
        confidence: 4,
        notes: 'what is "cross-cutting" concerns?',
        presenter: 'david'
    },
    {
        page: "04-client-side-techniques",
        confidence: 2,
        notes: 'there\'s too many alternatives listed that I don\'t even know how to pronounce some of them',
        presenter: 'david'
    },
    {
        page: "05-title",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-module-federation",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-module-federation-features",
        confidence: 4,
        presenter: 'mark',
    },
    {
        page: "05-definition-of-terms",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-roles-are-not-mutually-exclusive",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-what-a-module-federation-project-looks-like",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-plugin-walk-through",
        confidence: 4,
        notes: 'what does "The parts the project shares" mean if not part of exposes/consumes?',
        presenter: 'mark',
    },
    {
        page: "05-project-configuration",
        confidence: 4,
        notes: 'what does "The parts the project shares" mean if not part of exposes/consumes?',
        presenter: 'mark',
    },
    {
        page: "05-remote-configuration",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-shared-configuration",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-types-when-consuming-a-remote",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-exercise-setting-up-module-federation",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "05-what-makes-a-good-shared-module",
        confidence: 1,
        presenter: 'david',
    },
    {
        page: "05-exercise-setting-up-the-shared-config",
        confidence: 1,
        presenter: 'david',
    },
    {
        page: "05-complexities",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "05-complexities",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "05-limitations",
        confidence: 1,
        presenter: 'david',
    },
    {
        page: "05-fault-tolerant-composition",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "05-fault-tolerant-composition",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "05-exercise-fault-tolerance-and-more-reps",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "06-title",
        confidence: 5,
        presenter: 'david',
    },
    {
        page: "06-mfe-routing",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "06-client-side-routing",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "06-client-side-routing-crash-course",
        confidence: 5,
        presenter: 'david',
    },
    {
        page: "06-client-side-routing-crash-course",
        confidence: 5,
        presenter: 'david',
    },
    {
        page: "06-react-router",
        confidence: 2,
        presenter: 'david',
    },
    {
        page: "06-complex-layouts-with-react-router",
        confidence: 2,
        presenter: 'david',
    },
    {
        page: "06-complex-layouts-with-react-router",
        confidence: 2,
        presenter: 'david',
    },
    {
        page: "06-paths-in-depth",
        confidence: 2,
        presenter: 'david',
    },
    {
        page: "06-exercise-setting-up-routes",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "06-shared-routes-with-module-federation",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "06-exercise-mfe-routing",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "06-summary",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "07-title",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-revisit-of-mfe-philosophies",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-when-to-communicate",
        confidence: 5,
        notes: 'what is cross-functional features?',
        presenter: 'mark',
    },
    {
        page: "07-eventing-pub-sub",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-eventing-pub-sub",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-advantages-of-pub-sub",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-advantages-of-pub-sub",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-ways-to-facilitate-pub-sub",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-custom-events-in-JavaScript",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-custom-events-with-TypeScript",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-custom-events-with-react",
        confidence: 5,
        notes: 'Does the typescript mentioned earlier work for react event types?',
        presenter: 'mark',
    },
    {
        page: "07-caution-of-shared-state",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-pub-sub-with-state-per-service",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-exercise-pub-sub",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-ways-to-improve-pub-sub",
        confidence: 4,
        presenter: 'mark',
    },
    {
        page: "07-good-url-design",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-when-to-use-the-url",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-the-url-as-mfe-communication",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-using-the-url-with-react-router",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-exercise-the-url",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-local-and-session-storage",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-cookies",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "07-cookies",
        confidence: 5,
        presenter: 'mark',
    },
    {
        page: "08-conclusion",
        confidence: 5,
        presenter: 'david',
    },
    {
        page: "08-recap-of-mfes",
        confidence: 3,
        presenter: 'david',
    },
    {
        page: "08-recap-of-defining-mfes",
        confidence: 5,
        presenter: 'david',
    },
    {
        page: "08-recap-of-mfe-composition",
        confidence: 4,
        presenter: 'david',
    },
    {
        page: "08-recap-of-module-federation",
        confidence: 5,
        presenter: 'david',
    },
    {
        page: "08-recap-of-mfe-routing",
        confidence: 4,
        presenter: 'david',
    },
    {
        page: "08-recap-of-mfe-communication",
        confidence: 5,
        presenter: 'david',
    },
    {
        page: "08-next-steps",
        confidence: 5,
        presenter: 'david',
    },
    {
        page: "08-thanks",
        confidence: 5,
        presenter: 'david',
    },
];
