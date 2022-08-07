import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s20',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s20',
          title: 'I s s20'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
