<?php

/*
 * This file is part of fof/direct-links.
 *
 * Copyright (c) FriendsOfFlarum.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace FoF\DirectLinksInvite;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->route('/login', 'direct-links-login')
        ->route('/signup', 'direct-links-signup')
        ->route('/signup/{doorkey}', 'direct-links-signup-invite')
        ->route('/forgot', 'direct-links-forgot')
        ->route('/composer', 'direct-links-composer'),
];
