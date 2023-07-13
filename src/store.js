import { writable } from "svelte/store";

export const activeTab = writable([
    {
   
        link:"/dashboard",
        icon:`<svg
        class="h-6 w-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffb703"
        aria-hidden="true"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
    </svg>`,

        tabname:"DashBoard",
    },
    {
        link:"",
        icon:`<svg
        class="h-6 w-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffb703"
        aria-hidden="true"
    >
        <!-- <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /> -->
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>`,
        tabname:"Master",
        tabs:[
            {
                id: 1,
                tab: "Mapping"
            },
            {
                id: 2,
                tab: "Add Students"
            },
            {
                id: 3,
                tab: "Fee Heads"
            },
            {
                id: 4,
                tab: "Add Category"
            },
            {
                id: 5,
                tab: "Add Branch "
            },
            {
                id: 6,
                tab:"Add Adacemic Year"
            },
        ]
    },

    {
      
        link:"/collectfee",
        icon:`<svg
        class="h-6 w-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffb703"
        aria-hidden="true"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
        />
    </svg>`,
        tabname:"Collect fee",
    },
    {

        link:"/generaterecipts",
        icon:`<svg
        class="h-6 w-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffb703"
        aria-hidden="true"
    >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
        />
    </svg>`,
        tabname:"Generate Recipts",
    },
    {

        icon:`<svg
        class="h-6 w-6 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#ffb703"
        aria-hidden="true"
    >
        <!-- <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /> -->
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>`,
        tabname:"LogOut",
    },
    
]);