# Use a specific PHP base image from devcontainers/php
# This image includes PHP (you can specify version, e.g., 8.2), Node.js, and common extensions.
# See available versions: https://github.com/devcontainers/features/tree/main/src/php
FROM mcr.microsoft.com/devcontainers/php:8.2-bullseye

# The base image (php:8.2-bullseye) usually comes with common extensions like pdo_mysql, mbstring, xml already.
# We'll install any missing ones Laravel requires or other dev tools.

USER root
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends \
        git unzip curl libpng-dev \
        # Add any other specific PHP extensions needed by Laravel that aren't included by default
        # Example: gd is often used for image manipulation
        # && docker-php-ext-install gd \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Set permissions for the codespace user (vscode)
USER vscode
