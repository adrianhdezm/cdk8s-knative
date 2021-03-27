import { App } from 'cdk8s';

import { DashboardChart } from '@charts/dashboard.chart';

const app = new App();
new DashboardChart(app, 'dashboard');
app.synth();
