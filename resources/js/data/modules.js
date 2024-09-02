const modules = [
    {
        name: "Students Management",
        icon: "mdi:account-group",
        subItems: [
            {
                name: "Admission",
                route: "/student/admission",
                icon: "mdi:account",
            },
            {
                name: "Profiles",
                route: "/student/profiles",
                icon: "mdi:account-tie",
            },
            {
                name: "Attendance",
                route: "/student/attendance",
                icon: "mdi:account-tie-hat",
            },
            {
                name: "Discipline",
                route: "/student/discipline",
                icon: "mdi:account-child",
            },
        ],
    },
    {
        name: "Classes Management",

        icon: "mdi:book-open-variant",
        subItems: [
            {
                name: "Create",
                route: "/class-management/create",
                icon: "mdi:plus-box",
            },
            {
                name: "Timetables",
                route: "/class-management/timetable",
                icon: "mdi:timetable",
            },
            {
                name: "Subjects",
                route: "/class-management/subjects",
                icon: "mdi:book-multiple",
            },
            {
                name: "Assignments",
                route: "/class-management/assignments",
                icon: "mdi:clipboard-list",
            },
        ],
    },
    {
        name: "Attendance Management",
        icon: "mdi:calendar-check",
        subItems: [
            {
                name: "Daily",
                route: "/attendance-management/daily",
                icon: "mdi:calendar-check-outline",
            },
            {
                name: "Absence",
                route: "/attendance-management/absence",
                icon: "mdi:calendar-remove",
            },
            {
                name: "Reports",
                route: "/attendance-management/reports",
                icon: "mdi:file-chart",
            },
        ],
    },
    {
        name: "Grades Management",
        icon: "mdi:chart-line",
        subItems: [
            {
                name: "Entry",
                route: "/grade-management/entry",
                icon: "mdi:note-edit",
            },
            {
                name: "Report Cards",
                route: "/grade-management/report-cards",
                icon: "mdi:card-text",
            },
            {
                name: "Transcripts",
                route: "/grade-management/transcripts",
                icon: "mdi:clipboard-file",
            },
            {
                name: "Analytics",
                route: "/grade-management/analytics",
                icon: "mdi:chart-box",
            },
        ],
    },
    {
        name: "Exams Management",
        icon: "mdi:file-document-edit",
        subItems: [
            {
                name: "Scheduling",
                route: "/exam-management/scheduling",
                icon: "mdi:calendar-multiselect",
            },
            {
                name: "Question Papers",
                route: "/exam-management/question-papers",
                icon: "mdi:file-document-box-multiple",
            },
            {
                name: "Results",
                route: "/exam-management/results",
                icon: "mdi:file-chart",
            },
            {
                name: "Reports",
                route: "/exam-management/reports",
                icon: "mdi:clipboard-list-outline",
            },
        ],
    },
    {
        name: "Timetable Management",
        icon: "mdi:clock",
        subItems: [
            {
                name: "Class",
                route: "/timetable-management/class",
                icon: "mdi:table-clock",
            },
            {
                name: "Exams",
                route: "/timetable-management/exam",
                icon: "mdi:table-clock-outline",
            },
            {
                name: "Teachers",
                route: "/timetable-management/teacher",
                icon: "mdi:account-clock",
            },
            {
                name: "Rooms",
                route: "/timetable-management/rooms",
                icon: "mdi:office-building",
            },
        ],
    },
    {
        name: "Fees Management",
        icon: "mdi:currency-usd",
        subItems: [
            {
                name: "Structure",
                route: "/fee-management/structure",
                icon: "mdi:chart-box-outline",
            },
            {
                name: "Invoices",
                route: "/fee-management/invoices",
                icon: "mdi:file-document",
            },
            {
                name: "Payments",
                route: "/fee-management/payments",
                icon: "mdi:cash-multiple",
            },
            {
                name: "Reports",
                route: "/fee-management/reports",
                icon: "mdi:chart-pie",
            },
        ],
    },
    {
        name: "Library Management",
        icon: "mdi:library",
        subItems: [
            {
                name: "Catalog",
                route: "/library-management/catalog",
                icon: "mdi:bookshelf",
            },
            {
                name: "Issue/Return",
                route: "/library-management/issue-return",
                icon: "mdi:book-sync",
            },
            {
                name: "Fines",
                route: "/library-management/fines",
                icon: "mdi:cash-minus",
            },
            {
                name: "Inventory",
                route: "/library-management/inventory",
                icon: "mdi:clipboard-list-outline",
            },
        ],
    },
    {
        name: "Communication",
        icon: "mdi:message",
        subItems: [
            {
                name: "Messaging",
                route: "/communication/messaging",
                icon: "mdi:message-text",
            },
            {
                name: "Announcements",
                route: "/communication/announcements",
                icon: "mdi:bullhorn",
            },
            {
                name: "Notifications",
                route: "/communication/notifications",
                icon: "mdi:bell",
            },
        ],
    },
    {
        name: "Transport Management",
        icon: "mdi:bus",
        subItems: [
            {
                name: "Routes",
                route: "/transport-management/routes",
                icon: "mdi:map-marker-path",
            },
            {
                name: "Drivers",
                route: "/transport-management/drivers",
                icon: "mdi:account-tie",
            },
            {
                name: "Vehicles",
                route: "/transport-management/vehicles",
                icon: "mdi:car",
            },
            {
                name: "Fees",
                route: "/transport-management/fees",
                icon: "mdi:cash",
            },
        ],
    },
    {
        name: "Hostels Management",
        icon: "mdi:home-city",
        subItems: [
            {
                name: "Rooms",
                route: "/hostel-management/rooms",
                icon: "mdi:bed",
            },
            {
                name: "Fees",
                route: "/hostel-management/fees",
                icon: "mdi:cash-register",
            },
            {
                name: "Attendance",
                route: "/hostel-management/attendance",
                icon: "mdi:calendar-check-outline",
            },
        ],
    },
];

export default modules;
