import * as cdk from '@aws-cdk/core';
import * as dynamodb from '@aws-cdk/aws-dynamodb'
 
export class CdkStack extends cdk.Stack {
    constructor(scope: cdk.Constructor, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new dynamodb.Table(this, "MyCoolTable", {
            partitionKey: {
                name: "userId",
                type: dynamodb.AttributeType.STRING
            },
            sortKey: {
                name: "noteID",
                type: dynamodb.AttributeType.STRING
            },
        });
        // The code that defines your stuck goes here
    }
}