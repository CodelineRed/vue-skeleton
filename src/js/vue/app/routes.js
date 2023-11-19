import Home from '../component/page/home';
import About from '../component/page/about';
import ErrorPage from '../component/page/error-page';

const routes = [
    {
        component: Home,
        name: 'index',
        path: '',
        meta: {
            title: 'i18n.nav-home - i18n.app',
            layout: 'default',
            metaTags: [
                { name: 'robots', content: 'index,follow' },
                { name: 'author', content: 'i18n.meta-author' },
                { name: 'keywords', content: 'i18n.meta-keywords' },
                { name: 'description', content: 'i18n.meta-description' },
                { property: 'fb:admins', content: '' },
                { property: 'fb:app_id', content: '' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'i18n.nav-home - i18n.app' },
                { property: 'og:description', content: 'i18n.meta-description' },
                { property: 'og:image', content: 'https://vue.codelinered.net/img/social-media.jpg' },
                { property: 'og:site_name', content: 'i18n.nav-home' },
                { property: 'og:url', content: 'router.current-route' },
                { property: 'og:locale', content: 'i18n.locale' },
                { property: 'article:publisher', content: '' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: 'i18n.meta-author' },
                { name: 'twitter:title', content: 'i18n.nav-home - i18n.app' },
                { name: 'twitter:description', content: 'i18n.meta-description' },
                { property: 'twitter:image', content: 'https://vue.codelinered.net/img/social-media.jpg' }
            ],
            linkTags: [
                { rel: 'me', href: 'i18n.sm-twitter' },
                { rel: 'canonical', href: 'router.current-route' }
            ]
        }
    },
    {
        component: About,
        name: 'about',
        path: '/about',
        meta: {
            title: 'i18n.nav-about - i18n.app',
            layout: 'default',
            metaTags: [
                { name: 'robots', content: 'index,follow' },
                { name: 'author', content: 'i18n.meta-author' },
                { name: 'keywords', content: 'i18n.meta-keywords' },
                { name: 'description', content: 'i18n.meta-description' },
                { property: 'fb:admins', content: '' },
                { property: 'fb:app_id', content: '' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'i18n.nav-about - i18n.app' },
                { property: 'og:description', content: 'i18n.meta-description' },
                { property: 'og:image', content: 'https://vue.codelinered.net/img/social-media.jpg' },
                { property: 'og:site_name', content: 'i18n.nav-about' },
                { property: 'og:url', content: 'router.current-route' },
                { property: 'og:locale', content: 'i18n.locale' },
                { property: 'article:publisher', content: '' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: 'i18n.meta-author' },
                { name: 'twitter:title', content: 'i18n.nav-about - i18n.app' },
                { name: 'twitter:description', content: 'i18n.meta-description' },
                { property: 'twitter:image', content: 'https://vue.codelinered.net/img/social-media.jpg' }
            ],
            linkTags: [
                { rel: 'me', href: 'i18n.sm-twitter' },
                { rel: 'canonical', href: 'router.current-route' }
            ]
        }
    },
    {
        component: ErrorPage,
        path: '/:catchAll(.*)',
        meta: {
            title: 'i18n.nav-error - i18n.app',
            layout: 'default',
            metaTags: [
                { name: 'robots', content: 'index,follow' },
                { name: 'author', content: 'i18n.meta-author' },
                { name: 'keywords', content: 'i18n.meta-keywords' },
                { name: 'description', content: 'i18n.meta-description' },
                { property: 'fb:admins', content: '' },
                { property: 'fb:app_id', content: '' },
                { property: 'og:type', content: 'website' },
                { property: 'og:title', content: 'i18n.nav-error - i18n.app' },
                { property: 'og:description', content: 'i18n.meta-description' },
                { property: 'og:image', content: 'https://vue.codelinered.net/img/social-media.jpg' },
                { property: 'og:site_name', content: 'i18n.nav-error' },
                { property: 'og:url', content: 'router.current-route' },
                { property: 'og:locale', content: 'i18n.locale' },
                { property: 'article:publisher', content: '' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:site', content: 'i18n.meta-author' },
                { name: 'twitter:title', content: 'i18n.nav-error - i18n.app' },
                { name: 'twitter:description', content: 'i18n.meta-description' },
                { property: 'twitter:image', content: 'https://vue.codelinered.net/img/social-media.jpg' }
            ],
            linkTags: [
                { rel: 'me', href: 'i18n.sm-twitter' },
                { rel: 'canonical', href: 'router.current-route' }
            ]
        }
    }
];

export default routes;
