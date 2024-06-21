import "./bootstrap";
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import PrimeVue from "primevue/config";
import Wind from "./presets/wind";
import { ZiggyVue } from "../../vendor/tightenco/ziggy";

import { Icon } from "@iconify/vue";
import Button from "primevue/button";
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";

import Default from "./layouts/Default.vue";

const appName = import.meta.env.VITE_APP_NAME || "Aspire";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.vue", { eager: true });
        let page = pages[`./pages/${name}.vue`];
        page.default.layout = page.default.layout || Default;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PrimeVue, {
                unstyled: true,
                pt: Wind,
            })
            .use(ZiggyVue)
            .component("Button", Button)
            .component("Dropdown", Dropdown)
            .component("InputText", InputText)
            .component("Icon", Icon)
            .mount(el);
    },
});
