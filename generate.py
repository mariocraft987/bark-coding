import os
import json

#this script is so obviously ai generated kill me

# Function to list all files in the 'pages' folder and generate rewrite rules
def generate_rewrites(pages_folder):
    rewrites = []
    for root, dirs, files in os.walk(pages_folder):
        for file in files:
            # Get the relative path of the file
            relative_path = os.path.relpath(os.path.join(root, file), pages_folder)
            # Remove the file extension to get the URL path
            url_path = os.path.splitext(relative_path)[0]
            # Normalize path for URLs (replace backslashes with forward slashes)
            url_path = url_path.replace(os.sep, '/')
            # Add leading slash
            url_path = '/' + url_path
            #create rewrite rule, but have a custom thing for generate
            if relative_path == "generate.html":
                rewrite = {
                    "source": "/ideas/generate",
                    "destination": f"/pages/{relative_path}"
                }
            else:
                rewrite = {
                    "source": url_path,
                    "destination": f"/pages/{relative_path}"
                }
            rewrites.append(rewrite)
    return rewrites

# Function to generate vercel.json file
def generate_vercel_json(pages_folder, output_file='vercel.json'):
    rewrites = generate_rewrites(pages_folder)
    vercel_config = {
        "rewrites": rewrites
    }
    # Write the configuration to vercel.json
    with open(output_file, 'w') as f:
        json.dump(vercel_config, f, indent=2)

# Specify the pages folder and output file
pages_folder = 'pages'
output_file = 'vercel.json'

# Generate the vercel.json file
generate_vercel_json(pages_folder, output_file)
print(f'{output_file} has been generated successfully.')
