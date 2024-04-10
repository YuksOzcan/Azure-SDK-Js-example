To run this program, follow the instructions below
1.Change the constants inside the newStorageAccount.js file
2.npm install @azure/arm-resources @azure/identity @azure/storage-blob
3.npm init -y
4.1 For Ubuntu "curl -sL https://aka.ms/InstallAzureCLIDeb | sudo bash" 
4.2 For MacOS "brew update && brew install azure-cli"  
4.3 Check out this page for other OS "https://learn.microsoft.com/en-us/cli/azure/install-azure-cli#install"
4.az login /// az gin --use-device-code
4.node newStorageAccount.js