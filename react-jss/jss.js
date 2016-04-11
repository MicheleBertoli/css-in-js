/**
 * Setup optional plugins.
 */

import jss from 'jss';
import nested from 'jss-nested';
import camelCase from 'jss-camel-case';
import defaultUnit from 'jss-default-unit';
import vendorPrefixer from 'jss-vendor-prefixer';

jss.use(
  nested(),
  camelCase(),
  defaultUnit(),
  vendorPrefixer()
);
