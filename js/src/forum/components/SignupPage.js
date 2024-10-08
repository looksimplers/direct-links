import app from 'flarum/forum/app';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import { extend } from 'flarum/common/extend';
import Stream from 'flarum/common/utils/Stream';
import Page from 'flarum/common/components/Page';
export default class SignupPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);
    const params = m.route.param()
    
    extend(SignUpModal.prototype, 'fields', function (fields) {
      const isOptional = app.forum.data.attributes['fof-doorman.allowPublic'];
      const placeholder = isOptional
        ? app.translator.trans('fof-doorman.forum.sign_up.doorman_placeholder_optional')
        : app.translator.trans('fof-doorman.forum.sign_up.doorman_placeholder');
      this.doorkey = Stream(params.doorkey) || Stream('');
      fields.add(
        'doorkey',
        <div className="Form-group">
          <input className="FormControl" name="fof-doorkey" type="text" placeholder={placeholder} bidi={this.doorkey} disabled={this.loading} />
        </div>
      );
    });

    setTimeout(() => {
      m.route.set('/');
    },500);

    setTimeout(() => app.modal.show(this.createModal()), 1000);
  }
  createModal() {
    if (!app.session.user) {
     
      return SignUpModal;
    }
  }
  view() {
    return <div />;
  }
}
