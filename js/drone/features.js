/* global module, require */

module.exports = {
  install: function (ns) {

    [

      // Must be first
      'format',

      // Do not re-order
      'crop',
      'output_size',
      'output_quality',
      'paper_size',
      'paper_orientation',
      'paper_header',
      'paper_footer',
      'viewport_size',
      'watermark',
      'zoom',
      'retina',
      'inject_html',
      'inject_css',
      'inject_javascript'

    ].forEach(function (feature) {
      require('./features/' + feature).install(ns);
    });

    return ns;
  }
};