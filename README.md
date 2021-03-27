# cdk8s-knative

Setting up a k8s cluster using [cdk8s](https://github.com/cdk8s-team/cdk8s)

## Synthesize:

`npm run import` Import/update k8s apis (you should check-in this directory)

`npm run synth` Synthesize k8s manifests from charts to `manifests` folder (ready for 'kubectl apply -f')

## Deploy:

`kubectl apply -f manifests/\*.k8s.yaml`

## Upgrades:

`npm run upgrade` Upgrade cdk8s modules to latest version
