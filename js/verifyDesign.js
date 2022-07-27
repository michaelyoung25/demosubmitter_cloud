var cloud_provider;
var VM;
var numVMs;
var totalMemory;

function setCloudProvider(n)
{
    if (n == 0)
    {
        cloud_provider = 'AWS'
    }

    else if (n == 1)
    {
        cloud_provider = 'GCP'
    }

    else
    {
        cloud_provider = 'Azure'
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
    var T = document.getElementById('T').value;
    var K = document.getElementById('K').value;
    var Z = document.getElementById('Z').value;
    var M_B = document.getElementById('M_B').value;
    var M_BF = document.getElementById('M_BF').value;
    var M_FP = document.getElementById('M_FP').value;

    setVM();
    setTotalMemory();

    if (cloud_provider == null)
    {
        alert('Cloud provider not selected.');
        return
    }

    if (VM == null)
    {
        alert('VM not selected.');
        return
    }

    if (numVMs < 1)
    {
        alert('Minimum number of VMs is 0.');
        return
    }

    if (K < 1 || Z < 1)
    {
        alert('Minimum value for K and Z is 1.')
    }

    if (K > T-1 || Z < T-1)
    {
        maxKZ = T-1;
        alert('Maximum value for K and Z is T-1, which is '+ maxKZ)
    }

    if (M_B + M_BF + M_FP > totalMemory)
    {
        alert('Total memory exceeds available memory, which is '+ totalMemory)
    }
}
