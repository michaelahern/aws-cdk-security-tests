import * as cdk from 'aws-cdk-lib';
import { DynamoDB } from './dynamodb.js';
import { ElasticLoadBalancing } from './elb.js';

const app = new cdk.App();

new DynamoDB(app, 'DynamoDBStack');
new ElasticLoadBalancing(app, 'ElasticLoadBalancingStack');
