<template>
    <svg><use :xlink:href="iconPath" /></svg>
</template>

<script>
export default {
    name: 'svg-icon',
    props: {
        name: {
            type: String,
            required: true
        },
    },
    computed: {
        iconPath() {
            let icon = require(`@/assets/icons/${this.name}.svg`);
            if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
                icon = icon.default;
            }
            return icon.url;
        }
    }
};
</script>
