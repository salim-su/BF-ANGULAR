// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  SERVER_URL: `/api/`,
  OSS_URL: 'blade-system/business-oss/',
  FILE_PREVIEW_URL: 'http://10.163.200.140:10499/',
  SUPER_MAP_BASE_URL: 'http://10.163.200.111:30100/iserver/services/map-ugcv5-TJGDZDTWGS84/rest/maps/TJGDZDTWGS84',
  production: false,
  useHash: true,
  hmr: false,
  dict: {
    orgCategory: 'org_category'
  },
  subsystem: {
    auth: {
      id: '1237971822109036545',
      code: 'system',
      name: '权限管理系统',
    },
    traffic: {
      id: '1240883920993771522',
      code: 'traffic',
      name: '交通安全系统',
    },
    cargo: {
      id: '1242270637540544513',
      code: 'cargo',
      name: '全货类系统',
    },
    firefighting: {
      id: '1254578389730283521',
      code: 'firefighting',
      name: '消防系统',
    },
    plateform: {
      code: 'plateform',
      id: '1345985773697388546',
      name: '平台',
    },
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
