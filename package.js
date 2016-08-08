Package.describe({
  name: 'ethereum:dapp-styles',
  summary: 'CSS/LESS framework for dapps',
  version: '0.5.7',
  git: 'http://github.com/ethereum/dapp-styles'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2');
  api.use('less', 'client');

  api.addAssets('icons/Simple-Line-Icons.svg', 'client');
  api.addAssets('icons/Simple-Line-Icons.eot', 'client'); 
  api.addAssets('icons/Simple-Line-Icons.ttf', 'client'); 
  api.addAssets('icons/Simple-Line-Icons.woff', 'client');

  api.addAssets('fonts/Montserrat-Black.otf', 'client'); 
  api.addAssets('fonts/Montserrat-Bold.otf', 'client');
  api.addAssets('fonts/Montserrat-Hairline.otf', 'client');
  api.addAssets('fonts/Montserrat-Light.otf', 'client');
  api.addAssets('fonts/Montserrat-Regular.otf', 'client');
  api.addAssets('fonts/SourceSansPro-Black.otf', 'client');
  // api.addAssets('fonts/SourceSansPro-Blacklt.otf', 'client');
  api.addAssets('fonts/SourceSansPro-Bold.otf', 'client');
  // api.addAssets('fonts/SourceSansPro-Boldlt.otf', 'client');
  api.addAssets('fonts/SourceSansPro-Light.otf', 'client');
  // api.addAssets('fonts/SourceSansPro-Lightlt.otf', 'client');
  api.addAssets('fonts/SourceSansPro-ExtraLight.otf', 'client');
  // api.addAssets('fonts/SourceSansPro-ExtraLightlt.otf', 'client');
  api.addAssets('fonts/SourceSansPro-Regular.otf', 'client');
  api.addAssets('fonts/SourceSansPro-Semibold.otf', 'client');
  // api.addAssets('fonts/SourceSansPro-Semiboldlt.otf', 'client');
  // api.addAssets('fonts/SourceSansPro-lt.otf', 'client');

  api.addFiles('lib/base/base/_variables.import.less', 'client');    // Global Variables

  api.addFiles('lib/base/base/_mixins.import.less', 'client');       // Base Mixins
  api.addFiles('lib/base/base/_resets.import.less', 'client');       // General Resets

  // api.addFiles('lib/base/base/_global.import.less', 'client');       // Global Typography and Headings
  // api.addFiles('lib/base/base/_lists.import.less', 'client');        // Unordered Lists, Ordered Lists and Navigation
  // api.addFiles('lib/base/base/_blockquotes.import.less', 'client');  // Blockquotes
  // api.addFiles('lib/base/base/_code.import.less', 'client');         // Code
  // api.addFiles('lib/base/base/_tables.import.less', 'client');       // Tables
  // api.addFiles('lib/base/base/_forms.import.less', 'client');        // Forms, Input Types and Buttons

  // api.addFiles('lib/base/base/_buttons.import.less', 'client');      // Custom Base Buttons
  // api.addFiles('lib/base/base/_helpers.import.less', 'client');      // Custom Base Helpers

  api.addFiles('lib/base/base/_grid.import.less', 'client');         // Grid
  api.addFiles('lib/base/base/_tablet-grid.import.less', 'client');  // Tablet Grid
  api.addFiles('lib/base/base/_mobile-grid.import.less', 'client');  // Mobile Grid
  api.addFiles('lib/base/base/_print.import.less', 'client');        // Print Page Styles

  api.addFiles('lib/base/_desktop-styles.import.less', 'client');
  api.addFiles('lib/base/_mobile-styles.import.less', 'client');
  api.addFiles('lib/base/_tablet-styles.import.less', 'client');

  api.addFiles('lib/base/style.import.less', 'client');
  api.addFiles('lib/simple-line-icons.import.less', 'client');
  api.addFiles('lib/normalize.import.less', 'client');
  api.addFiles('lib/lesshat.import.less', 'client');
  api.addFiles('fonts.import.less', 'client');
  api.addFiles('constants.import.less', 'client');
  api.addFiles('mixins.import.less', 'client');
  api.addFiles('elements.import.less', 'client');
  api.addFiles('containers.import.less', 'client');
  api.addFiles('buttons.import.less', 'client');
  api.addFiles('responsive.import.less', 'client');

  api.addFiles('dapp-styles.less', 'client', {isImport: true});
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('ethereum:blocks');
//   api.addFiles('blocks-tests.js');
// });

