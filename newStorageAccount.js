const { BlobServiceClient, StorageSharedKeyCredential } = require("@azure/storage-blob");
const { DefaultAzureCredential } = require("@azure/identity");
const { ResourceManagementClient } = require("@azure/arm-resources");

//Change the constants below
const subscriptionId = "Your Subscription ID";
const resourceGroupName = "Resource Group Name";
const location = "location";
const storageAccountName = "Storage Account Name";

const credentials = new DefaultAzureCredential();
const resourceClient = new ResourceManagementClient(credentials, subscriptionId);

const resourceGroupParameters = {
    location: location
};

const createResourceGroup = async () => {
    await resourceClient.resourceGroups.createOrUpdate(resourceGroupName, resourceGroupParameters);
    console.log(`Resource group '${resourceGroupName}' created successfully.`);
};

const createStorageAccount = async () => {
    // Create a BlobServiceClient to interact with the storage account
    const sharedKeyCredential = new StorageSharedKeyCredential(storageAccountName, "<Your-Storage-Account-Key>");
    const blobServiceClient = new BlobServiceClient(`https://${storageAccountName}.blob.core.windows.net`, sharedKeyCredential);

    console.log(`Storage account '${storageAccountName}' created successfully.`);
};

createResourceGroup().then(() => {
    createStorageAccount().then(() => {
        console.log("Deployment completed successfully.");
    }).catch((err) => {
        console.error("An error occurred while creating the storage account:", err);
    });
}).catch((err) => {
    console.error("An error occurred while creating the resource group:", err);
});
