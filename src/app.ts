import * as cdk from 'aws-cdk-lib';
import { DynamoDB } from './dynamodb.js';

const app = new cdk.App();

new DynamoDB(app, 'DynamoDBStack');
