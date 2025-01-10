1. Get Network Adapter Information:

Get-NetAdapter | Select-Object Name, Status, MacAddress, InterfaceIndex

This cmdlet retrieves information about network adapters, including their names, statuses, MAC addresses, and interface indexes.

2. Stop a Running Process:

Stop-Process -Name "notepad"

This cmdlet stops all instances of the "notepad" process.

3. Export Event Log to a CSV File:

Get-WinEvent -LogName System -MaxEvents 100 | Export-Csv -Path C:\Logs\SystemEvents.csv -NoTypeInformation

This cmdlet retrieves the latest 100 events from the System event log and exports them to a CSV file.

4. Create a ZIP Archive:

Compress-Archive -Path C:\SourceFolder -DestinationPath C:\Archive\Archive.zip

This cmdlet creates a ZIP archive of files in the specified source folder.

5. Display Running Services:

Get-Service | Where-Object { $_.Status -eq 'Running' } | Select-Object DisplayName, ServiceName, Status

This cmdlet lists all running services, displaying their display names, service names, and statuses.

6. Show Available PowerShell Modules:

Get-Module -ListAvailable

This cmdlet lists all available PowerShell modules.

7. Set Execution Policy for Scripts:

Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned

This cmdlet sets the execution policy for the current user to allow locally created scripts to run.

8. List Active Network Connections:

Get-NetTCPConnection -State Established | Select-Object LocalAddress, LocalPort, RemoteAddress, RemotePort

This cmdlet lists active TCP connections in the "Established" state.

9. Get Disk Space Usage:

Get-CimInstance -ClassName Win32_LogicalDisk | Select-Object DeviceID, FreeSpace, Size

This cmdlet retrieves disk space information, including device IDs, free space, and total size.

10. Install a PowerShell Module:

Install-Module -Name Pester -Force

This cmdlet installs the Pester module, which is commonly used for testing PowerShell scripts.
