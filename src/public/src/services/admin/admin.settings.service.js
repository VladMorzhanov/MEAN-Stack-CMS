angular.module('app').factory('AdminSettingsService', AdminSettingsService)

function AdminSettingsService () {
  const siteServiceFactory = {}

  siteServiceFactory.siteSettings = {}

  /**
   * Get site url from server
   */
  siteServiceFactory.siteSettings.url = 'localhost:8080/'

  /**
   * Get site title from server
   */
  siteServiceFactory.siteSettings.title = 'Perfect site'

  siteServiceFactory.getSiteTitle = function () {
    return siteServiceFactory.siteSettings.title
  }

  siteServiceFactory.getSiteUrl = function () {
    return siteServiceFactory.siteSettings.url
  }

  return siteServiceFactory
}
