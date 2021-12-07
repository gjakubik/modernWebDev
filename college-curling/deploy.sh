#!/bin/bash

# Generate Website
echo "Updating dependencies..."
sudo npm ci

echo "Generating site..."
sudo npm run build

echo "Removing old site..."
sudo rm -rf /var/www/build

#Copy to server root
echo "Moving to server root.."
sudo cp -r build /var/www/

#Restart apache server
echo "Restarting server..."
sudo systemctl restart apache2

echo "Complete!"
