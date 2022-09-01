=== Colsun Piano ===
Contributors: thecoloradosun, jameswalterburke

Customizations to Piano for The Colorado Sun.

== Testing ==
Use the `testing-blocks.html` file to test class functionality.

Use the `mockPianoLoggedIn` to test logged in state.
* [Logged Out](https://coloradosun.newspackstaging.com/piano-classes/?mockPianoLoggedIn=false)
* [Logged In](https://coloradosun.newspackstaging.com/piano-classes/?mockPianoLoggedIn=true)

Use the `mockPianoRid` query parameters to test resource IDs (always logged in as well).
* [No rid](https://coloradosun.newspackstaging.com/piano-classes/?mockPianoLoggedIn=true)
* [TierBasic](https://coloradosun.newspackstaging.com/piano-classes/?mockPianoLoggedIn=true&rid=TierBasic)
* [TierBasicPlus](https://coloradosun.newspackstaging.com/piano-classes/?mockPianoLoggedIn=true&rid=TierBasicPlus)
* [TierPremium](https://coloradosun.newspackstaging.com/piano-classes/?mockPianoLoggedIn=true&rid=TierPremium)
* [TierChampion](https://coloradosun.newspackstaging.com/piano-classes/?mockPianoLoggedIn=true&rid=TierChampion)

== Installation ==

1. Upload entire folder to the `/wp-content/plugins/` directory
1. Activate the plugin through the 'Plugins' menu in WordPress

== Changelog ==

= 1.0.0 =
* Initial release.
