import json
import os
import sys
from datetime import datetime

def update_artists_index(submission_data):
    # Load existing artists.json
    try:
        with open('artists.json', 'r') as f:
            data = json.load(f)
    except FileNotFoundError:
        data = {"artists": []}
    
    # Create new artist entry
    new_artist = {
        "name": submission_data.get("fullName"),
        "category": submission_data.get("category"),
        "portfolio": submission_data.get("portfolioUrl"),
        "statement": submission_data.get("artistStatement", ""),
        "dateAdded": datetime.now().strftime("%Y-%m-%d")
    }
    
    # Add to artists list
    data["artists"].append(new_artist)
    
    # Save updated file
    with open('artists.json', 'w') as f:
        json.dump(data, f, indent=2)

if __name__ == "__main__":
    # Get submission data from environment variable
    submission_data = json.loads(os.environ.get("SUBMISSION_DATA", "{}"))
    update_artists_index(submission_data)
