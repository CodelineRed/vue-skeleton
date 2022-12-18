const filters = {
    /**
     * Returns formated timestamp or "-"
     * https://momentjs.com/docs/#/parsing/
     * Example: {{ $filters.formatDateTime(exampleDate, $t('datetime-suffix')) }}
     * 
     * @param {string|integer} timestamp in seconds
     * @param {string} format 
     * @returns {string}
     */
    formatDateTime: function(timestamp, format) {
        if (timestamp) {
            return moment(parseInt(timestamp) * 1000).format(format);
        } else {
            return '-';
        }
    },
    /**
     * Returns formated duration in "HH:MM:SS h" or "-"
     * https://momentjs.com/docs/#/durations/
     * Example: {{ $filters.formatDuration(exampleDuration) }}
     * 
     * @param {string|integer} duration in seconds
     * @returns {string}
     */
    formatDuration: function(duration) {
        if (duration) {
            const durationObject = moment.duration(parseInt(duration) * 1000, 'ms');
            const hours = ('0' + durationObject.hours()).substr(-2);
            const minutes = ('0' + durationObject.minutes()).substr(-2);
            const seconds = ('0' + durationObject.seconds()).substr(-2);

            return hours + ':' + minutes + ':' + seconds + ' h';
        } else {
            return '-';
        }
    }
};

export default filters;
