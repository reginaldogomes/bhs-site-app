#!/bin/bash

# ===== CONFIGURAÇÕES =====
APP_NAME="bhs-app-prod" # Nome da sua Static Web App no Azure
DEPLOYMENT_TOKEN="5a20d92ecb09c6a78f2c4f7a492a0eb52853a206366f6655c675ccf11e415e0101-70821673-3d28-46a6-9591-4dff2540721201e020300c89f61e"
OUTPUT_LOCATION=".output" # Para Next.js SSR, senão use "build" ou "dist"
ENVIRONMENT="production" # ou "preview" se desejar fazer deploy temporário

# ===== EXECUÇÃO =====
echo "🔄 Iniciando build do projeto..."
npm install
npm run build

echo "🚀 Fazendo deploy para Azure Static Web Apps..."
swa deploy \
  --app-name $APP_NAME \
  --deployment-token $DEPLOYMENT_TOKEN \
  --output-location $OUTPUT_LOCATION \
  --env $ENVIRONMENT

echo "✅ Deploy finalizado."
