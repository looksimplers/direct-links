import app from 'flarum/forum/app';
import RedirectToHomeAndOpenModalPage from './RedirectToHomeAndOpenModalPage';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import { extend } from 'flarum/common/extend';
import Stream from 'flarum/common/utils/Stream';



export default class SignupPage extends RedirectToHomeAndOpenModalPage {
  createModal() {
    if (!app.session.user) {
      extend(SignUpModal.prototype, 'fields', function (fields) {
        const isOptional = app.forum.data.attributes['fof-doorman.allowPublic'];
        const placeholder = isOptional
          ? app.translator.trans('fof-doorman.forum.sign_up.doorman_placeholder_optional')
          : app.translator.trans('fof-doorman.forum.sign_up.doorman_placeholder');
        this.doorkey = Stream(app.forum.currentRoute.params.doorkey) || Stream('');
        fields.add(
          'doorkey',
          <div className="Form-group">
            <input className="FormControl" name="fof-doorkey" type="text" placeholder={placeholder} bidi={this.doorkey} disabled={this.loading} />
          </div>
        );
      });
      return SignUpModal;
    }
  }
}
