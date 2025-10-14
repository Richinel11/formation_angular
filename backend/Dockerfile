# Étape 1 : Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /app

# Copier csproj et restaurer les dépendances
COPY *.csproj .
RUN dotnet restore

# Copier le reste du projet et publier
COPY . .
RUN dotnet publish -c Release -o out

# Étape 2 : Runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/out .

# Définir la variable d'environnement pour la connection string
# Vous pouvez aussi la passer via docker-compose ou secrets
ENV ConnectionStrings__DefaultConnection="Host=postgres;Port=5432;Database=productmanage;Username=monuser;Password=monpassword;SSL Mode=Require;Trust Server Certificate=true"

EXPOSE 5167
ENTRYPOINT ["dotnet", "backend.dll"]
