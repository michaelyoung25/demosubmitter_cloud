var cloud_provider = 'AWS';
var VM = 'aws0';
var numVMs = 1;
var totalMemory;
var E = parseInt(document.getElementById('E').value);
var B = 0;

function setCloudProvider(n)
{
    if (n == 0)
    {
        cloud_provider = 'AWS';
        B = 256*1024/(E);
    }

    else if (n == 1)
    {
        cloud_provider = 'GCP';
        B = 16*1024/(E);
    }

    else
    {
        cloud_provider = 'Azure';
        B = 8*1024/(E);
    }
}

function setVM()
{
    if (cloud_provider == 'AWS')
    {
        VM = document.getElementById('aws_vm')['aws_vm_radio'].value;
        numVMs = document.getElementById('numAWSVMs').value;
    }

    if (cloud_provider == 'GCP')
    {
        VM = document.getElementById('gcp_vm')['gcp_vm_radio'].value;
        numVMs = document.getElementById('numGCPVMs').value;
    }

    if (cloud_provider == 'Azure')
    {
        VM = document.getElementById('azure_vm')['azure_vm_radio'].value;
        numVMs = document.getElementById('numAzureVMs').value;
    }
}

function setTotalMemory()
{
    if (cloud_provider == 'AWS')
    {
        if (VM == 'aws0')
        {
            totalMemory = numVMs * 16
        }

        else if (VM == 'aws1')
        {
            totalMemory = numVMs * 32
        }

        else if (VM == 'aws2')
        {
            totalMemory = numVMs * 64
        }

        else if (VM == 'aws3')
        {
            totalMemory = numVMs * 128
        }

        else if (VM == 'aws4')
        {
            totalMemory = numVMs * 384
        }

        else if (VM == 'aws5')
        {
            totalMemory = numVMs * 768
        }

        else
        {
            totalMemory = -1
        }
    }

    if (cloud_provider == 'GCP')
    {
        if (VM == 'gcp0')
        {
            totalMemory = numVMs * 13
        }

        else if (VM == 'gcp1')
        {
            totalMemory = numVMs * 26
        }

        else if (VM == 'gcp2')
        {
            totalMemory = numVMs * 52
        }

        else if (VM == 'gcp3')
        {
            totalMemory = numVMs * 104
        }

        else if (VM == 'gcp4')
        {
            totalMemory = numVMs * 208
        }

        else if (VM == 'gcp5')
        {
            totalMemory = numVMs * 416
        }

        else if (VM == 'gcp6')
        {
            totalMemory = numVMs * 624
        }

        else
        {
            totalMemory = -1
        }
    }

    if (cloud_provider == 'Azure')
    {
        if (VM == 'azure0')
        {
            totalMemory = numVMs * 16
        }

        else if (VM == 'azure1')
        {
            totalMemory = numVMs * 32
        }

        else if (VM == 'azure2')
        {
            totalMemory = numVMs * 64
        }

        else if (VM == 'azure3')
        {
            totalMemory = numVMs * 128
        }

        else if (VM == 'azure4')
        {
            totalMemory = numVMs * 160
        }

        else if (VM == 'azure5')
        {
            totalMemory = numVMs * 256
        }

        else if (VM == 'azure6')
        {
            totalMemory = numVMs * 512
        }

        else
        {
            totalMemory = -1
        }
    }
}

/**
 * This is the function that verifies the validity of a storage engine design
 */
function ValidateStorage()
{
    var T = parseInt(document.getElementById('T').value);
    var K = parseInt(document.getElementById('K').value);
    var Z = parseInt(document.getElementById('Z').value);
    var M_B = parseInt(document.getElementById('M_B').value);
    var M_BF = parseInt(document.getElementById('M_BF').value);
    var M_FP = parseInt(document.getElementById('M_FP').value);
    var requiredMemory = M_B + M_BF + M_FP;

    setVM();
    setTotalMemory();

    if (cloud_provider == null)
    {
        alert('A cloud provider was not selected.');
        return
    }

    if (VM == null)
    {
        alert('A VM was not selected.');
        return
    }

    if (numVMs < 1)
    {
        alert('The inputted value for the number of VM instances is incorrect. Minimum value is 1 instance.');
        return
    }

    if (T < 2 || T > B)
    {
        alert('The inputted value for the growth factor is incorrect. Expected value ranges from 2 to block size.')
    }

    if (K < 1 || K > T-1)
    {
        alert('The inputted value for the hot merge threshold is incorrect. Expected value ranges from 1 to growth factor.')
    }

    if (Z < 1 || Z > T - 1)
    {
        alert('The inputted value for the cold merge threshold is incorrect. Expected value ranges from 1 to growth factor.')
    }

    if (requiredMemory > totalMemory)
    {
        alert('The total memory of ' + requiredMemory + ' GB exceeds available memory of ' + totalMemory + ' GB.')
    }
}
