function saveFile(directoryEntry)
    {

        function createFileWriter(fileEntry)
        {

            function write(fileWriter)
            {
                var dataBlob = new Blob(["Hello world!"], {type: "text/plain"});
                fileWriter.write(dataBlob);              
            }

            fileEntry.createWriter(write);
        }

        directoryEntry.getFile(
            "testFile", 
            {create: true, exclusive: true},
            createFileWriter
        );
    }

    requestFileSystem(Window.PERSISTENT, grantedQuota, saveFile);
}

var desiredQuota = 1024 * 1024 * 1024;
var quotaManagementObj = navigator.webkitPersistentStorage;
quotaManagementObj.requestQuota(desiredQuota, onQuotaRequestSuccess);
