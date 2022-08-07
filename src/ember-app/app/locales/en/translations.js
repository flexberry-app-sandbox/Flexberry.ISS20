import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS20ВидПоддержкиLForm from './forms/i-i-s-i-s-s20-вид-поддержки-l';
import IISISS20УсловиеLForm from './forms/i-i-s-i-s-s20-условие-l';
import IISISS20ФормаLForm from './forms/i-i-s-i-s-s20-форма-l';
import IISISS20ВидПоддержкиEForm from './forms/i-i-s-i-s-s20-вид-поддержки-e';
import IISISS20УсловиеEForm from './forms/i-i-s-i-s-s20-условие-e';
import IISISS20ФормаEForm from './forms/i-i-s-i-s-s20-форма-e';
import IISISS20ВидПоддержкиModel from './models/i-i-s-i-s-s20-вид-поддержки';
import IISISS20УсловиеModel from './models/i-i-s-i-s-s20-условие';
import IISISS20ФормаModel from './models/i-i-s-i-s-s20-форма';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s20-вид-поддержки': IISISS20ВидПоддержкиModel,
    'i-i-s-i-s-s20-условие': IISISS20УсловиеModel,
    'i-i-s-i-s-s20-форма': IISISS20ФормаModel
  },

  'application-name': 'I s s20',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s20',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s20',
          title: 'I s s20'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s20': {
          caption: 'ISS20',
          title: 'ISS20',
          'i-i-s-i-s-s20-форма-l': {
            caption: 'ФормаL',
            title: 'Форма'
          },
          'i-i-s-i-s-s20-вид-поддержки-l': {
            caption: 'ВидПоддержкиL',
            title: 'Вид поддержки'
          },
          'i-i-s-i-s-s20-условие-l': {
            caption: 'УсловиеL',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s20-вид-поддержки-l': IISISS20ВидПоддержкиLForm,
    'i-i-s-i-s-s20-условие-l': IISISS20УсловиеLForm,
    'i-i-s-i-s-s20-форма-l': IISISS20ФормаLForm,
    'i-i-s-i-s-s20-вид-поддержки-e': IISISS20ВидПоддержкиEForm,
    'i-i-s-i-s-s20-условие-e': IISISS20УсловиеEForm,
    'i-i-s-i-s-s20-форма-e': IISISS20ФормаEForm
  },

});

export default translations;
