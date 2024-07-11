const BatchSyntax = {
    "methods": [
      {
        "name": "echo",
        "usage": "echo message",
        "example": ":: Display a message\necho Hello, world!",
        "description": "Prints a message to the console."
      },
      {
        "name": "pause",
        "usage": "pause",
        "example": ":: Pause execution until a key is pressed\npause",
        "description": "Pauses execution of a batch file until a key is pressed."
      },
      {
        "name": "cd",
        "usage": "cd directory_path",
        "example": ":: Change directory\ncd C:\\Path\\To\\Directory",
        "description": "Changes the current working directory."
      },
      {
        "name": "dir",
        "usage": "dir [path]",
        "example": ":: List files in the current directory\nDIR",
        "description": "Lists the files and directories in the current directory or the specified directory."
      },
      {
        "name": "copy",
        "usage": "copy source_file destination_file",
        "example": ":: Copy a file\ncopy file1.txt file2.txt",
        "description": "Copies a file from the source location to the destination location."
      },
      {
        "name": "move",
        "usage": "move source_file destination_file",
        "example": ":: Move a file\nmove file1.txt C:\\New\\Location\\file1.txt",
        "description": "Moves a file from the source location to the destination location."
      }
    ],
    "functions": [],
    "properties": [],
    "batchFileSyntax": [
      {
        "name": "ECHO",
        "description": "Displays messages, or turns command echoing on or off.",
        "example": "ECHO Hello, World!",
        "details": {
          "how_it_works": "The 'ECHO' command can be used to display messages to the user or to control the command echoing. Using 'ECHO ON' or 'ECHO OFF' will turn command echoing on or off respectively.",
          "use_cases": ["Displaying messages", "Controlling command echoing"],
          "additional_examples": [
            "ECHO OFF",
            "ECHO This is a message"
          ]
        },
        "meta": {
          "title": "Batch File ECHO Command",
          "description": "Learn how to use the 'ECHO' command in batch files to display messages or control command echoing.",
          "keywords": "batch file, ECHO, command, display message"
        }
      },
      {
        "name": "REM",
        "description": "Inserts a comment line in the batch file.",
        "example": "REM This is a comment",
        "details": {
          "how_it_works": "The 'REM' command is used to insert comments into a batch file. Comments are ignored by the command processor.",
          "use_cases": ["Adding comments", "Documenting batch files"],
          "additional_examples": [
            "REM Start of the script",
            "REM This line does nothing"
          ]
        },
        "meta": {
          "title": "Batch File REM Command",
          "description": "Learn how to use the 'REM' command in batch files to insert comments.",
          "keywords": "batch file, REM, command, comment"
        }
      },
      {
        "name": "SET",
        "description": "Displays, sets, or removes environment variables.",
        "example": "SET VAR_NAME=VALUE",
        "details": {
          "how_it_works": "The 'SET' command is used to display, set, or remove environment variables. The syntax 'SET VAR_NAME=VALUE' sets a variable, and 'SET VAR_NAME=' removes it.",
          "use_cases": ["Managing environment variables", "Setting and removing variables"],
          "additional_examples": [
            "SET PATH=C:\\Windows",
            "SET /P VAR_NAME=Enter a value: "
          ]
        },
        "meta": {
          "title": "Batch File SET Command",
          "description": "Learn how to use the 'SET' command in batch files to manage environment variables.",
          "keywords": "batch file, SET, command, environment variable"
        }
      },
      {
        "name": "IF",
        "description": "Performs conditional processing in batch programs.",
        "example": "IF EXIST filename ECHO File exists",
        "details": {
          "how_it_works": "The 'IF' command is used for conditional processing. It can check for the existence of files, compare strings, or evaluate conditions using 'IF EXIST', 'IF NOT EXIST', 'IF /I', and 'IF ERRORLEVEL'.",
          "use_cases": ["Conditional processing", "Checking file existence", "Comparing strings"],
          "additional_examples": [
            "IF /I \"%1\"==\"Y\" ECHO Yes",
            "IF ERRORLEVEL 1 ECHO Error occurred"
          ]
        },
        "meta": {
          "title": "Batch File IF Command",
          "description": "Learn how to use the 'IF' command in batch files for conditional processing.",
          "keywords": "batch file, IF, command, conditional processing"
        }
      },
      {
        "name": "GOTO",
        "description": "Directs batch processing to a labeled line.",
        "example": "GOTO label",
        "details": {
          "how_it_works": "The 'GOTO' command directs the batch file to jump to a line with a specified label. Labels are defined by preceding a word with a colon, like ':label'.",
          "use_cases": ["Jumping to labeled lines", "Controlling script flow"],
          "additional_examples": [
            "GOTO END",
            ":END",
            "GOTO START"
          ]
        },
        "meta": {
          "title": "Batch File GOTO Command",
          "description": "Learn how to use the 'GOTO' command in batch files to direct processing to a labeled line.",
          "keywords": "batch file, GOTO, command, labeled line"
        }
      },
      {
        "name": "CALL",
        "description": "Calls one batch program from another.",
        "example": "CALL secondbatch.bat",
        "details": {
          "how_it_works": "The 'CALL' command is used to call another batch program from within a batch program. This allows for modular scripting.",
          "use_cases": ["Calling other batch files", "Modular scripting"],
          "additional_examples": [
            "CALL :mySubRoutine",
            "CALL setvars.bat"
          ]
        },
        "meta": {
          "title": "Batch File CALL Command",
          "description": "Learn how to use the 'CALL' command in batch files to call one batch program from another.",
          "keywords": "batch file, CALL, command, modular scripting"
        }
      },
      {
        "name": "PAUSE",
        "description": "Suspends processing of a batch program and displays a message.",
        "example": "PAUSE",
        "details": {
          "how_it_works": "The 'PAUSE' command suspends the execution of a batch file and displays the message 'Press any key to continue...'.",
          "use_cases": ["Suspending batch file execution", "Prompting user to continue"],
          "additional_examples": [
            "ECHO Press any key to continue...",
            "PAUSE >nul"
          ]
        },
        "meta": {
          "title": "Batch File PAUSE Command",
          "description": "Learn how to use the 'PAUSE' command in batch files to suspend processing and display a message.",
          "keywords": "batch file, PAUSE, command, suspend execution"
        }
      },
      {
        "name": "EXIT",
        "description": "Quits the CMD.EXE program (command interpreter) or the current batch script.",
        "example": "EXIT",
        "details": {
          "how_it_works": "The 'EXIT' command quits the CMD.EXE program or the current batch script. It can be used with a numeric parameter to set a specific exit code.",
          "use_cases": ["Exiting batch files", "Setting exit codes"],
          "additional_examples": [
            "EXIT /B 1",
            "EXIT 0"
          ]
        },
        "meta": {
          "title": "Batch File EXIT Command",
          "description": "Learn how to use the 'EXIT' command in batch files to quit the command interpreter or the current batch script.",
          "keywords": "batch file, EXIT, command, quit"
        }
      },
      {
        "name": "START",
        "description": "Starts a separate window to run a specified program or command.",
        "example": "START notepad.exe",
        "details": {
          "how_it_works": "The 'START' command is used to start a separate window to run a specified program or command.",
          "use_cases": ["Running programs", "Executing commands in new windows"],
          "additional_examples": [
            "START /MIN calc.exe",
            "START /WAIT notepad.exe"
          ]
        },
        "meta": {
          "title": "Batch File START Command",
          "description": "Learn how to use the 'START' command in batch files to run programs or commands in separate windows.",
          "keywords": "batch file, START, command, run program"
        }
      },
      {
        "name": "FOR",
        "description": "Runs a specified command for each file in a set of files.",
        "example": "FOR %%f IN (*.txt) DO ECHO %%f",
        "details": {
          "how_it_works": "The 'FOR' command runs a specified command for each file in a set of files. It can also be used to loop through a range of values or a list of items.",
          "use_cases": ["Looping through files", "Iterating over values"],
          "additional_examples": [
            "FOR /L %%i IN (1,1,10) DO ECHO %%i",
            "FOR /R %%d IN (*) DO ECHO %%d"
          ]
        },
        "meta": {
          "title": "Batch File FOR Command",
          "description": "Learn how to use the 'FOR' command in batch files to run commands for each file in a set of files.",
          "keywords": "batch file, FOR, command, loop"
        }
      },
      {
        "name": "SHIFT",
        "description": "Shifts the position of replaceable parameters in a batch file.",
        "example": "SHIFT",
        "details": {
          "how_it_works": "The 'SHIFT' command shifts the position of replaceable parameters in a batch file, allowing access to additional command-line arguments beyond the standard limit.",
          "use_cases": ["Accessing additional command-line arguments", "Managing script parameters"],
          "additional_examples": [
            "SHIFT /n",
            "SHIFT"
          ]
        },
        "meta": {
          "title": "Batch File SHIFT Command",
          "description": "Learn how to use the 'SHIFT' command in batch files to shift the position of replaceable parameters.",
          "keywords": "batch file, SHIFT, command, parameters"
        }
      },
      {
        "name": "LABEL",
        "description": "Creates, changes, or deletes the volume label of a disk.",
        "example": "LABEL C: MyVolume",
        "details": {
          "how_it_works": "The 'LABEL' command creates, changes, or deletes the volume label of a disk.",
          "use_cases": ["Managing disk labels", "Renaming volumes"],
          "additional_examples": [
            "LABEL D: Backup",
            "LABEL C:"
          ]
        },
        "meta": {
          "title": "Batch File LABEL Command",
          "description": "Learn how to use the 'LABEL' command in batch files to manage disk volume labels.",
          "keywords": "batch file, LABEL, command, volume"
        }
      },
      {
        "name": "MKDIR",
        "description": "Creates a new directory.",
        "example": "MKDIR new_directory",
        "details": {
          "how_it_works": "The 'MKDIR' command creates a new directory with the specified name.",
          "use_cases": ["Creating directories", "Organizing files"],
          "additional_examples": [
            "MKDIR /p new_directory",
            "MKDIR parent_directory\\new_directory"
          ]
        },
        "meta": {
          "title": "Batch File MKDIR Command",
          "description": "Learn how to use the 'MKDIR' command in batch files to create new directories.",
          "keywords": "batch file, MKDIR, command, directory"
        }
      },
      {
        "name": "RMDIR",
        "description": "Removes a directory.",
        "example": "RMDIR old_directory",
        "details": {
          "how_it_works": "The 'RMDIR' command removes a directory with the specified name.",
          "use_cases": ["Removing directories", "Deleting folders"],
          "additional_examples": [
            "RMDIR /s /q old_directory",
            "RMDIR parent_directory\\old_directory"
          ]
        },
        "meta": {
          "title": "Batch File RMDIR Command",
          "description": "Learn how to use the 'RMDIR' command in batch files to remove directories.",
          "keywords": "batch file, RMDIR, command, remove directory"
        }
      },
      {
        "name": "DEL",
        "description": "Deletes one or more files.",
        "example": "DEL file.txt",
        "details": {
          "how_it_works": "The 'DEL' command deletes one or more files with the specified name(s).",
          "use_cases": ["Deleting files", "Removing unwanted files"],
          "additional_examples": [
            "DEL /F /Q *.tmp",
            "DEL file1.txt file2.txt"
          ]
        },
        "meta": {
          "title": "Batch File DEL Command",
          "description": "Learn how to use the 'DEL' command in batch files to delete files.",
          "keywords": "batch file, DEL, command, delete files"
        }
      },
      {
        "name": "COPY",
        "description": "Copies one or more files to another location.",
        "example": "COPY source.txt destination.txt",
        "details": {
          "how_it_works": "The 'COPY' command copies one or more files from the source location to the destination location.",
          "use_cases": ["Copying files", "Creating file backups"],
          "additional_examples": [
            "COPY *.txt backup\\",
            "COPY file1.txt + file2.txt combined.txt"
          ]
        },
        "meta": {
          "title": "Batch File COPY Command",
          "description": "Learn how to use the 'COPY' command in batch files to copy files.",
          "keywords": "batch file, COPY, command, copy files"
        }
      },
      {
        "name": "XCOPY",
        "description": "Copies files and directory trees.",
        "example": "XCOPY source_directory destination_directory /E",
        "details": {
          "how_it_works": "The 'XCOPY' command copies files and directory trees from the source location to the destination location.",
          "use_cases": ["Copying directories", "Creating directory backups"],
          "additional_examples": [
            "XCOPY C:\\source D:\\destination /S /E",
            "XCOPY files\\*.txt backup\\ /Y"
          ]
        },
        "meta": {
          "title": "Batch File XCOPY Command",
          "description": "Learn how to use the 'XCOPY' command in batch files to copy files and directory trees.",
          "keywords": "batch file, XCOPY, command, copy directories"
        }
      },
      {
        "name": "MOVE",
        "description": "Moves one or more files from one directory to another.",
        "example": "MOVE source.txt destination.txt",
        "details": {
          "how_it_works": "The 'MOVE' command moves one or more files from the source location to the destination location.",
          "use_cases": ["Moving files", "Organizing file locations"],
          "additional_examples": [
            "MOVE *.txt backup\\",
            "MOVE file1.txt file2.txt new_location\\"
          ]
        },
        "meta": {
          "title": "Batch File MOVE Command",
          "description": "Learn how to use the 'MOVE' command in batch files to move files.",
          "keywords": "batch file, MOVE, command, move files"
        }
      },
      {
        "name": "TITLE",
        "description": "Sets the window title for the CMD.EXE window.",
        "example": "TITLE My Batch Script",
        "details": {
          "how_it_works": "The 'TITLE' command sets the window title for the CMD.EXE window to the specified text.",
          "use_cases": ["Customizing command prompt window title", "Improving script clarity"],
          "additional_examples": [
            "TITLE Backup Script",
            "TITLE Processing Data"
          ]
        },
        "meta": {
          "title": "Batch File TITLE Command",
          "description": "Learn how to use the 'TITLE' command in batch files to set the window title for the CMD.EXE window.",
          "keywords": "batch file, TITLE, command, window title"
        }
      },
      {
        "name": "PUSHD",
        "description": "Saves the current directory and changes to the specified directory.",
        "example": "PUSHD C:\\new_directory",
        "details": {
          "how_it_works": "The 'PUSHD' command saves the current directory to a stack and changes the current directory to the specified directory.",
          "use_cases": ["Changing directories", "Saving current directory"],
          "additional_examples": [
            "PUSHD D:\\projects",
            "PUSHD .."
          ]
        },
        "meta": {
          "title": "Batch File PUSHD Command",
          "description": "Learn how to use the 'PUSHD' command in batch files to save the current directory and change to a new one.",
          "keywords": "batch file, PUSHD, command, change directory"
        }
      },
      {
        "name": "POPD",
        "description": "Restores the previous directory saved by the PUSHD command.",
        "example": "POPD",
        "details": {
          "how_it_works": "The 'POPD' command restores the previous directory saved by the 'PUSHD' command.",
          "use_cases": ["Restoring previous directory", "Managing directory stack"],
          "additional_examples": [
            "POPD",
            "POPD"
          ]
        },
        "meta": {
          "title": "Batch File POPD Command",
          "description": "Learn how to use the 'POPD' command in batch files to restore the previous directory saved by the 'PUSHD' command.",
          "keywords": "batch file, POPD, command, restore directory"
        }
      }
    ]
  }

  
  module.exports = BatchSyntax;