import Firebase from 'firebase';
import FirebaseAdapter from 'emberfire/adapters/firebase';

import config from '../config/environment';

export default FirebaseAdapter.extend({
  firebase: new Firebase(config.firebase)
});
