#!/bin/bash

# Make the script executable
chmod +x setup-github.sh

# Function to check if GitHub CLI is installed
check_gh_cli() {
    if ! command -v gh &> /dev/null; then
        echo "GitHub CLI is not installed. Please install it first:"
        echo "brew install gh"
        exit 1
    fi
}

# Function to check if user is logged in to GitHub CLI
check_gh_auth() {
    if ! gh auth status &> /dev/null; then
        echo "Please login to GitHub CLI:"
        gh auth login
    fi
}

# Main script
echo "Setting up GitHub repository for FatFrog Kingdom Quest..."

# Check prerequisites
check_gh_cli
check_gh_auth

# Create GitHub repository
echo "Creating GitHub repository..."
gh repo create FatFrog-Kingdom --public --description "FatFrog Kingdom Quest - A Web3 Gaming Ecosystem" --source . --remote origin

# Push code to GitHub
echo "Pushing code to GitHub..."
git push -u origin main

echo "Setup complete! Your repository is now available on GitHub."
echo "Don't forget to:"
echo "1. Set up repository secrets for your environment variables"
echo "2. Enable GitHub Actions if you want to use CI/CD"
echo "3. Configure branch protection rules"
