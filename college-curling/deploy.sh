#!/bin/bash

# Generate Website
echo "Updating dependencies..."
sudo npm ci

echo "Generating site..."
sudo npm build

#Copy to server root
echo "Moving to server root.."
sudo cp -r public /var/www/

#Restart apache server
echo "Restarting server..."
sudo systemctl restart apache2

echo "Complete!"
