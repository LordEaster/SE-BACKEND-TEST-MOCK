import requests
import json
import yaml
import os

# Define the Piston API endpoint
api_url = "https://emkc.org/api/v2/piston/execute"

# Step 1: Read the input data from inputoutput.yaml
with open('checker/testset.yaml', 'r') as yaml_file:
    yaml_data = yaml.safe_load(yaml_file)
    problems = yaml_data['problems']

# Step 2: Loop through each problem and execute the corresponding JavaScript file
for problem in problems:
    problem_name = problem['name']
    input_data = problem['input']
    expected_output = problem['expected_output']
    script_path = problem['script']

    # Step 3: Ensure the script file exists before proceeding
    if not os.path.exists(script_path):
        print(f"Script file for {problem_name} not found: {script_path}")
        continue

    # Step 4: Read the JavaScript code from the specified file
    with open(script_path, 'r') as js_file:
        js_code = js_file.read()

    # Step 5: Prepare the payload for the API request
    payload = {
        "language": "javascript",
        "version": "18.15.0",
        "files": [{
            "name": os.path.basename(script_path),
            "content": js_code
        }],
        "stdin": json.dumps(input_data)  # Send input data as JSON string
    }

    # Step 6: Send the POST request to the Piston API
    print(f"Executing {problem_name}...")
    response = requests.post(api_url, json=payload)

    # Step 7: Check if the request was successful and process the result
    if response.status_code == 200:
        result = response.json()
        actual_output = result['run']['stdout']
        error_output = result['run']['stderr']

        # Step 8: Compare the actual output with the expected output
        if actual_output == expected_output:
            print(f"{problem_name} : Passed [✅]")
        else:
            print(f"{problem_name} : Failed [❌]")
            print(f"  Expected: {expected_output}")
            print(f"  Got: {actual_output}")
        
        # Print any error if present
        if error_output:
            print(f"Error for {problem_name}: {error_output}")
    else:
        print(f"Failed to execute {problem_name}. Status code: {response.status_code}")

    print()  # Add a newline for readability between problems