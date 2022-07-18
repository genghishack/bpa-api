export default {
  appName: 'bpa',
  debug: true,
  regex: {
    uuid: /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    date: /^\d{4}(\-(0?[1-9]|1[012]))?(\-(0?[1-9]|[12][0-9]|3[01]))?$/, //yyyy-mm-dd, yyyy-mm, yyyy
  }
};
