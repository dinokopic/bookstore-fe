/**
 *
 * Asynchronously loads the component for BookList
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
