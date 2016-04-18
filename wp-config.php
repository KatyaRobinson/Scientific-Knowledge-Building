<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'skb_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '^ahRavD;Y(-N<~8QE<XK9:CDr!lg6HP+sLEX<AJURFJHF =3SA>=qM4G;`fF<n?|');
define('SECURE_AUTH_KEY',  'Z$PCn@:6a&v0p79*-cM=|5*t_;}}N/oU#F^r3yg?g]S!$;YIIL7SK}a$k*20mxq?');
define('LOGGED_IN_KEY',    'b0*w.aD.1lG#*pMg3 Kig!9!M%g2|-V#o`0HLj<_s@s1LV/[_UB4WR8Jg<$w@T8%');
define('NONCE_KEY',        'S)8^=MH6PyAeV6&i]w:but9~X{rw0A,pXpAl=?({7iQD6zDO|;L4/3L}zj Mc]Ph');
define('AUTH_SALT',        '}Q5/gYzi.h6cQ57(39WnKIdUt!3_<>3DNX-rNq:tR)]<zF0p15I!Vew_0~S(Gi9>');
define('SECURE_AUTH_SALT', '^OvpcD..WXmjXN&]nF^T+I|;e(YLV2/8{o|;U8|~-s[/Srd1F9>7=>J0.(I!07V9');
define('LOGGED_IN_SALT',   '1542LYc%;%0K>f3SY|u_~eQBt1K~v/+8zjvw#/f-mV0.rvzCUW@re_z aH+vh}3Y');
define('NONCE_SALT',       '+q<s.wkOlc(BBo.$@%12gRYMvK)T=4r<W@I@n.2n8&{;f@IdD6R;{gJ>U{yV#w@R');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
