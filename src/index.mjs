import { SiteMenu } from '/components/site-menu.mjs'
import { SiteFooter } from '/components/site-footer.mjs'
import { HideUntilLoaded } from '/components/hide-until-loaded.mjs'
import { SomeHints } from '/components/some-hints.mjs'
import { YourDesk } from '/components/your-desk.mjs'

customElements.define('site-menu', SiteMenu)
customElements.define('site-footer', SiteFooter)
customElements.define('hide-until-loaded', HideUntilLoaded)
customElements.define('some-hints', SomeHints)
customElements.define('your-desk', YourDesk)
