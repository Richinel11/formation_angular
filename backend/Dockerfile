# Étape 1 : Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Copie le fichier csproj et restaure les dépendances
COPY *.csproj ./
RUN dotnet restore

# Copie le reste du code et publie
COPY . ./
RUN dotnet publish -c Release -o out

# Étape 2 : Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/out .

# Expose le port HTTP standard
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080

# Démarre ton application
ENTRYPOINT ["dotnet", "backend.dll"]
