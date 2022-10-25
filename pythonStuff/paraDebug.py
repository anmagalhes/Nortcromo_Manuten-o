import json

def main():
    jsonFile = open("package.json", "r") # Open the JSON file for reading
    data = json.load(jsonFile) # Read the JSON into the buffer
    jsonFile.close() # Close the JSON file

    ## Working with buffered content
    data["homepage"] = "/"

    ## Save our changes to JSON file
    jsonFile = open("package.json", "w+")
    jsonFile.write(json.dumps(data))
    jsonFile.close()

main()