import app from 'flarum/forum/app';
import Page from 'flarum/common/components/Page';
import { extend } from 'flarum/common/extend';
import Stream from 'flarum/common/utils/Stream';
import SignUpModal from 'flarum/forum/components/SignUpModal';


export default class RedirectToHomeAndOpenModalPage extends Page {
  oninit(vnode) {
    super.oninit(vnode);
    extend(SignUpModal.prototype, 'fields', function (fields) {
      const isOptional = app.forum.data.attributes['fof-doorman.allowPublic'];
      const placeholder = isOptional
        ? app.translator.trans('fof-doorman.forum.sign_up.doorman_placeholder_optional')
        : app.translator.trans('fof-doorman.forum.sign_up.doorman_placeholder');
      this.doorkey = Stream(app.doorkey) || Stream('');
      fields.add(
        'doorkey',
        <div className="Form-group">
          <input className="FormControl" name="fof-doorkey" type="text" placeholder={placeholder} bidi={this.doorkey} disabled={this.loading} />
        </div>
      );
    });

    m.route.set('/');

    setTimeout(() => app.modal.show(this.createModal()), 1500);
  }

  createModal() {
    return null;
  }

  view() {
    return <div />;
  }
}
