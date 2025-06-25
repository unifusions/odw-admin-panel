# Use a Debian-based image that includes Node.js, suitable for both PHP and JS
FROM mcr.microsoft.com/devcontainers/universal:2

# [Optional] Install PHP and common extensions for PHP 8.2
USER root
RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends software-properties-common ca-certificates apt-transport-https \
    && add-apt-repository ppa:ondrej/php \
    && apt-get update \
    && apt-get -y install --no-install-recommends \
        php8.2-cli \
        php8.2-common \
        php8.2-mysql \
        php8.2-mbstring \
        php8.2-xml \
        php8.2-zip \
        php8.2-curl \
        php8.2-bcmath \
        php8.2-tokenizer \
        php8.2-gd \
        php8.2-fpm \
        php8.2-pdo \
        # ^^^ Ensure php8.2-pdo and php8.2-mysql are explicitly listed
        git unzip curl libpng-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer

# Set permissions for the codespace user (vscode)
USER vscode
