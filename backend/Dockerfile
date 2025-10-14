# Étape 1 : Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copier le csproj et restaurer les dépendances
COPY *.csproj ./
RUN dotnet restore

# Copier le reste et publier
COPY . ./
RUN dotnet publish -c Release -o out

# Étape 2 : Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Port utilisé par Render
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Indique à EF Core où trouver la BDD (via variables Render)
ENV ConnectionStrings__DefaultConnection="server=${DB_HOST};port=3306;database=${DB_NAME};user=${DB_USER};password=${DB_PASSWORD}"

ENTRYPOINT ["dotnet", "backend.dll"]
