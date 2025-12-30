import * as cdk from 'aws-cdk-lib';
import * as dynamo from 'aws-cdk-lib/aws-dynamodb';
import { Construct } from 'constructs';

export class DynamoDB extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new dynamo.Table(this, 'SampleUnncryptedTable', {
            tableName: 'SampleUnncryptedTable',
            partitionKey: {
                name: 'id',
                type: dynamo.AttributeType.STRING
            }
        });

        new dynamo.Table(this, 'SampleAwsEncryptedTable', {
            tableName: 'SampleAwsEncryptedTable',
            partitionKey: {
                name: 'id',
                type: dynamo.AttributeType.STRING
            },
            encryption: dynamo.TableEncryption.AWS_MANAGED
        });
    }
}
