import { Chart, ChartProps, Include } from 'cdk8s';
import { Construct } from 'constructs';

import * as k8s from '@libs/k8s';

export class DashboardChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = {}) {
    super(scope, id, props);

    const DASHBOARD_ADMIN_USER = 'admin-user';
    const DASHBOARD_NAMESPACE = 'kubernetes-dashboard';
    const DASHBOARD_SOURCE_URL =
      'https://raw.githubusercontent.com/kubernetes/dashboard/v2.1.0/aio/deploy/recommended.yaml';

    // Include Dashboard
    new Include(this, 'dashboard', {
      url: DASHBOARD_SOURCE_URL
    });

    // Creating Service Account with name admin-user in namespace kubernetes-dashboard
    new k8s.ServiceAccount(this, 'service-account', {
      metadata: {
        name: DASHBOARD_ADMIN_USER,
        namespace: DASHBOARD_NAMESPACE
      }
    });

    // Creating a ClusterRoleBinding
    new k8s.ClusterRoleBinding(this, 'cluster-role-binding', {
      metadata: {
        name: DASHBOARD_ADMIN_USER
      },
      roleRef: {
        apiGroup: 'rbac.authorization.k8s.io',
        kind: 'ClusterRole',
        name: 'cluster-admin'
      },
      subjects: [
        {
          kind: 'ServiceAccount',
          name: DASHBOARD_ADMIN_USER,
          namespace: DASHBOARD_NAMESPACE
        }
      ]
    });
  }
}
