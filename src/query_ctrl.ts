///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import _ from 'lodash';
import {QueryCtrl} from 'app/plugins/sdk';

export class AzureMonitorQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';

  /** @ngInject **/
  constructor($scope, $injector) {
    super($scope, $injector);

    this.target.timeGrain = 1;
    this.target.timeGrainUnit = 'hour';
  }

  getResourceGroups(query) {
    return this.datasource.metricFindQuery('?api-version=2017-06-01');
  }

  getMetricDefinitions(query) {
    return this.datasource.getMetricDefinitions(this.target.resourceGroup);
  }

  getResourceNames(query) {
    return this.datasource.getResourceNames(this.target.resourceGroup, this.target.metricDefinition);
  }

  getMetricNames(query) {
    return this.datasource.getMetricNames(this.target.resourceGroup, this.target.metricDefinition, this.target.resourceName);
  }
}
