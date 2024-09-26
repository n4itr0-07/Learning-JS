#!/bin/bash
# The shebang tells the system that this script should be run with Bash

# Prompt the user to enter a file name
echo "Enter the file name:"
read filename  # Read the input from the user and store it in the variable 'filename'

# Check if the file exists
if [ -f "$filename" ]; then
    # If the file exists, count the number of lines and display the result
    line_count=$(wc -l < "$filename")  # Use 'wc -l' to count lines, and store it in the variable 'line_count'
    echo "The file '$filename' has $line_count lines."  # Display the line count
else
    # If the file does not exist, display an error message
    echo "File '$filename' does not exist."  # Inform the user that the file was not found
fi
