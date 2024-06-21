const modules = [
    {
        name: "Student Management",
        icon: "mdi:account-group",
        subItems: [
            {
                name: "Admission",
                route: "student.admission",
                icon: "mdi:account",
            },
            {
                name: "Student Profiles",
                route: "student.teachers",
                icon: "mdi:account-tie",
            },
            {
                name: "Attendance Tracking",
                route: "student.staff",
                icon: "mdi:account-tie-hat",
            },
            {
                name: "Discipline Records",
                route: "student.parents",
                icon: "mdi:account-child",
            },
        ],
    },
    {
        name: "Class Management",
        icon: "mdi:book-open-variant",
        subItems: [
            {
                name: "Class Creation",
                route: "class-management.create",
                icon: "mdi:plus-box",
            },
            {
                name: "Timetable Management",
                route: "class-management.timetable",
                icon: "mdi:timetable",
            },
            {
                name: "Subject Management",
                route: "class-management.subjects",
                icon: "mdi:book-multiple",
            },
            {
                name: "Classroom Assignments",
                route: "class-management.assignments",
                icon: "mdi:clipboard-list",
            },
        ],
    },
    {
        name: "Attendance Management",
        icon: "mdi:calendar-check",
        subItems: [
            {
                name: "Daily Attendance",
                route: "attendance-management.daily",
                icon: "mdi:calendar-check-outline",
            },
            {
                name: "Absence Tracking",
                route: "attendance-management.absence",
                icon: "mdi:calendar-remove",
            },
            {
                name: "Attendance Reports",
                route: "attendance-management.reports",
                icon: "mdi:file-chart",
            },
        ],
    },
    {
        name: "Grade Management",
        icon: "mdi:chart-line",
        subItems: [
            {
                name: "Grade Entry",
                route: "grade-management.entry",
                icon: "mdi:note-edit",
            },
            {
                name: "Report Card Generation",
                route: "grade-management.report-cards",
                icon: "mdi:card-text",
            },
            {
                name: "Transcript Management",
                route: "grade-management.transcripts",
                icon: "mdi:clipboard-file",
            },
            {
                name: "Grade Analytics",
                route: "grade-management.analytics",
                icon: "mdi:chart-box",
            },
        ],
    },
    {
        name: "Examination Management",
        icon: "mdi:file-document-edit",
        subItems: [
            {
                name: "Exam Scheduling",
                route: "exam-management.scheduling",
                icon: "mdi:calendar-multiselect",
            },
            {
                name: "Question Paper Management",
                route: "exam-management.question-papers",
                icon: "mdi:file-document-box-multiple",
            },
            {
                name: "Exam Result Processing",
                route: "exam-management.results",
                icon: "mdi:file-chart",
            },
            {
                name: "Exam Reports",
                route: "exam-management.reports",
                icon: "mdi:clipboard-list-outline",
            },
        ],
    },
    {
        name: "Timetable Management",
        icon: "mdi:clock",
        subItems: [
            {
                name: "Class Timetables",
                route: "timetable-management.class",
                icon: "mdi:table-clock",
            },
            {
                name: "Exam Timetables",
                route: "timetable-management.exam",
                icon: "mdi:table-clock-outline",
            },
            {
                name: "Teacher Schedules",
                route: "timetable-management.teacher",
                icon: "mdi:account-clock",
            },
            {
                name: "Room Allocation",
                route: "timetable-management.rooms",
                icon: "mdi:office-building",
            },
        ],
    },
    {
        name: "Fee Management",
        icon: "mdi:currency-usd",
        subItems: [
            {
                name: "Fee Structure Setup",
                route: "fee-management.structure",
                icon: "mdi:chart-box-outline",
            },
            {
                name: "Invoice Generation",
                route: "fee-management.invoices",
                icon: "mdi:file-document",
            },
            {
                name: "Payment Tracking",
                route: "fee-management.payments",
                icon: "mdi:cash-multiple",
            },
            {
                name: "Financial Reports",
                route: "fee-management.reports",
                icon: "mdi:chart-pie",
            },
        ],
    },
    {
        name: "Library Management",
        icon: "mdi:library",
        subItems: [
            {
                name: "Book Catalog Management",
                route: "library-management.catalog",
                icon: "mdi:bookshelf",
            },
            {
                name: "Issue/Return Management",
                route: "library-management.issue-return",
                icon: "mdi:book-sync",
            },
            {
                name: "Fine Management",
                route: "library-management.fines",
                icon: "mdi:cash-minus",
            },
            {
                name: "Library Inventory",
                route: "library-management.inventory",
                icon: "mdi:clipboard-list-outline",
            },
        ],
    },
    {
        name: "Communication",
        icon: "mdi:message",
        subItems: [
            {
                name: "Messaging System",
                route: "communication.messaging",
                icon: "mdi:message-text",
            },
            {
                name: "Announcements",
                route: "communication.announcements",
                icon: "mdi:bullhorn",
            },
            {
                name: "Notifications",
                route: "communication.notifications",
                icon: "mdi:bell",
            },
        ],
    },
    {
        name: "Transport Management",
        icon: "mdi:bus",
        subItems: [
            {
                name: "Bus Routes Management",
                route: "transport-management.routes",
                icon: "mdi:map-marker-path",
            },
            {
                name: "Driver Profiles",
                route: "transport-management.drivers",
                icon: "mdi:account-tie",
            },
            {
                name: "Vehicle Management",
                route: "transport-management.vehicles",
                icon: "mdi:car",
            },
            {
                name: "Transport Fee Management",
                route: "transport-management.fees",
                icon: "mdi:cash",
            },
        ],
    },
    {
        name: "Hostel Management",
        icon: "mdi:home-city",
        subItems: [
            {
                name: "Room Allocation",
                route: "hostel-management.rooms",
                icon: "mdi:bed",
            },
            {
                name: "Hostel Fee Management",
                route: "hostel-management.fees",
                icon: "mdi:cash-register",
            },
            {
                name: "Attendance",
                route: "hostel-management.attendance",
                icon: "mdi:calendar-check-outline",
            },
        ],
    },
];

export default modules;
