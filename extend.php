<?php

namespace FoF\DirectLinks;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->route('/login', 'direct-links-login')
        ->route('/signup', 'direct-links-signup')
        ->route('/forgot', 'direct-links-forgot')
        ->route('/composer', 'direct-links-composer')
];
