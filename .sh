#!/bin/bash

# Activate the conda environment
conda activate myenv

# Start the vLLM server in the background
python -m vllm.entrypoints.openai.api_server --model /Hard_Disk-2/coe_codestral --gpu-memory-utilization 1 --max-model-len 10000 --port 5555 --chat-template /Hard_Disk-2/coe_codestral/chat_template.jinja &

# Wait for the server to start
sleep 5

# Check the server status
if curl -X POST http://localhost:5555/health; then
    echo "Server is running"
    # Run your Python script
    python your_script.py
    echo "Python script is running"
else
    echo "Server is not running"
    # Exit the script
    exit 1
fi

# Exit the script
exit 0