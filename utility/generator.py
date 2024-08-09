import csv

csv_file_path = 'worldcitiesless.csv' 
js_file_path = 'data.js'
log_file_path = 'errors.log'

def safe_float(value):
    """
        remove any city that has an erratic/absent population value
    """
    try:
        return float(value) if value else None
    except ValueError:
        return None

with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)
    
    js_content = "const data = [\n"

    # Open log file to write errors
    with open(log_file_path, 'w', encoding='utf-8') as log_file:
        for row in reader:
            """
            escape double quotes in city and country names
            """
            city = row['city'].replace('"', '\\"')
            country = row['country'].replace('"', '\\"') 
            lat = row['lat']
            lng = row['lng']
            population = safe_float(row['population']) 
            
            if population is None:
                log_file.write(f"Problematic entry: {row}\n")
                continue

            if population >= 300000:
                """
                add each city with a population greater than 300,000
                """
                js_content += f"  {{ city: \"{city}\", country: \"{country}\", lat: {lat}, lng: {lng} }},\n"

    js_content += "];\n\nexport default data;\n"

with open(js_file_path, 'w', encoding='utf-8') as jsfile:
    jsfile.write(js_content)

print(f"Data has been successfully written to {js_file_path}")
print(f"Problematic entries have been logged to {log_file_path}")
