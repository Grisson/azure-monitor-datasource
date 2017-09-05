/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
export default class AzureMonitorQueryBuilder {
    private backendSrv;
    private templateSrv;
    private $q;
    id: number;
    subscriptionId: string;
    baseUrl: string;
    resourceGroup: string;
    resourceName: string;
    url: string;
    constructor(instanceSettings: any, backendSrv: any, templateSrv: any, $q: any);
    query(options: any): any;
    doQueries(queries: any): any;
    processQueryResult(result: any): {
        data: any[];
    };
    annotationQuery(options: any): void;
    metricFindQuery(query: string): any;
    parseResponseValues(result: any, textFieldName: string, valueFieldName: string): any[];
    getMetricDefinitions(resourceGroup: string): any;
    getResourceNames(resourceGroup: string, metricDefinition: string): any;
    getMetricNames(resourceGroup: string, metricDefinition: string, resourceName: string): any;
    testDatasource(): any;
    doRequest(url: any): any;
}
