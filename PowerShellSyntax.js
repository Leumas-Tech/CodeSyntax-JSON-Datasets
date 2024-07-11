const PowerShellsyntax = {
    "powershellSyntax": [
      {
        "name": "Write-Host",
        "description": "Writes customized output to the PowerShell console.",
        "example": "Write-Host 'Hello, World!'",
        "details": {
          "how_it_works": "The 'Write-Host' cmdlet writes customized output to the PowerShell console. It can be used to display strings, variables, and formatted text.",
          "use_cases": ["Displaying messages", "Outputting text to the console"],
          "additional_examples": [
            "Write-Host 'Process completed successfully.'",
            "Write-Host 'The value of x is:' $x"
          ]
        },
        "meta": {
          "title": "PowerShell Write-Host Cmdlet",
          "description": "Learn how to use the 'Write-Host' cmdlet in PowerShell to write customized output to the console.",
          "keywords": "powershell, Write-Host, cmdlet, output"
        }
      },
      {
        "name": "Write-Output",
        "description": "Sends output to the pipeline, which can be displayed or assigned to a variable.",
        "example": "Write-Output 'Hello, World!'",
        "details": {
          "how_it_works": "The 'Write-Output' cmdlet sends output to the pipeline, which can be displayed in the console or assigned to a variable. It is used for generating output that can be consumed by other cmdlets.",
          "use_cases": ["Sending output to the pipeline", "Generating output for other cmdlets"],
          "additional_examples": [
            "Write-Output 'This is a test.'",
            "$result = Write-Output 'Data for processing'"
          ]
        },
        "meta": {
          "title": "PowerShell Write-Output Cmdlet",
          "description": "Learn how to use the 'Write-Output' cmdlet in PowerShell to send output to the pipeline.",
          "keywords": "powershell, Write-Output, cmdlet, pipeline"
        }
      },
      {
        "name": "Read-Host",
        "description": "Reads a line of input from the console.",
        "example": "$name = Read-Host 'Enter your name'",
        "details": {
          "how_it_works": "The 'Read-Host' cmdlet reads a line of input from the console. It can prompt the user for input and store the input in a variable.",
          "use_cases": ["Reading user input", "Prompting for input"],
          "additional_examples": [
            "$password = Read-Host 'Enter your password' -AsSecureString",
            "$age = Read-Host 'Enter your age'"
          ]
        },
        "meta": {
          "title": "PowerShell Read-Host Cmdlet",
          "description": "Learn how to use the 'Read-Host' cmdlet in PowerShell to read input from the console.",
          "keywords": "powershell, Read-Host, cmdlet, input"
        }
      },
      {
        "name": "Get-ChildItem",
        "description": "Gets the items and child items in one or more specified locations.",
        "example": "Get-ChildItem -Path C:\\Users\\",
        "details": {
          "how_it_works": "The 'Get-ChildItem' cmdlet gets the items and child items in one or more specified locations. It can be used to list files and directories.",
          "use_cases": ["Listing files and directories", "Getting items in a directory"],
          "additional_examples": [
            "Get-ChildItem -Path . -Recurse",
            "Get-ChildItem -Path C:\\ -Filter *.txt"
          ]
        },
        "meta": {
          "title": "PowerShell Get-ChildItem Cmdlet",
          "description": "Learn how to use the 'Get-ChildItem' cmdlet in PowerShell to get items and child items in specified locations.",
          "keywords": "powershell, Get-ChildItem, cmdlet, list files"
        }
      },
      {
        "name": "Set-Variable",
        "description": "Sets the value of a variable.",
        "example": "Set-Variable -Name 'myVar' -Value 'Hello'",
        "details": {
          "how_it_works": "The 'Set-Variable' cmdlet sets the value of a variable. It can be used to create new variables or update the value of existing ones.",
          "use_cases": ["Setting variable values", "Creating new variables"],
          "additional_examples": [
            "Set-Variable -Name 'count' -Value 10",
            "Set-Variable -Name 'user' -Value 'Admin'"
          ]
        },
        "meta": {
          "title": "PowerShell Set-Variable Cmdlet",
          "description": "Learn how to use the 'Set-Variable' cmdlet in PowerShell to set the value of a variable.",
          "keywords": "powershell, Set-Variable, cmdlet, variable"
        }
      },
      {
        "name": "Get-Variable",
        "description": "Gets the value of a variable.",
        "example": "Get-Variable -Name 'myVar'",
        "details": {
          "how_it_works": "The 'Get-Variable' cmdlet gets the value of a variable. It can be used to retrieve the value of existing variables.",
          "use_cases": ["Getting variable values", "Retrieving variable information"],
          "additional_examples": [
            "Get-Variable -Name 'count'",
            "Get-Variable -Name 'user'"
          ]
        },
        "meta": {
          "title": "PowerShell Get-Variable Cmdlet",
          "description": "Learn how to use the 'Get-Variable' cmdlet in PowerShell to get the value of a variable.",
          "keywords": "powershell, Get-Variable, cmdlet, variable"
        }
      },
      {
        "name": "Remove-Variable",
        "description": "Deletes a variable and its value.",
        "example": "Remove-Variable -Name 'myVar'",
        "details": {
          "how_it_works": "The 'Remove-Variable' cmdlet deletes a variable and its value from the current session. It can be used to clear unnecessary variables.",
          "use_cases": ["Deleting variables", "Clearing session variables"],
          "additional_examples": [
            "Remove-Variable -Name 'count'",
            "Remove-Variable -Name 'user'"
          ]
        },
        "meta": {
          "title": "PowerShell Remove-Variable Cmdlet",
          "description": "Learn how to use the 'Remove-Variable' cmdlet in PowerShell to delete a variable and its value.",
          "keywords": "powershell, Remove-Variable, cmdlet, delete variable"
        }
      },
      {
        "name": "If",
        "description": "Defines a conditional statement that executes a block of code if the specified condition is true.",
        "example": "if ($x -eq 10) { Write-Host 'x is 10' }",
        "details": {
          "how_it_works": "The 'If' statement defines a conditional statement that executes a block of code if the specified condition evaluates to true.",
          "use_cases": ["Conditional execution", "Flow control"],
          "additional_examples": [
            "if ($user -eq 'Admin') { Write-Host 'Welcome, Admin!' }",
            "if ($count -gt 5) { Write-Host 'Count is greater than 5' }"
          ]
        },
        "meta": {
          "title": "PowerShell If Statement",
          "description": "Learn how to use the 'If' statement in PowerShell to define a conditional statement that executes code if a condition is true.",
          "keywords": "powershell, If, statement, conditional"
        }
      },
      {
        "name": "ElseIf",
        "description": "Defines an additional condition that is evaluated if the previous 'If' or 'ElseIf' condition was false.",
        "example": "elseif ($x -eq 20) { Write-Host 'x is 20' }",
        "details": {
          "how_it_works": "The 'ElseIf' statement defines an additional condition that is evaluated if the previous 'If' or 'ElseIf' condition was false.",
          "use_cases": ["Additional conditional checks", "Flow control"],
          "additional_examples": [
            "if ($user -eq 'Admin') { Write-Host 'Welcome, Admin!' } elseif ($user -eq 'Guest') { Write-Host 'Welcome, Guest!' }",
            "if ($count -gt 10) { Write-Host 'Count is greater than 10' } elseif ($count -gt 5) { Write-Host 'Count is greater than 5' }"
          ]
        },
        "meta": {
          "title": "PowerShell ElseIf Statement",
          "description": "Learn how to use the 'ElseIf' statement in PowerShell to define additional conditions in a conditional statement.",
          "keywords": "powershell, ElseIf, statement, conditional"
        }
      },
      {
        "name": "Else",
        "description": "Defines a block of code that is executed if all previous 'If' and 'ElseIf' conditions were false.",
        "example": "else { Write-Host 'x is not 10 or 20' }",
        "details": {
          "how_it_works": "The 'Else' statement defines a block of code that is executed if all previous 'If' and 'ElseIf' conditions were false.",
          "use_cases": ["Fallback conditional execution", "Flow control"],
          "additional_examples": [
            "if ($user -eq 'Admin') { Write-Host 'Welcome, Admin!' } elseif ($user -eq 'Guest') { Write-Host 'Welcome, Guest!' } else { Write-Host 'Unknown user' }",
            "if ($count -gt 10) { Write-Host 'Count is greater than 10' } elseif ($count -gt 5) { Write-Host 'Count is greater than 5' } else { Write-Host 'Count is 5 or less' }"
          ]
        },
        "meta": {
          "title": "PowerShell Else Statement",
          "description": "Learn how to use the 'Else' statement in PowerShell to define a block of code executed if previous conditions were false.",
          "keywords": "powershell, Else, statement, conditional"
        }
      },
      {
        "name": "For",
        "description": "Runs a block of code a specified number of times.",
        "example": "for ($i = 0; $i -lt 10; $i++) { Write-Host $i }",
        "details": {
          "how_it_works": "The 'For' loop runs a block of code a specified number of times, based on the initialization, condition, and increment/decrement specified.",
          "use_cases": ["Looping a specific number of times", "Iterating over a range"],
          "additional_examples": [
            "for ($j = 1; $j -le 5; $j++) { Write-Host 'Iteration:' $j }",
            "for ($k = 10; $k -ge 0; $k--) { Write-Host $k }"
          ]
        },
        "meta": {
          "title": "PowerShell For Loop",
          "description": "Learn how to use the 'For' loop in PowerShell to run a block of code a specified number of times.",
          "keywords": "powershell, For, loop, iteration"
        }
      },
      {
        "name": "ForEach-Object",
        "description": "Performs an operation on each item in a collection of input objects.",
        "example": "Get-Process | ForEach-Object { Write-Host $_.Name }",
        "details": {
          "how_it_works": "The 'ForEach-Object' cmdlet performs an operation on each item in a collection of input objects. It is commonly used in pipeline operations.",
          "use_cases": ["Processing items in a collection", "Pipeline operations"],
          "additional_examples": [
            "$files = Get-ChildItem C:\\ | ForEach-Object { $_.FullName }",
            "Get-Service | ForEach-Object { $_.Name }"
          ]
        },
        "meta": {
          "title": "PowerShell ForEach-Object Cmdlet",
          "description": "Learn how to use the 'ForEach-Object' cmdlet in PowerShell to perform operations on each item in a collection of input objects.",
          "keywords": "powershell, ForEach-Object, cmdlet, pipeline"
        }
      },
      {
        "name": "While",
        "description": "Runs a block of code as long as a specified condition evaluates to true.",
        "example": "$x = 0; while ($x -lt 5) { Write-Host $x; $x++ }",
        "details": {
          "how_it_works": "The 'While' loop runs a block of code as long as a specified condition evaluates to true.",
          "use_cases": ["Looping with a condition", "Running code while a condition is true"],
          "additional_examples": [
            "$count = 10; while ($count -gt 0) { Write-Host $count; $count-- }",
            "$valid = $false; while (-not $valid) { $valid = $true }"
          ]
        },
        "meta": {
          "title": "PowerShell While Loop",
          "description": "Learn how to use the 'While' loop in PowerShell to run a block of code as long as a condition is true.",
          "keywords": "powershell, While, loop, conditional"
        }
      },
      {
        "name": "Do-While",
        "description": "Runs a block of code at least once, and then repeats the execution as long as a specified condition evaluates to true.",
        "example": "$x = 0; do { Write-Host $x; $x++ } while ($x -lt 5)",
        "details": {
          "how_it_works": "The 'Do-While' loop runs a block of code at least once, and then repeats the execution as long as a specified condition evaluates to true.",
          "use_cases": ["Ensuring code runs at least once", "Looping with a post-condition"],
          "additional_examples": [
            "$count = 10; do { Write-Host $count; $count-- } while ($count -gt 0)",
            "$valid = $false; do { $valid = $true } while (-not $valid)"
          ]
        },
        "meta": {
          "title": "PowerShell Do-While Loop",
          "description": "Learn how to use the 'Do-While' loop in PowerShell to run a block of code at least once, and then repeat based on a condition.",
          "keywords": "powershell, Do-While, loop, conditional"
        }
      },
      {
        "name": "Switch",
        "description": "Evaluates one or more conditions, executing a block of code associated with the first matching condition.",
        "example": "$day = 'Monday'; switch ($day) { 'Monday' { Write-Host 'Start of the week' } 'Friday' { Write-Host 'End of the week' } }",
        "details": {
          "how_it_works": "The 'Switch' statement evaluates one or more conditions, executing a block of code associated with the first matching condition.",
          "use_cases": ["Conditional execution based on multiple conditions", "Simplifying complex If-Else structures"],
          "additional_examples": [
            "$status = 'green'; switch ($status) { 'red' { Write-Host 'Stop' } 'yellow' { Write-Host 'Caution' } 'green' { Write-Host 'Go' } }",
            "$number = 2; switch ($number) { 1 { Write-Host 'One' } 2 { Write-Host 'Two' } 3 { Write-Host 'Three' } default { Write-Host 'Other' } }"
          ]
        },
        "meta": {
          "title": "PowerShell Switch Statement",
          "description": "Learn how to use the 'Switch' statement in PowerShell to evaluate conditions and execute associated code blocks.",
          "keywords": "powershell, Switch, statement, conditional"
        }
      },
      {
        "name": "Try-Catch-Finally",
        "description": "Defines a block of code for error handling.",
        "example": "try { $result = 1 / 0 } catch { Write-Host 'Error occurred' } finally { Write-Host 'Cleanup code' }",
        "details": {
          "how_it_works": "The 'Try-Catch-Finally' construct defines a block of code for error handling. The 'Try' block contains code that may throw an error, the 'Catch' block handles the error, and the 'Finally' block contains code that runs regardless of whether an error occurred.",
          "use_cases": ["Error handling", "Executing cleanup code"],
          "additional_examples": [
            "try { $file = Get-Content 'nonexistent.txt' } catch { Write-Host 'File not found' } finally { Write-Host 'Finished' }",
            "try { Invoke-WebRequest 'http://example.com' } catch { Write-Host 'Request failed' } finally { Write-Host 'Request attempt complete' }"
          ]
        },
        "meta": {
          "title": "PowerShell Try-Catch-Finally",
          "description": "Learn how to use the 'Try-Catch-Finally' construct in PowerShell for error handling and cleanup.",
          "keywords": "powershell, Try-Catch-Finally, error handling"
        }
      },
      {
        "name": "Function",
        "description": "Defines a reusable block of code.",
        "example": "function Get-Greeting { param ($name) Write-Output 'Hello, ' $name }",
        "details": {
          "how_it_works": "The 'Function' keyword defines a reusable block of code that can be called with parameters. Functions help organize code and promote reuse.",
          "use_cases": ["Creating reusable code blocks", "Organizing scripts"],
          "additional_examples": [
            "function Add-Numbers { param ($a, $b) return $a + $b }",
            "function Get-DateFormatted { return Get-Date -Format 'yyyy-MM-dd' }"
          ]
        },
        "meta": {
          "title": "PowerShell Function",
          "description": "Learn how to define and use functions in PowerShell to create reusable code blocks.",
          "keywords": "powershell, Function, reusable code"
        }
      },
      {
        "name": "Param",
        "description": "Defines parameters for a script or function.",
        "example": "param ($name, $age)",
        "details": {
          "how_it_works": "The 'Param' keyword defines parameters for a script or function, allowing input values to be passed in and used within the script or function.",
          "use_cases": ["Accepting input values", "Defining script parameters"],
          "additional_examples": [
            "param ($path, [int]$count)",
            "function Test-Parameters { param ($a, $b) Write-Output $a; Write-Output $b }"
          ]
        },
        "meta": {
          "title": "PowerShell Param",
          "description": "Learn how to use the 'Param' keyword in PowerShell to define parameters for scripts and functions.",
          "keywords": "powershell, Param, parameters, input"
        }
      },
      {
        "name": "Pipeline",
        "description": "Passes the output of one command as input to another command.",
        "example": "Get-Process | Where-Object { $_.CPU -gt 100 }",
        "details": {
          "how_it_works": "The pipeline (|) passes the output of one command as input to another command, allowing for chaining of cmdlets to perform complex operations.",
          "use_cases": ["Chaining cmdlets", "Filtering and processing data"],
          "additional_examples": [
            "Get-ChildItem | Select-Object Name, Length",
            "Get-Service | Where-Object { $_.Status -eq 'Running' }"
          ]
        },
        "meta": {
          "title": "PowerShell Pipeline",
          "description": "Learn how to use the pipeline in PowerShell to pass the output of one command as input to another.",
          "keywords": "powershell, Pipeline, command chaining"
        }
      },
      {
        "name": "Import-Module",
        "description": "Adds one or more modules to the current session.",
        "example": "Import-Module ActiveDirectory",
        "details": {
          "how_it_works": "The 'Import-Module' cmdlet adds one or more modules to the current session, making their cmdlets and functions available for use.",
          "use_cases": ["Loading modules", "Extending functionality"],
          "additional_examples": [
            "Import-Module AzureRM",
            "Import-Module PSReadLine"
          ]
        },
        "meta": {
          "title": "PowerShell Import-Module Cmdlet",
          "description": "Learn how to use the 'Import-Module' cmdlet in PowerShell to add modules to the current session.",
          "keywords": "powershell, Import-Module, cmdlet, module"
        }
      },
      {
        "name": "Get-Help",
        "description": "Displays help information for cmdlets and concepts.",
        "example": "Get-Help Get-Process",
        "details": {
          "how_it_works": "The 'Get-Help' cmdlet displays help information for cmdlets, functions, scripts, and concepts, providing details on usage, parameters, and examples.",
          "use_cases": ["Getting help information", "Learning about cmdlets"],
          "additional_examples": [
            "Get-Help -Name Get-Process -Full",
            "Get-Help -Name Get-Service -Examples"
          ]
        },
        "meta": {
          "title": "PowerShell Get-Help Cmdlet",
          "description": "Learn how to use the 'Get-Help' cmdlet in PowerShell to display help information for cmdlets and concepts.",
          "keywords": "powershell, Get-Help, cmdlet, help"
        }
      },
      {
        "name": "New-Item",
        "description": "Creates a new item.",
        "example": "New-Item -Path 'C:\\temp\\newfile.txt' -ItemType 'File'",
        "details": {
          "how_it_works": "The 'New-Item' cmdlet creates a new item, such as a file, directory, or registry key, at the specified path.",
          "use_cases": ["Creating files", "Creating directories"],
          "additional_examples": [
            "New-Item -Path 'C:\\temp\\newdir' -ItemType 'Directory'",
            "New-Item -Path 'HKCU:\\Software\\NewKey' -ItemType 'RegistryKey'"
          ]
        },
        "meta": {
          "title": "PowerShell New-Item Cmdlet",
          "description": "Learn how to use the 'New-Item' cmdlet in PowerShell to create new items such as files and directories.",
          "keywords": "powershell, New-Item, cmdlet, create item"
        }
      },
      {
        "name": "Remove-Item",
        "description": "Deletes one or more items.",
        "example": "Remove-Item -Path 'C:\\temp\\oldfile.txt'",
        "details": {
          "how_it_works": "The 'Remove-Item' cmdlet deletes one or more items, such as files, directories, or registry keys, at the specified path.",
          "use_cases": ["Deleting files", "Removing directories"],
          "additional_examples": [
            "Remove-Item -Path 'C:\\temp\\olddir' -Recurse",
            "Remove-Item -Path 'HKCU:\\Software\\OldKey' -Force"
          ]
        },
        "meta": {
          "title": "PowerShell Remove-Item Cmdlet",
          "description": "Learn how to use the 'Remove-Item' cmdlet in PowerShell to delete items such as files and directories.",
          "keywords": "powershell, Remove-Item, cmdlet, delete item"
        }
      },
      {
        "name": "Copy-Item",
        "description": "Copies an item from one location to another.",
        "example": "Copy-Item -Path 'C:\\temp\\file.txt' -Destination 'C:\\backup\\file.txt'",
        "details": {
          "how_it_works": "The 'Copy-Item' cmdlet copies an item from one location to another, preserving the original item.",
          "use_cases": ["Copying files", "Creating backups"],
          "additional_examples": [
            "Copy-Item -Path 'C:\\temp\\dir' -Destination 'C:\\backup\\dir' -Recurse",
            "Copy-Item -Path 'HKCU:\\Software\\Key' -Destination 'HKCU:\\Backup\\Key'"
          ]
        },
        "meta": {
          "title": "PowerShell Copy-Item Cmdlet",
          "description": "Learn how to use the 'Copy-Item' cmdlet in PowerShell to copy items from one location to another.",
          "keywords": "powershell, Copy-Item, cmdlet, copy item"
        }
      },
      {
        "name": "Move-Item",
        "description": "Moves an item from one location to another.",
        "example": "Move-Item -Path 'C:\\temp\\file.txt' -Destination 'C:\\archive\\file.txt'",
        "details": {
          "how_it_works": "The 'Move-Item' cmdlet moves an item from one location to another, effectively renaming or relocating it.",
          "use_cases": ["Moving files", "Organizing directories"],
          "additional_examples": [
            "Move-Item -Path 'C:\\temp\\dir' -Destination 'C:\\archive\\dir' -Recurse",
            "Move-Item -Path 'HKCU:\\Software\\Key' -Destination 'HKCU:\\Archive\\Key'"
          ]
        },
        "meta": {
          "title": "PowerShell Move-Item Cmdlet",
          "description": "Learn how to use the 'Move-Item' cmdlet in PowerShell to move items from one location to another.",
          "keywords": "powershell, Move-Item, cmdlet, move item"
        }
      },
      {
        "name": "Get-Content",
        "description": "Gets the content of an item, such as a file or a variable.",
        "example": "Get-Content -Path 'C:\\temp\\file.txt'",
        "details": {
          "how_it_works": "The 'Get-Content' cmdlet gets the content of an item, such as a file or a variable. It can be used to read text files, logs, and other content.",
          "use_cases": ["Reading file content", "Accessing logs"],
          "additional_examples": [
            "Get-Content -Path 'C:\\temp\\logfile.log'",
            "Get-Content -Path 'C:\\temp\\script.ps1'"
          ]
        },
        "meta": {
          "title": "PowerShell Get-Content Cmdlet",
          "description": "Learn how to use the 'Get-Content' cmdlet in PowerShell to get the content of items such as files and variables.",
          "keywords": "powershell, Get-Content, cmdlet, read file"
        }
      },
      {
        "name": "Set-Content",
        "description": "Writes or replaces the content in an item, such as a file.",
        "example": "Set-Content -Path 'C:\\temp\\file.txt' -Value 'Hello, World!'",
        "details": {
          "how_it_works": "The 'Set-Content' cmdlet writes or replaces the content in an item, such as a file. It can be used to write text to files and logs.",
          "use_cases": ["Writing file content", "Creating text files"],
          "additional_examples": [
            "Set-Content -Path 'C:\\temp\\logfile.log' -Value 'Log entry'",
            "Set-Content -Path 'C:\\temp\\script.ps1' -Value 'Write-Host \"Hello, World!\"'"
          ]
        },
        "meta": {
          "title": "PowerShell Set-Content Cmdlet",
          "description": "Learn how to use the 'Set-Content' cmdlet in PowerShell to write or replace the content in items such as files.",
          "keywords": "powershell, Set-Content, cmdlet, write file"
        }
      },
      {
        "name": "Add-Content",
        "description": "Appends content to an item, such as a file.",
        "example": "Add-Content -Path 'C:\\temp\\file.txt' -Value 'Append this text'",
        "details": {
          "how_it_works": "The 'Add-Content' cmdlet appends content to an item, such as a file. It can be used to add text to files and logs without overwriting the existing content.",
          "use_cases": ["Appending file content", "Adding entries to logs"],
          "additional_examples": [
            "Add-Content -Path 'C:\\temp\\logfile.log' -Value 'Another log entry'",
            "Add-Content -Path 'C:\\temp\\script.ps1' -Value 'Write-Host \"Goodbye, World!\"'"
          ]
        },
        "meta": {
          "title": "PowerShell Add-Content Cmdlet",
          "description": "Learn how to use the 'Add-Content' cmdlet in PowerShell to append content to items such as files.",
          "keywords": "powershell, Add-Content, cmdlet, append file"
        }
      },
      {
        "name": "Clear-Content",
        "description": "Deletes the content of an item, such as a file, but does not delete the item.",
        "example": "Clear-Content -Path 'C:\\temp\\file.txt'",
        "details": {
          "how_it_works": "The 'Clear-Content' cmdlet deletes the content of an item, such as a file, but does not delete the item itself. It can be used to clear the content of files and logs.",
          "use_cases": ["Clearing file content", "Emptying logs"],
          "additional_examples": [
            "Clear-Content -Path 'C:\\temp\\logfile.log'",
            "Clear-Content -Path 'C:\\temp\\script.ps1'"
          ]
        },
        "meta": {
          "title": "PowerShell Clear-Content Cmdlet",
          "description": "Learn how to use the 'Clear-Content' cmdlet in PowerShell to delete the content of items such as files without deleting the items.",
          "keywords": "powershell, Clear-Content, cmdlet, clear file"
        }
      },
      {
        "name": "Invoke-Command",
        "description": "Runs commands on local and remote computers.",
        "example": "Invoke-Command -ScriptBlock { Get-Process }",
        "details": {
          "how_it_works": "The 'Invoke-Command' cmdlet runs commands on local and remote computers. It can execute a script block or a script file on one or more remote computers.",
          "use_cases": ["Running remote commands", "Executing scripts on multiple computers"],
          "additional_examples": [
            "Invoke-Command -ComputerName Server01 -ScriptBlock { Get-Service }",
            "Invoke-Command -FilePath 'C:\\temp\\script.ps1'"
          ]
        },
        "meta": {
          "title": "PowerShell Invoke-Command Cmdlet",
          "description": "Learn how to use the 'Invoke-Command' cmdlet in PowerShell to run commands on local and remote computers.",
          "keywords": "powershell, Invoke-Command, cmdlet, remote command"
        }
      }
    ]
  }

  
  module.exports = PowerShellSyntax