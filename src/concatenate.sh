#!/bin/bash

# List of files to concatenate
files=("App.js" "Home.js" "Post.js" "Footer.js")

# Output file
output="Together.js"

# Clear the output file if it already exists
> $output

# Loop through the array and concatenate each file
for file in "${files[@]}"; do
  if [ -e "$file" ]; then
    cat "$file" >> "$output"
    echo -e "\n" >> "$output"
  else
    echo "Warning: $file does not exist and will be skipped."
  fi
done

echo "Concatenation complete. Output in $output"
