import csv

csv_file_path = 'worldcities.csv' 
js_file_path = 'data.js'

with open(csv_file_path, newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile)

    js_content = "const data = [\n"

    for row in reader:
        city = row['city']
        country = row['country']
        lat = row['lat']
        lng = row['lng']
        
        js_content += f"  {{ city: '{city}', country: '{country}', lat: {lat}, lng: {lng} }},\n"

    js_content += "];\n\nexport default data;\n"

with open(js_file_path, 'w', encoding='utf-8') as jsfile:
    jsfile.write(js_content)

print(f"Data has been successfully written to {js_file_path}")
