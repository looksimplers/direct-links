import app from 'flarum/forum/app';

export { default as extend } from './extend';

app.initializers.add('fof/direct-links', () => {
  // Nothing required here
});
