import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elb from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

export class ElasticLoadBalancing extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const vpc = new ec2.Vpc(this, 'SampleVpc', {
            maxAzs: 2
        });

        const alb = new elb.ApplicationLoadBalancer(this, 'SampleALB', {
            vpc: vpc,
            internetFacing: false
        });

        alb.addListener('SampleLegacyHttpsListener', {
            port: 443,
            protocol: elb.ApplicationProtocol.HTTPS,
            sslPolicy: elb.SslPolicy.LEGACY
        });

        alb.addListener('SampleTls11HttpsListener', {
            port: 443,
            protocol: elb.ApplicationProtocol.HTTPS,
            sslPolicy: elb.SslPolicy.TLS11
        });
    }
}
