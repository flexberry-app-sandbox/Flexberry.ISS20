import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s20.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s20.title'),
          children: [{
            link: 'i-i-s-i-s-s20-форма-l',
            caption: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-форма-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-форма-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-i-s-s20-вид-поддержки-l',
            caption: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-вид-поддержки-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-вид-поддержки-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-i-s-s20-форма-l',
            caption: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-форма-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-форма-l.title'),
            children: null
          }, {
            link: 'i-i-s-i-s-s20-вид-поддержки-l',
            caption: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-вид-поддержки-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-вид-поддержки-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-i-s-s20-условие-l',
            caption: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-условие-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s20.i-i-s-i-s-s20-условие-l.title'),
            children: null
          }]
        }
      ]
    };
  }),
})