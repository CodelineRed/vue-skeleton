<script>
    export default {

    };
</script>

<template>
    <div class="col-8 col-md-6">
        <span class="float-end">
            {{ $t("version") }} {{ version }}<br>
            {{ $filters.formatDateTime(exampleDate, $t('datetime-suffix')) }}
        </span>
    </div>
</template>
