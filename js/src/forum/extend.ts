import Extend from 'flarum/common/extenders';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import ForgotPage from './components/ForgotPage';
import ComposerPage from './components/ComposerPage';

export default [
  new Extend.Routes() //
    .add('directLinksLogin', '/login', LoginPage)
    .add('directLinksSignup', '/signup', SignupPage)
    .add('directLinksSignupInvite', '/signup/:doorkey', SignupPage)
    .add('directLinksForgot', '/forgot', ForgotPage)
    .add('directLinksComposer', '/composer', ComposerPage),
];
